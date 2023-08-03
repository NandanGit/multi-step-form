import React from 'react';
import { Sidebar } from './sidebar/Sidebar';
import { PersonalInfo } from './sections/personal-info/PersonalInfo';
import { AddOns } from './sections/add-ons/AddOns';
import { SelectPlan } from './sections/select-plan/SelectPlan';
import { useOnboarding } from '../../../contexts/onboarding/useOnboarding';
import { Summary } from './sections/summary/Summary';
import { ThankYou } from './ThankYou';

export interface OnboardingProps {}

export const Onboarding: React.FC<OnboardingProps> = () => {
	const { activeStep } = useOnboarding();
	return (
		<div className='Onboarding'>
			<Sidebar />
			{activeStep ? (
				[<PersonalInfo />, <SelectPlan />, <AddOns />, <Summary />][
					(activeStep?.step || 1) - 1
					// eslint-disable-next-line no-mixed-spaces-and-tabs
				]
			) : (
				<ThankYou />
			)}
		</div>
	);
};
