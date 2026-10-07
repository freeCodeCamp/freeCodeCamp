import { Socket } from "./socket";
import type { Server } from "./index";
import { EventParams, EventNames, EventsMap, StrictEventEmitter, DefaultEventsMap, DecorateAcknowledgementsWithTimeoutAndMultipleResponses, AllButLast, Last, DecorateAcknowledgementsWithMultipleResponses, RemoveAcknowledgements, EventNamesWithAck, FirstNonErrorArg, EventNamesWithoutAck } from "./typed-events";
import type { Client } from "./client";
import type { Adapter, Room, SocketId } from "socket.io-adapter";
import { BroadcastOperator } from "./broadcast-operator";
export interface ExtendedError extends Error {
    data?: any;
}
export interface NamespaceReservedEventsMap<ListenEvents extends EventsMap, EmitEvents extends EventsMap, ServerSideEvents extends EventsMap, SocketData> {
    connect: (socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>) => void;
    connection: (socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>) => void;
}
export interface ServerReservedEventsMap<ListenEvents extends EventsMap, EmitEvents extends EventsMap, ServerSideEvents extends EventsMap, SocketData> extends NamespaceReservedEventsMap<ListenEvents, EmitEvents, ServerSideEvents, SocketData> {
    new_namespace: (namespace: Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData>) => void;
}
export declare const RESERVED_EVENTS: ReadonlySet<string | Symbol>;
/**
 * A Namespace is a communication channel that allows you to split the logic of your application over a single shared
 * connection.
 *
 * Each namespace has its own:
 *
 * - event handlers
 *
 * ```
 * io.of("/orders").on("connection", (socket) => {
 *   socket.on("order:list", () => {});
 *   socket.on("order:create", () => {});
 * });
 *
 * io.of("/users").on("connection", (socket) => {
 *   socket.on("user:list", () => {});
 * });
 * ```
 *
 * - rooms
 *
 * ```
 * const orderNamespace = io.of("/orders");
 *
 * orderNamespace.on("connection", (socket) => {
 *   socket.join("room1");
 *   orderNamespace.to("room1").emit("hello");
 * });
 *
 * const userNamespace = io.of("/users");
 *
 * userNamespace.on("connection", (socket) => {
 *   socket.join("room1"); // distinct from the room in the "orders" namespace
 *   userNamespace.to("room1").emit("holà");
 * });
 * ```
 *
 * - middlewares
 *
 * ```
 * const orderNamespace = io.of("/orders");
 *
 * orderNamespace.use((socket, next) => {
 *   // ensure the socket has access to the "orders" namespace
 * });
 *
 * const userNamespace = io.of("/users");
 *
 * userNamespace.use((socket, next) => {
 *   // ensure the socket has access to the "users" namespace
 * });
 * ```
 */
