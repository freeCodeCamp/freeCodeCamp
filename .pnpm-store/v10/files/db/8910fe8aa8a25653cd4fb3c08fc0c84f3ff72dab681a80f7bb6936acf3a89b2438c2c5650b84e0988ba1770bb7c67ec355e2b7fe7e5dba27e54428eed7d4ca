import { MonoTypeOperatorFunction, SchedulerLike } from '../types';
/**
 * Asynchronously subscribes Observers to this Observable on the specified {@link SchedulerLike}.
 *
 * With `subscribeOn` you can decide what type of scheduler a specific Observable will be using when it is subscribed to.
 *
 * Schedulers control the speed and order of emissions to observers from an Observable stream.
 *
 * ![](subscribeOn.png)
 *
 * ## Example
 * Given the following code:
 * ```javascript
 * import { of, merge } from 'rxjs';
 *
 * const a = of(1, 2, 3, 4);
 * const b = of(5, 6, 7, 8, 9);
 * merge(a, b).subscribe(console.log);
 * ```
 *
 * Both Observable `a` and `b` will emit their values directly and synchronously once they are subscribed to.
 * This will result in the output of `1 2 3 4 5 6 7 8 9`.
 *
 * But if we instead us the `subscribeOn` operator declaring that we want to use the {@link asyncScheduler} for values emited by Observable `a`:
 * ```javascript
 * import { of, merge, asyncScheduler } from 'rxjs';
 * import { subscribeOn } from 'rxjs/operators';
 *
 * const a = of(1, 2, 3, 4).pipe(subscribeOn(asyncScheduler));
 * const b = of(5, 6, 7, 8, 9);
 * merge(a, b).subscribe(console.log);
 * ```
 *
 * The output will instead be `5 6 7 8 9 1 2 3 4`.
 * The reason for this is that Observable `b` emits its values directly and synchronously like before
 * but the emissions from `a` are scheduled on the event loop because we are now using the {@link asyncScheduler} for that specific Observable.
 *
 * @param {SchedulerLike} scheduler - The {@link SchedulerLike} to perform subscription actions on.
 * @return {Observable<T>} The source Observable modified so that its subscriptions happen on the specified {@link SchedulerLike}.
 .
 * @method subscribeOn
 * @owner Observable
 */
export declare function subscribeOn<T>(scheduler: SchedulerLike, delay?: number): MonoTypeOperatorFunction<T>;
