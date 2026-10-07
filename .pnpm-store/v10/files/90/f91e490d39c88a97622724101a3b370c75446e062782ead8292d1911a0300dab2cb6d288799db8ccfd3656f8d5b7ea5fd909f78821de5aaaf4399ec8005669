import { SpanAttributeValue } from '../../types/span';
import { LangChainLLMResult, LangChainMessage, LangChainSerialized } from './types';
/**
 * Returns invocation params from a LangChain `tags` object.
 *
 * LangChain often passes runtime parameters (model, temperature, etc.) via the
 * `tags.invocation_params` bag. If `tags` is an array (LangChain sometimes uses
 * string tags), we return `undefined`.
 *
 * @param tags LangChain tags (string[] or record)
 * @returns The `invocation_params` object, if present
 */
export declare function getInvocationParams(tags?: string[] | Record<string, unknown>): Record<string, unknown> | undefined;
/**
 * Normalizes a heterogeneous set of LangChain messages to `{ role, content }`.
 *
 * Why so many branches? LangChain messages can arrive in several shapes:
 *  - Message classes with `_getType()` (most reliable)
 *  - Classes with meaningful constructor names (e.g. `SystemMessage`)
 *  - Plain objects with `type`, or `{ role, content }`
 *  - Serialized format with `{ lc: 1, id: [...], kwargs: { content } }`
 * We preserve the prioritization to minimize behavioral drift.
 *
 * @param messages Mixed LangChain messages
 * @returns Array of normalized `{ role, content }`
 */
export declare function normalizeLangChainMessages(messages: LangChainMessage[]): Array<{
    role: string;
    content: string;
}>;
/**
 * Extracts attributes for plain LLM invocations (string prompts).
 *
 * - Operation is tagged as `chat` following OpenTelemetry semantic conventions.
 *   LangChain LLM operations are treated as chat operations.
 * - When `recordInputs` is true, string prompts are wrapped into `{role:"user"}`
 *   messages to align with the chat schema used elsewhere.
 */
export declare function extractLLMRequestAttributes(llm: LangChainSerialized, prompts: string[], recordInputs: boolean, enableTruncation: boolean, invocationParams?: Record<string, unknown>, langSmithMetadata?: Record<string, unknown>): Record<string, SpanAttributeValue>;
/**
 * Extracts attributes for ChatModel invocations (array-of-arrays of messages).
 *
 * - Operation is tagged as `chat` following OpenTelemetry semantic conventions.
 *   LangChain chat model operations are chat operations.
 * - We flatten LangChain's `LangChainMessage[][]` and normalize shapes into a
 *   consistent `{ role, content }` array when `recordInputs` is true.
 * - Provider system value falls back to `serialized.id?.[2]`.
 */
export declare function extractChatModelRequestAttributes(llm: LangChainSerialized, langChainMessages: LangChainMessage[][], recordInputs: boolean, enableTruncation: boolean, invocationParams?: Record<string, unknown>, langSmithMetadata?: Record<string, unknown>): Record<string, SpanAttributeValue>;
/**
 * Extracts response-related attributes based on a `LangChainLLMResult`.
 *
 * - Records finish reasons when present on generations (e.g., OpenAI)
 * - When `recordOutputs` is true, captures textual response content and any
 *   tool calls.
 * - Also propagates model name (`model_name` or `model`), response `id`, and
 *   `stop_reason` (for providers that use it).
 */
export declare function extractLlmResponseAttributes(llmResult: LangChainLLMResult, recordOutputs: boolean): Record<string, SpanAttributeValue> | undefined;
export declare function getAgentNameFromMetadata(metadata?: Record<string, unknown>): Record<string, SpanAttributeValue>;
export declare function extractToolDefinitions(extraParams?: Record<string, unknown>): string | undefined;
/**
 * Merge `sentryHandler` into a given set of LangChain callbacks or callback manager.
 * @internal Exported for cross-package instrumentation.
 */
export declare function _INTERNAL_mergeLangChainCallbackHandler(existing: unknown, sentryHandler: unknown): unknown;
//# sourceMappingURL=utils.d.ts.map
