/// <reference path="../observable.ts" />
module Rx {
        export interface ConnectableObservable<T> extends Observable<T> {
    		connect(): IDisposable;
    		refCount(): Observable<T>;
        }
}

(function() {
    var co: Rx.ConnectableObservable<boolean>;

    var d : Rx.IDisposable = co.connect();
    var o : Rx.Observable<boolean> = co.refCount();
});
