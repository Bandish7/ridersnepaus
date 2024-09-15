/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  content: [
     './index.html',
      './layouts/**/*.html',
      './content/**/*.md',
      './content/**/*.html',
      './src/**/*.ts',
      './src/**/*.js',
  ],
  darkMode: 'class',
  theme: {
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      extend: {
          // sidebar mobile fix
          maxWidth: {
              '2xs': '16rem',
              '8xl': '90rem',
          },
          fontFamily: {
              sans: [
                  'Inter',
                  'ui-sans-serif',
                  'system-ui',
                  '-apple-system',
                  'system-ui',
                  'Segoe UI',
                  'Roboto',
                  'Helvetica Neue',
                  'Arial',
                  'Noto Sans',
                  'sans-serif',
                  'Apple Color Emoji',
                  'Segoe UI Emoji',
                  'Segoe UI Symbol',
                  'Noto Color Emoji',
              ],
              body: [
                  'Inter',
                  'ui-sans-serif',
                  'system-ui',
                  '-apple-system',
                  'system-ui',
                  'Segoe UI',
                  'Roboto',
                  'Helvetica Neue',
                  'Arial',
                  'Noto Sans',
                  'sans-serif',
                  'Apple Color Emoji',
                  'Segoe UI Emoji',
                  'Segoe UI Symbol',
                  'Noto Color Emoji',
              ],
              mono: [
                  'ui-monospace',
                  'SFMono-Regular',
                  'Menlo',
                  'Monaco',
                  'Consolas',
                  'Liberation Mono',
                  'Courier New',
                  'monospace',
              ],
          },
          fontSize: {
              '2xs': '0.625rem',
          },
      },
  },
  variants: {
      extend: {
          backgroundColor: ['active'],
      },
  }
  
};