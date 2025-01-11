/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customButton: 'rgba(196, 240, 0 , 1)',
				customLink: '#292929',
				customOrange: '#fc5723',
				customGrayLight: '#dadada',
				customGrayDark: '#555555',
				customBlack: '#111111',
				'light-gray-custom': 'rgb(14, 14, 16)',
				'dark-gray-custom': 'rgb(28 28 33)',
				customInput: 'rgb(28 28 33)',
				colorInput: 'rgb(228 228 230)',
				neutralGray: 'rgba(102, 102, 102, 1)',
				zaffreBlue: '#4831d4',
				customBeige: '#ebe5c9',
				stormGray: '#666666',
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1.5rem",
				'lg': '2rem',
			}
		}
	},
	plugins: [],
}
