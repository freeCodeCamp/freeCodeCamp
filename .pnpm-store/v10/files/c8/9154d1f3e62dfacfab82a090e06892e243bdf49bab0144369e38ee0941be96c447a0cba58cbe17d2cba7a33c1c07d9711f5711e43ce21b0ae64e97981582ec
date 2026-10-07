import type { Span as WriteableSpan } from '@opentelemetry/api';
import type { ReadableSpan } from '@opentelemetry/sdk-trace-base';
import type { ClientOptions, Options, SamplingContext, Scope, Span } from '@sentry/core';
import type { NodeTransportOptions, OpenTelemetryServerRuntimeOptions } from '@sentry/node-core';
/**
 * Base options for the Sentry Node SDK.
 * Extends the common WinterTC options with OpenTelemetry support shared with Bun and other server-side SDKs.
 */
export interface BaseNodeOptions extends OpenTelemetryServerRuntimeOptions {
    /**
     * Sets profiling sample rate when @sentry/profiling-node is installed
     *
     * @deprecated
     */
    profilesSampleRate?: number;
    /**
     * Function to compute profiling sample rate dynamically and filter unwanted profiles.
     *
     * Profiling is enabled if either this or `profilesSampleRate` is defined. If both are defined, `profilesSampleRate` is
     * ignored.
     *
     * Will automatically be passed a context object of default and optional custom data.
     *
     * @returns A sample rate between 0 and 1 (0 drops the profile, 1 guarantees it will be sent). Returning `true` is
     * equivalent to returning 1 and returning `false` is equivalent to returning 0.
     *
     * @deprecated
     */
    profilesSampler?: (samplingContext: SamplingContext) => number | boolean;
    /**
     * Sets profiling session sample rate for the entire profiling session (evaluated once per SDK initialization).
     *
     * @default 0
     */
    profileSessionSampleRate?: number;
    /**
     * Set the lifecycle mode of the profiler.
     * - **manual**: The profiler will be manually started and stopped via `startProfiler`/`stopProfiler`.
     *    If a session is sampled, is dependent on the `profileSessionSampleRate`.
     * - **trace**: The profiler will be automatically started when a root span exists and stopped when there are no
     *    more sampled root spans. Whether a session is sampled, is dependent on the `profileSessionSampleRate` and the
     *    existing sampling configuration for tracing (`tracesSampleRate`/`tracesSampler`).
     *
     * @default 'manual'
     */
    profileLifecycle?: 'manual' | 'trace';
    /**
     * Include local variables with stack traces.
     *
     * Requires the `LocalVariables` integration.
     */
    includeLocalVariables?: boolean;
    /**
     * Whether to register ESM loader hooks to automatically instrument libraries.
     * This is necessary to auto instrument libraries that are loaded via ESM imports, but it can cause issues
     * with certain libraries. If you run into problems running your app with this enabled,
     * please raise an issue in https://github.com/getsentry/sentry-javascript.
     *
     * Defaults to `true`.
     */
    registerEsmLoaderHooks?: boolean;
}
/**
 * Configuration options for the Sentry Node SDK
 * @see @sentry/core Options for more information.
 */
export interface NodeOptions extends Options<NodeTransportOptions>, BaseNodeOptions {
}
/**
 * Configuration options for the Sentry Node SDK Client class
 * @see NodeClient for more information.
 */
export interface NodeClientOptions extends ClientOptions<NodeTransportOptions>, BaseNodeOptions {
}
export interface CurrentScopes {
    scope: Scope;
    isolationScope: Scope;
}
/**
 * The base `Span` type is basically a `WriteableSpan`.
 * There are places where we basically want to allow passing _any_ span,
 * so in these cases we type this as `AbstractSpan` which could be either a regular `Span` or a `ReadableSpan`.
 * You'll have to make sur to check relevant fields before accessing them.
 *
 * Note that technically, the `Span` exported from `@opentelemetry/sdk-trace-base` matches this,
 * but we cannot be 100% sure that we are actually getting such a span, so this type is more defensive.
 */
export type AbstractSpan = WriteableSpan | ReadableSpan | Span;
//# sourceMappingURL=types.d.ts.map