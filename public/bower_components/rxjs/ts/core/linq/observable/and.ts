/// <reference path="../../observable.ts" />
/// <reference path="../../joins/pattern.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Creates a pattern that matches when both observable sequences have an available value.
        *
        *  @param right Observable sequence to match with the current sequence.
        *  @return {Pattern} Pattern object that matches when both observable sequences have an available value.
        */
        and<T2>(right: Observable<T2>): Pattern2<T, T2>;
    }
}

(function() {
    var r: Rx.Observable<string>;
    interface A { }
    var a: Rx.Observable<A>;

    interface B { }
    var b: Rx.Observable<B>;

    interface C { }
    var c: Rx.Observable<C>;

    var n: Rx.Observable<number> = Rx.Observable.when(
        r.and(a).and(b).and(c).thenDo((r, a, b, c) => {
            return 123;
        })
    );
});
