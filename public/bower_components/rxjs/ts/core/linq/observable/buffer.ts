/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferOpening>(bufferOpenings: Observable<TBufferOpening>): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferClosing>(bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
        /**
        *  Projects each element of an observable sequence into zero or more buffers.
        *  @param {Mixed} bufferOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [bufferClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        buffer<TBufferOpening, TBufferClosing>(bufferOpenings: Observable<TBufferOpening>, bufferClosingSelector: () => Observable<TBufferClosing>): Observable<T[]>;
    }
}

(function() {
    var o : Rx.Observable<string>;
    var open : Rx.Observable<boolean>;

    var so : Rx.Observable<string[]> = o.buffer(open);
    so = o.buffer(() => Rx.Observable.timer(100));
    so = o.buffer(open, () => Rx.Observable.timer(100));
});
