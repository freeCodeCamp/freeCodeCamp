import { HttpResponse } from "@smithy/types";
export { Endpoint, HeaderBag, HttpHandlerOptions, HttpMessage, HttpRequest, HttpResponse, QueryParameterBag, } from "@smithy/types";
/**
 * @public
 *
 * A collection of key/value pairs with case-insensitive keys.
 */
export interface Headers extends Map<string, string> {
    /**
     * Returns a new instance of Headers with the specified header set to the
     * provided value. Does not modify the original Headers instance.
     *
     * @param headerName - The name of the header to add or overwrite
     * @param headerValue - The value to which the header should be set
     */
    withHeader(headerName: string, headerValue: string): Headers;
    /**
     * Returns a new instance of Headers without the specified header. Does not
     * modify the original Headers instance.
     *
     * @param headerName - The name of the header to remove
     */
    withoutHeader(headerName: string): Headers;
}
/**
 * @public
 *
 * Represents HTTP message whose body has been resolved to a string. This is
 * used in parsing http message.
 */
export interface ResolvedHttpResponse extends HttpResponse {
    body: string;
}
