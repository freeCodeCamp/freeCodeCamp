import { SENSITIVE_KEY_SNIPPETS, FILTERED_VALUE } from './filtering-snippets.js';

function isSensitiveKey(lower, denySnippets) {
  return denySnippets.some((snippet) => lower.includes(snippet));
}
function filterKeyValueData(data, behavior, additionalDenyTerms) {
  if (behavior === false) {
    return {};
  }
  const denySnippets = additionalDenyTerms != null ? [...SENSITIVE_KEY_SNIPPETS, ...additionalDenyTerms] : SENSITIVE_KEY_SNIPPETS;
  const result = {};
  if (behavior === true) {
    for (const key of Object.keys(data)) {
      result[key] = isSensitiveKey(key.toLowerCase(), denySnippets) ? FILTERED_VALUE : data[key];
    }
    return result;
  }
  if ("deny" in behavior) {
    const lowerTerms2 = behavior.deny.map((t) => t.toLowerCase());
    for (const key of Object.keys(data)) {
      const lower = key.toLowerCase();
      const isDenied = isSensitiveKey(lower, denySnippets) || lowerTerms2.some((term) => lower.includes(term));
      result[key] = isDenied ? FILTERED_VALUE : data[key];
    }
    return result;
  }
  const lowerTerms = behavior.allow.map((t) => t.toLowerCase());
  for (const key of Object.keys(data)) {
    const lower = key.toLowerCase();
    if (isSensitiveKey(lower, denySnippets)) {
      result[key] = FILTERED_VALUE;
    } else {
      const isAllowed = lowerTerms.some((term) => lower.includes(term));
      result[key] = isAllowed ? data[key] : FILTERED_VALUE;
    }
  }
  return result;
}

export { filterKeyValueData };
//# sourceMappingURL=filterKeyValueData.js.map
