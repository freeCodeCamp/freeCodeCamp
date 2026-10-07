import { defineIntegration, isBrowser, consoleSandbox } from '@sentry/core';

const statsigIntegrationShim = defineIntegration((_options) => {
  if (!isBrowser()) {
    consoleSandbox(() => {
      console.warn("The statsigIntegration() can only be used in the browser.");
    });
  }
  return {
    name: "Statsig"
  };
});

export { statsigIntegrationShim };
//# sourceMappingURL=statsig.js.map
