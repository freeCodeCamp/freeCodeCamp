// Type definitions for cacheable-request 6.0
// Project: https://github.com/lukechilds/cacheable-request#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
//                 Paul Melnikow <https://github.com/paulmelnikow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { request, RequestOptions, ClientRequest, ServerResponse } from 'http';
import { URL } from 'url';
import { EventEmitter } from 'events';
import { Store } from 'keyv';
import { Options as CacheSemanticsOptions } from 'http-cache-semantics';
import ResponseLike = require('responselike');

export = CacheableRequest;

declare const CacheableRequest: CacheableRequest;

type RequestFn = typeof request;

interface CacheableRequest {
    new (requestFn: RequestFn, storageAdapter?: string | CacheableRequest.StorageAdapter): (
        opts: string | URL | (RequestOptions & CacheSemanticsOptions),
        cb?: (response: ServerResponse | ResponseLike) => void
    ) => CacheableRequest.Emitter;

    RequestError: typeof RequestErrorCls;
    CacheError: typeof CacheErrorCls;
}

declare namespace CacheableRequest {
    type StorageAdapter = Store<any>;

    interface Options {
        /**
         * If the cache should be used. Setting this to `false` will completely bypass the cache for the current request.
         * @default true
         */
        cache?: boolean | undefined;

        /**
         * If set to `true` once a cached resource has expired it is deleted and will have to be re-requested.
         *
         * If set to `false`, after a cached resource's TTL expires it is kept in the cache and will be revalidated
         * on the next request with `If-None-Match`/`If-Modified-Since` headers.
         * @default false
         */
        strictTtl?: boolean | undefined;

        /**
         * Limits TTL. The `number` represents milliseconds.
         * @default undefined
         */
        maxTtl?: number | undefined;

        /**
         * When set to `true`, if the DB connection fails we will automatically fallback to a network request.
         * DB errors will still be emitted to notify you of the problem even though the request callback may succeed.
         * @default false
         */
        automaticFailover?: boolean | undefined;

        /**
         * Forces refreshing the cache. If the response could be retrieved from the cache, it will perform a
         * new request and override the cache instead.
         * @default false
         */
        forceRefresh?: boolean | undefined;
    }

    interface Emitter extends EventEmitter {
        addListener(event: 'request', listener: (request: ClientRequest) => void): this;
        addListener(
            event: 'response',
            listener: (response: ServerResponse | ResponseLike) => void
        ): this;
        addListener(event: 'error', listener: (error: RequestError | CacheError) => void): this;
        on(event: 'request', listener: (request: ClientRequest) => void): this;
        on(event: 'response', listener: (response: ServerResponse | ResponseLike) => void): this;
        on(event: 'error', listener: (error: RequestError | CacheError) => void): this;
        once(event: 'request', listener: (request: ClientRequest) => void): this;
        once(event: 'response', listener: (response: ServerResponse | ResponseLike) => void): this;
        once(event: 'error', listener: (error: RequestError | CacheError) => void): this;
        prependListener(event: 'request', listener: (request: ClientRequest) => void): this;
        prependListener(
            event: 'response',
            listener: (response: ServerResponse | ResponseLike) => void
        ): this;
        prependListener(event: 'error', listener: (error: RequestError | CacheError) => void): this;
        prependOnceListener(event: 'request', listener: (request: ClientRequest) => void): this;
        prependOnceListener(
            event: 'response',
            listener: (response: ServerResponse | ResponseLike) => void
        ): this;
        prependOnceListener(
            event: 'error',
            listener: (error: RequestError | CacheError) => void
        ): this;
        removeListener(event: 'request', listener: (request: ClientRequest) => void): this;
        removeListener(
            event: 'response',
            listener: (response: ServerResponse | ResponseLike) => void
        ): this;
        removeListener(event: 'error', listener: (error: RequestError | CacheError) => void): this;
        off(event: 'request', listener: (request: ClientRequest) => void): this;
        off(event: 'response', listener: (response: ServerResponse | ResponseLike) => void): this;
        off(event: 'error', listener: (error: RequestError | CacheError) => void): this;
        removeAllListeners(event?: 'request' | 'response' | 'error'): this;
        listeners(event: 'request'): Array<(request: ClientRequest) => void>;
        listeners(event: 'response'): Array<(response: ServerResponse | ResponseLike) => void>;
        listeners(event: 'error'): Array<(error: RequestError | CacheError) => void>;
        rawListeners(event: 'request'): Array<(request: ClientRequest) => void>;
        rawListeners(event: 'response'): Array<(response: ServerResponse | ResponseLike) => void>;
        rawListeners(event: 'error'): Array<(error: RequestError | CacheError) => void>;
        emit(event: 'request', request: ClientRequest): boolean;
        emit(event: 'response', response: ServerResponse | ResponseLike): boolean;
        emit(event: 'error', error: RequestError | CacheError): boolean;
        eventNames(): Array<'request' | 'response' | 'error'>;
        listenerCount(type: 'request' | 'response' | 'error'): number;
    }

    type RequestError = RequestErrorCls;
    type CacheError = CacheErrorCls;
}

declare class RequestErrorCls extends Error {
    readonly name: 'RequestError';

    constructor(error: Error);
}
declare class CacheErrorCls extends Error {
    readonly name: 'CacheError';

    constructor(error: Error);
}
