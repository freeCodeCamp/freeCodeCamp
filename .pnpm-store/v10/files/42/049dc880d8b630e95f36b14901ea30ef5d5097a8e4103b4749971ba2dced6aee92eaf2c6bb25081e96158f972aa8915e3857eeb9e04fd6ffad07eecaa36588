import { AnyHandler } from "../core/experimental/handlers-controller";
import { DefineNetworkOptions } from "../core/experimental/define-network";
import { InterceptorSource } from "../core/experimental/sources/interceptor-source";
import { PartialDeep } from 'type-fest';
import { HttpNetworkFrameEventMap } from "../core/experimental/frames/http-frame";
import { WebSocketNetworkFrameEventMap } from "../core/experimental/frames/websocket-frame";
import { SharedOptions, LifeCycleEventEmitter } from "../core/sharedOptions";

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

declare const defaultNetworkOptions: DefineNetworkOptions<[InterceptorSource]>;
/**
 * Sets up a requests interception in React Native with the given request handlers.
 * @param {Array<AnyHandler>} handlers List of request handlers.
 *
 * @see {@link https://mswjs.io/docs/api/setup-server `setupServer()` API reference}
 */
declare function setupServer(...handlers: Array<AnyHandler>): SetupServerCommon;

export { defaultNetworkOptions, setupServer };
