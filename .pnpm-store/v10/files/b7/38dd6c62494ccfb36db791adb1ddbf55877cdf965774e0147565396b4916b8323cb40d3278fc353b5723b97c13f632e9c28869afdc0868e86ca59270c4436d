import { Packet } from "socket.io-parser";
import { AllButLast, DecorateAcknowledgements, DecorateAcknowledgementsWithMultipleResponses, DefaultEventsMap, EventNames, EventNamesWithAck, EventParams, EventsMap, FirstNonErrorArg, Last, StrictEventEmitter } from "./typed-events";
import type { Client } from "./client";
import type { Namespace } from "./namespace";
import type { IncomingMessage } from "http";
import type { Room, Session, SocketId } from "socket.io-adapter";
import { BroadcastOperator } from "./broadcast-operator";
import { DisconnectReason, Handshake, SocketReservedEventsMap } from "./socket-types";
/**
 * `[eventName, ...args]`
 */
export type Event = [string, ...any[]];
/**
 * This is the main object for interacting with a client.
 *
 * A Socket belongs to a given {@link Namespace} and uses an underlying {@link Client} to communicate.
 *
 * Within each {@link Namespace}, you can also define arbitrary channels (called "rooms") that the {@link Socket} can
 * join and leave. That provides a convenient way to broadcast to a group of socket instances.
 *
 * @example
 * io.on("connection", (socket) => {
 *   console.log(`socket ${socket.id} connected`);
 *
 *   // send an event to the client
 *   socket.emit("foo", "bar");
 *
 *   socket.on("foobar", () => {
 *     // an event was received from the client
 *   });
 *
 *   // join the room named "room1"
 *   socket.join("room1");
 *
 *   // broadcast to everyone in the room named "room1"
 *   io.to("room1").emit("hello");
 *
 *   // upon disconnection
 *   socket.on("disconnect", (reason) => {
 *     console.log(`socket ${socket.id} disconnected due to ${reason}`);
 *   });
 * });
 */
