import type { SpanAttributes } from '../types/span';
type PartialURL = {
    host?: string;
    path?: string;
    protocol?: string;
    relative?: string;
    search?: string;
    hash?: string;
};
type RelativeURL = {
    isRelative: true;
    pathname: URL['pathname'];
    search: URL['search'];
    hash: URL['hash'];
};
type URLObject = RelativeURL | URL;
/**
 * Checks if the URL object is relative
 *
 * @param url - The URL object to check
 * @returns True if the URL object is relative, false otherwise
 */
export declare function isURLObjectRelative(url: URLObject): url is RelativeURL;
/**
 * Parses string to a URL object
 *
 * @param url - The URL to parse
 * @returns The parsed URL object or undefined if the URL is invalid
 */
export declare function parseStringToURLObject(url: string, urlBase?: string | URL | undefined): URLObject | undefined;
/**
 * Takes a URL object and returns a sanitized string which is safe to use as span name
 * see: https://develop.sentry.dev/sdk/data-handling/#structuring-data
 */
export declare function getSanitizedUrlStringFromUrlObject(url: URLObject): string;
type PartialRequest = {
    method?: string;
};
/**
 * Takes a parsed URL object and returns a set of attributes for the span
 * that represents the HTTP request for that url. This is used for both server
 * and client http spans.
 *
 * Follows https://opentelemetry.io/docs/specs/semconv/http/.
 *
 * @param urlObject - see {@link parseStringToURLObject}
 * @param kind - The type of HTTP operation (server or client)
 * @param spanOrigin - The origin of the span
 * @param request - The request object, see {@link PartialRequest}
 * @param routeName - The name of the route, must be low cardinality
 * @returns The span name and attributes for the HTTP operation
 */
export declare function getHttpSpanDetailsFromUrlObject(urlObject: URLObject | undefined, kind: 'server' | 'client', spanOrigin: string, request?: PartialRequest, routeName?: string): [name: string, attributes: SpanAttributes];
/**
 * Parses string form of URL into an object
 * // borrowed from https://tools.ietf.org/html/rfc3986#appendix-B
 * // intentionally using regex and not <a/> href parsing trick because React Native and other
 * // environments where DOM might not be available
 * @returns parsed URL object
 */
export declare function parseUrl(url: string): PartialURL;
/**
 * Strip the query string and fragment off of a given URL or path (if present)
 *
 * @param urlPath Full URL or path, including possible query string and/or fragment
 * @returns URL or path without query string or fragment
 */
export declare function stripUrlQueryAndFragment(urlPath: string): string;
/**
 * Takes a URL object and returns a sanitized string which is safe to use as span name
 * see: https://develop.sentry.dev/sdk/data-handling/#structuring-data
 */
export declare function getSanitizedUrlString(url: PartialURL): string;
/**
 * Strips the content from a data URL, returning a placeholder with the MIME type.
 *
 * Data URLs can be very long (e.g. base64 encoded scripts for Web Workers),
 * with little valuable information, often leading to envelopes getting dropped due
 * to size limit violations. Therefore, we strip data URLs and replace them with a
 * placeholder.
 *
 * @param url - The URL to process
 * @param includeDataPrefix - If true, includes the first 10 characters of the data stream
 *                            for debugging (e.g., to identify magic bytes like WASM's AGFzbQ).
 *                            Defaults to true.
 * @returns For data URLs, returns a short format like `data:text/javascript;base64,SGVsbG8gV2... [truncated]`.
 *          For non-data URLs, returns the original URL unchanged.
 */
export declare function stripDataUrlContent(url: string, includeDataPrefix?: boolean): string;
export {};
//# sourceMappingURL=url.d.ts.map