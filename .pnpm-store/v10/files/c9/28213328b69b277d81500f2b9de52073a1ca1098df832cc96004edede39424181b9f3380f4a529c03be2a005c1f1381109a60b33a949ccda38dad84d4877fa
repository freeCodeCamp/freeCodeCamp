import { TypedEvent } from 'rettime';
import { WebSocketConnectionData } from '@mswjs/interceptors/WebSocket';
import { WebSocketHandler } from '../../handlers/WebSocketHandler.js';
import { N as NetworkFrame, b as UnhandledFrameHandle, a as NetworkFrameResolutionContext } from '../../on-unhandled-frame-BBR-P3kV.js';
import { HandlersController, AnyHandler } from '../handlers-controller.js';
import 'strict-event-emitter';
import '../../utils/matching/matchRequestUrl.js';
import '../../HttpResponse-aGiIzO91.js';
import '@mswjs/interceptors';
import '../../utils/internal/isIterable.js';
import '../../typeUtils.js';
import 'graphql';

interface WebSocketNetworkFrameOptions {
    connection: WebSocketConnectionData;
}
type WebSocketNetworkFrameEventMap = {
    connection: WebSocketConnectionEvent;
    unhandledException: UnhandledWebSocketExceptionEvent;
};
declare class WebSocketConnectionEvent<DataType extends {
    url: URL;
    protocols: string | Array<string> | undefined;
} = {
    url: URL;
    protocols: string | Array<string> | undefined;
}, ReturnType = void, EventType extends string = string> extends TypedEvent<DataType, ReturnType, EventType> {
    readonly url: URL;
    readonly protocols: string | Array<string> | undefined;
    constructor(type: EventType, data: DataType);
}
declare class UnhandledWebSocketExceptionEvent<DataType extends {
    url: URL;
    protocols: string | Array<string> | undefined;
    error: unknown;
} = {
    url: URL;
    protocols: string | Array<string> | undefined;
    error: unknown;
}, ReturnType = void, EventType extends string = string> extends TypedEvent<DataType, ReturnType, EventType> {
    readonly url: URL;
    readonly protocols: string | Array<string> | undefined;
    readonly error: unknown;
    constructor(type: EventType, data: DataType);
}
declare abstract class WebSocketNetworkFrame extends NetworkFrame<'ws', {
    connection: WebSocketConnectionData;
}, WebSocketNetworkFrameEventMap> {
    constructor(options: WebSocketNetworkFrameOptions);
    getHandlers(controller: HandlersController): Array<AnyHandler>;
    resolve(handlers: Array<WebSocketHandler>, onUnhandledFrame: UnhandledFrameHandle, resolutionContext?: NetworkFrameResolutionContext): Promise<boolean | null>;
    getUnhandledMessage(): Promise<string>;
}

export { WebSocketNetworkFrame, type WebSocketNetworkFrameEventMap, type WebSocketNetworkFrameOptions };
