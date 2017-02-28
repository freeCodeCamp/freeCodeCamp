/// <reference path="../../observable.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
        * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
        * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
        */
        finally(action: () => void): Observable<T>;

        /**
        *  Invokes a specified action after the source observable sequence terminates gracefully or exceptionally.
        * @param {Function} finallyAction Action to invoke after the source observable sequence terminates.
        * @returns {Observable} Source sequence with the action-invoking termination behavior applied.
        */
        ensure(action: () => void): Observable<T>;
    }
}

(function () {
    var o : Rx.Observable<number>;
    o = o.finally(() => {});
    o = o.ensure(() => {});
});
