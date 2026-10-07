Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

const statsigIntegrationShim = core.defineIntegration((_options) => {
  if (!core.isBrowser()) {
    core.consoleSandbox(() => {
      console.warn("The statsigIntegration() can only be used in the browser.");
    });
  }
  return {
    name: "Statsig"
  };
});

exports.statsigIntegrationShim = statsigIntegrationShim;
//# sourceMappingURL=statsig.js.map
