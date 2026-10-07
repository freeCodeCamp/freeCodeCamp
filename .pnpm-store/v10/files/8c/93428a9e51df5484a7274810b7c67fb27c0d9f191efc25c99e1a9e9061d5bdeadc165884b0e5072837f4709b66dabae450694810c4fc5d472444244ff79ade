import type { RequestOptions } from 'node:http';
import type { HttpIncomingMessage, Integration } from '@sentry/core';
import { recordRequestSession } from '@sentry/core';
export { recordRequestSession };
interface WeakRefImpl<T> {
    deref(): T | undefined;
}
type StartSpanCallback = (next: () => boolean) => boolean;
type RequestWithOptionalStartSpanCallback = HttpIncomingMessage & {
    _startSpanCallback?: WeakRefImpl<StartSpanCallback>;
};
export interface HttpServerIntegrationOptions {
    /**
     * Whether the integration should create [Sessions](https://docs.sentry.io/product/releases/health/#sessions) for incoming requests to track the health and crash-free rate of your releases in Sentry.
     * Read more about Release Health: https://docs.sentry.io/product/releases/health/
     *
     * Defaults to `true`.
     */
    sessions?: boolean;
    /**
     * Number of milliseconds until sessions tracked with `trackIncomingRequestsAsSessions` will be flushed as a session aggregate.
     *
     * Defaults to `60000` (60s).
     */
    sessionFlushingDelayMS?: number;
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
}
/**
 * Add a callback to the request object that will be called when the request is started.
 * The callback will receive the next function to continue processing the request.
 */
export declare function addStartSpanCallback(request: RequestWithOptionalStartSpanCallback, callback: StartSpanCallback): void;
/**
 * This integration handles request isolation, trace continuation and other core Sentry functionality around incoming http requests
 * handled via the node `http` module.
 *
 * This version uses OpenTelemetry for context propagation and span management.
 *
 * @see {@link ../../light/integrations/httpServerIntegration.ts} for the lightweight version without OpenTelemetry
 */
export declare const httpServerIntegration: (options?: HttpServerIntegrationOptions) => Integration & {
    name: "HttpServer";
    setupOnce: () => void;
};
//# sourceMappingURL=httpServerIntegration.d.ts.map