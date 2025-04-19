//** import type { Config } from "tailwindcss";

import { Container } from "lucide-react";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
	Container: {
		center: true,
		padding: "15px",
		},
		screens: {
			sm : "1400px",
			md : "768px",
			lg : "960px",
			xl : "1200px",
		},
		fontFamily: {
			primary: "var(--font-jetbrainsMono)",
		  },
	},
  	extend: {
		colors: {
			primary: "#1A1D23",
			accent: {
				DEFAULT: "#00ff99",
				hover: "#00e187"
			}
			},
  		keyframes: {
			"accordion-down": {
			from: {height: "0"},
			to: {height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			from: {height: "var(--radix-accordion-content-height)"},
			to:  {height: "0"},
  		},
	},
	Animation: {
		"accordion-down": "accordion-down 0.2s ease-out",
		"accordion-up": "accordion-up 0.2s ease-out",
  	},
  },
  plugins: [require("tailwindcss-animate")],
};

// satisfies Config
