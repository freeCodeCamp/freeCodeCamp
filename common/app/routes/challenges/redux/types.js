import createTypes from '../../../utils/create-types';

export default createTypes([
  // step
  'goToStep',

  // challenges
  'fetchChallenge',
  'fetchChallenges',
  'fetchChallengeCompleted',
  'fetchChallengesCompleted',
  'updateCurrentChallenge',

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
  'submitChallenge',
  'moveToNextChallenge',

  // code storage
  'saveCode',
  'loadCode',
  'savedCodeFound'
], 'challenges');
