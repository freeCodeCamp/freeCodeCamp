import { Interceptor, HttpRequestEventMap } from '@mswjs/interceptors';
import { WebSocketEventMap } from '@mswjs/interceptors/WebSocket';
import { NetworkSource } from './network-source.mjs';
import 'rettime';
import '../../on-unhandled-frame-Cr1KOZ0I.mjs';
import '../handlers-controller.mjs';
import '../../HttpResponse-CxHR1nNN.mjs';
import '../../utils/internal/isIterable.mjs';
import '../../typeUtils.mjs';
import 'graphql';
import '../../utils/matching/matchRequestUrl.mjs';
import '../../handlers/WebSocketHandler.mjs';
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
