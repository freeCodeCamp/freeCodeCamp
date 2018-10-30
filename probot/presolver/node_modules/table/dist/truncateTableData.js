'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @todo Make it work with ASCII content.
 * @param {table~row[]} rows
 * @param {Object} config
 * @returns {table~row[]}
 */
exports.default = (rows, config) => {
  return _lodash2.default.map(rows, cells => {
    return _lodash2.default.map(cells, (content, index) => {
      return _lodash2.default.truncate(content, {
        length: config.columns[index].truncate
      });
    });
  });
};

module.exports = exports['default'];