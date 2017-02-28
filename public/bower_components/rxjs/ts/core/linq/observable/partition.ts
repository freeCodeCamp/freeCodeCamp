/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
         * Returns two observables which partition the observations of the source by the given function.
         * The first will trigger observations for those values for which the predicate returns true.
         * The second will trigger observations for those values where the predicate returns false.
         * The predicate is executed once for each subscribed observer.
         * Both also propagate all error observations arising from the source and each completes
         * when the source completes.
         * @param {Function} predicate
         *    The function to determine which output Observable will trigger a particular observation.
         * @returns {Array}
         *    An array of observables. The first triggers when the predicate returns true,
         *    and the second triggers when the predicate returns false.
        */
        partition(predicate: _Predicate<T>, thisArg?: any): [Observable<T>, Observable<T>];
    }
}

(function() {
    var o: Rx.Observable<number>;
    var r: [Rx.Observable<number>, Rx.Observable<number>];

    r = o.partition(x => x % 2 === 0);
});
