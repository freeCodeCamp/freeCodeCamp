import { defineIntegration, isBrowser, consoleSandbox } from '@sentry/core';

const openFeatureIntegrationShim = defineIntegration((_options) => {
  if (!isBrowser()) {
    consoleSandbox(() => {
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
    if (!isBrowser()) {
      consoleSandbox(() => {
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

export { OpenFeatureIntegrationHookShim, openFeatureIntegrationShim };
//# sourceMappingURL=openFeature.js.map
