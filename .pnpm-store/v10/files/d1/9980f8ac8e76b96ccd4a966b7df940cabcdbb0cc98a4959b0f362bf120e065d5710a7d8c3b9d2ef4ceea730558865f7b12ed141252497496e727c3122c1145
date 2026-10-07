import { defineIntegration, startSession, getIsolationScope, endSession } from '@sentry/core';

const INTEGRATION_NAME = "ProcessSession";
const processSessionIntegration = defineIntegration(() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      startSession();
      process.on("beforeExit", () => {
        const session = getIsolationScope().getSession();
        if (session?.status !== "ok") {
          endSession();
        }
      });
    }
  };
});

export { processSessionIntegration };
//# sourceMappingURL=processSession.js.map
