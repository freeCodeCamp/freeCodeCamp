/// <reference types="node" resolution-mode="require"/>
/// <reference types="node" resolution-mode="require"/>
import type { Buffer } from 'node:buffer';
import type { URL } from 'node:url';
import type { CancelableRequest } from './as-promise/types.js';
import type { Response } from './core/response.js';
import type Options from './core/options.js';
import type { PaginationOptions, OptionsInit } from './core/options.js';
import type Request from './core/index.js';
type Except<ObjectType, KeysType extends keyof ObjectType> = Pick<ObjectType, Exclude<keyof ObjectType, KeysType>>;
type Merge<FirstType, SecondType> = Except<FirstType, Extract<keyof FirstType, keyof SecondType>> & SecondType;
/**
Defaults for each Got instance.
*/
export type InstanceDefaults = {
    /**
    An object containing the default options of Got.
    */
    options: Options;
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
};
/**
A Request object returned by calling Got, or any of the Got HTTP alias request functions.
*/
export type GotReturn = Request | CancelableRequest;
/**
A function to handle options and returns a Request object.
It acts sort of like a "global hook", and will be called before any actual request is made.
*/
export type HandlerFunction = <T extends GotReturn>(options: Options, next: (options: Options) => T) => T | Promise<T>;
/**
The options available for `got.extend()`.
*/
export type ExtendOptions = {
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
} & OptionsInit;
export type OptionsOfTextResponseBody = Merge<OptionsInit, {
    isStream?: false;
    resolveBodyOnly?: false;
    responseType?: 'text';
}>;
export type OptionsOfJSONResponseBody = Merge<OptionsInit, {
    isStream?: false;
    resolveBodyOnly?: false;
    responseType?: 'json';
}>;
export type OptionsOfBufferResponseBody = Merge<OptionsInit, {
    isStream?: false;
    resolveBodyOnly?: false;
    responseType: 'buffer';
}>;
export type OptionsOfUnknownResponseBody = Merge<OptionsInit, {
    isStream?: false;
    resolveBodyOnly?: false;
}>;
export type StrictOptions = Except<OptionsInit, 'isStream' | 'responseType' | 'resolveBodyOnly'>;
export type StreamOptions = Merge<OptionsInit, {
    isStream?: true;
}>;
type ResponseBodyOnly = {
    resolveBodyOnly: true;
};
export type OptionsWithPagination<T = unknown, R = unknown> = Merge<OptionsInit, {
    pagination?: PaginationOptions<T, R>;
}>;
/**
An instance of `got.paginate`.
*/
export type GotPaginate = {
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
    import got from 'got';

    const countLimit = 10;

    const pagination = got.paginate('https://api.github.com/repos/sindresorhus/got/commits', {
        pagination: {countLimit}
    });

    console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);

    for await (const commitData of pagination) {
        console.log(commitData.commit.message);
    }
    ```
    */
    each: (<T, R = unknown>(url: string | URL, options?: OptionsWithPagination<T, R>) => AsyncIterableIterator<T>) & (<T, R = unknown>(options?: OptionsWithPagination<T, R>) => AsyncIterableIterator<T>);
    /**
    Returns a Promise for an array of all results.

    See pagination.options for more pagination options.

    @example
    ```
    import got from 'got';

    const countLimit = 10;

    const results = await got.paginate.all('https://api.github.com/repos/sindresorhus/got/commits', {
        pagination: {countLimit}
    });

    console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);
    console.log(results);
    ```
    */
    all: (<T, R = unknown>(url: string | URL, options?: OptionsWithPagination<T, R>) => Promise<T[]>) & (<T, R = unknown>(options?: OptionsWithPagination<T, R>) => Promise<T[]>);
};
export type GotRequestFunction = {
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
    (url: string | URL, options?: Merge<OptionsInit, {
        isStream: true;
    }>): Request;
    (options: Merge<OptionsInit, {
        isStream: true;
    }>): Request;
    (url: string | URL, options?: OptionsInit): CancelableRequest | Request;
    (options: OptionsInit): CancelableRequest | Request;
    (url: undefined, options: undefined, defaults: Options): CancelableRequest | Request;
};
/**
All available HTTP request methods provided by Got.
*/
export type HTTPAlias = 'get' | 'post' | 'put' | 'patch' | 'head' | 'delete';
type GotStreamFunction = ((url?: string | URL, options?: Merge<OptionsInit, {
    isStream?: true;
}>) => Request) & ((options?: Merge<OptionsInit, {
    isStream?: true;
}>) => Request);
/**
An instance of `got.stream()`.
*/
export type GotStream = GotStreamFunction & Record<HTTPAlias, GotStreamFunction>;
/**
An instance of `got`.
*/
export type Got = {
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
    import got from 'got';

    const countLimit = 10;

    const pagination = got.paginate('https://api.github.com/repos/sindresorhus/got/commits', {
        pagination: {countLimit}
    });

    console.log(`Printing latest ${countLimit} Got commits (newest to oldest):`);

    for await (const commitData of pagination) {
        console.log(commitData.commit.message);
    }
    ```
    */
    paginate: GotPaginate;
    /**
    The Got defaults used in that instance.
    */
    defaults: InstanceDefaults;
    /**
    Configure a new `got` instance with default `options`.
    The `options` are merged with the parent instance's `defaults.options` using `got.mergeOptions`.
    You can access the resolved options with the `.defaults` property on the instance.

    Additionally, `got.extend()` accepts two properties from the `defaults` object: `mutableDefaults` and `handlers`.

    It is also possible to merges many instances into a single one:
    - options are merged using `got.mergeOptions()` (including hooks),
    - handlers are stored in an array (you can access them through `instance.defaults.handlers`).

    @example
    ```
    import got from 'got';

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
} & Record<HTTPAlias, GotRequestFunction> & GotRequestFunction;
export {};
