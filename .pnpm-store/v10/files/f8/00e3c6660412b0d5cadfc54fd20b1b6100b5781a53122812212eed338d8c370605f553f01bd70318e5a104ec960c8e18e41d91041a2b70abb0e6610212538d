"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
const SUPPORTED_MODULES = ["commonjs", "amd", "systemjs"];
const MODULES_NOT_FOUND = `\
@babel/plugin-transform-dynamic-import depends on a modules
transform plugin. Supported plugins are:
 - @babel/plugin-transform-modules-commonjs ^7.4.0
 - @babel/plugin-transform-modules-amd ^7.4.0
 - @babel/plugin-transform-modules-systemjs ^7.4.0

If you are using Webpack or Rollup and thus don't want
Babel to transpile your imports and exports, you can use
the @babel/plugin-syntax-dynamic-import plugin and let your
bundler handle dynamic imports.
`;
var _default = exports.default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "transform-dynamic-import",
    inherits: require("@babel/plugin-syntax-dynamic-import").default,
    pre() {
      this.file.set("@babel/plugin-proposal-dynamic-import", "7.23.4");
    },
    visitor: {
      Program() {
        const modules = this.file.get("@babel/plugin-transform-modules-*");
        if (!SUPPORTED_MODULES.includes(modules)) {
          throw new Error(MODULES_NOT_FOUND);
        }
      }
    }
  };
});

//# sourceMappingURL=index.js.map
