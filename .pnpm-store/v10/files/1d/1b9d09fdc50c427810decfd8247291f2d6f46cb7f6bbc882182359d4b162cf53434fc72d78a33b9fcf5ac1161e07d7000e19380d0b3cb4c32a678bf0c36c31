import { DefaultEventMap, Emitter } from 'rettime';
import { LifeCycleEventEmitter } from '../sharedOptions.mjs';
import { HandlersController, AnyHandler } from './handlers-controller.mjs';
import { Disposable } from '../utils/internal/Disposable.mjs';
import '../utils/request/onUnhandledRequest.mjs';
import '../HttpResponse-CxHR1nNN.mjs';
import '@mswjs/interceptors';
import '../utils/internal/isIterable.mjs';
import '../typeUtils.mjs';
import 'graphql';
import '../utils/matching/matchRequestUrl.mjs';
import '../handlers/WebSocketHandler.mjs';
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
