const types = [
  'fetchHikes',
  'fetchHikesCompleted',

  'toggleQuestionView',
  'grabQuestion',
  'releaseQuestion',
  'moveQuestion',

  'answerQuestion',

  'startShake',
  'endShake',

  'primeNextQuestion',
  'goToNextQuestion',

  'hikeCompleted',
  'goToNextHike'
];

export default types
  .reduce((types, type) => ({ ...types, [type]: `videos.${type}` }), {});
