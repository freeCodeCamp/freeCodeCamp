"use strict";

exports.__esModule = true;
exports.default = void 0;
var _utils = require("../utils");
var _default = callProvider => {
  function property(object, key, placement, path) {
    return callProvider({
      kind: "property",
      object,
      key,
      placement
    }, path);
  }
  return {
    // Symbol(), new Promise
    ReferencedIdentifier(path) {
      const {
        node: {
          name
        },
        scope
      } = path;
      if (scope.getBindingIdentifier(name)) return;
      callProvider({
        kind: "global",
        name
      }, path);
    },
    MemberExpression(path) {
      const key = (0, _utils.resolveKey)(path.get("property"), path.node.computed);
      if (!key || key === "prototype") return;
      const object = path.get("object");
      if (object.isIdentifier()) {
        const binding = object.scope.getBinding(object.node.name);
        if (binding && binding.path.isImportNamespaceSpecifier()) return;
      }
      const source = (0, _utils.resolveSource)(object);
      return property(source.id, key, source.placement, path);
    },
    ObjectPattern(path) {
      const {
        parentPath,
        parent
      } = path;
      let obj;

      // const { keys, values } = Object
      if (parentPath.isVariableDeclarator()) {
        obj = parentPath.get("init");
        // ({ keys, values } = Object)
      } else if (parentPath.isAssignmentExpression()) {
        obj = parentPath.get("right");
        // !function ({ keys, values }) {...} (Object)
        // resolution does not work after properties transform :-(
      } else if (parentPath.isFunction()) {
        const grand = parentPath.parentPath;
        if (grand.isCallExpression() || grand.isNewExpression()) {
          if (grand.node.callee === parent) {
            obj = grand.get("arguments")[path.key];
          }
        }
      }
      let id = null;
      let placement = null;
      if (obj) ({
        id,
        placement
      } = (0, _utils.resolveSource)(obj));
      for (const prop of path.get("properties")) {
        if (prop.isObjectProperty()) {
          const key = (0, _utils.resolveKey)(prop.get("key"));
          if (key) property(id, key, placement, prop);
        }
      }
    },
    BinaryExpression(path) {
      if (path.node.operator !== "in") return;
      const source = (0, _utils.resolveSource)(path.get("right"));
      const key = (0, _utils.resolveKey)(path.get("left"), true);
      if (!key) return;
      callProvider({
        kind: "in",
        object: source.id,
        key,
        placement: source.placement
      }, path);
    }
  };
};
exports.default = _default;