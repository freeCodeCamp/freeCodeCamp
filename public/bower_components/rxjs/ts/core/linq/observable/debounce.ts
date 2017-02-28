/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Ignores values from an observable sequence which are followed by another value before dueTime.
        * @param {Number} dueTime Duration of the debounce period for each value (specified as an integer denoting milliseconds).
        * @param {Scheduler} [scheduler]  Scheduler to run the debounce timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The debounced sequence.
        */
        debounce(dueTime: number, scheduler?: IScheduler): Observable<T>;

        /**
        * Ignores values from an observable sequence which are followed by another value within a computed throttle duration.
        * @param {Function} durationSelector Selector function to retrieve a sequence indicating the throttle duration for each given element.
        * @returns {Observable} The debounced sequence.
        */
        debounce(debounceDurationSelector: (item: T) => ObservableOrPromise<any>): Observable<T>;
    }
}

(function () {
    var o: Rx.Observable<string>;
    o.debounce(100);
    o.debounce(100, Rx.Scheduler.async);
    o.debounce(x => Rx.Observable.just(x.length));
});
