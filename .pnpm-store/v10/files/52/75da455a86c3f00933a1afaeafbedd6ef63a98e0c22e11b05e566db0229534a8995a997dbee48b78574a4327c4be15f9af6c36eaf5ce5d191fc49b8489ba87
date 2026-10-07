"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUnionType = createUnionType;
var _t = require("@babel/types");
const {
  createFlowUnionType,
  createTSUnionType,
  createUnionTypeAnnotation,
  isFlowType,
  isTSType
} = _t;
function createUnionType(types) {
  if (types.every(v => isFlowType(v))) {
    if (createFlowUnionType) {
      return createFlowUnionType(types);
    }
    return createUnionTypeAnnotation(types);
  } else if (types.every(v => isTSType(v))) {
    if (createTSUnionType) {
      return createTSUnionType(types);
    }
  }
}

//# sourceMappingURL=util.js.map
