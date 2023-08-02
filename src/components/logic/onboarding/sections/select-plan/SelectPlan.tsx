import React from 'react';
import { Section } from '../Section';
import { Button } from '../../../../ui/Button/Button';
import { useOnboarding } from '../../../../../contexts/onboarding/useOnboarding';

export interface SelectPlanProps {}

export const SelectPlan: React.FC<SelectPlanProps> = () => {
	const {
		actions: {
			selectPlan: { goBack, onSubmit },
		},
	} = useOnboarding();
	return (
		<Section
			className='SelectPlan'
			title='Select your plan'
			description='You have the option of monthly or yearly billing'
		>
			<div className='actions'>
				<Button className='back-button' variant='minimal' onClick={goBack}>
					Go Back
				</Button>
				<Button className='next-button' onClick={onSubmit}>
					Next Step
				</Button>
			</div>
		</Section>
	);
};
