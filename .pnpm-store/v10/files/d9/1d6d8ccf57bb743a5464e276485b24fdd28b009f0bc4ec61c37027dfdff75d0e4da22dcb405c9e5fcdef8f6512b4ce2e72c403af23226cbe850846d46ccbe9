"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return {
    name: "syntax-private-property-in-object",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("privateIn");
    }

  };
});

exports.default = _default;