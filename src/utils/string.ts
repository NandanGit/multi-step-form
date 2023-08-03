export const isValidEmail = (email: string) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