export declare class Socket<ListenEvents extends EventsMap = DefaultEventsMap, EmitEvents extends EventsMap = ListenEvents, ServerSideEvents extends EventsMap = DefaultEventsMap, SocketData = any> extends StrictEventEmitter<ListenEvents, EmitEvents, SocketReservedEventsMap> {
    readonly nsp: Namespace<ListenEvents, EmitEvents, ServerSideEvents>;
    readonly client: Client<ListenEvents, EmitEvents, ServerSideEvents>;
    /**
     * An unique identifier for the session.
     */
    readonly id: SocketId;
    /**
     * Whether the connection state was recovered after a temporary disconnection. In that case, any missed packets will
     * be transmitted to the client, the data attribute and the rooms will be restored.
     */
    readonly recovered: boolean;
    /**
     * The handshake details.
     */
    readonly handshake: Handshake;
    /**
     * Additional information that can be attached to the Socket instance and which will be used in the
     * {@link Server.fetchSockets()} method.
     */
    data: SocketData;
    /**
     * Whether the socket is currently connected or not.
     *
     * @example
     * io.use((socket, next) => {
     *   console.log(socket.connected); // false
     *   next();
     * });
     *
     * io.on("connection", (socket) => {
     *   console.log(socket.connected); // true
     * });
     */
    connected: boolean;
    /**
     * The session ID, which must not be shared (unlike {@link id}).
     *
     * @private
     */
    private readonly pid;
    private readonly server;
    private readonly adapter;
    private acks;
    private fns;
    private flags;
    private _anyListeners?;
    private _anyOutgoingListeners?;
    /**
     * Interface to a `Client` for a given `Namespace`.
     *
     * @param {Namespace} nsp
     * @param {Client} client
     * @param {Object} auth
     * @package
     */
    constructor(nsp: Namespace<ListenEvents, EmitEvents, ServerSideEvents>, client: Client<ListenEvents, EmitEvents, ServerSideEvents>, auth: Record<string, unknown>, previousSession?: Session);
    /**
     * Builds the `handshake` BC object
     *
     * @private
     */
    private buildHandshake;
    /**
     * Emits to this client.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.emit("hello", "world");
     *
     *   // all serializable datastructures are supported (no need to call JSON.stringify)
     *   socket.emit("hello", 1, "2", { 3: ["4"], 5: Buffer.from([6]) });
     *
     *   // with an acknowledgement from the client
     *   socket.emit("hello", "world", (val) => {
     *     // ...
     *   });
     * });
     *
     * @return Always returns `true`.
     */
    emit<Ev extends EventNames<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): boolean;
    /**
     * Emits an event and waits for an acknowledgement
     *
     * @example
     * io.on("connection", async (socket) => {
     *   // without timeout
     *   const response = await socket.emitWithAck("hello", "world");
     *
     *   // with a specific timeout
     *   try {
     *     const response = await socket.timeout(1000).emitWithAck("hello", "world");
     *   } catch (err) {
     *     // the client did not acknowledge the event in the given delay
     *   }
     * });
     *
     * @return a Promise that will be fulfilled when the client acknowledges the event
     */
    emitWithAck<Ev extends EventNamesWithAck<EmitEvents>>(ev: Ev, ...args: AllButLast<EventParams<EmitEvents, Ev>>): Promise<FirstNonErrorArg<Last<EventParams<EmitEvents, Ev>>>>;
    /**
     * @private
     */
    private registerAckCallback;
    /**
     * Targets a room when broadcasting.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients in the “room-101” room, except this socket
     *   socket.to("room-101").emit("foo", "bar");
     *
     *   // the code above is equivalent to:
     *   io.to("room-101").except(socket.id).emit("foo", "bar");
     *
     *   // with an array of rooms (a client will be notified at most once)
     *   socket.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     *   // with multiple chained calls
     *   socket.to("room-101").to("room-102").emit("foo", "bar");
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room: Room | Room[]): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Targets a room when broadcasting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * io.on("connection", (socket) => {
     *   // disconnect all clients in the "room-101" room, except this socket
     *   socket.in("room-101").disconnectSockets();
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room: Room | Room[]): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Excludes a room when broadcasting.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     *   // and this socket
     *   socket.except("room-101").emit("foo", "bar");
     *
     *   // with an array of rooms
     *   socket.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     *   // with multiple chained calls
     *   socket.except("room-101").except("room-102").emit("foo", "bar");
     * });
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room: Room | Room[]): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sends a `message` event.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.send("hello");
     *
     *   // this is equivalent to
     *   socket.emit("message", "hello");
     * });
     *
     * @return self
     */
    send(...args: EventParams<EmitEvents, "message">): this;
    /**
     * Sends a `message` event. Alias of {@link send}.
     *
     * @return self
     */
    write(...args: EventParams<EmitEvents, "message">): this;
    /**
     * Writes a packet.
     *
     * @param {Object} packet - packet object
     * @param {Object} opts - options
     * @private
     */
    private packet;
    /**
     * Joins a room.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // join a single room
     *   socket.join("room1");
     *
     *   // join multiple rooms
     *   socket.join(["room1", "room2"]);
     * });
     *
     * @param {String|Array} rooms - room or array of rooms
     * @return a Promise or nothing, depending on the adapter
     */
    join(rooms: Room | Array<Room>): Promise<void> | void;
    /**
     * Leaves a room.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // leave a single room
     *   socket.leave("room1");
     *
     *   // leave multiple rooms
     *   socket.leave("room1").leave("room2");
     * });
     *
     * @param {String} room
     * @return a Promise or nothing, depending on the adapter
     */
    leave(room: string): Promise<void> | void;
    /**
     * Leave all rooms.
     *
     * @private
     */
    private leaveAll;
    /**
     * Called by `Namespace` upon successful
     * middleware execution (ie: authorization).
     * Socket is added to namespace array before
     * call to join, so adapters can access it.
     *
     * @private
     */
    _onconnect(): void;
    /**
     * Called with each packet. Called by `Client`.
     *
     * @param {Object} packet
     * @private
     */
    _onpacket(packet: Packet): void;
    /**
     * Called upon event packet.
     *
     * @param {Packet} packet - packet object
     * @private
     */
    private onevent;
    /**
     * Produces an ack callback to emit with an event.
     *
     * @param {Number} id - packet id
     * @private
     */
    private ack;
    /**
     * Called upon ack packet.
     *
     * @private
     */
    private onack;
    /**
     * Called upon client disconnect packet.
     *
     * @private
     */
    private ondisconnect;
    /**
     * Handles a client error.
     *
     * @private
     */
    _onerror(err: Error): void;
    /**
     * Called upon closing. Called by `Client`.
     *
     * @param {String} reason
     * @param description
     * @throw {Error} optional error object
     *
     * @private
     */
    _onclose(reason: DisconnectReason, description?: any): this | undefined;
    /**
     * Makes the socket leave all the rooms it was part of and prevents it from joining any other room
     *
     * @private
     */
    _cleanup(): void;
    /**
     * Produces an `error` packet.
     *
     * @param {Object} err - error object
     *
     * @private
     */
    _error(err: any): void;
    /**
     * Disconnects this client.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // disconnect this socket (the connection might be kept alive for other namespaces)
     *   socket.disconnect();
     *
     *   // disconnect this socket and close the underlying connection
     *   socket.disconnect(true);
     * })
     *
     * @param {Boolean} close - if `true`, closes the underlying connection
     * @return self
     */
    disconnect(close?: boolean): this;
    /**
     * Sets the compress flag.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.compress(false).emit("hello");
     * });
     *
     * @param {Boolean} compress - if `true`, compresses the sending data
     * @return {Socket} self
     */
    compress(compress: boolean): this;
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.volatile.emit("hello"); // the client may or may not receive it
     * });
     *
     * @return {Socket} self
     */
    get volatile(): this;
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to every sockets but the
     * sender.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients, except this socket
     *   socket.broadcast.emit("foo", "bar");
     * });
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get broadcast(): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * io.on("connection", (socket) => {
     *   // the “foo” event will be broadcast to all connected clients on this node, except this socket
     *   socket.local.emit("foo", "bar");
     * });
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local(): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
     * given number of milliseconds have elapsed without an acknowledgement from the client:
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.timeout(5000).emit("my-event", (err) => {
     *     if (err) {
     *       // the client did not acknowledge the event in the given delay
     *     }
     *   });
     * });
     *
     * @returns self
     */
    timeout(timeout: number): Socket<ListenEvents, DecorateAcknowledgements<EmitEvents>, ServerSideEvents, SocketData>;
    /**
     * Dispatch incoming event to socket listeners.
     *
     * @param {Array} event - event that will get emitted
     * @private
     */
    private dispatch;
    /**
     * Sets up socket middleware.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.use(([event, ...args], next) => {
     *     if (isUnauthorized(event)) {
     *       return next(new Error("unauthorized event"));
     *     }
     *     // do not forget to call next
     *     next();
     *   });
     *
     *   socket.on("error", (err) => {
     *     if (err && err.message === "unauthorized event") {
     *       socket.disconnect();
     *     }
     *   });
     * });
     *
     * @param {Function} fn - middleware function (event, next)
     * @return {Socket} self
     */
    use(fn: (event: Event, next: (err?: Error) => void) => void): this;
    /**
     * Executes the middleware for an incoming event.
     *
     * @param {Array} event - event that will get emitted
     * @param {Function} fn - last fn call in the middleware
     * @private
     */
    private run;
    /**
     * Whether the socket is currently disconnected
     */
    get disconnected(): boolean;
    /**
     * A reference to the request that originated the underlying Engine.IO Socket.
     */
    get request(): IncomingMessage;
    /**
     * A reference to the underlying Client transport connection (Engine.IO Socket object).
     *
     * @example
     * io.on("connection", (socket) => {
     *   console.log(socket.conn.transport.name); // prints "polling" or "websocket"
     *
     *   socket.conn.once("upgrade", () => {
     *     console.log(socket.conn.transport.name); // prints "websocket"
     *   });
     * });
     */
    get conn(): import("engine.io").Socket;
    /**
     * Returns the rooms the socket is currently in.
     *
     * @example
     * io.on("connection", (socket) => {
     *   console.log(socket.rooms); // Set { <socket.id> }
     *
     *   socket.join("room1");
     *
     *   console.log(socket.rooms); // Set { <socket.id>, "room1" }
     * });
     */
    get rooms(): Set<Room>;
    /**
     * Adds a listener that will be fired when any event is received. The event name is passed as the first argument to
     * the callback.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.onAny((event, ...args) => {
     *     console.log(`got event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    onAny(listener: (...args: any[]) => void): this;
    /**
     * Adds a listener that will be fired when any event is received. The event name is passed as the first argument to
     * the callback. The listener is added to the beginning of the listeners array.
     *
     * @param listener
     */
    prependAny(listener: (...args: any[]) => void): this;
    /**
     * Removes the listener that will be fired when any event is received.
     *
     * @example
     * io.on("connection", (socket) => {
     *   const catchAllListener = (event, ...args) => {
     *     console.log(`got event ${event}`);
     *   }
     *
     *   socket.onAny(catchAllListener);
     *
     *   // remove a specific listener
     *   socket.offAny(catchAllListener);
     *
     *   // or remove all listeners
     *   socket.offAny();
     * });
     *
     * @param listener
     */
    offAny(listener?: (...args: any[]) => void): this;
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAny(): ((...args: any[]) => void)[];
    /**
     * Adds a listener that will be fired when any event is sent. The event name is passed as the first argument to
     * the callback.
     *
     * Note: acknowledgements sent to the client are not included.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.onAnyOutgoing((event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    onAnyOutgoing(listener: (...args: any[]) => void): this;
    /**
     * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
     * callback. The listener is added to the beginning of the listeners array.
     *
     * @example
     * io.on("connection", (socket) => {
     *   socket.prependAnyOutgoing((event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   });
     * });
     *
     * @param listener
     */
    prependAnyOutgoing(listener: (...args: any[]) => void): this;
    /**
     * Removes the listener that will be fired when any event is sent.
     *
     * @example
     * io.on("connection", (socket) => {
     *   const catchAllListener = (event, ...args) => {
     *     console.log(`sent event ${event}`);
     *   }
     *
     *   socket.onAnyOutgoing(catchAllListener);
     *
     *   // remove a specific listener
     *   socket.offAnyOutgoing(catchAllListener);
     *
     *   // or remove all listeners
     *   socket.offAnyOutgoing();
     * });
     *
     * @param listener - the catch-all listener
     */
    offAnyOutgoing(listener?: (...args: any[]) => void): this;
    /**
     * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
     * e.g. to remove listeners.
     */
    listenersAnyOutgoing(): ((...args: any[]) => void)[];
    /**
     * Notify the listeners for each packet sent (emit or broadcast)
     *
     * @param packet
     *
     * @private
     */
    private notifyOutgoingListeners;
    private newBroadcastOperator;
}
