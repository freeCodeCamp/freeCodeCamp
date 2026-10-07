import { CredentialsProviderError } from "@smithy/property-provider";
import { HttpRequest } from "@smithy/protocol-http";
import { parseRfc3339DateTime } from "@smithy/smithy-client";
import { sdkStreamMixin } from "@smithy/util-stream";
export function createGetRequest(url) {
    return new HttpRequest({
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
export async function getCredentials(response) {
    const contentType = response?.headers["content-type"] ?? response?.headers["Content-Type"] ?? "";
    if (!contentType.includes("json")) {
        console.warn("HTTP credential provider response header content-type was not application/json. Observed: " + contentType + ".");
    }
    const stream = sdkStreamMixin(response.body);
    const str = await stream.transformToString();
    if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" ||
            typeof parsed.SecretAccessKey !== "string" ||
            typeof parsed.Token !== "string" ||
            typeof parsed.Expiration !== "string") {
            throw new CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: " +
                "{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }");
        }
        return {
            accessKeyId: parsed.AccessKeyId,
            secretAccessKey: parsed.SecretAccessKey,
            sessionToken: parsed.Token,
            expiration: parseRfc3339DateTime(parsed.Expiration),
        };
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
            parsedBody = JSON.parse(str);
        }
        catch (e) { }
        throw Object.assign(new CredentialsProviderError(`Server responded with status: ${response.statusCode}`), {
            Code: parsedBody.Code,
            Message: parsedBody.Message,
        });
    }
    throw new CredentialsProviderError(`Server responded with status: ${response.statusCode}`);
}
