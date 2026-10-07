import { InstrumentationBase, InstrumentationConfig, InstrumentationModuleDefinition } from '@opentelemetry/instrumentation';
import { LangChainOptions } from '@sentry/core';
type LangChainInstrumentationOptions = InstrumentationConfig & LangChainOptions;
/**
 * Sentry LangChain instrumentation using OpenTelemetry.
 */
export declare class SentryLangChainInstrumentation extends InstrumentationBase<LangChainInstrumentationOptions> {
    constructor(config?: LangChainInstrumentationOptions);
    /**
     * Initializes the instrumentation by defining the modules to be patched.
     * We patch the BaseChatModel class methods to inject callbacks
     *
     * We hook into provider packages (@langchain/anthropic, @langchain/openai, etc.)
     * because @langchain/core is often bundled and not loaded as a separate module
     */
    init(): InstrumentationModuleDefinition | InstrumentationModuleDefinition[];
    /**
     * Core patch logic - patches chat model and embedding methods
     * This is called when a LangChain provider package is loaded
     */
    private _patch;
    /**
     * Patches chat model methods (invoke, stream, batch) to inject Sentry callbacks
     * Finds a chat model class from the provider package exports and patches its prototype methods
     */
    private _patchRunnableMethods;
    /**
     * Patches embedding class methods (embedQuery, embedDocuments) to create Sentry spans.
     *
     * Unlike chat models which use LangChain's callback system, the Embeddings base class
     * has no callback support. We wrap the methods directly on the prototype.
     *
     * Instruments any exported class whose prototype has both embedQuery and embedDocuments as functions.
     */
    private _patchEmbeddingsMethods;
}
export {};
//# sourceMappingURL=instrumentation.d.ts.map
