"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveHttpAuthSchemeConfig = exports.defaultCognitoIdentityHttpAuthSchemeProvider = exports.defaultCognitoIdentityHttpAuthSchemeParametersProvider = void 0;
const core_1 = require("@aws-sdk/core");
const util_middleware_1 = require("@smithy/util-middleware");
const defaultCognitoIdentityHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: (await (0, util_middleware_1.normalizeProvider)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
exports.defaultCognitoIdentityHttpAuthSchemeParametersProvider = defaultCognitoIdentityHttpAuthSchemeParametersProvider;
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "cognito-identity",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth",
    };
}
const defaultCognitoIdentityHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "GetCredentialsForIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "GetId": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "GetOpenIdToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "UnlinkIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
exports.defaultCognitoIdentityHttpAuthSchemeProvider = defaultCognitoIdentityHttpAuthSchemeProvider;
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
    return {
        ...config_0,
    };
};
exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
