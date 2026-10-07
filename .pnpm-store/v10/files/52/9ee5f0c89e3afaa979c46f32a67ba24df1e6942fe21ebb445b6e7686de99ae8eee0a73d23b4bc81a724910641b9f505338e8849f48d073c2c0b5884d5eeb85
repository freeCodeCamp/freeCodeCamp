"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRuntimeExtensions = void 0;
const region_config_resolver_1 = require("@aws-sdk/region-config-resolver");
const protocol_http_1 = require("@smithy/protocol-http");
const smithy_client_1 = require("@smithy/smithy-client");
const httpAuthExtensionConfiguration_1 = require("./auth/httpAuthExtensionConfiguration");
const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0, region_config_resolver_1.getAwsRegionExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, smithy_client_1.getDefaultExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, protocol_http_1.getHttpHandlerExtensionConfiguration)(runtimeConfig)),
        ...asPartial((0, httpAuthExtensionConfiguration_1.getHttpAuthExtensionConfiguration)(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0, region_config_resolver_1.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
        ...(0, smithy_client_1.resolveDefaultRuntimeConfig)(extensionConfiguration),
        ...(0, protocol_http_1.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
        ...(0, httpAuthExtensionConfiguration_1.resolveHttpAuthRuntimeConfig)(extensionConfiguration),
    };
};
exports.resolveRuntimeExtensions = resolveRuntimeExtensions;
