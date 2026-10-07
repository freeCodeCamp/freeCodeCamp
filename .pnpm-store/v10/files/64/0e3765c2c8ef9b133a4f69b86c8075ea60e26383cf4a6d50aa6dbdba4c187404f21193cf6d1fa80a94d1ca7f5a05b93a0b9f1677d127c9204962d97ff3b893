import { Context, TextMapGetter, TextMapSetter } from '@opentelemetry/api';
import { W3CBaggagePropagator } from '@opentelemetry/core';
import { Client, continueTrace, DynamicSamplingContext, Scope } from '@sentry/core';
/**
 * Injects and extracts `sentry-trace` and `baggage` headers from carriers.
 */
export declare class SentryPropagator extends W3CBaggagePropagator {
    /** A map of URLs that have already been checked for if they match tracePropagationTargets. */
    private _urlMatchesTargetsMap;
    constructor();
    /**
     * @inheritDoc
     */
    inject(context: Context, carrier: unknown, setter: TextMapSetter): void;
    /**
     * @inheritDoc
     */
    extract(context: Context, carrier: unknown, getter: TextMapGetter): Context;
    /**
     * @inheritDoc
     */
    fields(): string[];
}
export { shouldPropagateTraceForUrl } from '@sentry/core';
/**
 * Get propagation injection data for the given context.
 * The additional options can be passed to override the scope and client that is otherwise derived from the context.
 */
export declare function getInjectionData(context: Context, options?: {
    scope?: Scope;
    client?: Client;
}): {
    dynamicSamplingContext: Partial<DynamicSamplingContext> | undefined;
    traceId: string | undefined;
    spanId: string | undefined;
    sampled: boolean | undefined;
};
/**
 * Takes trace strings and propagates them as a remote active span.
 * This should be used in addition to `continueTrace` in OTEL-powered environments.
 */
export declare function continueTraceAsRemoteSpan<T>(ctx: Context, options: Parameters<typeof continueTrace>[0], callback: () => T): T;
//# sourceMappingURL=propagator.d.ts.map
