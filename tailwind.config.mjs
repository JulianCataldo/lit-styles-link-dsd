import { tailwindTransform } from 'postcss-lit';


/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{js,ts}",],
    transform: {
      ts: tailwindTransform
    }
  },
  theme: {
    extend: {},
  },
  plugins: [],
}