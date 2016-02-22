// NOTE: this functionality is largely borrowed from the jobs app,
// and could live somewhere shared
import { isURL } from 'validator';
import normalizeUrl from 'normalize-url';
import { getDefaults } from '../Jobs/utils';

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
