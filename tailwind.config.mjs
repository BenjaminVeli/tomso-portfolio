/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {

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
