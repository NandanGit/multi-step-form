import React from 'react';
import { Section } from '../Section';
import { Button } from '../../../../ui/Button/Button';
import { useOnboarding } from '../../../../../contexts/onboarding/useOnboarding';

export interface AddOnsProps {}

export const AddOns: React.FC<AddOnsProps> = () => {
	const {
		actions: {
			addOns: { onSubmit },
			goBack,
		},
	} = useOnboarding();
	return (
		<Section
			className='AddOns'
			title='Pick add-ons'
			description='Add-ons help enhance you gaming experience.'
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
