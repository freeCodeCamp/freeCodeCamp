/// <reference path="../observable.ts" />
module Rx {
    export interface GroupedObservable<TKey, TElement> extends Observable<TElement> {
        key: TKey;
        underlyingObservable: Observable<TElement>;
    }
}

(function() {
    var go: Rx.GroupedObservable<string, boolean>;

    var k: string = go.key;
    var o : Rx.Observable<boolean> = go.underlyingObservable;
});
