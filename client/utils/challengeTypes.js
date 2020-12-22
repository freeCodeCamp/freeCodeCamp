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
const pythonProject = 10;
const video = 11;

// individual exports
exports.backend = backend;
exports.frontEndProject = frontEndProject;
exports.backEndProject = backEndProject;
exports.pythonProject = pythonProject;

exports.challengeTypes = {
  html,
  js,
  backend,
  zipline,
  frontEndProject,
  backEndProject,
  pythonProject,
  bonfire,
  modern,
  step,
  quiz,
  invalid,
  video
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
  [pythonProject]: 'frontend',
  [modern]: 'modern',
  [step]: 'step',
  [quiz]: 'quiz',
  [backend]: 'backend',
  [video]: 'video'
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
  [pythonProject]: 'project.backEnd',
  [step]: 'step',
  [quiz]: 'quiz',
  [backend]: 'backend',
  [modern]: 'tests',
  [video]: 'tests'
};

// determine which help forum questions should be posted to
exports.helpCategoryMap = {
  'basic-html-and-html5': 'HTML-CSS',
  'basic-css': 'HTML-CSS',
  'applied-visual-design': 'HTML-CSS',
  'applied-accessibility': 'HTML-CSS',
  'responsive-web-design-principles': 'HTML-CSS',
  'css-flexbox': 'HTML-CSS',
  'css-grid': 'HTML-CSS',
  'responsive-web-design-projects': 'HTML-CSS',
  'basic-javascript': 'JavaScript',
  es6: 'JavaScript',
  'regular-expressions': 'JavaScript',
  debugging: 'JavaScript',
  'basic-data-structures': 'JavaScript',
  'basic-algorithm-scripting': 'JavaScript',
  'object-oriented-programming': 'JavaScript',
  'functional-programming': 'JavaScript',
  'intermediate-algorithm-scripting': 'JavaScript',
  'javascript-algorithms-and-data-structures-projects': 'JavaScript',
  bootstrap: 'HTML-CSS',
  jquery: 'JavaScript',
  sass: 'HTML-CSS',
  react: 'JavaScript',
  redux: 'JavaScript',
  'react-and-redux': 'JavaScript',
  'front-end-libraries-projects': 'JavaScript',
  'data-visualization-with-d3': 'JavaScript',
  'json-apis-and-ajax': 'JavaScript',
  'data-visualization-projects': 'JavaScript',
  'managing-packages-with-npm': 'JavaScript',
  'basic-node-and-express': 'JavaScript',
  'mongodb-and-mongoose': 'JavaScript',
  'apis-and-microservices-projects': 'JavaScript',
  'information-security-with-helmetjs': 'JavaScript',
  'quality-assurance-and-testing-with-chai': 'JavaScript',
  'advanced-node-and-express': 'JavaScript',
  'quality-assurance-projects': 'JavaScript',
  'information-security-projects': 'JavaScript',
  algorithms: 'JavaScript',
  'data-structures': 'JavaScript',
  'take-home-projects': 'JavaScript',
  'rosetta-code': 'JavaScript',
  'project-euler': 'JavaScript',
  'scientific-computing-with-python': 'Python',
  'scientific-computing-with-python-projects': 'Python',
  'data-analysis-with-python': 'Python',
  'data-analysis-with-python-projects': 'Python',
  'machine-learning-with-python': 'Python',
  'machine-learning-with-python-projects': 'Python',
  'python-for-everybody': 'Python',
  tensorflow: 'Python',
  'how-neural-networks-work': 'Python',
  numpy: 'Python',
  'data-analysis-with-python-course': 'Python',
  'python-for-penetration-testing': 'Python',
  'basic-html-cat-photo-app': 'HTML-CSS',
  'basic-css-cafe-menu': 'HTML-CSS',
  'css-variables-skyline': 'HTML-CSS',
  'basic-javascript-rpg-game': 'JavaScript',
  'functional-programming-spreadsheet': 'JavaScript',
  'intermediate-javascript-calorie-counter': 'JavaScript',
  'd3-dashboard': 'JavaScript'
};
