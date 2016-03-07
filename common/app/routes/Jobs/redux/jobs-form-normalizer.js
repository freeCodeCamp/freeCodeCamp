import normalizeUrl from 'normalize-url';
import {
  inHTMLData,
  uriInSingleQuotedAttr
} from 'xss-filters';

const normalizeOptions = {
  stripWWW: false
};

function ifDefinedNormalize(normalizer) {
  return value => value ? normalizer(value) : value;
}

function formatUrl(url) {
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
    return normalizeUrl(url, normalizeOptions) + lastChar;
  }
  return url;
}

export default {
  NewJob: {
    position: ifDefinedNormalize(inHTMLData),
    locale: ifDefinedNormalize(inHTMLData),
    description: ifDefinedNormalize(inHTMLData),
    email: ifDefinedNormalize(inHTMLData),
    url: ifDefinedNormalize(value => formatUrl(uriInSingleQuotedAttr(value))),
    logo: ifDefinedNormalize(value => formatUrl(uriInSingleQuotedAttr(value))),
    company: ifDefinedNormalize(inHTMLData),
    howToApply: ifDefinedNormalize(inHTMLData)
  }
};
