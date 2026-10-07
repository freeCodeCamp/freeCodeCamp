import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
import { subscribeToResult } from '../util/subscribeToResult';
import { ObservableInput, OperatorFunction, ObservedValueOf } from '../types';

/* tslint:disable:max-line-length */
export function withLatestFrom<T, R>(project: (v1: T) => R): OperatorFunction<T, R>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, R>(source2: O2, project: (v1: T, v2: ObservedValueOf<O2>) => R): OperatorFunction<T, R>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, R>(v2: O2, v3: O3, project: (v1: T, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>) => R): OperatorFunction<T, R>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, R>(v2: O2, v3: O3, v4: O4, project: (v1: T, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>) => R): OperatorFunction<T, R>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, R>(v2: O2, v3: O3, v4: O4, v5: O5, project: (v1: T, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>) => R): OperatorFunction<T, R>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>, R>(v2: O2, v3: O3, v4: O4, v5: O5, v6: O6, project: (v1: T, v2: ObservedValueOf<O2>, v3: ObservedValueOf<O3>, v4: ObservedValueOf<O4>, v5: ObservedValueOf<O5>, v6: ObservedValueOf<O6>) => R): OperatorFunction<T, R>;
export function withLatestFrom<T, O2 extends ObservableInput<any>>(source2: O2): OperatorFunction<T, [T, ObservedValueOf<O2>]>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>>(v2: O2, v3: O3): OperatorFunction<T, [T, ObservedValueOf<O2>, ObservedValueOf<O3>]>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>>(v2: O2, v3: O3, v4: O4): OperatorFunction<T, [T, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>]>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>>(v2: O2, v3: O3, v4: O4, v5: O5): OperatorFunction<T, [T, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>]>;
export function withLatestFrom<T, O2 extends ObservableInput<any>, O3 extends ObservableInput<any>, O4 extends ObservableInput<any>, O5 extends ObservableInput<any>, O6 extends ObservableInput<any>>(v2: O2, v3: O3, v4: O4, v5: O5, v6: O6): OperatorFunction<T, [T, ObservedValueOf<O2>, ObservedValueOf<O3>, ObservedValueOf<O4>, ObservedValueOf<O5>, ObservedValueOf<O6>]>;
export function withLatestFrom<T, R>(...observables: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): OperatorFunction<T, R>;
export function withLatestFrom<T, R>(array: ObservableInput<any>[]): OperatorFunction<T, R>;
export function withLatestFrom<T, R>(array: ObservableInput<any>[], project: (...values: Array<any>) => R): OperatorFunction<T, R>;

/* tslint:enable:max-line-length */

/**
 * Combines the source Observable with other Observables to create an Observable
 * whose values are calculated from the latest values of each, only when the
 * source emits.
 *
 * <span class="informal">Whenever the source Observable emits a value, it
 * computes a formula using that value plus the latest values from other input
 * Observables, then emits the output of that formula.</span>
 *
 * ![](withLatestFrom.png)
 *
 * `withLatestFrom` combines each value from the source Observable (the
 * instance) with the latest values from the other input Observables only when
 * the source emits a value, optionally using a `project` function to determine
 * the value to be emitted on the output Observable. All input Observables must
 * emit at least one value before the output Observable will emit a value.
 *
 * ## Example
 * On every click event, emit an array with the latest timer event plus the click event
 * ```ts
 * import { fromEvent, interval } from 'rxjs';
 * import { withLatestFrom } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const timer = interval(1000);
 * const result = clicks.pipe(withLatestFrom(timer));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link combineLatest}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {Function} [project] Projection function for combining values
 * together. Receives all values in order of the Observables passed, where the
 * first parameter is a value from the source Observable. (e.g.
 * `a.pipe(withLatestFrom(b, c), map(([a1, b1, c1]) => a1 + b1 + c1))`). If this is not
 * passed, arrays will be emitted on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method withLatestFrom
 * @owner Observable
 */
export function withLatestFrom<T, R>(...args: Array<ObservableInput<any> | ((...values: Array<any>) => R)>): OperatorFunction<T, R> {
  return (source: Observable<T>) => {
    let project: any;
    if (typeof args[args.length - 1] === 'function') {
      project = args.pop();
    }
    const observables = <Observable<any>[]>args;
    return source.lift(new WithLatestFromOperator(observables, project));
  };
}

class WithLatestFromOperator<T, R> implements Operator<T, R> {
  constructor(private observables: Observable<any>[],
              private project?: (...values: any[]) => Observable<R>) {
  }

  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class WithLatestFromSubscriber<T, R> extends OuterSubscriber<T, R> {
  private values: any[];
  private toRespond: number[] = [];

  constructor(destination: Subscriber<R>,
              private observables: Observable<any>[],
              private project?: (...values: any[]) => Observable<R>) {
    super(destination);
    const len = observables.length;
    this.values = new Array(len);

    for (let i = 0; i < len; i++) {
      this.toRespond.push(i);
    }

    for (let i = 0; i < len; i++) {
      let observable = observables[i];
      this.add(subscribeToResult<T, R>(this, observable, undefined, i));
    }
  }

  notifyNext(_outerValue: T, innerValue: R,
             outerIndex: number): void {
    this.values[outerIndex] = innerValue;
    const toRespond = this.toRespond;
    if (toRespond.length > 0) {
      const found = toRespond.indexOf(outerIndex);
      if (found !== -1) {
        toRespond.splice(found, 1);
      }
    }
  }

  notifyComplete() {
    // noop
  }

  protected _next(value: T) {
    if (this.toRespond.length === 0) {
      const args = [value, ...this.values];
      if (this.project) {
        this._tryProject(args);
      } else {
        this.destination.next!(args);
      }
    }
  }

  private _tryProject(args: any[]) {
    let result: any;
    try {
      result = this.project!.apply(this, args);
    } catch (err) {
      this.destination.error!(err);
      return;
    }
    this.destination.next!(result);
  }
}
