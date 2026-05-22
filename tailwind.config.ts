import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A5C', // Steel Blue
        accent: '#E8650A', // Safety Orange
        background: '#F5F7FA', // Off White
        darkBg: '#0F1F2E', // Slate
        text: '#1A1A2E', // Dark Charcoal
        muted: '#6B7280', // Cool Gray
        border: '#E2E8F0', // Light Gray
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-manrope)', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};

export default config;
