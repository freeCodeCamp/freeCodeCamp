import { InstrumentationConfig, InstrumentationModuleDefinition } from '@opentelemetry/instrumentation';
import { InstrumentationBase } from '@opentelemetry/instrumentation';
import { GoogleGenAIOptions } from '@sentry/core';
type GoogleGenAIInstrumentationOptions = GoogleGenAIOptions & InstrumentationConfig;
/**
 * Sentry Google GenAI instrumentation using OpenTelemetry.
 */
export declare class SentryGoogleGenAiInstrumentation extends InstrumentationBase<GoogleGenAIInstrumentationOptions> {
    constructor(config?: GoogleGenAIInstrumentationOptions);
    /**
     * Initializes the instrumentation by defining the modules to be patched.
     */
    init(): InstrumentationModuleDefinition;
    /**
     * Core patch logic applying instrumentation to the Google GenAI client constructor.
     */
    private _patch;
}
export {};
//# sourceMappingURL=instrumentation.d.ts.map
