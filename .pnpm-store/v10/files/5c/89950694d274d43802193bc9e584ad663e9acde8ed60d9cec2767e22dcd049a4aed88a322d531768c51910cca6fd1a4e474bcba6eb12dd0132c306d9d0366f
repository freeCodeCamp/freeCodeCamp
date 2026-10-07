"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = verifyPlainObject;

var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));

var _warning = _interopRequireDefault(require("./warning"));

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject.default)(value)) {
    (0, _warning.default)(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
  }
}