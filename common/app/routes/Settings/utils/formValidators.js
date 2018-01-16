export function maxLength(max) {
  return value => value && value.length > max ?
    `Must be ${max} characters or less` :
    null;
}

export function minLength(min) {
  return value => value && value.length < min ?
    `Must be ${min} characters or more` :
    null;
}
