import { InstrumentationBase, InstrumentationConfig, InstrumentationModuleDefinition } from '@opentelemetry/instrumentation';
import { Integration, OpenAiOptions } from '@sentry/core';
export interface OpenAiIntegration extends Integration {
    options: OpenAiOptions;
}
type OpenAiInstrumentationOptions = InstrumentationConfig & OpenAiOptions;
/**
 * Sentry OpenAI instrumentation using OpenTelemetry.
 */
export declare class SentryOpenAiInstrumentation extends InstrumentationBase<OpenAiInstrumentationOptions> {
    constructor(config?: OpenAiInstrumentationOptions);
    /**
     * Initializes the instrumentation by defining the modules to be patched.
     */
    init(): InstrumentationModuleDefinition;
    /**
     * Core patch logic applying instrumentation to the OpenAI and AzureOpenAI client constructors.
     */
    private _patch;
    /**
     * Patch logic applying instrumentation to the specified client constructor.
     */
    private _patchClient;
}
export {};
//# sourceMappingURL=instrumentation.d.ts.map
