import React from 'react';
import { Section } from '../Section';
import { Button } from '../../../../ui/Button/Button';
import { useOnboarding } from '../../../../../contexts/onboarding/useOnboarding';

export interface AddOnsProps {}

export const AddOns: React.FC<AddOnsProps> = () => {
	const {
		state: {
			sections: {
				addOns: { addOns },
				selectPlan: { selectedPeriod },
			},
		},
		actions: {
			addOns: { onSubmit, onChange: onAddOnChange },
			goBack,
		},
	} = useOnboarding();
	return (
		<Section
			className='AddOns'
			title='Pick add-ons'
			description='Add-ons help enhance you gaming experience.'
		>
			<form>
				<div className='form-control checkbox-control'>
					{addOns.map((addOn) => {
						const { isPicked } = addOn;
						const isYearly = selectedPeriod === 'yearly';
						const addOnPrice = isYearly
							? addOn.yearlyPrice
							: addOn.monthlyPrice;
						const periodUnit = isYearly ? 'yr' : 'mo';
						return (
							<label
								key={addOn.name}
								className={`add-on ${isPicked ? 'picked' : ''}`}
							>
								<input
									type='checkbox'
									checked={isPicked}
									onChange={() => onAddOnChange(addOn.name)}
								/>
								<div className='checkbox'>
									{isPicked && <img src='icon-checkmark.svg' alt='Selected' />}
								</div>
								<div className='info'>
									<p className='title'>{addOn.name}</p>
									<p className='description'>{addOn.description}</p>
								</div>
								<p className='price'>{`+$${addOnPrice}/${periodUnit}`}</p>
							</label>
						);
					})}
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
