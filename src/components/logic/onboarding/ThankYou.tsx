import React from 'react';

export interface ThankYouProps extends React.HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export const ThankYou: React.FC<ThankYouProps> = ({
	className = '',
	...props
}) => {
	return (
		<div className={`ThankYou ${className}`} {...props}>
			<img src='icon-thank-you.svg' alt='' />
			<h1>Thank you!</h1>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	);
};
