"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-export-namespace-from",
    inherits: require("@babel/plugin-syntax-export-namespace-from").default,
    visitor: {
      ExportNamedDeclaration(path) {
        var _exported$name;
        const {
          node,
          scope
        } = path;
        const {
          specifiers
        } = node;
        const index = _core.types.isExportDefaultSpecifier(specifiers[0]) ? 1 : 0;
        if (!_core.types.isExportNamespaceSpecifier(specifiers[index])) return;
        const nodes = [];
        if (index === 1) {
          nodes.push(_core.types.exportNamedDeclaration(null, [specifiers.shift()], node.source));
        }
        const specifier = specifiers.shift();
        const {
          exported
        } = specifier;
        const uid = scope.generateUidIdentifier((_exported$name = exported.name) != null ? _exported$name : exported.value);
        nodes.push(_core.types.importDeclaration([_core.types.importNamespaceSpecifier(uid)], _core.types.cloneNode(node.source)), _core.types.exportNamedDeclaration(null, [_core.types.exportSpecifier(_core.types.cloneNode(uid), exported)]));
        if (node.specifiers.length >= 1) {
          nodes.push(node);
        }
        const [importDeclaration] = path.replaceWithMultiple(nodes);
        path.scope.registerDeclaration(importDeclaration);
      }
    }
  };
});

//# sourceMappingURL=index.js.map
