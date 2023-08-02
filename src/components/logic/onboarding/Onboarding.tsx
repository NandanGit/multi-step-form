import React from 'react';
import { Sidebar } from './sidebar/Sidebar';
import { PersonalInfo } from './sections/personal-info/PersonalInfo';
import { AddOns } from './sections/add-ons/AddOns';
import { SelectPlan } from './sections/select-plan/SelectPlan';
import { useOnboarding } from '../../../contexts/onboarding/useOnboarding';
import { Summary } from './sections/summary/Summary';

export interface OnboardingProps {}

export const Onboarding: React.FC<OnboardingProps> = () => {
	const { activeStep } = useOnboarding();
	return (
		<div className='Onboarding'>
			<Sidebar />
			{
				[<PersonalInfo />, <SelectPlan />, <AddOns />, <Summary />][
					(activeStep?.step || 1) - 1
				]
			}
		</div>
	);
};
