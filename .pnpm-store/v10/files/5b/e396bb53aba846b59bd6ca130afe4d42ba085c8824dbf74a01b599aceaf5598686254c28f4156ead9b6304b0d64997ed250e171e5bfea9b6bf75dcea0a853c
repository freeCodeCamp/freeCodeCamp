"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = scrollParent;

var _css = _interopRequireDefault(require("./css"));

var _height = _interopRequireDefault(require("./height"));

var _isDocument = _interopRequireDefault(require("./isDocument"));

/* eslint-disable no-cond-assign, no-continue */

/**
 * Find the first scrollable parent of an element.
 *
 * @param element Starting element
 * @param firstPossible Stop at the first scrollable parent, even if it's not currently scrollable
 */
function scrollParent(element, firstPossible) {
  var position = (0, _css.default)(element, 'position');
  var excludeStatic = position === 'absolute';
  var ownerDoc = element.ownerDocument;
  if (position === 'fixed') return ownerDoc || document; // @ts-ignore

  while ((element = element.parentNode) && !(0, _isDocument.default)(element)) {
    var isStatic = excludeStatic && (0, _css.default)(element, 'position') === 'static';
    var style = ((0, _css.default)(element, 'overflow') || '') + ((0, _css.default)(element, 'overflow-y') || '') + (0, _css.default)(element, 'overflow-x');
    if (isStatic) continue;

    if (/(auto|scroll)/.test(style) && (firstPossible || (0, _height.default)(element) < element.scrollHeight)) {
      return element;
    }
  }

  return ownerDoc || document;
}

module.exports = exports["default"];