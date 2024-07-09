/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "hsl(var(--color-background))",
				secondary: "hsl(var(--color-text))",
				focus: "hsl(var(--color-text-alt))",
				accent: "hsl(var(--color-accent))",
				highlight: "hsl(var(--color-highlight))",
			},
		},
	},
	plugins: [],
};
