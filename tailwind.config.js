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
				'text-base': ['18px', '24px'],
				'text-info': ['18px', '28px'],
				'section-title': ['60px', '60px'],
				'section-subtitle': ['40px', '40px'],
				'main-title': ['110px', '96px'],
			},
		},
	},
	plugins: [],
};
