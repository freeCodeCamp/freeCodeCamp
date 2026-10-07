"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropertyByPath = getPropertyByPath;

// Resolves property names or property paths defined with period-delimited
// strings or arrays of strings. Property names that are found on the source
// object are used directly (even if they include a period).
// Nested property names that include periods, within a path, are only
// understood in array paths.
function getPropertyByPath(source, path) {
  if (typeof path === 'string' && Object.prototype.hasOwnProperty.call(source, path)) {
    return source[path];
  }

  const parsedPath = typeof path === 'string' ? path.split('.') : path; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return parsedPath.reduce((previous, key) => {
    if (previous === undefined) {
      return previous;
    }

    return previous[key];
  }, source);
}
//# sourceMappingURL=getPropertyByPath.js.map