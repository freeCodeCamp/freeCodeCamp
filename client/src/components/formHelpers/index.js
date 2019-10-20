import normalizeUrl from 'normalize-url';
import isURL from 'validator/lib/isURL';

export { default as BlockSaveButton } from './BlockSaveButton.js';
export { default as BlockSaveWrapper } from './BlockSaveWrapper.js';
export { default as Form } from './Form.js';
export { default as FormFields } from './FormFields.js';

const normalizeOptions = {
  stripWWW: false
};

// callIfDefined(fn: (Any) => Any) => (value: Any) => Any
export function callIfDefined(fn) {
  return value => (value ? fn(value) : value);
}

export function formatUrlValues(values, options) {
  return Object.keys(values).reduce((result, key) => {
    let value = values[key];
    if (value && options.types[key] === 'url') {
      value = normalizeUrl(value, normalizeOptions);
    }
    return { ...result, [key]: value };
  }, {});
}

// formatUrl(url: String) => String
export function formatUrl(url) {
  if (typeof url === 'string' && url.length > 4 && url.indexOf('.') !== -1) {
    // prevent trailing / from being stripped during typing
    let lastChar = '';
    if (url.substring(url.length - 1) === '/') {
      lastChar = '/';
    }
    // prevent normalize-url from stripping last dot during typing
    if (url.substring(url.length - 1) === '.') {
      lastChar = '.';
    }
    return normalizeUrl(url, normalizeOptions) + lastChar;
  }
  return url;
}

export function isValidURL(data) {
  /* eslint-disable camelcase */
  return isURL(data, { require_protocol: true });
  /* eslint-enable camelcase */
}

export function makeOptional(validator) {
  return val => (val ? validator(val) : true);
}

export function makeRequired(validator) {
  return val => (val ? validator(val) : false);
}

export function createFormValidator(fieldValidators) {
  const fieldKeys = Object.keys(fieldValidators);
  return values =>
    fieldKeys
      .map(field => {
        if (fieldValidators[field](values[field])) {
          return null;
        }
        return { [field]: !fieldValidators[field](values[field]) };
      })
      .filter(Boolean)
      .reduce((errors, error) => ({ ...errors, ...error }), {});
}

export function getValidationState(field) {
  if (field.pristine) {
    return null;
  }

  if (/https?:\/\/glitch\.com\/edit\/#!\/.*/g.test(field.value)) {
    return 'glitch-warning';
  }

  return field.error ? 'error' : 'success';
}
