import React from 'react';
import { useOnboarding } from '../../../../contexts/onboarding/useOnboarding';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
	onTop?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
	onTop,
	className = '',
	...props
}) => {
	const { sidebarSteps } = useOnboarding();
	return (
		<div className={`Sidebar ${onTop ? 'on-top' : ''} ${className}`} {...props}>
			<div className='steps'>
				{sidebarSteps.map(({ step, title, isActive }) => (
					<div key={step} className='step-container'>
						<div className={`step ${isActive ? 'active' : ''}`}>{step}</div>
						<div className='step-content'>
							<p className='step-count'>Step {step}</p>{' '}
							<p className='step-title'>{title}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
