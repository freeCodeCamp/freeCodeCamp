"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _pluginSyntaxDecorators = require("@babel/plugin-syntax-decorators");
var _helperCreateClassFeaturesPlugin = require("@babel/helper-create-class-features-plugin");
var _transformerLegacy = require("./transformer-legacy.js");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion("^7.0.0-0 || ^8.0.0-0");
  var {
    legacy
  } = options;
  const {
    version
  } = options;
  if (legacy || version === "legacy") {
    return {
      name: "proposal-decorators",
      inherits: _pluginSyntaxDecorators.default,
      visitor: _transformerLegacy.default
    };
  } else if (!version || version === "2018-09" || version === "2021-12" || version === "2022-03" || version === "2023-01" || version === "2023-05" || version === "2023-11") {
    api.assertVersion("^7.0.2 || ^8.0.0-0");
    return (0, _helperCreateClassFeaturesPlugin.createClassFeaturePlugin)({
      name: "proposal-decorators",
      api,
      feature: _helperCreateClassFeaturesPlugin.FEATURES.decorators,
      inherits: _pluginSyntaxDecorators.default,
      decoratorVersion: version
    });
  } else {
    throw new Error("The '.version' option must be one of 'legacy', '2023-11', '2023-05', '2023-01', '2022-03', or '2021-12'.");
  }
});

//# sourceMappingURL=index.js.map
