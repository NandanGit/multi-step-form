import { SidebarStep } from '../../components/logic/onboarding/sidebar/Sidebar.types';
import { AddOn, Plan } from './types';

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
export const availablePlans: Plan[] = [
	{ name: 'arcade', monthlyPrice: 9, yearlyPrice: 90 },
	{ name: 'advanced', monthlyPrice: 12, yearlyPrice: 120 },
	{ name: 'pro', monthlyPrice: 15, yearlyPrice: 150 },
];

export const availableAddOns: AddOn[] = [
	{
		name: 'Online Service',
		description: 'Access to multiplayer games',
		monthlyPrice: 1,
		yearlyPrice: 10,
		isPicked: false,
	},
	{
		name: 'Larger Storage',
		description: 'Extra 1TB of cloud save',
		monthlyPrice: 2,
		yearlyPrice: 20,
		isPicked: false,
	},
	{
		name: 'Customizable Profile',
		description: 'Custom theme on your profile',
		monthlyPrice: 2,
		yearlyPrice: 20,
		isPicked: false,
	},
];
