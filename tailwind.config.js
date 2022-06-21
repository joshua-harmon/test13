// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: { content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"] },
	media: false,
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"brand-gray-1": "#dadce0",
				"brand-gray-2": "#9aa0a6",
				"brand-blue-1": "#1967d2",
				"brand-blue-2": "#4285f4",
				"brand-green-1": "#137333",
			},
			boxShadow: {
				blue: "0 0 3px 3px #4285f4",
			},
		},
	},
	variants: {
		extend: {
			margin: ["first"],
		},
	},
	plugins: [],
};
