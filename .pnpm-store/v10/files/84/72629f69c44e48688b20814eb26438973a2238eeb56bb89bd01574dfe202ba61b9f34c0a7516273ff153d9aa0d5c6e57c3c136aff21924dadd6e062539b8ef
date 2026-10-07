import { R as RequestHandler } from '../HttpResponse-CxHR1nNN.mjs';
import { WebSocketHandler } from '../handlers/WebSocketHandler.mjs';
import '@mswjs/interceptors';
import '../utils/internal/isIterable.mjs';
import '../typeUtils.mjs';
import 'graphql';
import '../utils/matching/matchRequestUrl.mjs';
import 'strict-event-emitter';
import '@mswjs/interceptors/WebSocket';

type AnyHandler = RequestHandler | WebSocketHandler;
type HandlersMap = Partial<Record<AnyHandler['kind'], Array<AnyHandler>>>;
declare function groupHandlersByKind(handlers: Array<AnyHandler>): HandlersMap;
interface HandlersControllerState {
    initialHandlers: HandlersMap;
    handlers: HandlersMap;
}
declare abstract class HandlersController {
    #private;
    protected getInitialState(initialHandlers: Array<AnyHandler>): HandlersControllerState;
    protected abstract getState(): HandlersControllerState;
    protected abstract setState(nextState: Partial<HandlersControllerState>): void;
    currentHandlers(): Array<AnyHandler>;
    getHandlersByKind(kind: AnyHandler['kind']): Array<AnyHandler>;
    use(nextHandlers: Array<AnyHandler>): void;
    reset(nextHandlers: Array<AnyHandler>): void;
    restore(): void;
}
declare class InMemoryHandlersController extends HandlersController {
    #private;
    constructor(initialHandlers: Array<AnyHandler>);
    protected getState(): HandlersControllerState;
    protected setState(nextState: Partial<HandlersControllerState>): void;
}

export { type AnyHandler, HandlersController, type HandlersControllerState, type HandlersMap, InMemoryHandlersController, groupHandlersByKind };
