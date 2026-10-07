import { InstrumentationBase, type InstrumentationConfig, type InstrumentationModuleDefinition } from '@opentelemetry/instrumentation';
import type { AnthropicAiOptions } from '@sentry/core';
type AnthropicAiInstrumentationOptions = InstrumentationConfig & AnthropicAiOptions;
/**
 * Sentry Anthropic AI instrumentation using OpenTelemetry.
 */
export declare class SentryAnthropicAiInstrumentation extends InstrumentationBase<AnthropicAiInstrumentationOptions> {
    constructor(config?: AnthropicAiInstrumentationOptions);
    /**
     * Initializes the instrumentation by defining the modules to be patched.
     */
    init(): InstrumentationModuleDefinition;
    /**
     * Core patch logic applying instrumentation to the Anthropic AI client constructor.
     */
    private _patch;
}
export {};
//# sourceMappingURL=instrumentation.d.ts.map