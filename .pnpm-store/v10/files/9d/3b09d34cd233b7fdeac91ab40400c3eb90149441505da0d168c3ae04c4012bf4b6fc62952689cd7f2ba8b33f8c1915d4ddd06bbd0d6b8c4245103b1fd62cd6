"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, {
  deprecatedAssertSyntax
}) => {
  api.assertVersion("^7.22.0");
  if (deprecatedAssertSyntax != null && typeof deprecatedAssertSyntax !== "boolean") {
    throw new Error("'deprecatedAssertSyntax' must be a boolean, if specified.");
  }
  return {
    name: "syntax-import-attributes",
    manipulateOptions({
      parserOpts,
      generatorOpts
    }) {
      var _generatorOpts$import;
      (_generatorOpts$import = generatorOpts.importAttributesKeyword) != null ? _generatorOpts$import : generatorOpts.importAttributesKeyword = "with";
      parserOpts.plugins.push(["importAttributes", {
        deprecatedAssertSyntax: Boolean(deprecatedAssertSyntax)
      }]);
    }
  };
});

//# sourceMappingURL=index.js.map
