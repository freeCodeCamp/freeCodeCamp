"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const core_1 = require("@aws-sdk/core");
const core_2 = require("@smithy/core");
const smithy_client_1 = require("@smithy/smithy-client");
const url_parser_1 = require("@smithy/url-parser");
const util_base64_1 = require("@smithy/util-base64");
const util_utf8_1 = require("@smithy/util-utf8");
const httpAuthSchemeProvider_1 = require("./auth/httpAuthSchemeProvider");
const endpointResolver_1 = require("./endpoint/endpointResolver");
const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? util_base64_1.fromBase64,
        base64Encoder: config?.base64Encoder ?? util_base64_1.toBase64,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? endpointResolver_1.defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new core_1.AwsSdkSigV4Signer(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new core_2.NoAuthSigner(),
            },
        ],
        logger: config?.logger ?? new smithy_client_1.NoOpLogger(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? url_parser_1.parseUrl,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_1.fromUtf8,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_1.toUtf8,
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
