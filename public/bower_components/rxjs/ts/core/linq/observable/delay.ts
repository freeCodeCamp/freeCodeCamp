/// <reference path="../../observable.ts" />
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.
        *
        * @example
        *  1 - res = Rx.Observable.delay(new Date());
        *  2 - res = Rx.Observable.delay(new Date(), Rx.Scheduler.timeout);
        *
        *  3 - res = Rx.Observable.delay(5000);
        *  4 - res = Rx.Observable.delay(5000, 1000, Rx.Scheduler.timeout);
        * @memberOf Observable#
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
        * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(dueTime: Date, scheduler?: IScheduler): Observable<T>;
        /**
        *  Time shifts the observable sequence by dueTime. The relative time intervals between the values are preserved.
        *
        * @example
        *  1 - res = Rx.Observable.delay(new Date());
        *  2 - res = Rx.Observable.delay(new Date(), Rx.Scheduler.timeout);
        *
        *  3 - res = Rx.Observable.delay(5000);
        *  4 - res = Rx.Observable.delay(5000, 1000, Rx.Scheduler.timeout);
        * @memberOf Observable#
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) by which to shift the observable sequence.
        * @param {Scheduler} [scheduler] Scheduler to run the delay timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(dueTime: number, scheduler?: IScheduler): Observable<T>;

        /**
        *  Time shifts the observable sequence based on a subscription delay and a delay selector function for each element.
        *
        * @example
        *  1 - res = source.delayWithSelector(function (x) { return Rx.Scheduler.timer(5000); }); // with selector only
        *  1 - res = source.delayWithSelector(Rx.Observable.timer(2000), function (x) { return Rx.Observable.timer(x); }); // with delay and selector
        *
        * @param {Observable} [subscriptionDelay]  Sequence indicating the delay for the subscription to the source.
        * @param {Function} delayDurationSelector Selector function to retrieve a sequence indicating the delay for each given element.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(delayDurationSelector: (item: T) => ObservableOrPromise<number>): Observable<T>;

        /**
        *  Time shifts the observable sequence based on a subscription delay and a delay selector function for each element.
        *
        * @example
        *  1 - res = source.delayWithSelector(function (x) { return Rx.Scheduler.timer(5000); }); // with selector only
        *  1 - res = source.delayWithSelector(Rx.Observable.timer(2000), function (x) { return Rx.Observable.timer(x); }); // with delay and selector
        *
        * @param {Observable} [subscriptionDelay]  Sequence indicating the delay for the subscription to the source.
        * @param {Function} delayDurationSelector Selector function to retrieve a sequence indicating the delay for each given element.
        * @returns {Observable} Time-shifted sequence.
        */
        delay(subscriptionDelay: Observable<number>, delayDurationSelector: (item: T) => ObservableOrPromise<number>): Observable<T>;
    }
}

(function () {
    var o: Rx.Observable<string>;
    o.delay(1000);
    o.delay(new Date());
    o.delay(1000, Rx.Scheduler.async);
    o.delay(new Date(), Rx.Scheduler.async);

    o.delay(x => Rx.Observable.timer(x.length));
    o.delay(Rx.Observable.timer(1000), x => Rx.Observable.timer(x.length));
    o.delay(x => Rx.Observable.timer(x.length).toPromise());
});
