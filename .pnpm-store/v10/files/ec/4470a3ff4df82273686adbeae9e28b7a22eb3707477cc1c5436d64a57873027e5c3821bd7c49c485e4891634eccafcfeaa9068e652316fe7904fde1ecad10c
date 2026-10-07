import { defineIntegration, isBrowser, consoleSandbox } from '@sentry/core';

const unleashIntegrationShim = defineIntegration((_options) => {
  if (!isBrowser()) {
    consoleSandbox(() => {
      console.warn("The unleashIntegration() can only be used in the browser.");
    });
  }
  return {
    name: "Unleash"
  };
});

export { unleashIntegrationShim };
//# sourceMappingURL=unleash.js.map
