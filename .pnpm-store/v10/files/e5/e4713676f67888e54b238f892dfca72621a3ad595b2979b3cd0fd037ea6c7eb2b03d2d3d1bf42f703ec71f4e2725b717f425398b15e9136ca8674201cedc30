const nodeCore = require('@sentry/node-core');
const initOtel = require('./sdk/initOtel.js');

const debug = nodeCore.envToBool(process.env.SENTRY_DEBUG);
const integrationsStr = process.env.SENTRY_PRELOAD_INTEGRATIONS;
const integrations = integrationsStr ? integrationsStr.split(",").map((integration) => integration.trim()) : void 0;
initOtel.preloadOpenTelemetry({ debug, integrations });
//# sourceMappingURL=preload.js.map
