import { a as ResponseResolver } from './HttpResponse-CxHR1nNN.mjs';
import { HttpRequestResolverExtras, HttpHandler } from './handlers/HttpHandler.mjs';
import { PathParams, Path } from './utils/matching/matchRequestUrl.mjs';
import '@mswjs/interceptors';
import './utils/internal/isIterable.mjs';
import './typeUtils.mjs';
import 'graphql';

type EventMapConstraint = {
    message?: unknown;
    [key: string]: unknown;
    [key: symbol | number]: never;
};
type ServerSentEventResolverExtras<EventMap extends EventMapConstraint, Params extends PathParams> = HttpRequestResolverExtras<Params> & {
    client: ServerSentEventClient<EventMap>;
    server: ServerSentEventServer;
};
type ServerSentEventResolver<EventMap extends EventMapConstraint, Params extends PathParams> = ResponseResolver<ServerSentEventResolverExtras<EventMap, Params>, any, any>;
type ServerSentEventRequestHandler = <EventMap extends EventMapConstraint = {
    message: unknown;
}, Params extends PathParams<keyof Params> = PathParams, RequestPath extends Path = Path>(path: RequestPath, resolver: ServerSentEventResolver<EventMap, Params>) => HttpHandler;
type ServerSentEventMessage<EventMap extends EventMapConstraint = {
    message: unknown;
}> = ToEventDiscriminatedUnion<EventMap & {
    message: unknown;
}> | {
    id?: never;
    event?: never;
    data?: never;
    retry: number;
};
/**
 * Intercept Server-Sent Events (SSE).
 *
 * @example
 * sse('http://localhost:4321', ({ client }) => {
 *   client.send({ data: 'hello world' })
 * })
 *
 * @see {@link https://mswjs.io/docs/sse/ Mocking Server-Sent Events}
 * @see {@link https://mswjs.io/docs/api/sse `sse()` API reference}
 */
declare const sse: ServerSentEventRequestHandler;
type Values<T> = T[keyof T];
type Identity<T> = {
    [K in keyof T]: T[K];
} & unknown;
type ToEventDiscriminatedUnion<T> = Values<{
    [K in keyof T]: Identity<(K extends 'message' ? {
        id?: string;
        event?: K;
        data?: T[K];
        retry?: never;
    } : {
        id?: string;
        event: K;
        data?: T[K];
        retry?: never;
    }) & (undefined extends T[K] ? unknown : {
        data: unknown;
    })>;
}>;
declare const kClientEmitter: unique symbol;
declare class ServerSentEventClient<EventMap extends EventMapConstraint = {
    message: unknown;
}> {
    #private;
    private [kClientEmitter]?;
    constructor(writable: WritableStream);
    /**
     * Sends the given payload to the intercepted `EventSource`.
     */
    send(payload: ServerSentEventMessage<EventMap>): void;
    /**
     * Dispatches the given event on the intercepted `EventSource`.
     */
    dispatchEvent(event: Event): void;
    /**
     * Errors the underlying `EventSource`, closing the connection with an error.
     * This is equivalent to aborting the connection and will produce a `TypeError: Failed to fetch`
     * error.
     */
    error(): void;
    /**
     * Closes the underlying `EventSource`, closing the connection.
     */
    close(): void;
}
declare class ServerSentEventServer {
    #private;
    constructor(args: {
        request: Request;
        client: ServerSentEventClient<any>;
    });
    /**
     * Establishes the actual connection for this SSE request
     * and returns the `EventSource` instance.
     */
    connect(): EventSource;
}

export { type ServerSentEventMessage, type ServerSentEventRequestHandler, type ServerSentEventResolver, type ServerSentEventResolverExtras, sse };
