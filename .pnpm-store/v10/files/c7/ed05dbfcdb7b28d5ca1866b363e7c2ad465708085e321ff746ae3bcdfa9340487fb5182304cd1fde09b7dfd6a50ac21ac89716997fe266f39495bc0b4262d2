import { WebSocketClientConnectionProtocol, WebSocketData } from '@mswjs/interceptors/WebSocket';
export { WebSocketData } from '@mswjs/interceptors/WebSocket';
import { WebSocketHandlerEventMap, WebSocketHandler } from './handlers/WebSocketHandler.js';
import { Path, PathParams } from './utils/matching/matchRequestUrl.js';
import 'strict-event-emitter';

type WebSocketEventListener<EventType extends keyof WebSocketHandlerEventMap> = (...args: WebSocketHandlerEventMap[EventType]) => void;
type WebSocketLink = {
    /**
     * A set of all WebSocket clients connected
     * to this link.
     *
     * @see {@link https://mswjs.io/docs/api/ws#clients `clients` API reference}
     */
    clients: Set<WebSocketClientConnectionProtocol>;
    /**
     * Adds an event listener to this WebSocket link.
     *
     * @example
     * const chat = ws.link('wss://chat.example.com')
     * chat.addEventListener('connection', listener)
     *
     * @see {@link https://mswjs.io/docs/api/ws#onevent-listener `on()` API reference}
     */
    addEventListener: <EventType extends keyof WebSocketHandlerEventMap>(event: EventType, listener: WebSocketEventListener<EventType>) => WebSocketHandler;
    /**
     * Broadcasts the given data to all WebSocket clients.
     *
     * @example
     * const service = ws.link('wss://example.com')
     * service.addEventListener('connection', () => {
     *   service.broadcast('hello, everyone!')
     * })
     *
     * @see {@link https://mswjs.io/docs/api/ws#broadcastdata `broadcast()` API reference}
     */
    broadcast: (data: WebSocketData) => void;
    /**
     * Broadcasts the given data to all WebSocket clients
     * except the ones provided in the `clients` argument.
     *
     * @example
     * const service = ws.link('wss://example.com')
     * service.addEventListener('connection', ({ client }) => {
     *   service.broadcastExcept(client, 'hi, the rest of you!')
     * })
     *
     * @see {@link https://mswjs.io/docs/api/ws#broadcastexceptclients-data `broadcast()` API reference}
     */
    broadcastExcept: (clients: WebSocketClientConnectionProtocol | Array<WebSocketClientConnectionProtocol>, data: WebSocketData) => void;
};
/**
 * Intercepts outgoing WebSocket connections to the given URL.
 *
 * @example
 * const chat = ws.link('wss://chat.example.com')
 * chat.addEventListener('connection', ({ client }) => {
 *   client.send('hello from server!')
 * })
 */
declare function createWebSocketLinkHandler(url: Path): WebSocketLink;
interface WebSocketNamespace {
    link: typeof createWebSocketLinkHandler;
    /**
     * Request handler for the `upgrade` requests to the WebSocket protocol.
     * This requires a WebSocket handler to be present to fire.
     * @note This only affects Node.js as the `upgrade` request header is
     * forbidden and cannot be read in the browser. Consider using the
     * `WebSocket` API for establishing WebSocket connections in the browser.
     */
    onUpgrade: (info: {
        requestId: string;
        request: Request;
        params: PathParams;
    }) => Promise<Response | undefined> | Response | undefined;
}
/**
 * A namespace to intercept and mock WebSocket connections.
 *
 * @example
 * const chat = ws.link('wss://chat.example.com')
 *
 * @see {@link https://mswjs.io/docs/api/ws `ws` API reference}
 * @see {@link https://mswjs.io/docs/basics/handling-websocket-events Handling WebSocket events}
 */
declare const ws: WebSocketNamespace;

export { type WebSocketEventListener, type WebSocketLink, ws };
