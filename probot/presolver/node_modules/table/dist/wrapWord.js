'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _sliceAnsi = require('slice-ansi');

var _sliceAnsi2 = _interopRequireDefault(_sliceAnsi);

var _stringWidth = require('string-width');

var _stringWidth2 = _interopRequireDefault(_stringWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {string} input
 * @param {number} size
 * @returns {Array}
 */
exports.default = (input, size) => {
  let subject;

  subject = input;

  const chunks = [];

  // https://regex101.com/r/gY5kZ1/1
  const re = new RegExp('(^.{1,' + size + '}(\\s+|$))|(^.{1,' + (size - 1) + '}(\\\\|/|_|\\.|,|;|-))');

  do {
    let chunk;

    chunk = subject.match(re);

    if (chunk) {
      chunk = chunk[0];

      subject = (0, _sliceAnsi2.default)(subject, (0, _stringWidth2.default)(chunk));

      chunk = _lodash2.default.trim(chunk);
    } else {
      chunk = (0, _sliceAnsi2.default)(subject, 0, size);
      subject = (0, _sliceAnsi2.default)(subject, size);
    }

    chunks.push(chunk);
  } while ((0, _stringWidth2.default)(subject));

  return chunks;
};

module.exports = exports['default'];