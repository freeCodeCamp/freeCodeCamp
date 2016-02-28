import normalizeUrl from 'normalize-url';
import {
  inHTMLData,
  uriInSingleQuotedAttr
} from 'xss-filters';

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

export default {
  NewJob: {
    position: inHTMLData,
    locale: inHTMLData,
    description: inHTMLData,
    email: inHTMLData,
    url: value => formatUrl(uriInSingleQuotedAttr(value)),
    logo: value => formatUrl(uriInSingleQuotedAttr(value)),
    company: inHTMLData,
    howToApply: inHTMLData
  }
};
