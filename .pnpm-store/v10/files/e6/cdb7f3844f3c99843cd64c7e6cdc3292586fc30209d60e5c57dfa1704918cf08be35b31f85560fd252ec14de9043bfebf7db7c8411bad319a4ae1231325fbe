import { Provider } from "@smithy/types";
/**
 * @internal
 *
 * Compose a single credential provider function from multiple credential
 * providers. The first provider in the argument list will always be invoked;
 * subsequent providers in the list will be invoked in the order in which the
 * were received if the preceding provider did not successfully resolve.
 *
 * If no providers were received or no provider resolves successfully, the
 * returned promise will be rejected.
 */
export declare const chain: <T>(...providers: Provider<T>[]) => Provider<T>;
