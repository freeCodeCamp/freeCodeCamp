import { MonoTypeOperatorFunction, SchedulerLike } from '../types';
export interface ShareReplayConfig {
    bufferSize?: number;
    windowTime?: number;
    refCount: boolean;
    scheduler?: SchedulerLike;
}
/**
 * Share source and replay specified number of emissions on subscription.
 *
 * This operator is a specialization of `replay` that connects to a source observable
 * and multicasts through a `ReplaySubject` constructed with the specified arguments.
 * A successfully completed source will stay cached in the `shareReplayed observable` forever,
 * but an errored source can be retried.
 *
 * ## Why use shareReplay?
 * You generally want to use `shareReplay` when you have side-effects or taxing computations
 * that you do not wish to be executed amongst multiple subscribers.
 * It may also be valuable in situations where you know you will have late subscribers to
 * a stream that need access to previously emitted values.
 * This ability to replay values on subscription is what differentiates {@link share} and `shareReplay`.
 *
 * ![](shareReplay.png)
 *
 * ## Example
 * ```ts
 * import { interval } from 'rxjs';
 * import { shareReplay, take } from 'rxjs/operators';
 *
 * const obs$ = interval(1000);
 * const shared$ = obs$.pipe(
 *   take(4),
 *   shareReplay(3)
 * );
 * shared$.subscribe(x => console.log('source A: ', x));
 * shared$.subscribe(y => console.log('source B: ', y));
 *
 * ```
 *
 * @see {@link publish}
 * @see {@link share}
 * @see {@link publishReplay}
 *
 * @param {Number} [bufferSize=Number.POSITIVE_INFINITY] Maximum element count of the replay buffer.
 * @param {Number} [windowTime=Number.POSITIVE_INFINITY] Maximum time length of the replay buffer in milliseconds.
 * @param {Scheduler} [scheduler] Scheduler where connected observers within the selector function
 * will be invoked on.
 * @return {Observable} An observable sequence that contains the elements of a sequence produced
 * by multicasting the source sequence within a selector function.
 * @method shareReplay
 * @owner Observable
 */
export declare function shareReplay<T>(config: ShareReplayConfig): MonoTypeOperatorFunction<T>;
export declare function shareReplay<T>(bufferSize?: number, windowTime?: number, scheduler?: SchedulerLike): MonoTypeOperatorFunction<T>;
