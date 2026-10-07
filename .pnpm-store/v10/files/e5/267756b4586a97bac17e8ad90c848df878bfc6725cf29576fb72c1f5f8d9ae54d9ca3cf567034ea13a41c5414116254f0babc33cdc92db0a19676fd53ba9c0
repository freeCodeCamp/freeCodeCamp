import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { resolveRegionConfig } from "@smithy/config-resolver";
import { DefaultIdentityProviderConfig, getHttpAuthSchemeEndpointRuleSetPlugin, getHttpSigningPlugin, } from "@smithy/core";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig } from "@smithy/middleware-retry";
import { Client as __Client, } from "@smithy/smithy-client";
import { defaultSTSHttpAuthSchemeParametersProvider, resolveHttpAuthSchemeConfig, } from "./auth/httpAuthSchemeProvider";
import { resolveClientEndpointParameters, } from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions } from "./runtimeExtensions";
export { __Client };
export class STSClient extends __Client {
    constructor(...[configuration]) {
        const _config_0 = __getRuntimeConfig(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = resolveRegionConfig(_config_1);
        const _config_3 = resolveEndpointConfig(_config_2);
        const _config_4 = resolveRetryConfig(_config_3);
        const _config_5 = resolveHostHeaderConfig(_config_4);
        const _config_6 = resolveUserAgentConfig(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use(getRetryPlugin(this.config));
        this.middlewareStack.use(getContentLengthPlugin(this.config));
        this.middlewareStack.use(getHostHeaderPlugin(this.config));
        this.middlewareStack.use(getLoggerPlugin(this.config));
        this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
        this.middlewareStack.use(getUserAgentPlugin(this.config));
        this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use(getHttpSigningPlugin(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSTSHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
        });
    }
}
