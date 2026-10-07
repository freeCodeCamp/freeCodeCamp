export class HttpBearerAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        const clonedRequest = httpRequest.clone();
        if (!identity.token) {
            throw new Error("request could not be signed with `token` since the `token` is not defined");
        }
        clonedRequest.headers["Authorization"] = `Bearer ${identity.token}`;
        return clonedRequest;
    }
}
