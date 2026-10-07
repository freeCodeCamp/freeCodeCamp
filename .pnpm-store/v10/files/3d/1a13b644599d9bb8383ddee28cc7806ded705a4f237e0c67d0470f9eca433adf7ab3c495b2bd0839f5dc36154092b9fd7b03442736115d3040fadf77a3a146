import { Namespace } from "./namespace";
import type { Server, RemoteSocket } from "./index";
import type { EventParams, EventsMap, DefaultEventsMap, EventNamesWithoutAck } from "./typed-events";
/**
 * A parent namespace is a special {@link Namespace} that holds a list of child namespaces which were created either
 * with a regular expression or with a function.
 *
 * @example
 * const parentNamespace = io.of(/\/dynamic-\d+/);
 *
 * parentNamespace.on("connection", (socket) => {
 *   const childNamespace = socket.nsp;
 * }
 *
 * // will reach all the clients that are in one of the child namespaces, like "/dynamic-101"
 * parentNamespace.emit("hello", "world");
 *
 */
export declare class ParentNamespace<ListenEvents extends EventsMap = DefaultEventsMap, EmitEvents extends EventsMap = ListenEvents, ServerSideEvents extends EventsMap = DefaultEventsMap, SocketData = any> extends Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData> {
    private static count;
    private readonly children;
    constructor(server: Server<ListenEvents, EmitEvents, ServerSideEvents, SocketData>);
    /**
     * @private
     */
    _initAdapter(): void;
    emit<Ev extends EventNamesWithoutAck<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): boolean;
    createChild(name: string): Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData>;
    fetchSockets(): Promise<RemoteSocket<EmitEvents, SocketData>[]>;
}
