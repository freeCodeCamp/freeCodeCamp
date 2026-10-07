import { HandlerExecutionContext, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, IdentityProviderConfig, Pluggable, RelativeMiddlewareOptions, SerializeHandlerOptions } from "@smithy/types";
import { PreviouslyResolved } from "./httpAuthSchemeMiddleware";
/**
 * @internal
 */
export declare const httpAuthSchemeEndpointRuleSetMiddlewareOptions: SerializeHandlerOptions & RelativeMiddlewareOptions;
/**
 * @internal
 */
interface HttpAuthSchemeEndpointRuleSetPluginOptions<TConfig extends object, TContext extends HandlerExecutionContext, TParameters extends HttpAuthSchemeParameters, TInput extends object> {
    httpAuthSchemeParametersProvider: HttpAuthSchemeParametersProvider<TConfig, TContext, TParameters, TInput>;
    identityProviderConfigProvider: (config: TConfig) => Promise<IdentityProviderConfig>;
}
/**
 * @internal
 */
export declare const getHttpAuthSchemeEndpointRuleSetPlugin: <TConfig extends object, TContext extends HandlerExecutionContext, TParameters extends HttpAuthSchemeParameters, TInput extends object>(config: TConfig & PreviouslyResolved<TParameters>, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }: HttpAuthSchemeEndpointRuleSetPluginOptions<TConfig, TContext, TParameters, TInput>) => Pluggable<any, any>;
export {};
