import flow from 'lodash/flow';
import { decodeFcc } from '../../common/utils/encode-decode';

const queryRegex = /^(\?|#\?)/;
export function legacyIsInQuery(query, decode) {
  let decoded;
  try {
    decoded = decode(query);
  } catch (err) {
    return false;
  }
  if (!decoded || typeof decoded.split !== 'function') {
    return false;
  }
  return decoded
    .replace(queryRegex, '')
    .split('&')
    .reduce(function(found, param) {
      var key = param.split('=')[0];
      if (key === 'solution') {
        return true;
      }
      return found;
    }, false);
}

export function getKeyInQuery(query, keyToFind = '') {
  return query
    .split('&')
    .reduce((oldValue, param) => {
      const key = param.split('=')[0];
      const value = param
        .split('=')
        .slice(1)
        .join('=');

      if (key === keyToFind) {
        return value;
      }
      return oldValue;
    }, null);
}

export function getLegacySolutionFromQuery(query = '', decode) {
  return flow(
    getKeyInQuery,
    decode,
    decodeFcc
  )(query, 'solution');
}

export function getCodeUri(location, decodeURIComponent) {
  let query;
  if (
    location.search &&
    legacyIsInQuery(location.search, decodeURIComponent)
  ) {
    query = location.search.replace(/^\?/, '');
  } else {
    return null;
  }

  return getLegacySolutionFromQuery(query, decodeURIComponent);
}

export function removeCodeUri(location, history) {
  if (
    typeof location.href.split !== 'function' ||
    typeof history.replaceState !== 'function'
  ) {
    return false;
  }
  history.replaceState(
    history.state,
    null,
    location.href.split('?')[0]
  );
  return true;
}
