import { WebSocketConnectionData, WebSocketClientConnection } from '@mswjs/interceptors/WebSocket';

declare const colors: {
    system: string;
    outgoing: string;
    incoming: string;
    mocked: string;
};
declare function attachWebSocketLogger(connection: WebSocketConnectionData): () => void;
/**
 * Prints the WebSocket connection.
 * This is meant to be logged by every WebSocket handler
 * that intercepted this connection. This helps you see
 * what handlers observe this connection.
 */
declare function logConnectionOpen(client: WebSocketClientConnection): void;

export { attachWebSocketLogger, colors, logConnectionOpen };
