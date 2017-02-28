/// <reference path="../../observable.ts" />
module Rx {
    export interface ObjectObserveChange<T> {
        type: string;
        object: T;
        name: string;
        oldValue?: any;
    }

    export interface ObservableStatic {
        /**
         * Creates an Observable sequence from changes to an object using Object.observe.
         * @param {Object} obj An object to observe changes.
         * @returns {Observable} An observable sequence containing changes to an object from Object.observe.
         */
        ofObjectChanges<T>(obj: T): Observable<ObjectObserveChange<T>>;
    }
}

(function () {
    var o : Rx.Observable<Rx.ObjectObserveChange<{}>>;
    o = Rx.Observable.ofObjectChanges({});
});
