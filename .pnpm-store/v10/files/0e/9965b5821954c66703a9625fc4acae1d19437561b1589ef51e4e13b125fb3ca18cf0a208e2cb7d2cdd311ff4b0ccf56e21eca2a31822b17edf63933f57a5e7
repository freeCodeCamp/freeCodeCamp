import { WebSocketClientConnectionProtocol } from '@mswjs/interceptors/WebSocket';
import { WebSocketClientStore, SerializedWebSocketClient } from './WebSocketClientStore.js';

declare class WebSocketMemoryClientStore implements WebSocketClientStore {
    private store;
    constructor();
    add(client: WebSocketClientConnectionProtocol): Promise<void>;
    getAll(): Promise<Array<SerializedWebSocketClient>>;
    deleteMany(clientIds: Array<string>): Promise<void>;
}

export { WebSocketMemoryClientStore };
