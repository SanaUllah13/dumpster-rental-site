const config = {
  plugins: {
    "@tailwindcss/postcss": {
      theme: {
        extend: {
          colors: {
            primary: '#1B3A5C',
            accent: '#E8650A',
            background: '#F5F7FA',
            darkBg: '#0F1F2E',
            text: '#1A1A2E',
            muted: '#6B7280',
            border: '#E2E8F0',
          },
          fontFamily: {
            sans: ['var(--font-inter)'],
            mono: ['var(--font-manrope)'],
          },
        },
      },
    },
  },
};

export default config;
