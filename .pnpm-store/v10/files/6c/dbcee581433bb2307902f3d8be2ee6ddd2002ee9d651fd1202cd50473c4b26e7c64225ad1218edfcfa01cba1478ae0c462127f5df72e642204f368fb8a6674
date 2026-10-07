import { HttpHandler } from "../httpHandler";
/**
 * @internal
 */
export interface HttpHandlerExtensionConfiguration<HandlerConfig extends object = {}> {
    setHttpHandler(handler: HttpHandler<HandlerConfig>): void;
    httpHandler(): HttpHandler<HandlerConfig>;
    updateHttpClientConfig(key: keyof HandlerConfig, value: HandlerConfig[typeof key]): void;
    httpHandlerConfigs(): HandlerConfig;
}
/**
 * @internal
 */
export type HttpHandlerExtensionConfigType<HandlerConfig extends object = {}> = Partial<{
    httpHandler: HttpHandler<HandlerConfig>;
}>;
/**
 * @internal
 *
 * Helper function to resolve default extension configuration from runtime config
 */
export declare const getHttpHandlerExtensionConfiguration: <HandlerConfig extends object = {}>(runtimeConfig: Partial<{
    httpHandler: HttpHandler<HandlerConfig>;
}>) => {
    setHttpHandler(handler: HttpHandler<HandlerConfig>): void;
    httpHandler(): HttpHandler<HandlerConfig>;
    updateHttpClientConfig(key: keyof HandlerConfig, value: HandlerConfig[keyof HandlerConfig]): void;
    httpHandlerConfigs(): HandlerConfig;
};
/**
 * @internal
 *
 * Helper function to resolve runtime config from default extension configuration
 */
export declare const resolveHttpHandlerRuntimeConfig: <HandlerConfig extends object = {}>(httpHandlerExtensionConfiguration: HttpHandlerExtensionConfiguration<HandlerConfig>) => Partial<{
    httpHandler: HttpHandler<HandlerConfig>;
}>;
