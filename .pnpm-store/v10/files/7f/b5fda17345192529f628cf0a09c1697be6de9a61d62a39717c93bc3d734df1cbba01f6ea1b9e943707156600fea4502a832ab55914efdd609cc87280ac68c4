import { defineIntegration } from '../../integration.js';
import { _INTERNAL_copyFlagsFromScopeToEvent, _INTERNAL_insertFlagToScope, _INTERNAL_addFeatureFlagToActiveSpan } from '../../utils/featureFlags.js';
import { fill } from '../../utils/object.js';

const growthbookIntegration = defineIntegration(
  ({ growthbookClass }) => {
    return {
      name: "GrowthBook",
      setupOnce() {
        const proto = growthbookClass.prototype;
        if (typeof proto.isOn === "function") {
          fill(proto, "isOn", _wrapAndCaptureBooleanResult);
        }
        if (typeof proto.getFeatureValue === "function") {
          fill(proto, "getFeatureValue", _wrapAndCaptureBooleanResult);
        }
      },
      processEvent(event, _hint, _client) {
        return _INTERNAL_copyFlagsFromScopeToEvent(event);
      }
    };
  }
);
function _wrapAndCaptureBooleanResult(original) {
  return function(...args) {
    const flagName = args[0];
    const result = original.apply(this, args);
    if (typeof flagName === "string" && typeof result === "boolean") {
      _INTERNAL_insertFlagToScope(flagName, result);
      _INTERNAL_addFeatureFlagToActiveSpan(flagName, result);
    }
    return result;
  };
}

export { growthbookIntegration };
//# sourceMappingURL=growthbook.js.map
