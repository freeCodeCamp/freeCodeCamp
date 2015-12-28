const defaults = {
  'string': {
    value: '',
    valid: false,
    pristine: true,
    type: 'string'
  },
  bool: {
    value: false,
    type: 'boolean'
  }
};

export function getDefaults(type, value) {
  if (!type) {
    return defaults['string'];
  }
  if (value) {
    return Object.assign({}, defaults[type], { value });
  }
  return Object.assign({}, defaults[type]);
}

export function isJobValid(job) {
  return job &&
    !job.isFilled &&
    job.isApproved &&
    job.isPaid;
}
