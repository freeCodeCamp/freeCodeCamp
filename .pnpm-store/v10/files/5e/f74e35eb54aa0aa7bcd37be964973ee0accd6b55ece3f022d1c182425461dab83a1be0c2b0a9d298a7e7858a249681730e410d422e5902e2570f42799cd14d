export const isImdsCredentials = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string";
export const fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
});
