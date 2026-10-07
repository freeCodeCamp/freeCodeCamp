import { EventEmitter } from "events";
/**
 * A public ID, sent by the server at the beginning of the Socket.IO session and which can be used for private messaging
 */
export type SocketId = string;
/**
 * A private ID, sent by the server at the beginning of the Socket.IO session and used for connection state recovery
 * upon reconnection
 */
export type PrivateSessionId = string;
export type Room = string;
export interface BroadcastFlags {
    volatile?: boolean;
    compress?: boolean;
    local?: boolean;
    broadcast?: boolean;
    binary?: boolean;
    timeout?: number;
}
export interface BroadcastOptions {
    rooms: Set<Room>;
    except?: Set<Room>;
    flags?: BroadcastFlags;
}
interface SessionToPersist {
    sid: SocketId;
    pid: PrivateSessionId;
    rooms: Room[];
    data: unknown;
}
export type Session = SessionToPersist & {
    missedPackets: unknown[][];
};
export declare class Adapter extends EventEmitter {
    readonly nsp: any;
    rooms: Map<Room, Set<SocketId>>;
    sids: Map<SocketId, Set<Room>>;
    private readonly encoder;
    /**
     * In-memory adapter constructor.
     *
     * @param nsp
     */
    constructor(nsp: any);
    /**
     * To be overridden
     */
    init(): Promise<void> | void;
    /**
     * To be overridden
     */
    close(): Promise<void> | void;
    /**
     * Returns the number of Socket.IO servers in the cluster
     *
     * @public
     */
    serverCount(): Promise<number>;
    /**
     * Adds a socket to a list of room.
     *
     * @param {SocketId}  id      the socket id
     * @param {Set<Room>} rooms   a set of rooms
     * @public
     */
    addAll(id: SocketId, rooms: Set<Room>): Promise<void> | void;
    /**
     * Removes a socket from a room.
     *
     * @param {SocketId} id     the socket id
     * @param {Room}     room   the room name
     */
    del(id: SocketId, room: Room): Promise<void> | void;
    private _del;
    /**
     * Removes a socket from all rooms it's joined.
     *
     * @param {SocketId} id   the socket id
     */
    delAll(id: SocketId): void;
    /**
     * Broadcasts a packet.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @public
     */
    broadcast(packet: any, opts: BroadcastOptions): void;
    /**
     * Broadcasts a packet and expects multiple acknowledgements.
     *
     * Options:
     *  - `flags` {Object} flags for this packet
     *  - `except` {Array} sids that should be excluded
     *  - `rooms` {Array} list of rooms to broadcast to
     *
     * @param {Object} packet   the packet object
     * @param {Object} opts     the options
     * @param clientCountCallback - the number of clients that received the packet
     * @param ack                 - the callback that will be called for each client response
     *
     * @public
     */
    broadcastWithAck(packet: any, opts: BroadcastOptions, clientCountCallback: (clientCount: number) => void, ack: (...args: any[]) => void): void;
    private _encode;
    /**
     * Gets a list of sockets by sid.
     *
     * @param {Set<Room>} rooms   the explicit set of rooms to check.
     */
    sockets(rooms: Set<Room>): Promise<Set<SocketId>>;
    /**
     * Gets the list of rooms a given socket has joined.
     *
     * @param {SocketId} id   the socket id
     */
    socketRooms(id: SocketId): Set<Room> | undefined;
    /**
     * Returns the matching socket instances
     *
     * @param opts - the filters to apply
     */
    fetchSockets(opts: BroadcastOptions): Promise<any[]>;
    /**
     * Makes the matching socket instances join the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to join
     */
    addSockets(opts: BroadcastOptions, rooms: Room[]): void;
    /**
     * Makes the matching socket instances leave the specified rooms
     *
     * @param opts - the filters to apply
     * @param rooms - the rooms to leave
     */
    delSockets(opts: BroadcastOptions, rooms: Room[]): void;
    /**
     * Makes the matching socket instances disconnect
     *
     * @param opts - the filters to apply
     * @param close - whether to close the underlying connection
     */
    disconnectSockets(opts: BroadcastOptions, close: boolean): void;
    private apply;
    private computeExceptSids;
    /**
     * Send a packet to the other Socket.IO servers in the cluster
     * @param packet - an array of arguments, which may include an acknowledgement callback at the end
     */
    serverSideEmit(packet: any[]): void;
    /**
     * Save the client session in order to restore it upon reconnection.
     */
    persistSession(session: SessionToPersist): void;
    /**
     * Restore the session and find the packets that were missed by the client.
     * @param pid
     * @param offset
     */
    restoreSession(pid: PrivateSessionId, offset: string): Promise<Session>;
}
export declare class SessionAwareAdapter extends Adapter {
    readonly nsp: any;
    private readonly maxDisconnectionDuration;
    private sessions;
    private packets;
    constructor(nsp: any);
    persistSession(session: SessionToPersist): void;
    restoreSession(pid: PrivateSessionId, offset: string): Promise<Session>;
    broadcast(packet: any, opts: BroadcastOptions): void;
}
export {};
