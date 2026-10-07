Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const integration = require('../../integration.js');
const featureFlags = require('../../utils/featureFlags.js');

const featureFlagsIntegration = integration.defineIntegration(() => {
  return {
    name: "FeatureFlags",
    processEvent(event, _hint, _client) {
      return featureFlags._INTERNAL_copyFlagsFromScopeToEvent(event);
    },
    addFeatureFlag(name, value) {
      featureFlags._INTERNAL_insertFlagToScope(name, value);
      featureFlags._INTERNAL_addFeatureFlagToActiveSpan(name, value);
    }
  };
});

exports.featureFlagsIntegration = featureFlagsIntegration;
//# sourceMappingURL=featureFlagsIntegration.js.map
