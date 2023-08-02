import { Onboarding } from './components/logic/onboarding/Onboarding';
import { Sidebar } from './components/logic/onboarding/sidebar/Sidebar';
import { OnboardingProvider } from './contexts/onboarding/OnboardingContext';

function App() {
	return (
		<OnboardingProvider>
			<Sidebar onTop />
			<Onboarding />
		</OnboardingProvider>
	);
}

export default App;
