"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperReplaceSupers = require("@babel/helper-replace-supers");
var _core = require("@babel/core");
function replacePropertySuper(path, getObjectRef, file) {
  const replaceSupers = new _helperReplaceSupers.default({
    getObjectRef: getObjectRef,
    methodPath: path,
    file: file
  });
  replaceSupers.replace();
}
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  const newLets = new Set();
  return {
    name: "transform-object-super",
    visitor: {
      Loop: {
        exit(path) {
          newLets.forEach(v => {
            if (v.scopePath === path) {
              path.scope.push({
                id: v.id,
                kind: "let"
              });
              path.scope.crawl();
              path.requeue();
              newLets.delete(v);
            }
          });
        }
      },
      ObjectExpression(path, state) {
        let objectRef;
        const getObjectRef = () => objectRef = objectRef || path.scope.generateUidIdentifier("obj");
        path.get("properties").forEach(propPath => {
          if (!propPath.isMethod()) return;
          replacePropertySuper(propPath, getObjectRef, state.file);
        });
        if (objectRef) {
          const scopePath = path.findParent(p => p.isFunction() || p.isProgram() || p.isLoop());
          const useLet = scopePath.isLoop();
          if (useLet) {
            newLets.add({
              scopePath,
              id: _core.types.cloneNode(objectRef)
            });
          } else {
            path.scope.push({
              id: _core.types.cloneNode(objectRef),
              kind: "var"
            });
          }
          path.replaceWith(_core.types.assignmentExpression("=", _core.types.cloneNode(objectRef), path.node));
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
