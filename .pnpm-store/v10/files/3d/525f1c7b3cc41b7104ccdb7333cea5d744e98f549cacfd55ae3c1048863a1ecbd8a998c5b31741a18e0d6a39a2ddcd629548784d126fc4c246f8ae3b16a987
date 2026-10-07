"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveHttpAuthSchemeConfig = exports.resolveStsAuthConfig = exports.defaultSTSHttpAuthSchemeProvider = exports.defaultSTSHttpAuthSchemeParametersProvider = void 0;
const core_1 = require("@aws-sdk/core");
const util_middleware_1 = require("@smithy/util-middleware");
const STSClient_1 = require("../STSClient");
const defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0, util_middleware_1.getSmithyContext)(context).operation,
        region: (await (0, util_middleware_1.normalizeProvider)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
exports.defaultSTSHttpAuthSchemeParametersProvider = defaultSTSHttpAuthSchemeParametersProvider;
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "sts",
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
const defaultSTSHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "AssumeRoleWithSAML": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "AssumeRoleWithWebIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
exports.defaultSTSHttpAuthSchemeProvider = defaultSTSHttpAuthSchemeProvider;
const resolveStsAuthConfig = (input) => ({
    ...input,
    stsClientCtor: STSClient_1.STSClient,
});
exports.resolveStsAuthConfig = resolveStsAuthConfig;
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0, exports.resolveStsAuthConfig)(config);
    const config_1 = (0, core_1.resolveAwsSdkSigV4Config)(config_0);
    return {
        ...config_1,
    };
};
exports.resolveHttpAuthSchemeConfig = resolveHttpAuthSchemeConfig;
