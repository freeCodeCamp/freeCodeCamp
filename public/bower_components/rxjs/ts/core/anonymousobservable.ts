/// <reference path="./observable.ts" />
module Rx {
    export interface AnonymousObservable<T> extends Observable<T> { }
}

(function() {
    var observable: Rx.Observable<number>;
    var anonymousObservable: Rx.AnonymousObservable<number>;

    observable = anonymousObservable;
});
