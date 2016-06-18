import createTypes from '../../../utils/create-types';

export default createTypes([
  // step
  'goToStep',
  'completeAction',
  'openLightBoxImage',
  'closeLightBoxImage',

  // challenges
  'fetchChallenge',
  'fetchChallenges',
  'fetchChallengeCompleted',
  'fetchChallengesCompleted',
  'updateCurrentChallenge',
  'replaceChallenge',
  'resetUi',
  'updateHint',

  // map
  'updateFilter',
  'clearFilter',

  // files
  'updateFile',
  'updateFiles',

  // rechallenge
  'executeChallenge',
  'updateMain',
  'runTests',
  'frameMain',
  'frameTests',
  'updateOutput',
  'initOutput',
  'updateTests',
  'checkChallenge',
  'showChallengeComplete',
  'showProjectSubmit',
  'submitChallenge',
  'moveToNextChallenge',

  // code storage
  'saveCode',
  'loadCode',
  'savedCodeFound',

  // video challenges
  'toggleQuestionView',
  'grabQuestion',
  'releaseQuestion',
  'moveQuestion',

  'answerQuestion',

  'startShake',
  'endShake',

  'primeNextQuestion',
  'goToNextQuestion',
  'transitionVideo',
  'videoCompleted'
], 'challenges');
