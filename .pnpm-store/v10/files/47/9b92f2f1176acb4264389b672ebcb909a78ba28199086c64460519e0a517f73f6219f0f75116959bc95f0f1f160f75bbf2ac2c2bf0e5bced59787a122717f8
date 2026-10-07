"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FEATURES = void 0;
exports.enableFeature = enableFeature;
exports.featuresKey = void 0;
exports.hasFeature = hasFeature;
exports.runtimeKey = void 0;
const FEATURES = Object.freeze({
  unicodeFlag: 1 << 0,
  dotAllFlag: 1 << 1,
  unicodePropertyEscape: 1 << 2,
  namedCaptureGroups: 1 << 3,
  unicodeSetsFlag_syntax: 1 << 4,
  unicodeSetsFlag: 1 << 5,
  duplicateNamedCaptureGroups: 1 << 6,
  modifiers: 1 << 7
});
exports.FEATURES = FEATURES;
const featuresKey = "@babel/plugin-regexp-features/featuresKey";
exports.featuresKey = featuresKey;
const runtimeKey = "@babel/plugin-regexp-features/runtimeKey";
exports.runtimeKey = runtimeKey;
function enableFeature(features, feature) {
  return features | feature;
}
function hasFeature(features, feature) {
  return !!(features & feature);
}

//# sourceMappingURL=features.js.map
