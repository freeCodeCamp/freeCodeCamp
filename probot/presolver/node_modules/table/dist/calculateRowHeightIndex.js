'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _calculateCellHeight = require('./calculateCellHeight');

var _calculateCellHeight2 = _interopRequireDefault(_calculateCellHeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calculates the vertical row span index.
 *
 * @param {Array[]} rows
 * @param {Object} config
 * @returns {number[]}
 */
exports.default = (rows, config) => {
  const tableWidth = rows[0].length;

  const rowSpanIndex = [];

  _lodash2.default.forEach(rows, cells => {
    const cellHeightIndex = _lodash2.default.fill(Array(tableWidth), 1);

    _lodash2.default.forEach(cells, (value, index1) => {
      if (!_lodash2.default.isNumber(config.columns[index1].width)) {
        throw new Error('column[index].width must be a number.');
      }

      if (!_lodash2.default.isBoolean(config.columns[index1].wrapWord)) {
        throw new Error('column[index].wrapWord must be a boolean.');
      }

      cellHeightIndex[index1] = (0, _calculateCellHeight2.default)(value, config.columns[index1].width, config.columns[index1].wrapWord);
    });

    rowSpanIndex.push(_lodash2.default.max(cellHeightIndex));
  });

  return rowSpanIndex;
};

module.exports = exports['default'];