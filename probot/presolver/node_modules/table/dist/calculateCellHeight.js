'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _stringWidth = require('string-width');

var _stringWidth2 = _interopRequireDefault(_stringWidth);

var _wrapWord = require('./wrapWord');

var _wrapWord2 = _interopRequireDefault(_wrapWord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} value
 * @param {number} columnWidth
 * @param {boolean} useWrapWord
 * @returns {number}
 */
exports.default = function (value, columnWidth) {
  let useWrapWord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!_lodash2.default.isString(value)) {
    throw new Error('Value must be a string.');
  }

  if (!_lodash2.default.isInteger(columnWidth)) {
    throw new Error('Column width must be an integer.');
  }

  if (columnWidth < 1) {
    throw new Error('Column width must be greater than 0.');
  }

  if (useWrapWord) {
    return (0, _wrapWord2.default)(value, columnWidth).length;
  }

  return _lodash2.default.ceil((0, _stringWidth2.default)(value) / columnWidth);
};

module.exports = exports['default'];