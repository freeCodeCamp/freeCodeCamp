import { toHex } from "@smithy/util-hex-encoding";
import { normalizeProvider } from "@smithy/util-middleware";
import { escapeUri } from "@smithy/util-uri-escape";
import { toUint8Array } from "@smithy/util-utf8";
import { ALGORITHM_IDENTIFIER, ALGORITHM_QUERY_PARAM, AMZ_DATE_HEADER, AMZ_DATE_QUERY_PARAM, AUTH_HEADER, CREDENTIAL_QUERY_PARAM, EVENT_ALGORITHM_IDENTIFIER, EXPIRES_QUERY_PARAM, MAX_PRESIGNED_TTL, SHA256_HEADER, SIGNATURE_QUERY_PARAM, SIGNED_HEADERS_QUERY_PARAM, TOKEN_HEADER, TOKEN_QUERY_PARAM, } from "./constants";
import { createScope, getSigningKey } from "./credentialDerivation";
import { getCanonicalHeaders } from "./getCanonicalHeaders";
import { getCanonicalQuery } from "./getCanonicalQuery";
import { getPayloadHash } from "./getPayloadHash";
import { HeaderFormatter } from "./HeaderFormatter";
import { hasHeader } from "./headerUtil";
import { moveHeadersToQuery } from "./moveHeadersToQuery";
import { prepareRequest } from "./prepareRequest";
import { iso8601 } from "./utilDate";
export class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.headerFormatter = new HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = normalizeProvider(region);
        this.credentialProvider = normalizeProvider(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = toHex(await hash.digest());
        const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] =
            `${ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update(toUint8Array(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = escapeUri(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update(toUint8Array(stringToSign));
        return toHex(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");
