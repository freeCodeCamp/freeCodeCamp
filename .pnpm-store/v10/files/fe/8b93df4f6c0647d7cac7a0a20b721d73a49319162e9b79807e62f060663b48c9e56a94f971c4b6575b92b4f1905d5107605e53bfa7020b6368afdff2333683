/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * Unicode-enabled extra utility functions not always needed.
 */
'use strict';

var UnicodeUtils = require("./UnicodeUtils");
/**
 * @param {number} codePoint  Valid Unicode code-point
 * @param {number} len        Zero-padded minimum width of result
 * @return {string}           A zero-padded hexadecimal string (00XXXX)
 */


function zeroPaddedHex(codePoint, len) {
  var codePointHex = codePoint.toString(16).toUpperCase();
  var numZeros = Math.max(0, len - codePointHex.length);
  var result = '';

  for (var i = 0; i < numZeros; i++) {
    result += '0';
  }

  result += codePointHex;
  return result;
}
/**
 * @param {number} codePoint  Valid Unicode code-point
 * @return {string}           A formatted Unicode code-point string
 *                            of the format U+XXXX, U+XXXXX, or U+XXXXXX
 */


function formatCodePoint(codePoint) {
  codePoint = codePoint || 0; // NaN --> 0

  var formatted = '';

  if (codePoint <= 0xFFFF) {
    formatted = zeroPaddedHex(codePoint, 4);
  } else {
    formatted = codePoint.toString(16).toUpperCase();
  }

  return 'U+' + formatted;
}
/**
 * Get a list of formatted (string) Unicode code-points from a String
 *
 * @param {string} str        Valid Unicode string
 * @return {array<string>}    A list of formatted code-point strings
 */


function getCodePointsFormatted(str) {
  var codePoints = UnicodeUtils.getCodePoints(str);
  return codePoints.map(formatCodePoint);
}

var specialEscape = {
  0x07: '\\a',
  0x08: '\\b',
  0x0C: '\\f',
  0x0A: '\\n',
  0x0D: '\\r',
  0x09: '\\t',
  0x0B: '\\v',
  0x22: '\\"',
  0x5c: '\\\\'
};
/**
 * Returns a double-quoted PHP string with all non-printable and
 * non-US-ASCII sequences escaped.
 *
 * @param {string} str Valid Unicode string
 * @return {string}    Double-quoted string with Unicode sequences escaped
 */

function phpEscape(s) {
  var result = '"';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = UnicodeUtils.getCodePoints(s)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var cp = _step.value;
      var special = specialEscape[cp];

      if (special !== undefined) {
        result += special;
      } else if (cp >= 0x20 && cp <= 0x7e) {
        result += String.fromCodePoint(cp);
      } else if (cp <= 0xFFFF) {
        result += "\\u{" + zeroPaddedHex(cp, 4) + '}';
      } else {
        result += "\\u{" + zeroPaddedHex(cp, 6) + '}';
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  result += '"';
  return result;
}
/**
 * Returns a double-quoted Java or JavaScript string with all
 * non-printable and non-US-ASCII sequences escaped.
 *
 * @param {string} str Valid Unicode string
 * @return {string}    Double-quoted string with Unicode sequences escaped
 */


function jsEscape(s) {
  var result = '"';

  for (var i = 0; i < s.length; i++) {
    var cp = s.charCodeAt(i);
    var special = specialEscape[cp];

    if (special !== undefined) {
      result += special;
    } else if (cp >= 0x20 && cp <= 0x7e) {
      result += String.fromCodePoint(cp);
    } else {
      result += "\\u" + zeroPaddedHex(cp, 4);
    }
  }

  result += '"';
  return result;
}

function c11Escape(s) {
  var result = '';
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = UnicodeUtils.getCodePoints(s)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var cp = _step2.value;
      var special = specialEscape[cp];

      if (special !== undefined) {
        result += special;
      } else if (cp >= 0x20 && cp <= 0x7e) {
        result += String.fromCodePoint(cp);
      } else if (cp <= 0xFFFF) {
        result += "\\u" + zeroPaddedHex(cp, 4);
      } else {
        result += "\\U" + zeroPaddedHex(cp, 8);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
}
/**
 * Returns a double-quoted C string with all non-printable and
 * non-US-ASCII sequences escaped.
 *
 * @param {string} str Valid Unicode string
 * @return {string}    Double-quoted string with Unicode sequences escaped
 */


function cEscape(s) {
  return 'u8"' + c11Escape(s) + '"';
}
/**
 * Returns a double-quoted Objective-C string with all non-printable
 * and non-US-ASCII sequences escaped.
 *
 * @param {string} str Valid Unicode string
 * @return {string}    Double-quoted string with Unicode sequences escaped
 */


function objcEscape(s) {
  return '@"' + c11Escape(s) + '"';
}
/**
 * Returns a double-quoted Python string with all non-printable
 * and non-US-ASCII sequences escaped.
 *
 * @param {string} str Valid Unicode string
 * @return {string}    Double-quoted string with Unicode sequences escaped
 */


function pyEscape(s) {
  return 'u"' + c11Escape(s) + '"';
}

var UnicodeUtilsExtra = {
  formatCodePoint: formatCodePoint,
  getCodePointsFormatted: getCodePointsFormatted,
  zeroPaddedHex: zeroPaddedHex,
  phpEscape: phpEscape,
  jsEscape: jsEscape,
  cEscape: cEscape,
  objcEscape: objcEscape,
  pyEscape: pyEscape
};
module.exports = UnicodeUtilsExtra;