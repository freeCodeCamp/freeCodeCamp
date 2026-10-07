import { Operator } from '../Operator';
import { Subscriber } from '../Subscriber';
import { Observable } from '../Observable';
import { Subject } from '../Subject';
import { Subscription } from '../Subscription';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
import { subscribeToResult } from '../util/subscribeToResult';
import { OperatorFunction } from '../types';

/**
 * Branch out the source Observable values as a nested Observable starting from
 * an emission from `openings` and ending when the output of `closingSelector`
 * emits.
 *
 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
 * Observable instead of an array.</span>
 *
 * ![](windowToggle.png)
 *
 * Returns an Observable that emits windows of items it collects from the source
 * Observable. The output Observable emits windows that contain those items
 * emitted by the source Observable between the time when the `openings`
 * Observable emits an item and when the Observable returned by
 * `closingSelector` emits an item.
 *
 * ## Example
 * Every other second, emit the click events from the next 500ms
 * ```ts
 * import { fromEvent, interval, EMPTY } from 'rxjs';
 * import { windowToggle, mergeAll } from 'rxjs/operators';
 *
 * const clicks = fromEvent(document, 'click');
 * const openings = interval(1000);
 * const result = clicks.pipe(
 *   windowToggle(openings, i => i % 2 ? interval(500) : EMPTY),
 *   mergeAll()
 * );
 * result.subscribe(x => console.log(x));
 * ```
 *
 * @see {@link window}
 * @see {@link windowCount}
 * @see {@link windowTime}
 * @see {@link windowWhen}
 * @see {@link bufferToggle}
 *
 * @param {Observable<O>} openings An observable of notifications to start new
 * windows.
 * @param {function(value: O): Observable} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns an Observable,
 * which, when it emits (either `next` or `complete`), signals that the
 * associated window should complete.
 * @return {Observable<Observable<T>>} An observable of windows, which in turn
 * are Observables.
 * @method windowToggle
 * @owner Observable
 */
export function windowToggle<T, O>(openings: Observable<O>,
                                   closingSelector: (openValue: O) => Observable<any>): OperatorFunction<T, Observable<T>> {
  return (source: Observable<T>) => source.lift(new WindowToggleOperator<T, O>(openings, closingSelector));
}

class WindowToggleOperator<T, O> implements Operator<T, Observable<T>> {

  constructor(private openings: Observable<O>,
              private closingSelector: (openValue: O) => Observable<any>) {
  }

  call(subscriber: Subscriber<Observable<T>>, source: any): any {
    return source.subscribe(new WindowToggleSubscriber(
      subscriber, this.openings, this.closingSelector
    ));
  }
}

interface WindowContext<T> {
  window: Subject<T>;
  subscription: Subscription;
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class WindowToggleSubscriber<T, O> extends OuterSubscriber<T, any> {
  private contexts: WindowContext<T>[] = [];
  private openSubscription: Subscription;

  constructor(destination: Subscriber<Observable<T>>,
              private openings: Observable<O>,
              private closingSelector: (openValue: O) => Observable<any>) {
    super(destination);
    this.add(this.openSubscription = subscribeToResult(this, openings, openings as any));
  }

  protected _next(value: T) {
    const { contexts } = this;
    if (contexts) {
      const len = contexts.length;
      for (let i = 0; i < len; i++) {
        contexts[i].window.next(value);
      }
    }
  }

  protected _error(err: any) {

    const { contexts } = this;
    this.contexts = null;

    if (contexts) {
      const len = contexts.length;
      let index = -1;

      while (++index < len) {
        const context = contexts[index];
        context.window.error(err);
        context.subscription.unsubscribe();
      }
    }

    super._error(err);
  }

  protected _complete() {
    const { contexts } = this;
    this.contexts = null;
    if (contexts) {
      const len = contexts.length;
      let index = -1;
      while (++index < len) {
        const context = contexts[index];
        context.window.complete();
        context.subscription.unsubscribe();
      }
    }
    super._complete();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _unsubscribe() {
    const { contexts } = this;
    this.contexts = null;
    if (contexts) {
      const len = contexts.length;
      let index = -1;
      while (++index < len) {
        const context = contexts[index];
        context.window.unsubscribe();
        context.subscription.unsubscribe();
      }
    }
  }

  notifyNext(outerValue: any, innerValue: any,
             outerIndex: number, innerIndex: number,
             innerSub: InnerSubscriber<T, any>): void {

    if (outerValue === this.openings) {
      let closingNotifier;
      try {
        const { closingSelector } = this;
        closingNotifier = closingSelector(innerValue);
      } catch (e) {
        return this.error(e);
      }

      const window = new Subject<T>();
      const subscription = new Subscription();
      const context = { window, subscription };
      this.contexts.push(context);
      const innerSubscription = subscribeToResult(this, closingNotifier, context as any);

      if (innerSubscription.closed) {
        this.closeWindow(this.contexts.length - 1);
      } else {
        (<any>innerSubscription).context = context;
        subscription.add(innerSubscription);
      }

      this.destination.next(window);
    } else {
      this.closeWindow(this.contexts.indexOf(outerValue));
    }
  }

  notifyError(err: any): void {
    this.error(err);
  }

  notifyComplete(inner: Subscription): void {
    if (inner !== this.openSubscription) {
      this.closeWindow(this.contexts.indexOf((<any> inner).context));
    }
  }

  private closeWindow(index: number): void {
    if (index === -1) {
      return;
    }

    const { contexts } = this;
    const context = contexts[index];
    const { window, subscription } = context;
    contexts.splice(index, 1);
    window.complete();
    subscription.unsubscribe();
  }
}
