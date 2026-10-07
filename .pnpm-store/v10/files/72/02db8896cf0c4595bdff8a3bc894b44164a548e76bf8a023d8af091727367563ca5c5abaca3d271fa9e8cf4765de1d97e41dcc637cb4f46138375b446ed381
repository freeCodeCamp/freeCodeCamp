Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

const launchDarklyIntegrationShim = core.defineIntegration((_options) => {
  if (!core.isBrowser()) {
    core.consoleSandbox(() => {
      console.warn("The launchDarklyIntegration() can only be used in the browser.");
    });
  }
  return {
    name: "LaunchDarkly"
  };
});
function buildLaunchDarklyFlagUsedHandlerShim() {
  if (!core.isBrowser()) {
    core.consoleSandbox(() => {
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

exports.buildLaunchDarklyFlagUsedHandlerShim = buildLaunchDarklyFlagUsedHandlerShim;
exports.launchDarklyIntegrationShim = launchDarklyIntegrationShim;
//# sourceMappingURL=launchDarkly.js.map
