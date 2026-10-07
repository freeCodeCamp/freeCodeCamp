import type { CoreOptions } from '../../types/options';
import type { BeforeSendStreamedSpanCallback } from '../../types/options';
import type { StreamedSpanJSON } from '../../types/span';
type StaticBeforeSendSpanCallback = CoreOptions['beforeSendSpan'];
/**
 * A wrapper to use the new span format in your `beforeSendSpan` callback.
 *
 * When using `traceLifecycle: 'stream'`, wrap your callback with this function
 * to receive and return {@link StreamedSpanJSON} instead of the standard {@link SpanJSON}.
 *
 * @example
 *
 * Sentry.init({
 *   traceLifecycle: 'stream',
 *   beforeSendSpan: withStreamedSpan((span) => {
 *     // span is of type StreamedSpanJSON
 *     return span;
 *   }),
 * });
 *
 * @param callback - The callback function that receives and returns a {@link StreamedSpanJSON}.
 * @returns A callback that is compatible with the `beforeSendSpan` option when using `traceLifecycle: 'stream'`.
 */
export declare function withStreamedSpan(callback: (span: StreamedSpanJSON) => StreamedSpanJSON): StaticBeforeSendSpanCallback & {
    _streamed: true;
};
/**
 * Typesafe check to identify if a `beforeSendSpan` callback expects the streamed span JSON format.
 *
 * @param callback - The `beforeSendSpan` callback to check.
 * @returns `true` if the callback was wrapped with {@link withStreamedSpan}.
 */
export declare function isStreamedBeforeSendSpanCallback(callback: unknown): callback is BeforeSendStreamedSpanCallback;
export {};
//# sourceMappingURL=beforeSendSpan.d.ts.map