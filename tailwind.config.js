// eslint-disable-next-line
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	purge: { content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"] },
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				"brand-gray-1": "#dadce0",
				"brand-gray-2": "#9aa0a6",
				"brand-blue-1": "#1967d2",
				"brand-green-1": "#137333",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
