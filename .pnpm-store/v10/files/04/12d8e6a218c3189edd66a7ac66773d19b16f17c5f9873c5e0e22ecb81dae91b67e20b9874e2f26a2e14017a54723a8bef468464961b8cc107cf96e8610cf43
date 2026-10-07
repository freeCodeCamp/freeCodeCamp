import { Client } from './client';
import { ClientOptions } from './types/options';
/** A class object that can instantiate Client objects. */
export type ClientClass<F extends Client, O extends ClientOptions> = new (options: O) => F;
/**
 * Internal function to create a new SDK client instance. The client is
 * installed and then bound to the current scope.
 *
 * @param clientClass The client class to instantiate.
 * @param options Options to pass to the client.
 */
export declare function initAndBind<F extends Client, O extends ClientOptions>(clientClass: ClientClass<F, O>, options: O): Client;
/**
 * Make the given client the current client.
 */
export declare function setCurrentClient(client: Client): void;
//# sourceMappingURL=sdk.d.ts.map
