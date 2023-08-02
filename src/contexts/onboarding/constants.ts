import { SidebarStep } from '../../components/logic/onboarding/sidebar/Sidebar.types';

export const defaultSidebarSteps: SidebarStep[] = [
	{
		step: 1,
		title: 'Your Info',
		isActive: true,
	},
	{ step: 2, title: 'Select Plan' },
	{ step: 3, title: 'Add-ons' },
	{ step: 4, title: 'Summary' },
];
