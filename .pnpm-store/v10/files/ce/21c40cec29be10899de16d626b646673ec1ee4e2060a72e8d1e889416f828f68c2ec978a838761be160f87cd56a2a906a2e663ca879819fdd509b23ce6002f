import http from "http";
import type { Server as HTTPSServer } from "https";
import type { Http2SecureServer, Http2Server } from "http2";
import { Server as Engine } from "engine.io";
import type { ServerOptions as EngineOptions, AttachOptions } from "engine.io";
import { ExtendedError, Namespace, ServerReservedEventsMap } from "./namespace";
import { Adapter, Room, SocketId } from "socket.io-adapter";
import * as parser from "socket.io-parser";
import type { Encoder } from "socket.io-parser";
import { Socket } from "./socket";
import { DisconnectReason } from "./socket-types";
import type { BroadcastOperator, RemoteSocket } from "./broadcast-operator";
import { EventsMap, DefaultEventsMap, EventParams, StrictEventEmitter, EventNames, DecorateAcknowledgementsWithTimeoutAndMultipleResponses, AllButLast, Last, RemoveAcknowledgements, EventNamesWithAck, FirstNonErrorArg } from "./typed-events";
type ParentNspNameMatchFn = (name: string, auth: {
    [key: string]: any;
}, fn: (err: Error | null, success: boolean) => void) => void;
type AdapterConstructor = typeof Adapter | ((nsp: Namespace) => Adapter);
type TServerInstance = http.Server | HTTPSServer | Http2SecureServer | Http2Server;
interface ServerOptions extends EngineOptions, AttachOptions {
    /**
     * name of the path to capture
     * @default "/socket.io"
     */
    path: string;
    /**
     * whether to serve the client files
     * @default true
     */
    serveClient: boolean;
    /**
     * the adapter to use
     * @default the in-memory adapter (https://github.com/socketio/socket.io-adapter)
     */
    adapter: AdapterConstructor;
    /**
     * the parser to use
     * @default the default parser (https://github.com/socketio/socket.io-parser)
     */
    parser: any;
    /**
     * how many ms before a client without namespace is closed
     * @default 45000
     */
    connectTimeout: number;
    /**
     * Whether to enable the recovery of connection state when a client temporarily disconnects.
     *
     * The connection state includes the missed packets, the rooms the socket was in and the `data` attribute.
     */
    connectionStateRecovery: {
        /**
         * The backup duration of the sessions and the packets.
         *
         * @default 120000 (2 minutes)
         */
        maxDisconnectionDuration?: number;
        /**
         * Whether to skip middlewares upon successful connection state recovery.
         *
         * @default true
         */
        skipMiddlewares?: boolean;
    };
    /**
     * Whether to remove child namespaces that have no sockets connected to them
     * @default false
     */
    cleanupEmptyChildNamespaces: boolean;
}
/**
 * Represents a Socket.IO server.
 *
 * @example
 * import { Server } from "socket.io";
 *
 * const io = new Server();
 *
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
 *   // upon disconnection
 *   socket.on("disconnect", (reason) => {
 *     console.log(`socket ${socket.id} disconnected due to ${reason}`);
 *   });
 * });
 *
 * io.listen(3000);
 */
export declare class Server<
/**
 * Types for the events received from the clients.
 *
 * @example
 * interface ClientToServerEvents {
 *   hello: (arg: string) => void;
 * }
 *
 * const io = new Server<ClientToServerEvents>();
 *
 * io.on("connection", (socket) => {
 *   socket.on("hello", (arg) => {
 *     // `arg` is inferred as string
 *   });
 * });
 */
ListenEvents extends EventsMap = DefaultEventsMap, 
/**
 * Types for the events sent to the clients.
 *
 * @example
 * interface ServerToClientEvents {
 *   hello: (arg: string) => void;
 * }
 *
 * const io = new Server<DefaultEventMap, ServerToClientEvents>();
 *
 * io.emit("hello", "world");
 */
