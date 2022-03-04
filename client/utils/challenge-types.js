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
const codeAllyPractice = 12;
const codeAllyCert = 13;
const multiFileCertProject = 14;

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
  video,
  codeAllyPractice,
  codeAllyCert,
  multiFileCertProject
};

// (Oliver) I don't think we need this for codeally projects, so they're ignored
// here
exports.isProject = challengeType => {
  if (typeof challengeType !== 'number')
    throw Error('challengeType must be a number');
  return (
    challengeType === frontEndProject ||
    challengeType === backEndProject ||
    challengeType === pythonProject
  );
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
  [video]: 'video',
  [codeAllyPractice]: 'codeAlly',
  [codeAllyCert]: 'codeAlly',
  [multiFileCertProject]: 'classic'
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
  [video]: 'tests',
  [codeAllyCert]: 'project.frontEnd',
  [multiFileCertProject]: 'tests'
};

// determine which help forum questions should be posted to
exports.helpCategoryMap = require('./help-category-map.json');
