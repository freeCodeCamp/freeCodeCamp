import type { Client } from '../client';
import type { Envelope } from './envelope';
export type TransportRequest = {
    body: string | Uint8Array;
};
export type TransportMakeRequestResponse = {
    statusCode?: number;
    headers?: {
        [key: string]: string | null;
        'x-sentry-rate-limits': string | null;
        'retry-after': string | null;
    };
};
export interface InternalBaseTransportOptions {
    /**
     * @ignore
     * Users should pass the tunnel property via the init/client options.
     * This is only used by the SDK to pass the tunnel to the transport.
     */
    tunnel?: string;
    bufferSize?: number;
    recordDroppedEvent: Client['recordDroppedEvent'];
}
export interface BaseTransportOptions extends InternalBaseTransportOptions {
    url: string;
    /**
     * Custom HTTP headers to be added to requests made by the transport.
     */
    headers?: {
        [key: string]: string;
    };
}
export interface Transport {
    send(request: Envelope): PromiseLike<TransportMakeRequestResponse>;
    flush(timeout?: number): PromiseLike<boolean>;
}
export type TransportRequestExecutor = (request: TransportRequest) => PromiseLike<TransportMakeRequestResponse>;
//# sourceMappingURL=transport.d.ts.map