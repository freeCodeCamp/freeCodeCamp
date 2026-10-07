Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');

const INTEGRATION_NAME = "ProcessSession";
const processSessionIntegration = core.defineIntegration(() => {
  return {
    name: INTEGRATION_NAME,
    setupOnce() {
      core.startSession();
      process.on("beforeExit", () => {
        const session = core.getIsolationScope().getSession();
        if (session?.status !== "ok") {
          core.endSession();
        }
      });
    }
  };
});

exports.processSessionIntegration = processSessionIntegration;
//# sourceMappingURL=processSession.js.map
