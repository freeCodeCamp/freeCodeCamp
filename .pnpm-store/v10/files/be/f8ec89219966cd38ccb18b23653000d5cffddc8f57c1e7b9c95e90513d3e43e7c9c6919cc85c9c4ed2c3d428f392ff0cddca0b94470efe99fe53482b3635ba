"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isSimpleType = _interopRequireDefault(require("./isSimpleType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const complexTypesWithoutWrap = new Set(['TupleTypeAnnotation', 'ObjectTypeAnnotation']);

var _default = node => {
  return !(0, _isSimpleType.default)(node) && !complexTypesWithoutWrap.has(node.type);
};

exports.default = _default;
module.exports = exports.default;