"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _path = require("path");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  function addDisplayName(id, call) {
    const props = call.arguments[0].properties;
    let safe = true;
    for (let i = 0; i < props.length; i++) {
      const prop = props[i];
      if (_core.types.isSpreadElement(prop)) {
        continue;
      }
      const key = _core.types.toComputedKey(prop);
      if (_core.types.isStringLiteral(key, {
        value: "displayName"
      })) {
        safe = false;
        break;
      }
    }
    if (safe) {
      props.unshift(_core.types.objectProperty(_core.types.identifier("displayName"), _core.types.stringLiteral(id)));
    }
  }
  const isCreateClassCallExpression = _core.types.buildMatchMemberExpression("React.createClass");
  const isCreateClassAddon = callee => _core.types.isIdentifier(callee, {
    name: "createReactClass"
  });
  function isCreateClass(node) {
    if (!node || !_core.types.isCallExpression(node)) return false;
    if (!isCreateClassCallExpression(node.callee) && !isCreateClassAddon(node.callee)) {
      return false;
    }
    const args = node.arguments;
    if (args.length !== 1) return false;
    const first = args[0];
    if (!_core.types.isObjectExpression(first)) return false;
    return true;
  }
  return {
    name: "transform-react-display-name",
    visitor: {
      ExportDefaultDeclaration({
        node
      }, state) {
        if (isCreateClass(node.declaration)) {
          const filename = state.filename || "unknown";
          let displayName = _path.basename(filename, _path.extname(filename));
          if (displayName === "index") {
            displayName = _path.basename(_path.dirname(filename));
          }
          addDisplayName(displayName, node.declaration);
        }
      },
      CallExpression(path) {
        const {
          node
        } = path;
        if (!isCreateClass(node)) return;
        let id;
        path.find(function (path) {
          if (path.isAssignmentExpression()) {
            id = path.node.left;
          } else if (path.isObjectProperty()) {
            id = path.node.key;
          } else if (path.isVariableDeclarator()) {
            id = path.node.id;
          } else if (path.isStatement()) {
            return true;
          }
          if (id) return true;
        });
        if (!id) return;
        if (_core.types.isMemberExpression(id)) {
          id = id.property;
        }
        if (_core.types.isIdentifier(id)) {
          addDisplayName(id.name, node);
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
