const types = [
  'fetchJobs',
  'fetchJobsCompleted',

  'findJob',
  'saveJob',
  'saveForm',

  'saveCompleted',

  'clearForm',

  'loadSavedForm',
  'loadSavedFormCompleted',

  'clearPromo',
  'updatePromo',
  'applyPromo',
  'applyPromoCompleted'
];

export default types.reduce((types, type) => {
  types[type] = `jobs.${type}`;
  return types;
}, {});
