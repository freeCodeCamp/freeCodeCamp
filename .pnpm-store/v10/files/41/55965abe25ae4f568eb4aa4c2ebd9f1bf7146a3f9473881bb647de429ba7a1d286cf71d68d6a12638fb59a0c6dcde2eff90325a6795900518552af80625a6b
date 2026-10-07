"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _helperCreateRegexpFeaturesPlugin = require("@babel/helper-create-regexp-features-plugin");

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _default = (0, _helperPluginUtils.declare)(api => {
  api.assertVersion(7);
  return (0, _helperCreateRegexpFeaturesPlugin.createRegExpFeaturePlugin)({
    name: "syntax-unicode-sets-regex",
    feature: "unicodeSetsFlag_syntax",

    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("regexpUnicodeSets");
    }

  });
});

exports.default = _default;