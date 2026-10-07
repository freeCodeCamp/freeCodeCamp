/// <reference types="node" />
import PCancelable = require('p-cancelable');
import Request, { Options, Response, RequestError, RequestEvents } from '../core';
/**
All parsing methods supported by Got.
*/
export declare type ResponseType = 'json' | 'buffer' | 'text';
export interface PaginationOptions<T, R> {
    /**
    All options accepted by `got.paginate()`.
    */
    pagination?: {
        /**
        A function that transform [`Response`](#response) into an array of items.
        This is where you should do the parsing.

        @default response => JSON.parse(response.body)
        */
        transform?: (response: Response<R>) => Promise<T[]> | T[];
        /**
        Checks whether the item should be emitted or not.

        @default (item, allItems, currentItems) => true
        */
        filter?: (item: T, allItems: T[], currentItems: T[]) => boolean;
        /**
        The function takes three arguments:
        - `response` - The current response object.
        - `allItems` - An array of the emitted items.
        - `currentItems` - Items from the current response.

        It should return an object representing Got options pointing to the next page.
        The options are merged automatically with the previous request, therefore the options returned `pagination.paginate(...)` must reflect changes only.
        If there are no more pages, `false` should be returned.

        @example
        ```
        const got = require('got');

        (async () => {
            const limit = 10;

            const items = got.paginate('https://example.com/items', {
                searchParams: {
                    limit,
                    offset: 0
                },
                pagination: {
                    paginate: (response, allItems, currentItems) => {
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
        })();
        ```
        */
        paginate?: (response: Response<R>, allItems: T[], currentItems: T[]) => Options | false;
        /**
        Checks whether the pagination should continue.

        For example, if you need to stop **before** emitting an entry with some flag, you should use `(item, allItems, currentItems) => !item.flag`.
        If you want to stop **after** emitting the entry, you should use `(item, allItems, currentItems) => allItems.some(entry => entry.flag)` instead.

        @default (item, allItems, currentItems) => true
        */
        shouldContinue?: (item: T, allItems: T[], currentItems: T[]) => boolean;
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
        Defines how the parameter `allItems` in pagination.paginate, pagination.filter and pagination.shouldContinue is managed.
        When set to `false`, the parameter `allItems` is always an empty array.

        This option can be helpful to save on memory usage when working with a large dataset.
        */
        stackAllItems?: boolean;
    };
}
export declare type AfterResponseHook = (response: Response, retryWithMergedOptions: (options: Options) => CancelableRequest<Response>) => Response | CancelableRequest<Response> | Promise<Response | CancelableRequest<Response>>;
export declare namespace PromiseOnly {
    interface Hooks {
        /**
        Called with [response object](#response) and a retry function.
        Calling the retry function will trigger `beforeRetry` hooks.

        Each function should return the response.
        This is especially useful when you want to refresh an access token.

        __Note__: When using streams, this hook is ignored.

        @example
        ```
        const got = require('got');

        const instance = got.extend({
            hooks: {
                afterResponse: [
                    (response, retryWithMergedOptions) => {
                        if (response.statusCode === 401) { // Unauthorized
                            const updatedOptions = {
                                headers: {
                                    token: getNewToken() // Refresh the access token
                                }
                            };

                            // Save for further requests
                            instance.defaults.options = got.mergeOptions(instance.defaults.options, updatedOptions);

                            // Make a new retry
                            return retryWithMergedOptions(updatedOptions);
                        }

                        // No changes otherwise
                        return response;
                    }
                ],
                beforeRetry: [
                    (options, error, retryCount) => {
                        // This will be called on `retryWithMergedOptions(...)`
                    }
                ]
            },
            mutableDefaults: true
        });
        ```
        */
        afterResponse?: AfterResponseHook[];
    }
    interface Options extends PaginationOptions<unknown, unknown> {
        /**
        The parsing method.

        The promise also has `.text()`, `.json()` and `.buffer()` methods which return another Got promise for the parsed body.

        It's like setting the options to `{responseType: 'json', resolveBodyOnly: true}` but without affecting the main Got promise.

        __Note__: When using streams, this option is ignored.

        @example
        ```
        (async () => {
            const responsePromise = got(url);
            const bufferPromise = responsePromise.buffer();
            const jsonPromise = responsePromise.json();

            const [response, buffer, json] = Promise.all([responsePromise, bufferPromise, jsonPromise]);
            // `response` is an instance of Got Response
            // `buffer` is an instance of Buffer
            // `json` is an object
        })();
        ```

        @example
        ```
        // This
        const body = await got(url).json();

        // is semantically the same as this
        const body = await got(url, {responseType: 'json', resolveBodyOnly: true});
        ```
        */
        responseType?: ResponseType;
        /**
        When set to `true` the promise will return the Response body instead of the Response object.

        @default false
        */
        resolveBodyOnly?: boolean;
        /**
        Returns a `Stream` instead of a `Promise`.
        This is equivalent to calling `got.stream(url, options?)`.

        @default false
        */
        isStream?: boolean;
        /**
        [Encoding](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) to be used on `setEncoding` of the response data.

        To get a [`Buffer`](https://nodejs.org/api/buffer.html), you need to set `responseType` to `buffer` instead.
        Don't set this option to `null`.

        __Note__: This doesn't affect streams! Instead, you need to do `got.stream(...).setEncoding(encoding)`.

        @default 'utf-8'
        */
        encoding?: BufferEncoding;
    }
    interface NormalizedOptions {
        responseType: ResponseType;
        resolveBodyOnly: boolean;
        isStream: boolean;
        encoding?: BufferEncoding;
        pagination?: Required<PaginationOptions<unknown, unknown>['pagination']>;
    }
    interface Defaults {
        responseType: ResponseType;
        resolveBodyOnly: boolean;
        isStream: boolean;
        pagination?: Required<PaginationOptions<unknown, unknown>['pagination']>;
    }
    type HookEvent = 'afterResponse';
}
/**
An error to be thrown when server response code is 2xx, and parsing body fails.
Includes a `response` property.
*/
export declare class ParseError extends RequestError {
    readonly response: Response;
    constructor(error: Error, response: Response);
}
/**
An error to be thrown when the request is aborted with `.cancel()`.
*/
export declare class CancelError extends RequestError {
    readonly response: Response;
    constructor(request: Request);
    get isCanceled(): boolean;
}
export interface CancelableRequest<T extends Response | Response['body'] = Response['body']> extends PCancelable<T>, RequestEvents<CancelableRequest<T>> {
    json: <ReturnType>() => CancelableRequest<ReturnType>;
    buffer: () => CancelableRequest<Buffer>;
    text: () => CancelableRequest<string>;
}
export * from '../core';
