import { SpanProcessor } from '@opentelemetry/sdk-trace-base';
import { BasicTracerProvider } from '@opentelemetry/sdk-trace-base';
import { NodeClient } from '@sentry/node-core';
import { AsyncLocalStorageLookup } from '@sentry/opentelemetry';
interface AdditionalOpenTelemetryOptions {
    /** Additional SpanProcessor instances that should be used. */
    spanProcessors?: SpanProcessor[];
}
/**
 * Initialize OpenTelemetry for Node.
 */
export declare function initOpenTelemetry(client: NodeClient, options?: AdditionalOpenTelemetryOptions): void;
interface NodePreloadOptions {
    debug?: boolean;
    integrations?: string[];
}
/**
 * Preload OpenTelemetry for Node.
 * This can be used to preload instrumentation early, but set up Sentry later.
 * By preloading the OTEL instrumentation wrapping still happens early enough that everything works.
 */
export declare function preloadOpenTelemetry(options?: NodePreloadOptions): void;
/** Just exported for tests. */
export declare function setupOtel(client: NodeClient, options?: AdditionalOpenTelemetryOptions): [
    BasicTracerProvider,
    AsyncLocalStorageLookup
];
/** Just exported for tests. */
export declare function _clampSpanProcessorTimeout(maxSpanWaitDuration: number | undefined): number | undefined;
export {};
//# sourceMappingURL=initOtel.d.ts.map
