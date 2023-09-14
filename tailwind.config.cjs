/** @type {import('tailwindcss').Config}*/

const sira = require('@sira-ui/tailwind')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	
	theme: {
	  colors: {
	    // Colors for app scheme
	    'maximal': '#121313',
	    'medium': '#758BFD', 
	    'minimal': '#08FFD0',
	    'success': '#00FF55',
	    'information': '#B6EDFF',
	    'warning': '#F9C74F',
	    // Colors for text scheme
	    'highlight': '#F6F6F6',
	    'onmaximal': '#F6F6F6',
	    'onmedium': '#F6F6F6',
	    'onminimal': '#001B2E',
	  },
	  fontFamily: {
	    'highlight': 'xxx',
	    'default': 'xxx',
	  },
	  extend: {
	    spacing: {
	      '1': '0.5rem',
	      '2': '1rem',
	      '3': '1.5rem',
	      'maximalp': '2rem',
	      'maximalm': '3rem',
	      'mediump': '4rem',
	      'mediumm': '2rem',
	      'tbp1': '1rem',
	      'tbp2': '2rem'
	    },
	   borderRadius: {
	     'default': '0% 30% 0% 30%',
	   }
	  }
	},
	
	plugins: [
	  sira({excludedThemes: ['dark', 'light', 'whateverTheme']})
	]
}
module.exports = config;
