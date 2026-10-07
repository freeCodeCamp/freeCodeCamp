import type { CredentialProviderOptions } from "@aws-sdk/types";
import { RemoteProviderInit as _RemoteProviderInit } from "@smithy/credential-provider-imds";
import { AwsCredentialIdentityProvider } from "@smithy/types";
export interface RemoteProviderInit extends _RemoteProviderInit, CredentialProviderOptions {
}
/**
 * Create a credential provider function that reads from ECS container metadata service.
 *
 * ```javascript
 * import { fromContainerMetadata } from "@aws-sdk/credential-providers"; // ES6 import
 * // const { fromContainerMetadata } = require("@aws-sdk/credential-providers"); // CommonJS import
 *
 * const foo = new FooClient({
 *   credentials: fromContainerMetadata({
 *     // Optional. The connection timeout (in milliseconds) to apply to any remote requests. If not specified, a default value
 *     // of`1000` (one second) is used.
 *     timeout: 1000,
 *     // Optional. The maximum number of times any HTTP connections should be retried. If not specified, a default value of `0`
 *     // will be used.
 *     maxRetries: 0,
 *   }),
 * });
 * ```
 */
export declare const fromContainerMetadata: (init?: RemoteProviderInit) => AwsCredentialIdentityProvider;
