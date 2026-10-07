import { DEBUG_BUILD } from '../../debug-build.js';
import { debug } from '../debug-logger.js';

const SKIPPED_AI_PROVIDERS = /* @__PURE__ */ new Set();
function _INTERNAL_skipAiProviderWrapping(modules) {
  modules.forEach((module) => {
    SKIPPED_AI_PROVIDERS.add(module);
    DEBUG_BUILD && debug.log(`AI provider "${module}" wrapping will be skipped`);
  });
}
function _INTERNAL_shouldSkipAiProviderWrapping(module) {
  return SKIPPED_AI_PROVIDERS.has(module);
}
function _INTERNAL_clearAiProviderSkips() {
  SKIPPED_AI_PROVIDERS.clear();
  DEBUG_BUILD && debug.log("Cleared AI provider skip registrations");
}

export { _INTERNAL_clearAiProviderSkips, _INTERNAL_shouldSkipAiProviderWrapping, _INTERNAL_skipAiProviderWrapping };
//# sourceMappingURL=providerSkip.js.map
