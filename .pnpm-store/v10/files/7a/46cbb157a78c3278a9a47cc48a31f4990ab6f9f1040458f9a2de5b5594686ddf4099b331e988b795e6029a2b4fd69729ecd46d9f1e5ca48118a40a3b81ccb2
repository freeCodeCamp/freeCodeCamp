import { Span } from '../../types/span';
import { SpanStatusType } from '../../types/spanStatus';
import { AnthropicAiResponse } from './types';
/**
 * Set the messages and messages original length attributes.
 * Extracts system instructions before truncation.
 */
export declare function setMessagesAttribute(span: Span, messages: unknown, enableTruncation: boolean): void;
/**
 * Map an Anthropic API error type to a SpanStatusType value.
 * @see https://docs.anthropic.com/en/api/errors#error-shapes
 */
export declare function mapAnthropicErrorToStatusMessage(errorType: string | undefined): SpanStatusType;
/**
 * Capture error information from the response
 * @see https://docs.anthropic.com/en/api/errors#error-shapes
 */
export declare function handleResponseError(span: Span, response: AnthropicAiResponse): void;
/**
 * Include the system prompt in the messages list, if available
 */
export declare function messagesFromParams(params: Record<string, unknown>): unknown[];
//# sourceMappingURL=utils.d.ts.map
