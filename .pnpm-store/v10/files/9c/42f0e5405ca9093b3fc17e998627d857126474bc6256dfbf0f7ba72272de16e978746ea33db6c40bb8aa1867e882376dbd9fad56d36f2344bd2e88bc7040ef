import { CredentialsProviderError } from "@smithy/property-provider";
import { readFileSync } from "fs";
import { fromWebToken } from "./fromWebToken";
const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
export const fromTokenFile = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-web-identity", "fromTokenFile");
    const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
    const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
    const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new CredentialsProviderError("Web identity configuration not specified");
    }
    return fromWebToken({
        ...init,
        webIdentityToken: readFileSync(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};
