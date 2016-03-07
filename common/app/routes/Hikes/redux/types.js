import createTypes from '../../../utils/create-types';

export default createTypes([
  'fetchHikes',
  'fetchHikesCompleted',
  'resetHike',

  'toggleQuestionView',
  'grabQuestion',
  'releaseQuestion',
  'moveQuestion',

  'answerQuestion',

  'startShake',
  'endShake',

  'primeNextQuestion',
  'goToNextQuestion',
  'transitionHike',

  'hikeCompleted',
  'goToNextHike'
], 'videos');
