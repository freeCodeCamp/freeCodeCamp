import { Client } from './client';
import { Integration, IntegrationFn } from './types/integration';
import { CoreOptions } from './types/options';
export declare const installedIntegrations: string[];
/** Map of integrations assigned to a client */
export type IntegrationIndex = {
    [key: string]: Integration;
};
/** Gets integrations to install */
export declare function getIntegrationsToSetup(options: Pick<CoreOptions, 'defaultIntegrations' | 'integrations'>): Integration[];
/**
 * Given a list of integration instances this installs them all. When `withDefaults` is set to `true` then all default
 * integrations are added unless they were already provided before.
 * @param integrations array of integration instances
 * @param withDefault should enable default integrations
 */
export declare function setupIntegrations(client: Client, integrations: Integration[]): IntegrationIndex;
/**
 * Execute the `afterAllSetup` hooks of the given integrations.
 */
export declare function afterSetupIntegrations(client: Client, integrations: Integration[]): void;
/** Setup a single integration.  */
export declare function setupIntegration(client: Client, integration: Integration, integrationIndex: IntegrationIndex): void;
/** Add an integration to the current scope's client. */
export declare function addIntegration(integration: Integration): void;
/**
 * Define an integration function that can be used to create an integration instance.
 * Note that this by design hides the implementation details of the integration, as they are considered internal.
 */
export declare function defineIntegration<Fn extends IntegrationFn>(fn: Fn): (...args: Parameters<Fn>) => Integration;
//# sourceMappingURL=integration.d.ts.map
