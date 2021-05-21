module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false,
  theme: {
    colors: {
      // Configure the color palette here
      // Layout Colors
      gray00: '#ffffff',
      gray05: '#f5f6f7',
      gray10: '#dfdfe2',
      gray15: '#d0d0d5',
      gray45: '#858591',
      gray75: '#3b3b4f',
      gray80: '#2a2a40',
      gray85: '#1b1b32',
      gray90: '#0a0a23',
      // Accent Colors - Primary
      blue: '#99c9ff',
      green: '#acd157',
      purple: '#dbb8ff',
      yellow: '#f1be32',
      // Accent Colors - Secondary
      darkBlue: '#002ead',
      darkGreen: '#00471b',
      darkPurple: '#5a01a7',
      darkYellow: '#4d3800',
      // Colors in variables.css
      blueMid: '#198eee',
      blueTranslucent: 'rgba(153, 201, 255, 0.3)',
      darkBlueTranslucent: 'rgba(0, 46, 173, 0.3)',
      darkEditorBackground: '#2a2b40',
      darkLove: '#f82153',
      darkRed: '#850000',
      editorBackground: '#fffffe',
      love: '#f8577c',
      purpleMid: '#9400d3',
      red: '#ffadad',
      yellowGold: '#ffbf00',
      yellowLight: '#ffc300'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
