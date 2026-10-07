Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../../debug-build.js');
const debugLogger = require('../debug-logger.js');

const SKIPPED_AI_PROVIDERS = /* @__PURE__ */ new Set();
function _INTERNAL_skipAiProviderWrapping(modules) {
  modules.forEach((module) => {
    SKIPPED_AI_PROVIDERS.add(module);
    debugBuild.DEBUG_BUILD && debugLogger.debug.log(`AI provider "${module}" wrapping will be skipped`);
  });
}
function _INTERNAL_shouldSkipAiProviderWrapping(module) {
  return SKIPPED_AI_PROVIDERS.has(module);
}
function _INTERNAL_clearAiProviderSkips() {
  SKIPPED_AI_PROVIDERS.clear();
  debugBuild.DEBUG_BUILD && debugLogger.debug.log("Cleared AI provider skip registrations");
}

exports._INTERNAL_clearAiProviderSkips = _INTERNAL_clearAiProviderSkips;
exports._INTERNAL_shouldSkipAiProviderWrapping = _INTERNAL_shouldSkipAiProviderWrapping;
exports._INTERNAL_skipAiProviderWrapping = _INTERNAL_skipAiProviderWrapping;
//# sourceMappingURL=providerSkip.js.map
