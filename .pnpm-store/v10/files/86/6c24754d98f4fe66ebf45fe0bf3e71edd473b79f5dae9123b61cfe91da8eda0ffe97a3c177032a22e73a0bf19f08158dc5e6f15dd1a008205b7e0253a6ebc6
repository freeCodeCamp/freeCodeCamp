"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperBuilderBinaryAssignmentOperatorVisitor = require("@babel/helper-builder-binary-assignment-operator-visitor");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-exponentiation-operator",
    visitor: (0, _helperBuilderBinaryAssignmentOperatorVisitor.default)({
      operator: "**",
      build(left, right) {
        return _core.types.callExpression(_core.types.memberExpression(_core.types.identifier("Math"), _core.types.identifier("pow")), [left, right]);
      }
    })
  };
});

//# sourceMappingURL=index.js.map
