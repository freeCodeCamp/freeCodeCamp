import { Emitter, DefaultEventMap } from 'rettime';
import { NetworkSource, ExtractSourceEvents } from './sources/network-source.js';
import { a as NetworkFrameResolutionContext, b as UnhandledFrameHandle } from '../on-unhandled-frame-BBR-P3kV.js';
import { AnyHandler, HandlersController } from './handlers-controller.js';
import '../HttpResponse-aGiIzO91.js';
import '@mswjs/interceptors';
import '../utils/internal/isIterable.js';
import '../typeUtils.js';
import 'graphql';
import '../utils/matching/matchRequestUrl.js';
import '../handlers/WebSocketHandler.js';
import 'strict-event-emitter';
import '@mswjs/interceptors/WebSocket';

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
type MergeEventMaps<Sources extends Array<NetworkSource<any>>> = UnionToIntersection<ExtractSourceEvents<Sources[number]>> extends infer R ? R extends Record<string, any> ? R : DefaultEventMap : DefaultEventMap;
type MaybePromise<T> = Extract<T, Promise<unknown>> extends never ? void : Promise<void>;
interface DefineNetworkOptions<Sources extends Array<NetworkSource<any>>> {
    /**
     * List of the network sources.
     * Every network source emits frames, and every frame describes how
     * to handle the various network scenarios, like mocking a response,
     * erroring the request, or performing it as-is.
     */
    sources: Sources;
    /**
     * List of handlers to describe the network.
     */
    handlers?: Array<AnyHandler> | HandlersController;
    context?: NetworkFrameResolutionContext;
    onUnhandledFrame?: UnhandledFrameHandle;
}
interface NetworkApi<Sources extends Array<NetworkSource<any>>> extends NetworkHandlersApi {
    readyState: NetworkReadyState;
    /**
     * Enable the network interception and handling.
     */
    enable: () => MaybePromise<ReturnType<Sources[number]['enable']>>;
    /**
     * Disable the network interception and handling.
     */
    disable: () => MaybePromise<ReturnType<Sources[number]['disable']>>;
    /**
     * Configure the network instance with additional options.
     * The options provided in the `.configure()` call will override the same
     * options in the `defineNetwork()` call.
     */
    configure: (options: Partial<DefineNetworkOptions<Sources>>) => void;
    events: Emitter<MergeEventMaps<Sources>>;
}
interface NetworkHandlersApi {
    use: (...handlers: Array<AnyHandler>) => void;
    resetHandlers: (...handlers: Array<AnyHandler>) => void;
    restoreHandlers: () => void;
    listHandlers: () => ReadonlyArray<AnyHandler>;
}
declare enum NetworkReadyState {
    DISABLED = 0,
    ENABLED = 1
}
/**
 * Define a network instance with the given configuration.
 * @example
 * import { InterceptorSource } from 'msw/experimental'
 * import { handlers } from './handlers'
 *
 * const network = defineNetwork({
 *   sources: [new InterceptorSource({ interceptors })],
 *   handlers,
 * })
 * await network.enable()
 */
declare function defineNetwork<Sources extends Array<NetworkSource<any>>>(options: DefineNetworkOptions<Sources>): NetworkApi<Sources>;

export { type DefineNetworkOptions, type NetworkApi, type NetworkHandlersApi, NetworkReadyState, defineNetwork };
