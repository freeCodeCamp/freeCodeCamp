function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* eslint-disable prefer-rest-params */
import assertString from './util/assertString';
var rgbColor = /^rgb\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){2}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/;
var rgbaColor = /^rgba\((([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),){3}(0?\.\d\d?|1(\.0)?|0(\.0)?)\)$/;
var rgbColorPercent = /^rgb\((([0-9]%|[1-9][0-9]%|100%),){2}([0-9]%|[1-9][0-9]%|100%)\)$/;
var rgbaColorPercent = /^rgba\((([0-9]%|[1-9][0-9]%|100%),){3}(0?\.\d\d?|1(\.0)?|0(\.0)?)\)$/;
var startsWithRgb = /^rgba?/;
export default function isRgbColor(str, options) {
  assertString(str);
  // default options to true for percent and false for spaces
  var allowSpaces = false;
  var includePercentValues = true;
  if (_typeof(options) !== 'object') {
    if (arguments.length >= 2) {
      includePercentValues = arguments[1];
    }
  } else {
    allowSpaces = options.allowSpaces !== undefined ? options.allowSpaces : allowSpaces;
    includePercentValues = options.includePercentValues !== undefined ? options.includePercentValues : includePercentValues;
  }
  if (allowSpaces) {
    // make sure it starts with continuous rgba? without spaces before stripping
    if (!startsWithRgb.test(str)) {
      return false;
    }
    // strip all whitespace
    str = str.replace(/\s/g, '');
  }
  if (!includePercentValues) {
    return rgbColor.test(str) || rgbaColor.test(str);
  }
  return rgbColor.test(str) || rgbaColor.test(str) || rgbColorPercent.test(str) || rgbaColorPercent.test(str);
}