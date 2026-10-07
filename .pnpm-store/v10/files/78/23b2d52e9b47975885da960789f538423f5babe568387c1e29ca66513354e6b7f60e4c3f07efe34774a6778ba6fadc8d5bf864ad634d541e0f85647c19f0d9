Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const cookie = require('../cookie.js');
const filteringSnippets = require('./filtering-snippets.js');
const filterKeyValueData = require('./filterKeyValueData.js');

function filterCookies(cookieString, behavior) {
  if (behavior === false) {
    return {};
  }
  try {
    const parsed = cookie.parseCookie(cookieString);
    if (Object.keys(parsed).length === 0) {
      return {};
    }
    return filterKeyValueData.filterKeyValueData(parsed, behavior, filteringSnippets.SENSITIVE_COOKIE_NAME_SNIPPETS);
  } catch {
    return filteringSnippets.FILTERED_VALUE;
  }
}

exports.filterCookies = filterCookies;
//# sourceMappingURL=filterCookies.js.map
