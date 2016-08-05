// NOTE: this functionality is largely borrowed from the jobs app that used
// to exist. Not sure if this should live somewhere else to consolidate 
// validation/normalization.

import { isURL } from 'validator';
import normalizeUrl from 'normalize-url';

const defaults = {
  string: {
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

function getDefaults(type, value) {
  if (!type) {
    return defaults['string'];
  }
  if (value) {
    return Object.assign({}, defaults[type], { value });
  }
  return Object.assign({}, defaults[type]);
}

function formatValue(value, validator, type = 'string') {
  const formated = getDefaults(type);
  if (validator && type === 'string') {
    formated.valid = validator(value);
  }
  if (value) {
    formated.value = value;
    formated.bsStyle = formated.valid ? 'success' : 'error';
  }
  return formated;
}

const normalizeOptions = {
  stripWWW: false
};

function formatUrl(url, shouldKeepTrailingSlash = true) {
  if (
    typeof url === 'string' &&
    url.length > 4 &&
    url.indexOf('.') !== -1
  ) {
    // prevent trailing / from being stripped during typing
    let lastChar = '';
    if (shouldKeepTrailingSlash && url.substring(url.length - 1) === '/') {
      lastChar = '/';
    }
    return normalizeUrl(url, normalizeOptions) + lastChar;
  }
  return url;
}

function isValidURL(data) {
  return isURL(data, { 'require_protocol': true });
}

export function normURL(url) {
  return formatValue(formatUrl(url), isValidURL);
}
