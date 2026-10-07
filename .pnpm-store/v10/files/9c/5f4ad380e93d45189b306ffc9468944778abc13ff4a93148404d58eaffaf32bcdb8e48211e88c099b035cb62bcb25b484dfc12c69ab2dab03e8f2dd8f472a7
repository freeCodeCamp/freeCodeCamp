"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = string_ => string_.split(/ *; */).shift();

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = value => {
  const object = {};
  var _iterator = _createForOfIteratorHelper(value.split(/ *; */)),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      const string_ = _step.value;
      const parts = string_.split(/ *= */);
      const key = parts.shift();
      const value = parts.shift();
      if (key && value) object[key] = value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return object;
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = value => {
  const object = {};
  var _iterator2 = _createForOfIteratorHelper(value.split(/ *, */)),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      const string_ = _step2.value;
      const parts = string_.split(/ *; */);
      const url = parts[0].slice(1, -1);
      const rel = parts[1].split(/ *= */)[1].slice(1, -1);
      object[rel] = url;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return object;
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = (header, changesOrigin) => {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host;
  // secuirty
  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }
  return header;
};

/**
 * Check if `obj` is an object.
 *
 * @param {Object} object
 * @return {Boolean}
 * @api private
 */
exports.isObject = object => {
  return object !== null && typeof object === 'object';
};

/**
 * Object.hasOwn fallback/polyfill.
 *
 * @type {(object: object, property: string) => boolean} object
 * @api private
 */
exports.hasOwn = Object.hasOwn || function (object, property) {
  if (object == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }
  return Object.prototype.hasOwnProperty.call(new Object(object), property);
};
exports.mixin = (target, source) => {
  for (const key in source) {
    if (exports.hasOwn(source, key)) {
      target[key] = source[key];
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJleHBvcnRzIiwidHlwZSIsInN0cmluZ18iLCJzcGxpdCIsInNoaWZ0IiwicGFyYW1zIiwidmFsdWUiLCJvYmplY3QiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsIm4iLCJkb25lIiwicGFydHMiLCJrZXkiLCJlcnIiLCJlIiwiZiIsInBhcnNlTGlua3MiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwidXJsIiwic2xpY2UiLCJyZWwiLCJjbGVhbkhlYWRlciIsImhlYWRlciIsImNoYW5nZXNPcmlnaW4iLCJob3N0IiwiYXV0aG9yaXphdGlvbiIsImNvb2tpZSIsImlzT2JqZWN0IiwiaGFzT3duIiwiT2JqZWN0IiwicHJvcGVydHkiLCJUeXBlRXJyb3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJtaXhpbiIsInRhcmdldCIsInNvdXJjZSJdLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlscy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJldHVybiB0aGUgbWltZSB0eXBlIGZvciB0aGUgZ2l2ZW4gYHN0cmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy50eXBlID0gKHN0cmluZ18pID0+IHN0cmluZ18uc3BsaXQoLyAqOyAqLykuc2hpZnQoKTtcblxuLyoqXG4gKiBSZXR1cm4gaGVhZGVyIGZpZWxkIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5wYXJhbXMgPSAodmFsdWUpID0+IHtcbiAgY29uc3Qgb2JqZWN0ID0ge307XG4gIGZvciAoY29uc3Qgc3RyaW5nXyBvZiB2YWx1ZS5zcGxpdCgvICo7ICovKSkge1xuICAgIGNvbnN0IHBhcnRzID0gc3RyaW5nXy5zcGxpdCgvICo9ICovKTtcbiAgICBjb25zdCBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuICAgIGNvbnN0IHZhbHVlID0gcGFydHMuc2hpZnQoKTtcblxuICAgIGlmIChrZXkgJiYgdmFsdWUpIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufTtcblxuLyoqXG4gKiBQYXJzZSBMaW5rIGhlYWRlciBmaWVsZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5wYXJzZUxpbmtzID0gKHZhbHVlKSA9PiB7XG4gIGNvbnN0IG9iamVjdCA9IHt9O1xuICBmb3IgKGNvbnN0IHN0cmluZ18gb2YgdmFsdWUuc3BsaXQoLyAqLCAqLykpIHtcbiAgICBjb25zdCBwYXJ0cyA9IHN0cmluZ18uc3BsaXQoLyAqOyAqLyk7XG4gICAgY29uc3QgdXJsID0gcGFydHNbMF0uc2xpY2UoMSwgLTEpO1xuICAgIGNvbnN0IHJlbCA9IHBhcnRzWzFdLnNwbGl0KC8gKj0gKi8pWzFdLnNsaWNlKDEsIC0xKTtcbiAgICBvYmplY3RbcmVsXSA9IHVybDtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG4vKipcbiAqIFN0cmlwIGNvbnRlbnQgcmVsYXRlZCBmaWVsZHMgZnJvbSBgaGVhZGVyYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyXG4gKiBAcmV0dXJuIHtPYmplY3R9IGhlYWRlclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5jbGVhbkhlYWRlciA9IChoZWFkZXIsIGNoYW5nZXNPcmlnaW4pID0+IHtcbiAgZGVsZXRlIGhlYWRlclsnY29udGVudC10eXBlJ107XG4gIGRlbGV0ZSBoZWFkZXJbJ2NvbnRlbnQtbGVuZ3RoJ107XG4gIGRlbGV0ZSBoZWFkZXJbJ3RyYW5zZmVyLWVuY29kaW5nJ107XG4gIGRlbGV0ZSBoZWFkZXIuaG9zdDtcbiAgLy8gc2VjdWlydHlcbiAgaWYgKGNoYW5nZXNPcmlnaW4pIHtcbiAgICBkZWxldGUgaGVhZGVyLmF1dGhvcml6YXRpb247XG4gICAgZGVsZXRlIGhlYWRlci5jb29raWU7XG4gIH1cblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5leHBvcnRzLmlzT2JqZWN0ID0gKG9iamVjdCkgPT4ge1xuICByZXR1cm4gb2JqZWN0ICE9PSBudWxsICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xufTtcblxuLyoqXG4gKiBPYmplY3QuaGFzT3duIGZhbGxiYWNrL3BvbHlmaWxsLlxuICpcbiAqIEB0eXBlIHsob2JqZWN0OiBvYmplY3QsIHByb3BlcnR5OiBzdHJpbmcpID0+IGJvb2xlYW59IG9iamVjdFxuICogQGFwaSBwcml2YXRlXG4gKi9cbmV4cG9ydHMuaGFzT3duID1cbiAgT2JqZWN0Lmhhc093biB8fFxuICBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXcgT2JqZWN0KG9iamVjdCksIHByb3BlcnR5KTtcbiAgfTtcblxuZXhwb3J0cy5taXhpbiA9ICh0YXJnZXQsIHNvdXJjZSkgPT4ge1xuICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICBpZiAoZXhwb3J0cy5oYXNPd24oc291cmNlLCBrZXkpKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxufTtcbiJdLCJt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