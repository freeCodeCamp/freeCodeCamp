import { isFunction } from './util/isFunction';
import { empty as emptyObserver } from './Observer';
import { Observer, PartialObserver, TeardownLogic } from './types';
import { Subscription } from './Subscription';
import { rxSubscriber as rxSubscriberSymbol } from '../internal/symbol/rxSubscriber';
import { config } from './config';
import { hostReportError } from './util/hostReportError';

/**
 * Implements the {@link Observer} interface and extends the
 * {@link Subscription} class. While the {@link Observer} is the public API for
 * consuming the values of an {@link Observable}, all Observers get converted to
 * a Subscriber, in order to provide Subscription-like capabilities such as
 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
 * implementing operators, but it is rarely used as a public API.
 *
 * @class Subscriber<T>
 */
export class Subscriber<T> extends Subscription implements Observer<T> {

  [rxSubscriberSymbol]() { return this; }

  /**
   * A static factory for a Subscriber, given a (potentially partial) definition
   * of an Observer.
   * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
   * @param {function(e: ?any): void} [error] The `error` callback of an
   * Observer.
   * @param {function(): void} [complete] The `complete` callback of an
   * Observer.
   * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
   * Observer represented by the given arguments.
   * @nocollapse
   */
  static create<T>(next?: (x?: T) => void,
                   error?: (e?: any) => void,
                   complete?: () => void): Subscriber<T> {
    const subscriber = new Subscriber(next, error, complete);
    subscriber.syncErrorThrowable = false;
    return subscriber;
  }

  /** @internal */ syncErrorValue: any = null;
  /** @internal */ syncErrorThrown: boolean = false;
  /** @internal */ syncErrorThrowable: boolean = false;

  protected isStopped: boolean = false;
  protected destination: PartialObserver<any> | Subscriber<any>; // this `any` is the escape hatch to erase extra type param (e.g. R)

  /**
   * @param {Observer|function(value: T): void} [destinationOrNext] A partially
   * defined Observer or a `next` callback function.
   * @param {function(e: ?any): void} [error] The `error` callback of an
   * Observer.
   * @param {function(): void} [complete] The `complete` callback of an
   * Observer.
   */
  constructor(destinationOrNext?: PartialObserver<any> | ((value: T) => void),
              error?: (e?: any) => void,
              complete?: () => void) {
    super();

    switch (arguments.length) {
      case 0:
        this.destination = emptyObserver;
        break;
      case 1:
        if (!destinationOrNext) {
          this.destination = emptyObserver;
          break;
        }
        if (typeof destinationOrNext === 'object') {
          if (destinationOrNext instanceof Subscriber) {
            this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
            this.destination = destinationOrNext;
            destinationOrNext.add(this);
          } else {
            this.syncErrorThrowable = true;
            this.destination = new SafeSubscriber<T>(this, <PartialObserver<any>> destinationOrNext);
          }
          break;
        }
      default:
        this.syncErrorThrowable = true;
        this.destination = new SafeSubscriber<T>(this, <((value: T) => void)> destinationOrNext, error, complete);
        break;
    }
  }

  /**
   * The {@link Observer} callback to receive notifications of type `next` from
   * the Observable, with a value. The Observable may call this method 0 or more
   * times.
   * @param {T} [value] The `next` value.
   * @return {void}
   */
  next(value?: T): void {
    if (!this.isStopped) {
      this._next(value);
    }
  }

  /**
   * The {@link Observer} callback to receive notifications of type `error` from
   * the Observable, with an attached `Error`. Notifies the Observer that
   * the Observable has experienced an error condition.
   * @param {any} [err] The `error` exception.
   * @return {void}
   */
  error(err?: any): void {
    if (!this.isStopped) {
      this.isStopped = true;
      this._error(err);
    }
  }

  /**
   * The {@link Observer} callback to receive a valueless notification of type
   * `complete` from the Observable. Notifies the Observer that the Observable
   * has finished sending push-based notifications.
   * @return {void}
   */
  complete(): void {
    if (!this.isStopped) {
      this.isStopped = true;
      this._complete();
    }
  }

