const types = [
  'fetchHikes',
  'fetchHikesCompleted',

  'toggleQuestionView',
  'grabQuestion',
  'releaseQuestion',
  'moveQuestion',

  'answer',

  'startShake',
  'endShake',

  'primeNextQuestion',
  'goToNextQuestion',

  'hikeCompleted',
  'goToNextHike'
];

export default types
  .reduce((types, type) => ({ ...types, [type]: `videos.${type}` }), {});
