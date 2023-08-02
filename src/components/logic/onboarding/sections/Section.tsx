import React from 'react';

export interface SectionProps {
	className: string;
	title: string;
	description: string;
	children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
	className,
	title,
	description,
	children,
}) => {
	return (
		<div className={`Section ${className}`}>
			<h1 className='section-title'>{title}</h1>
			<p className='section-description'>{description}</p>
			{children}
		</div>
	);
};
