/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#1E40AF',
        'royal-blue-dark': '#1E3A8A',
        'royal-blue-light': '#3B82F6',
        'accent-cyan': '#0891B2',
        'accent-cyan-light': '#06B6D4',
        'cool-gray': '#6B7280',
        'cool-gray-light': '#9CA3AF',
        'cool-gray-dark': '#4B5563',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};