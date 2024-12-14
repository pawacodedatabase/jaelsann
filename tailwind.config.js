/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 10s linear infinite', // Custom animation for moving text
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        'blue-600': '#3182ce', // Adjust color if needed for your design
      },
      spacing: {
        '128': '32rem', // For large spacing if needed
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Set a default sans-serif font family
      },
      boxShadow: {
        'xl': '0 4px 6px rgba(0, 0, 0, 0.1)', // Custom shadow style for cards or buttons
      },
    },
  },
  plugins: [],
};
