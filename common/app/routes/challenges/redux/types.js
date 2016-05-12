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
  'updateFiles'
], 'challenges');
