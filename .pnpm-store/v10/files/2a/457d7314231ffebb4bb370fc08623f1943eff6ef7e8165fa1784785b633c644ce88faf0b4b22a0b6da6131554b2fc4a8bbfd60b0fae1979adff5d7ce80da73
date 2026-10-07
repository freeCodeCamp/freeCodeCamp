/// <reference types="node" />
import { URL } from 'url';
import { CancelError } from 'p-cancelable';
import { CancelableRequest, Response, Options, NormalizedOptions, Defaults as DefaultOptions, PaginationOptions, ParseError, RequestError, CacheError, ReadError, HTTPError, MaxRedirectsError, TimeoutError, UnsupportedProtocolError, UploadError } from './as-promise';
import Request from './core';
declare type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeysType>>;
declare type Merge<FirstType, SecondType> = Except<FirstType, Extract<keyof FirstType, keyof SecondType>> & SecondType;
/**
Defaults for each Got instance.
*/
export interface InstanceDefaults {
    /**
  An object containing the default options of Got.
    */
    options: DefaultOptions;
    /**
    An array of functions. You execute them directly by calling `got()`.
    They are some sort of "global hooks" - these functions are called first.
    The last handler (*it's hidden*) is either `asPromise` or `asStream`, depending on the `options.isStream` property.

    @default []
    */
    handlers: HandlerFunction[];
    /**
    A read-only boolean describing whether the defaults are mutable or not.
    If set to `true`, you can update headers over time, for example, update an access token when it expires.

    @default false
    */
    mutableDefaults: boolean;
    _rawHandlers?: HandlerFunction[];
}
/**
A Request object returned by calling Got, or any of the Got HTTP alias request functions.
*/
export declare type GotReturn = Request | CancelableRequest;
/**
A function to handle options and returns a Request object.
It acts sort of like a "global hook", and will be called before any actual request is made.
*/
export declare type HandlerFunction = <T extends GotReturn>(options: NormalizedOptions, next: (options: NormalizedOptions) => T) => T | Promise<T>;
/**
The options available for `got.extend()`.
*/
export interface ExtendOptions extends Options {
    /**
    An array of functions. You execute them directly by calling `got()`.
    They are some sort of "global hooks" - these functions are called first.
    The last handler (*it's hidden*) is either `asPromise` or `asStream`, depending on the `options.isStream` property.

    @default []
    */
    handlers?: HandlerFunction[];
    /**
    A read-only boolean describing whether the defaults are mutable or not.
    If set to `true`, you can update headers over time, for example, update an access token when it expires.

    @default false
    */
    mutableDefaults?: boolean;
}
export declare type OptionsOfTextResponseBody = Merge<Options, {
    isStream?: false;
    resolveBodyOnly?: false;
    responseType?: 'text';
}>;
export declare type OptionsOfJSONResponseBody = Merge<Options, {
    isStream?: false;
    resolveBodyOnly?: false;
    responseType?: 'json';
}>;
export declare type OptionsOfBufferResponseBody = Merge<Options, {
    isStream?: false;
    resolveBodyOnly?: false;
    responseType: 'buffer';
}>;
export declare type OptionsOfUnknownResponseBody = Merge<Options, {
    isStream?: false;
    resolveBodyOnly?: false;
}>;
export declare type StrictOptions = Except<Options, 'isStream' | 'responseType' | 'resolveBodyOnly'>;
export declare type StreamOptions = Merge<Options, {
    isStream?: true;
}>;
declare type ResponseBodyOnly = {
    resolveBodyOnly: true;
};
export declare type OptionsWithPagination<T = unknown, R = unknown> = Merge<Options, PaginationOptions<T, R>>;
/**
An instance of `got.paginate`.
*/
export interface GotPaginate {
    /**
    Same as `GotPaginate.each`.
    */
    <T, R = unknown>(url: string | URL, options?: OptionsWithPagination<T, R>): AsyncIterableIterator<T>;
    /**
    Same as `GotPaginate.each`.
    */
    <T, R = unknown>(options?: OptionsWithPagination<T, R>): AsyncIterableIterator<T>;
    /**
    Returns an async iterator.

    See pagination.options for more pagination options.

    @example
    ```
    (async () => {
        const countLimit = 10;

        const pagination = got.paginate('https://api.github.com/repos/sindresorhus/got/commits', {
            pagination: {countLimit}
        });

        console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);

        for await (const commitData of pagination) {
            console.log(commitData.commit.message);
        }
    })();
    ```
    */
    each: (<T, R = unknown>(url: string | URL, options?: OptionsWithPagination<T, R>) => AsyncIterableIterator<T>) & (<T, R = unknown>(options?: OptionsWithPagination<T, R>) => AsyncIterableIterator<T>);
    /**
    Returns a Promise for an array of all results.

    See pagination.options for more pagination options.

    @example
    ```
    (async () => {
        const countLimit = 10;

        const results = await got.paginate.all('https://api.github.com/repos/sindresorhus/got/commits', {
            pagination: {countLimit}
        });

        console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);
        console.log(results);
    })();
    ```
    */
    all: (<T, R = unknown>(url: string | URL, options?: OptionsWithPagination<T, R>) => Promise<T[]>) & (<T, R = unknown>(options?: OptionsWithPagination<T, R>) => Promise<T[]>);
}
export interface GotRequestFunction {
    (url: string | URL, options?: OptionsOfTextResponseBody): CancelableRequest<Response<string>>;
    <T>(url: string | URL, options?: OptionsOfJSONResponseBody): CancelableRequest<Response<T>>;
    (url: string | URL, options?: OptionsOfBufferResponseBody): CancelableRequest<Response<Buffer>>;
    (url: string | URL, options?: OptionsOfUnknownResponseBody): CancelableRequest<Response>;
    (options: OptionsOfTextResponseBody): CancelableRequest<Response<string>>;
    <T>(options: OptionsOfJSONResponseBody): CancelableRequest<Response<T>>;
    (options: OptionsOfBufferResponseBody): CancelableRequest<Response<Buffer>>;
    (options: OptionsOfUnknownResponseBody): CancelableRequest<Response>;
    (url: string | URL, options?: (Merge<OptionsOfTextResponseBody, ResponseBodyOnly>)): CancelableRequest<string>;
    <T>(url: string | URL, options?: (Merge<OptionsOfJSONResponseBody, ResponseBodyOnly>)): CancelableRequest<T>;
    (url: string | URL, options?: (Merge<OptionsOfBufferResponseBody, ResponseBodyOnly>)): CancelableRequest<Buffer>;
    (options: (Merge<OptionsOfTextResponseBody, ResponseBodyOnly>)): CancelableRequest<string>;
    <T>(options: (Merge<OptionsOfJSONResponseBody, ResponseBodyOnly>)): CancelableRequest<T>;
    (options: (Merge<OptionsOfBufferResponseBody, ResponseBodyOnly>)): CancelableRequest<Buffer>;
    (url: string | URL, options?: Merge<Options, {
        isStream: true;
    }>): Request;
    (options: Merge<Options, {
        isStream: true;
    }>): Request;
    (url: string | URL, options?: Options): CancelableRequest | Request;
    (options: Options): CancelableRequest | Request;
}
/**
All available HTTP request methods provided by Got.
*/
export declare type HTTPAlias = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';
interface GotStreamFunction {
    (url: string | URL, options?: Merge<Options, {
        isStream?: true;
    }>): Request;
    (options?: Merge<Options, {
        isStream?: true;
    }>): Request;
}
/**
An instance of `got.stream()`.
*/
export declare type GotStream = GotStreamFunction & Record<HTTPAlias, GotStreamFunction>;
/**
An instance of `got`.
*/
export interface Got extends Record<HTTPAlias, GotRequestFunction>, GotRequestFunction {
    /**
    Sets `options.isStream` to `true`.

    Returns a [duplex stream](https://nodejs.org/api/stream.html#stream_class_stream_duplex) with additional events:
    - request
    - response
    - redirect
    - uploadProgress
    - downloadProgress
    - error
    */
    stream: GotStream;
    /**
    Returns an async iterator.

    See pagination.options for more pagination options.

    @example
    ```
    (async () => {
        const countLimit = 10;

        const pagination = got.paginate('https://api.github.com/repos/sindresorhus/got/commits', {
            pagination: {countLimit}
        });

        console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);

        for await (const commitData of pagination) {
            console.log(commitData.commit.message);
        }
    })();
    ```
    */
    paginate: GotPaginate;
    /**
    The Got defaults used in that instance.
    */
    defaults: InstanceDefaults;
    /**
    An error to be thrown when a cache method fails. For example, if the database goes down or there's a filesystem error.
    Contains a `code` property with `ERR_CACHE_ACCESS` or a more specific failure code.
    */
    CacheError: typeof CacheError;
    /**
    An error to be thrown when a request fails. Contains a `code` property with error class code, like `ECONNREFUSED`.
    If there is no specific code supplied, `code` defaults to `ERR_GOT_REQUEST_ERROR`.
    */
    RequestError: typeof RequestError;
    /**
    An error to be thrown when reading from response stream fails. Contains a `code` property with
    `ERR_READING_RESPONSE_STREAM` or a more specific failure code.
    */
    ReadError: typeof ReadError;
    /**
    An error to be thrown when server response code is 2xx, and parsing body fails. Includes a
    `response` property. Contains a `code` property with `ERR_BODY_PARSE_FAILURE` or a more specific failure code.
    */
    ParseError: typeof ParseError;
    /**
    An error to be thrown when the server response code is not 2xx nor 3xx if `options.followRedirect` is `true`, but always except for 304.
    Includes a `response` property. Contains a `code` property with `ERR_NON_2XX_3XX_RESPONSE` or a more specific failure code.
    */
    HTTPError: typeof HTTPError;
    /**
    An error to be thrown when the server redirects you more than ten times.
    Includes a `response` property. Contains a `code` property with `ERR_TOO_MANY_REDIRECTS`.
    */
    MaxRedirectsError: typeof MaxRedirectsError;
    /**
    An error to be thrown when given an unsupported protocol. Contains a `code` property with `ERR_UNSUPPORTED_PROTOCOL`.
    */
    UnsupportedProtocolError: typeof UnsupportedProtocolError;
    /**
    An error to be thrown when the request is aborted due to a timeout.
    Includes an `event` and `timings` property. Contains a `code` property with `ETIMEDOUT`.
    */
    TimeoutError: typeof TimeoutError;
    /**
    An error to be thrown when the request body is a stream and an error occurs while reading from that stream.
    Contains a `code` property with `ERR_UPLOAD` or a more specific failure code.
    */
    UploadError: typeof UploadError;
    /**
    An error to be thrown when the request is aborted with `.cancel()`. Contains a `code` property with `ERR_CANCELED`.
    */
    CancelError: typeof CancelError;
    /**
    Configure a new `got` instance with default `options`.
    The `options` are merged with the parent instance's `defaults.options` using `got.mergeOptions`.
    You can access the resolved options with the `.defaults` property on the instance.

    Additionally, `got.extend()` accepts two properties from the `defaults` object: `mutableDefaults` and `handlers`.

    It is also possible to merges many instances into a single one:
    - options are merged using `got.mergeOptions()` (including hooks),
    - handlers are stored in an array (you can access them through `instance.defaults.handlers`).

    @example
    ```js
    const client = got.extend({
        prefixUrl: 'https://example.com',
        headers: {
            'x-unicorn': 'rainbow'
        }
    });

    client.get('demo');

    // HTTP Request =>
    // GET /demo HTTP/1.1
    // Host: example.com
    // x-unicorn: rainbow
    ```
    */
    extend: (...instancesOrOptions: Array<Got | ExtendOptions>) => Got;
    /**
    Merges multiple `got` instances into the parent.
    */
    mergeInstances: (parent: Got, ...instances: Got[]) => Got;
    /**
    Extends parent options.
    Avoid using [object spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals) as it doesn't work recursively.

    Options are deeply merged to a new object. The value of each key is determined as follows:

    - If the new property is not defined, the old value is used.
    - If the new property is explicitly set to `undefined`:
        - If the parent property is a plain `object`, the parent value is deeply cloned.
        - Otherwise, `undefined` is used.
    - If the parent value is an instance of `URLSearchParams`:
        - If the new value is a `string`, an `object` or an instance of `URLSearchParams`, a new `URLSearchParams` instance is created.
            The values are merged using [`urlSearchParams.append(key, value)`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/append).
            The keys defined in the new value override the keys defined in the parent value.
        - Otherwise, the only available value is `undefined`.
    - If the new property is a plain `object`:
        - If the parent property is a plain `object` too, both values are merged recursively into a new `object`.
        - Otherwise, only the new value is deeply cloned.
    - If the new property is an `Array`, it overwrites the old one with a deep clone of the new property.
    - Properties that are not enumerable, such as `context`, `body`, `json`, and `form`, will not be merged.
    - Otherwise, the new value is assigned to the key.

    **Note:** Only Got options are merged! Custom user options should be defined via [`options.context`](#context).

    @example
    ```
    const a = {headers: {cat: 'meow', wolf: ['bark', 'wrrr']}};
    const b = {headers: {cow: 'moo', wolf: ['auuu']}};

    {...a, ...b}            // => {headers: {cow: 'moo', wolf: ['auuu']}}
    got.mergeOptions(a, b)  // => {headers: {cat: 'meow', cow: 'moo', wolf: ['auuu']}}
    ```
    */
    mergeOptions: (...sources: Options[]) => NormalizedOptions;
}
export {};
