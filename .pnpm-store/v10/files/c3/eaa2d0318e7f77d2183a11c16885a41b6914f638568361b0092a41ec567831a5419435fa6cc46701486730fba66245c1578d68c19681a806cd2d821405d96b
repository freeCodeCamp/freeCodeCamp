"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, {
  loose = false
}) => {
  var _api$assumption;
  api.assertVersion(7);
  const noDocumentAll = (_api$assumption = api.assumption("noDocumentAll")) != null ? _api$assumption : loose;
  return {
    name: "transform-nullish-coalescing-operator",
    inherits: require("@babel/plugin-syntax-nullish-coalescing-operator").default,
    visitor: {
      LogicalExpression(path) {
        const {
          node,
          scope
        } = path;
        if (node.operator !== "??") {
          return;
        }
        let ref;
        let assignment;
        if (scope.isStatic(node.left)) {
          ref = node.left;
          assignment = _core.types.cloneNode(node.left);
        } else if (scope.path.isPattern()) {
          path.replaceWith(_core.template.statement.ast`(() => ${path.node})()`);
          return;
        } else {
          ref = scope.generateUidIdentifierBasedOnNode(node.left);
          scope.push({
            id: _core.types.cloneNode(ref)
          });
          assignment = _core.types.assignmentExpression("=", ref, node.left);
        }
        path.replaceWith(_core.types.conditionalExpression(noDocumentAll ? _core.types.binaryExpression("!=", assignment, _core.types.nullLiteral()) : _core.types.logicalExpression("&&", _core.types.binaryExpression("!==", assignment, _core.types.nullLiteral()), _core.types.binaryExpression("!==", _core.types.cloneNode(ref), scope.buildUndefinedNode())), _core.types.cloneNode(ref), node.right));
      }
    }
  };
});

//# sourceMappingURL=index.js.map
