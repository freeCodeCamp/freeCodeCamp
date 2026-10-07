import type { LangChainOptions } from '@sentry/core';
export declare const instrumentLangChain: ((options?: LangChainOptions | undefined) => import("@opentelemetry/instrumentation").Instrumentation<import("@opentelemetry/instrumentation").InstrumentationConfig>) & {
    id: string;
};
/**
 * Adds Sentry tracing instrumentation for LangChain.
 *
 * This integration is enabled by default.
 *
 * When configured, this integration automatically instruments LangChain runnable instances
 * to capture telemetry data by injecting Sentry callback handlers into all LangChain calls.
 *
 * **Important:** This integration automatically skips wrapping the OpenAI, Anthropic, and Google GenAI
 * providers to prevent duplicate spans when using LangChain with these AI providers.
 * LangChain handles the instrumentation for all underlying AI providers.
 *
 * @example
 * ```javascript
 * import * as Sentry from '@sentry/node';
 * import { ChatOpenAI } from '@langchain/openai';
 *
 * Sentry.init({
 *   integrations: [Sentry.langChainIntegration()],
 *   sendDefaultPii: true, // Enable to record inputs/outputs
 * });
 *
 * // LangChain calls are automatically instrumented
 * const model = new ChatOpenAI();
 * await model.invoke("What is the capital of France?");
 * ```
 *
 * ## Manual Callback Handler
 *
 * You can also manually add the Sentry callback handler alongside other callbacks:
 *
 * @example
 * ```javascript
 * import * as Sentry from '@sentry/node';
 * import { ChatOpenAI } from '@langchain/openai';
 *
 * const sentryHandler = Sentry.createLangChainCallbackHandler({
 *   recordInputs: true,
 *   recordOutputs: true
 * });
 *
 * const model = new ChatOpenAI();
 * await model.invoke(
 *   "What is the capital of France?",
 *   { callbacks: [sentryHandler, myOtherCallback] }
 * );
 * ```
 *
 * ## Options
 *
 * - `recordInputs`: Whether to record input messages/prompts (default: respects `sendDefaultPii` client option)
 * - `recordOutputs`: Whether to record response text (default: respects `sendDefaultPii` client option)
 *
 * ### Default Behavior
 *
 * By default, the integration will:
 * - Record inputs and outputs ONLY if `sendDefaultPii` is set to `true` in your Sentry client options
 * - Otherwise, inputs and outputs are NOT recorded unless explicitly enabled
 *
 * @example
 * ```javascript
 * // Record inputs and outputs when sendDefaultPii is false
 * Sentry.init({
 *   integrations: [
 *     Sentry.langChainIntegration({
 *       recordInputs: true,
 *       recordOutputs: true
 *     })
 *   ],
 * });
 *
 * // Never record inputs/outputs regardless of sendDefaultPii
 * Sentry.init({
 *   sendDefaultPii: true,
 *   integrations: [
 *     Sentry.langChainIntegration({
 *       recordInputs: false,
 *       recordOutputs: false
 *     })
 *   ],
 * });
 * ```
 *
 * ## Supported Events
 *
 * The integration captures the following LangChain lifecycle events:
 * - LLM/Chat Model: start, end, error (via callbacks)
 * - Chain: start, end, error (via callbacks)
 * - Tool: start, end, error (via callbacks)
 * - Embeddings: embedQuery, embedDocuments (via direct method wrapping)
 *
 */
export declare const langChainIntegration: (options?: LangChainOptions | undefined) => import("@sentry/core").Integration;
//# sourceMappingURL=index.d.ts.map