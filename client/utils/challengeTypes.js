const html = 0;
const js = 1;
const backend = 2;
const zipline = 3;
const frontEndProject = 3;
const backEndProject = 4;
const bonfire = 5;
const modern = 6;
const step = 7;
const quiz = 8;
const invalid = 9;

// individual exports
exports.backend = backend;
exports.frontEndProject = frontEndProject;
exports.backEndProject = backEndProject;

exports.challengeTypes = {
  html,
  js,
  backend,
  zipline,
  frontEndProject,
  backEndProject,
  bonfire,
  modern,
  step,
  quiz,
  invalid
};

// turn challengeType to file ext
exports.pathsMap = {
  [html]: 'html',
  [js]: 'js',
  [bonfire]: 'js'
};
// determine the component to view for each challenge
exports.viewTypes = {
  [html]: 'classic',
  [js]: 'classic',
  [bonfire]: 'classic',
  [frontEndProject]: 'frontend',
  [backEndProject]: 'backend',
  [modern]: 'modern',
  [step]: 'step',
  [quiz]: 'quiz',
  [backend]: 'backend'
};

// determine the type of submit function to use for the challenge on completion
exports.submitTypes = {
  [html]: 'tests',
  [js]: 'tests',
  [bonfire]: 'tests',
  // requires just a single url
  // like codepen.com/my-project
  [frontEndProject]: 'project.frontEnd',
  // requires two urls
  // a hosted URL where the app is running live
  // project code url like GitHub
  [backEndProject]: 'project.backEnd',

  [step]: 'step',
  [quiz]: 'quiz',
  [backend]: 'backend',
  [modern]: 'tests'
};

// determine which help forum questions should be posted to
exports.helpCategory = {
  'basic-html-and-html5': 'HTML-CSS',
  'basic-css': 'HTML-CSS',
  'applied-visual-design': 'HTML-CSS',
  'applied-accessibility': 'HTML-CSS',
  'responsive-web-design-principles': 'HTML-CSS',
  'css-flexbox': 'HTML-CSS',
  'css-grid': 'HTML-CSS',
  'responsive-web-design-projects': 'Certification Projects',
  'basic-javascript': 'JavaScript',
  es6: 'JavaScript',
  'regular-expressions': 'JavaScript',
  debugging: 'JavaScript',
  'basic-data-structures': 'JavaScript',
  'basic-algorithm-scripting': 'JavaScript',
  'object-oriented-programming': 'JavaScript',
  'functional-programming': 'JavaScript',
  'intermediate-algorithm-scripting': 'JavaScript',
  'javascript-algorithms-and-data-structures-projects':
    'Certification Projects',
  bootstrap: 'HTML-CSS',
  jquery: 'JavaScript',
  sass: 'HTML-CSS',
  react: 'JavaScript',
  redux: 'JavaScript',
  'react-and-redux': 'JavaScript',
  'front-end-libraries-projects': 'Certification Projects',
  'data-visualization-with-d3': 'JavaScript',
  'json-apis-and-ajax': 'JavaScript',
  'data-visualization-projects': 'Certification Projects',
  'managing-packages-with-npm': 'JavaScript',
  'basic-node-and-express': 'JavaScript',
  'mongodb-and-mongoose': 'JavaScript',
  'apis-and-microservices-projects': 'Certification Projects',
  'information-security-with-helmetjs': 'JavaScript',
  'quality-assurance-and-testing-with-chai': 'JavaScript',
  'advanced-node-and-express': 'JavaScript',
  'information-security-and-quality-assurance-projects':
    'Certification Projects',
  algorithms: 'JavaScript',
  'data-structures': 'JavaScript',
  'take-home-projects': 'Certification Projects',
  'rosetta-code': 'JavaScript',
  'project-euler': 'JavaScript',
  'css-variables-skyline': 'HTML-CSS',
  'basic-javascript-rpg-game': 'JavaScript',
  'functional-programming-spreadsheet': 'JavaScript'
};
