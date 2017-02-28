/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Retrieves the value of a specified nested property from all elements in
        * the Observable sequence.
        * @param {Arguments} arguments The nested properties to pluck.
        * @returns {Observable} Returns a new Observable sequence of property values.
        */
        pluck<TResult>(prop: string): Observable<TResult>;
    }
}

(function() {
    var o: Rx.Observable<{}>;
    var n: Rx.Observable<number>;

    n = o.pluck<number>('abc');
});
