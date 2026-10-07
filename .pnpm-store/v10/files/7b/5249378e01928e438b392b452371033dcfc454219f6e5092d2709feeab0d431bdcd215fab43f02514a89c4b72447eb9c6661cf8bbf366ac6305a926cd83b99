"use strict";

exports.__esModule = true;
exports.default = void 0;

var _isPlainObject = _interopRequireDefault(require("./isPlainObject"));

var _isMap = _interopRequireDefault(require("./isMap"));

var _hasGeneratorInterface = _interopRequireDefault(require("./hasGeneratorInterface"));

var _flattenWhenNode = _interopRequireDefault(require("./flattenWhenNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _flattenWhenNode.default)(function (node) {
  return ((0, _isPlainObject.default)(node) || (0, _isMap.default)(node)) && !(0, _hasGeneratorInterface.default)(node);
});

exports.default = _default;