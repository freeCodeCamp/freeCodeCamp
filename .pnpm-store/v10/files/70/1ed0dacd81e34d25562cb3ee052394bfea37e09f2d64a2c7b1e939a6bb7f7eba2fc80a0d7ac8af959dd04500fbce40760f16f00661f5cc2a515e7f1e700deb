"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperCreateRegexpFeaturesPlugin = require("@babel/helper-create-regexp-features-plugin");
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = (0, _helperPluginUtils.declare)((api, options) => {
  const {
    runtime
  } = options;
  if (runtime !== undefined && typeof runtime !== "boolean") {
    throw new Error("The 'runtime' option must be boolean");
  }
  return (0, _helperCreateRegexpFeaturesPlugin.createRegExpFeaturePlugin)({
    name: "transform-named-capturing-groups-regex",
    feature: "namedCaptureGroups",
    options: {
      runtime
    }
  });
});
exports.default = _default;

//# sourceMappingURL=index.js.map
