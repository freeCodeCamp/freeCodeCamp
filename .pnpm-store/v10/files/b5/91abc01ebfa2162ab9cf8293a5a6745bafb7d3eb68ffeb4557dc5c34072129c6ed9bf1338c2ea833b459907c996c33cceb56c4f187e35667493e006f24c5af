import { PartialDeep } from 'type-fest';
import { HttpNetworkFrameEventMap } from "../core/experimental/frames/http-frame.mjs";
import { WebSocketNetworkFrameEventMap } from "../core/experimental/frames/websocket-frame.mjs";
import { AnyHandler, HandlersController, HandlersControllerState } from "../core/experimental/handlers-controller.mjs";
import { SharedOptions, LifeCycleEventEmitter } from "../core/sharedOptions.mjs";
import { Interceptor } from '@mswjs/interceptors';
import { NetworkApi, DefineNetworkOptions } from "../core/experimental/define-network.mjs";
import { InterceptorSource } from "../core/experimental/sources/interceptor-source.mjs";
import * as rettime from 'rettime';

interface ListenOptions extends SharedOptions {
}
interface SetupServerCommon {
    /**
     * Starts the request interception based on the previously provided request handlers.
     *
     * @see {@link https://mswjs.io/docs/api/setup-server/listen `server.listen()` API reference}
     */
    listen: (options?: PartialDeep<ListenOptions>) => void;
    /**
     * Stops the request interception by restoring all augmented modules.
     *
     * @see {@link https://mswjs.io/docs/api/setup-server/close `server.close()` API reference}
     */
    close: () => void;
    /**
     * Prepends given request handlers to the list of existing handlers.
     *
     * @see {@link https://mswjs.io/docs/api/setup-server/use `server.use()` API reference}
     */
    use: (...handlers: Array<AnyHandler>) => void;
    /**
     * Marks all request handlers that respond using `res.once()` as unused.
     *
     * @see {@link https://mswjs.io/docs/api/setup-server/restore-handlers `server.restore-handlers()` API reference}
     */
    restoreHandlers: () => void;
    /**
     * Resets request handlers to the initial list given to the `setupServer` call, or to the explicit next request handlers list, if given.
     *
     * @see {@link https://mswjs.io/docs/api/setup-server/reset-handlers `server.reset-handlers()` API reference}
     */
    resetHandlers: (...nextHandlers: Array<AnyHandler>) => void;
    /**
     * Returns a readonly list of currently active request handlers.
     *
     * @see {@link https://mswjs.io/docs/api/setup-server/list-handlers `server.listHandlers()` API reference}
     */
    listHandlers: () => ReadonlyArray<AnyHandler>;
    /**
     * Life-cycle events.
     * Life-cycle events allow you to subscribe to the internal library events occurring during the request/response handling.
     *
     * @see {@link https://mswjs.io/docs/api/life-cycle-events Life-cycle Events API reference}
     */
    events: LifeCycleEventEmitter<HttpNetworkFrameEventMap & WebSocketNetworkFrameEventMap>;
}
interface SetupServer extends SetupServerCommon {
    /**
     * Wraps the given function in a boundary. Any changes to the
     * network behavior (e.g. adding runtime request handlers via
     * `server.use()`) will be scoped to this boundary only.
     * @param callback A function to run (e.g. a test)
     *
     * @see {@link https://mswjs.io/docs/api/setup-server/boundary `server.boundary()` API reference}
     */
    boundary: <Args extends Array<any>, R>(callback: (...args: Args) => R) => (...args: Args) => R;
}

declare class AsyncHandlersController extends HandlersController {
    #private;
    constructor(initialHandlers: Array<AnyHandler>);
    protected getState(): {
        initialHandlers: Partial<Record<"request" | "websocket", AnyHandler[]>>;
        handlers: Partial<Record<"request" | "websocket", AnyHandler[]>>;
    };
    protected setState(nextState: HandlersControllerState): void;
    boundary<Args extends Array<any>, R>(callback: (...args: Args) => R): (...args: Args) => R;
}

/**
 * @deprecated
 * Please use the `defineNetwork` API instead.
 */
declare class SetupServerCommonApi implements SetupServerCommon {
    protected network: NetworkApi<[InterceptorSource]>;
    constructor(interceptors: Array<Interceptor<any>>, handlers: Array<AnyHandler> | HandlersController);
    get events(): rettime.Emitter<any>;
    listen(options?: PartialDeep<ListenOptions>): void;
    use(...handlers: Array<AnyHandler>): void;
    resetHandlers(...nextHandlers: Array<AnyHandler>): void;
    restoreHandlers(): void;
    listHandlers(): ReadonlyArray<AnyHandler>;
    close(): void;
}

declare const defaultNetworkOptions: DefineNetworkOptions<[InterceptorSource]>;
/**
 * Enables request interception in Node.js with the given request handlers.
 * @see {@link https://mswjs.io/docs/api/setup-server `setupServer()` API reference}
 */
declare function setupServer(...handlers: Array<AnyHandler>): SetupServer;
/**
 * @deprecated
 * Please use the `defineNetwork` API instead.
 */
declare class SetupServerApi extends SetupServerCommonApi implements SetupServer {
    #private;
    boundary: AsyncHandlersController['boundary'];
    constructor(handlers: Array<AnyHandler>, interceptors: Array<Interceptor<any>>);
}

export { AsyncHandlersController, type SetupServer, SetupServerApi, SetupServerCommonApi, defaultNetworkOptions, setupServer };
