const preFormattedBlockNames = {
  'api-projects': 'API Projects',
  'basic-css': 'Basic CSS',
  'basic-html-and-html5': 'Basic HTML and HTML5',
  'css-flexbox': 'CSS Flexbox',
  'css-grid': 'CSS Grid',
  devops: 'DevOps',
  es6: 'ES6',
  'information-security-with-helmetjs': 'Information Security with HelmetJS',
  jquery: 'jQuery',
  'json-apis-and-ajax': 'JSON APIs and Ajax',
  'mongodb-and-mongoose': 'MongoDB and Mongoose',
  'the-dom': 'The DOM',
  'apis-and-microservices': 'APIs and Microservices',
  'apis-and-microservices-projects': 'APIs and Microservices Projects',
  'scientific-computing-with-python': 'Scientific Computing with Python',
  'data-analysis-with-python': 'Data Analysis with Python',
  'machine-learning-with-python': 'Machine Learning with Python',
  tensorflow: 'TensorFlow',
  'basic-javascript-rpg-game': 'Basic JavaScript RPG Game',
  'basic-html-cat-photo-app': 'HTML Cat Photo App',
  'basic-css-cafe-menu': 'CSS Cafe Menu',
  'css-variables-skyline': 'CSS Variables Skyline',
  'javascript-spreadsheet': 'JavaScript Spreadsheet',
  'intermediate-javascript-calorie-counter':
    'Intermediate JavaScript Calorie Counter',
  'd3-dashboard': 'D3 Dashboard'
};

const noFormatting = ['and', 'for', 'of', 'the', 'up', 'with'];

exports.blockNameify = function blockNameify(phrase) {
  const preFormatted = preFormattedBlockNames[phrase] || '';
  if (preFormatted) {
    return preFormatted;
  }
  return phrase
    .split('-')
    .map(word => {
      if (noFormatting.indexOf(word) !== -1) {
        return word;
      }
      if (word === 'javascript') {
        return 'JavaScript';
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};
