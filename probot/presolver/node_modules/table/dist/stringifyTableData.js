'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts all cell values to a string.
 *
 * @param {table~row[]} rows
 * @returns {table~row[]}
 */
exports.default = rows => {
  return _lodash2.default.map(rows, cells => {
    return _lodash2.default.map(cells, String);
  });
};

module.exports = exports['default'];