import { AbsoluteLocation, BuildHandler, BuildHandlerOptions, HandlerExecutionContext, MetadataBearer, Pluggable } from "@smithy/types";
import { UserAgentResolvedConfig } from "./configurations";
/**
 * Build user agent header sections from:
 * 1. runtime-specific default user agent provider;
 * 2. custom user agent from `customUserAgent` client config;
 * 3. handler execution context set by internal SDK components;
 * The built user agent will be set to `x-amz-user-agent` header for ALL the
 * runtimes.
 * Please note that any override to the `user-agent` or `x-amz-user-agent` header
 * in the HTTP request is discouraged. Please use `customUserAgent` client
 * config or middleware setting the `userAgent` context to generate desired user
 * agent.
 */
export declare const userAgentMiddleware: (options: UserAgentResolvedConfig) => <Output extends MetadataBearer>(next: BuildHandler<any, any>, context: HandlerExecutionContext) => BuildHandler<any, any>;
export declare const getUserAgentMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation;
export declare const getUserAgentPlugin: (config: UserAgentResolvedConfig) => Pluggable<any, any>;