export declare class Namespace<ListenEvents extends EventsMap = DefaultEventsMap, EmitEvents extends EventsMap = ListenEvents, ServerSideEvents extends EventsMap = DefaultEventsMap, SocketData = any> extends StrictEventEmitter<ServerSideEvents, RemoveAcknowledgements<EmitEvents>, NamespaceReservedEventsMap<ListenEvents, EmitEvents, ServerSideEvents, SocketData>> {
    readonly name: string;
    /**
     * A map of currently connected sockets.
     */
    readonly sockets: Map<SocketId, Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>>;
    /**
     * A map of currently connecting sockets.
     */
    private _preConnectSockets;
    adapter: Adapter;
    /** @private */
    readonly server: Server<ListenEvents, EmitEvents, ServerSideEvents, SocketData>;
    private _fns;
    /** @private */
    _ids: number;
    /**
     * Namespace constructor.
     *
     * @param server instance
     * @param name
     */
    constructor(server: Server<ListenEvents, EmitEvents, ServerSideEvents, SocketData>, name: string);
    /**
     * Initializes the `Adapter` for this nsp.
     * Run upon changing adapter by `Server#adapter`
     * in addition to the constructor.
     *
     * @private
     */
    _initAdapter(): void;
    /**
     * Registers a middleware, which is a function that gets executed for every incoming {@link Socket}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.use((socket, next) => {
     *   // ...
     *   next();
     * });
     *
     * @param fn - the middleware function
     */
    use(fn: (socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>, next: (err?: ExtendedError) => void) => void): this;
    /**
     * Executes the middleware for an incoming client.
     *
     * @param socket - the socket that will get added
     * @param fn - last fn call in the middleware
     * @private
     */
    private run;
    /**
     * Targets a room when emitting.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * myNamespace.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * myNamespace.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * myNamespace.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room: Room | Room[]): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // disconnect all clients in the "room-101" room
     * myNamespace.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room: Room | Room[]): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Excludes a room when emitting.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * myNamespace.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * myNamespace.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * myNamespace.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room: Room | Room[]): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Adds a new client.
     *
     * @return {Socket}
     * @private
     */
    _add(client: Client<ListenEvents, EmitEvents, ServerSideEvents>, auth: Record<string, unknown>, fn: (socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>) => void): Promise<void>;
    private _createSocket;
    private _doConnect;
    /**
     * Removes a client. Called by each `Socket`.
     *
     * @private
     */
    _remove(socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>): void;
    /**
     * Emits to all connected clients.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.emit("hello", "world");
     *
     * // all serializable datastructures are supported (no need to call JSON.stringify)
     * myNamespace.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
     *
     * // with an acknowledgement from the clients
     * myNamespace.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @return Always true
     */
    emit<Ev extends EventNamesWithoutAck<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): boolean;
    /**
     * Sends a `message` event to all clients.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.send("hello");
     *
     * // this is equivalent to
     * myNamespace.emit("message", "hello");
     *
     * @return self
     */
    send(...args: EventParams<EmitEvents, "message">): this;
    /**
     * Sends a `message` event to all clients. Sends a `message` event. Alias of {@link send}.
     *
     * @return self
     */
    write(...args: EventParams<EmitEvents, "message">): this;
    /**
     * Sends a message to the other Socket.IO servers of the cluster.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.serverSideEmit("hello", "world");
     *
     * myNamespace.on("hello", (arg1) => {
     *   console.log(arg1); // prints "world"
     * });
     *
     * // acknowledgements (without binary content) are supported too:
     * myNamespace.serverSideEmit("ping", (err, responses) => {
     *  if (err) {
     *     // some servers did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per server (except the current one)
     *   }
     * });
     *
     * myNamespace.on("ping", (cb) => {
     *   cb("pong");
     * });
     *
     * @param ev - the event name
     * @param args - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit<Ev extends EventNames<ServerSideEvents>>(ev: Ev, ...args: EventParams<DecorateAcknowledgementsWithTimeoutAndMultipleResponses<ServerSideEvents>, Ev>): boolean;
    /**
     * Sends a message and expect an acknowledgement from the other Socket.IO servers of the cluster.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * try {
     *   const responses = await myNamespace.serverSideEmitWithAck("ping");
     *   console.log(responses); // one response per server (except the current one)
     * } catch (e) {
     *   // some servers did not acknowledge the event in the given delay
     * }
     *
     * @param ev - the event name
     * @param args - an array of arguments
     *
     * @return a Promise that will be fulfilled when all servers have acknowledged the event
     */
    serverSideEmitWithAck<Ev extends EventNamesWithAck<ServerSideEvents>>(ev: Ev, ...args: AllButLast<EventParams<ServerSideEvents, Ev>>): Promise<FirstNonErrorArg<Last<EventParams<ServerSideEvents, Ev>>>[]>;
    /**
     * Called when a packet is received from another Socket.IO server
     *
     * @param args - an array of arguments, which may include an acknowledgement callback at the end
     *
     * @private
     */
    _onServerSideEmit(args: [string, ...any[]]): void;
    /**
     * Gets a list of clients.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Namespace#serverSideEmit} or
     * {@link Namespace#fetchSockets} instead.
     */
    allSockets(): Promise<Set<SocketId>>;
    /**
     * Sets the compress flag.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return self
     */
    compress(compress: boolean): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return self
     */
    get volatile(): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // the “foo” event will be broadcast to all connected clients on this node
     * myNamespace.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local(): BroadcastOperator<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * myNamespace.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(timeout: number): BroadcastOperator<import("./typed-events").DecorateAcknowledgements<DecorateAcknowledgementsWithMultipleResponses<EmitEvents>>, SocketData>;
    /**
     * Returns the matching socket instances.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // return all Socket instances
     * const sockets = await myNamespace.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await myNamespace.in("room1").fetchSockets();
     *
     * for (const socket of sockets) {
     *   console.log(socket.id);
     *   console.log(socket.handshake);
     *   console.log(socket.rooms);
     *   console.log(socket.data);
     *
     *   socket.emit("hello");
     *   socket.join("room1");
     *   socket.leave("room2");
     *   socket.disconnect();
     * }
     */
    fetchSockets(): Promise<import("./broadcast-operator").RemoteSocket<EmitEvents, SocketData>[]>;
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // make all socket instances join the "room1" room
     * myNamespace.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * myNamespace.in("room1").socketsJoin(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsJoin(room: Room | Room[]): void;
    /**
     * Makes the matching socket instances leave the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // make all socket instances leave the "room1" room
     * myNamespace.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * myNamespace.in("room1").socketsLeave(["room2", "room3"]);
     *
     * @param room - a room, or an array of rooms
     */
    socketsLeave(room: Room | Room[]): void;
    /**
     * Makes the matching socket instances disconnect.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * const myNamespace = io.of("/my-namespace");
     *
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * myNamespace.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * myNamespace.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(close?: boolean): void;
}
