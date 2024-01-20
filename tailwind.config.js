/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			darkBlue: '#001D2C',
			midBlue: '#006588',
			lightBlue: '#94BED8',
			orange: '#E65805',
		},
		fontFamily: {
			bebas: ['Bebas Neue', 'sans-serif'],
			inter: ['Inter', 'sans-serif'],
		},
		extend: {
			fontSize: {
				'text-base': ['1.125em', '24px'],
				'text-info': ['1.125em', '28px'],
				'section-title': ['3.75em', '60px'],
				'section-subtitle': ['2.5em', '40px'],
				'main-title': ['6.875em', '96px'],
			},
		},
	},
	plugins: [],
};
