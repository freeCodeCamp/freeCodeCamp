import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
import { KoaInstrumentationConfig } from './types';
/** Koa instrumentation for OpenTelemetry */
export declare class KoaInstrumentation extends InstrumentationBase<KoaInstrumentationConfig> {
    constructor(config?: KoaInstrumentationConfig);
    protected init(): InstrumentationNodeModuleDefinition;
    /**
     * Patches the Koa.use function in order to instrument each original
     * middleware layer which is introduced
     * @param {KoaMiddleware} middleware - the original middleware function
     */
    private _getKoaUsePatch;
    /**
     * Patches the dispatch function used by @koa/router. This function
     * goes through each routed middleware and adds instrumentation via a call
     * to the @function _patchLayer function.
     * @param {KoaMiddleware} dispatchLayer - the original dispatch function which dispatches
     * routed middleware
     */
    private _patchRouterDispatch;
    /**
     * Patches each individual @param middlewareLayer function in order to create the
     * span and propagate context. It does not create spans when there is no parent span.
     * @param {KoaMiddleware} middlewareLayer - the original middleware function.
     * @param {boolean} isRouter - tracks whether the original middleware function
     * was dispatched by the router originally
     * @param {string?} layerPath - if present, provides additional data from the
     * router about the routed path which the middleware is attached to
     */
    private _patchLayer;
}
//# sourceMappingURL=instrumentation.d.ts.map