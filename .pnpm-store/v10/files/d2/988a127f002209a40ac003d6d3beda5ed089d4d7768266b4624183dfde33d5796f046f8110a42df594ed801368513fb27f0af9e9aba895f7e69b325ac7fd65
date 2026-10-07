import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { OperatorFunction, TeardownLogic } from '../types';

/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * ![](bufferCount.png)
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * ## Examples
 *
 * Emit the last two click events as an array
 *
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { bufferCount } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const buffered = clicks.pipe(bufferCount(2));
 * buffered.subscribe(x => console.log(x));
 * ```
 *
 * On every click, emit the last two click events as an array
 *
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { bufferCount } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const buffered = clicks.pipe(bufferCount(2, 1));
 * buffered.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
export function bufferCount<T>(bufferSize: number, startBufferEvery: number = null): OperatorFunction<T, T[]> {
  return function bufferCountOperatorFunction(source: Observable<T>) {
    return source.lift(new BufferCountOperator<T>(bufferSize, startBufferEvery));
  };
}

class BufferCountOperator<T> implements Operator<T, T[]> {
  private subscriberClass: any;

  constructor(private bufferSize: number, private startBufferEvery: number) {
    if (!startBufferEvery || bufferSize === startBufferEvery) {
      this.subscriberClass = BufferCountSubscriber;
    } else {
      this.subscriberClass = BufferSkipCountSubscriber;
    }
  }

  call(subscriber: Subscriber<T[]>, source: any): TeardownLogic {
    return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class BufferCountSubscriber<T> extends Subscriber<T> {
  private buffer: T[] = [];

  constructor(destination: Subscriber<T[]>, private bufferSize: number) {
    super(destination);
  }

  protected _next(value: T): void {
    const buffer = this.buffer;

    buffer.push(value);

    if (buffer.length == this.bufferSize) {
      this.destination.next(buffer);
      this.buffer = [];
    }
  }

  protected _complete(): void {
    const buffer = this.buffer;
    if (buffer.length > 0) {
      this.destination.next(buffer);
    }
    super._complete();
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class BufferSkipCountSubscriber<T> extends Subscriber<T> {
  private buffers: Array<T[]> = [];
  private count: number = 0;

  constructor(destination: Subscriber<T[]>, private bufferSize: number, private startBufferEvery: number) {
    super(destination);
  }

  protected _next(value: T): void {
    const { bufferSize, startBufferEvery, buffers, count } = this;

    this.count++;
    if (count % startBufferEvery === 0) {
      buffers.push([]);
    }

    for (let i = buffers.length; i--; ) {
      const buffer = buffers[i];
      buffer.push(value);
      if (buffer.length === bufferSize) {
        buffers.splice(i, 1);
        this.destination.next(buffer);
      }
    }
  }

  protected _complete(): void {
    const { buffers, destination } = this;

    while (buffers.length > 0) {
      let buffer = buffers.shift();
      if (buffer.length > 0) {
        destination.next(buffer);
      }
    }
    super._complete();
  }

}
