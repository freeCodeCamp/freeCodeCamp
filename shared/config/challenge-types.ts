const html = 0;
const js = 1;
const backend = 2;
const zipline = 3;
const frontEndProject = 3;
const backEndProject = 4;
const jsProject = 5;
const modern = 6;
const step = 7;
const quiz = 8;
const invalid = 9;
const pythonProject = 10;
const video = 11;
const codeAllyPractice = 12;
const codeAllyCert = 13;
const multifileCertProject = 14;
const theOdinProject = 15;
const colab = 16;
const exam = 17;
const msTrophy = 18;
const multipleChoice = 19;
const python = 20;
const dialogue = 21;
const fillInTheBlank = 22;
const multifilePythonCertProject = 23;

export const challengeTypes = {
  html,
  js,
  backend,
  zipline,
  frontEndProject,
  backEndProject,
  pythonProject,
  jsProject,
  modern,
  step,
  quiz,
  invalid,
  video,
  codeAllyPractice,
  codeAllyCert,
  multifileCertProject,
  theOdinProject,
  colab,
  exam,
  msTrophy,
  multipleChoice,
  python,
  dialogue,
  fillInTheBlank,
  multifilePythonCertProject
};

export const hasNoSolution = (challengeType: number): boolean => {
  const noSolutions = [
    backend,
    zipline,
    frontEndProject,
    backEndProject,
    step,
    quiz,
    invalid,
    pythonProject,
    video,
    codeAllyPractice,
    codeAllyCert,
    theOdinProject,
    colab,
    exam,
    msTrophy,
    multipleChoice,
    dialogue,
    fillInTheBlank
  ];

  return noSolutions.includes(challengeType);
};

// determine the component view for each challenge
export const viewTypes = {
  [html]: 'classic',
  [js]: 'classic',
  [jsProject]: 'classic',
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
  [multifileCertProject]: 'classic',
  [theOdinProject]: 'odin',
  [colab]: 'frontend',
  [exam]: 'exam',
  [msTrophy]: 'msTrophy',
  [multipleChoice]: 'odin',
  [python]: 'modern',
  [dialogue]: 'dialogue',
  [fillInTheBlank]: 'fillInTheBlank',
  [multifilePythonCertProject]: 'classic'
};

// determine the type of submit function to use for the challenge on completion
export const submitTypes = {
  [html]: 'tests',
  [js]: 'tests',
  [jsProject]: 'tests',
  // requires just a single url
  // like codepen.com/my-project
  [frontEndProject]: 'project.frontEnd',
  // requires two urls
  // a hosted URL where the app is running live
  // project code url like GitHub
  [backEndProject]: 'project.backEnd',
  [pythonProject]: 'project.backEnd',
  [step]: 'step',
  [quiz]: 'tests',
  [backend]: 'backend',
  [modern]: 'tests',
  [video]: 'tests',
  [codeAllyCert]: 'project.frontEnd',
  [multifileCertProject]: 'tests',
  [theOdinProject]: 'tests',
  [colab]: 'project.backEnd',
  [exam]: 'exam',
  [msTrophy]: 'msTrophy',
  [multipleChoice]: 'tests',
  [python]: 'tests',
  [dialogue]: 'tests',
  [fillInTheBlank]: 'tests',
  [multifilePythonCertProject]: 'tests'
};
