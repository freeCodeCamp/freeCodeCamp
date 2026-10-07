"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromTokenFile = void 0;
const property_provider_1 = require("@smithy/property-provider");
const fs_1 = require("fs");
const fromWebToken_1 = require("./fromWebToken");
const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    var _a, _b, _c, _d;
    (_a = init.logger) === null || _a === void 0 ? void 0 : _a.debug("@aws-sdk/credential-provider-web-identity", "fromTokenFile");
    const webIdentityTokenFile = (_b = init === null || init === void 0 ? void 0 : init.webIdentityTokenFile) !== null && _b !== void 0 ? _b : process.env[ENV_TOKEN_FILE];
    const roleArn = (_c = init === null || init === void 0 ? void 0 : init.roleArn) !== null && _c !== void 0 ? _c : process.env[ENV_ROLE_ARN];
    const roleSessionName = (_d = init === null || init === void 0 ? void 0 : init.roleSessionName) !== null && _d !== void 0 ? _d : process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new property_provider_1.CredentialsProviderError("Web identity configuration not specified");
    }
    return (0, fromWebToken_1.fromWebToken)({
        ...init,
        webIdentityToken: (0, fs_1.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};
exports.fromTokenFile = fromTokenFile;
