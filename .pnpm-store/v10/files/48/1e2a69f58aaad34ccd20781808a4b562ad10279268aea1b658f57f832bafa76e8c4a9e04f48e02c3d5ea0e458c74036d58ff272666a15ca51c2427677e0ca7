"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STSClient = exports.__Client = void 0;
const middleware_host_header_1 = require("@aws-sdk/middleware-host-header");
const middleware_logger_1 = require("@aws-sdk/middleware-logger");
const middleware_recursion_detection_1 = require("@aws-sdk/middleware-recursion-detection");
const middleware_user_agent_1 = require("@aws-sdk/middleware-user-agent");
const config_resolver_1 = require("@smithy/config-resolver");
const core_1 = require("@smithy/core");
const middleware_content_length_1 = require("@smithy/middleware-content-length");
const middleware_endpoint_1 = require("@smithy/middleware-endpoint");
const middleware_retry_1 = require("@smithy/middleware-retry");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "__Client", { enumerable: true, get: function () { return smithy_client_1.Client; } });
const httpAuthSchemeProvider_1 = require("./auth/httpAuthSchemeProvider");
const EndpointParameters_1 = require("./endpoint/EndpointParameters");
const runtimeConfig_1 = require("./runtimeConfig");
const runtimeExtensions_1 = require("./runtimeExtensions");
class STSClient extends smithy_client_1.Client {
    constructor(...[configuration]) {
        const _config_0 = (0, runtimeConfig_1.getRuntimeConfig)(configuration || {});
        const _config_1 = (0, EndpointParameters_1.resolveClientEndpointParameters)(_config_0);
        const _config_2 = (0, config_resolver_1.resolveRegionConfig)(_config_1);
        const _config_3 = (0, middleware_endpoint_1.resolveEndpointConfig)(_config_2);
        const _config_4 = (0, middleware_retry_1.resolveRetryConfig)(_config_3);
        const _config_5 = (0, middleware_host_header_1.resolveHostHeaderConfig)(_config_4);
        const _config_6 = (0, middleware_user_agent_1.resolveUserAgentConfig)(_config_5);
        const _config_7 = (0, httpAuthSchemeProvider_1.resolveHttpAuthSchemeConfig)(_config_6);
        const _config_8 = (0, runtimeExtensions_1.resolveRuntimeExtensions)(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0, middleware_retry_1.getRetryPlugin)(this.config));
        this.middlewareStack.use((0, middleware_content_length_1.getContentLengthPlugin)(this.config));
        this.middlewareStack.use((0, middleware_host_header_1.getHostHeaderPlugin)(this.config));
        this.middlewareStack.use((0, middleware_logger_1.getLoggerPlugin)(this.config));
        this.middlewareStack.use((0, middleware_recursion_detection_1.getRecursionDetectionPlugin)(this.config));
        this.middlewareStack.use((0, middleware_user_agent_1.getUserAgentPlugin)(this.config));
        this.middlewareStack.use((0, core_1.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use((0, core_1.getHttpSigningPlugin)(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return httpAuthSchemeProvider_1.defaultSTSHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new core_1.DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
        });
    }
}
exports.STSClient = STSClient;
