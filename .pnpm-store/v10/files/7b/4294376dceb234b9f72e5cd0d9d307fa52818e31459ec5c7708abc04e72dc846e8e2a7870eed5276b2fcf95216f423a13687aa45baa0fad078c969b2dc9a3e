import { Subject, AnonymousSubject } from '../../Subject';
import { Subscriber } from '../../Subscriber';
import { Observable } from '../../Observable';
import { Subscription } from '../../Subscription';
import { Operator } from '../../Operator';
import { ReplaySubject } from '../../ReplaySubject';
import { Observer, NextObserver } from '../../types';

/**
 * WebSocketSubjectConfig is a plain Object that allows us to make our
 * webSocket configurable.
 *
 * <span class="informal">Provides flexibility to {@link webSocket}</span>
 *
 * It defines a set of properties to provide custom behavior in specific
 * moments of the socket's lifecycle. When the connection opens we can
 * use `openObserver`, when the connection is closed `closeObserver`, if we
 * are interested in listening for data comming from server: `deserializer`,
 * which allows us to customize the deserialization strategy of data before passing it
 * to the socket client. By default `deserializer` is going to apply `JSON.parse` to each message comming
 * from the Server.
 *
 * ## Example
 * **deserializer**, the default for this property is `JSON.parse` but since there are just two options
 * for incomming data, either be text or binarydata. We can apply a custom deserialization strategy
 * or just simply skip the default behaviour.
 * ```ts
 * import { webSocket } from 'rxjs/webSocket';
 *
 * const wsSubject = webSocket({
 *     url: 'ws://localhost:8081',
 * //Apply any transformation of your choice.
 *     deserializer: ({data}) => data
 * });
 *
 * wsSubject.subscribe(console.log);
 *
 * // Let's suppose we have this on the Server: ws.send("This is a msg from the server")
 * //output
 * //
 * // This is a msg from the server
 * ```
 *
 * **serializer** allows us tom apply custom serialization strategy but for the outgoing messages
 * ```ts
 * import { webSocket } from 'rxjs/webSocket';
 *
 * const wsSubject = webSocket({
 *     url: 'ws://localhost:8081',
 * //Apply any transformation of your choice.
 *     serializer: msg => JSON.stringify({channel: "webDevelopment", msg: msg})
 * });
 *
 * wsSubject.subscribe(() => subject.next("msg to the server"));
 *
 * // Let's suppose we have this on the Server: ws.send("This is a msg from the server")
 * //output
 * //
 * // {"channel":"webDevelopment","msg":"msg to the server"}
 * ```
 *
 * **closeObserver** allows us to set a custom error when an error raise up.
 * ```ts
 * import { webSocket } from 'rxjs/webSocket';
 *
 * const wsSubject = webSocket({
 *     url: 'ws://localhost:8081',
 *     closeObserver: {
        next(closeEvent) {
            const customError = { code: 6666, reason: "Custom evil reason" }
            console.log(`code: ${customError.code}, reason: ${customError.reason}`);
        }
    }
 * });
 *
 * //output
 * // code: 6666, reason: Custom evil reason
 * ```
 *
 * **openObserver**, Let's say we need to make some kind of init task before sending/receiving msgs to the
 * webSocket or sending notification that the connection was successful, this is when
 * openObserver is usefull for.
 * ```ts
 * import { webSocket } from 'rxjs/webSocket';
 *
 * const wsSubject = webSocket({
 *     url: 'ws://localhost:8081',
 *     openObserver: {
 *         next: () => {
 *             console.log('connetion ok');
 *         }
 *     },
 * });
 *
 * //output
 * // connetion ok`
 * ```
 * */

