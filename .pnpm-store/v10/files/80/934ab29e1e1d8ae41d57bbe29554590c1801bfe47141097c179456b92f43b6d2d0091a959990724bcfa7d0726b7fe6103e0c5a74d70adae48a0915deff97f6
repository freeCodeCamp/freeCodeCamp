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
    name: "transform-private-methods",
    api,
    feature: _helperCreateClassFeaturesPlugin.FEATURES.privateMethods,
    loose: options.loose,
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("classPrivateMethods");
    }
  });
});

//# sourceMappingURL=index.js.map
