import {Observable} from '../Observable';
import {Operator} from '../Operator';
import {Subscriber} from '../Subscriber';
import {OperatorFunction} from '../types';

export function find<T, S extends T>(predicate: (value: T, index: number, source: Observable<T>) => value is S,
                                     thisArg?: any): OperatorFunction<T, S | undefined>;
export function find<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean,
                        thisArg?: any): OperatorFunction<T, T | undefined>;
/**
 * Emits only the first value emitted by the source Observable that meets some
 * condition.
 *
 * <span class="informal">Finds the first value that passes some test and emits
 * that.</span>
 *
 * ![](find.png)
 *
 * `find` searches for the first item in the source Observable that matches the
 * specified condition embodied by the `predicate`, and returns the first
 * occurrence in the source. Unlike {@link first}, the `predicate` is required
 * in `find`, and does not emit an error if a valid value is not found.
 *
 * ## Example
 * Find and emit the first click that happens on a DIV element
 * ```ts
 * import { fromEvent } from 'rxjs';
 * import { find } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const result = clicks.pipe(find(ev => ev.target.tagName === 'DIV'));
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link filter}
 * @see {@link first}
 * @see {@link findIndex}
 * @see {@link take}
 *
 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
 * A function called with each item to test for condition matching.
 * @param {any} [thisArg] An optional argument to determine the value of `this`
 * in the `predicate` function.
 * @return {Observable<T>} An Observable of the first item that matches the
 * condition.
 * @method find
 * @owner Observable
 */
export function find<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean,
                        thisArg?: any): OperatorFunction<T, T | undefined> {
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate is not a function');
  }
  return (source: Observable<T>) => source.lift(new FindValueOperator(predicate, source, false, thisArg)) as Observable<T | undefined>;
}

export class FindValueOperator<T> implements Operator<T, T | number | undefined> {
  constructor(private predicate: (value: T, index: number, source: Observable<T>) => boolean,
              private source: Observable<T>,
              private yieldIndex: boolean,
              private thisArg?: any) {
  }

  call(observer: Subscriber<T>, source: any): any {
    return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class FindValueSubscriber<T> extends Subscriber<T> {
  private index: number = 0;

  constructor(destination: Subscriber<T>,
              private predicate: (value: T, index: number, source: Observable<T>) => boolean,
              private source: Observable<T>,
              private yieldIndex: boolean,
              private thisArg?: any) {
    super(destination);
  }

  private notifyComplete(value: any): void {
    const destination = this.destination;

    destination.next(value);
    destination.complete();
    this.unsubscribe();
  }

  protected _next(value: T): void {
    const {predicate, thisArg} = this;
    const index = this.index++;
    try {
      const result = predicate.call(thisArg || this, value, index, this.source);
      if (result) {
        this.notifyComplete(this.yieldIndex ? index : value);
      }
    } catch (err) {
      this.destination.error(err);
    }
  }

  protected _complete(): void {
    this.notifyComplete(this.yieldIndex ? -1 : undefined);
  }
}
