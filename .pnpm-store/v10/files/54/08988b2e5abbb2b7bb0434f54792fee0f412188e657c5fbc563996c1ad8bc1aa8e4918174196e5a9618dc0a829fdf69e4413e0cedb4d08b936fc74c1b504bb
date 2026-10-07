function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
import assertString from './util/assertString';

/* eslint-disable prefer-rest-params */
export default function isLength(str, options) {
  assertString(str);
  var min;
  var max;
  if (_typeof(options) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1] || 0;
    max = arguments[2];
  }
  var presentationSequences = str.match(/[^\uFE0F\uFE0E][\uFE0F\uFE0E]/g) || [];
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - presentationSequences.length - surrogatePairs.length;
  var isInsideRange = len >= min && (typeof max === 'undefined' || len <= max);
  if (isInsideRange && Array.isArray(options === null || options === void 0 ? void 0 : options.discreteLengths)) {
    return options.discreteLengths.some(function (discreteLen) {
      return discreteLen === len;
    });
  }
  return isInsideRange;
}