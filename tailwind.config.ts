import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'desk': '1440px',
      },
      maxWidth: {
        'desk': '1440px',
      },
      gridTemplateColumns: {
        'desktop': 'repeat(auto-fill, minmax(350px, 1fr))',
        'mobile': 'repeat(auto-fill, minmax(280px, 1fr))',
        }
    },
    
  },
  plugins: [],
}
export default config
