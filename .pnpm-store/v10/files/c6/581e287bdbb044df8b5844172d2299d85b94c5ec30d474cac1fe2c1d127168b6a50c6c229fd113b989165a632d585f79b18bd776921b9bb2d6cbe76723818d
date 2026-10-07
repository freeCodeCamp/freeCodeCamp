import { envToBool } from '@sentry/node-core';
import { preloadOpenTelemetry } from './sdk/initOtel.js';

const debug = envToBool(process.env.SENTRY_DEBUG);
const integrationsStr = process.env.SENTRY_PRELOAD_INTEGRATIONS;
const integrations = integrationsStr ? integrationsStr.split(",").map((integration) => integration.trim()) : void 0;
preloadOpenTelemetry({ debug, integrations });
//# sourceMappingURL=preload.js.map
