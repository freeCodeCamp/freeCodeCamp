"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFlowUnionType;
var _index = require("../generated/index.js");
var _removeTypeDuplicates = require("../../modifications/flow/removeTypeDuplicates.js");
function createFlowUnionType(types) {
  const flattened = (0, _removeTypeDuplicates.default)(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _index.unionTypeAnnotation)(flattened);
  }
}

//# sourceMappingURL=createFlowUnionType.js.map
