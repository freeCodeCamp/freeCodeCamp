"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTSUnionType;
var _index = require("../generated/index.js");
var _removeTypeDuplicates = require("../../modifications/typescript/removeTypeDuplicates.js");
var _index2 = require("../../validators/generated/index.js");
function createTSUnionType(typeAnnotations) {
  const types = typeAnnotations.map(type => {
    return (0, _index2.isTSTypeAnnotation)(type) ? type.typeAnnotation : type;
  });
  const flattened = (0, _removeTypeDuplicates.default)(types);
  if (flattened.length === 1) {
    return flattened[0];
  } else {
    return (0, _index.tsUnionType)(flattened);
  }
}

//# sourceMappingURL=createTSUnionType.js.map
