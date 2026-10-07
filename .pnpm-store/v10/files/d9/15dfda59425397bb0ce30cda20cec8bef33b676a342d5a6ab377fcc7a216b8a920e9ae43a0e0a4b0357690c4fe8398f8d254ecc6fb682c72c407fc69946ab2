import { WebSocketSubject, WebSocketSubjectConfig } from './WebSocketSubject';

/**
 * Wrapper around the w3c-compatible WebSocket object provided by the browser.
 *
 * <span class="informal">{@link Subject} that communicates with a server via WebSocket</span>
 *
 * `webSocket` is a factory function that produces a `WebSocketSubject`,
 * which can be used to make WebSocket connection with an arbitrary endpoint.
 * `webSocket` accepts as an argument either a string with url of WebSocket endpoint, or an
 * {@link WebSocketSubjectConfig} object for providing additional configuration, as
 * well as Observers for tracking lifecycle of WebSocket connection.
 *
 * When `WebSocketSubject` is subscribed, it attempts to make a socket connection,
 * unless there is one made already. This means that many subscribers will always listen
 * on the same socket, thus saving resources. If however, two instances are made of `WebSocketSubject`,
 * even if these two were provided with the same url, they will attempt to make separate
 * connections. When consumer of a `WebSocketSubject` unsubscribes, socket connection is closed,
 * only if there are no more subscribers still listening. If after some time a consumer starts
 * subscribing again, connection is reestablished.
 *
 * Once connection is made, whenever a new message comes from the server, `WebSocketSubject` will emit that
 * message as a value in the stream. By default, a message from the socket is parsed via `JSON.parse`. If you
 * want to customize how deserialization is handled (if at all), you can provide custom `resultSelector`
 * function in {@link WebSocketSubject}. When connection closes, stream will complete, provided it happened without
 * any errors. If at any point (starting, maintaining or closing a connection) there is an error,
 * stream will also error with whatever WebSocket API has thrown.
 *
 * By virtue of being a {@link Subject}, `WebSocketSubject` allows for receiving and sending messages from the server. In order
 * to communicate with a connected endpoint, use `next`, `error` and `complete` methods. `next` sends a value to the server, so bear in mind
 * that this value will not be serialized beforehand. Because of This, `JSON.stringify` will have to be called on a value by hand,
 * before calling `next` with a result. Note also that if at the moment of nexting value
 * there is no socket connection (for example no one is subscribing), those values will be buffered, and sent when connection
 * is finally established. `complete` method closes socket connection. `error` does the same,
 * as well as notifying the server that something went wrong via status code and string with details of what happened.
 * Since status code is required in WebSocket API, `WebSocketSubject` does not allow, like regular `Subject`,
 * arbitrary values being passed to the `error` method. It needs to be called with an object that has `code`
 * property with status code number and optional `reason` property with string describing details
 * of an error.
 *
 * Calling `next` does not affect subscribers of `WebSocketSubject` - they have no
 * information that something was sent to the server (unless of course the server
 * responds somehow to a message). On the other hand, since calling `complete` triggers
 * an attempt to close socket connection. If that connection is closed without any errors, stream will
 * complete, thus notifying all subscribers. And since calling `error` closes
 * socket connection as well, just with a different status code for the server, if closing itself proceeds
 * without errors, subscribed Observable will not error, as one might expect, but complete as usual. In both cases
 * (calling `complete` or `error`), if process of closing socket connection results in some errors, *then* stream
 * will error.
 *
 * **Multiplexing**
 *
 * `WebSocketSubject` has an additional operator, not found in other Subjects. It is called `multiplex` and it is
 * used to simulate opening several socket connections, while in reality maintaining only one.
 * For example, an application has both chat panel and real-time notifications about sport news. Since these are two distinct functions,
 * it would make sense to have two separate connections for each. Perhaps there could even be two separate services with WebSocket
 * endpoints, running on separate machines with only GUI combining them together. Having a socket connection
 * for each functionality could become too resource expensive. It is a common pattern to have single
 * WebSocket endpoint that acts as a gateway for the other services (in this case chat and sport news services).
 * Even though there is a single connection in a client app, having the ability to manipulate streams as if it
 * were two separate sockets is desirable. This eliminates manually registering and unregistering in a gateway for
 * given service and filter out messages of interest. This is exactly what `multiplex` method is for.
 *
 * Method accepts three parameters. First two are functions returning subscription and unsubscription messages
 * respectively. These are messages that will be sent to the server, whenever consumer of resulting Observable
 * subscribes and unsubscribes. Server can use them to verify that some kind of messages should start or stop
 * being forwarded to the client. In case of the above example application, after getting subscription message with proper identifier,
 * gateway server can decide that it should connect to real sport news service and start forwarding messages from it.
 * Note that both messages will be sent as returned by the functions, they are by default serialized using JSON.stringify, just
 * as messages pushed via `next`. Also bear in mind that these messages will be sent on *every* subscription and
 * unsubscription. This is potentially dangerous, because one consumer of an Observable may unsubscribe and the server
 * might stop sending messages, since it got unsubscription message. This needs to be handled
 * on the server or using {@link publish} on a Observable returned from 'multiplex'.
 *
 * Last argument to `multiplex` is a `messageFilter` function which should return a boolean. It is used to filter out messages
 * sent by the server to only those that belong to simulated WebSocket stream. For example, server might mark these
 * messages with some kind of string identifier on a message object and `messageFilter` would return `true`
 * if there is such identifier on an object emitted by the socket. Messages which returns `false` in `messageFilter` are simply skipped,
 * and are not passed down the stream.
 *
 * Return value of `multiplex` is an Observable with messages incoming from emulated socket connection. Note that this
 * is not a `WebSocketSubject`, so calling `next` or `multiplex` again will fail. For pushing values to the
 * server, use root `WebSocketSubject`.
 *
 * ### Examples
 * #### Listening for messages from the server
 * ```ts
 * import { webSocket } from "rxjs/webSocket";
 * const subject = webSocket("ws://localhost:8081");
 *
 * subject.subscribe(
 *    msg => console.log('message received: ' + msg), // Called whenever there is a message from the server.
 *    err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
 *    () => console.log('complete') // Called when connection is closed (for whatever reason).
 *  );
 * ```
 *
 * #### Pushing messages to the server
 * ```ts
 * import { webSocket } from "rxjs/webSocket";
 * const subject = webSocket('ws://localhost:8081');
 *
 * subject.subscribe();
 * // Note that at least one consumer has to subscribe to the created subject - otherwise "nexted" values will be just buffered and not sent,
 * // since no connection was established!
 *
 * subject.next({message: 'some message'});
 * // This will send a message to the server once a connection is made. Remember value is serialized with JSON.stringify by default!
 *
 * subject.complete(); // Closes the connection.
 *
 * subject.error({code: 4000, reason: 'I think our app just broke!'});
 * // Also closes the connection, but let's the server know that this closing is caused by some error.
 * ```
 *
 * #### Multiplexing WebSocket
 * ```ts
 * import { webSocket } from "rxjs/webSocket";
 * const subject = webSocket('ws://localhost:8081');
 *
 * const observableA = subject.multiplex(
 *   () => ({subscribe: 'A'}), // When server gets this message, it will start sending messages for 'A'...
 *   () => ({unsubscribe: 'A'}), // ...and when gets this one, it will stop.
 *   message => message.type === 'A' // If the function returns `true` message is passed down the stream. Skipped if the function returns false.
 * );
 *
 * const observableB = subject.multiplex( // And the same goes for 'B'.
 *   () => ({subscribe: 'B'}),
 *   () => ({unsubscribe: 'B'}),
 *   message => message.type === 'B'
 * );
 *
 * const subA = observableA.subscribe(messageForA => console.log(messageForA));
 * // At this moment WebSocket connection is established. Server gets '{"subscribe": "A"}' message and starts sending messages for 'A',
 * // which we log here.
 *
 * const subB = observableB.subscribe(messageForB => console.log(messageForB));
 * // Since we already have a connection, we just send '{"subscribe": "B"}' message to the server. It starts sending messages for 'B',
 * // which we log here.
 *
 * subB.unsubscribe();
 * // Message '{"unsubscribe": "B"}' is sent to the server, which stops sending 'B' messages.
 *
 * subA.unsubscribe();
 * // Message '{"unsubscribe": "A"}' makes the server stop sending messages for 'A'. Since there is no more subscribers to root Subject,
 * // socket connection closes.
 * ```
 *
 *
 * @param {string|WebSocketSubjectConfig} urlConfigOrSource The WebSocket endpoint as an url or an object with
 * configuration and additional Observers.
 * @return {WebSocketSubject} Subject which allows to both send and receive messages via WebSocket connection.
 */
export function webSocket<T>(urlConfigOrSource: string | WebSocketSubjectConfig<T>): WebSocketSubject<T> {
  return new WebSocketSubject<T>(urlConfigOrSource);
}
