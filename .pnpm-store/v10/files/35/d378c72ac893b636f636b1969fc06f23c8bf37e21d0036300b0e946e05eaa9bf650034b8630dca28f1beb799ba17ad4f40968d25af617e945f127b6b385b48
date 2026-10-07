"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
{
  var removePlugin = function (plugins, name) {
    const indices = [];
    plugins.forEach((plugin, i) => {
      const n = Array.isArray(plugin) ? plugin[0] : plugin;
      if (n === name) {
        indices.unshift(i);
      }
    });
    for (const i of indices) {
      plugins.splice(i, 1);
    }
  };
}
var _default = exports.default = (0, _helperPluginUtils.declare)((api, opts) => {
  api.assertVersion(7);
  const {
    disallowAmbiguousJSXLike,
    dts
  } = opts;
  {
    var {
      isTSX
    } = opts;
  }
  return {
    name: "syntax-typescript",
    manipulateOptions(opts, parserOpts) {
      {
        const {
          plugins
        } = parserOpts;
        removePlugin(plugins, "flow");
        removePlugin(plugins, "jsx");
        plugins.push("objectRestSpread", "classProperties");
        if (isTSX) {
          plugins.push("jsx");
        }
      }
      parserOpts.plugins.push(["typescript", {
        disallowAmbiguousJSXLike,
        dts
      }]);
    }
  };
});

//# sourceMappingURL=index.js.map
