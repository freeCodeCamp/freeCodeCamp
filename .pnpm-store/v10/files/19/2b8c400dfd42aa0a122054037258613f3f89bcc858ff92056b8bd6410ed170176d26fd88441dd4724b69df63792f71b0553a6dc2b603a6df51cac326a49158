"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveHttpAuthSchemeConfig = exports.defaultSSOHttpAuthSchemeProvider = exports.defaultSSOHttpAuthSchemeParametersProvider = void 0;
const core_1 = require("@aws-sdk/core");
const util_middleware_1 = require("@smithy/util-middleware");
const defaultSSOHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: (await (0, util_middleware_1.normalizeProvider)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
exports.defaultSSOHttpAuthSchemeParametersProvider = defaultSSOHttpAuthSchemeParametersProvider;
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "awsssoportal",
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
const defaultSSOHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "GetRoleCredentials": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ListAccountRoles": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ListAccounts": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "Logout": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
exports.defaultSSOHttpAuthSchemeProvider = defaultSSOHttpAuthSchemeProvider;
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0, core_1.resolveAwsSdkSigV4Config)(config);
    return {
        ...config_0,
    };
};
exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
