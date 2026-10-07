"use strict";

exports.__esModule = true;
exports.css = css;
/**
 * Converts a string of CSS into object syntax
 * @param strings
 * @param keys
 * @returns {Object} CSS in object syntax
 * @example
 * const output = css`
 *  html {
 *    color: rebeccapurple;
 *  }
 * `
 */
function css(strings, ...keys) {
  const lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce((p, s, i) => p + s + keys[i], ``) + strings[lastIndex];
}
//# sourceMappingURL=css-to-object.js.map