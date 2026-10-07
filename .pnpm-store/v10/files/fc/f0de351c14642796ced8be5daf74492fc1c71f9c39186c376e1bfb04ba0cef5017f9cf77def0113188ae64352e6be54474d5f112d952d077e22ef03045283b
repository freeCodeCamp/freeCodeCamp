import { TypedEvent } from 'rettime';
import { N as NetworkFrame, b as UnhandledFrameHandle, a as NetworkFrameResolutionContext } from '../../on-unhandled-frame-Cr1KOZ0I.mjs';
import { HandlersController, AnyHandler } from '../handlers-controller.mjs';
import { R as RequestHandler } from '../../HttpResponse-CxHR1nNN.mjs';
import '../../handlers/WebSocketHandler.mjs';
import 'strict-event-emitter';
import '@mswjs/interceptors/WebSocket';
import '../../utils/matching/matchRequestUrl.mjs';
import '@mswjs/interceptors';
import '../../utils/internal/isIterable.mjs';
import '../../typeUtils.mjs';
import 'graphql';

interface HttpNetworkFrameOptions {
    id?: string;
    request: Request;
}
declare class RequestEvent<DataType extends {
    requestId: string;
    request: Request;
} = {
    requestId: string;
    request: Request;
}, ReturnType = void, EventType extends string = string> extends TypedEvent<DataType, ReturnType, EventType> {
    readonly requestId: string;
    readonly request: Request;
    constructor(type: EventType, data: DataType);
}
declare class ResponseEvent<DataType extends {
    requestId: string;
    request: Request;
    response: Response;
} = {
    requestId: string;
    request: Request;
    response: Response;
}, ReturnType = void, EventType extends string = string> extends TypedEvent<DataType, ReturnType, EventType> {
    readonly requestId: string;
    readonly request: Request;
    readonly response: Response;
    constructor(type: EventType, data: DataType);
}
declare class UnhandledExceptionEvent<DataType extends {
    error: Error;
    requestId: string;
    request: Request;
} = {
    error: Error;
    requestId: string;
    request: Request;
}, ReturnType = void, EventType extends string = string> extends TypedEvent<DataType, ReturnType, EventType> {
    readonly error: Error;
    readonly requestId: string;
    readonly request: Request;
    constructor(type: EventType, data: DataType);
}
type HttpNetworkFrameEventMap = {
    'request:start': RequestEvent;
    'request:match': RequestEvent;
    'request:unhandled': RequestEvent;
    'request:end': RequestEvent;
    'response:mocked': ResponseEvent;
    'response:bypass': ResponseEvent;
    unhandledException: UnhandledExceptionEvent;
};
declare abstract class HttpNetworkFrame extends NetworkFrame<'http', {
    id: string;
    request: Request;
}, HttpNetworkFrameEventMap> {
    constructor(options: HttpNetworkFrameOptions);
    getHandlers(controller: HandlersController): Array<AnyHandler>;
    abstract respondWith(response?: Response): void;
    getUnhandledMessage(): Promise<string>;
    resolve(handlers: Array<RequestHandler>, onUnhandledFrame: UnhandledFrameHandle, resolutionContext?: NetworkFrameResolutionContext): Promise<boolean | null>;
}

export { HttpNetworkFrame, type HttpNetworkFrameEventMap, RequestEvent, ResponseEvent, UnhandledExceptionEvent };
