/// <reference path="../../observable.ts" />
module Rx {
    export interface ArrayObserveChange<T> {
        type: string;
        object: T[];
        name?: string;
        oldValue?: T;
        index?: number;
        removed?: T[];
        added?: number;
    }

    export interface ObservableStatic {
        /**
         * Creates an Observable sequence from changes to an array using Array.observe.
         * @param {Array} array An array to observe changes.
         * @returns {Observable} An observable sequence containing changes to an array from Array.observe.
         */
        ofArrayChanges<T>(obj: T[]): Observable<ArrayObserveChange<T>>;
    }
}

(function () {
    var o : Rx.Observable<Rx.ArrayObserveChange<string>>;
    o = Rx.Observable.ofArrayChanges(<string[]>[]);
});
