import type { UndiciInstrumentationConfig } from './vendored/types';
interface NodeFetchOptions extends Pick<UndiciInstrumentationConfig, 'requestHook' | 'responseHook' | 'headersToSpanAttributes'> {
    /**
     * Whether breadcrumbs should be recorded for requests.
     * Defaults to true
     */
    breadcrumbs?: boolean;
    /**
     * If set to false, do not emit any spans.
     * This will ensure that the default UndiciInstrumentation from OpenTelemetry is not setup,
     * only the Sentry-specific instrumentation for breadcrumbs & trace propagation is applied.
     *
     * If `skipOpenTelemetrySetup: true` is configured, this defaults to `false`, otherwise it defaults to `true`.
     */
    spans?: boolean;
    /**
     * Whether to inject trace propagation headers (sentry-trace, baggage, traceparent) into outgoing fetch requests.
     *
     * When set to `false`, Sentry will not inject any trace propagation headers, but will still create breadcrumbs
     * (if `breadcrumbs` is enabled). This is useful when `skipOpenTelemetrySetup: true` is configured and you want
     * to avoid duplicate trace headers being injected by both Sentry and OpenTelemetry's UndiciInstrumentation.
     *
     * @default `true`
     */
    tracePropagation?: boolean;
    /**
     * Do not capture spans or breadcrumbs for outgoing fetch requests to URLs where the given callback returns `true`.
     * This controls both span & breadcrumb creation - spans will be non recording if tracing is disabled.
     */
    ignoreOutgoingRequests?: (url: string) => boolean;
}
export declare const nativeNodeFetchIntegration: (options?: NodeFetchOptions | undefined) => import("@sentry/core").Integration;
/** Exported only for tests. */
export declare function _getConfigWithDefaults(options?: Partial<NodeFetchOptions>): UndiciInstrumentationConfig;
export {};
//# sourceMappingURL=index.d.ts.map