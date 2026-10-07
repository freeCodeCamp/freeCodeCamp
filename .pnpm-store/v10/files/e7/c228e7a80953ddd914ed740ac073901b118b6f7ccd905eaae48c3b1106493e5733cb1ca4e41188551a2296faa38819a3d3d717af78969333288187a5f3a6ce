import { Observable } from '../Observable';
import { fromArray } from './fromArray';
import { isArray } from '../util/isArray';
import { Operator } from '../Operator';
import { ObservableInput, PartialObserver, ObservedValueOf } from '../types';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { iterator as Symbol_iterator } from '../../internal/symbol/iterator';
import { SimpleOuterSubscriber, SimpleInnerSubscriber, innerSubscribe } from '../innerSubscribe';

/* tslint:disable:max-line-length */
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<O1 extends ObservableInput<any>, R>(v1: O1, resultSelector: (v1: ObservedValueOf<O1>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, R>(v1: O1, v2: O2, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>, R>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6, resultSelector: (v1: ObservedValueOf<O1>, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>, v6: ObservedValueOf<O6>) => R): Observable<R>;

export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>>(v1: O1, v2: O2): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>]>;
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>;
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>]>;
export function zip<O1 extends ObservableInput<any>, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(v1: O1, v2: O2, v3: O3, v4: O4, v5: O5, v6: O6): Observable<[ObservedValueOf<O1>, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>, ObservedValueOf<O6>]>;

export function zip<O extends ObservableInput<any>>(array: O[]): Observable<ObservedValueOf<O>[]>;
export function zip<R>(array: ObservableInput<any>[]): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<O extends ObservableInput<any>, R>(array: O[], resultSelector: (...values: ObservedValueOf<O>[]) => R): Observable<R>;
/** @deprecated resultSelector is no longer supported, pipe to map instead */
export function zip<R>(array: ObservableInput<any>[], resultSelector: (...values: any[]) => R): Observable<R>;

export function zip<O extends ObservableInput<any>>(...observables: O[]): Observable<ObservedValueOf<O>[]>;
export function zip<O extends ObservableInput<any>, R>(...observables: Array<O | ((...values: ObservedValueOf<O>[]) => R)>): Observable<R>;
export function zip<R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): Observable<R>;
/* tslint:enable:max-line-length */

