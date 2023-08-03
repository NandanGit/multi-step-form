import React from 'react';

export interface SwitchProps
	extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange'> {
	className?: string;
	isSelected?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: React.FC<SwitchProps> = ({
	className = '',
	isSelected = false,
	onChange,
	...props
}) => {
	return (
		<label
			className={`Switch ${className} ${isSelected ? 'selected' : ''}`}
			{...props}
		>
			<input type='checkbox' checked={isSelected} onChange={onChange} />
			<div className='thumb' />
		</label>
	);
};
