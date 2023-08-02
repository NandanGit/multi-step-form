import React from 'react';
import { Section } from '../Section';
import { Button } from '../../../../ui/Button/Button';
import { useOnboarding } from '../../../../../contexts/onboarding/useOnboarding';

export interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = () => {
	const {
		actions: {
			summary: { goBack, onSubmit },
		},
	} = useOnboarding();
	return (
		<Section
			className='Summary'
			title='Finishing up'
			description='Double-check everything looks OK before confirming.'
		>
			<div className='actions last-step'>
				<Button className='back-button' variant='minimal' onClick={goBack}>
					Go Back
				</Button>
				<Button className='next-button' onClick={onSubmit}>
					Confirm
				</Button>
			</div>
		</Section>
	);
};
