/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Returns the element at a specified index in a sequence or default value if not found.
        * @param {Number} index The zero-based index of the element to retrieve.
        * @param {Any} [defaultValue] The default value to use if elementAt does not find a value.
        * @returns {Observable} An observable sequence that produces the element at the specified position in the source sequence.
        */
        elementAt(index: number): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<string>;
    o = o.elementAt(5);
});
