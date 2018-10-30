'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {table~row[]} rows
 * @param {Object} config
 * @returns {table~row[]}
 */
exports.default = (rows, config) => {
  return _lodash2.default.map(rows, cells => {
    return _lodash2.default.map(cells, (value, index1) => {
      const column = config.columns[index1];

      return _lodash2.default.repeat(' ', column.paddingLeft) + value + _lodash2.default.repeat(' ', column.paddingRight);
    });
  });
};

module.exports = exports['default'];