const { locale } = require('../config/env.json');

const preFormattedBlockNames = {
  'api-projects': {
    english: 'API Projects'
  },
  'basic-css': { english: 'Basic CSS' },
  'basic-html-and-html5': {
    english: 'Basic HTML and HTML5'
  },
  'css-flexbox': { english: 'CSS Flexbox' },
  'css-grid': {
    english: 'CSS Grid'
  },
  devops: { english: 'DevOps' },
  es6: { english: 'ES6' },
  'information-security-with-helmetjs': {
    english: 'Information Security with HelmetJS'
  },
  jquery: { english: 'jQuery' },
  'json-apis-and-ajax': { english: 'JSON APIs and Ajax' },
  'mongodb-and-mongoose': { english: 'MongoDB and Mongoose' },
  'the-dom': { english: 'The DOM' },
  'apis-and-microservices': { english: 'APIs and Microservices' },
  'apis-and-microservices-projects': {
    english: 'APIs and Microservices Projects'
  }
};

const noFormatting = ['and', 'for', 'of', 'the', 'up', 'with'];

exports.__nameifyHelper = __nameifyHelper;

function __nameifyHelper(phrase, locale = 'english') {
  const localisedNames = preFormattedBlockNames[phrase];
  const preFormatted = localisedNames
    ? localisedNames[locale] || localisedNames['english']
    : '';

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
}

exports.blockNameify = function blockNameify(phrase) {
  return __nameifyHelper(phrase, locale);
};
