module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./templates/**/*.liquid"
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Tajawal"', 'sans-serif']
      },
      colors: {
        primary: '#ffce16',
        dark: '#070909'
      }
    }
  }
};
