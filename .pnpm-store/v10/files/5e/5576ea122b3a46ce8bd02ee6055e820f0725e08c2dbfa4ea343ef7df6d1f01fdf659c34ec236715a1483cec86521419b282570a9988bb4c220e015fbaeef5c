/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { Buffer } from 'node:buffer';
import type { URL } from 'node:url';
import type { IncomingMessageWithTimings, Timings } from '@szmarczak/http-timer';
import { RequestError } from './errors.js';
import type { ParseJsonFunction, ResponseType } from './options.js';
import type Request from './index.js';
export type PlainResponse = {
    /**
    The original request URL.
    */
    requestUrl: URL;
    /**
    The redirect URLs.
    */
    redirectUrls: URL[];
    /**
    - `options` - The Got options that were set on this request.

    __Note__: This is not a [http.ClientRequest](https://nodejs.org/api/http.html#http_class_http_clientrequest).
    */
    request: Request;
    /**
    The remote IP address.

    This is hopefully a temporary limitation, see [lukechilds/cacheable-request#86](https://github.com/lukechilds/cacheable-request/issues/86).

    __Note__: Not available when the response is cached.
    */
    ip?: string;
    /**
    Whether the response was retrieved from the cache.
    */
    isFromCache: boolean;
    /**
    The status code of the response.
    */
    statusCode: number;
    /**
    The request URL or the final URL after redirects.
    */
    url: string;
    /**
    The object contains the following properties:

    - `start` - Time when the request started.
    - `socket` - Time when a socket was assigned to the request.
    - `lookup` - Time when the DNS lookup finished.
    - `connect` - Time when the socket successfully connected.
    - `secureConnect` - Time when the socket securely connected.
    - `upload` - Time when the request finished uploading.
    - `response` - Time when the request fired `response` event.
    - `end` - Time when the response fired `end` event.
    - `error` - Time when the request fired `error` event.
    - `abort` - Time when the request fired `abort` event.
    - `phases`
        - `wait` - `timings.socket - timings.start`
        - `dns` - `timings.lookup - timings.socket`
        - `tcp` - `timings.connect - timings.lookup`
        - `tls` - `timings.secureConnect - timings.connect`
        - `request` - `timings.upload - (timings.secureConnect || timings.connect)`
        - `firstByte` - `timings.response - timings.upload`
        - `download` - `timings.end - timings.response`
        - `total` - `(timings.end || timings.error || timings.abort) - timings.start`

    If something has not been measured yet, it will be `undefined`.

    __Note__: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.
    */
    timings: Timings;
    /**
    The number of times the request was retried.
    */
    retryCount: number;
    /**
    The raw result of the request.
    */
    rawBody?: Buffer;
    /**
    The result of the request.
    */
    body?: unknown;
    /**
    Whether the response was successful.

    __Note__: Got throws automatically when `response.ok` is `false` and `throwHttpErrors` is `true`.
    */
    ok: boolean;
} & IncomingMessageWithTimings;
export type Response<T = unknown> = {
    /**
    The result of the request.
    */
    body: T;
    /**
    The raw result of the request.
    */
    rawBody: Buffer;
} & PlainResponse;
export declare const isResponseOk: (response: PlainResponse) => boolean;
/**
An error to be thrown when server response code is 2xx, and parsing body fails.
Includes a `response` property.
*/
export declare class ParseError extends RequestError {
    readonly response: Response;
    constructor(error: Error, response: Response);
}
export declare const parseBody: (response: Response, responseType: ResponseType, parseJson: ParseJsonFunction, encoding?: BufferEncoding) => unknown;
