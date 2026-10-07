import { defineIntegration } from '../../integration.js';
import { _INTERNAL_insertFlagToScope, _INTERNAL_addFeatureFlagToActiveSpan, _INTERNAL_copyFlagsFromScopeToEvent } from '../../utils/featureFlags.js';

const featureFlagsIntegration = defineIntegration(() => {
  return {
    name: "FeatureFlags",
    processEvent(event, _hint, _client) {
      return _INTERNAL_copyFlagsFromScopeToEvent(event);
    },
    addFeatureFlag(name, value) {
      _INTERNAL_insertFlagToScope(name, value);
      _INTERNAL_addFeatureFlagToActiveSpan(name, value);
    }
  };
});

export { featureFlagsIntegration };
//# sourceMappingURL=featureFlagsIntegration.js.map
