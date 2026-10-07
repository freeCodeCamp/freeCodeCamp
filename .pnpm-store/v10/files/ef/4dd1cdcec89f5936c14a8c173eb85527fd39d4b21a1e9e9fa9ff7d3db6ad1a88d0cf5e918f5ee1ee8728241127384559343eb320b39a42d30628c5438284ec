import type { RequestOptions } from 'node:http';
import type { HttpIncomingMessage } from '@sentry/core';
import type { SentryHttpInstrumentationOptions } from './SentryHttpInstrumentation';
interface HttpOptions {
    /**
     * Whether breadcrumbs should be recorded for outgoing requests.
     * Defaults to true
     */
    breadcrumbs?: boolean;
    /**
     * Whether to create spans for requests or not.
     * As of now, creates spans for incoming requests, but not outgoing requests.
     *
     * @default `true`
     */
    spans?: boolean;
    /**
     * Whether the integration should create [Sessions](https://docs.sentry.io/product/releases/health/#sessions) for incoming requests to track the health and crash-free rate of your releases in Sentry.
     * Read more about Release Health: https://docs.sentry.io/product/releases/health/
     *
     * Defaults to `true`.
     */
    trackIncomingRequestsAsSessions?: boolean;
    /**
     * Number of milliseconds until sessions tracked with `trackIncomingRequestsAsSessions` will be flushed as a session aggregate.
     *
     * Defaults to `60000` (60s).
     */
    sessionFlushingDelayMS?: number;
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
     * Do not capture spans or breadcrumbs for outgoing HTTP requests to URLs where the given callback returns `true`.
     * This controls both span & breadcrumb creation - spans will be non recording if tracing is disabled.
     *
     * The `url` param contains the entire URL, including query string (if any), protocol, host, etc. of the outgoing request.
     * For example: `'https://someService.com/users/details?id=123'`
     *
     * The `request` param contains the original {@type RequestOptions} object used to make the outgoing request.
     * You can use it to filter on additional properties like method, headers, etc.
     */
    ignoreOutgoingRequests?: (url: string, request: RequestOptions) => boolean;
    /**
     * Do not capture spans for incoming HTTP requests to URLs where the given callback returns `true`.
     * Spans will be non recording if tracing is disabled.
     *
     * The `urlPath` param consists of the URL path and query string (if any) of the incoming request.
     * For example: `'/users/details?id=123'`
     *
     * The `request` param contains the original {@type IncomingMessage} object of the incoming request.
     * You can use it to filter on additional properties like method, headers, etc.
     */
    ignoreIncomingRequests?: (urlPath: string, request: HttpIncomingMessage) => boolean;
    /**
     * Do not capture spans for incoming HTTP requests with the given status codes.
     * By default, spans with some 3xx and 4xx status codes are ignored (see @default).
     * Expects an array of status codes or a range of status codes, e.g. [[300,399], 404] would ignore 3xx and 404 status codes.
     *
     * @default `[[401, 404], [301, 303], [305, 399]]`
     */
    dropSpansForIncomingRequestStatusCodes?: (number | [number, number])[];
    /**
     * Do not capture the request body for incoming HTTP requests to URLs where the given callback returns `true`.
     * This can be useful for long running requests where the body is not needed and we want to avoid capturing it.
     *
     * @param url Contains the entire URL, including query string (if any), protocol, host, etc. of the incoming request.
     * @param request Contains the {@type RequestOptions} object used to make the incoming request.
     */
    ignoreIncomingRequestBody?: (url: string, request: RequestOptions) => boolean;
    /**
     * Whether to automatically ignore common static asset requests like favicon.ico, robots.txt, etc.
     * This helps reduce noise in your transactions.
     *
     * @default `true`
     */
    ignoreStaticAssets?: boolean;
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
    maxIncomingRequestBodySize?: 'none' | 'small' | 'medium' | 'always';
    /**
     * If true, do not generate spans for incoming requests at all.
     * This is used by Remix to avoid generating spans for incoming requests, as it generates its own spans.
     */
    disableIncomingRequestSpans?: boolean;
}
export declare const instrumentSentryHttp: ((options?: SentryHttpInstrumentationOptions | undefined) => import("@opentelemetry/instrumentation").Instrumentation<import("@opentelemetry/instrumentation").InstrumentationConfig>) & {
    id: string;
};
/**
 * The http integration instruments Node's internal http and https modules.
 * It creates breadcrumbs for outgoing HTTP requests which will be attached to the currently active span.
 */
export declare const httpIntegration: (options?: HttpOptions | undefined) => import("@sentry/core").Integration;
export {};
//# sourceMappingURL=index.d.ts.map