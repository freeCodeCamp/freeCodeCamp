import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import { InstrumentationBase } from '@opentelemetry/instrumentation';
export type SentryNodeFetchInstrumentationOptions = InstrumentationConfig & {
    /**
     * Whether breadcrumbs should be recorded for requests.
     *
     * @default `true`
     */
    breadcrumbs?: boolean;
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
     * Do not capture breadcrumbs or inject headers for outgoing fetch requests to URLs where the given callback returns `true`.
     * The same option can be passed to the top-level httpIntegration where it controls both, breadcrumb and
     * span creation.
     *
     * @param url Contains the entire URL, including query string (if any), protocol, host, etc. of the outgoing request.
     */
    ignoreOutgoingRequests?: (url: string) => boolean;
};
/**
 * This custom node-fetch instrumentation is used to instrument outgoing fetch requests.
 * It does not emit any spans.
 *
 * The reason this is isolated from the OpenTelemetry instrumentation is that users may overwrite this,
 * which would lead to Sentry not working as expected.
 *
 * This is heavily inspired & adapted from:
 * https://github.com/open-telemetry/opentelemetry-js-contrib/blob/28e209a9da36bc4e1f8c2b0db7360170ed46cb80/plugins/node/instrumentation-undici/src/undici.ts
 */
export declare class SentryNodeFetchInstrumentation extends InstrumentationBase<SentryNodeFetchInstrumentationOptions> {
    private _channelSubs;
    private _propagationDecisionMap;
    private _ignoreOutgoingRequestsMap;
    constructor(config?: SentryNodeFetchInstrumentationOptions);
    /** No need to instrument files/modules. */
    init(): void;
    /** Disable the instrumentation. */
    disable(): void;
    /** Enable the instrumentation. */
    enable(): void;
    /**
     * This method is called when a request is created.
     * You can still mutate the request here before it is sent.
     */
    private _onRequestCreated;
    /**
     * This method is called when a response is received.
     */
    private _onResponseHeaders;
    /** Subscribe to a diagnostics channel. */
    private _subscribeToChannel;
    /**
     * Check if the given outgoing request should be ignored.
     */
    private _shouldIgnoreOutgoingRequest;
}
//# sourceMappingURL=SentryNodeFetchInstrumentation.d.ts.map
