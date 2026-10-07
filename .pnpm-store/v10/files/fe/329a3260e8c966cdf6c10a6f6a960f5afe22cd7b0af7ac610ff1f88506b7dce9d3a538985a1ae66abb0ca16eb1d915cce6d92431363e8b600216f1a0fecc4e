import { Span } from '../../types/span';
import { AnthropicAiStreamingEvent } from './types';
/**
 * Instruments an async iterable stream of Anthropic events, updates the span with
 * streaming attributes and (optionally) the aggregated output text, and yields
 * each event from the input stream unchanged.
 */
export declare function instrumentAsyncIterableStream(stream: AsyncIterable<AnthropicAiStreamingEvent>, span: Span, recordOutputs: boolean): AsyncGenerator<AnthropicAiStreamingEvent, void, unknown>;
/**
 * Instruments a MessageStream by registering event handlers and preserving the original stream API.
 */
export declare function instrumentMessageStream<R extends {
    on: (...args: unknown[]) => void;
}>(stream: R, span: Span, recordOutputs: boolean): R;
//# sourceMappingURL=streaming.d.ts.map
