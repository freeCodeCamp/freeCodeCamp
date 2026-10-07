import { CredentialsProviderError } from "@smithy/property-provider";
import { resolveLogins } from "./resolveLogins";
export function fromCognitoIdentity(parameters) {
    return async () => {
        parameters.logger?.debug("@aws-sdk/credential-provider-cognito-identity", "fromCognitoIdentity");
        const { GetCredentialsForIdentityCommand, CognitoIdentityClient } = await import("./loadCognitoIdentity");
        const { Credentials: { AccessKeyId = throwOnMissingAccessKeyId(), Expiration, SecretKey = throwOnMissingSecretKey(), SessionToken, } = throwOnMissingCredentials(), } = await (parameters.client ??
            new CognitoIdentityClient(Object.assign({}, parameters.clientConfig ?? {}, {
                region: parameters.clientConfig?.region ?? parameters.parentClientConfig?.region,
            }))).send(new GetCredentialsForIdentityCommand({
            CustomRoleArn: parameters.customRoleArn,
            IdentityId: parameters.identityId,
            Logins: parameters.logins ? await resolveLogins(parameters.logins) : undefined,
        }));
        return {
            identityId: parameters.identityId,
            accessKeyId: AccessKeyId,
            secretAccessKey: SecretKey,
            sessionToken: SessionToken,
            expiration: Expiration,
        };
    };
}
function throwOnMissingAccessKeyId() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no access key ID");
}
function throwOnMissingCredentials() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no credentials");
}
function throwOnMissingSecretKey() {
    throw new CredentialsProviderError("Response from Amazon Cognito contained no secret key");
}
