import { RequestOptions } from 'node:http';
import { Integration } from '@sentry/core';
export interface HttpIntegrationOptions {
    /**
     * Do not capture the request body for incoming HTTP requests to URLs where the given callback returns `true`.
     * This can be useful for long running requests where the body is not needed and we want to avoid capturing it.
     *
     * @param url Contains the entire URL, including query string (if any), protocol, host, etc. of the incoming request.
     * @param request Contains the {@type RequestOptions} object used to make the incoming request.
     */
    ignoreRequestBody?: (url: string, request: RequestOptions) => boolean;
    /**
     * Controls the maximum size of incoming HTTP request bodies attached to events.
     *
     * Available options:
     * - 'none': No request bodies will be attached
     * - 'small': Request bodies up to 1,000 bytes will be attached
     * - 'medium': Request bodies up to 10,000 bytes will be attached (default)
     * - 'always': Request bodies will always be attached
     *
     * Note that even with 'always' setting, bodies exceeding 1MB will never be attached
     * for performance and security reasons.
     *
     * @default 'medium'
     */
    maxRequestBodySize?: 'none' | 'small' | 'medium' | 'always';
    /**
     * Whether breadcrumbs should be recorded for outgoing requests.
     *
     * @default `true`
     */
    breadcrumbs?: boolean;
    /**
     * Whether to inject trace propagation headers (sentry-trace, baggage, traceparent) into outgoing HTTP requests.
     *
     * When set to `false`, Sentry will not inject any trace propagation headers, but will still create breadcrumbs
     * (if `breadcrumbs` is enabled).
     *
     * @default `true`
     */
    tracePropagation?: boolean;
    /**
     * Do not capture breadcrumbs or propagate trace headers for outgoing HTTP requests to URLs
     * where the given callback returns `true`.
     *
     * @param url Contains the entire URL, including query string (if any), protocol, host, etc. of the outgoing request.
     * @param request Contains the {@type RequestOptions} object used to make the outgoing request.
     */
    ignoreOutgoingRequests?: (url: string, request: RequestOptions) => boolean;
}
/**
 * This integration handles incoming and outgoing HTTP requests in light mode (without OpenTelemetry).
 *
 * It uses Node's native diagnostics channels (Node.js 22+) for request isolation,
 * trace propagation, and breadcrumb creation.
 */
export declare const httpIntegration: (options?: HttpIntegrationOptions) => Integration & {
    name: "Http";
    setupOnce: () => void;
};
//# sourceMappingURL=httpIntegration.d.ts.map
