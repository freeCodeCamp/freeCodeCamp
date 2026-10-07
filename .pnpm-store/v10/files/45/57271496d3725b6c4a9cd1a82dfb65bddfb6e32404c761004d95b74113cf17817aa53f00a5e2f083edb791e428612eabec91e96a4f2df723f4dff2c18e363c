import { resolveAwsSdkSigV4Config, } from "@aws-sdk/core";
import { getSmithyContext, normalizeProvider } from "@smithy/util-middleware";
import { STSClient } from "../STSClient";
export const defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: getSmithyContext(context).operation,
        region: (await normalizeProvider(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
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
export const defaultSTSHttpAuthSchemeProvider = (authParameters) => {
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
export const resolveStsAuthConfig = (input) => ({
    ...input,
    stsClientCtor: STSClient,
});
export const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = resolveStsAuthConfig(config);
    const config_1 = resolveAwsSdkSigV4Config(config_0);
    return {
        ...config_1,
    };
};
