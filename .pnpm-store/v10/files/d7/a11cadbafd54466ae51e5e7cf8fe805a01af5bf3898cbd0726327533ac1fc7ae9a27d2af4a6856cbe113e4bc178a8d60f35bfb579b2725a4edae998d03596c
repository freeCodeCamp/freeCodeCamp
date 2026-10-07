import { getClient } from './currentScopes.js';
import { DEBUG_BUILD } from './debug-build.js';
import { debug } from './utils/debug-logger.js';

const installedIntegrations = [];
function filterDuplicates(integrations) {
  const integrationsByName = {};
  integrations.forEach((currentInstance) => {
    const { name } = currentInstance;
    const existingInstance = integrationsByName[name];
    if (existingInstance && !existingInstance.isDefaultInstance && currentInstance.isDefaultInstance) {
      return;
    }
    integrationsByName[name] = currentInstance;
  });
  return Object.values(integrationsByName);
}
function getIntegrationsToSetup(options) {
  const defaultIntegrations = options.defaultIntegrations || [];
  const userIntegrations = options.integrations;
  defaultIntegrations.forEach((integration) => {
    integration.isDefaultInstance = true;
  });
  let integrations;
  if (Array.isArray(userIntegrations)) {
    integrations = [...defaultIntegrations, ...userIntegrations];
  } else if (typeof userIntegrations === "function") {
    const resolvedUserIntegrations = userIntegrations(defaultIntegrations);
    integrations = Array.isArray(resolvedUserIntegrations) ? resolvedUserIntegrations : [resolvedUserIntegrations];
  } else {
    integrations = defaultIntegrations;
  }
  return filterDuplicates(integrations);
}
function setupIntegrations(client, integrations) {
  const integrationIndex = {};
  integrations.forEach((integration) => {
    if (integration?.beforeSetup) {
      integration.beforeSetup(client);
    }
  });
  integrations.forEach((integration) => {
    if (integration) {
      setupIntegration(client, integration, integrationIndex);
    }
  });
  return integrationIndex;
}
function afterSetupIntegrations(client, integrations) {
  for (const integration of integrations) {
    if (integration?.afterAllSetup) {
      integration.afterAllSetup(client);
    }
  }
}
function setupIntegration(client, integration, integrationIndex) {
  if (integrationIndex[integration.name]) {
    DEBUG_BUILD && debug.log(`Integration skipped because it was already installed: ${integration.name}`);
    return;
  }
  integrationIndex[integration.name] = integration;
  if (!installedIntegrations.includes(integration.name) && typeof integration.setupOnce === "function") {
    integration.setupOnce();
    installedIntegrations.push(integration.name);
  }
  if (integration.setup && typeof integration.setup === "function") {
    integration.setup(client);
  }
  if (typeof integration.preprocessEvent === "function") {
    const callback = integration.preprocessEvent.bind(integration);
    client.on("preprocessEvent", (event, hint) => callback(event, hint, client));
  }
  if (typeof integration.processEvent === "function") {
    const callback = integration.processEvent.bind(integration);
    const processor = Object.assign((event, hint) => callback(event, hint, client), {
      id: integration.name
    });
    client.addEventProcessor(processor);
  }
  ["processSpan", "processSegmentSpan"].forEach((hook) => {
    const callback = integration[hook];
    if (typeof callback === "function") {
      client.on(hook, (span) => callback.call(integration, span, client));
    }
  });
  DEBUG_BUILD && debug.log(`Integration installed: ${integration.name}`);
}
function addIntegration(integration) {
  const client = getClient();
  if (!client) {
    DEBUG_BUILD && debug.warn(`Cannot add integration "${integration.name}" because no SDK Client is available.`);
    return;
  }
  client.addIntegration(integration);
}
function defineIntegration(fn) {
  return fn;
}

export { addIntegration, afterSetupIntegrations, defineIntegration, getIntegrationsToSetup, installedIntegrations, setupIntegration, setupIntegrations };
//# sourceMappingURL=integration.js.map
