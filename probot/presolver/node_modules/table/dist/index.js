'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBorderCharacters = exports.createStream = undefined;

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

var _createStream = require('./createStream');

var _createStream2 = _interopRequireDefault(_createStream);

var _getBorderCharacters = require('./getBorderCharacters');

var _getBorderCharacters2 = _interopRequireDefault(_getBorderCharacters);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createStream = _createStream2.default;
exports.getBorderCharacters = _getBorderCharacters2.default;
exports.default = _table2.default;