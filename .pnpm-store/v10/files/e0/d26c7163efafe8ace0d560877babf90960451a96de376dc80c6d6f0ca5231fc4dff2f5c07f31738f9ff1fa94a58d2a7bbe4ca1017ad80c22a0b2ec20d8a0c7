import { WebSocketData, WebSocketClientConnectionProtocol, WebSocketClientEventMap } from '@mswjs/interceptors/WebSocket';

type WebSocketBroadcastChannelMessage = {
    type: 'extraneous:send';
    payload: {
        clientId: string;
        data: WebSocketData;
    };
} | {
    type: 'extraneous:close';
    payload: {
        clientId: string;
        code?: number;
        reason?: string;
    };
};
/**
 * A manager responsible for accumulating WebSocket client
 * connections across different browser runtimes.
 */
declare class WebSocketClientManager {
    private channel;
    private store;
    private runtimeClients;
    private allClients;
    constructor(channel: BroadcastChannel);
    private flushDatabaseToMemory;
    private removeRuntimeClients;
    /**
     * All active WebSocket client connections.
     */
    get clients(): Set<WebSocketClientConnectionProtocol>;
    /**
     * Notify other runtimes about the database update
     * using the shared `BroadcastChannel` instance.
     */
    private notifyOthersAboutDatabaseUpdate;
    private addClient;
    /**
     * Adds the given `WebSocket` client connection to the set
     * of all connections. The given connection is always the complete
     * connection object because `addConnection()` is called only
     * for the opened connections in the same runtime.
     */
    addConnection(client: WebSocketClientConnectionProtocol): Promise<void>;
}
/**
 * A wrapper class to operate with WebSocket client connections
 * from other runtimes. This class maintains 1-1 public API
 * compatibility to the `WebSocketClientConnection` but relies
 * on the given `BroadcastChannel` to communicate instructions
 * with the client connections from other runtimes.
 */
declare class WebSocketRemoteClientConnection implements WebSocketClientConnectionProtocol {
    readonly id: string;
    readonly url: URL;
    private channel;
    constructor(id: string, url: URL, channel: BroadcastChannel);
    send(data: WebSocketData): void;
    close(code?: number | undefined, reason?: string | undefined): void;
    addEventListener<EventType extends keyof WebSocketClientEventMap>(_type: EventType, _listener: (this: WebSocket, event: WebSocketClientEventMap[EventType]) => void, _options?: AddEventListenerOptions | boolean): void;
    removeEventListener<EventType extends keyof WebSocketClientEventMap>(_event: EventType, _listener: (this: WebSocket, event: WebSocketClientEventMap[EventType]) => void, _options?: EventListenerOptions | boolean): void;
}

export { type WebSocketBroadcastChannelMessage, WebSocketClientManager, WebSocketRemoteClientConnection };
