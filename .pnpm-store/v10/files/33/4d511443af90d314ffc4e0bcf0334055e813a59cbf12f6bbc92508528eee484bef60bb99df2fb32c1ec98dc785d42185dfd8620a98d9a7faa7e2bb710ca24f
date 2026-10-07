import { parseCookie } from '../cookie.js';
import { SENSITIVE_COOKIE_NAME_SNIPPETS, FILTERED_VALUE } from './filtering-snippets.js';
import { filterKeyValueData } from './filterKeyValueData.js';

function filterCookies(cookieString, behavior) {
  if (behavior === false) {
    return {};
  }
  try {
    const parsed = parseCookie(cookieString);
    if (Object.keys(parsed).length === 0) {
      return {};
    }
    return filterKeyValueData(parsed, behavior, SENSITIVE_COOKIE_NAME_SNIPPETS);
  } catch {
    return FILTERED_VALUE;
  }
}

export { filterCookies };
//# sourceMappingURL=filterCookies.js.map
