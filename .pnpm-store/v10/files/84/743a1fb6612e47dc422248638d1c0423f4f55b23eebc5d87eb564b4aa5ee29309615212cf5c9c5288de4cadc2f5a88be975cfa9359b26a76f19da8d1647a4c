import { TraceContext } from '../../types/context';
import { Span, SpanAttributes, SpanJSON } from '../../types/span';
import { TokenSummary, ToolCallSpanContext } from './types';
/**
 * Accumulates token data from a span to its parent in the token accumulator map.
 * This function extracts token usage from the current span and adds it to the
 * accumulated totals for its parent span.
 */
export declare function accumulateTokensForParent(span: SpanJSON, tokenAccumulator: Map<string, TokenSummary>): void;
/**
 * Applies accumulated token data to the `gen_ai.invoke_agent` span.
 * Only immediate children of the `gen_ai.invoke_agent` span are considered,
 * since aggregation will automatically occur for each parent span.
 */
export declare function applyAccumulatedTokens(spanOrTrace: SpanJSON | TraceContext, tokenAccumulator: Map<string, TokenSummary>): void;
/**
 * Applies tool descriptions and accumulated tokens to spans in a single pass.
 *
 * - For `gen_ai.execute_tool` spans: looks up tool description from
 *   `gen_ai.request.available_tools` on sibling spans
 * - For `gen_ai.invoke_agent` spans: applies accumulated token data from children
 */
export declare function applyToolDescriptionsAndTokens(spans: SpanJSON[], tokenAccumulator: Map<string, TokenSummary>): void;
/**
 * Get the span context associated with a tool call ID.
 */
export declare function _INTERNAL_getSpanContextForToolCallId(toolCallId: string): ToolCallSpanContext | undefined;
/**
 * Clean up the span mapping for a tool call ID
 */
export declare function _INTERNAL_cleanupToolCallSpanContext(toolCallId: string): void;
/**
 * Convert an array of tool strings to a JSON string
 */
export declare function convertAvailableToolsToJsonString(tools: unknown[]): string;
/**
 * Normalize the user input (stringified object with prompt, system, messages) to messages array
 */
export declare function convertUserInputToMessagesFormat(userInput: string): {
    role: string;
    content: string;
}[];
/**
 * Generate a request.messages JSON array from the prompt field in the
 * invoke_agent op
 */
export declare function requestMessagesFromPrompt(span: Span, attributes: SpanAttributes, enableTruncation: boolean): void;
//# sourceMappingURL=utils.d.ts.map
