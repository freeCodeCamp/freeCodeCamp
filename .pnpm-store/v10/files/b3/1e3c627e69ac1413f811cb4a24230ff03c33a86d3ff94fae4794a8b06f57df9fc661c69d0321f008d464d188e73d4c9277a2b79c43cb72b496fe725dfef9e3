import { DefaultEventMap, Emitter } from 'rettime';
import { LifeCycleEventEmitter } from '../sharedOptions.js';
import { HandlersController, AnyHandler } from './handlers-controller.js';
import { Disposable } from '../utils/internal/Disposable.js';
import '../utils/request/onUnhandledRequest.js';
import '../HttpResponse-aGiIzO91.js';
import '@mswjs/interceptors';
import '../utils/internal/isIterable.js';
import '../typeUtils.js';
import 'graphql';
import '../utils/matching/matchRequestUrl.js';
import '../handlers/WebSocketHandler.js';
import 'strict-event-emitter';
import '@mswjs/interceptors/WebSocket';

/**
 * Generic class for the mock API setup.
 * Preserved only for backward compatibility.
 * @deprecated
 */
declare abstract class SetupApi<EventMap extends DefaultEventMap> extends Disposable {
    protected handlersController: HandlersController;
    protected emitter: Emitter<EventMap>;
    protected publicEmitter: Emitter<EventMap>;
    readonly events: LifeCycleEventEmitter<EventMap>;
    constructor(...initialHandlers: Array<AnyHandler>);
    use(...runtimeHandlers: Array<AnyHandler>): void;
    restoreHandlers(): void;
    resetHandlers(...nextHandlers: Array<AnyHandler>): void;
    listHandlers(): ReadonlyArray<AnyHandler>;
}

export { SetupApi };
