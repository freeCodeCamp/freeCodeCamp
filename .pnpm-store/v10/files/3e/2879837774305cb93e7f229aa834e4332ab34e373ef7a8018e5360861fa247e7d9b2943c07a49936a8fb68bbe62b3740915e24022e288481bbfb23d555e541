Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

const unleashIntegrationShim = core.defineIntegration((_options) => {
  if (!core.isBrowser()) {
    core.consoleSandbox(() => {
      console.warn("The unleashIntegration() can only be used in the browser.");
    });
  }
  return {
    name: "Unleash"
  };
});

exports.unleashIntegrationShim = unleashIntegrationShim;
//# sourceMappingURL=unleash.js.map
