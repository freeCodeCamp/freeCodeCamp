import type { Integration } from '@sentry/core';
export interface NativeNodeFetchIntegrationOptions {
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
     * (if `breadcrumbs` is enabled).
     *
     * @default `true`
     */
    tracePropagation?: boolean;
    /**
     * Do not capture breadcrumbs or inject headers for outgoing fetch requests to URLs
     * where the given callback returns `true`.
     *
     * @param url Contains the entire URL, including query string (if any), protocol, host, etc. of the outgoing request.
     */
    ignoreOutgoingRequests?: (url: string) => boolean;
}
/**
 * This integration handles outgoing fetch (undici) requests in light mode (without OpenTelemetry).
 * It propagates trace headers and creates breadcrumbs for responses.
 */
export declare const nativeNodeFetchIntegration: (options?: NativeNodeFetchIntegrationOptions) => Integration & {
    name: "NodeFetch";
    setupOnce: () => void;
};
//# sourceMappingURL=nativeNodeFetchIntegration.d.ts.map