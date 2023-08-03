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
		selectPlan: {
			availablePlans: Plan[];
			selectedPlan: PlanType;
			selectedPeriod: PlanPeriod;
		};
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
		onPlanChange: (plan: PlanType) => void;
		onPeriodChange: (period: PlanPeriod) => void;
	};
	addOns: {
		onSubmit: () => void;
	};
	summary: {
		onSubmit: () => void;
	};
	goBack: () => void;
}

export type PlanType = 'arcade' | 'advanced' | 'pro';
export type PlanPeriod = 'monthly' | 'yearly';
export interface Plan {
	name: PlanType;
	monthlyPrice: number;
	yearlyPrice: number;
}
