"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _getOwnPropertyDescriptor = require("../core-js/object/get-own-property-descriptor");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getOwnPropertyNames = require("../core-js/object/get-own-property-names");

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, defaults) {
  var keys = (0, _getOwnPropertyNames2.default)(defaults);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = (0, _getOwnPropertyDescriptor2.default)(defaults, key);

    if (value && value.configurable && obj[key] === undefined) {
      (0, _defineProperty2.default)(obj, key, value);
    }
  }

  return obj;
};