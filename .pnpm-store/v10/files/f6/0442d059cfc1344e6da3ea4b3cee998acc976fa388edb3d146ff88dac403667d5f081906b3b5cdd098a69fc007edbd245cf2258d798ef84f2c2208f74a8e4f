export const resolveSsoCredentials = async (profile, options = {}) => {
    const { fromSSO } = await import("@aws-sdk/credential-provider-sso");
    return fromSSO({
        profile,
        logger: options.logger,
    })();
};
export const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");
