const types = [
  'fetchJobs',
  'fetchJobsCompleted',

  'findJob',
  'saveJob',
  'saveJobCompleted',

  'saveForm',
  'clearForm',
  'loadSavedForm',
  'loadSavedFormCompleted'
];

export default types.reduce((types, type) => {
  types[type] = `jobs.${type}`;
  return types;
}, {});
