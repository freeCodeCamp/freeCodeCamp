import { defineIntegration, isBrowser, consoleSandbox } from '@sentry/core';

const launchDarklyIntegrationShim = defineIntegration((_options) => {
  if (!isBrowser()) {
    consoleSandbox(() => {
      console.warn("The launchDarklyIntegration() can only be used in the browser.");
    });
  }
  return {
    name: "LaunchDarkly"
  };
});
function buildLaunchDarklyFlagUsedHandlerShim() {
  if (!isBrowser()) {
    consoleSandbox(() => {
      console.warn("The buildLaunchDarklyFlagUsedHandler() can only be used in the browser.");
    });
  }
  return {
    name: "sentry-flag-auditor",
    type: "flag-used",
    synchronous: true,
    method: () => null
  };
}

export { buildLaunchDarklyFlagUsedHandlerShim, launchDarklyIntegrationShim };
//# sourceMappingURL=launchDarkly.js.map
