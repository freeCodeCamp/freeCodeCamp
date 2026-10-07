import { Span } from '../../types/span';
/**
 * Instruments a stream of OpenAI events, updating the provided span with relevant attributes and
 * optionally recording output text. This function yields each event from the input stream as it is processed.
 *
 * @template T - The type of events in the stream.
 * @param stream - The async iterable stream of events to instrument.
 * @param span - The span to add attributes to and to finish at the end of the stream.
 * @param recordOutputs - Whether to record output text fragments in the span.
 * @returns An async generator yielding each event from the input stream.
 */
export declare function instrumentStream<T>(stream: AsyncIterable<T>, span: Span, recordOutputs: boolean): AsyncGenerator<T, void, unknown>;
//# sourceMappingURL=streaming.d.ts.map
