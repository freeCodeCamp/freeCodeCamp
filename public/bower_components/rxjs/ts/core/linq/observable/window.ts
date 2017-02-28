/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowOpening>(windowOpenings: Observable<TWindowOpening>): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowClosing>(windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
        /**
        *  Projects each element of an observable sequence into zero or more windows.
        *
        *  @param {Mixed} windowOpeningsOrClosingSelector Observable sequence whose elements denote the creation of new windows, or, a function invoked to define the boundaries of the produced windows (a new window is started when the previous one is closed, resulting in non-overlapping windows).
        *  @param {Function} [windowClosingSelector] A function invoked to define the closing of each produced window. If a closing selector function is specified for the first parameter, this parameter is ignored.
        *  @returns {Observable} An observable sequence of windows.
        */
        window<TWindowOpening, TWindowClosing>(windowOpenings: Observable<TWindowOpening>, windowClosingSelector: () => Observable<TWindowClosing>): Observable<Observable<T>>;
    }
}

(function() {
    var o : Rx.Observable<string>;
    var open : Rx.Observable<boolean>;

    var so : Rx.Observable<Rx.Observable<string>> = o.window(open);
    so = o.window(() => Rx.Observable.timer(100));
    so = o.window(open, () => Rx.Observable.timer(100));
});
