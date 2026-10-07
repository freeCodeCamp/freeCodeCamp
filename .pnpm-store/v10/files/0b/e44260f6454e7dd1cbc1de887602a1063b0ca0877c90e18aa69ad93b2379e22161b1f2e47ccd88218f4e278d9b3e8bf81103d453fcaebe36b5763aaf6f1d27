import { Observable } from '../../Observable';
import { Subscriber } from '../../Subscriber';
import { TeardownLogic } from '../../types';
export interface AjaxRequest {
    url?: string;
    body?: any;
    user?: string;
    async?: boolean;
    method?: string;
    headers?: Object;
    timeout?: number;
    password?: string;
    hasContent?: boolean;
    crossDomain?: boolean;
    withCredentials?: boolean;
    createXHR?: () => XMLHttpRequest;
    progressSubscriber?: Subscriber<any>;
    responseType?: string;
}
export interface AjaxCreationMethod {
    (urlOrRequest: string | AjaxRequest): Observable<AjaxResponse>;
    get(url: string, headers?: Object): Observable<AjaxResponse>;
    post(url: string, body?: any, headers?: Object): Observable<AjaxResponse>;
    put(url: string, body?: any, headers?: Object): Observable<AjaxResponse>;
    patch(url: string, body?: any, headers?: Object): Observable<AjaxResponse>;
    delete(url: string, headers?: Object): Observable<AjaxResponse>;
    getJSON<T>(url: string, headers?: Object): Observable<T>;
}
export declare function ajaxGet(url: string, headers?: Object): AjaxObservable<AjaxResponse>;
export declare function ajaxPost(url: string, body?: any, headers?: Object): Observable<AjaxResponse>;
export declare function ajaxDelete(url: string, headers?: Object): Observable<AjaxResponse>;
export declare function ajaxPut(url: string, body?: any, headers?: Object): Observable<AjaxResponse>;
export declare function ajaxPatch(url: string, body?: any, headers?: Object): Observable<AjaxResponse>;
export declare function ajaxGetJSON<T>(url: string, headers?: Object): Observable<T>;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
export declare class AjaxObservable<T> extends Observable<T> {
    /**
     * Creates an observable for an Ajax request with either a request object with
     * url, headers, etc or a string for a URL.
     *
     * ## Example
     * ```ts
     * import { ajax } from 'rxjs/ajax';
   *
     * const source1 = ajax('/products');
     * const source2 = ajax({ url: 'products', method: 'GET' });
     * ```
     *
     * @param {string|Object} request Can be one of the following:
     *   A string of the URL to make the Ajax call.
     *   An object with the following properties
     *   - url: URL of the request
     *   - body: The body of the request
     *   - method: Method of the request, such as GET, POST, PUT, PATCH, DELETE
     *   - async: Whether the request is async
     *   - headers: Optional headers
     *   - crossDomain: true if a cross domain request, else false
     *   - createXHR: a function to override if you need to use an alternate
     *   XMLHttpRequest implementation.
     *   - resultSelector: a function to use to alter the output value type of
     *   the Observable. Gets {@link AjaxResponse} as an argument.
     * @return {Observable} An observable sequence containing the XMLHttpRequest.
     * @static true
     * @name ajax
     * @owner Observable
     * @nocollapse
    */
    static create: AjaxCreationMethod;
    private request;
    constructor(urlOrRequest: string | AjaxRequest);
    /** @deprecated This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<T>): TeardownLogic;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class AjaxSubscriber<T> extends Subscriber<Event> {
    request: AjaxRequest;
    private xhr;
    private done;
    constructor(destination: Subscriber<T>, request: AjaxRequest);
    next(e: Event): void;
    private send;
    private serializeBody;
    private setHeaders;
    private getHeader;
    private setupEvents;
    unsubscribe(): void;
}
/**
 * A normalized AJAX response.
 *
 * @see {@link ajax}
 *
 * @class AjaxResponse
 */
export declare class AjaxResponse {
    originalEvent: Event;
    xhr: XMLHttpRequest;
    request: AjaxRequest;
    /** @type {number} The HTTP status code */
    status: number;
    /** @type {string|ArrayBuffer|Document|object|any} The response data */
    response: any;
    /** @type {string} The raw responseText */
    responseText: string;
    /** @type {string} The responseType (e.g. 'json', 'arraybuffer', or 'xml') */
    responseType: string;
    constructor(originalEvent: Event, xhr: XMLHttpRequest, request: AjaxRequest);
}
export declare type AjaxErrorNames = 'AjaxError' | 'AjaxTimeoutError';
/**
 * A normalized AJAX error.
 *
 * @see {@link ajax}
 *
 * @class AjaxError
 */
export interface AjaxError extends Error {
    /** @type {XMLHttpRequest} The XHR instance associated with the error */
    xhr: XMLHttpRequest;
    /** @type {AjaxRequest} The AjaxRequest associated with the error */
    request: AjaxRequest;
    /** @type {number} The HTTP status code */
    status: number;
    /** @type {string} The responseType (e.g. 'json', 'arraybuffer', or 'xml') */
    responseType: string;
    /** @type {string|ArrayBuffer|Document|object|any} The response data */
    response: any;
}
export interface AjaxErrorCtor {
    new (message: string, xhr: XMLHttpRequest, request: AjaxRequest): AjaxError;
}
export declare const AjaxError: AjaxErrorCtor;
export interface AjaxTimeoutError extends AjaxError {
}
export interface AjaxTimeoutErrorCtor {
    new (xhr: XMLHttpRequest, request: AjaxRequest): AjaxTimeoutError;
}
/**
 * @see {@link ajax}
 *
 * @class AjaxTimeoutError
 */
export declare const AjaxTimeoutError: AjaxTimeoutErrorCtor;
