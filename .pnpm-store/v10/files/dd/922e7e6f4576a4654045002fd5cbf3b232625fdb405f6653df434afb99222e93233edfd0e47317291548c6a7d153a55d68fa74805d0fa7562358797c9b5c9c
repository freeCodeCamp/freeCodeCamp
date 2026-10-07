/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { Buffer } from 'node:buffer';
import { URL, URLSearchParams } from 'node:url';
import { checkServerIdentity } from 'node:tls';
import http from 'node:http';
import https from 'node:https';
import type { Readable } from 'node:stream';
import type { Socket } from 'node:net';
import type { SecureContextOptions, DetailedPeerCertificate } from 'node:tls';
import type { Agent as HttpAgent, ClientRequest } from 'node:http';
import type { RequestOptions as HttpsRequestOptions, Agent as HttpsAgent } from 'node:https';
import CacheableLookup from 'cacheable-lookup';
import http2wrapper, { type ClientHttp2Session } from 'http2-wrapper';
import type { FormDataLike } from 'form-data-encoder';
import type { StorageAdapter } from 'cacheable-request';
import type ResponseLike from 'responselike';
import type { IncomingMessageWithTimings } from '@szmarczak/http-timer';
import type { CancelableRequest } from '../as-promise/types.js';
import type { PlainResponse, Response } from './response.js';
import type { RequestError } from './errors.js';
import type { Delays } from './timed-out.js';
type Promisable<T> = T | Promise<T>;
export type DnsLookupIpVersion = undefined | 4 | 6;
type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeysType>>;
export type NativeRequestOptions = HttpsRequestOptions & CacheOptions & {
    checkServerIdentity?: CheckServerIdentityFunction;
};
type AcceptableResponse = IncomingMessageWithTimings | ResponseLike;
type AcceptableRequestResult = Promisable<AcceptableResponse | ClientRequest> | undefined;
export type RequestFunction = (url: URL, options: NativeRequestOptions, callback?: (response: AcceptableResponse) => void) => AcceptableRequestResult;
export type Agents = {
    http?: HttpAgent | false;
    https?: HttpsAgent | false;
    http2?: unknown | false;
};
export type Headers = Record<string, string | string[] | undefined>;
export type ToughCookieJar = {
    getCookieString: ((currentUrl: string, options: Record<string, unknown>, cb: (error: Error | null, cookies: string) => void) => void) & ((url: string, callback: (error: Error | null, cookieHeader: string) => void) => void);
    setCookie: ((cookieOrString: unknown, currentUrl: string, options: Record<string, unknown>, cb: (error: Error | null, cookie: unknown) => void) => void) & ((rawCookie: string, url: string, callback: (error: Error | null, result: unknown) => void) => void);
};
export type PromiseCookieJar = {
    getCookieString: (url: string) => Promise<string>;
    setCookie: (rawCookie: string, url: string) => Promise<unknown>;
};
export type InitHook = (init: OptionsInit, self: Options) => void;
export type BeforeRequestHook = (options: Options) => Promisable<void | Response | ResponseLike>;
export type BeforeRedirectHook = (updatedOptions: Options, plainResponse: PlainResponse) => Promisable<void>;
export type BeforeErrorHook = (error: RequestError) => Promisable<RequestError>;
export type BeforeRetryHook = (error: RequestError, retryCount: number) => Promisable<void>;
export type AfterResponseHook<ResponseType = unknown> = (response: Response<ResponseType>, retryWithMergedOptions: (options: OptionsInit) => never) => Promisable<Response | CancelableRequest<Response>>;
/**
All available hooks of Got.
*/
export type Hooks = {
    /**
    Called with the plain request options, right before their normalization.

    The second argument represents the current `Options` instance.

    @default []

    **Note:**
    > - This hook must be synchronous.

    **Note:**
    > - This is called every time options are merged.

    **Note:**
    > - The `options` object may not have the `url` property. To modify it, use a `beforeRequest` hook instead.

    **Note:**
    > - This hook is called when a new instance of `Options` is created.
    > - Do not confuse this with the creation of `Request` or `got(…)`.

    **Note:**
    > - When using `got(url)` or `got(url, undefined, defaults)` this hook will **not** be called.

    This is especially useful in conjunction with `got.extend()` when the input needs custom handling.

    For example, this can be used to fix typos to migrate from older versions faster.

    @example
    ```
    import got from 'got';

    const instance = got.extend({
        hooks: {
            init: [
                plain => {
                    if ('followRedirects' in plain) {
                        plain.followRedirect = plain.followRedirects;
                        delete plain.followRedirects;
                    }
                }
            ]
        }
    });

    // Normally, the following would throw:
    const response = await instance(
        'https://example.com',
        {
            followRedirects: true
        }
    );

    // There is no option named `followRedirects`, but we correct it in an `init` hook.
    ```

    Or you can create your own option and store it in a context:

    ```
    import got from 'got';

    const instance = got.extend({
        hooks: {
            init: [
                (plain, options) => {
                    if ('secret' in plain) {
                        options.context.secret = plain.secret;
                        delete plain.secret;
                    }
                }
            ],
            beforeRequest: [
                options => {
                    options.headers.secret = options.context.secret;
                }
            ]
        }
    });

    const {headers} = await instance(
        'https://httpbin.org/anything',
        {
            secret: 'passphrase'
        }
    ).json();

    console.log(headers.Secret);
    //=> 'passphrase'
    ```
    */
    init: InitHook[];
    /**
    Called right before making the request with `options.createNativeRequestOptions()`.

    This hook is especially useful in conjunction with `got.extend()` when you want to sign your request.

    @default []

    **Note:**
    > - Got will make no further changes to the request before it is sent.

    **Note:**
    > - Changing `options.json` or `options.form` has no effect on the request. You should change `options.body` instead. If needed, update the `options.headers` accordingly.

    @example
    ```
    import got from 'got';

    const response = await got.post(
        'https://httpbin.org/anything',
        {
            json: {payload: 'old'},
            hooks: {
                beforeRequest: [
                    options => {
                        options.body = JSON.stringify({payload: 'new'});
                        options.headers['content-length'] = options.body.length.toString();
                    }
                ]
            }
        }
    );
    ```

    **Tip:**
    > - You can indirectly override the `request` function by early returning a [`ClientRequest`-like](https://nodejs.org/api/http.html#http_class_http_clientrequest) instance or a [`IncomingMessage`-like](https://nodejs.org/api/http.html#http_class_http_incomingmessage) instance. This is very useful when creating a custom cache mechanism.
    > - [Read more about this tip](https://github.com/sindresorhus/got/blob/main/documentation/cache.md#advanced-caching-mechanisms).
    */
    beforeRequest: BeforeRequestHook[];
    /**
    The equivalent of `beforeRequest` but when redirecting.

    @default []

    **Tip:**
    > - This is especially useful when you want to avoid dead sites.

    @example
    ```
    import got from 'got';

    const response = await got('https://example.com', {
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
    beforeRedirect: BeforeRedirectHook[];
    /**
    Called with a `RequestError` instance. The error is passed to the hook right before it's thrown.

    This is especially useful when you want to have more detailed errors.

    @default []

    ```
    import got from 'got';

    await got('https://api.github.com/repos/sindresorhus/got/commits', {
        responseType: 'json',
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
    beforeError: BeforeErrorHook[];
    /**
    The equivalent of `beforeError` but when retrying. Additionally, there is a second argument `retryCount`, the current retry number.

    @default []

    **Note:**
    > - When using the Stream API, this hook is ignored.

    **Note:**
    > - When retrying, the `beforeRequest` hook is called afterwards.

    **Note:**
    > - If no retry occurs, the `beforeError` hook is called instead.

    This hook is especially useful when you want to retrieve the cause of a retry.

    @example
    ```
    import got from 'got';

    await got('https://httpbin.org/status/500', {
        hooks: {
            beforeRetry: [
                (error, retryCount) => {
                    console.log(`Retrying [${retryCount}]: ${error.code}`);
                    // Retrying [1]: ERR_NON_2XX_3XX_RESPONSE
                }
            ]
        }
    });
    ```
    */
    beforeRetry: BeforeRetryHook[];
    /**
    Each function should return the response. This is especially useful when you want to refresh an access token.

    @default []

    **Note:**
    > - When using the Stream API, this hook is ignored.

    **Note:**
    > - Calling the `retryWithMergedOptions` function will trigger `beforeRetry` hooks. If the retry is successful, all remaining `afterResponse` hooks will be called. In case of an error, `beforeRetry` hooks will be called instead.
    Meanwhile the `init`, `beforeRequest` , `beforeRedirect` as well as already executed `afterResponse` hooks will be skipped.

    @example
    ```
    import got from 'got';

    const instance = got.extend({
        hooks: {
            afterResponse: [
                (response, retryWithMergedOptions) => {
                    // Unauthorized
                    if (response.statusCode === 401) {
                        // Refresh the access token
                        const updatedOptions = {
                            headers: {
                                token: getNewToken()
                            }
                        };

                        // Update the defaults
                        instance.defaults.options.merge(updatedOptions);

                        // Make a new retry
                        return retryWithMergedOptions(updatedOptions);
                    }

                    // No changes otherwise
                    return response;
                }
            ],
            beforeRetry: [
                error => {
                    // This will be called on `retryWithMergedOptions(...)`
                }
            ]
        },
        mutableDefaults: true
    });
    ```
    */
    afterResponse: AfterResponseHook[];
};
export type ParseJsonFunction = (text: string) => unknown;
export type StringifyJsonFunction = (object: unknown) => string;
/**
All available HTTP request methods provided by Got.
*/
export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'HEAD' | 'DELETE' | 'OPTIONS' | 'TRACE' | 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete' | 'options' | 'trace';
export type RetryObject = {
    attemptCount: number;
    retryOptions: RetryOptions;
    error: RequestError;
    computedValue: number;
    retryAfter?: number;
};
export type RetryFunction = (retryObject: RetryObject) => Promisable<number>;
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

