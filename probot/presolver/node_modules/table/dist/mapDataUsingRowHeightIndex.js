'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _wrapString = require('./wrapString');

var _wrapString2 = _interopRequireDefault(_wrapString);

var _wrapWord = require('./wrapWord');

var _wrapWord2 = _interopRequireDefault(_wrapWord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Array} unmappedRows
 * @param {number[]} rowHeightIndex
 * @param {Object} config
 * @returns {Array}
 */
exports.default = (unmappedRows, rowHeightIndex, config) => {
  const tableWidth = unmappedRows[0].length;

  const mappedRows = _lodash2.default.map(unmappedRows, (cells, index0) => {
    const rowHeight = _lodash2.default.times(rowHeightIndex[index0], () => {
      return _lodash2.default.fill(Array(tableWidth), '');
    });

    // rowHeight
    //     [{row index within rowSaw; index2}]
    //     [{cell index within a virtual row; index1}]

    _lodash2.default.forEach(cells, (value, index1) => {
      let chunkedValue;

      if (config.columns[index1].wrapWord) {
        chunkedValue = (0, _wrapWord2.default)(value, config.columns[index1].width);
      } else {
        chunkedValue = (0, _wrapString2.default)(value, config.columns[index1].width);
      }

      _lodash2.default.forEach(chunkedValue, (part, index2) => {
        rowHeight[index2][index1] = part;
      });
    });

    return rowHeight;
  });

  return _lodash2.default.flatten(mappedRows);
};

module.exports = exports['default'];