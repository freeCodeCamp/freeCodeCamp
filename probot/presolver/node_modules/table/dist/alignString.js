'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _stringWidth = require('string-width');

var _stringWidth2 = _interopRequireDefault(_stringWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const alignments = ['left', 'right', 'center'];

/**
 * @param {string} subject
 * @param {number} width
 * @returns {string}
 */
const alignLeft = (subject, width) => {
  return subject + _lodash2.default.repeat(' ', width);
};

/**
 * @param {string} subject
 * @param {number} width
 * @returns {string}
 */
const alignRight = (subject, width) => {
  return _lodash2.default.repeat(' ', width) + subject;
};

/**
 * @param {string} subject
 * @param {number} width
 * @returns {string}
 */
const alignCenter = (subject, width) => {
  let halfWidth;

  halfWidth = width / 2;

  if (halfWidth % 2 === 0) {
    return _lodash2.default.repeat(' ', halfWidth) + subject + _lodash2.default.repeat(' ', halfWidth);
  } else {
    halfWidth = _lodash2.default.floor(halfWidth);

    return _lodash2.default.repeat(' ', halfWidth) + subject + _lodash2.default.repeat(' ', halfWidth + 1);
  }
};

/**
 * Pads a string to the left and/or right to position the subject
 * text in a desired alignment within a container.
 *
 * @param {string} subject
 * @param {number} containerWidth
 * @param {string} alignment One of the valid options (left, right, center).
 * @returns {string}
 */

exports.default = (subject, containerWidth, alignment) => {
  if (!_lodash2.default.isString(subject)) {
    throw new Error('Subject parameter value must be a string.');
  }

  if (!_lodash2.default.isNumber(containerWidth)) {
    throw new Error('Container width parameter value must be a number.');
  }

  const subjectWidth = (0, _stringWidth2.default)(subject);

  if (subjectWidth > containerWidth) {
    // console.log('subjectWidth', subjectWidth, 'containerWidth', containerWidth, 'subject', subject);

    throw new Error('Subject parameter value width cannot be greater than the container width.');
  }

  if (!_lodash2.default.isString(alignment)) {
    throw new Error('Alignment parameter value must be a string.');
  }

  if (alignments.indexOf(alignment) === -1) {
    throw new Error('Alignment parameter value must be a known alignment parameter value (left, right, center).');
  }

  if (subjectWidth === 0) {
    return _lodash2.default.repeat(' ', containerWidth);
  }

  const availableWidth = containerWidth - subjectWidth;

  if (alignment === 'left') {
    return alignLeft(subject, availableWidth);
  }

  if (alignment === 'right') {
    return alignRight(subject, availableWidth);
  }

  return alignCenter(subject, availableWidth);
};

module.exports = exports['default'];