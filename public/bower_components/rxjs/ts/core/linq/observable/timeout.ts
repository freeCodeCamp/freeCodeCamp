/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: Date, scheduler?: IScheduler): Observable<T>;

        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not specified, a timeout error throwing sequence will be used.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: Date, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not specified, a timeout error throwing sequence will be used.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: number, scheduler?: IScheduler): Observable<T>;
        /**
        *  Returns the source observable sequence or the other observable sequence if dueTime elapses.
        * @param {Number} dueTime Absolute (specified as a Date object) or relative time (specified as an integer denoting milliseconds) when a timeout occurs.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not specified, a timeout error throwing sequence will be used.
        * @param {Scheduler} [scheduler]  Scheduler to run the timeout timers on. If not specified, the timeout scheduler is used.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout(dueTime: number, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;

        /**
        *  Returns the source observable sequence, switching to the other observable sequence if a timeout is signaled.
        * @param {Function} timeoutDurationSelector Selector to retrieve an observable sequence that represents the timeout between the current element and the next element.
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout<TTimeout>(timeoutdurationSelector: (item: T) => Observable<TTimeout>): Observable<T>;

        /**
        *  Returns the source observable sequence, switching to the other observable sequence if a timeout is signaled.
        * @param {Function} timeoutDurationSelector Selector to retrieve an observable sequence that represents the timeout between the current element and the next element.
        * @param {Observable} other  Sequence to return in case of a timeout. If not provided, this is set to Observable.throwException().
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout<TTimeout>(timeoutdurationSelector: (item: T) => Observable<TTimeout>, other: Observable<T>): Observable<T>;

        /**
        *  Returns the source observable sequence, switching to the other observable sequence if a timeout is signaled.
        * @param {Observable} [firstTimeout]  Observable sequence that represents the timeout for the first element. If not provided, this defaults to Observable.never().
        * @param {Function} timeoutDurationSelector Selector to retrieve an observable sequence that represents the timeout between the current element and the next element.
        * @param {Observable} [other]  Sequence to return in case of a timeout. If not provided, this is set to Observable.throwException().
        * @returns {Observable} The source sequence switching to the other sequence in case of a timeout.
        */
        timeout<TTimeout>(firstTimeout: Observable<TTimeout>, timeoutdurationSelector: (item: T) => Observable<TTimeout>, other?: Observable<T>): Observable<T>;
    }
}


(function () {
    var o: Rx.Observable<string>;
    o.timeout(100);
    o.timeout(100, Rx.Scheduler.default);
    o.timeout(new Date());
    o.timeout(new Date(), Rx.Scheduler.default);
    o.timeout(100, o);
    o.timeout(new Date(), o);
    o.timeout(100, o, Rx.Scheduler.async);
    o.timeout(new Date(), o, Rx.Scheduler.async);

    o.timeout(x => Rx.Observable.interval(1000));
    o.timeout(x => Rx.Observable.interval(1000), Rx.Observable.just('100'));
    o.timeout(Rx.Observable.interval(1000), x => Rx.Observable.interval(1000));
    o.timeout(Rx.Observable.interval(1000), x => Rx.Observable.interval(1000), Rx.Observable.just('100'));
});
