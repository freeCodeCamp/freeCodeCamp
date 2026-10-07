Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const filteringSnippets = require('./filtering-snippets.js');
const filterKeyValueData = require('./filterKeyValueData.js');

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
    return filterKeyValueData.filterKeyValueData(parsed, behavior);
  } catch {
    return filteringSnippets.FILTERED_VALUE;
  }
}

exports.filterQueryParams = filterQueryParams;
//# sourceMappingURL=filterQueryParams.js.map
