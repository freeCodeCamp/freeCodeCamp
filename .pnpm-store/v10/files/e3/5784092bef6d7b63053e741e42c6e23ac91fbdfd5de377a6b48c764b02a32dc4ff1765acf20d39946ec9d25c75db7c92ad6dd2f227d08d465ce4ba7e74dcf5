"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCredentials = exports.createGetRequest = void 0;
const property_provider_1 = require("@smithy/property-provider");
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const util_stream_1 = require("@smithy/util-stream");
function createGetRequest(url) {
    return new protocol_http_1.HttpRequest({
        protocol: url.protocol,
        hostname: url.hostname,
        port: Number(url.port),
        path: url.pathname,
        query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {}),
        fragment: url.hash,
    });
}
exports.createGetRequest = createGetRequest;
async function getCredentials(response) {
    var _a, _b;
    const contentType = (_b = (_a = response === null || response === void 0 ? void 0 : response.headers["content-type"]) !== null && _a !== void 0 ? _a : response === null || response === void 0 ? void 0 : response.headers["Content-Type"]) !== null && _b !== void 0 ? _b : "";
    if (!contentType.includes("json")) {
        console.warn("HTTP credential provider response header content-type was not application/json. Observed: " + contentType + ".");
    }
    const stream = (0, util_stream_1.sdkStreamMixin)(response.body);
    const str = await stream.transformToString();
    if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" ||
            typeof parsed.SecretAccessKey !== "string" ||
            typeof parsed.Token !== "string" ||
            typeof parsed.Expiration !== "string") {
            throw new property_provider_1.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: " +
                "{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }");
        }
        return {
            accessKeyId: parsed.AccessKeyId,
            secretAccessKey: parsed.SecretAccessKey,
            sessionToken: parsed.Token,
            expiration: (0, smithy_client_1.parseRfc3339DateTime)(parsed.Expiration),
        };
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
            parsedBody = JSON.parse(str);
        }
        catch (e) { }
        throw Object.assign(new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`), {
            Code: parsedBody.Code,
            Message: parsedBody.Message,
        });
    }
    throw new property_provider_1.CredentialsProviderError(`Server responded with status: ${response.statusCode}`);
}
exports.getCredentials = getCredentials;
