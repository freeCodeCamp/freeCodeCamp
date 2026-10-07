"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathToPattern;
function _path() {
  const data = require("path");
  _path = function () {
    return data;
  };
  return data;
}
const sep = `\\${_path().sep}`;
const endSep = `(?:${sep}|$)`;
const substitution = `[^${sep}]+`;
const starPat = `(?:${substitution}${sep})`;
const starPatLast = `(?:${substitution}${endSep})`;
const starStarPat = `${starPat}*?`;
const starStarPatLast = `${starPat}*?${starPatLast}?`;
function escapeRegExp(string) {
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
}
function pathToPattern(pattern, dirname) {
  const parts = _path().resolve(dirname, pattern).split(_path().sep);
  return new RegExp(["^", ...parts.map((part, i) => {
    const last = i === parts.length - 1;
    if (part === "**") return last ? starStarPatLast : starStarPat;
    if (part === "*") return last ? starPatLast : starPat;
    if (part.indexOf("*.") === 0) {
      return substitution + escapeRegExp(part.slice(1)) + (last ? endSep : sep);
    }
    return escapeRegExp(part) + (last ? endSep : sep);
  })].join(""));
}
0 && 0;

//# sourceMappingURL=pattern-to-regex.js.map
