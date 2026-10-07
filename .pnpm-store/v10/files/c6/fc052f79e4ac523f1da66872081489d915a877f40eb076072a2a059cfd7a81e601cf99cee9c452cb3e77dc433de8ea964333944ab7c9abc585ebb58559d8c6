import { Span as WriteableSpan } from '@opentelemetry/api';
import { Instrumentation } from '@opentelemetry/instrumentation';
import { ReadableSpan, SpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ClientOptions, Options, SamplingContext, Scope, ServerRuntimeOptions, Span } from '@sentry/core';
import { NodeTransportOptions } from './transports';
/**
 * Base options for WinterTC-compatible server-side JavaScript runtimes with OpenTelemetry support.
 * This interface extends the base ServerRuntimeOptions from @sentry/core with OpenTelemetry-specific configuration options.
 * Used by Node.js, Bun, and other WinterTC-compliant runtime SDKs that support OpenTelemetry instrumentation.
 */
export interface OpenTelemetryServerRuntimeOptions extends ServerRuntimeOptions {
    /**
     * If this is set to true, the SDK will not set up OpenTelemetry automatically.
     * In this case, you _have_ to ensure to set it up correctly yourself, including:
     * * The `SentrySpanProcessor`
     * * The `SentryPropagator`
     * * The `SentryContextManager`
     * * The `SentrySampler`
     */
    skipOpenTelemetrySetup?: boolean;
    /**
     * Provide an array of OpenTelemetry Instrumentations that should be registered.
     *
     * Use this option if you want to register OpenTelemetry instrumentation that the Sentry SDK does not yet have support for.
     */
    openTelemetryInstrumentations?: Instrumentation[];
    /**
     * Provide an array of additional OpenTelemetry SpanProcessors that should be registered.
     */
    openTelemetrySpanProcessors?: SpanProcessor[];
}
/**
 * Base options for the Sentry Node SDK.
 * Extends the common WinterTC options with OpenTelemetry support shared with Bun and other server-side SDKs.
 */
export interface BaseNodeOptions extends OpenTelemetryServerRuntimeOptions {
    /**
     * Override the runtime name reported in events.
     * Defaults to 'node' with the current process version if not specified.
     *
     * @hidden This is primarily used internally to support platforms like Next on OpenNext/Cloudflare.
     */
    runtime?: {
        name: string;
        version?: string;
    };
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
     * Sets profiling session sample rate - only evaluated once per SDK initialization.
     * @default 0
     */
    profileSessionSampleRate?: number;
    /**
     * Set the lifecycle of the profiler.
     *
     * - `manual`: The profiler will be manually started and stopped.
     * - `trace`: The profiler will be automatically started when when a span is sampled and stopped when there are no more sampled spans.
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
