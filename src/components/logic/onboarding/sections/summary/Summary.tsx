import React from 'react';
import { Section } from '../Section';
import { Button } from '../../../../ui/Button/Button';
import { useOnboarding } from '../../../../../contexts/onboarding/useOnboarding';
import { capitalize } from '../../../../../utils/string';

export interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = () => {
	const {
		state: {
			sections: {
				selectPlan: {
					selectedPeriod,
					selectedPlan: selectedPlanName,
					availablePlans,
				},
				addOns: { addOns: availableAddOns },
			},
		},
		actions: {
			summary: { onSubmit },
			goBack,
			gotoStep,
		},
	} = useOnboarding();
	const selectedPlan = availablePlans.find(
		(plan) => plan.name === selectedPlanName
	);
	const isYearly = selectedPeriod === 'yearly';
	const planPrice = isYearly
		? selectedPlan?.yearlyPrice
		: selectedPlan?.monthlyPrice;

	const selectedAddOns = availableAddOns.filter((addOn) => addOn.isPicked);

	let totalPrice = planPrice || 0;
	for (const addOn of selectedAddOns) {
		totalPrice += isYearly ? addOn.yearlyPrice : addOn.monthlyPrice;
	}
	return (
		<Section
			className='Summary'
			title='Finishing up'
			description='Double-check everything looks OK before confirming.'
		>
			<div className='content'>
				<div className='plan-details'>
					<div className='plan-info'>
						<p className='plan-name'>
							{capitalize(selectedPlan?.name || '')} (
							{isYearly ? 'Yearly' : 'Monthly'})
						</p>
						<button onClick={() => gotoStep(2)}>Change</button>
					</div>
					<p className='plan-price'>{`$${planPrice}/${
						isYearly ? 'yr' : 'mo'
					}`}</p>
				</div>
				<hr />
				<div className='add-ons'>
					{selectedAddOns.map((addOn) => (
						<div className='add-on' key={addOn.name}>
							<span className='name'>{addOn.name}</span>
							<span className='price'>{`+$${
								isYearly ? addOn.yearlyPrice : addOn.monthlyPrice
							}/${isYearly ? 'yr' : 'mo'}`}</span>
						</div>
					))}
					{selectedAddOns.length === 0 && (
						<p className='no-add-ons'>
							No add-ons selected. Click{' '}
							<button onClick={() => gotoStep(3)}>here</button> to select some.
						</p>
					)}
				</div>
			</div>
			<div className='total'>
				<p className='label'>Total (per {isYearly ? 'year' : 'month'})</p>
				<p className='price'>{`$${totalPrice}/${isYearly ? 'yr' : 'mo'}`}</p>
			</div>
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
