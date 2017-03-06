/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
         * Converts the observable sequence to a Set if it exists.
         * @returns {Observable} An observable sequence with a single value of a Set containing the values from the observable sequence.
         */
        toSet() : Observable< Set<T>>;
    }
}
