/// <reference path="../../observable.ts"/>
module Rx {
    export interface Observable<T> {
        /**
        * Returns the only element of an observable sequence that satisfies the condition in the optional predicate, and reports an exception if there is not exactly one element in the observable sequence.
        * @param {Function} [predicate] A predicate function to evaluate for elements in the source sequence.
        * @param {Any} [thisArg] Object to use as `this` when executing the predicate.
        * @returns {Observable} Sequence containing the single element in the observable sequence that satisfies the condition in the predicate.
        */
        single(predicate?: _Predicate<T>, thisArg?: any): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    var oc: Rx.ConnectableObservable<number>;
    var is: Rx.ISubject<number>;
    var s: Rx.Subject<number>;
    var a: Rx.Observable<string>;

    o = o.single();
    o = o.single(x => true);
});
