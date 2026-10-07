"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion(7);
  const {
    all,
    enums
  } = options;
  if (typeof all !== "boolean" && all !== undefined) {
    throw new Error(".all must be a boolean, or undefined");
  }
  {
    if (enums === false) {
      console.warn("The .enums option has been removed and it's now always enabled.");
    }
  }
  return {
    name: "syntax-flow",
    manipulateOptions(opts, parserOpts) {
      {
        if (parserOpts.plugins.some(p => (Array.isArray(p) ? p[0] : p) === "typescript")) {
          return;
        }
      }
      {
        parserOpts.plugins.push(["flow", {
          all,
          enums
        }]);
      }
    }
  };
});

//# sourceMappingURL=index.js.map
