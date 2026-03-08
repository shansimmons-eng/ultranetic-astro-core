/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// This creates the 'font-display' utility class
				display: ['sans-serif'],
			},
			colors: {
				'ultranetic-blue': '#0ea5e9',
				'ultranetic-dark': '#050505',
				'ultranetic-card': '#0a0a0a',
			},
		},
	},
	plugins: [],
}