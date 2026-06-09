/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  '#F5F7FA',
          100: '#E4E9F2',
          200: '#C8D2E0',
          300: '#9AA9BF',
          400: '#637592',
          500: '#3F4E66',
          600: '#2A364C',
          700: '#1B2438',
          800: '#111827',
          900: '#0A0F1C',
        },
        signal: {
          50:  '#EFFCF6',
          100: '#D8F7E5',
          200: '#B4EECF',
          300: '#7FDDB0',
          400: '#3FC788',
          500: '#15AD6A',
          600: '#0A8C53',
          700: '#0A6E45',
          800: '#0A5638',
          900: '#08472F',
        },
        amber: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
      },
      fontFamily: {
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10, 15, 28, 0.04), 0 8px 24px rgba(10, 15, 28, 0.06)',
        pop: '0 4px 12px rgba(10, 15, 28, 0.08), 0 24px 60px rgba(10, 15, 28, 0.12)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};
