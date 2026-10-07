import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';

import { Observer, OperatorFunction } from '../types';

/**
 * Compares all values of two observables in sequence using an optional comparator function
 * and returns an observable of a single boolean value representing whether or not the two sequences
 * are equal.
 *
 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
 *
 * ![](sequenceEqual.png)
 *
 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
 * observables completes, the operator will wait for the other observable to complete; If the other
 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
 * completes or emits after the other complets, the returned observable will never complete.
 *
 * ## Example
 * figure out if the Konami code matches
 * ```ts
 * import { from, fromEvent } from 'rxjs';
 * import { sequenceEqual, bufferCount, mergeMap, map } from 'rxjs/operators';
 *
 * const codes = from([
 *   'ArrowUp',
 *   'ArrowUp',
 *   'ArrowDown',
 *   'ArrowDown',
 *   'ArrowLeft',
 *   'ArrowRight',
 *   'ArrowLeft',
 *   'ArrowRight',
 *   'KeyB',
 *   'KeyA',
 *   'Enter', // no start key, clearly.
 * ]);
 *
 * const keys = fromEvent(document, 'keyup').pipe(map(e => e.code));
 * const matches = keys.pipe(
 *   bufferCount(11, 1),
 *   mergeMap(
 *     last11 => from(last11).pipe(sequenceEqual(codes)),
 *   ),
 * );
 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
 * ```
 *
 * @see {@link combineLatest}
 * @see {@link zip}
 * @see {@link withLatestFrom}
 *
 * @param {Observable} compareTo The observable sequence to compare the source sequence to.
 * @param {function} [comparator] An optional function to compare each value pair
 * @return {Observable} An Observable of a single boolean value representing whether or not
 * the values emitted by both observables were equal in sequence.
 * @method sequenceEqual
 * @owner Observable
 */
export function sequenceEqual<T>(compareTo: Observable<T>,
                                 comparator?: (a: T, b: T) => boolean): OperatorFunction<T, boolean> {
  return (source: Observable<T>) => source.lift(new SequenceEqualOperator(compareTo, comparator));
}

export class SequenceEqualOperator<T> implements Operator<T, boolean> {
  constructor(private compareTo: Observable<T>,
              private comparator: (a: T, b: T) => boolean) {
  }

  call(subscriber: Subscriber<boolean>, source: any): any {
    return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class SequenceEqualSubscriber<T, R> extends Subscriber<T> {
  private _a: T[] = [];
  private _b: T[] = [];
  private _oneComplete = false;

  constructor(destination: Observer<R>,
              private compareTo: Observable<T>,
              private comparator: (a: T, b: T) => boolean) {
    super(destination);
    (this.destination as Subscription).add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, this)));
  }

  protected _next(value: T): void {
    if (this._oneComplete && this._b.length === 0) {
      this.emit(false);
    } else {
      this._a.push(value);
      this.checkValues();
    }
  }

  public _complete(): void {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }
    this.unsubscribe();
  }

  checkValues() {
    const { _a, _b, comparator } = this;
    while (_a.length > 0 && _b.length > 0) {
      let a = _a.shift();
      let b = _b.shift();
      let areEqual = false;
      try {
        areEqual = comparator ? comparator(a, b) : a === b;
      } catch (e) {
        this.destination.error(e);
      }
      if (!areEqual) {
        this.emit(false);
      }
    }
  }

  emit(value: boolean) {
    const { destination } = this;
    destination.next(value);
    destination.complete();
  }

  nextB(value: T) {
    if (this._oneComplete && this._a.length === 0) {
      this.emit(false);
    } else {
      this._b.push(value);
      this.checkValues();
    }
  }

  completeB() {
    if (this._oneComplete) {
      this.emit(this._a.length === 0 && this._b.length === 0);
    } else {
      this._oneComplete = true;
    }
  }
}

class SequenceEqualCompareToSubscriber<T, R> extends Subscriber<T> {
  constructor(destination: Observer<R>, private parent: SequenceEqualSubscriber<T, R>) {
    super(destination);
  }

  protected _next(value: T): void {
    this.parent.nextB(value);
  }

  protected _error(err: any): void {
    this.parent.error(err);
    this.unsubscribe();
  }

  protected _complete(): void {
    this.parent.completeB();
    this.unsubscribe();
  }
}
