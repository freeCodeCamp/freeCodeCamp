import { Subscriber } from './Subscriber';
import { OuterSubscriber } from './OuterSubscriber';

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class InnerSubscriber<T, R> extends Subscriber<R> {
  private index = 0;

  constructor(private parent: OuterSubscriber<T, R>, public outerValue: T, public outerIndex: number) {
    super();
  }

  protected _next(value: R): void {
    this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
  }

  protected _error(error: any): void {
    this.parent.notifyError(error, this);
    this.unsubscribe();
  }

  protected _complete(): void {
    this.parent.notifyComplete(this);
    this.unsubscribe();
  }
}
