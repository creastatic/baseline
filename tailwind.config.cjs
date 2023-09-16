/** @type {import('tailwindcss').Config}*/

const sira = require('@sira-ui/tailwind')
const tailanim = require('tailwindcss-animated')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	
	theme: {
	  colors: {
	    // Colors for app scheme
	    'maximal': '#121313',
	    'medium': '#758BFD', 
	    'minimal': '#08FFD0',
	    'sv': '#00FF55',
	    'iv': '#B6EDFF',
	    'wv': '#F9C74F',
	    // Colors for text scheme
	    'highlight': '#F6F6F6',
	    'onmaximal': '#F6F6F6',
	    'onmedium': '#F6F6F6',
	    'onminimal': '#001B2E',
	  },
	  fontFamily: {
	    'highlight': 'Monoton, serif',
	    'header': 'Audiowide, monospace',
	    'default': 'Fragment Mono, monospace'

	  },
	  screens: {
      'sm': '450',
      // => @media (min-width: 375px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
	  extend: {
	    dropShadow: {
	      'logo': '0 0 2px white'
	    },
	    spacing: {
	      // Systematic
	      'ss': '0.5rem',
	      'ms': '1rem',
	      'ls': '1.5rem',
	      // For body and blocks limits 
	      'maximalp': '2rem',
	      'maximalm': '3rem',
	      'mediump': '4rem',
	      'mediumm': '2rem',
	      // For text spacing if necessary
	      'tbp1': '1rem',
	      'tbp2': '2rem'
	      
	      
	    },
	   borderRadius: {
	     'default': '0% 30% 0% 30%',
	   }
	  }
	},
	
	plugins: [
	  sira({excludedThemes: ['dark', 'light', 'whateverTheme']}),
	  tailanim
	]
}
module.exports = config;
