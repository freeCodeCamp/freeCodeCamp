/**
 * Vendored and adapted from https://github.com/logaretm/otel-tracing-channel
 *
 * Creates a TracingChannel with proper OpenTelemetry context propagation
 * using Node.js diagnostic_channel's `bindStore` mechanism.
 */
import { TracingChannel, TracingChannelSubscribers } from 'node:diagnostics_channel';
import { Span } from '@opentelemetry/api';
/**
 * Transform function that creates a span from the channel data.
 */
export type OtelTracingChannelTransform<TData = object> = (data: TData) => Span;
export type TracingChannelContextWithSpan<TContext extends object = object> = TContext & {
    _sentrySpan?: Span;
};
/**
 * A TracingChannel whose `subscribe` / `unsubscribe` accept partial subscriber
 * objects — you only need to provide handlers for the events you care about.
 */
export interface OtelTracingChannel<TData extends object = object, TDataWithSpan extends object = TracingChannelContextWithSpan<TData>> extends Pick<TracingChannel<TData, TDataWithSpan>, Exclude<keyof TracingChannel<TData, TDataWithSpan>, 'subscribe' | 'unsubscribe'>> {
    subscribe(subscribers: Partial<TracingChannelSubscribers<TDataWithSpan>>): void;
    unsubscribe(subscribers: Partial<TracingChannelSubscribers<TDataWithSpan>>): void;
}
/**
 * Creates a new tracing channel with proper OTel context propagation.
 *
 * When the channel's `tracePromise` / `traceSync` / `traceCallback` is called,
 * the `transformStart` function runs inside `bindStore` so that:
 *   1. A new span is created from the channel data.
 *   2. The span is set on the OTel context stored in AsyncLocalStorage.
 *   3. Downstream code (including Sentry's span processor) sees the correct parent.
 *
 * @param channelNameOrInstance - Either a channel name string or an existing TracingChannel instance.
 * @param transformStart - Function that creates an OpenTelemetry span from the channel data.
 * @returns The tracing channel with OTel context bound.
 */
export declare function tracingChannel<TData extends object = object>(channelNameOrInstance: string, transformStart: OtelTracingChannelTransform<TData>): OtelTracingChannel<TData, TracingChannelContextWithSpan<TData>>;
//# sourceMappingURL=tracingChannel.d.ts.map
