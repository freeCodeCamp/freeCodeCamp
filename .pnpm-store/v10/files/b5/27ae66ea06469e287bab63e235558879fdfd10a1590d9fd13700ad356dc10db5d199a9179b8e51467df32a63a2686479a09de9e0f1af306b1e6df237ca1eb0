Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

const openFeatureIntegrationShim = core.defineIntegration((_options) => {
  if (!core.isBrowser()) {
    core.consoleSandbox(() => {
      console.warn("The openFeatureIntegration() can only be used in the browser.");
    });
  }
  return {
    name: "OpenFeature"
  };
});
class OpenFeatureIntegrationHookShim {
  /**
   *
   */
  constructor() {
    if (!core.isBrowser()) {
      core.consoleSandbox(() => {
        console.warn("The OpenFeatureIntegrationHook can only be used in the browser.");
      });
    }
  }
  /**
   *
   */
  after() {
  }
  /**
   *
   */
  error() {
  }
}

exports.OpenFeatureIntegrationHookShim = OpenFeatureIntegrationHookShim;
exports.openFeatureIntegrationShim = openFeatureIntegrationShim;
//# sourceMappingURL=openFeature.js.map
