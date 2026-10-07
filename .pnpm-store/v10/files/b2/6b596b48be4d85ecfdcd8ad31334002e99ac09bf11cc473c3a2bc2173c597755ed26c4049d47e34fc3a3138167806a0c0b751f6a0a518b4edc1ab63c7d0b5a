import { addNonEnumerableProperty } from './object.js';

const SENTRY_SKIP_NORMALIZATION = /* @__PURE__ */ Symbol.for("sentry.skipNormalization");
const SENTRY_OVERRIDE_NORMALIZATION_DEPTH = /* @__PURE__ */ Symbol.for("sentry.overrideNormalizationDepth");
function setSkipNormalizationHint(obj) {
  addNonEnumerableProperty(obj, SENTRY_SKIP_NORMALIZATION, true);
}
function setNormalizationDepthOverrideHint(obj, depth) {
  addNonEnumerableProperty(obj, SENTRY_OVERRIDE_NORMALIZATION_DEPTH, depth);
}
function hasSkipNormalizationHint(value) {
  return Boolean(value[SENTRY_SKIP_NORMALIZATION]);
}
function getNormalizationDepthOverrideHint(value) {
  const v = value[SENTRY_OVERRIDE_NORMALIZATION_DEPTH];
  return typeof v === "number" ? v : void 0;
}

export { getNormalizationDepthOverrideHint, hasSkipNormalizationHint, setNormalizationDepthOverrideHint, setSkipNormalizationHint };
//# sourceMappingURL=normalizationHints.js.map
