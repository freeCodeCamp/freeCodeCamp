import { Observable } from './Observable';
import { Subscription } from './Subscription';

/**
 * Note: This will add Symbol.observable globally for all TypeScript users,
 * however, we are no longer polyfilling Symbol.observable
 */
declare global {
  interface SymbolConstructor {
    readonly observable: symbol;
  }
}

/** OPERATOR INTERFACES */

export interface UnaryFunction<T, R> { (source: T): R; }

export interface OperatorFunction<T, R> extends UnaryFunction<Observable<T>, Observable<R>> {}

export type FactoryOrValue<T> = T | (() => T);

export interface MonoTypeOperatorFunction<T> extends OperatorFunction<T, T> {}

export interface Timestamp<T> {
  value: T;
  timestamp: number;
}

export interface TimeInterval<T> {
  value: T;
  interval: number;
}

/** SUBSCRIPTION INTERFACES */

export interface Unsubscribable {
  unsubscribe(): void;
}

export type TeardownLogic = Unsubscribable | Function | void;

export interface SubscriptionLike extends Unsubscribable {
  unsubscribe(): void;
  readonly closed: boolean;
}

export type SubscribableOrPromise<T> = Subscribable<T> | Subscribable<never> | PromiseLike<T> | InteropObservable<T>;

/** OBSERVABLE INTERFACES */

export interface Subscribable<T> {
  subscribe(observer?: PartialObserver<T>): Unsubscribable;
  /** @deprecated Use an observer instead of a complete callback */
  subscribe(next: null | undefined, error: null | undefined, complete: () => void): Unsubscribable;
  /** @deprecated Use an observer instead of an error callback */
  subscribe(next: null | undefined, error: (error: any) => void, complete?: () => void): Unsubscribable;
  /** @deprecated Use an observer instead of a complete callback */
  subscribe(next: (value: T) => void, error: null | undefined, complete: () => void): Unsubscribable;
  subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Unsubscribable;
}

export type ObservableInput<T> = SubscribableOrPromise<T> | ArrayLike<T> | Iterable<T>;

/** @deprecated use {@link InteropObservable } */
export type ObservableLike<T> = InteropObservable<T>;

export type InteropObservable<T> = { [Symbol.observable]: () => Subscribable<T>; };

/** OBSERVER INTERFACES */

export interface NextObserver<T> {
  closed?: boolean;
  next: (value: T) => void;
  error?: (err: any) => void;
  complete?: () => void;
}

export interface ErrorObserver<T> {
  closed?: boolean;
  next?: (value: T) => void;
  error: (err: any) => void;
  complete?: () => void;
}

export interface CompletionObserver<T> {
  closed?: boolean;
  next?: (value: T) => void;
  error?: (err: any) => void;
  complete: () => void;
}

export type PartialObserver<T> = NextObserver<T> | ErrorObserver<T> | CompletionObserver<T>;

export interface Observer<T> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: any) => void;
  complete: () => void;
}

/** SCHEDULER INTERFACES */

export interface SchedulerLike {
  now(): number;
  schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay?: number, state?: T): Subscription;
}
export interface SchedulerAction<T> extends Subscription {
  schedule(state?: T, delay?: number): Subscription;
}

export type ObservedValueOf<O> = O extends ObservableInput<infer T> ? T : never;

export type ObservedValuesFromArray<X> = X extends Array<ObservableInput<infer T>> ? T : never;
