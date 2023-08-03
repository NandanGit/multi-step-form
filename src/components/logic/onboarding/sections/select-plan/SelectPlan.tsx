import React from 'react';
import { Section } from '../Section';
import { Button } from '../../../../ui/Button/Button';
import { useOnboarding } from '../../../../../contexts/onboarding/useOnboarding';
import { capitalize } from '../../../../../utils/string';
import { PlanType } from '../../../../../contexts/onboarding/types';
import { Switch } from '../../../../ui/Switch/Switch';

export interface SelectPlanProps {}

export const SelectPlan: React.FC<SelectPlanProps> = () => {
	const {
		state: {
			sections: {
				selectPlan: { availablePlans, selectedPlan, selectedPeriod },
			},
		},
		actions: {
			selectPlan: { onSubmit, onPlanChange, onPeriodChange },
			goBack,
		},
	} = useOnboarding();

	return (
		<Section
			className='SelectPlan'
			title='Select your plan'
			description='You have the option of monthly or yearly billing'
		>
			<form>
				<div className='form-control radio-control'>
					{availablePlans.map((plan) => {
						const isYearly = selectedPeriod === 'yearly';
						const planPrice = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
						const periodUnit = isYearly ? 'yr' : 'mo';
						let offer = '';

						if (isYearly) {
							const monthlyPrice = plan.monthlyPrice;
							const yearlyPrice = plan.yearlyPrice;
							const freeMonths =
								Math.round(
									((monthlyPrice * 12 - yearlyPrice) / monthlyPrice) * 10
								) / 10;
							if (!freeMonths) offer = '';
							else if (freeMonths === 1) offer = '1 month free';
							else offer = `${freeMonths} months free`;
						}

						return (
							<label
								key={plan.name}
								className={selectedPlan === plan.name ? 'selected' : ''}
							>
								<input
									type='radio'
									value={plan.name}
									checked={selectedPlan === plan.name}
									onChange={(e) => {
										onPlanChange(e.target.value as PlanType);
									}}
								/>
								<img
									className='plan-icon'
									src={`icon-${plan.name}.svg`}
									alt={capitalize(plan.name)}
								/>
								<div className='plan-details'>
									<p className='title'>{capitalize(plan.name)}</p>
									<p className='price'>{`$${planPrice}/${periodUnit}`}</p>
									<p className='offer'>{offer}</p>
								</div>
							</label>
						);
					})}
				</div>
				<div className='form-control switch-control'>
					<p className={selectedPeriod === 'monthly' ? 'active' : ''}>
						Monthly
					</p>
					<Switch
						onChange={() =>
							onPeriodChange(
								selectedPeriod === 'monthly' ? 'yearly' : 'monthly'
							)
						}
						isSelected={selectedPeriod === 'yearly'}
						className='plan-period-switch'
					/>
					<p className={selectedPeriod === 'yearly' ? 'active' : ''}>Yearly</p>
				</div>
			</form>
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
