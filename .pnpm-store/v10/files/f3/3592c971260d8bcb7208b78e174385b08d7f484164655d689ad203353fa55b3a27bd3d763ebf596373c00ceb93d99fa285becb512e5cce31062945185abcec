"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helperCreateRegexpFeaturesPlugin = require("@babel/helper-create-regexp-features-plugin");
var _helperPluginUtils = require("@babel/helper-plugin-utils");
var _default = exports.default = (0, _helperPluginUtils.declare)((api, options) => {
  api.assertVersion(7);
  const {
    useUnicodeFlag = true
  } = options;
  if (typeof useUnicodeFlag !== "boolean") {
    throw new Error(".useUnicodeFlag must be a boolean, or undefined");
  }
  return (0, _helperCreateRegexpFeaturesPlugin.createRegExpFeaturePlugin)({
    name: "transform-unicode-property-regex",
    feature: "unicodePropertyEscape",
    options: {
      useUnicodeFlag
    }
  });
});

//# sourceMappingURL=index.js.map
