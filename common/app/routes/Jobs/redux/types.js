const types = [
  'fetchJobs',
  'fetchJobsCompleted',

  'findJob',
  'saveJob',

  'saveForm',
  'clearForm',
  'loadSavedForm',
  'loadSavedFormCompleted'
];

export default types.reduce((types, type) => {
  types[type] = `jobs.${type}`;
  return types;
}, {});
