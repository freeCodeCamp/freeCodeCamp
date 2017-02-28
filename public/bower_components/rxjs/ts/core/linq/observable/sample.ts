/// <reference path="../../observable.ts"/>
/// <reference path="../../concurrency/scheduler.ts" />
module Rx {
    export interface Observable<T> {
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        sample(intervalOrSampler: number, scheduler?: IScheduler): Observable<T>;
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        sample<TSample>(sampler: Observable<TSample>, scheduler?: IScheduler): Observable<T>;
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        throttleLatest(interval: number, scheduler?: IScheduler): Observable<T>;
        /**
        *  Samples the observable sequence at each interval.
        *
        * @example
        *  1 - res = source.sample(sampleObservable); // Sampler tick sequence
        *  2 - res = source.sample(5000); // 5 seconds
        *  2 - res = source.sample(5000, Rx.Scheduler.timeout); // 5 seconds
        *
        * @param {Mixed} intervalOrSampler Interval at which to sample (specified as an integer denoting milliseconds) or Sampler Observable.
        * @param {Scheduler} [scheduler]  Scheduler to run the sampling timer on. If not specified, the timeout scheduler is used.
        * @returns {Observable} Sampled observable sequence.
        */
        throttleLatest<TSample>(sampler: Observable<TSample>, scheduler?: IScheduler): Observable<T>;
    }
}


(function() {
    var o: Rx.Observable<number>;
    o.sample(100);
    o.sample(100, Rx.Scheduler.async);
    o.sample(Rx.Observable.interval(100));
    o.sample(Rx.Observable.interval(100), Rx.Scheduler.async);

    o.throttleLatest(100);
    o.throttleLatest(100, Rx.Scheduler.async);
    o.throttleLatest(Rx.Observable.interval(100));
    o.throttleLatest(Rx.Observable.interval(100), Rx.Scheduler.async);
});
