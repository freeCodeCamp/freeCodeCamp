import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { Observable } from '../Observable';
import { Operator } from '../Operator';
import { Subject } from '../Subject';
import { OperatorFunction } from '../types';

/* tslint:disable:max-line-length */
export function groupBy<T, K>(keySelector: (value: T) => K): OperatorFunction<T, GroupedObservable<K, T>>;
export function groupBy<T, K>(keySelector: (value: T) => K, elementSelector: void, durationSelector: (grouped: GroupedObservable<K, T>) => Observable<any>): OperatorFunction<T, GroupedObservable<K, T>>;
export function groupBy<T, K, R>(keySelector: (value: T) => K, elementSelector?: (value: T) => R, durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>): OperatorFunction<T, GroupedObservable<K, R>>;
export function groupBy<T, K, R>(keySelector: (value: T) => K, elementSelector?: (value: T) => R, durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>, subjectSelector?: () => Subject<R>): OperatorFunction<T, GroupedObservable<K, R>>;
/* tslint:enable:max-line-length */

/**
 * Groups the items emitted by an Observable according to a specified criterion,
 * and emits these grouped items as `GroupedObservables`, one
 * {@link GroupedObservable} per group.
 *
 * ![](groupBy.png)
 *
 * When the Observable emits an item, a key is computed for this item with the keySelector function.
 *
 * If a {@link GroupedObservable} for this key exists, this {@link GroupedObservable} emits. Elsewhere, a new
 * {@link GroupedObservable} for this key is created and emits.
 *
 * A {@link GroupedObservable} represents values belonging to the same group represented by a common key. The common
 * key is available as the key field of a {@link GroupedObservable} instance.
 *
 * The elements emitted by {@link GroupedObservable}s are by default the items emitted by the Observable, or elements
 * returned by the elementSelector function.
 *
 * ## Examples
 *
 * ### Group objects by id and return as array
 *
 * ```ts
 * import { of } from 'rxjs';
 * import { mergeMap, groupBy, reduce } from 'rxjs/operators';
 *
 * of(
 *   {id: 1, name: 'JavaScript'},
 *   {id: 2, name: 'Parcel'},
 *   {id: 2, name: 'webpack'},
 *   {id: 1, name: 'TypeScript'},
 *   {id: 3, name: 'TSLint'}
 * ).pipe(
 *   groupBy(p => p.id),
 *   mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], []))),
 * )
 * .subscribe(p => console.log(p));
 *
 * // displays:
 * // [ { id: 1, name: 'JavaScript'},
 * //   { id: 1, name: 'TypeScript'} ]
 * //
 * // [ { id: 2, name: 'Parcel'},
 * //   { id: 2, name: 'webpack'} ]
 * //
 * // [ { id: 3, name: 'TSLint'} ]
 * ```
 *
 * ### Pivot data on the id field
 *
 * ```ts
 * import { of } from 'rxjs';
 * import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';
 *
 * of(
 *   { id: 1, name: 'JavaScript' },
 *   { id: 2, name: 'Parcel' },
 *   { id: 2, name: 'webpack' },
 *   { id: 1, name: 'TypeScript' },
 *   { id: 3, name: 'TSLint' }
 * )
 *   .pipe(
 *     groupBy(p => p.id, p => p.name),
 *     mergeMap(group$ =>
 *       group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
 *     ),
 *     map(arr => ({ id: parseInt(arr[0], 10), values: arr.slice(1) }))
 *  )
 *  .subscribe(p => console.log(p));
 *
 * // displays:
 * // { id: 1, values: [ 'JavaScript', 'TypeScript' ] }
 * // { id: 2, values: [ 'Parcel', 'webpack' ] }
 * // { id: 3, values: [ 'TSLint' ] }
 * ```
 *
 * @param {function(value: T): K} keySelector A function that extracts the key
 * for each item.
 * @param {function(value: T): R} [elementSelector] A function that extracts the
 * return element for each item.
 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
 * A function that returns an Observable to determine how long each group should
 * exist.
 * @return {Observable<GroupedObservable<K,R>>} An Observable that emits
 * GroupedObservables, each of which corresponds to a unique key value and each
 * of which emits those items from the source Observable that share that key
 * value.
 * @method groupBy
 * @owner Observable
 */
export function groupBy<T, K, R>(keySelector: (value: T) => K,
                                 elementSelector?: ((value: T) => R) | void,
                                 durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>,
                                 subjectSelector?: () => Subject<R>): OperatorFunction<T, GroupedObservable<K, R>> {
  return (source: Observable<T>) =>
    source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
}

