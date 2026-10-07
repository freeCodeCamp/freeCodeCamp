import { Emitter } from 'strict-event-emitter';
import { WebSocketClientConnectionProtocol, WebSocketServerConnectionProtocol, WebSocketConnectionData } from '@mswjs/interceptors/WebSocket';
import { Path, PathParams, Match } from '../utils/matching/matchRequestUrl.mjs';

type WebSocketHandlerParsedResult = {
    match: Match;
};
type WebSocketHandlerEventMap = {
    connection: [args: WebSocketHandlerConnection];
};
interface WebSocketHandlerConnection {
    client: WebSocketClientConnectionProtocol;
    server: WebSocketServerConnectionProtocol;
    info: WebSocketConnectionData['info'];
    params: PathParams;
}
interface WebSocketResolutionContext {
    baseUrl?: string;
    [kAutoConnect]?: boolean;
}
declare const kEmitter: unique symbol;
declare const kSender: unique symbol;
declare const kConnect: unique symbol;
declare const kAutoConnect: unique symbol;
declare class WebSocketHandler {
    #private;
    protected readonly url: Path;
    id: string;
    callFrame?: string;
    kind: "websocket";
    protected [kEmitter]: Emitter<WebSocketHandlerEventMap>;
    constructor(url: Path);
    parse(args: {
        url: string | URL;
        resolutionContext?: WebSocketResolutionContext;
    }): WebSocketHandlerParsedResult;
    predicate(args: {
        url: string | URL;
        parsedResult: WebSocketHandlerParsedResult;
    }): boolean;
    test(url: string | URL, resolutionContext?: WebSocketResolutionContext & {
        strict?: boolean;
    }): boolean;
    run(connection: WebSocketConnectionData, resolutionContext?: WebSocketResolutionContext): Promise<WebSocketHandlerConnection | null>;
    protected [kConnect](connection: WebSocketHandlerConnection): boolean;
    log(connection: WebSocketConnectionData): () => void;
}

export { WebSocketHandler, type WebSocketHandlerConnection, type WebSocketHandlerEventMap, type WebSocketResolutionContext, kAutoConnect, kConnect, kEmitter, kSender };
