import { Span } from '../../types/span';
import { ChatCompletionChunk, ResponseStreamingEvent } from './types';
/**
 * Check if streaming event is from the Responses API
 */
export declare function isResponsesApiStreamEvent(event: unknown): event is ResponseStreamingEvent;
/**
 * Check if streaming event is a chat completion chunk
 */
export declare function isChatCompletionChunk(event: unknown): event is ChatCompletionChunk;
/**
 * Add response attributes to a span using duck-typing.
 * Works for Chat Completions, Responses API, Embeddings, and Conversations API responses.
 */
export declare function addResponseAttributes(span: Span, result: unknown, recordOutputs?: boolean): void;
/**
 * Extract request parameters including model settings and conversation context
 */
export declare function extractRequestParameters(params: Record<string, unknown>): Record<string, unknown>;
//# sourceMappingURL=utils.d.ts.map
