"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueriesForElement = getQueriesForElement;
var defaultQueries = _interopRequireWildcard(require("./queries"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/**
 * @typedef {{[key: string]: Function}} FuncMap
 */

/**
 * @param {HTMLElement} element container
 * @param {FuncMap} queries object of functions
 * @param {Object} initialValue for reducer
 * @returns {FuncMap} returns object of functions bound to container
 */
function getQueriesForElement(element, queries = defaultQueries, initialValue = {}) {
  return Object.keys(queries).reduce((helpers, key) => {
    const fn = queries[key];
    helpers[key] = fn.bind(null, element);
    return helpers;
  }, initialValue);
}