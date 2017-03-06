/// <reference path="../../observable.ts"/>
module Rx {
    export interface ObservableStatic {
        /**
        *  Repeats source as long as condition holds emulating a while loop.
        * There is an alias for this method called 'whileDo' for browsers <IE9
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        while<T>(condition: () => boolean, source: ObservableOrPromise<T>): Observable<T>;
        /**
        *  Repeats source as long as condition holds emulating a while loop.
        * There is an alias for this method called 'whileDo' for browsers <IE9
        *
        * @param {Function} condition The condition which determines if the source will be repeated.
        * @param {Observable} source The observable sequence that will be run if the condition function returns true.
        * @returns {Observable} An observable sequence which is repeated as long as the condition holds.
        */
        whileDo<T>(condition: () => boolean, source: ObservableOrPromise<T>): Observable<T>;
    }
}

(function () {
    var o :Rx.Observable<number>;

    o = Rx.Observable.while(() => true, Rx.Observable.just(1));
});