export interface WebSocketSubjectConfig<T> {
  /** The url of the socket server to connect to */
  url: string;
  /** The protocol to use to connect */
  protocol?: string | Array<string>;
  /** @deprecated use {@link deserializer} */
  resultSelector?: (e: MessageEvent) => T;
  /**
   * A serializer used to create messages from passed values before the
   * messages are sent to the server. Defaults to JSON.stringify.
   */
  serializer?: (value: T) => WebSocketMessage;
  /**
   * A deserializer used for messages arriving on the socket from the
   * server. Defaults to JSON.parse.
   */
  deserializer?: (e: MessageEvent) => T;
  /**
   * An Observer that watches when open events occur on the underlying web socket.
   */
  openObserver?: NextObserver<Event>;
  /**
   * An Observer than watches when close events occur on the underlying webSocket
   */
  closeObserver?: NextObserver<CloseEvent>;
  /**
   * An Observer that watches when a close is about to occur due to
   * unsubscription.
   */
  closingObserver?: NextObserver<void>;
  /**
   * A WebSocket constructor to use. This is useful for situations like using a
   * WebSocket impl in Node (WebSocket is a DOM API), or for mocking a WebSocket
   * for testing purposes
   */
  WebSocketCtor?: { new(url: string, protocols?: string|string[]): WebSocket };
  /** Sets the `binaryType` property of the underlying WebSocket. */
  binaryType?: 'blob' | 'arraybuffer';
}

const DEFAULT_WEBSOCKET_CONFIG: WebSocketSubjectConfig<any> = {
  url: '',
  deserializer: (e: MessageEvent) => JSON.parse(e.data),
  serializer: (value: any) => JSON.stringify(value),
};

const WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT =
  'WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }';

export type WebSocketMessage = string | ArrayBuffer | Blob | ArrayBufferView;

export class WebSocketSubject<T> extends AnonymousSubject<T> {

  private _config: WebSocketSubjectConfig<T>;

  /** @deprecated This is an internal implementation detail, do not use. */
  _output: Subject<T>;

  private _socket: WebSocket;

  constructor(urlConfigOrSource: string | WebSocketSubjectConfig<T> | Observable<T>, destination?: Observer<T>) {
    super();
    if (urlConfigOrSource instanceof Observable) {
      this.destination = destination;
      this.source = urlConfigOrSource as Observable<T>;
    } else {
      const config = this._config = { ...DEFAULT_WEBSOCKET_CONFIG };
      this._output = new Subject<T>();
      if (typeof urlConfigOrSource === 'string') {
        config.url = urlConfigOrSource;
      } else {
        for (let key in urlConfigOrSource) {
          if (urlConfigOrSource.hasOwnProperty(key)) {
            config[key] = urlConfigOrSource[key];
          }
        }
      }

      if (!config.WebSocketCtor && WebSocket) {
        config.WebSocketCtor = WebSocket;
      } else if (!config.WebSocketCtor) {
        throw new Error('no WebSocket constructor can be found');
      }
      this.destination = new ReplaySubject();
    }
  }

  lift<R>(operator: Operator<T, R>): WebSocketSubject<R> {
    const sock = new WebSocketSubject<R>(this._config as WebSocketSubjectConfig<any>, <any> this.destination);
    sock.operator = operator;
    sock.source = this;
    return sock;
  }

  private _resetState() {
    this._socket = null;
    if (!this.source) {
      this.destination = new ReplaySubject();
    }
    this._output = new Subject<T>();
  }

