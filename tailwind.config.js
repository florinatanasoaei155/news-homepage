/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    applyComplexClasses: true,
  },
  purge: [],
  corePlugins: {},
  // use this to import the base styles
  css: {
    // these are the styles I want to import
    // you can use a glob pattern to import multiple files
    // @import 'tailwindcss/base';
    // @import 'tailwindcss/components';
    // @import 'tailwindcss/utilities';
    // you can use @import to include your custom styles
    // @import './path/to/custom-styles.css';
    // or to include your custom styles written in scss
    // @import './path/to/custom-styles.scss';
    // you can use @apply to apply classes to your own custom styles
    // .custom-class {
    //   @apply bg-red-500 text-white;
    // }
  },
};
