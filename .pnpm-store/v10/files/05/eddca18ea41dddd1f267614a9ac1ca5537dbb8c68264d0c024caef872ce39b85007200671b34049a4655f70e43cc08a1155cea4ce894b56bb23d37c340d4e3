import { Interceptor, HttpRequestEventMap } from '@mswjs/interceptors';
import { WebSocketEventMap } from '@mswjs/interceptors/WebSocket';
import { NetworkSource } from './network-source.js';
import 'rettime';
import '../../on-unhandled-frame-BBR-P3kV.js';
import '../handlers-controller.js';
import '../../HttpResponse-aGiIzO91.js';
import '../../utils/internal/isIterable.js';
import '../../typeUtils.js';
import 'graphql';
import '../../utils/matching/matchRequestUrl.js';
import '../../handlers/WebSocketHandler.js';
import 'strict-event-emitter';

interface InterceptorSourceOptions {
    interceptors: Array<Interceptor<HttpRequestEventMap | WebSocketEventMap>>;
}
/**
 * Create a network source from the given list of interceptors.
 */
declare class InterceptorSource extends NetworkSource {
    #private;
    constructor(options: InterceptorSourceOptions);
    enable(): void;
    disable(): void;
}

export { InterceptorSource, type InterceptorSourceOptions };
