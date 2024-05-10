import { Config } from 'tailwindcss/types'
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  dasiyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
}
export default config
