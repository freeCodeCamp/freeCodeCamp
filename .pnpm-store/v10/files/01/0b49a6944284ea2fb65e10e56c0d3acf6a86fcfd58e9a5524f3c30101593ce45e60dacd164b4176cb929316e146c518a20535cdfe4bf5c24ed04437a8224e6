export const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
export const resolveStaticCredentials = (profile, options) => {
    options?.logger?.debug("@aws-sdk/credential-provider-ini", "resolveStaticCredentials");
    return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        credentialScope: profile.aws_credential_scope,
    });
};
