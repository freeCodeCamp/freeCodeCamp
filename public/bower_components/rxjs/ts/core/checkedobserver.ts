/// <reference path="./observer-lite.ts" />
module Rx {
    export interface CheckedObserver<T> extends Observer<T> {
        checkAccess(): void;
    }
}


(function() {
    var iObserver: Rx.IObserver<number>;
    var checkedObserver: Rx.CheckedObserver<number>;

    iObserver = checkedObserver;
    checkedObserver.checkAccess();
});
