"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _helperCreateClassFeaturesPlugin = require("@babel/helper-create-class-features-plugin");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion(7);
  return (0, _helperCreateClassFeaturesPlugin.createClassFeaturePlugin)({
    name: "transform-class-properties",
    api,
    feature: _helperCreateClassFeaturesPlugin.FEATURES.fields,
    loose: options.loose,
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("classProperties", "classPrivateProperties");
    }
  });
});

//# sourceMappingURL=index.js.map