/**
 * Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
 * of its input Observables.
 *
 * If the last parameter is a function, this function is used to compute the created value from the input values.
 * Otherwise, an array of the input values is returned.
 *
 * ## Example
 * Combine age and name from different sources
 * ```ts
 * import { zip, of } from 'rxjs';
 * import { map } from 'rxjs/operators';
 *
 * let age$ = of<number>(27, 25, 29);
 * let name$ = of<string>('Foo', 'Bar', 'Beer');
 * let isDev$ = of<boolean>(true, true, false);
 *
 * zip(age$, name$, isDev$).pipe(
 *   map(([age, name, isDev]) => ({ age, name, isDev })),
 * )
 * .subscribe(x => console.log(x));
 *
 * // outputs
 * // { age: 27, name: 'Foo', isDev: true }
 * // { age: 25, name: 'Bar', isDev: true }
 * // { age: 29, name: 'Beer', isDev: false }
 * ```
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
export function zip<O extends ObservableInput<any>, R>(
  ...observables: Array<O | ((...values: ObservedValueOf<O>[]) => R)>
): Observable<ObservedValueOf<O>[]|R> {
  const resultSelector = <((...ys: Array<any>) => R)> observables[observables.length - 1];
  if (typeof resultSelector === 'function') {
    observables.pop();
  }
  return fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}

export class ZipOperator<T, R> implements Operator<T, R> {

  resultSelector?: (...values: Array<any>) => R;

  constructor(resultSelector?: (...values: Array<any>) => R) {
    this.resultSelector = resultSelector;
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class ZipSubscriber<T, R> extends Subscriber<T> {
  private iterators: LookAheadIterator<any>[] = [];
  private active = 0;

  constructor(destination: Subscriber<R>,
              private resultSelector?: (...values: Array<any>) => R,
              values: any = Object.create(null)) {
    super(destination);
    this.resultSelector = (typeof resultSelector === 'function') ? resultSelector : undefined;
  }

  protected _next(value: any) {
    const iterators = this.iterators;
    if (isArray(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[Symbol_iterator] === 'function') {
      iterators.push(new StaticIterator(value[Symbol_iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  }

  protected _complete() {
    const iterators = this.iterators;
    const len = iterators.length;

    this.unsubscribe();

    if (len === 0) {
      this.destination.complete!();
      return;
    }

    this.active = len;
    for (let i = 0; i < len; i++) {
      let iterator: ZipBufferIterator<any, any> = <any>iterators[i];
      if (iterator.stillUnsubscribed) {
        const destination = this.destination as Subscription;
        destination.add(iterator.subscribe());
      } else {
        this.active--; // not an observable
      }
    }
  }

  notifyInactive() {
    this.active--;
    if (this.active === 0) {
      this.destination.complete!();
    }
  }

  checkIterators() {
    const iterators = this.iterators;
    const len = iterators.length;
    const destination = this.destination;

    // abort if not all of them have values
    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];
      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    let shouldComplete = false;
    const args: any[] = [];
    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];
      let result = iterator.next();

      // check to see if it's completed now that you've gotten
      // the next value.
      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete!();
        return;
      }

      args.push(result.value);
    }

    if (this.resultSelector) {
      this._tryresultSelector(args);
    } else {
      destination.next!(args);
    }

    if (shouldComplete) {
      destination.complete!();
    }
  }

  protected _tryresultSelector(args: any[]) {
    let result: any;
    try {
      result = this.resultSelector!.apply(this, args);
    } catch (err) {
      this.destination.error!(err);
      return;
    }
    this.destination.next!(result);
  }
}

interface LookAheadIterator<T> extends Iterator<T> {
  hasValue(): boolean;
  hasCompleted(): boolean;
}

class StaticIterator<T> implements LookAheadIterator<T> {
  private nextResult: IteratorResult<T>;

  constructor(private iterator: Iterator<T>) {
    this.nextResult = iterator.next();
  }

  hasValue() {
    return true;
  }

  next(): IteratorResult<T> {
    const result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  }

  hasCompleted(): boolean {
    const nextResult = this.nextResult;
    return Boolean(nextResult && nextResult.done);
  }
}

class StaticArrayIterator<T> implements LookAheadIterator<T> {
  private index = 0;
  private length = 0;

  constructor(private array: T[]) {
    this.length = array.length;
  }

  [Symbol_iterator]() {
    return this;
  }

  next(value?: any): IteratorResult<T> {
    const i = this.index++;
    const array = this.array;
    return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
  }

  hasValue() {
    return this.array.length > this.index;
  }

  hasCompleted() {
    return this.array.length === this.index;
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class ZipBufferIterator<T, R> extends SimpleOuterSubscriber<T, R> implements LookAheadIterator<T> {
  stillUnsubscribed = true;
  buffer: T[] = [];
  isComplete = false;

  constructor(destination: PartialObserver<T>,
              private parent: ZipSubscriber<T, R>,
              private observable: Observable<T>) {
    super(destination);
  }

  [Symbol_iterator]() {
    return this;
  }

  // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
  //    this is legit because `next()` will never be called by a subscription in this case.
  next(): IteratorResult<T> {
    const buffer = this.buffer;
    if (buffer.length === 0 && this.isComplete) {
      return { value: null, done: true };
    } else {
      return { value: buffer.shift()!, done: false };
    }
  }

  hasValue() {
    return this.buffer.length > 0;
  }

  hasCompleted() {
    return this.buffer.length === 0 && this.isComplete;
  }

  notifyComplete() {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete!();
    }
  }

  notifyNext(innerValue: any): void {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  }

  subscribe() {
    return innerSubscribe(this.observable, new SimpleInnerSubscriber(this));
  }
}
