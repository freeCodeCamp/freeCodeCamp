import { DefaultEventMap, Emitter } from 'rettime';
import { UnhandledRequestStrategy } from './utils/request/onUnhandledRequest.js';

interface SharedOptions {
    /**
     * Specifies how to react to a request that has no corresponding
     * request handler. Warns on unhandled requests by default.
     *
     * @example worker.start({ onUnhandledRequest: 'bypass' })
     * @example worker.start({ onUnhandledRequest: 'warn' })
     * @example server.listen({ onUnhandledRequest: 'error' })
     */
    onUnhandledRequest?: UnhandledRequestStrategy;
}
/**
 * @deprecated
 * Please use `HttpNetworkFrameEventMap` or `WebSocketNetworkFrameEventMap` instead.
 */
type LifeCycleEventsMap = {
    'request:start': [
        args: {
            request: Request;
            requestId: string;
        }
    ];
    'request:match': [
        args: {
            request: Request;
            requestId: string;
        }
    ];
    'request:unhandled': [
        args: {
            request: Request;
            requestId: string;
        }
    ];
    'request:end': [
        args: {
            request: Request;
            requestId: string;
        }
    ];
    'response:mocked': [
        args: {
            response: Response;
            request: Request;
            requestId: string;
        }
    ];
    'response:bypass': [
        args: {
            response: Response;
            request: Request;
            requestId: string;
        }
    ];
    unhandledException: [
        args: {
            error: Error;
            request: Request;
            requestId: string;
        }
    ];
};
type LifeCycleEventEmitter<EventMap extends DefaultEventMap> = Pick<Emitter<EventMap>, 'on' | 'removeListener' | 'removeAllListeners'>;

export type { LifeCycleEventEmitter, LifeCycleEventsMap, SharedOptions };
