import { SidebarStep } from '../../components/logic/onboarding/sidebar/Sidebar.types';

export interface IOnboardingContext {
	state: OnboardingContextState;
	actions: OnboardingContextActions;
}

export interface OnboardingContextState {
	sidebarSteps: SidebarStep[];
	sections: {
		personalInfo: {
			fields: {
				name: string;
				email: string;
				phone: string;
			};
			errors: {
				name: string;
				email: string;
				phone: string;
			};
		};
		selectPlan: object;
		addOns: object;
		summary: object;
	};
}

export interface OnboardingContextActions {
	personalInfo: {
		onSubmit: () => void;
		onChange: (field: string, value: string) => void;
	};
	selectPlan: {
		onSubmit: () => void;
	};
	addOns: {
		onSubmit: () => void;
	};
	summary: {
		onSubmit: () => void;
	};
	goBack: () => void;
}