  unsubscribe(): void {
    if (this.closed) {
      return;
    }
    this.isStopped = true;
    super.unsubscribe();
  }

  protected _next(value: T): void {
    this.destination.next(value);
  }

  protected _error(err: any): void {
    this.destination.error(err);
    this.unsubscribe();
  }

  protected _complete(): void {
    this.destination.complete();
    this.unsubscribe();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribeAndRecycle(): Subscriber<T> {
    const {  _parentOrParents } = this;
    this._parentOrParents = null;
    this.unsubscribe();
    this.closed = false;
    this.isStopped = false;
    this._parentOrParents = _parentOrParents;
    return this;
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class SafeSubscriber<T> extends Subscriber<T> {

  private _context: any;

  constructor(private _parentSubscriber: Subscriber<T>,
              observerOrNext?: PartialObserver<T> | ((value: T) => void),
              error?: (e?: any) => void,
              complete?: () => void) {
    super();

    let next: ((value: T) => void);
    let context: any = this;

    if (isFunction(observerOrNext)) {
      next = (<((value: T) => void)> observerOrNext);
    } else if (observerOrNext) {
      next = (<PartialObserver<T>> observerOrNext).next;
      error = (<PartialObserver<T>> observerOrNext).error;
      complete = (<PartialObserver<T>> observerOrNext).complete;
      if (observerOrNext !== emptyObserver) {
        context = Object.create(observerOrNext);
        if (isFunction(context.unsubscribe)) {
          this.add(<() => void> context.unsubscribe.bind(context));
        }
        context.unsubscribe = this.unsubscribe.bind(this);
      }
    }

    this._context = context;
    this._next = next;
    this._error = error;
    this._complete = complete;
  }

  next(value?: T): void {
    if (!this.isStopped && this._next) {
      const { _parentSubscriber } = this;
      if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
        this.__tryOrUnsub(this._next, value);
      } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
        this.unsubscribe();
      }
    }
  }

  error(err?: any): void {
    if (!this.isStopped) {
      const { _parentSubscriber } = this;
      const { useDeprecatedSynchronousErrorHandling } = config;
      if (this._error) {
        if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(this._error, err);
          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, this._error, err);
          this.unsubscribe();
        }
      } else if (!_parentSubscriber.syncErrorThrowable) {
        this.unsubscribe();
        if (useDeprecatedSynchronousErrorHandling) {
          throw err;
        }
        hostReportError(err);
      } else {
        if (useDeprecatedSynchronousErrorHandling) {
          _parentSubscriber.syncErrorValue = err;
          _parentSubscriber.syncErrorThrown = true;
        } else {
          hostReportError(err);
        }
        this.unsubscribe();
      }
    }
  }

  complete(): void {
    if (!this.isStopped) {
      const { _parentSubscriber } = this;
      if (this._complete) {
        const wrappedComplete = () => this._complete.call(this._context);

        if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
          this.__tryOrUnsub(wrappedComplete);
          this.unsubscribe();
        } else {
          this.__tryOrSetError(_parentSubscriber, wrappedComplete);
          this.unsubscribe();
        }
      } else {
        this.unsubscribe();
      }
    }
  }

  private __tryOrUnsub(fn: Function, value?: any): void {
    try {
      fn.call(this._context, value);
    } catch (err) {
      this.unsubscribe();
      if (config.useDeprecatedSynchronousErrorHandling) {
        throw err;
      } else {
        hostReportError(err);
      }
    }
  }

  private __tryOrSetError(parent: Subscriber<T>, fn: Function, value?: any): boolean {
    if (!config.useDeprecatedSynchronousErrorHandling) {
      throw new Error('bad call');
    }
    try {
      fn.call(this._context, value);
    } catch (err) {
      if (config.useDeprecatedSynchronousErrorHandling) {
        parent.syncErrorValue = err;
        parent.syncErrorThrown = true;
        return true;
      } else {
        hostReportError(err);
        return true;
      }
    }
    return false;
  }

  /** @internal This is an internal implementation detail, do not use. */
  _unsubscribe(): void {
    const { _parentSubscriber } = this;
    this._context = null;
    this._parentSubscriber = null;
    _parentSubscriber.unsubscribe();
  }
}
