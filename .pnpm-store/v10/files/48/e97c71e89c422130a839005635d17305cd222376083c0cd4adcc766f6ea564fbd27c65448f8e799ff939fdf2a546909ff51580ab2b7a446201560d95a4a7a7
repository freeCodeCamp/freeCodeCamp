import { AnyHandler } from "../core/experimental/handlers-controller";
import { SharedOptions, LifeCycleEventEmitter } from "../core/sharedOptions";
import { HttpNetworkFrameEventMap } from "../core/experimental/frames/http-frame";
import { WebSocketNetworkFrameEventMap } from "../core/experimental/frames/websocket-frame";

type FindWorker = (scriptUrl: string, mockServiceWorkerUrl: string) => boolean;
interface StartOptions extends SharedOptions {
    /**
     * Service Worker registration options.
     */
    serviceWorker?: {
        /**
         * Custom url to the worker script.
         * @default "/mockServiceWorker.js"
         */
        url?: string;
        options?: RegistrationOptions;
    };
    /**
     * Disables the logging of the intercepted requests
     * into browser's console.
     * @default false
     */
    quiet?: boolean;
    /**
     * Defers any network requests until the Service Worker
     * instance is activated.
     * @default true
     * @deprecated
     * Please use a proper browser integration instead.
     * @see https://mswjs.io/docs/integrations/browser
     */
    waitUntilReady?: boolean;
    /**
     * A custom lookup function to find a Mock Service Worker in the list
     * of all registered Service Workers on the page.
     */
    findWorker?: FindWorker;
}
type StartReturnType = Promise<ServiceWorkerRegistration | undefined>;
type StopHandler = () => void;
interface SetupWorker {
    /**
     * Registers and activates the mock Service Worker.
     *
     * @see {@link https://mswjs.io/docs/api/setup-worker/start `worker.start()` API reference}
     */
    start: (options?: StartOptions) => StartReturnType;
    /**
     * Stops requests interception for the current client.
     *
     * @see {@link https://mswjs.io/docs/api/setup-worker/stop `worker.stop()` API reference}
     */
    stop: StopHandler;
    /**
     * Prepends given request handlers to the list of existing handlers.
     * @param {Array<AnyHandler>} handlers List of runtime request handlers.
     *
     * @see {@link https://mswjs.io/docs/api/setup-worker/use `worker.use()` API reference}
     */
    use: (...handlers: Array<AnyHandler>) => void;
    /**
     * Marks all request handlers that respond using `res.once()` as unused.
     *
     * @see {@link https://mswjs.io/docs/api/setup-worker/restore-handlers `worker.restoreHandlers()` API reference}
     */
    restoreHandlers: () => void;
    /**
     * Resets request handlers to the initial list given to the `setupWorker` call, or to the explicit next request handlers list, if given.
     * @param {Array<AnyHandler>} nextHandlers List of the new initial request handlers.
     *
     * @see {@link https://mswjs.io/docs/api/setup-worker/reset-handlers `worker.resetHandlers()` API reference}
     */
    resetHandlers: (...nextHandlers: Array<AnyHandler>) => void;
    /**
     * Returns a readonly list of currently active request handlers.
     *
     * @see {@link https://mswjs.io/docs/api/setup-worker/list-handlers `worker.listHandlers()` API reference}
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

/**
 * Sets up a requests interception in the browser with the given request handlers.
 * @param {Array<AnyHandler>} handlers List of request handlers.
 *
 * @see {@link https://mswjs.io/docs/api/setup-worker `setupWorker()` API reference}
 */
declare function setupWorker(...handlers: Array<AnyHandler>): SetupWorker;
/**
 * @deprecated
 * Please use the `defineNetwork` API instead.
 */
declare class SetupWorkerApi implements SetupWorker {
    start: (options?: StartOptions) => StartReturnType;
    stop: StopHandler;
    use: (...handlers: Array<AnyHandler>) => void;
    resetHandlers: (...nextHandlers: Array<AnyHandler>) => void;
    restoreHandlers: () => void;
    listHandlers: () => ReadonlyArray<AnyHandler>;
    events: LifeCycleEventEmitter<HttpNetworkFrameEventMap & WebSocketNetworkFrameEventMap>;
    constructor();
}

export { type SetupWorker, SetupWorkerApi, type StartOptions, setupWorker };
