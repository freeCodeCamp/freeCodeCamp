const types = [
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
];

export default types
  .reduce((types, type) => ({ ...types, [type]: `videos.${type}` }), {});
