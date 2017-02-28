/// <reference path="../disposables/disposable.ts" />
/// <reference path="../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        * Attaches a controller to the observable sequence with the ability to queue.
        * @example
        * var source = Rx.Observable.interval(100).controlled();
        * source.request(3); // Reads 3 values
        * @param {bool} enableQueue truthy value to determine if values should be queued pending the next request
        * @param {Scheduler} scheduler determines how the requests will be scheduled
        * @returns {Observable} The observable sequence which only propagates values on request.
        */
        controlled(enableQueue?: boolean, scheduler?: IScheduler): ControlledObservable<T>;
    }

    export interface ControlledObservable<T> extends Observable<T> {
        request(numberOfItems?: number): IDisposable;
    }
}

(function() {
    var o: Rx.Observable<string>;
    var c = o.controlled();

    var d: Rx.IDisposable = c.request();
    d = c.request();
    d = c.request(5);
});
