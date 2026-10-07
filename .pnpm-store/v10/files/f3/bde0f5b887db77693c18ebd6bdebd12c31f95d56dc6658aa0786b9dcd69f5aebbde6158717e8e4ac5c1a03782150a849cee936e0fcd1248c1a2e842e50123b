import type { Span } from '@opentelemetry/api';
import type { InstrumentationConfig } from '@opentelemetry/instrumentation';
import { InstrumentationBase, InstrumentationNodeModuleDefinition } from '@opentelemetry/instrumentation';
export interface HonoResponseHookFunction {
    (span: Span): void;
}
export interface HonoInstrumentationConfig extends InstrumentationConfig {
    /** Function for adding custom span attributes from the response */
    responseHook?: HonoResponseHookFunction;
}
/**
 * Hono instrumentation for OpenTelemetry
 */
export declare class HonoInstrumentation extends InstrumentationBase<HonoInstrumentationConfig> {
    constructor(config?: HonoInstrumentationConfig);
    /**
     * Initialize the instrumentation.
     */
    init(): InstrumentationNodeModuleDefinition[];
    /**
     * Patches the module exports to instrument Hono.
     */
    private _patch;
    /**
     * Patches the route handler to instrument it.
     */
    private _patchHandler;
    /**
     * Patches the 'on' handler to instrument it.
     */
    private _patchOnHandler;
    /**
     * Patches the middleware handler to instrument it.
     */
    private _patchMiddlewareHandler;
    /**
     * Wraps a handler or middleware handler to apply instrumentation.
     */
    private _wrapHandler;
    /**
     * Safely executes a function and handles errors.
     */
    private _safeExecute;
    /**
     * Determines the handler type based on the result.
     * @param result
     * @private
     */
    private _determineHandlerType;
    /**
     * Handles errors by setting the span status and recording the exception.
     */
    private _handleError;
}
//# sourceMappingURL=instrumentation.d.ts.map