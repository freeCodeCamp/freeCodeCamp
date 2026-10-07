"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findSuggestion = findSuggestion;
const {
  min
} = Math;
function levenshtein(a, b) {
  let t = [],
    u = [],
    i,
    j;
  const m = a.length,
    n = b.length;
  if (!m) {
    return n;
  }
  if (!n) {
    return m;
  }
  for (j = 0; j <= n; j++) {
    t[j] = j;
  }
  for (i = 1; i <= m; i++) {
    for (u = [i], j = 1; j <= n; j++) {
      u[j] = a[i - 1] === b[j - 1] ? t[j - 1] : min(t[j - 1], t[j], u[j - 1]) + 1;
    }
    t = u;
  }
  return u[n];
}
function findSuggestion(str, arr) {
  const distances = arr.map(el => levenshtein(el, str));
  return arr[distances.indexOf(min(...distances))];
}

//# sourceMappingURL=find-suggestion.js.map
