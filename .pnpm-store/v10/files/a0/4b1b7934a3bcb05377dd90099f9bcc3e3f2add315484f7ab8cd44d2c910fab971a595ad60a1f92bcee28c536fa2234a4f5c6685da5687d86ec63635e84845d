/**
 * Platform-portable HTTP(S) outgoing-request integration – type definitions.
 *
 * @module
 *
 * This Sentry integration is a derivative work based on the OpenTelemetry
 * HTTP instrumentation.
 *
 * <https://github.com/open-telemetry/opentelemetry-js/tree/main/experimental/packages/opentelemetry-instrumentation-http>
 *
 * Extended under the terms of the Apache 2.0 license linked below:
 *
 * ----
 *
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { RequestEventData } from '../../types/request';
import { Span } from '../../types/span';
/** Minimal interface for a Node.js http.ClientRequest */
export interface HttpClientRequest {
    method?: string;
    path?: string;
    host?: string;
    protocol?: string;
    port?: number;
    end(): void;
    getHeader(name: string): string | string[] | number | undefined;
    getHeaders(): Record<string, string | string[] | undefined | number>;
    setHeader(name: string, value: string | string[] | number): void;
    removeHeader(name: string): void;
    prependListener(event: 'response', listener: (res: HttpIncomingMessage) => void): this;
    prependListener(event: string | symbol, listener: (...args: unknown[]) => void): this;
    on(event: string | symbol, listener: (...args: unknown[]) => void): this;
    once(event: string | symbol, listener: (...args: unknown[]) => void): this;
    listenerCount(event: string | symbol): number;
    removeListener(event: string | symbol, listener: (...args: unknown[]) => void): this;
}
/** Minimal interface for http client RequestOptions */
export interface HttpRequestOptions {
    method?: string;
    protocol?: string | null;
    hostname?: string | null;
    host?: string | null;
    port?: string | number | null;
    path?: string | null;
    headers?: Record<string, string | string[] | undefined | number>;
}
/** Minimal interface for a Node.js http.ServerResponse */
export interface HttpServerResponse {
    statusCode: number;
    statusMessage?: string;
    headers: Record<string, string | undefined | string[] | number>;
    once(ev: string | symbol, handler: (...data: unknown[]) => void): this;
    once(ev: 'close', handler: () => void): this;
    on(ev: string | symbol, handler: (...data: unknown[]) => void): this;
}
export interface HttpServer {
    emit(ev: string, ...data: unknown[]): this;
    emit(ev: 'request', request: HttpIncomingMessage, response: HttpServerResponse): this;
}
export interface HttpSocket {
    remoteAddress?: string;
    remotePort?: number;
    localAddress?: string;
    localPort?: number;
}
/** Minimal interface for a Node.js http.IncomingMessage */
export interface HttpIncomingMessage {
    statusCode?: number;
    statusMessage?: string;
    httpVersion?: string;
    url?: string;
    method?: string;
    headers: Record<string, string | string[] | undefined>;
    socket?: HttpSocket;
    aborted?: boolean;
    complete?: boolean;
    resume(): void;
    on(event: 'end', listener: () => void): this;
    on(event: string | symbol, listener: (...args: unknown[]) => void): this;
    addListener(event: 'end', listener: () => void): this;
    addListener(event: string | symbol, listener: (...args: unknown[]) => void): this;
    off(event: string | symbol, listener: (...args: unknown[]) => void): this;
    removeListener(event: string | symbol, listener: (...args: unknown[]) => void): this;
}
/** Minimal interface for a Node.js http / https module export */
export interface HttpExport {
    request: (...args: any[]) => HttpClientRequest;
    get: (...args: any[]) => HttpClientRequest;
    [key: string]: unknown;
}
export type HttpModuleExport = HttpExport | (HttpExport & {
    default: HttpExport;
});
export interface HttpInstrumentationOptions {
    /**
     * Whether to create spans for HTTP requests. Applies to both outgoing
     * (`getHttpClientSubscriptions`) and incoming (`getHttpServerSubscriptions`)
     * request instrumentation. Defaults to the client's tracing configuration
     * (`hasSpansEnabled`) when unset.
     */
    spans?: boolean;
    /**
     * Whether to inject distributed trace propagation headers
     * (`sentry-trace`, `baggage`, `traceparent`) into outgoing requests.
     * @default false
     */
    propagateTrace?: boolean;
    /**
     * Skip span / breadcrumb creation for requests to matching URLs.
     * Receives the full URL string and the outgoing request object.
     */
    ignoreOutgoingRequests?: (url: string, request: HttpClientRequest) => boolean;
    /**
     * Whether breadcrumbs should be recorded for outgoing requests.
     * @default true
     */
    breadcrumbs?: boolean;
    /**
     * Called after the outgoing-request span is created by the client.
     * Use this to add custom attributes to the span.
     */
    outgoingRequestHook?: (span: Span, request: HttpClientRequest) => void;
    /**
     * Called when the response is received by the client.
     */
    outgoingResponseHook?: (span: Span, response: HttpIncomingMessage) => void;
    /**
     * Called when both the request and response are available (after the
     * response ends).  Useful for adding attributes based on both objects.
     */
    applyCustomAttributesOnSpan?: (span: Span, request: HttpClientRequest, response: HttpIncomingMessage) => void;
    /**
     * Symbol to use for observing errors on EventEmitters without consuming
     * them.  Pass `EventEmitter.errorMonitor` from Node.js `events` module.
     * Falls back to the plain `'error'` event string when not provided.
     *
     * Using the real `errorMonitor` symbol ensures that Sentry does not
     * swallow errors before they reach user-supplied `'error'` handlers.
     */
    errorMonitor?: symbol | string;
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
     * Do not capture the request body for incoming HTTP requests to URLs where the given callback returns `true`.
     * This can be useful for long running requests where the body is not needed and we want to avoid capturing it.
     *
     * @param url Contains the entire URL, including query string (if any), protocol, host, etc. of the incoming request.
     * @param request Contains the {@type RequestOptions} object used to make the incoming request.
     */
    ignoreRequestBody?: (url: string, request: HttpIncomingMessage) => boolean;
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
     * Optional callback that can be used by integrations to emit the 'request'
     * event within a given Sentry or OTEL context, possibly after creating a
     * span, as in the HttpServerSpansIntegration.
     *
     * **Important**: next() **must** be called synchronously, or else the
     * http.Server.emit return value will be lost, and the proxy will return
     * `false` even if there are listeners.
     */
    wrapServerEmitRequest?: (request: HttpIncomingMessage, response: HttpServerResponse, normalizedRequest: RequestEventData, next: () => void) => void;
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
     * Whether to automatically ignore common static asset requests like favicon.ico, robots.txt, etc.
     * This helps reduce noise in your transactions.
     *
     * @default `true`
     */
    ignoreStaticAssets?: boolean;
    /**
     * Do not capture spans for incoming HTTP requests with the given status codes.
     * By default, spans with some 3xx and 4xx status codes are ignored (see @default).
     * Expects an array of status codes or a range of status codes, e.g. [[300,399], 404] would ignore 3xx and 404 status codes.
     *
     * @default `[[401, 404], [301, 303], [305, 399]]`
     */
    ignoreStatusCodes?: (number | [
        number,
        number
    ])[];
    /**
     * A hook that can be used to mutate the span for incoming requests.
     * This is triggered after the span is created, but before it is recorded.
     */
    onSpanCreated?: (span: Span, request: HttpIncomingMessage, response: HttpServerResponse) => void;
    /**
     * A hook that can be used to mutate the span one last time when the
     * response is finished, eg to update the transaction name based on
     * the RPC metadata.
     */
    onSpanEnd?: (span: Span, request: HttpIncomingMessage, response: HttpServerResponse) => void;
    /**
     * Optional: pass in the `http` and `https` modules in order to detect
     * whether a standalone OTel instrumentation is attempting to wrap them
     * as well. This is fine, as long as `spans` option is disabled, but will
     * result in double-emitting spans otherwise.
     *
     * Since this cannot be fully prevented due to module load timing, and isn't
     * necessarily harmful per se (just noisy/annoying), and there are a number
     * of reasonable approaches to fix it (disable the OTel instrumentation,
     * disable this instrumentation, or keep both and disable spans in one or the
     * other), we simply print a warning so the user can hopefully make an
     * informed decision about how to address it (if at all).
     */
    http?: HttpModuleExport;
    https?: HttpModuleExport;
    /** suppress the warning about double-wrapping with OTel */
    suppressOtelWarning?: boolean;
}
//# sourceMappingURL=types.d.ts.map
