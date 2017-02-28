/// <reference path="../disposables/disposable.ts" />
/// <reference path="../observable.ts" />
module Rx {
    export module internals {
        export var inherits: (child: any, parent: any) => void;
        export var addProperties: (obj: any, ...sources: any[]) => void;
        export var addRef: <T>(xs: Observable<T>, r: { getDisposable(): IDisposable; }) => Observable<T>;
    }
}

(function() {
    Rx.internals.inherits(null, null);
    Rx.internals.addProperties({}, 1, 2, 3);
    var o: Rx.Observable<number> = Rx.internals.addRef(<Rx.Observable<number>>{}, new Rx.SingleAssignmentDisposable());
});
