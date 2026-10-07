"use strict";

exports.__esModule = true;
exports.getValueAt = getValueAt;
function getValueAt(obj, selector) {
  const selectors = typeof selector === `string` ? selector.split(`.`) : selector;
  return get(obj, selectors);
}
function get(obj, selectors) {
  if (typeof obj !== `object` || obj === null) return undefined;
  if (Array.isArray(obj)) return getArray(obj, selectors);
  const [key, ...rest] = selectors;
  const value = obj[key];
  if (!rest.length) return value;
  if (Array.isArray(value)) return getArray(value, rest);
  if (value && typeof value === `object`) return get(value, rest);
  return undefined;
}
function getArray(arr, selectors) {
  return arr.map(value => Array.isArray(value) ? getArray(value, selectors) : get(value, selectors)).filter(v => v !== undefined);
}
//# sourceMappingURL=get-value-at.js.map