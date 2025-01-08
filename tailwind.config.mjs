/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				customButton: 'rgba(196, 240, 0 , 1)',
				customSection: '#060606',
				customLink: '#292929',
				customOrange: '#fc5723',
				customBlue: '#007BFF',
				customGray: '#aaaaaa',
				'light-gray-custom': 'rgb(14, 14, 16)',
				'dark-gray-custom': 'rgb(28 28 33)',
				customInput: 'rgb(28 28 33)',
				colorInput: 'rgb(228 228 230)',
				slateCustom: '#f1f7feb5',
				slateCustomA: '#d9edff5d',
				LightSky: 'rgb(134 191 242 / 1%)',
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
