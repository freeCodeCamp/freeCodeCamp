import { FILTERED_VALUE } from './filtering-snippets.js';
import { filterKeyValueData } from './filterKeyValueData.js';

function filterQueryParams(queryString, behavior) {
  if (behavior === false) {
    return {};
  }
  try {
    const params = new URLSearchParams(queryString);
    const parsed = {};
    params.forEach((value, key) => {
      parsed[key] = value;
    });
    if (Object.keys(parsed).length === 0) {
      return {};
    }
    return filterKeyValueData(parsed, behavior);
  } catch {
    return FILTERED_VALUE;
  }
}

export { filterQueryParams };
//# sourceMappingURL=filterQueryParams.js.map