__Note:__ Got does not retry on `POST` by default.
__Note:__ If `maxRetryAfter` is set to `undefined`, it will use `options.timeout`.
__Note:__ If [`Retry-After`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header is greater than `maxRetryAfter`, it will cancel the request.
*/
export type RetryOptions = {
    limit: number;
    methods: Method[];
    statusCodes: number[];
    errorCodes: string[];
    calculateDelay: RetryFunction;
    backoffLimit: number;
    noise: number;
    maxRetryAfter?: number;
};
export type CreateConnectionFunction = (options: NativeRequestOptions, oncreate: (error: NodeJS.ErrnoException, socket: Socket) => void) => Socket;
export type CheckServerIdentityFunction = (hostname: string, certificate: DetailedPeerCertificate) => NodeJS.ErrnoException | void;
export type CacheOptions = {
    shared?: boolean;
    cacheHeuristic?: number;
    immutableMinTimeToLive?: number;
    ignoreCargoCult?: boolean;
};
type PfxObject = {
    buffer: string | Buffer;
    passphrase?: string | undefined;
};
type PfxType = string | Buffer | Array<string | Buffer | PfxObject> | undefined;
export type HttpsOptions = {
    alpnProtocols?: string[];
    rejectUnauthorized?: NativeRequestOptions['rejectUnauthorized'];
    checkServerIdentity?: CheckServerIdentityFunction;
    /**
    Override the default Certificate Authorities ([from Mozilla](https://ccadb-public.secure.force.com/mozilla/IncludedCACertificateReport)).

    @example
    ```
    // Single Certificate Authority
    await got('https://example.com', {
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
    pfx?: PfxType;
    ciphers?: SecureContextOptions['ciphers'];
    honorCipherOrder?: SecureContextOptions['honorCipherOrder'];
    minVersion?: SecureContextOptions['minVersion'];
    maxVersion?: SecureContextOptions['maxVersion'];
    signatureAlgorithms?: SecureContextOptions['sigalgs'];
    tlsSessionLifetime?: SecureContextOptions['sessionTimeout'];
    dhparam?: SecureContextOptions['dhparam'];
    ecdhCurve?: SecureContextOptions['ecdhCurve'];
    certificateRevocationLists?: SecureContextOptions['crl'];
};
export type PaginateData<BodyType, ElementType> = {
    response: Response<BodyType>;
    currentItems: ElementType[];
    allItems: ElementType[];
};
export type FilterData<ElementType> = {
    item: ElementType;
    currentItems: ElementType[];
    allItems: ElementType[];
};
/**
All options accepted by `got.paginate()`.
*/
export type PaginationOptions<ElementType, BodyType> = {
    /**
    A function that transform [`Response`](#response) into an array of items.
    This is where you should do the parsing.

    @default response => JSON.parse(response.body)
    */
    transform?: (response: Response<BodyType>) => Promise<ElementType[]> | ElementType[];
    /**
    Checks whether the item should be emitted or not.

    @default ({item, currentItems, allItems}) => true
    */
    filter?: (data: FilterData<ElementType>) => boolean;
    /**
    The function takes an object with the following properties:
    - `response` - The current response object.
    - `currentItems` - Items from the current response.
    - `allItems` - An empty array, unless `pagination.stackAllItems` is set to `true`, in which case, it's an array of the emitted items.

    It should return an object representing Got options pointing to the next page. The options are merged automatically with the previous request, therefore the options returned `pagination.paginate(...)` must reflect changes only. If there are no more pages, `false` should be returned.

    @example
    ```
    import got from 'got';

    const limit = 10;

    const items = got.paginate('https://example.com/items', {
        searchParams: {
            limit,
            offset: 0
        },
        pagination: {
            paginate: ({response, currentItems}) => {
                const previousSearchParams = response.request.options.searchParams;
                const previousOffset = previousSearchParams.get('offset');

                if (currentItems.length < limit) {
                    return false;
                }

                return {
                    searchParams: {
                        ...previousSearchParams,
                        offset: Number(previousOffset) + limit,
                    }
                };
            }
        }
    });

    console.log('Items from all pages:', items);
    ```
    */
    paginate?: (data: PaginateData<BodyType, ElementType>) => OptionsInit | false;
    /**
    Checks whether the pagination should continue.

    For example, if you need to stop **before** emitting an entry with some flag, you should use `({item}) => !item.flag`.

    If you want to stop **after** emitting the entry, you should use
    `({item, allItems}) => allItems.some(item => item.flag)` instead.

    @default ({item, currentItems, allItems}) => true
    */
    shouldContinue?: (data: FilterData<ElementType>) => boolean;
    /**
    The maximum amount of items that should be emitted.

    @default Infinity
    */
    countLimit?: number;
    /**
    Milliseconds to wait before the next request is triggered.

    @default 0
    */
    backoff?: number;
    /**
    The maximum amount of request that should be triggered.
    Retries on failure are not counted towards this limit.

    For example, it can be helpful during development to avoid an infinite number of requests.

    @default 10000
    */
    requestLimit?: number;
    /**
    Defines how the property `allItems` in `pagination.paginate`, `pagination.filter` and `pagination.shouldContinue` is managed.

    By default, the property `allItems` is always an empty array. This setting can be helpful to save on memory usage when working with a large dataset.

    When set to `true`, the property `allItems` is an array of the emitted items.

    @default false
    */
    stackAllItems?: boolean;
};
export type SearchParameters = Record<string, string | number | boolean | null | undefined>;
/**
All parsing methods supported by Got.
*/
export type ResponseType = 'json' | 'buffer' | 'text';
type OptionsToSkip = 'searchParameters' | 'followRedirects' | 'auth' | 'toJSON' | 'merge' | 'createNativeRequestOptions' | 'getRequestFunction' | 'getFallbackRequestFunction' | 'freeze';
export type InternalsType = Except<Options, OptionsToSkip>;
export type OptionsError = NodeJS.ErrnoException & {
    options?: Options;
};
export type OptionsInit = Except<Partial<InternalsType>, 'hooks' | 'retry'> & {
    hooks?: Partial<Hooks>;
    retry?: Partial<RetryOptions>;
};
export default class Options {
    private _unixOptions?;
    private _internals;
    private _merging;
    private readonly _init;
    constructor(input?: string | URL | OptionsInit, options?: OptionsInit, defaults?: Options);
    merge(options?: OptionsInit | Options): void;
    /**
    Custom request function.
    The main purpose of this is to [support HTTP2 using a wrapper](https://github.com/szmarczak/http2-wrapper).

    @default http.request | https.request
    */
    get request(): RequestFunction | undefined;
    set request(value: RequestFunction | undefined);
    /**
    An object representing `http`, `https` and `http2` keys for [`http.Agent`](https://nodejs.org/api/http.html#http_class_http_agent), [`https.Agent`](https://nodejs.org/api/https.html#https_class_https_agent) and [`http2wrapper.Agent`](https://github.com/szmarczak/http2-wrapper#new-http2agentoptions) instance.
    This is necessary because a request to one protocol might redirect to another.
    In such a scenario, Got will switch over to the right protocol agent for you.

    If a key is not present, it will default to a global agent.

    @example
    ```
    import got from 'got';
    import HttpAgent from 'agentkeepalive';

    const {HttpsAgent} = HttpAgent;

    await got('https://sindresorhus.com', {
        agent: {
            http: new HttpAgent(),
            https: new HttpsAgent()
        }
    });
    ```
    */
    get agent(): Agents;
    set agent(value: Agents);
    get h2session(): ClientHttp2Session | undefined;
    set h2session(value: ClientHttp2Session | undefined);
    /**
    Decompress the response automatically.

    This will set the `accept-encoding` header to `gzip, deflate, br` unless you set it yourself.

    If this is disabled, a compressed response is returned as a `Buffer`.
    This may be useful if you want to handle decompression yourself or stream the raw compressed data.

    @default true
    */
    get decompress(): boolean;
    set decompress(value: boolean);
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
    get timeout(): Delays;
    set timeout(value: Delays);
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
    import got from 'got';

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
    ```
    */
    get prefixUrl(): string | URL;
    set prefixUrl(value: string | URL);
    /**
    __Note #1__: The `body` option cannot be used with the `json` or `form` option.

    __Note #2__: If you provide this option, `got.stream()` will be read-only.

    __Note #3__: If you provide a payload with the `GET` or `HEAD` method, it will throw a `TypeError` unless the method is `GET` and the `allowGetBody` option is set to `true`.

    __Note #4__: This option is not enumerable and will not be merged with the instance defaults.

    The `content-length` header will be automatically set if `body` is a `string` / `Buffer` / [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) / [`form-data` instance](https://github.com/form-data/form-data), and `content-length` and `transfer-encoding` are not manually set in `options.headers`.

    Since Got 12, the `content-length` is not automatically set when `body` is a `fs.createReadStream`.
    */
    get body(): string | Buffer | Readable | Generator | AsyncGenerator | FormDataLike | undefined;
    set body(value: string | Buffer | Readable | Generator | AsyncGenerator | FormDataLike | undefined);
    /**
    The form body is converted to a query string using [`(new URLSearchParams(object)).toString()`](https://nodejs.org/api/url.html#url_constructor_new_urlsearchparams_obj).

    If the `Content-Type` header is not present, it will be set to `application/x-www-form-urlencoded`.

    __Note #1__: If you provide this option, `got.stream()` will be read-only.

    __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
    */
    get form(): Record<string, any> | undefined;
    set form(value: Record<string, any> | undefined);
    /**
    JSON body. If the `Content-Type` header is not set, it will be set to `application/json`.

    __Note #1__: If you provide this option, `got.stream()` will be read-only.

    __Note #2__: This option is not enumerable and will not be merged with the instance defaults.
    */
    get json(): unknown;
    set json(value: unknown);
    /**
    The URL to request, as a string, a [`https.request` options object](https://nodejs.org/api/https.html#https_https_request_options_callback), or a [WHATWG `URL`](https://nodejs.org/api/url.html#url_class_url).

    Properties from `options` will override properties in the parsed `url`.

    If no protocol is specified, it will throw a `TypeError`.

    __Note__: The query string is **not** parsed as search params.

    @example
    ```
    await got('https://example.com/?query=a b'); //=> https://example.com/?query=a%20b
    await got('https://example.com/', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b

    // The query string is overridden by `searchParams`
    await got('https://example.com/?query=a b', {searchParams: {query: 'a b'}}); //=> https://example.com/?query=a+b
    ```
    */
    get url(): string | URL | undefined;
    set url(value: string | URL | undefined);
    /**
    Cookie support. You don't have to care about parsing or how to store them.

    __Note__: If you provide this option, `options.headers.cookie` will be overridden.
    */
    get cookieJar(): PromiseCookieJar | ToughCookieJar | undefined;
    set cookieJar(value: PromiseCookieJar | ToughCookieJar | undefined);
    /**
    You can abort the `request` using [`AbortController`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController).

    *Requires Node.js 16 or later.*

    @example
    ```
    import got from 'got';

    const abortController = new AbortController();

    const request = got('https://httpbin.org/anything', {
        signal: abortController.signal
    });

    setTimeout(() => {
        abortController.abort();
    }, 100);
    ```
    */
    get signal(): any | undefined;
    set signal(value: any | undefined);
    /**
    Ignore invalid cookies instead of throwing an error.
    Only useful when the `cookieJar` option has been set. Not recommended.

    @default false
    */
    get ignoreInvalidCookies(): boolean;
    set ignoreInvalidCookies(value: boolean);
    /**
    Query string that will be added to the request URL.
    This will override the query string in `url`.

    If you need to pass in an array, you can do it using a `URLSearchParams` instance.

    @example
    ```
    import got from 'got';

    const searchParams = new URLSearchParams([['key', 'a'], ['key', 'b']]);

    await got('https://example.com', {searchParams});

    console.log(searchParams.toString());
    //=> 'key=a&key=b'
    ```
    */
    get searchParams(): string | SearchParameters | URLSearchParams | undefined;
    set searchParams(value: string | SearchParameters | URLSearchParams | undefined);
    get searchParameters(): unknown;
    set searchParameters(_value: unknown);
    get dnsLookup(): CacheableLookup['lookup'] | undefined;
    set dnsLookup(value: CacheableLookup['lookup'] | undefined);
    /**
    An instance of [`CacheableLookup`](https://github.com/szmarczak/cacheable-lookup) used for making DNS lookups.
    Useful when making lots of requests to different *public* hostnames.

    `CacheableLookup` uses `dns.resolver4(..)` and `dns.resolver6(...)` under the hood and fall backs to `dns.lookup(...)` when the first two fail, which may lead to additional delay.

    __Note__: This should stay disabled when making requests to internal hostnames such as `localhost`, `database.local` etc.

    @default false
    */
    get dnsCache(): CacheableLookup | boolean | undefined;
    set dnsCache(value: CacheableLookup | boolean | undefined);
    /**
    User data. `context` is shallow merged and enumerable. If it contains non-enumerable properties they will NOT be merged.

    @example
    ```
    import got from 'got';

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

    const context = {
        token: 'secret'
    };

    const response = await instance('https://httpbin.org/headers', {context});

    // Let's see the headers
    console.log(response.body);
    ```
    */
    get context(): Record<string, unknown>;
    set context(value: Record<string, unknown>);
    /**
    Hooks allow modifications during the request lifecycle.
    Hook functions may be async and are run serially.
    */
    get hooks(): Hooks;
    set hooks(value: Hooks);
    /**
    Defines if redirect responses should be followed automatically.

    Note that if a `303` is sent by the server in response to any request type (`POST`, `DELETE`, etc.), Got will automatically request the resource pointed to in the location header via `GET`.
    This is in accordance with [the spec](https://tools.ietf.org/html/rfc7231#section-6.4.4). You can optionally turn on this behavior also for other redirect codes - see `methodRewriting`.

    @default true
    */
    get followRedirect(): boolean;
    set followRedirect(value: boolean);
    get followRedirects(): unknown;
    set followRedirects(_value: unknown);
    /**
    If exceeded, the request will be aborted and a `MaxRedirectsError` will be thrown.

    @default 10
    */
    get maxRedirects(): number;
    set maxRedirects(value: number);
    /**
    A cache adapter instance for storing cached response data.

    @default false
    */
    get cache(): string | StorageAdapter | boolean | undefined;
    set cache(value: string | StorageAdapter | boolean | undefined);
    /**
    Determines if a `got.HTTPError` is thrown for unsuccessful responses.

    If this is disabled, requests that encounter an error status code will be resolved with the `response` instead of throwing.
    This may be useful if you are checking for resource availability and are expecting error responses.

    @default true
    */
    get throwHttpErrors(): boolean;
    set throwHttpErrors(value: boolean);
    get username(): string;
    set username(value: string);
    get password(): string;
    set password(value: string);
    /**
    If set to `true`, Got will additionally accept HTTP2 requests.

    It will choose either HTTP/1.1 or HTTP/2 depending on the ALPN protocol.

    __Note__: This option requires Node.js 15.10.0 or newer as HTTP/2 support on older Node.js versions is very buggy.

    __Note__: Overriding `options.request` will disable HTTP2 support.

    @default false

    @example
    ```
    import got from 'got';

    const {headers} = await got('https://nghttp2.org/httpbin/anything', {http2: true});

    console.log(headers.via);
    //=> '2 nghttpx'
    ```
    */
    get http2(): boolean;
    set http2(value: boolean);
    /**
    Set this to `true` to allow sending body for the `GET` method.
    However, the [HTTP/2 specification](https://tools.ietf.org/html/rfc7540#section-8.1.3) says that `An HTTP GET request includes request header fields and no payload body`, therefore when using the HTTP/2 protocol this option will have no effect.
    This option is only meant to interact with non-compliant servers when you have no other choice.

    __Note__: The [RFC 7231](https://tools.ietf.org/html/rfc7231#section-4.3.1) doesn't specify any particular behavior for the GET method having a payload, therefore __it's considered an [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern)__.

    @default false
    */
    get allowGetBody(): boolean;
    set allowGetBody(value: boolean);
    /**
    Request headers.

    Existing headers will be overwritten. Headers set to `undefined` will be omitted.

    @default {}
    */
    get headers(): Headers;
    set headers(value: Headers);
    /**
    Specifies if the HTTP request method should be [rewritten as `GET`](https://tools.ietf.org/html/rfc7231#section-6.4) on redirects.

    As the [specification](https://tools.ietf.org/html/rfc7231#section-6.4) prefers to rewrite the HTTP method only on `303` responses, this is Got's default behavior.
    Setting `methodRewriting` to `true` will also rewrite `301` and `302` responses, as allowed by the spec. This is the behavior followed by `curl` and browsers.

    __Note__: Got never performs method rewriting on `307` and `308` responses, as this is [explicitly prohibited by the specification](https://www.rfc-editor.org/rfc/rfc7231#section-6.4.7).

    @default false
    */
    get methodRewriting(): boolean;
    set methodRewriting(value: boolean);
    /**
    Indicates which DNS record family to use.

    Values:
    - `undefined`: IPv4 (if present) or IPv6
    - `4`: Only IPv4
    - `6`: Only IPv6

    @default undefined
    */
    get dnsLookupIpVersion(): DnsLookupIpVersion;
    set dnsLookupIpVersion(value: DnsLookupIpVersion);
    /**
    A function used to parse JSON responses.

    @example
    ```
    import got from 'got';
    import Bourne from '@hapi/bourne';

    const parsed = await got('https://example.com', {
        parseJson: text => Bourne.parse(text)
    }).json();

    console.log(parsed);
    ```
    */
    get parseJson(): ParseJsonFunction;
    set parseJson(value: ParseJsonFunction);
    /**
    A function used to stringify the body of JSON requests.

    @example
    ```
    import got from 'got';

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
    ```

    @example
    ```
    import got from 'got';

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
    ```
    */
    get stringifyJson(): StringifyJsonFunction;
    set stringifyJson(value: StringifyJsonFunction);
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
    get retry(): Partial<RetryOptions>;
    set retry(value: Partial<RetryOptions>);
    /**
    From `http.RequestOptions`.

    The IP address used to send the request from.
    */
    get localAddress(): string | undefined;
    set localAddress(value: string | undefined);
    /**
    The HTTP method used to make the request.

    @default 'GET'
    */
    get method(): Method;
    set method(value: Method);
    get createConnection(): CreateConnectionFunction | undefined;
    set createConnection(value: CreateConnectionFunction | undefined);
    /**
    From `http-cache-semantics`

    @default {}
    */
    get cacheOptions(): CacheOptions;
    set cacheOptions(value: CacheOptions);
    /**
    Options for the advanced HTTPS API.
    */
    get https(): HttpsOptions;
    set https(value: HttpsOptions);
    /**
    [Encoding](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) to be used on `setEncoding` of the response data.

    To get a [`Buffer`](https://nodejs.org/api/buffer.html), you need to set `responseType` to `buffer` instead.
    Don't set this option to `null`.

    __Note__: This doesn't affect streams! Instead, you need to do `got.stream(...).setEncoding(encoding)`.

    @default 'utf-8'
    */
    get encoding(): BufferEncoding | undefined;
    set encoding(value: BufferEncoding | undefined);
    /**
    When set to `true` the promise will return the Response body instead of the Response object.

    @default false
    */
    get resolveBodyOnly(): boolean;
    set resolveBodyOnly(value: boolean);
    /**
    Returns a `Stream` instead of a `Promise`.
    This is equivalent to calling `got.stream(url, options?)`.

    @default false
    */
    get isStream(): boolean;
    set isStream(value: boolean);
    /**
    The parsing method.

    The promise also has `.text()`, `.json()` and `.buffer()` methods which return another Got promise for the parsed body.

    It's like setting the options to `{responseType: 'json', resolveBodyOnly: true}` but without affecting the main Got promise.

    __Note__: When using streams, this option is ignored.

    @example
    ```
    const responsePromise = got(url);
    const bufferPromise = responsePromise.buffer();
    const jsonPromise = responsePromise.json();

    const [response, buffer, json] = Promise.all([responsePromise, bufferPromise, jsonPromise]);
    // `response` is an instance of Got Response
    // `buffer` is an instance of Buffer
    // `json` is an object
    ```

    @example
    ```
    // This
    const body = await got(url).json();

    // is semantically the same as this
    const body = await got(url, {responseType: 'json', resolveBodyOnly: true});
    ```
    */
    get responseType(): ResponseType;
    set responseType(value: ResponseType);
    get pagination(): PaginationOptions<unknown, unknown>;
    set pagination(value: PaginationOptions<unknown, unknown>);
    get auth(): unknown;
    set auth(_value: unknown);
    get setHost(): boolean;
    set setHost(value: boolean);
    get maxHeaderSize(): number | undefined;
    set maxHeaderSize(value: number | undefined);
    get enableUnixSockets(): boolean;
    set enableUnixSockets(value: boolean);
    toJSON(): {
        headers: Headers;
        timeout: Delays;
        request: RequestFunction | undefined;
        username: string;
        password: string;
        json: unknown;
        retry: Partial<RetryOptions>;
        agent: Agents;
        h2session: http2wrapper.ClientHttp2Session | undefined;
        decompress: boolean;
        prefixUrl: string | URL;
        body: string | Readable | Buffer | Generator<unknown, any, unknown> | AsyncGenerator<unknown, any, unknown> | FormDataLike | undefined;
        form: Record<string, any> | undefined;
        url: string | URL | undefined;
        cookieJar: PromiseCookieJar | ToughCookieJar | undefined;
        signal: any;
        ignoreInvalidCookies: boolean;
        searchParams: string | SearchParameters | URLSearchParams | undefined;
        dnsLookup: {
            (hostname: string, family: import("cacheable-lookup").IPFamily, callback: (error: NodeJS.ErrnoException | null, address: string, family: import("cacheable-lookup").IPFamily) => void): void;
            (hostname: string, callback: (error: NodeJS.ErrnoException | null, address: string, family: import("cacheable-lookup").IPFamily) => void): void;
            (hostname: string, options: import("cacheable-lookup").LookupOptions & {
                all: true;
            }, callback: (error: NodeJS.ErrnoException | null, result: readonly import("cacheable-lookup").EntryObject[]) => void): void;
            (hostname: string, options: import("cacheable-lookup").LookupOptions, callback: (error: NodeJS.ErrnoException | null, address: string, family: import("cacheable-lookup").IPFamily) => void): void;
        } | undefined;
        dnsCache: boolean | CacheableLookup | undefined;
        context: Record<string, unknown>;
        hooks: Hooks;
        followRedirect: boolean;
        maxRedirects: number;
        cache: string | boolean | StorageAdapter | undefined;
        throwHttpErrors: boolean;
        http2: boolean;
        allowGetBody: boolean;
        methodRewriting: boolean;
        dnsLookupIpVersion: DnsLookupIpVersion;
        parseJson: ParseJsonFunction;
        stringifyJson: StringifyJsonFunction;
        localAddress: string | undefined;
        method: Method;
        createConnection: CreateConnectionFunction | undefined;
        cacheOptions: CacheOptions;
        https: HttpsOptions;
        encoding: BufferEncoding | undefined;
        resolveBodyOnly: boolean;
        isStream: boolean;
        responseType: ResponseType;
        pagination: PaginationOptions<unknown, unknown>;
        setHost: boolean;
        maxHeaderSize: number | undefined;
        enableUnixSockets: boolean;
    };
    createNativeRequestOptions(): {
        ALPNProtocols: string[] | undefined;
        ca: string | Buffer | (string | Buffer)[] | undefined;
        cert: string | Buffer | (string | Buffer)[] | undefined;
        key: string | Buffer | (string | Buffer | import("tls").KeyObject)[] | undefined;
        passphrase: string | undefined;
        pfx: PfxType;
        rejectUnauthorized: boolean | undefined;
        checkServerIdentity: typeof checkServerIdentity | CheckServerIdentityFunction;
        ciphers: string | undefined;
        honorCipherOrder: boolean | undefined;
        minVersion: import("tls").SecureVersion | undefined;
        maxVersion: import("tls").SecureVersion | undefined;
        sigalgs: string | undefined;
        sessionTimeout: number | undefined;
        dhparam: string | Buffer | undefined;
        ecdhCurve: string | undefined;
        crl: string | Buffer | (string | Buffer)[] | undefined;
        lookup: {
            (hostname: string, family: import("cacheable-lookup").IPFamily, callback: (error: NodeJS.ErrnoException | null, address: string, family: import("cacheable-lookup").IPFamily) => void): void;
            (hostname: string, callback: (error: NodeJS.ErrnoException | null, address: string, family: import("cacheable-lookup").IPFamily) => void): void;
            (hostname: string, options: import("cacheable-lookup").LookupOptions & {
                all: true;
            }, callback: (error: NodeJS.ErrnoException | null, result: readonly import("cacheable-lookup").EntryObject[]) => void): void;
            (hostname: string, options: import("cacheable-lookup").LookupOptions, callback: (error: NodeJS.ErrnoException | null, address: string, family: import("cacheable-lookup").IPFamily) => void): void;
        } | undefined;
        family: DnsLookupIpVersion;
        agent: false | Agents | http.Agent | undefined;
        setHost: boolean;
        method: Method;
        maxHeaderSize: number | undefined;
        localAddress: string | undefined;
        headers: Headers;
        createConnection: CreateConnectionFunction | undefined;
        timeout: number | undefined;
        h2session: http2wrapper.ClientHttp2Session | undefined;
        _defaultAgent?: http.Agent | undefined;
        auth?: string | null | undefined;
        defaultPort?: string | number | undefined;
        hints?: number | undefined;
        host?: string | null | undefined;
        hostname?: string | null | undefined;
        insecureHTTPParser?: boolean | undefined;
        localPort?: number | undefined;
        path?: string | null | undefined;
        port?: string | number | null | undefined;
        protocol?: string | null | undefined;
        signal?: AbortSignal | undefined;
        socketPath?: string | undefined;
        uniqueHeaders?: (string | string[])[] | undefined;
        joinDuplicateHeaders?: boolean | undefined;
        clientCertEngine?: string | undefined;
        privateKeyEngine?: string | undefined;
        privateKeyIdentifier?: string | undefined;
        secureOptions?: number | undefined;
        secureProtocol?: string | undefined;
        sessionIdContext?: string | undefined;
        ticketKeys?: Buffer | undefined;
        servername?: string | undefined;
        shared?: boolean | undefined;
        cacheHeuristic?: number | undefined;
        immutableMinTimeToLive?: number | undefined;
        ignoreCargoCult?: boolean | undefined;
    };
    getRequestFunction(): RequestFunction | typeof https.request | undefined;
    getFallbackRequestFunction(): RequestFunction | typeof https.request | undefined;
    freeze(): void;
}
export {};
