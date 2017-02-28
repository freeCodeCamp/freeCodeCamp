/// <reference path="./observer-lite.ts" />
module Rx {
    export module internals {
        export interface ScheduledObserver<T> extends Observer<T> {
            ensureActive(): void;
        }
    }
}

(function() {
    var observer: Rx.internals.ScheduledObserver<boolean>;
	observer.ensureActive();
});
