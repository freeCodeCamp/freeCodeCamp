import { AbsoluteLocation, BuildHandlerOptions, BuildMiddleware, Pluggable, RequestHandler } from "@smithy/types";
/**
 * @public
 */
export interface HostHeaderInputConfig {
}
interface PreviouslyResolved {
    requestHandler: RequestHandler<any, any>;
}
export interface HostHeaderResolvedConfig {
    /**
     * The HTTP handler to use. Fetch in browser and Https in Nodejs.
     */
    requestHandler: RequestHandler<any, any>;
}
export declare function resolveHostHeaderConfig<T>(input: T & PreviouslyResolved & HostHeaderInputConfig): T & HostHeaderResolvedConfig;
export declare const hostHeaderMiddleware: <Input extends object, Output extends object>(options: HostHeaderResolvedConfig) => BuildMiddleware<Input, Output>;
export declare const hostHeaderMiddlewareOptions: BuildHandlerOptions & AbsoluteLocation;
export declare const getHostHeaderPlugin: (options: HostHeaderResolvedConfig) => Pluggable<any, any>;
export {};
