"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenCache = exports.AzureCredentialCache = exports.AZURE_BASE_URL = void 0;
exports.addAzureParams = addAzureParams;
exports.prepareRequest = prepareRequest;
exports.fetchAzureKMSToken = fetchAzureKMSToken;
exports.loadAzureCredentials = loadAzureCredentials;
const error_1 = require("../../error");
const utils_1 = require("../../utils");
const errors_1 = require("../errors");
const MINIMUM_TOKEN_REFRESH_IN_MILLISECONDS = 6000;
/** Base URL for getting Azure tokens. */
exports.AZURE_BASE_URL = 'http://169.254.169.254/metadata/identity/oauth2/token?';
/**
 * @internal
 */
class AzureCredentialCache {
    constructor() {
        this.cachedToken = null;
    }
    async getToken() {
        if (this.cachedToken == null || this.needsRefresh(this.cachedToken)) {
            this.cachedToken = await this._getToken();
        }
        return { accessToken: this.cachedToken.accessToken };
    }
    needsRefresh(token) {
        const timeUntilExpirationMS = token.expiresOnTimestamp - Date.now();
        return timeUntilExpirationMS <= MINIMUM_TOKEN_REFRESH_IN_MILLISECONDS;
    }
    /**
     * exposed for testing
     */
    resetCache() {
        this.cachedToken = null;
    }
    /**
     * exposed for testing
     */
    _getToken() {
        return fetchAzureKMSToken();
    }
}
exports.AzureCredentialCache = AzureCredentialCache;
/** @internal */
exports.tokenCache = new AzureCredentialCache();
/** @internal */
async function parseResponse(response) {
    const { status, body: rawBody } = response;
    const body = (() => {
        try {
            return JSON.parse(rawBody);
        }
        catch {
            throw new errors_1.MongoCryptAzureKMSRequestError('Malformed JSON body in GET request.');
        }
    })();
    if (status !== 200) {
        throw new errors_1.MongoCryptAzureKMSRequestError('Unable to complete request.', body);
    }
    if (!body.access_token) {
        throw new errors_1.MongoCryptAzureKMSRequestError('Malformed response body - missing field `access_token`.');
    }
    if (!body.expires_in) {
        throw new errors_1.MongoCryptAzureKMSRequestError('Malformed response body - missing field `expires_in`.');
    }
    const expiresInMS = Number(body.expires_in) * 1000;
    if (Number.isNaN(expiresInMS)) {
        throw new errors_1.MongoCryptAzureKMSRequestError('Malformed response body - unable to parse int from `expires_in` field.');
    }
    return {
        accessToken: body.access_token,
        expiresOnTimestamp: Date.now() + expiresInMS
    };
}
/**
 * @internal
 * Get the Azure endpoint URL.
 */
function addAzureParams(url, resource, username) {
    url.searchParams.append('api-version', '2018-02-01');
    url.searchParams.append('resource', resource);
    if (username) {
        url.searchParams.append('client_id', username);
    }
    return url;
}
/**
 * @internal
 *
 * parses any options provided by prose tests to `fetchAzureKMSToken` and merges them with
 * the default values for headers and the request url.
 */
function prepareRequest(options) {
    const url = new URL(options.url?.toString() ?? exports.AZURE_BASE_URL);
    addAzureParams(url, 'https://vault.azure.net');
    const headers = { ...options.headers, 'Content-Type': 'application/json', Metadata: true };
    return { headers, url };
}
/**
 * @internal
 *
 * `AzureKMSRequestOptions` allows prose tests to modify the http request sent to the idms
 * servers.  This is required to simulate different server conditions.  No options are expected to
 * be set outside of tests.
 *
 * exposed for CSFLE
 * [prose test 18](https://github.com/mongodb/specifications/tree/master/source/client-side-encryption/tests#azure-imds-credentials)
 */
async function fetchAzureKMSToken(options = {}) {
    const { headers, url } = prepareRequest(options);
    try {
        const response = await (0, utils_1.get)(url, { headers });
        return await parseResponse(response);
    }
    catch (error) {
        if (error instanceof error_1.MongoNetworkTimeoutError) {
            throw new errors_1.MongoCryptAzureKMSRequestError(`[Azure KMS] ${error.message}`);
        }
        throw error;
    }
}
/**
 * @internal
 *
 * @throws Will reject with a `MongoCryptError` if the http request fails or the http response is malformed.
 */
async function loadAzureCredentials(kmsProviders) {
    const azure = await exports.tokenCache.getToken();
    return { ...kmsProviders, azure };
}
//# sourceMappingURL=azure.js.map