import { Observable } from '../Observable';
import { ReplaySubject } from '../ReplaySubject';
import { Subscription } from '../Subscription';
import { MonoTypeOperatorFunction, SchedulerLike } from '../types';
import { Subscriber } from '../Subscriber';

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
export function shareReplay<T>(
  config: ShareReplayConfig
): MonoTypeOperatorFunction<T>;
export function shareReplay<T>(
  bufferSize?: number,
  windowTime?: number,
  scheduler?: SchedulerLike
): MonoTypeOperatorFunction<T>;
export function shareReplay<T>(
  configOrBufferSize?: ShareReplayConfig | number,
  windowTime?: number,
  scheduler?: SchedulerLike
): MonoTypeOperatorFunction<T> {
  let config: ShareReplayConfig;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    config = configOrBufferSize as ShareReplayConfig;
  } else {
    config = {
      bufferSize: configOrBufferSize as number | undefined,
      windowTime,
      refCount: false,
      scheduler,
    };
  }
  return (source: Observable<T>) => source.lift(shareReplayOperator(config));
}

function shareReplayOperator<T>({
  bufferSize = Number.POSITIVE_INFINITY,
  windowTime = Number.POSITIVE_INFINITY,
  refCount: useRefCount,
  scheduler,
}: ShareReplayConfig) {
  let subject: ReplaySubject<T> | undefined;
  let refCount = 0;
  let subscription: Subscription | undefined;
  let hasError = false;
  let isComplete = false;

  return function shareReplayOperation(
    this: Subscriber<T>,
    source: Observable<T>
  ) {
    refCount++;
    let innerSub: Subscription;
    if (!subject || hasError) {
      hasError = false;
      subject = new ReplaySubject<T>(bufferSize, windowTime, scheduler);
      innerSub = subject.subscribe(this);
      subscription = source.subscribe({
        next(value) {
          subject.next(value);
        },
        error(err) {
          hasError = true;
          subject.error(err);
        },
        complete() {
          isComplete = true;
          subscription = undefined;
          subject.complete();
        },
      });

      // Here we need to check to see if the source synchronously completed. Although
      // we're setting `subscription = undefined` in the completion handler, if the source
      // is synchronous, that will happen *before* subscription is set by the return of
      // the `subscribe` call.
      if (isComplete) {
        subscription = undefined;
      }
    } else {
      innerSub = subject.subscribe(this);
    }

    this.add(() => {
      refCount--;
      innerSub.unsubscribe();
      innerSub = undefined;
      if (subscription && !isComplete && useRefCount && refCount === 0) {
        subscription.unsubscribe();
        subscription = undefined;
        subject = undefined;
      }
    });
  };
}
