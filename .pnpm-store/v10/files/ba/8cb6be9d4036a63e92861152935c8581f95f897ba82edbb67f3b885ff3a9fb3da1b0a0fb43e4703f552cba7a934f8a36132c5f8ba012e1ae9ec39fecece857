import { Adapter } from "./in-memory-adapter";
import type { BroadcastFlags, BroadcastOptions, Room } from "./in-memory-adapter";
type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
/**
 * The unique ID of a server
 */
export type ServerId = string;
/**
 * The unique ID of a message (for the connection state recovery feature)
 */
export type Offset = string;
export interface ClusterAdapterOptions {
    /**
     * The number of ms between two heartbeats.
     * @default 5_000
     */
    heartbeatInterval?: number;
    /**
     * The number of ms without heartbeat before we consider a node down.
     * @default 10_000
     */
    heartbeatTimeout?: number;
}
export declare enum MessageType {
    INITIAL_HEARTBEAT = 1,
    HEARTBEAT = 2,
    BROADCAST = 3,
    SOCKETS_JOIN = 4,
    SOCKETS_LEAVE = 5,
    DISCONNECT_SOCKETS = 6,
    FETCH_SOCKETS = 7,
    FETCH_SOCKETS_RESPONSE = 8,
    SERVER_SIDE_EMIT = 9,
    SERVER_SIDE_EMIT_RESPONSE = 10,
    BROADCAST_CLIENT_COUNT = 11,
    BROADCAST_ACK = 12,
    ADAPTER_CLOSE = 13
}
export type ClusterMessage = {
    uid: ServerId;
    nsp: string;
} & ({
    type: MessageType.INITIAL_HEARTBEAT | MessageType.HEARTBEAT | MessageType.ADAPTER_CLOSE;
} | {
    type: MessageType.BROADCAST;
    data: {
        opts: {
            rooms: string[];
            except: string[];
            flags: BroadcastFlags;
        };
        packet: unknown;
        requestId?: string;
    };
} | {
    type: MessageType.SOCKETS_JOIN | MessageType.SOCKETS_LEAVE;
    data: {
        opts: {
            rooms: string[];
            except: string[];
            flags: BroadcastFlags;
        };
        rooms: string[];
    };
} | {
    type: MessageType.DISCONNECT_SOCKETS;
    data: {
        opts: {
            rooms: string[];
            except: string[];
            flags: BroadcastFlags;
        };
        close?: boolean;
    };
} | {
    type: MessageType.FETCH_SOCKETS;
    data: {
        opts: {
            rooms: string[];
            except: string[];
            flags: BroadcastFlags;
        };
        requestId: string;
    };
} | {
    type: MessageType.SERVER_SIDE_EMIT;
    data: {
        requestId?: string;
        packet: any[];
    };
});
export type ClusterResponse = {
    uid: ServerId;
    nsp: string;
} & ({
    type: MessageType.FETCH_SOCKETS_RESPONSE;
    data: {
        requestId: string;
        sockets: unknown[];
    };
} | {
    type: MessageType.SERVER_SIDE_EMIT_RESPONSE;
    data: {
        requestId: string;
        packet: unknown;
    };
} | {
    type: MessageType.BROADCAST_CLIENT_COUNT;
    data: {
        requestId: string;
        clientCount: number;
    };
} | {
    type: MessageType.BROADCAST_ACK;
    data: {
        requestId: string;
        packet: unknown;
    };
});
/**
 * A cluster-ready adapter. Any extending class must:
 *
 * - implement {@link ClusterAdapter#doPublish} and {@link ClusterAdapter#doPublishResponse}
 * - call {@link ClusterAdapter#onMessage} and {@link ClusterAdapter#onResponse}
 */
export declare abstract class ClusterAdapter extends Adapter {
    protected readonly uid: ServerId;
    private requests;
    private ackRequests;
    protected constructor(nsp: any);
    /**
     * Called when receiving a message from another member of the cluster.
     *
     * @param message
     * @param offset
     * @protected
     */
    protected onMessage(message: ClusterMessage, offset?: string): void;
    /**
     * Called when receiving a response from another member of the cluster.
     *
     * @param response
     * @protected
     */
    protected onResponse(response: ClusterResponse): void;
    broadcast(packet: any, opts: BroadcastOptions): Promise<void>;
    /**
     * Adds an offset at the end of the data array in order to allow the client to receive any missed packets when it
     * reconnects after a temporary disconnection.
     *
     * @param packet
     * @param opts
     * @param offset
     * @private
     */
    private addOffsetIfNecessary;
    broadcastWithAck(packet: any, opts: BroadcastOptions, clientCountCallback: (clientCount: number) => void, ack: (...args: any[]) => void): void;
    addSockets(opts: BroadcastOptions, rooms: Room[]): Promise<void>;
    delSockets(opts: BroadcastOptions, rooms: Room[]): Promise<void>;
    disconnectSockets(opts: BroadcastOptions, close: boolean): Promise<void>;
    fetchSockets(opts: BroadcastOptions): Promise<any[]>;
    serverSideEmit(packet: any[]): Promise<any>;
    protected publish(message: DistributiveOmit<ClusterMessage, "nsp" | "uid">): void;
    protected publishAndReturnOffset(message: DistributiveOmit<ClusterMessage, "nsp" | "uid">): Promise<string>;
    /**
     * Send a message to the other members of the cluster.
     *
     * @param message
     * @protected
     * @return an offset, if applicable
     */
    protected abstract doPublish(message: ClusterMessage): Promise<Offset>;
    protected publishResponse(requesterUid: ServerId, response: Omit<ClusterResponse, "nsp" | "uid">): void;
    /**
     * Send a response to the given member of the cluster.
     *
     * @param requesterUid
     * @param response
     * @protected
     */
    protected abstract doPublishResponse(requesterUid: ServerId, response: ClusterResponse): Promise<void>;
}
export declare abstract class ClusterAdapterWithHeartbeat extends ClusterAdapter {
    private readonly _opts;
    private heartbeatTimer;
    private nodesMap;
    private readonly cleanupTimer;
    private customRequests;
    protected constructor(nsp: any, opts: ClusterAdapterOptions);
    init(): void;
    private scheduleHeartbeat;
    close(): void;
    onMessage(message: ClusterMessage, offset?: string): void;
    serverCount(): Promise<number>;
    publish(message: DistributiveOmit<ClusterMessage, "nsp" | "uid">): void;
    serverSideEmit(packet: any[]): Promise<any>;
    fetchSockets(opts: BroadcastOptions): Promise<any[]>;
    onResponse(response: ClusterResponse): void;
    private removeNode;
}
export {};
