import { Subject, SubjectSubscriber } from '../Subject';
import { Operator } from '../Operator';
import { Observable } from '../Observable';
import { Subscriber } from '../Subscriber';
import { Subscription } from '../Subscription';
import { TeardownLogic } from '../types';
import { refCount as higherOrderRefCount } from '../operators/refCount';

/**
 * @class ConnectableObservable<T>
 */
export class ConnectableObservable<T> extends Observable<T> {

  protected _subject: Subject<T>;
  protected _refCount: number = 0;
  protected _connection: Subscription;
  /** @internal */
  _isComplete = false;

  constructor(public source: Observable<T>,
              protected subjectFactory: () => Subject<T>) {
    super();
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>) {
    return this.getSubject().subscribe(subscriber);
  }

  protected getSubject(): Subject<T> {
    const subject = this._subject;
    if (!subject || subject.isStopped) {
      this._subject = this.subjectFactory();
    }
    return this._subject;
  }

  connect(): Subscription {
    let connection = this._connection;
    if (!connection) {
      this._isComplete = false;
      connection = this._connection = new Subscription();
      connection.add(this.source
        .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
      if (connection.closed) {
        this._connection = null;
        connection = Subscription.EMPTY;
      }
    }
    return connection;
  }

  refCount(): Observable<T> {
    return higherOrderRefCount()(this) as Observable<T>;
  }
}

export const connectableObservableDescriptor: PropertyDescriptorMap = (() => {
  const connectableProto = <any>ConnectableObservable.prototype;
  return {
    operator: { value: null as null },
    _refCount: { value: 0, writable: true },
    _subject: { value: null as null, writable: true },
    _connection: { value: null as null, writable: true },
    _subscribe: { value: connectableProto._subscribe },
    _isComplete: { value: connectableProto._isComplete, writable: true },
    getSubject: { value: connectableProto.getSubject },
    connect: { value: connectableProto.connect },
    refCount: { value: connectableProto.refCount }
  };
})();

class ConnectableSubscriber<T> extends SubjectSubscriber<T> {
  constructor(destination: Subject<T>,
              private connectable: ConnectableObservable<T>) {
    super(destination);
  }
  protected _error(err: any): void {
    this._unsubscribe();
    super._error(err);
  }
  protected _complete(): void {
    this.connectable._isComplete = true;
    this._unsubscribe();
    super._complete();
  }
  protected _unsubscribe() {
    const connectable = <any>this.connectable;
    if (connectable) {
      this.connectable = null;
      const connection = connectable._connection;
      connectable._refCount = 0;
      connectable._subject = null;
      connectable._connection = null;
      if (connection) {
        connection.unsubscribe();
      }
    }
  }
}

class RefCountOperator<T> implements Operator<T, T> {
  constructor(private connectable: ConnectableObservable<T>) {
  }
  call(subscriber: Subscriber<T>, source: any): TeardownLogic {

    const { connectable } = this;
    (<any> connectable)._refCount++;

    const refCounter = new RefCountSubscriber(subscriber, connectable);
    const subscription = source.subscribe(refCounter);

    if (!refCounter.closed) {
      (<any> refCounter).connection = connectable.connect();
    }

    return subscription;
  }
}

class RefCountSubscriber<T> extends Subscriber<T> {

  private connection: Subscription;

  constructor(destination: Subscriber<T>,
              private connectable: ConnectableObservable<T>) {
    super(destination);
  }

  protected _unsubscribe() {

    const { connectable } = this;
    if (!connectable) {
      this.connection = null;
      return;
    }

    this.connectable = null;
    const refCount = (<any> connectable)._refCount;
    if (refCount <= 0) {
      this.connection = null;
      return;
    }

    (<any> connectable)._refCount = refCount - 1;
    if (refCount > 1) {
      this.connection = null;
      return;
    }

    ///
    // Compare the local RefCountSubscriber's connection Subscription to the
    // connection Subscription on the shared ConnectableObservable. In cases
    // where the ConnectableObservable source synchronously emits values, and
    // the RefCountSubscriber's downstream Observers synchronously unsubscribe,
    // execution continues to here before the RefCountOperator has a chance to
    // supply the RefCountSubscriber with the shared connection Subscription.
    // For example:
    // ```
    // range(0, 10).pipe(
    //   publish(),
    //   refCount(),
    //   take(5),
    // ).subscribe();
    // ```
    // In order to account for this case, RefCountSubscriber should only dispose
    // the ConnectableObservable's shared connection Subscription if the
    // connection Subscription exists, *and* either:
    //   a. RefCountSubscriber doesn't have a reference to the shared connection
    //      Subscription yet, or,
    //   b. RefCountSubscriber's connection Subscription reference is identical
    //      to the shared connection Subscription
    ///
    const { connection } = this;
    const sharedConnection = (<any> connectable)._connection;
    this.connection = null;

    if (sharedConnection && (!connection || sharedConnection === connection)) {
      sharedConnection.unsubscribe();
    }
  }
}
