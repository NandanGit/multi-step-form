import React, { createContext, useState } from 'react';
import { AddOn, IOnboardingContext, PlanPeriod, PlanType } from './types';
import { SidebarStep } from '../../components/logic/onboarding/sidebar/Sidebar.types';
import { isValidEmail } from '../../utils/string';
import {
	defaultSidebarSteps,
	availablePlans,
	availableAddOns,
} from './constants';

export const OnboardingContext = createContext<IOnboardingContext>(
	{} as IOnboardingContext
);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [sidebarSteps, setSidebarSteps] =
		useState<SidebarStep[]>(defaultSidebarSteps);

	const setSidebarStep = (step: number) => {
		setSidebarSteps((prev) => {
			return prev.map((item) => {
				if (item.step === step) {
					return { ...item, isActive: true };
				}
				return { ...item, isActive: false };
			});
		});
	};

	const [personalInfoFields, setPersonalInfoFields] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const [personalInfoErrors, setPersonalInfoErrors] = useState({
		name: '',
		email: '',
		phone: '',
	});

	const [selectedPlan, setSelectedPlan] = useState<PlanType>('arcade');
	const [selectedPeriod, setSelectedPeriod] = useState<PlanPeriod>('monthly');

	const [addOns, setAddOns] = useState<AddOn[]>(availableAddOns);

	// Use a state to track if the user has submitted the form at least once
	const [personalInfoSubmitted, setPersonalInfoSubmitted] = useState(false);

	const changeHandlers = {
		personalInfo: {
			fieldChange: (field: string, value: string) => {
				if (personalInfoSubmitted)
					validators.personalInfo({ ...personalInfoFields, [field]: value });
				setPersonalInfoFields((prev) => ({
					...prev,
					[field]: value,
				}));
			},
		},
		selectPlan: {
			planChange: (plan: PlanType) => {
				setSelectedPlan(plan);
			},
			periodChange: (period: PlanPeriod) => {
				setSelectedPeriod(period);
			},
		},
		addOns: {
			onChange: (addOnName: string) => {
				setAddOns((prev) => {
					return prev.map((item) => {
						if (item.name === addOnName) {
							return { ...item, isPicked: !item.isPicked };
						}
						return item;
					});
				});
			},
		},
	};

	const validators = {
		personalInfo: (fields: { name: string; email: string; phone: string }) => {
			setPersonalInfoErrors({
				name: '',
				email: '',
				phone: '',
			});
			const { name: username, email, phone } = fields;
			let isValid = true;
			if (!username) {
				setPersonalInfoErrors((prev) => ({
					...prev,
					name: 'Name is required',
				}));
				isValid = false;
			}
			if (!email) {
				setPersonalInfoErrors((prev) => ({
					...prev,
					email: 'Email is required',
				}));
				isValid = false;
			} else if (!isValidEmail(email)) {
				setPersonalInfoErrors((prev) => ({
					...prev,
					email: 'Email is invalid',
				}));
				isValid = false;
			}
			if (!phone) {
				setPersonalInfoErrors((prev) => ({
					...prev,
					phone: 'Phone is required',
				}));
				isValid = false;
			}
			return isValid;
		},
	};

	const submitHandlers = {
		personalInfo: () => {
			setPersonalInfoSubmitted(true);
			// Validate fields here
			// If there are errors, set them in the state
			const isValid = validators.personalInfo(personalInfoFields);
			if (!isValid) return console.log('Please fill in the required fields');
			// If there are no errors, go to the next step
			setSidebarStep(2);
		},

		selectPlan: () => {
			// Do something here before going to the next step
			setSidebarStep(3);
		},

		addOns: () => {
			// Do something here before going to the next step
			setSidebarStep(4);
		},

		summary: () => {
			// Do something here before going to the next step
			console.log('You are welcome!');
			setSidebarStep(5);
		},
	};

	const backHandler = () => {
		// Find current step
		const currentStep = sidebarSteps.find((item) => item.isActive);
		setSidebarStep((currentStep?.step || 2) - 1);
	};

	const gotoStep = (step: number) => {
		setSidebarStep(step);
	};

	return (
		<OnboardingContext.Provider
			value={{
				state: {
					sidebarSteps,
					sections: {
						personalInfo: {
							fields: personalInfoFields,
							errors: personalInfoErrors,
						},
						selectPlan: {
							availablePlans,
							selectedPlan,
							selectedPeriod,
						},
						addOns: {
							addOns,
						},
						summary: {},
					},
				},
				actions: {
					personalInfo: {
						onSubmit: submitHandlers.personalInfo,
						onChange: changeHandlers.personalInfo.fieldChange,
					},
					selectPlan: {
						onSubmit: submitHandlers.selectPlan,
						onPlanChange: changeHandlers.selectPlan.planChange,
						onPeriodChange: changeHandlers.selectPlan.periodChange,
					},
					addOns: {
						onSubmit: submitHandlers.addOns,
						onChange: changeHandlers.addOns.onChange,
					},
					summary: {
						onSubmit: submitHandlers.summary,
					},
					goBack: backHandler,
					gotoStep,
				},
			}}
		>
			{children}
		</OnboardingContext.Provider>
	);
};
