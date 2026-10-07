import { WebSocketClientConnectionProtocol } from '@mswjs/interceptors/WebSocket';
import { WebSocketClientStore, SerializedWebSocketClient } from './WebSocketClientStore.mjs';

declare class WebSocketIndexedDBClientStore implements WebSocketClientStore {
    private db;
    constructor();
    add(client: WebSocketClientConnectionProtocol): Promise<void>;
    getAll(): Promise<Array<SerializedWebSocketClient>>;
    deleteMany(clientIds: Array<string>): Promise<void>;
    private createDatabase;
    private getStore;
}

export { WebSocketIndexedDBClientStore };
