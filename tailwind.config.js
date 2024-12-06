/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				outfit: "Outfit, serif",
			},
			boxShadow: {
				input: "0 4px 30px rgba(0, 0, 0, 0.1)",
			},
		},
	},
	plugins: [],
};
