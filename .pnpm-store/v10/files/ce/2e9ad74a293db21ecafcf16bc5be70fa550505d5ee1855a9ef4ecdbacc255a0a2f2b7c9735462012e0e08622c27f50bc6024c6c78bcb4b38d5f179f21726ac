/// <reference types="node" />
import { Duplex, Readable } from 'stream';
import { URL, URLSearchParams } from 'url';
import { Socket } from 'net';
import { SecureContextOptions, DetailedPeerCertificate } from 'tls';
import http = require('http');
import { ClientRequest, RequestOptions, ServerResponse, request as httpRequest } from 'http';
import https = require('https');
import { Timings, IncomingMessageWithTimings } from '@szmarczak/http-timer';
import CacheableLookup from 'cacheable-lookup';
import CacheableRequest = require('cacheable-request');
import ResponseLike = require('responselike');
import { Delays, TimeoutError as TimedOutTimeoutError } from './utils/timed-out';
import { URLOptions } from './utils/options-to-url';
import { DnsLookupIpVersion } from './utils/dns-ip-version';
import { PromiseOnly } from '../as-promise/types';
declare type HttpRequestFunction = typeof httpRequest;
declare type Error = NodeJS.ErrnoException;
declare const kRequest: unique symbol;
declare const kResponse: unique symbol;
declare const kResponseSize: unique symbol;
declare const kDownloadedSize: unique symbol;
declare const kBodySize: unique symbol;
declare const kUploadedSize: unique symbol;
declare const kServerResponsesPiped: unique symbol;
declare const kUnproxyEvents: unique symbol;
declare const kIsFromCache: unique symbol;
declare const kCancelTimeouts: unique symbol;
declare const kStartedReading: unique symbol;
declare const kStopReading: unique symbol;
declare const kTriggerRead: unique symbol;
declare const kBody: unique symbol;
declare const kJobs: unique symbol;
declare const kOriginalResponse: unique symbol;
declare const kRetryTimeout: unique symbol;
export declare const kIsNormalizedAlready: unique symbol;
export interface Agents {
    http?: http.Agent;
    https?: https.Agent;
    http2?: unknown;
}
export declare const withoutBody: ReadonlySet<string>;
export interface ToughCookieJar {
    getCookieString: ((currentUrl: string, options: Record<string, unknown>, cb: (err: Error | null, cookies: string) => void) => void) & ((url: string, callback: (error: Error | null, cookieHeader: string) => void) => void);
    setCookie: ((cookieOrString: unknown, currentUrl: string, options: Record<string, unknown>, cb: (err: Error | null, cookie: unknown) => void) => void) & ((rawCookie: string, url: string, callback: (error: Error | null, result: unknown) => void) => void);
}
export interface PromiseCookieJar {
    getCookieString: (url: string) => Promise<string>;
    setCookie: (rawCookie: string, url: string) => Promise<unknown>;
}
/**
All available HTTP request methods provided by Got.
*/
export declare type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE' | 'OPTIONS' | 'TRACE' | 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete' | 'options' | 'trace';
declare type Promisable<T> = T | Promise<T>;
export declare type InitHook = (options: Options) => void;
export declare type BeforeRequestHook = (options: NormalizedOptions) => Promisable<void | Response | ResponseLike>;
export declare type BeforeRedirectHook = (options: NormalizedOptions, response: Response) => Promisable<void>;
export declare type BeforeErrorHook = (error: RequestError) => Promisable<RequestError>;
export declare type BeforeRetryHook = (options: NormalizedOptions, error?: RequestError, retryCount?: number) => void | Promise<void>;
interface PlainHooks {
    /**
    Called with plain request options, right before their normalization.
    This is especially useful in conjunction with `got.extend()` when the input needs custom handling.

    __Note #1__: This hook must be synchronous!

    __Note #2__: Errors in this hook will be converted into an instances of `RequestError`.

    __Note #3__: The options object may not have a `url` property.
    To modify it, use a `beforeRequest` hook instead.

    @default []
    */
    init?: InitHook[];
    /**
    Called with normalized request options.
    Got will make no further changes to the request before it is sent.
    This is especially useful in conjunction with `got.extend()` when you want to create an API client that, for example, uses HMAC-signing.

    @default []
    */
    beforeRequest?: BeforeRequestHook[];
    /**
    Called with normalized request options and the redirect response.
    Got will make no further changes to the request.
    This is especially useful when you want to avoid dead sites.

    @default []

    @example
    ```
    const got = require('got');

    got('https://example.com', {
        hooks: {
            beforeRedirect: [
                (options, response) => {
                    if (options.hostname === 'deadSite') {
                        options.hostname = 'fallbackSite';
                    }
                }
            ]
        }
    });
    ```
    */
    beforeRedirect?: BeforeRedirectHook[];
    /**
    Called with an `Error` instance.
    The error is passed to the hook right before it's thrown.
    This is especially useful when you want to have more detailed errors.

    __Note__: Errors thrown while normalizing input options are thrown directly and not part of this hook.

    @default []

    @example
    ```
    const got = require('got');

    got('https://api.github.com/some-endpoint', {
        hooks: {
            beforeError: [
                error => {
                    const {response} = error;
                    if (response && response.body) {
                        error.name = 'GitHubError';
                        error.message = `${response.body.message} (${response.statusCode})`;
                    }

                    return error;
                }
            ]
        }
    });
    ```
    */
    beforeError?: BeforeErrorHook[];
    /**
    Called with normalized request options, the error and the retry count.
  Got will make no further changes to the request.
    This is especially useful when some extra work is required before the next try.

    __Note__: When using streams, this hook is ignored.
    __Note__: When retrying in a `afterResponse` hook, all remaining `beforeRetry` hooks will be called without the `error` and `retryCount` arguments.

    @default []

    @example
    ```
    const got = require('got');

    got.post('https://example.com', {
        hooks: {
            beforeRetry: [
                (options, error, retryCount) => {
                    if (error.response.statusCode === 413) { // Payload too large
                        options.body = getNewBody();
                    }
                }
            ]
        }
    });
    ```
    */
    beforeRetry?: BeforeRetryHook[];
}
/**
All available hook of Got.
*/
export interface Hooks extends PromiseOnly.Hooks, PlainHooks {
}
declare type PlainHookEvent = 'init' | 'beforeRequest' | 'beforeRedirect' | 'beforeError' | 'beforeRetry';
/**
All hook events acceptable by Got.
*/
export declare type HookEvent = PromiseOnly.HookEvent | PlainHookEvent;
export declare const knownHookEvents: HookEvent[];
declare type AcceptableResponse = IncomingMessageWithTimings | ResponseLike;
declare type AcceptableRequestResult = AcceptableResponse | ClientRequest | Promise<AcceptableResponse | ClientRequest> | undefined;
export declare type RequestFunction = (url: URL, options: RequestOptions, callback?: (response: AcceptableResponse) => void) => AcceptableRequestResult;
export declare type Headers = Record<string, string | string[] | undefined>;
declare type CheckServerIdentityFunction = (hostname: string, certificate: DetailedPeerCertificate) => Error | void;
export declare type ParseJsonFunction = (text: string) => unknown;
export declare type StringifyJsonFunction = (object: unknown) => string;
export interface RetryObject {
    attemptCount: number;
    retryOptions: RequiredRetryOptions;
    error: TimeoutError | RequestError;
    computedValue: number;
    retryAfter?: number;
}
export declare type RetryFunction = (retryObject: RetryObject) => number | Promise<number>;
/**
An object representing `limit`, `calculateDelay`, `methods`, `statusCodes`, `maxRetryAfter` and `errorCodes` fields for maximum retry count, retry handler, allowed methods, allowed status codes, maximum [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time and allowed error codes.

Delays between retries counts with function `1000 * Math.pow(2, retry) + Math.random() * 100`, where `retry` is attempt number (starts from 1).

The `calculateDelay` property is a `function` that receives an object with `attemptCount`, `retryOptions`, `error` and `computedValue` properties for current retry count, the retry options, error and default computed value.
The function must return a delay in milliseconds (or a Promise resolving with it) (`0` return value cancels retry).

By default, it retries *only* on the specified methods, status codes, and on these network errors:
- `ETIMEDOUT`: One of the [timeout](#timeout) limits were reached.
- `ECONNRESET`: Connection was forcibly closed by a peer.
- `EADDRINUSE`: Could not bind to any free port.
- `ECONNREFUSED`: Connection was refused by the server.
- `EPIPE`: The remote side of the stream being written has been closed.
- `ENOTFOUND`: Couldn't resolve the hostname to an IP address.
- `ENETUNREACH`: No internet connection.
- `EAI_AGAIN`: DNS lookup timed out.

__Note__: If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`.
__Note__: If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.
*/
export interface RequiredRetryOptions {
    limit: number;
    methods: Method[];
    statusCodes: number[];
    errorCodes: string[];
    calculateDelay: RetryFunction;
    maxRetryAfter?: number;
}
export interface CacheOptions {
    shared?: boolean;
    cacheHeuristic?: number;
    immutableMinTimeToLive?: number;
    ignoreCargoCult?: boolean;
}
interface PlainOptions extends URLOptions {
    /**
    Custom request function.
    The main purpose of this is to [support HTTP2 using a wrapper](https://github.com/szmarczak/http2-wrapper).

    @default http.request | https.request
    */
    request?: RequestFunction;
    /**
    An object representing `http`, `https` and `http2` keys for [`http.Agent`](https://nodejs.org/api/http.html#http_class_http_agent), [`https.Agent`](https://nodejs.org/api/https.html#https_class_https_agent) and [`http2wrapper.Agent`](https://github.com/szmarczak/http2-wrapper#new-http2agentoptions) instance.
    This is necessary because a request to one protocol might redirect to another.
    In such a scenario, Got will switch over to the right protocol agent for you.

    If a key is not present, it will default to a global agent.

    @example
    ```
    const got = require('got');
    const HttpAgent = require('agentkeepalive');
    const {HttpsAgent} = HttpAgent;

    got('https://sindresorhus.com', {
        agent: {
            http: new HttpAgent(),
            https: new HttpsAgent()
        }
    });
    ```
    */
    agent?: Agents | false;
    /**
    Decompress the response automatically.
    This will set the `accept-encoding` header to `gzip, deflate, br` on Node.js 11.7.0+ or `gzip, deflate` for older Node.js versions, unless you set it yourself.

    Brotli (`br`) support requires Node.js 11.7.0 or later.

    If this is disabled, a compressed response is returned as a `Buffer`.
    This may be useful if you want to handle decompression yourself or stream the raw compressed data.

    @default true
    */
    decompress?: boolean;
    /**
    Milliseconds to wait for the server to end the response before aborting the request with `got.TimeoutError` error (a.k.a. `request` property).
    By default, there's no timeout.

    This also accepts an `object` with the following fields to constrain the duration of each phase of the request lifecycle:

    - `lookup` starts when a socket is assigned and ends when the hostname has been resolved.
        Does not apply when using a Unix domain socket.
    - `connect` starts when `lookup` completes (or when the socket is assigned if lookup does not apply to the request) and ends when the socket is connected.
    - `secureConnect` starts when `connect` completes and ends when the handshaking process completes (HTTPS only).
    - `socket` starts when the socket is connected. See [request.setTimeout](https://nodejs.org/api/http.html#http_request_settimeout_timeout_callback).
    - `response` starts when the request has been written to the socket and ends when the response headers are received.
    - `send` starts when the socket is connected and ends with the request has been written to the socket.
    - `request` starts when the request is initiated and ends when the response's end event fires.
    */
    timeout?: Delays | number;
    /**
    When specified, `prefixUrl` will be prepended to `url`.
    The prefix can be any valid URL, either relative or absolute.
    A trailing slash `/` is optional - one will be added automatically.

    __Note__: `prefixUrl` will be ignored if the `url` argument is a URL instance.

    __Note__: Leading slashes in `input` are disallowed when using this option to enforce consistency and avoid confusion.
    For example, when the prefix URL is `https://example.com/foo` and the input is `/bar`, there's ambiguity whether the resulting URL would become `https://example.com/foo/bar` or `https://example.com/bar`.
    The latter is used by browsers.

    __Tip__: Useful when used with `got.extend()` to create niche-specific Got instances.

    __Tip__: You can change `prefixUrl` using hooks as long as the URL still includes the `prefixUrl`.
    If the URL doesn't include it anymore, it will throw.

    @example
    ```
    const got = require('got');

    (async () => {
        await got('unicorn', {prefixUrl: 'https://cats.com'});
        //=> 'https://cats.com/unicorn'

        const instance = got.extend({
            prefixUrl: 'https://google.com'
        });

        await instance('unicorn', {
            hooks: {
                beforeRequest: [
                    options => {
                        options.prefixUrl = 'https://cats.com';
                    }
                ]
            }
        });
        //=> 'https://cats.com/unicorn'
    })();
    ```
    */
    prefixUrl?: string | URL;
    /**
    __Note #1__: The `body` option cannot be used with the `json` or `form` option.

    __Note #2__: If you provide this option, `got.stream()` will be read-only.

    __Note #3__: If you provide a payload with the `GET` or `HEAD` method, it will throw a `TypeError` unless the method is `GET` and the `allowGetBody` option is set to `true`.

    __Note #4__: This option is not enumerable and will not be merged with the instance defaults.

    The `content-length` header will be automatically set if `body` is a `string` / `Buffer` / `fs.createReadStream` instance / [`form-data` instance](https://github.com/form-data/form-data), and `content-length` and `transfer-encoding` are not manually set in `options.headers`.
    */
    body?: string | Buffer | Readable;
    /**
    The form body is converted to a query string using [`(new URLSearchParams(object)).toString()`](https://nodejs.org/api/url.html#url_constructor_new_urlsearchparams_obj).

    If the `Content-Type` header is not present, it will be set to `application/x-www-form-urlencoded`.

    __Note #1__: If you provide this option, `got.stream()` will be read-only.

    __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
    */
    form?: Record<string, any>;
    /**
    JSON body. If the `Content-Type` header is not set, it will be set to `application/json`.

    __Note #1__: If you provide this option, `got.stream()` will be read-only.

    __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
    */
    json?: Record<string, any>;
    /**
    The URL to request, as a string, a [`https.request` options object](https://nodejs.org/api/https.html#https_https_request_options_callback), or a [WHATWG `URL`](https://nodejs.org/api/url.html#url_class_url).

    Properties from `options` will override properties in the parsed `url`.

    If no protocol is specified, it will throw a `TypeError`.

    __Note__: The query string is **not** parsed as search params.

    @example
    ```
    got('https://example.com/?query=a b'); //=> https://example.com/?query=a%20b
    got('https://example.com/', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b

    // The query string is overridden by `searchParams`
    got('https://example.com/?query=a b', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b
    ```
    */
    url?: string | URL;
    /**
    Cookie support. You don't have to care about parsing or how to store them.

    __Note__: If you provide this option, `options.headers.cookie` will be overridden.
    */
    cookieJar?: PromiseCookieJar | ToughCookieJar;
    /**
    Ignore invalid cookies instead of throwing an error.
    Only useful when the `cookieJar` option has been set. Not recommended.

    @default false
    */
    ignoreInvalidCookies?: boolean;
    /**
    Query string that will be added to the request URL.
    This will override the query string in `url`.

    If you need to pass in an array, you can do it using a `URLSearchParams` instance.

    @example
    ```
    const got = require('got');

    const searchParams = new URLSearchParams([['key', 'a'], ['key', 'b']]);

    got('https://example.com', {searchParams});

    console.log(searchParams.toString());
    //=> 'key=a&key=b'
    ```
    */
    searchParams?: string | Record<string, string | number | boolean | null | undefined> | URLSearchParams;
    /**
    An instance of [`CacheableLookup`](https://github.com/szmarczak/cacheable-lookup) used for making DNS lookups.
    Useful when making lots of requests to different *public* hostnames.

    `CacheableLookup` uses `dns.resolver4(..)` and `dns.resolver6(...)` under the hood and fall backs to `dns.lookup(...)` when the first two fail, which may lead to additional delay.

    __Note__: This should stay disabled when making requests to internal hostnames such as `localhost`, `database.local` etc.

    @default false
    */
    dnsCache?: CacheableLookup | boolean;
    /**
    User data. In contrast to other options, `context` is not enumerable.

    __Note__: The object is never merged, it's just passed through.
    Got will not modify the object in any way.

    @example
    ```
    const got = require('got');

    const instance = got.extend({
        hooks: {
            beforeRequest: [
                options => {
                    if (!options.context || !options.context.token) {
                        throw new Error('Token required');
                    }

                    options.headers.token = options.context.token;
                }
            ]
        }
    });

    (async () => {
        const context = {
            token: 'secret'
        };

        const response = await instance('https://httpbin.org/headers', {context});

        // Let's see the headers
        console.log(response.body);
    })();
    ```
    */
    context?: Record<string, unknown>;
    /**
    Hooks allow modifications during the request lifecycle.
    Hook functions may be async and are run serially.
    */
    hooks?: Hooks;
    /**
    Defines if redirect responses should be followed automatically.

    Note that if a `303` is sent by the server in response to any request type (`POST`, `DELETE`, etc.), Got will automatically request the resource pointed to in the location header via `GET`.
    This is in accordance with [the spec](https://tools.ietf.org/html/rfc7231#section-6.4.4).

    @default true
    */
    followRedirect?: boolean;
    /**
    If exceeded, the request will be aborted and a `MaxRedirectsError` will be thrown.

    @default 10
    */
    maxRedirects?: number;
    /**
    A cache adapter instance for storing cached response data.

    @default false
    */
    cache?: string | CacheableRequest.StorageAdapter | false;
    /**
    Determines if a `got.HTTPError` is thrown for unsuccessful responses.

    If this is disabled, requests that encounter an error status code will be resolved with the `response` instead of throwing.
    This may be useful if you are checking for resource availability and are expecting error responses.

    @default true
    */
    throwHttpErrors?: boolean;
    username?: string;
    password?: string;
    /**
    If set to `true`, Got will additionally accept HTTP2 requests.

    It will choose either HTTP/1.1 or HTTP/2 depending on the ALPN protocol.

    __Note__: Overriding `options.request` will disable HTTP2 support.

    __Note__: This option will default to `true` in the next upcoming major release.

    @default false

    @example
    ```
    const got = require('got');

    (async () => {
        const {headers} = await got('https://nghttp2.org/httpbin/anything', {http2: true});
        console.log(headers.via);
        //=> '2 nghttpx'
    })();
    ```
    */
    http2?: boolean;
    /**
    Set this to `true` to allow sending body for the `GET` method.
    However, the [HTTP/2 specification](https://tools.ietf.org/html/rfc7540#section-8.1.3) says that `An HTTP GET request includes request header fields and no payload body`, therefore when using the HTTP/2 protocol this option will have no effect.
    This option is only meant to interact with non-compliant servers when you have no other choice.

    __Note__: The [RFC 7321](https://tools.ietf.org/html/rfc7231#section-4.3.1) doesn't specify any particular behavior for the GET method having a payload, therefore __it's considered an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern)__.

    @default false
    */
    allowGetBody?: boolean;
    lookup?: CacheableLookup['lookup'];
    /**
    Request headers.

    Existing headers will be overwritten. Headers set to `undefined` will be omitted.

    @default {}
    */
    headers?: Headers;
    /**
    By default, redirects will use [method rewriting](https://tools.ietf.org/html/rfc7231#section-6.4).
    For example, when sending a POST request and receiving a `302`, it will resend the body to the new location using the same HTTP method (`POST` in this case).

    @default true
    */
    methodRewriting?: boolean;
    /**
    Indicates which DNS record family to use.

    Values:
    - `auto`: IPv4 (if present) or IPv6
    - `ipv4`: Only IPv4
    - `ipv6`: Only IPv6

    __Note__: If you are using the undocumented option `family`, `dnsLookupIpVersion` will override it.

    @default 'auto'
    */
    dnsLookupIpVersion?: DnsLookupIpVersion;
    /**
    A function used to parse JSON responses.

    @example
    ```
    const got = require('got');
    const Bourne = require('@hapi/bourne');

    (async () => {
        const parsed = await got('https://example.com', {
            parseJson: text => Bourne.parse(text)
        }).json();

        console.log(parsed);
    })();
    ```
    */
    parseJson?: ParseJsonFunction;
    /**
    A function used to stringify the body of JSON requests.

    @example
    ```
    const got = require('got');

    (async () => {
        await got.post('https://example.com', {
            stringifyJson: object => JSON.stringify(object, (key, value) => {
                if (key.startsWith('_')) {
                    return;
                }

                return value;
            }),
            json: {
                some: 'payload',
                _ignoreMe: 1234
            }
        });
    })();
    ```

    @example
    ```
    const got = require('got');

    (async () => {
        await got.post('https://example.com', {
            stringifyJson: object => JSON.stringify(object, (key, value) => {
                if (typeof value === 'number') {
                    return value.toString();
                }

                return value;
            }),
            json: {
                some: 'payload',
                number: 1
            }
        });
    })();
    ```
    */
    stringifyJson?: StringifyJsonFunction;
    /**
    An object representing `limit`, `calculateDelay`, `methods`, `statusCodes`, `maxRetryAfter` and `errorCodes` fields for maximum retry count, retry handler, allowed methods, allowed status codes, maximum [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) time and allowed error codes.

    Delays between retries counts with function `1000 * Math.pow(2, retry) + Math.random() * 100`, where `retry` is attempt number (starts from 1).

    The `calculateDelay` property is a `function` that receives an object with `attemptCount`, `retryOptions`, `error` and `computedValue` properties for current retry count, the retry options, error and default computed value.
    The function must return a delay in milliseconds (or a Promise resolving with it) (`0` return value cancels retry).

    By default, it retries *only* on the specified methods, status codes, and on these network errors:

    - `ETIMEDOUT`: One of the [timeout](#timeout) limits were reached.
    - `ECONNRESET`: Connection was forcibly closed by a peer.
    - `EADDRINUSE`: Could not bind to any free port.
    - `ECONNREFUSED`: Connection was refused by the server.
    - `EPIPE`: The remote side of the stream being written has been closed.
    - `ENOTFOUND`: Couldn't resolve the hostname to an IP address.
    - `ENETUNREACH`: No internet connection.
    - `EAI_AGAIN`: DNS lookup timed out.

    __Note__: If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`.
    __Note__: If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.
    */
    retry?: Partial<RequiredRetryOptions> | number;
    /**
    The IP address used to send the request from.
    */
    localAddress?: string;
    socketPath?: string;
    /**
    The HTTP method used to make the request.

    @default 'GET'
    */
    method?: Method;
    createConnection?: (options: http.RequestOptions, oncreate: (error: Error, socket: Socket) => void) => Socket;
    cacheOptions?: CacheOptions;
    /**
    If set to `false`, all invalid SSL certificates will be ignored and no error will be thrown.

    If set to `true`, it will throw an error whenever an invalid SSL certificate is detected.

    We strongly recommend to have this set to `true` for security reasons.

    @default true

    @example
    ```
    const got = require('got');

    (async () => {
        // Correct:
        await got('https://example.com', {rejectUnauthorized: true});

        // You can disable it when developing an HTTPS app:
        await got('https://localhost', {rejectUnauthorized: false});

        // Never do this:
        await got('https://example.com', {rejectUnauthorized: false});
    })();
    ```
    */
    rejectUnauthorized?: boolean;
    /**
    Options for the advanced HTTPS API.
    */
    https?: HTTPSOptions;
}
export interface Options extends PromiseOnly.Options, PlainOptions {
}
export interface HTTPSOptions {
    rejectUnauthorized?: https.RequestOptions['rejectUnauthorized'];
    checkServerIdentity?: CheckServerIdentityFunction;
    /**
    Override the default Certificate Authorities ([from Mozilla](https://ccadb-public.secure.force.com/mozilla/IncludedCACertificateReport)).

    @example
    ```
    // Single Certificate Authority
    got('https://example.com', {
        https: {
            certificateAuthority: fs.readFileSync('./my_ca.pem')
        }
    });
    ```
    */
    certificateAuthority?: SecureContextOptions['ca'];
    /**
    Private keys in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format.

    [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) allows the option of private keys being encrypted.
    Encrypted keys will be decrypted with `options.https.passphrase`.

    Multiple keys with different passphrases can be provided as an array of `{pem: <string | Buffer>, passphrase: <string>}`
    */
    key?: SecureContextOptions['key'];
    /**
    [Certificate chains](https://en.wikipedia.org/wiki/X.509#Certificate_chains_and_cross-certification) in [PEM](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail) format.

    One cert chain should be provided per private key (`options.https.key`).

    When providing multiple cert chains, they do not have to be in the same order as their private keys in `options.https.key`.

    If the intermediate certificates are not provided, the peer will not be able to validate the certificate, and the handshake will fail.
    */
    certificate?: SecureContextOptions['cert'];
    /**
    The passphrase to decrypt the `options.https.key` (if different keys have different passphrases refer to `options.https.key` documentation).
    */
    passphrase?: SecureContextOptions['passphrase'];
    pfx?: SecureContextOptions['pfx'];
}
interface NormalizedPlainOptions extends PlainOptions {
    method: Method;
    url: URL;
    timeout: Delays;
    prefixUrl: string;
    ignoreInvalidCookies: boolean;
    decompress: boolean;
    searchParams?: URLSearchParams;
    cookieJar?: PromiseCookieJar;
    headers: Headers;
    context: Record<string, unknown>;
    hooks: Required<Hooks>;
    followRedirect: boolean;
    maxRedirects: number;
    cache?: string | CacheableRequest.StorageAdapter;
    throwHttpErrors: boolean;
    dnsCache?: CacheableLookup;
    http2: boolean;
    allowGetBody: boolean;
    rejectUnauthorized: boolean;
    lookup?: CacheableLookup['lookup'];
    methodRewriting: boolean;
    username: string;
    password: string;
    parseJson: ParseJsonFunction;
    stringifyJson: StringifyJsonFunction;
    retry: RequiredRetryOptions;
    cacheOptions: CacheOptions;
    [kRequest]: HttpRequestFunction;
    [kIsNormalizedAlready]?: boolean;
}
export interface NormalizedOptions extends PromiseOnly.NormalizedOptions, NormalizedPlainOptions {
}
interface PlainDefaults {
    timeout: Delays;
    prefixUrl: string;
    method: Method;
    ignoreInvalidCookies: boolean;
    decompress: boolean;
    context: Record<string, unknown>;
    cookieJar?: PromiseCookieJar | ToughCookieJar;
    dnsCache?: CacheableLookup;
    headers: Headers;
    hooks: Required<Hooks>;
    followRedirect: boolean;
    maxRedirects: number;
    cache?: string | CacheableRequest.StorageAdapter;
    throwHttpErrors: boolean;
    http2: boolean;
    allowGetBody: boolean;
    https?: HTTPSOptions;
    methodRewriting: boolean;
    parseJson: ParseJsonFunction;
    stringifyJson: StringifyJsonFunction;
    retry: RequiredRetryOptions;
    agent?: Agents | false;
    request?: RequestFunction;
    searchParams?: URLSearchParams;
    lookup?: CacheableLookup['lookup'];
    localAddress?: string;
    createConnection?: Options['createConnection'];
    cacheOptions: CacheOptions;
}
export interface Defaults extends PromiseOnly.Defaults, PlainDefaults {
}
export interface Progress {
    percent: number;
    transferred: number;
    total?: number;
}
export interface PlainResponse extends IncomingMessageWithTimings {
    /**
    The original request URL.
    */
    requestUrl: string;
    /**
    The redirect URLs.
    */
    redirectUrls: string[];
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
}
export interface Response<T = unknown> extends PlainResponse {
    /**
    The result of the request.
    */
    body: T;
    /**
    The raw result of the request.
    */
    rawBody: Buffer;
}
export interface RequestEvents<T> {
    /**
    `request` event to get the request object of the request.

     __Tip__: You can use `request` event to abort requests.

    @example
    ```
    got.stream('https://github.com')
        .on('request', request => setTimeout(() => request.destroy(), 50));
    ```
    */
    on: ((name: 'request', listener: (request: http.ClientRequest) => void) => T)
    /**
    The `response` event to get the response object of the final request.
    */
     & (<R extends Response>(name: 'response', listener: (response: R) => void) => T)
    /**
    The `redirect` event to get the response object of a redirect. The second argument is options for the next request to the redirect location.
    */
     & (<R extends Response, N extends NormalizedOptions>(name: 'redirect', listener: (response: R, nextOptions: N) => void) => T)
    /**
    Progress events for uploading (sending a request) and downloading (receiving a response).
    The `progress` argument is an object like:

    ```js
    {
        percent: 0.1,
        transferred: 1024,
        total: 10240
    }
    ```

    If the `content-length` header is missing, `total` will be `undefined`.

    @example
    ```js
    (async () => {
        const response = await got('https://sindresorhus.com')
            .on('downloadProgress', progress => {
                // Report download progress
            })
            .on('uploadProgress', progress => {
                // Report upload progress
            });

        console.log(response);
    })();
    ```
    */
     & ((name: 'uploadProgress' | 'downloadProgress', listener: (progress: Progress) => void) => T)
    /**
    To enable retrying on a Got stream, it is required to have a `retry` handler attached.

    When this event is emitted, you should reset the stream you were writing to and prepare the body again.

    See `got.options.retry` for more information.
    */
     & ((name: 'retry', listener: (retryCount: number, error: RequestError) => void) => T);
}
export declare const setNonEnumerableProperties: (sources: Array<Options | Defaults | undefined>, to: Options) => void;
/**
An error to be thrown when a request fails.
Contains a `code` property with error class code, like `ECONNREFUSED`.
*/
export declare class RequestError extends Error {
    code: string;
    stack: string;
    readonly options: NormalizedOptions;
    readonly response?: Response;
    readonly request?: Request;
    readonly timings?: Timings;
    constructor(message: string, error: Partial<Error & {
        code?: string;
    }>, self: Request | NormalizedOptions);
}
/**
An error to be thrown when the server redirects you more than ten times.
Includes a `response` property.
*/
export declare class MaxRedirectsError extends RequestError {
    readonly response: Response;
    readonly request: Request;
    readonly timings: Timings;
    constructor(request: Request);
}
/**
An error to be thrown when the server response code is not 2xx nor 3xx if `options.followRedirect` is `true`, but always except for 304.
Includes a `response` property.
*/
export declare class HTTPError extends RequestError {
    readonly response: Response;
    readonly request: Request;
    readonly timings: Timings;
    constructor(response: Response);
}
/**
An error to be thrown when a cache method fails.
For example, if the database goes down or there's a filesystem error.
*/
export declare class CacheError extends RequestError {
    readonly request: Request;
    constructor(error: Error, request: Request);
}
/**
An error to be thrown when the request body is a stream and an error occurs while reading from that stream.
*/
export declare class UploadError extends RequestError {
    readonly request: Request;
    constructor(error: Error, request: Request);
}
/**
An error to be thrown when the request is aborted due to a timeout.
Includes an `event` and `timings` property.
*/
export declare class TimeoutError extends RequestError {
    readonly request: Request;
    readonly timings: Timings;
    readonly event: string;
    constructor(error: TimedOutTimeoutError, timings: Timings, request: Request);
}
/**
An error to be thrown when reading from response stream fails.
*/
export declare class ReadError extends RequestError {
    readonly request: Request;
    readonly response: Response;
    readonly timings: Timings;
    constructor(error: Error, request: Request);
}
/**
An error to be thrown when given an unsupported protocol.
*/
export declare class UnsupportedProtocolError extends RequestError {
    constructor(options: NormalizedOptions);
}
export default class Request extends Duplex implements RequestEvents<Request> {
    ['constructor']: typeof Request;
    [kUnproxyEvents]: () => void;
    _cannotHaveBody: boolean;
    [kDownloadedSize]: number;
    [kUploadedSize]: number;
    [kStopReading]: boolean;
    [kTriggerRead]: boolean;
    [kBody]: Options['body'];
    [kJobs]: Array<() => void>;
    [kRetryTimeout]?: NodeJS.Timeout;
    [kBodySize]?: number;
    [kServerResponsesPiped]: Set<ServerResponse>;
    [kIsFromCache]?: boolean;
    [kStartedReading]?: boolean;
    [kCancelTimeouts]?: () => void;
    [kResponseSize]?: number;
    [kResponse]?: IncomingMessageWithTimings;
    [kOriginalResponse]?: IncomingMessageWithTimings;
    [kRequest]?: ClientRequest;
    _noPipe?: boolean;
    _progressCallbacks: Array<() => void>;
    options: NormalizedOptions;
    requestUrl: string;
    requestInitialized: boolean;
    redirects: string[];
    retryCount: number;
    constructor(url: string | URL | undefined, options?: Options, defaults?: Defaults);
    static normalizeArguments(url?: string | URL, options?: Options, defaults?: Defaults): NormalizedOptions;
    _lockWrite(): void;
    _unlockWrite(): void;
    _finalizeBody(): Promise<void>;
    _onResponseBase(response: IncomingMessageWithTimings): Promise<void>;
    _onResponse(response: IncomingMessageWithTimings): Promise<void>;
    _onRequest(request: ClientRequest): void;
    _createCacheableRequest(url: URL, options: RequestOptions): Promise<ClientRequest | ResponseLike>;
    _makeRequest(): Promise<void>;
    _error(error: RequestError): Promise<void>;
    _beforeError(error: Error): void;
    _read(): void;
    _write(chunk: any, encoding: string | undefined, callback: (error?: Error | null) => void): void;
    _writeRequest(chunk: any, encoding: BufferEncoding | undefined, callback: (error?: Error | null) => void): void;
    _final(callback: (error?: Error | null) => void): void;
    _destroy(error: Error | null, callback: (error: Error | null) => void): void;
    get _isAboutToError(): boolean;
    /**
    The remote IP address.
    */
    get ip(): string | undefined;
    /**
    Indicates whether the request has been aborted or not.
    */
    get aborted(): boolean;
    get socket(): Socket | undefined;
    /**
    Progress event for downloading (receiving a response).
    */
    get downloadProgress(): Progress;
    /**
    Progress event for uploading (sending a request).
    */
    get uploadProgress(): Progress;
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
    get timings(): Timings | undefined;
    /**
    Whether the response was retrieved from the cache.
    */
    get isFromCache(): boolean | undefined;
    pipe<T extends NodeJS.WritableStream>(destination: T, options?: {
        end?: boolean;
    }): T;
    unpipe<T extends NodeJS.WritableStream>(destination: T): this;
}
export {};
