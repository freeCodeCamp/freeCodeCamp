import { Subject, AnonymousSubject } from '../../Subject';
import { Subscriber } from '../../Subscriber';
import { Observable } from '../../Observable';
import { Subscription } from '../../Subscription';
import { Operator } from '../../Operator';
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
    WebSocketCtor?: {
        new (url: string, protocols?: string | string[]): WebSocket;
    };
    /** Sets the `binaryType` property of the underlying WebSocket. */
    binaryType?: 'blob' | 'arraybuffer';
}
export declare type WebSocketMessage = string | ArrayBuffer | Blob | ArrayBufferView;
export declare class WebSocketSubject<T> extends AnonymousSubject<T> {
    private _config;
    /** @deprecated This is an internal implementation detail, do not use. */
    _output: Subject<T>;
    private _socket;
    constructor(urlConfigOrSource: string | WebSocketSubjectConfig<T> | Observable<T>, destination?: Observer<T>);
    lift<R>(operator: Operator<T, R>): WebSocketSubject<R>;
    private _resetState;
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
    multiplex(subMsg: () => any, unsubMsg: () => any, messageFilter: (value: T) => boolean): Observable<any>;
    private _connectSocket;
    /** @deprecated This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<T>): Subscription;
    unsubscribe(): void;
}
