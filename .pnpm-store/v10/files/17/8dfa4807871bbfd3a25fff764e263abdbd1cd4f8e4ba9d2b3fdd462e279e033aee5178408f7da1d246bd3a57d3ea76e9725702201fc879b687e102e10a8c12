import { HandlerExecutionContext, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, IdentityProviderConfig, Pluggable, RelativeMiddlewareOptions, SerializeHandlerOptions } from "@smithy/types";
import { PreviouslyResolved } from "./httpAuthSchemeMiddleware";
/**
 * @internal
 */
export declare const httpAuthSchemeMiddlewareOptions: SerializeHandlerOptions & RelativeMiddlewareOptions;
/**
 * @internal
 */
interface HttpAuthSchemePluginOptions<TConfig extends object, TContext extends HandlerExecutionContext, TParameters extends HttpAuthSchemeParameters, TInput extends object> {
    httpAuthSchemeParametersProvider: HttpAuthSchemeParametersProvider<TConfig, TContext, TParameters, TInput>;
    identityProviderConfigProvider: (config: TConfig) => Promise<IdentityProviderConfig>;
}
/**
 * @internal
 */
export declare const getHttpAuthSchemePlugin: <TConfig extends object, TContext extends HandlerExecutionContext, TParameters extends HttpAuthSchemeParameters, TInput extends object>(config: TConfig & PreviouslyResolved<TParameters>, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }: HttpAuthSchemePluginOptions<TConfig, TContext, TParameters, TInput>) => Pluggable<any, any>;
export {};
