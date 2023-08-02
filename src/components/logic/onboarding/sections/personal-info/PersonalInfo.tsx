import React from 'react';
import { Section } from '../Section';
import { Button } from '../../../../ui/Button/Button';
import { useOnboarding } from '../../../../../contexts/onboarding/useOnboarding';

export interface PersonalInfoProps {}

export const PersonalInfo: React.FC<PersonalInfoProps> = () => {
	const {
		actions: {
			personalInfo: { onSubmit, onChange },
		},
		state: {
			sections: {
				personalInfo: { fields, errors },
			},
		},
	} = useOnboarding();

	const inputs = [
		{
			name: 'name',
			type: 'text',
			placeholder: 'e.g. Stephen King',
			label: 'Name',
		},
		{
			name: 'email',
			type: 'email',
			placeholder: 'e.g. stephenking@lorem.com',
			label: 'Email Address',
		},
		{
			name: 'phone',
			type: 'tel',
			placeholder: 'e.g. +1 234 567 890',
			label: 'Phone Number',
		},
	];

	type Field = 'name' | 'email' | 'phone';

	return (
		<Section
			className='PersonalInfo'
			title='Personal info'
			description='Please provide your name, email address, and phone number.'
		>
			<form>
				{inputs.map((input) => (
					<div
						className={`form-control input-control ${
							errors[input.name as Field] ? 'invalid' : ''
						}`}
					>
						<div className='meta'>
							<label htmlFor={input.name}>{input.label}</label>
							<p className='error'>{errors[input.name as Field]}</p>
						</div>
						<input
							type={input.type}
							id={input.name}
							name={input.name}
							placeholder={input.placeholder}
							value={fields[input.name as Field]}
							onChange={(e) => {
								onChange(e.target.name, e.target.value);
							}}
						/>
					</div>
				))}
				{/* 
				<div
					className={`form-control input-control ${
						errors.name ? 'invalid' : ''
					}`}
				>
					<div className='meta'>
						<label htmlFor='name'>Name</label>
						<p className='error'>{errors.name}</p>
					</div>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='e.g. Stephen King'
						value={fields.name}
						onChange={(e) => {
							onChange(e.target.name, e.target.value);
						}}
					/>
				</div>

				<div
					className={`form-control input-control ${
						errors.email ? 'invalid' : ''
					}`}
				>
					<div className='meta'>
						<label htmlFor='email'>Email Address</label>
						<p className='error'>{errors.email}</p>
					</div>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='e.g. stephenking@lorem.com'
						value={fields.email}
						onChange={(e) => {
							onChange(e.target.name, e.target.value);
						}}
					/>
				</div>

				<div
					className={`form-control input-control ${
						errors.phone ? 'invalid' : ''
					}`}
				>
					<div className='meta'>
						<label htmlFor='phone'>Phone Number</label>
						<p className='error'>{errors.phone}</p>
					</div>
					<input
						type='tel'
						id='phone'
						name='phone'
						placeholder='e.g. +1 234 567 890'
						value={fields.phone}
						onChange={(e) => {
							onChange(e.target.name, e.target.value);
						}}
					/>
				</div>
         */}
			</form>
			<div className='actions first-step'>
				<Button className='next-button' onClick={onSubmit}>
					Next Step
				</Button>
			</div>
		</Section>
	);
};
