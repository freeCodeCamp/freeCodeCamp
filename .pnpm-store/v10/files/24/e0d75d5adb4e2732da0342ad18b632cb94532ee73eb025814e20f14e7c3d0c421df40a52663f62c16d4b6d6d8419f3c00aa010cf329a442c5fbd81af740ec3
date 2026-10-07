import { Logger } from "@smithy/types";
import { AwsCredentialIdentity } from "./identity";
import { Provider } from "./util";
/**
 * @public
 *
 * An object representing temporary or permanent AWS credentials.
 *
 * @deprecated Use {@link AwsCredentialIdentity}
 */
export interface Credentials extends AwsCredentialIdentity {
}
/**
 * @public
 *
 * @deprecated Use {@link AwsCredentialIdentityProvider}
 */
export type CredentialProvider = Provider<Credentials>;
/**
 * @public
 *
 * Common options for credential providers.
 */
export type CredentialProviderOptions = {
    /**
     * This logger is only used to provide information
     * on what credential providers were used during resolution.
     *
     * It does not log credentials.
     */
    logger?: Logger;
    /**
     * Present if the credential provider was created by calling
     * the defaultCredentialProvider in a client's middleware, having
     * access to the client's config.
     *
     * The region of that parent or outer client is important because
     * an inner client used by the credential provider may need
     * to match its default partition or region with that of
     * the outer client.
     *
     * @internal
     * @deprecated - not truly deprecated, marked as a warning to not use this.
     */
    parentClientConfig?: {
        region?: string | Provider<string>;
        [key: string]: unknown;
    };
};
