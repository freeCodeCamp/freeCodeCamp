Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const core = require('@sentry/core');
const nodeCore = require('@sentry/node-core');
const constants = require('./constants.js');
const instrumentation = require('./instrumentation.js');

const instrumentVercelAi = nodeCore.generateInstrumentOnce(constants.INTEGRATION_NAME, () => new instrumentation.SentryVercelAiInstrumentation({}));
function shouldForceIntegration(client) {
  const modules = client.getIntegrationByName("Modules");
  return !!modules?.getModules?.()?.ai;
}
const _vercelAIIntegration = ((options = {}) => {
  let instrumentation;
  return {
    name: constants.INTEGRATION_NAME,
    options,
    setupOnce() {
      instrumentation = instrumentVercelAi();
    },
    afterAllSetup(client) {
      const shouldForce = options.force ?? shouldForceIntegration(client);
      if (shouldForce) {
        core.addVercelAiProcessors(client);
      } else {
        instrumentation?.callWhenPatched(() => core.addVercelAiProcessors(client));
      }
    }
  };
});
const vercelAIIntegration = core.defineIntegration(_vercelAIIntegration);

exports.instrumentVercelAi = instrumentVercelAi;
exports.vercelAIIntegration = vercelAIIntegration;
//# sourceMappingURL=index.js.map
