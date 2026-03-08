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
				'ultranetic-blue': '#4169E1', // Adjust this hex code to your preferred blue
			},
		},
	},
	plugins: [],
}