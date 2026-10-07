"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromHttp = void 0;
const fetch_http_handler_1 = require("@smithy/fetch-http-handler");
const property_provider_1 = require("@smithy/property-provider");
const checkUrl_1 = require("./checkUrl");
const requestHelpers_1 = require("./requestHelpers");
const retry_wrapper_1 = require("./retry-wrapper");
const fromHttp = (options) => {
    var _a, _b, _c;
    (_a = options.logger) === null || _a === void 0 ? void 0 : _a.debug("@aws-sdk/credential-provider-http", "fromHttp");
    let host;
    const full = options.credentialsFullUri;
    if (full) {
        host = full;
    }
    else {
        throw new property_provider_1.CredentialsProviderError("No HTTP credential provider host provided.");
    }
    const url = new URL(host);
    (0, checkUrl_1.checkUrl)(url);
    const requestHandler = new fetch_http_handler_1.FetchHttpHandler();
    return (0, retry_wrapper_1.retryWrapper)(async () => {
        const request = (0, requestHelpers_1.createGetRequest)(url);
        if (options.authorizationToken) {
            request.headers.Authorization = options.authorizationToken;
        }
        const result = await requestHandler.handle(request);
        return (0, requestHelpers_1.getCredentials)(result.response);
    }, (_b = options.maxRetries) !== null && _b !== void 0 ? _b : 3, (_c = options.timeout) !== null && _c !== void 0 ? _c : 1000);
};
exports.fromHttp = fromHttp;
