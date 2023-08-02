import React from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	variant?: 'minimal' | 'filled';
}

export const Button: React.FC<ButtonProps> = ({
	children,
	className = '',
	variant = 'filled',
	...props
}) => {
	return (
		<button className={`Button ${variant} ${className}`} {...props}>
			{children}
		</button>
	);
};
