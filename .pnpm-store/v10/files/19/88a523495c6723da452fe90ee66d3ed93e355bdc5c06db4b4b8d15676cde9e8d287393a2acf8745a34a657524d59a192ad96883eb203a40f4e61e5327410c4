import { HandlerExecutionContext, HttpAuthScheme, HttpAuthSchemeParameters, HttpAuthSchemeParametersProvider, HttpAuthSchemeProvider, IdentityProviderConfig, SelectedHttpAuthScheme, SerializeMiddleware, SMITHY_CONTEXT_KEY } from "@smithy/types";
/**
 * @internal
 */
export interface PreviouslyResolved<TParameters extends HttpAuthSchemeParameters> {
    httpAuthSchemes: HttpAuthScheme[];
    httpAuthSchemeProvider: HttpAuthSchemeProvider<TParameters>;
}
/**
 * @internal
 */
interface HttpAuthSchemeMiddlewareOptions<TConfig extends object, TContext extends HandlerExecutionContext, TParameters extends HttpAuthSchemeParameters, TInput extends object> {
    httpAuthSchemeParametersProvider: HttpAuthSchemeParametersProvider<TConfig, TContext, TParameters, TInput>;
    identityProviderConfigProvider: (config: TConfig) => Promise<IdentityProviderConfig>;
}
/**
 * @internal
 */
interface HttpAuthSchemeMiddlewareSmithyContext extends Record<string, unknown> {
    selectedHttpAuthScheme?: SelectedHttpAuthScheme;
}
/**
 * @internal
 */
interface HttpAuthSchemeMiddlewareHandlerExecutionContext extends HandlerExecutionContext {
    [SMITHY_CONTEXT_KEY]?: HttpAuthSchemeMiddlewareSmithyContext;
}
/**
 * @internal
 */
export declare const httpAuthSchemeMiddleware: <TInput extends object, Output extends object, TConfig extends object, TContext extends HttpAuthSchemeMiddlewareHandlerExecutionContext, TParameters extends HttpAuthSchemeParameters>(config: TConfig & PreviouslyResolved<TParameters>, mwOptions: HttpAuthSchemeMiddlewareOptions<TConfig, TContext, TParameters, TInput>) => SerializeMiddleware<TInput, Output>;
export {};
