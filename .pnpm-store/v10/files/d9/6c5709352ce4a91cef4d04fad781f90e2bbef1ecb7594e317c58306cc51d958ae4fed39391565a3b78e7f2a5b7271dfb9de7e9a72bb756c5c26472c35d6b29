import type { CredentialProviderOptions } from "@aws-sdk/types";
import { CognitoProviderParameters } from "./CognitoProviderParameters";
import { CognitoIdentityCredentialProvider } from "./fromCognitoIdentity";
import { Storage } from "./Storage";
/**
 * @internal
 *
 * Retrieves or generates a unique identifier using Amazon Cognito's `GetId`
 * operation, then generates temporary AWS credentials using Amazon Cognito's
 * `GetCredentialsForIdentity` operation.
 *
 * Results from `GetId` are cached internally, but results from
 * `GetCredentialsForIdentity` are not.
 */
export declare function fromCognitoIdentityPool({ accountId, cache, client, clientConfig, customRoleArn, identityPoolId, logins, userIdentifier, logger, parentClientConfig, }: FromCognitoIdentityPoolParameters): CognitoIdentityCredentialProvider;
/**
 * @internal
 */
export interface FromCognitoIdentityPoolParameters extends CognitoProviderParameters, CredentialProviderOptions {
    /**
     * A standard AWS account ID (9+ digits).
     */
    accountId?: string;
    /**
     * A cache in which to store resolved Cognito IdentityIds. If not supplied,
     * the credential provider will attempt to store IdentityIds in one of the
     * following (in order of preference):
     *   1. IndexedDB
     *   2. LocalStorage
     *   3. An in-memory cache object that will not persist between pages.
     *
     * IndexedDB is preferred to maximize data sharing between top-level
     * browsing contexts and web workers.
     *
     * The provider will not cache IdentityIds of authenticated users unless a
     * separate `userIdentitifer` parameter is supplied.
     */
    cache?: Storage;
    /**
     * The unique identifier for the identity pool from which an identity should
     * be retrieved or generated.
     */
    identityPoolId: string;
    /**
     * A unique identifier for the user. This is distinct from a Cognito
     * IdentityId and should instead be an identifier meaningful to your
     * application. Used to cache Cognito IdentityIds on a per-user basis.
     */
    userIdentifier?: string;
}
