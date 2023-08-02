import { useContext, useMemo } from 'react';
import { OnboardingContext } from './OnboardingContext';

export const useOnboarding = () => {
	const onboardingContext = useContext(OnboardingContext);

	const activeStep = useMemo(() => {
		return onboardingContext.state.sidebarSteps.find((step) => step.isActive);
	}, [onboardingContext.state.sidebarSteps]);

	return {
		activeStep,
		...onboardingContext.state,
		...onboardingContext,
	};
};