  /**
   * Creates an {@link Observable}, that when subscribed to, sends a message,
   * defined by the `subMsg` function, to the server over the socket to begin a
   * subscription to data over that socket. Once data arrives, the
   * `messageFilter` argument will be used to select the appropriate data for
   * the resulting Observable. When teardown occurs, either due to
   * unsubscription, completion or error, a message defined by the `unsubMsg`
   * argument will be send to the server over the WebSocketSubject.
   *
   * @param subMsg A function to generate the subscription message to be sent to
   * the server. This will still be processed by the serializer in the
   * WebSocketSubject's config. (Which defaults to JSON serialization)
   * @param unsubMsg A function to generate the unsubscription message to be
   * sent to the server at teardown. This will still be processed by the
   * serializer in the WebSocketSubject's config.
   * @param messageFilter A predicate for selecting the appropriate messages
   * from the server for the output stream.
   */
  multiplex(subMsg: () => any, unsubMsg: () => any, messageFilter: (value: T) => boolean) {
    const self = this;
    return new Observable((observer: Observer<any>) => {
      try {
        self.next(subMsg());
      } catch (err) {
        observer.error(err);
      }

      const subscription = self.subscribe(x => {
        try {
          if (messageFilter(x)) {
            observer.next(x);
          }
        } catch (err) {
          observer.error(err);
        }
      },
        err => observer.error(err),
        () => observer.complete());

      return () => {
        try {
          self.next(unsubMsg());
        } catch (err) {
          observer.error(err);
        }
        subscription.unsubscribe();
      };
    });
  }

  private _connectSocket() {
    const { WebSocketCtor, protocol, url, binaryType } = this._config;
    const observer = this._output;

    let socket: WebSocket = null;
    try {
      socket = protocol ?
        new WebSocketCtor(url, protocol) :
        new WebSocketCtor(url);
      this._socket = socket;
      if (binaryType) {
        this._socket.binaryType = binaryType;
      }
    } catch (e) {
      observer.error(e);
      return;
    }

    const subscription = new Subscription(() => {
      this._socket = null;
      if (socket && socket.readyState === 1) {
        socket.close();
      }
    });

    socket.onopen = (e: Event) => {
      const { _socket } = this;
      if (!_socket) {
        socket.close();
        this._resetState();
        return;
      }
      const { openObserver } = this._config;
      if (openObserver) {
        openObserver.next(e);
      }

      const queue = this.destination;

      this.destination = Subscriber.create<T>(
        (x) => {
          if (socket.readyState === 1) {
            try {
              const { serializer } = this._config;
              socket.send(serializer(x));
              } catch (e) {
              this.destination.error(e);
            }
          }
        },
        (e) => {
          const { closingObserver } = this._config;
          if (closingObserver) {
            closingObserver.next(undefined);
          }
          if (e && e.code) {
            socket.close(e.code, e.reason);
          } else {
            observer.error(new TypeError(WEBSOCKETSUBJECT_INVALID_ERROR_OBJECT));
          }
          this._resetState();
        },
        () => {
          const { closingObserver } = this._config;
          if (closingObserver) {
            closingObserver.next(undefined);
          }
          socket.close();
          this._resetState();
        }
      ) as Subscriber<any>;

      if (queue && queue instanceof ReplaySubject) {
        subscription.add((<ReplaySubject<T>>queue).subscribe(this.destination));
      }
    };

    socket.onerror = (e: Event) => {
      this._resetState();
      observer.error(e);
    };

    socket.onclose = (e: CloseEvent) => {
      this._resetState();
      const { closeObserver } = this._config;
      if (closeObserver) {
        closeObserver.next(e);
      }
      if (e.wasClean) {
        observer.complete();
      } else {
        observer.error(e);
      }
    };

    socket.onmessage = (e: MessageEvent) => {
      try {
        const { deserializer } = this._config;
        observer.next(deserializer(e));
      } catch (err) {
        observer.error(err);
      }
    };
  }

  /** @deprecated This is an internal implementation detail, do not use. */
  _subscribe(subscriber: Subscriber<T>): Subscription {
    const { source } = this;
    if (source) {
      return source.subscribe(subscriber);
    }
    if (!this._socket) {
      this._connectSocket();
    }
    this._output.subscribe(subscriber);
    subscriber.add(() => {
      const { _socket } = this;
      if (this._output.observers.length === 0) {
        if (_socket && _socket.readyState === 1) {
          _socket.close();
        }
        this._resetState();
      }
    });
    return subscriber;
  }

  unsubscribe() {
    const { _socket } = this;
    if (_socket && _socket.readyState === 1) {
      _socket.close();
    }
    this._resetState();
    super.unsubscribe();
  }
}
