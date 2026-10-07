import { InstrumentationBase, type InstrumentationConfig, type InstrumentationModuleDefinition } from '@opentelemetry/instrumentation';
import type { LangGraphOptions } from '@sentry/core';
type LangGraphInstrumentationOptions = InstrumentationConfig & LangGraphOptions;
/**
 * Sentry LangGraph instrumentation using OpenTelemetry.
 */
export declare class SentryLangGraphInstrumentation extends InstrumentationBase<LangGraphInstrumentationOptions> {
    constructor(config?: LangGraphInstrumentationOptions);
    /**
     * Initializes the instrumentation by defining the modules to be patched.
     */
    init(): InstrumentationModuleDefinition[];
    /**
     * Core patch logic applying instrumentation to the LangGraph module.
     */
    private _patch;
}
export {};
//# sourceMappingURL=instrumentation.d.ts.map