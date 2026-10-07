"use strict";

exports.__esModule = true;
exports.default = void 0;

var _toCamelCase = _interopRequireDefault(require("to-camel-case"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var namespacer = '/';

var _default = function _default(type) {
  return type.indexOf(namespacer) === -1 ? (0, _toCamelCase.default)(type) : type.split(namespacer).map(_toCamelCase.default).join(namespacer);
};

exports.default = _default;