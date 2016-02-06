const types = [
  'fetchJobs',
  'fetchJobsCompleted',

  'findJob',

  'saveJob',
  'getJob',
  'getJobs',
  'openModal',
  'closeModal',
  'handleFormUpdate',
  'saveForm',
  'clear'
];

export default types
  .reduce((types, type) => ({ ...types, [type]: `jobs.${type}` }), {});
