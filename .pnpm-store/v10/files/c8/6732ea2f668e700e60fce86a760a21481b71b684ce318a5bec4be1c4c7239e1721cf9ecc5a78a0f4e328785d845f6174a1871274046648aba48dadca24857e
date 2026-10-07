import { Span } from '@opentelemetry/api';
import { InstrumentationConfig } from '@opentelemetry/instrumentation';
export declare enum KoaLayerType {
    ROUTER = "router",
    MIDDLEWARE = "middleware"
}
/**
 * Information about the current Koa middleware layer
 * The middleware layer type is any by default.
 * One can install koa types packages `@types/koa` and `@types/koa__router`
 * with compatible versions to the koa version used in the project
 * to get more specific types for the middleware layer property.
 *
 * Example use in a custom attribute function:
 * ```ts
 * import type { Middleware, ParameterizedContext, DefaultState } from 'koa';
 * import type { RouterParamContext } from '@koa/router';
 *
 * type KoaContext = ParameterizedContext<DefaultState, RouterParamContext>;
 * type KoaMiddleware = Middleware<DefaultState, KoaContext>;
 *
 * const koaConfig: KoaInstrumentationConfig<KoaContext, KoaMiddleware> = {
 *  requestHook: (span: Span, info: KoaRequestInfo<KoaContext, KoaMiddleware>) => {
 *   // custom typescript code that can access the typed into.middlewareLayer and info.context
 * }
 *
 */
export type KoaRequestInfo<KoaContextType = any, KoaMiddlewareType = any> = {
    context: KoaContextType;
    middlewareLayer: KoaMiddlewareType;
    layerType: KoaLayerType;
};
/**
 * Function that can be used to add custom attributes to the current span
 * @param span - The Express middleware layer span.
 * @param context - The current KoaContext.
 */
export interface KoaRequestCustomAttributeFunction<KoaContextType = any, KoaMiddlewareType = any> {
    (span: Span, info: KoaRequestInfo<KoaContextType, KoaMiddlewareType>): void;
}
/**
 * Options available for the Koa Instrumentation (see [documentation](https://github.com/open-telemetry/opentelemetry-js/tree/main/packages/opentelemetry-Instrumentation-koa#koa-Instrumentation-options))
 */
export interface KoaInstrumentationConfig<KoaContextType = any, KoaMiddlewareType = any> extends InstrumentationConfig {
    /** Ignore specific layers based on their type */
    ignoreLayersType?: KoaLayerType[];
    /** Function for adding custom attributes to each middleware layer span */
    requestHook?: KoaRequestCustomAttributeFunction<KoaContextType, KoaMiddlewareType>;
}
//# sourceMappingURL=types.d.ts.map