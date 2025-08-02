/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        deepTeal: '#00809D',
        softCream: '#FCF8DD',
        goldie: '#FFD700',
        richGold: '#D3AF37',
        deepGreen: '#004030',
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fill, minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

