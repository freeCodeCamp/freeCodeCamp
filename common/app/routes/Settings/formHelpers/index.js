import { isEmail, isURL } from 'validator';

/** Components **/

export { default as BlockSaveButton } from './BlockSaveButton.jsx';
export { default as BlockSaveWrapper } from './BlockSaveWrapper.jsx';
export { default as Form } from './Form.jsx';
export { default as FormFields } from './FormFields.jsx';

/** Normalise **/

export function lowerAndTrim(str = '') {
  return str.toLowerCase().trim();
}

/** Validation **/

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
export function validEmail(email) {
  return isEmail(email) ? null : 'Must be a valid email';
}

export function validURL(str) {
  return isURL(str) ? null : 'Must be a valid URL';
}