export interface RefCountSubscription {
  count: number;
  unsubscribe: () => void;
  closed: boolean;
  attemptedToUnsubscribe: boolean;
}

class GroupByOperator<T, K, R> implements Operator<T, GroupedObservable<K, R>> {
  constructor(private keySelector: (value: T) => K,
              private elementSelector?: ((value: T) => R) | void,
              private durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>,
              private subjectSelector?: () => Subject<R>) {
  }

  call(subscriber: Subscriber<GroupedObservable<K, R>>, source: any): any {
    return source.subscribe(new GroupBySubscriber(
      subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector
    ));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class GroupBySubscriber<T, K, R> extends Subscriber<T> implements RefCountSubscription {
  private groups: Map<K, Subject<T | R>> = null;
  public attemptedToUnsubscribe: boolean = false;
  public count: number = 0;

  constructor(destination: Subscriber<GroupedObservable<K, R>>,
              private keySelector: (value: T) => K,
              private elementSelector?: ((value: T) => R) | void,
              private durationSelector?: (grouped: GroupedObservable<K, R>) => Observable<any>,
              private subjectSelector?: () => Subject<R>) {
    super(destination);
  }

  protected _next(value: T): void {
    let key: K;
    try {
      key = this.keySelector(value);
    } catch (err) {
      this.error(err);
      return;
    }

    this._group(value, key);
  }

  private _group(value: T, key: K) {
    let groups = this.groups;

    if (!groups) {
      groups = this.groups = new Map<K, Subject<T | R>>();
    }

    let group = groups.get(key);

    let element: R;
    if (this.elementSelector) {
      try {
        element = this.elementSelector(value);
      } catch (err) {
        this.error(err);
      }
    } else {
      element = <any>value;
    }

    if (!group) {
      group = (this.subjectSelector ? this.subjectSelector() : new Subject<R>()) as Subject<T | R>;
      groups.set(key, group);
      const groupedObservable = new GroupedObservable(key, group, this);
      this.destination.next(groupedObservable);
      if (this.durationSelector) {
        let duration: any;
        try {
          duration = this.durationSelector(new GroupedObservable<K, R>(key, <Subject<R>>group));
        } catch (err) {
          this.error(err);
          return;
        }
        this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
      }
    }

    if (!group.closed) {
      group.next(element);
    }
  }

  protected _error(err: any): void {
    const groups = this.groups;
    if (groups) {
      groups.forEach((group, key) => {
        group.error(err);
      });

      groups.clear();
    }
    this.destination.error(err);
  }

  protected _complete(): void {
    const groups = this.groups;
    if (groups) {
      groups.forEach((group, key) => {
        group.complete();
      });

      groups.clear();
    }
    this.destination.complete();
  }

  removeGroup(key: K): void {
    this.groups.delete(key);
  }

  unsubscribe() {
    if (!this.closed) {
      this.attemptedToUnsubscribe = true;
      if (this.count === 0) {
        super.unsubscribe();
      }
    }
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class GroupDurationSubscriber<K, T> extends Subscriber<T> {
  constructor(private key: K,
              private group: Subject<T>,
              private parent: GroupBySubscriber<any, K, T | any>) {
    super(group);
  }

  protected _next(value: T): void {
    this.complete();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribe() {
    const { parent, key } = this;
    this.key = this.parent = null;
    if (parent) {
      parent.removeGroup(key);
    }
  }
}

/**
 * An Observable representing values belonging to the same group represented by
 * a common key. The values emitted by a GroupedObservable come from the source
 * Observable. The common key is available as the field `key` on a
 * GroupedObservable instance.
 *
 * @class GroupedObservable<K, T>
 */
export class GroupedObservable<K, T> extends Observable<T> {
  /** @deprecated Do not construct this type. Internal use only */
  constructor(public key: K,
              private groupSubject: Subject<T>,
              private refCountSubscription?: RefCountSubscription) {
    super();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>) {
    const subscription = new Subscription();
    const { refCountSubscription, groupSubject } = this;
    if (refCountSubscription && !refCountSubscription.closed) {
      subscription.add(new InnerRefCountSubscription(refCountSubscription));
    }
    subscription.add(groupSubject.subscribe(subscriber));
    return subscription;
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class InnerRefCountSubscription extends Subscription {
  constructor(private parent: RefCountSubscription) {
    super();
    parent.count++;
  }

  unsubscribe() {
    const parent = this.parent;
    if (!parent.closed && !this.closed) {
      super.unsubscribe();
      parent.count -= 1;
      if (parent.count === 0 && parent.attemptedToUnsubscribe) {
        parent.unsubscribe();
      }
    }
  }
}
