Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const integration = require('../../integration.js');
const featureFlags = require('../../utils/featureFlags.js');
const object = require('../../utils/object.js');

const growthbookIntegration = integration.defineIntegration(
  ({ growthbookClass }) => {
    return {
      name: "GrowthBook",
      setupOnce() {
        const proto = growthbookClass.prototype;
        if (typeof proto.isOn === "function") {
          object.fill(proto, "isOn", _wrapAndCaptureBooleanResult);
        }
        if (typeof proto.getFeatureValue === "function") {
          object.fill(proto, "getFeatureValue", _wrapAndCaptureBooleanResult);
        }
      },
      processEvent(event, _hint, _client) {
        return featureFlags._INTERNAL_copyFlagsFromScopeToEvent(event);
      }
    };
  }
);
function _wrapAndCaptureBooleanResult(original) {
  return function(...args) {
    const flagName = args[0];
    const result = original.apply(this, args);
    if (typeof flagName === "string" && typeof result === "boolean") {
      featureFlags._INTERNAL_insertFlagToScope(flagName, result);
      featureFlags._INTERNAL_addFeatureFlagToActiveSpan(flagName, result);
    }
    return result;
  };
}

exports.growthbookIntegration = growthbookIntegration;
//# sourceMappingURL=growthbook.js.map
