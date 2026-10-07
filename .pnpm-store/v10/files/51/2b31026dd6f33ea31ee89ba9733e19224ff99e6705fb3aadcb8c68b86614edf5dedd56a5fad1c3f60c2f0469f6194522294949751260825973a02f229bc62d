import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { OperatorFunction } from '../types';

/**
 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
 *
 * ![](ignoreElements.png)
 *
 * ## Examples
 * ### Ignores emitted values, reacts to observable's completion.
 * ```ts
 * import { of } from 'rxjs';
 * import { ignoreElements } from 'rxjs/operators';
 *
 * of('you', 'talking', 'to', 'me').pipe(
 *   ignoreElements(),
 * )
 * .subscribe(
 *   word => console.log(word),
 *   err => console.log('error:', err),
 *   () => console.log('the end'),
 * );
 * // result:
 * // 'the end'
 * ```
 * @return {Observable} An empty Observable that only calls `complete`
 * or `error`, based on which one is called by the source Observable.
 * @method ignoreElements
 * @owner Observable
 */
export function ignoreElements(): OperatorFunction<any, never> {
  return function ignoreElementsOperatorFunction(source: Observable<any>) {
    return source.lift(new IgnoreElementsOperator());
  };
}

class IgnoreElementsOperator<T, R> implements Operator<T, R> {
  call(subscriber: Subscriber<R>, source: any): any {
    return source.subscribe(new IgnoreElementsSubscriber(subscriber));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class IgnoreElementsSubscriber<T> extends Subscriber<T> {
  protected _next(unused: T): void {
    // Do nothing
  }
}
