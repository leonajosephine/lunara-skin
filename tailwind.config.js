/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths to match your project structure
    ],
    theme: {
      extend: {
        colors: {

          'border-ls-text': '#26221D',
  
          'ls-bg': '#F7F3EE',
  
          'ls-accent': '#C9A98B',
  
          'ls-border': '#E3D8CC',
  
        },
      },
    },
    plugins: [],
  };

export default config;