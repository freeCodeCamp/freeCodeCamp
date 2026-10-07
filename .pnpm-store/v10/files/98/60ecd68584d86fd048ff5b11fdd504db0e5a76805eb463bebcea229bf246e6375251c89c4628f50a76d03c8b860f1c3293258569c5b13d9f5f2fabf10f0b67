import { Scope } from '../scope';
import { ResolvedDataCollection } from '../types/datacollection';
import { RequestEventData } from '../types/request';
import { WebFetchHeaders, WebFetchRequest } from '../types/webfetchapi';
/**
 * Maximum size of incoming HTTP request bodies attached to events.
 *
 * - `'none'`: No request bodies will be attached
 * - `'small'`: Request bodies up to 1,000 bytes will be attached
 * - `'medium'`: Request bodies up to 10,000 bytes will be attached
 * - `'always'`: Request bodies will always be attached (up to 1MB hard cap)
 */
export type MaxRequestBodySize = 'none' | 'small' | 'medium' | 'always';
/** Hard cap on captured body size, even when `maxRequestBodySize` is `'always'`. */
export declare const MAX_BODY_BYTE_LENGTH: number;
/**
 * Convert a `maxRequestBodySize` setting to a maximum byte length.
 */
export declare function getMaxBodyByteLength(maxRequestBodySize: Exclude<MaxRequestBodySize, 'none'>): number;
/**
 * Transforms a `Headers` object that implements the `Web Fetch API` (https://developer.mozilla.org/en-US/docs/Web/API/Headers) into a simple key-value dict.
 * The header keys will be lower case: e.g. A "Content-Type" header will be stored as "content-type".
 */
export declare function winterCGHeadersToDict(winterCGHeaders: WebFetchHeaders): Record<string, string>;
/**
 * Convert common request headers to a simple dictionary.
 */
export declare function headersToDict(reqHeaders: Record<string, string | string[] | undefined | number>): Record<string, string>;
/**
 * Converts a `Request` object that implements the `Web Fetch API` (https://developer.mozilla.org/en-US/docs/Web/API/Headers) into the format that the `RequestData` integration understands.
 */
export declare function winterCGRequestToRequestData(req: WebFetchRequest): RequestEventData;
/**
 * Captures the body from a Web Fetch API Request and adds it to the isolation scope.
 *
 * This function clones the request to read the body without affecting the original.
 * Only textual content types are captured - binary data is skipped.
 *
 * This is used by WinterCG-compatible runtimes (Cloudflare Workers, Deno, Bun, Vercel Edge, etc.)
 * that use the Web Fetch API Request object.
 *
 * @param request - The incoming Web Fetch API Request
 * @param isolationScope - The isolation scope to add the body to
 * @param maxRequestBodySize - The maximum size of the request body to capture ('small' = 1KB, 'medium' = 10KB, 'always' = 1MB)
 */
export declare function captureBodyFromWinterCGRequest(request: WebFetchRequest, isolationScope: Scope, maxRequestBodySize: Exclude<MaxRequestBodySize, 'none'>): Promise<void>;
/**
 * Convert a HTTP request object to RequestEventData to be passed as normalizedRequest.
 * Instead of allowing `PolymorphicRequest` to be passed,
 * we want to be more specific and generally require a http.IncomingMessage-like object.
 */
export declare function httpRequestToRequestData(request: {
    method?: string;
    url?: string;
    headers?: {
        [key: string]: string | string[] | undefined;
    };
    protocol?: string;
    socket?: {
        encrypted?: boolean;
        remoteAddress?: string;
    };
}): RequestEventData;
/**
 * Converts incoming HTTP request or response headers to OpenTelemetry span attributes following semantic conventions.
 * Header names are converted to the format: http.<request|response>.header.<key>
 * where <key> is the header name in lowercase with dashes converted to underscores.
 *
 * @param lifecycle - The lifecycle of the headers, either 'request' or 'response'
 *
 * @see https://opentelemetry.io/docs/specs/semconv/registry/attributes/http/#http-request-header
 * @see https://opentelemetry.io/docs/specs/semconv/registry/attributes/http/#http-response-header
 *
 * @see https://getsentry.github.io/sentry-conventions/attributes/http/#http-request-header-key
 * @see https://getsentry.github.io/sentry-conventions/attributes/http/#http-response-header-key
 */
export declare function httpHeadersToSpanAttributes(headers: Record<string, string | string[] | undefined>, dataCollection?: ResolvedDataCollection | boolean, lifecycle?: 'request' | 'response'): Record<string, string>;
/** Extract the query params from an URL. */
export declare function extractQueryParamsFromUrl(url: string): string | undefined;
//# sourceMappingURL=request.d.ts.map
