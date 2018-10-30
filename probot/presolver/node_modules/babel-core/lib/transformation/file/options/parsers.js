"use strict";

exports.__esModule = true;
exports.filename = undefined;
exports.boolean = boolean;
exports.booleanString = booleanString;
exports.list = list;

var _slash = require("slash");

var _slash2 = _interopRequireDefault(_slash);

var _util = require("../../../util");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filename = exports.filename = _slash2.default;

function boolean(val) {
  return !!val;
}

function booleanString(val) {
  return util.booleanify(val);
}

function list(val) {
  return util.list(val);
}