import { WebSocketClientConnectionProtocol } from '@mswjs/interceptors/WebSocket';

interface SerializedWebSocketClient {
    id: string;
    url: string;
}
declare abstract class WebSocketClientStore {
    abstract add(client: WebSocketClientConnectionProtocol): Promise<void>;
    abstract getAll(): Promise<Array<SerializedWebSocketClient>>;
    abstract deleteMany(clientIds: Array<string>): Promise<void>;
}

export { type SerializedWebSocketClient, WebSocketClientStore };