EmitEvents extends EventsMap = ListenEvents, 
/**
 * Types for the events received from and sent to the other servers.
 *
 * @example
 * interface InterServerEvents {
 *   ping: (arg: number) => void;
 * }
 *
 * const io = new Server<DefaultEventMap, DefaultEventMap, ServerToClientEvents>();
 *
 * io.serverSideEmit("ping", 123);
 *
 * io.on("ping", (arg) => {
 *   // `arg` is inferred as number
 * });
 */
ServerSideEvents extends EventsMap = DefaultEventsMap, 
/**
 * Additional properties that can be attached to the socket instance.
 *
 * Note: any property can be attached directly to the socket instance (`socket.foo = "bar"`), but the `data` object
 * will be included when calling {@link Server#fetchSockets}.
 *
 * @example
 * io.on("connection", (socket) => {
 *   socket.data.eventsCount = 0;
 *
 *   socket.onAny(() => {
 *     socket.data.eventsCount++;
 *   });
 * });
 */
SocketData = any> extends StrictEventEmitter<ServerSideEvents, RemoveAcknowledgements<EmitEvents>, ServerReservedEventsMap<ListenEvents, EmitEvents, ServerSideEvents, SocketData>> {
    readonly sockets: Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData>;
    /**
     * A reference to the underlying Engine.IO server.
     *
     * @example
     * const clientsCount = io.engine.clientsCount;
     *
     */
    engine: Engine;
    /**
     * The underlying Node.js HTTP server.
     *
     * @see https://nodejs.org/api/http.html
     */
    httpServer: TServerInstance;
    /** @private */
    readonly _parser: typeof parser;
    /** @private */
    readonly encoder: Encoder;
    /**
     * @private
     */
    _nsps: Map<string, Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData>>;
    private parentNsps;
    /**
     * A subset of the {@link parentNsps} map, only containing {@link ParentNamespace} which are based on a regular
     * expression.
     *
     * @private
     */
    private parentNamespacesFromRegExp;
    private _adapter?;
    private _serveClient;
    private readonly opts;
    private eio;
    private _path;
    private clientPathRegex;
    /**
     * @private
     */
    _connectTimeout: number;
    private _corsMiddleware;
    /**
     * Server constructor.
     *
     * @param srv http server, port, or options
     * @param [opts]
     */
    constructor(opts?: Partial<ServerOptions>);
    constructor(srv?: TServerInstance | number, opts?: Partial<ServerOptions>);
    constructor(srv: undefined | Partial<ServerOptions> | TServerInstance | number, opts?: Partial<ServerOptions>);
    get _opts(): Partial<ServerOptions>;
    /**
     * Sets/gets whether client code is being served.
     *
     * @param v - whether to serve client code
     * @return self when setting or value when getting
     */
    serveClient(v: boolean): this;
    serveClient(): boolean;
    serveClient(v?: boolean): this | boolean;
    /**
     * Executes the middleware for an incoming namespace not already created on the server.
     *
     * @param name - name of incoming namespace
     * @param auth - the auth parameters
     * @param fn - callback
     *
     * @private
     */
    _checkNamespace(name: string, auth: {
        [key: string]: any;
    }, fn: (nsp: Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData> | false) => void): void;
    /**
     * Sets the client serving path.
     *
     * @param {String} v pathname
     * @return {Server|String} self when setting or value when getting
     */
    path(v: string): this;
    path(): string;
    path(v?: string): this | string;
    /**
     * Set the delay after which a client without namespace is closed
     * @param v
     */
    connectTimeout(v: number): this;
    connectTimeout(): number;
    connectTimeout(v?: number): this | number;
    /**
     * Sets the adapter for rooms.
     *
     * @param v pathname
     * @return self when setting or value when getting
     */
    adapter(): AdapterConstructor | undefined;
    adapter(v: AdapterConstructor): this;
    /**
     * Attaches socket.io to a server or port.
     *
     * @param srv - server or port
     * @param opts - options passed to engine.io
     * @return self
     */
    listen(srv: TServerInstance | number, opts?: Partial<ServerOptions>): this;
    /**
     * Attaches socket.io to a server or port.
     *
     * @param srv - server or port
     * @param opts - options passed to engine.io
     * @return self
     */
    attach(srv: TServerInstance | number, opts?: Partial<ServerOptions>): this;
    /**
     * Attaches socket.io to a uWebSockets.js app.
     * @param app
     * @param opts
     */
    attachApp(app: any, opts?: Partial<ServerOptions>): void;
    /**
     * Initialize engine
     *
     * @param srv - the server to attach to
     * @param opts - options passed to engine.io
     * @private
     */
    private initEngine;
    /**
     * Attaches the static file serving.
     *
     * @param srv http server
     * @private
     */
    private attachServe;
    /**
     * Handles a request serving of client source and map
     *
     * @param req
     * @param res
     * @private
     */
    private serve;
    /**
     * @param filename
     * @param req
     * @param res
     * @private
     */
    private static sendFile;
    /**
     * Binds socket.io to an engine.io instance.
     *
     * @param engine engine.io (or compatible) server
     * @return self
     */
    bind(engine: any): this;
    /**
     * Called with each incoming transport connection.
     *
     * @param {engine.Socket} conn
     * @return self
     * @private
     */
    private onconnection;
    /**
     * Looks up a namespace.
     *
     * @example
     * // with a simple string
     * const myNamespace = io.of("/my-namespace");
     *
     * // with a regex
     * const dynamicNsp = io.of(/^\/dynamic-\d+$/).on("connection", (socket) => {
     *   const namespace = socket.nsp; // newNamespace.name === "/dynamic-101"
     *
     *   // broadcast to all clients in the given sub-namespace
     *   namespace.emit("hello");
     * });
     *
     * @param name - nsp name
     * @param fn optional, nsp `connection` ev handler
     */
    of(name: string | RegExp | ParentNspNameMatchFn, fn?: (socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>) => void): Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData>;
    /**
     * Closes server connection
     *
     * @param [fn] optional, called as `fn([err])` on error OR all conns closed
     */
    close(fn?: (err?: Error) => void): Promise<void>;
    /**
     * Registers a middleware, which is a function that gets executed for every incoming {@link Socket}.
     *
     * @example
     * io.use((socket, next) => {
     *   // ...
     *   next();
     * });
     *
     * @param fn - the middleware function
     */
    use(fn: (socket: Socket<ListenEvents, EmitEvents, ServerSideEvents, SocketData>, next: (err?: ExtendedError) => void) => void): this;
    /**
     * Targets a room when emitting.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients in the “room-101” room
     * io.to("room-101").emit("foo", "bar");
     *
     * // with an array of rooms (a client will be notified at most once)
     * io.to(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.to("room-101").to("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    to(room: Room | Room[]): BroadcastOperator<import("./typed-events").DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Targets a room when emitting. Similar to `to()`, but might feel clearer in some cases:
     *
     * @example
     * // disconnect all clients in the "room-101" room
     * io.in("room-101").disconnectSockets();
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    in(room: Room | Room[]): BroadcastOperator<import("./typed-events").DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Excludes a room when emitting.
     *
     * @example
     * // the "foo" event will be broadcast to all connected clients, except the ones that are in the "room-101" room
     * io.except("room-101").emit("foo", "bar");
     *
     * // with an array of rooms
     * io.except(["room-101", "room-102"]).emit("foo", "bar");
     *
     * // with multiple chained calls
     * io.except("room-101").except("room-102").emit("foo", "bar");
     *
     * @param room - a room, or an array of rooms
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    except(room: Room | Room[]): BroadcastOperator<import("./typed-events").DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sends a `message` event to all clients.
     *
     * This method mimics the WebSocket.send() method.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
     *
     * @example
     * io.send("hello");
     *
     * // this is equivalent to
     * io.emit("message", "hello");
     *
     * @return self
     */
    send(...args: EventParams<EmitEvents, "message">): this;
    /**
     * Sends a `message` event to all clients. Alias of {@link send}.
     *
     * @return self
     */
    write(...args: EventParams<EmitEvents, "message">): this;
    /**
     * Sends a message to the other Socket.IO servers of the cluster.
     *
     * @example
     * io.serverSideEmit("hello", "world");
     *
     * io.on("hello", (arg1) => {
     *   console.log(arg1); // prints "world"
     * });
     *
     * // acknowledgements (without binary content) are supported too:
     * io.serverSideEmit("ping", (err, responses) => {
     *  if (err) {
     *     // some servers did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per server (except the current one)
     *   }
     * });
     *
     * io.on("ping", (cb) => {
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
     * try {
     *   const responses = await io.serverSideEmitWithAck("ping");
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
     * Gets a list of socket ids.
     *
     * @deprecated this method will be removed in the next major release, please use {@link Server#serverSideEmit} or
     * {@link Server#fetchSockets} instead.
     */
    allSockets(): Promise<Set<SocketId>>;
    /**
     * Sets the compress flag.
     *
     * @example
     * io.compress(false).emit("hello");
     *
     * @param compress - if `true`, compresses the sending data
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    compress(compress: boolean): BroadcastOperator<import("./typed-events").DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sets a modifier for a subsequent event emission that the event data may be lost if the client is not ready to
     * receive messages (because of network slowness or other issues, or because they’re connected through long polling
     * and is in the middle of a request-response cycle).
     *
     * @example
     * io.volatile.emit("hello"); // the clients may or may not receive it
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get volatile(): BroadcastOperator<import("./typed-events").DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Sets a modifier for a subsequent event emission that the event data will only be broadcast to the current node.
     *
     * @example
     * // the “foo” event will be broadcast to all connected clients on this node
     * io.local.emit("foo", "bar");
     *
     * @return a new {@link BroadcastOperator} instance for chaining
     */
    get local(): BroadcastOperator<import("./typed-events").DecorateAcknowledgementsWithMultipleResponses<EmitEvents>, SocketData>;
    /**
     * Adds a timeout in milliseconds for the next operation.
     *
     * @example
     * io.timeout(1000).emit("some-event", (err, responses) => {
     *   if (err) {
     *     // some clients did not acknowledge the event in the given delay
     *   } else {
     *     console.log(responses); // one response per client
     *   }
     * });
     *
     * @param timeout
     */
    timeout(timeout: number): BroadcastOperator<import("./typed-events").DecorateAcknowledgements<import("./typed-events").DecorateAcknowledgementsWithMultipleResponses<EmitEvents>>, SocketData>;
    /**
     * Returns the matching socket instances.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     * // return all Socket instances
     * const sockets = await io.fetchSockets();
     *
     * // return all Socket instances in the "room1" room
     * const sockets = await io.in("room1").fetchSockets();
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
    fetchSockets(): Promise<RemoteSocket<EmitEvents, SocketData>[]>;
    /**
     * Makes the matching socket instances join the specified rooms.
     *
     * Note: this method also works within a cluster of multiple Socket.IO servers, with a compatible {@link Adapter}.
     *
     * @example
     *
     * // make all socket instances join the "room1" room
     * io.socketsJoin("room1");
     *
     * // make all socket instances in the "room1" room join the "room2" and "room3" rooms
     * io.in("room1").socketsJoin(["room2", "room3"]);
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
     * // make all socket instances leave the "room1" room
     * io.socketsLeave("room1");
     *
     * // make all socket instances in the "room1" room leave the "room2" and "room3" rooms
     * io.in("room1").socketsLeave(["room2", "room3"]);
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
     * // make all socket instances disconnect (the connections might be kept alive for other namespaces)
     * io.disconnectSockets();
     *
     * // make all socket instances in the "room1" room disconnect and close the underlying connections
     * io.in("room1").disconnectSockets(true);
     *
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(close?: boolean): void;
}
export { Socket, DisconnectReason, ServerOptions, Namespace, BroadcastOperator, RemoteSocket, DefaultEventsMap, ExtendedError, };
export { Event } from "./socket";
