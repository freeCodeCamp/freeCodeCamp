"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _pluginSyntaxExportDefaultFrom = require("@babel/plugin-syntax-export-default-from");
var _core = require("@babel/core");
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "proposal-export-default-from",
    inherits: _pluginSyntaxExportDefaultFrom.default,
    visitor: {
      ExportNamedDeclaration(path) {
        const {
          node
        } = path;
        const {
          specifiers,
          source
        } = node;
        if (!_core.types.isExportDefaultSpecifier(specifiers[0])) return;
        const {
          exported
        } = specifiers.shift();
        if (specifiers.every(s => _core.types.isExportSpecifier(s))) {
          specifiers.unshift(_core.types.exportSpecifier(_core.types.identifier("default"), exported));
          return;
        }
        path.insertBefore(_core.types.exportNamedDeclaration(null, [_core.types.exportSpecifier(_core.types.identifier("default"), exported)], _core.types.cloneNode(source)));
      }
    }
  };
});

//# sourceMappingURL=index.js.map
