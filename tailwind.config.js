module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      'dark', // first one will be the default theme
      'emerald',
      'forest',
      'synthwave'
    ],
  },
}
