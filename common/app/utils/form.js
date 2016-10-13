import omit from 'lodash/omit';
import normalizeUrl from 'normalize-url';
import { isURL } from 'validator';

const normalizeOptions = {
  stripWWW: false
};

// callIfDefined(fn: (Any) => Any) => (value: Any) => Any
export function callIfDefined(fn) {
  return value => value ? fn(value) : value;
}

// formatUrl(url: String) => String
export function formatUrl(url) {
  if (
    typeof url === 'string' &&
    url.length > 4 &&
    url.indexOf('.') !== -1
  ) {
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
  /* eslint-disable quote-props */
  return isURL(data, { 'require_protocol': true });
  /* eslint-enable quote-props */
}

export function makeOptional(validator) {
  return val => val ? validator(val) : true;
}

export function makeRequired(validator) {
  return (val) => val ? validator(val) : false;
}

export function createFormValidator(fieldValidators) {
  const fieldKeys = Object.keys(fieldValidators);
  return values => fieldKeys
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

  return field.error ?
    'error' :
    'success';
}

// this should filter out none-dom props to silence React warnings
export function DOMOnlyProps(field) {
  return omit(field, [
    'initialValue',
    'autofill',
    'autocompleted',
    'onUpdate',
    'valid',
    'invalid',
    'dirty',
    'pristine',
    'active',
    'touched',
    'visited',
    'autofilled',
    'error'
  ]);
}
