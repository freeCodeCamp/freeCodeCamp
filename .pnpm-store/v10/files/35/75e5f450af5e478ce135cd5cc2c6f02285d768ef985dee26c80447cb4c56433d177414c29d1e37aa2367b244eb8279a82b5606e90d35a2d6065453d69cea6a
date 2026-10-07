import type { Context } from '@opentelemetry/api';
import { SpanKind } from '@opentelemetry/api';
import type { Sampler, SamplingResult } from '@opentelemetry/sdk-trace-base';
import { SamplingDecision } from '@opentelemetry/sdk-trace-base';
import type { Client, SpanAttributes } from '@sentry/core';
/**
 * A custom OTEL sampler that uses Sentry sampling rates to make its decision
 */
export declare class SentrySampler implements Sampler {
    private _client;
    private _isSpanStreaming;
    constructor(client: Client);
    /** @inheritDoc */
    shouldSample(context: Context, traceId: string, spanName: string, spanKind: SpanKind, spanAttributes: SpanAttributes, _links: unknown): SamplingResult;
    /** Returns the sampler name or short description with the configuration. */
    toString(): string;
}
/**
 * Wrap a sampling decision with data that Sentry needs to work properly with it.
 * If you pass `decision: undefined`, it will be treated as `NOT_RECORDING`, but in contrast to passing `NOT_RECORDING`
 * it will not propagate this decision to downstream Sentry SDKs.
 */
export declare function wrapSamplingDecision({ decision, context, spanAttributes, sampleRand, downstreamTraceSampleRate, ignoredChildSpan, ignoredSegmentSpan, }: {
    decision: SamplingDecision | undefined;
    context: Context;
    spanAttributes: SpanAttributes;
    sampleRand?: number;
    downstreamTraceSampleRate?: number;
    ignoredChildSpan?: boolean;
    ignoredSegmentSpan?: boolean;
}): SamplingResult;
//# sourceMappingURL=sampler.d.ts.map