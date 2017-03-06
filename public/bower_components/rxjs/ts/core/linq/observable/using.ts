/// <reference path="../../observable.ts"/>
module Rx {
    export interface ObservableStatic {
        /**
         * Constructs an observable sequence that depends on a resource object, whose lifetime is tied to the resulting observable sequence's lifetime.
         * @param {Function} resourceFactory Factory function to obtain a resource object.
         * @param {Function} observableFactory Factory function to obtain an observable sequence that depends on the obtained resource.
         * @returns {Observable} An observable sequence whose lifetime controls the lifetime of the dependent resource object.
         */
        using<TSource, TResource extends IDisposable>(resourceFactory: () => TResource, observableFactory: (resource: TResource) => Observable<TSource>): Observable<TSource>;
    }
}

(function () {
    var s : Rx.Observable<string>;
    var r : Rx.Disposable;
    s = Rx.Observable.using(() => r, () => s);
});
