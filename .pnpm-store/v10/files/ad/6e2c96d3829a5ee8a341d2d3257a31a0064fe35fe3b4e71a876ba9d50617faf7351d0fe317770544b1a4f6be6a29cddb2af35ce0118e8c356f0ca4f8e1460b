Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const object = require('./object.js');

const SENTRY_SKIP_NORMALIZATION = /* @__PURE__ */ Symbol.for("sentry.skipNormalization");
const SENTRY_OVERRIDE_NORMALIZATION_DEPTH = /* @__PURE__ */ Symbol.for("sentry.overrideNormalizationDepth");
function setSkipNormalizationHint(obj) {
  object.addNonEnumerableProperty(obj, SENTRY_SKIP_NORMALIZATION, true);
}
function setNormalizationDepthOverrideHint(obj, depth) {
  object.addNonEnumerableProperty(obj, SENTRY_OVERRIDE_NORMALIZATION_DEPTH, depth);
}
function hasSkipNormalizationHint(value) {
  return Boolean(value[SENTRY_SKIP_NORMALIZATION]);
}
function getNormalizationDepthOverrideHint(value) {
  const v = value[SENTRY_OVERRIDE_NORMALIZATION_DEPTH];
  return typeof v === "number" ? v : void 0;
}

exports.getNormalizationDepthOverrideHint = getNormalizationDepthOverrideHint;
exports.hasSkipNormalizationHint = hasSkipNormalizationHint;
exports.setNormalizationDepthOverrideHint = setNormalizationDepthOverrideHint;
exports.setSkipNormalizationHint = setSkipNormalizationHint;
//# sourceMappingURL=normalizationHints.js.map
