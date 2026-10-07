import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { HttpHandlerOptions, Provider } from "@smithy/types";
/**
 * Represents the http2 options that can be passed to a node http2 client.
 */
export interface NodeHttp2HandlerOptions {
    /**
     * The maximum time in milliseconds that a stream may remain idle before it
     * is closed.
     */
    requestTimeout?: number;
    /**
     * The maximum time in milliseconds that a session or socket may remain idle
     * before it is closed.
     * https://nodejs.org/docs/latest-v12.x/api/http2.html#http2_http2session_and_sockets
     */
    sessionTimeout?: number;
    /**
     * Disables processing concurrent streams on a ClientHttp2Session instance. When set
     * to true, a new session instance is created for each request to a URL.
     * **Default:** false.
     * https://nodejs.org/api/http2.html#http2_class_clienthttp2session
     */
    disableConcurrentStreams?: boolean;
    /**
     * Maximum number of concurrent Http2Stream instances per ClientHttp2Session. Each session
     * may have up to 2^31-1 Http2Stream instances over its lifetime.
     * This value must be greater than or equal to 0.
     * https://nodejs.org/api/http2.html#class-http2stream
     */
    maxConcurrentStreams?: number;
}
export declare class NodeHttp2Handler implements HttpHandler<NodeHttp2HandlerOptions> {
    private config?;
    private configProvider;
    readonly metadata: {
        handlerProtocol: string;
    };
    private readonly connectionManager;
    /**
     * @returns the input if it is an HttpHandler of any class,
     * or instantiates a new instance of this handler.
     */
    static create(instanceOrOptions?: HttpHandler<any> | NodeHttp2HandlerOptions | Provider<NodeHttp2HandlerOptions | void>): HttpHandler<any> | NodeHttp2Handler;
    constructor(options?: NodeHttp2HandlerOptions | Provider<NodeHttp2HandlerOptions | void>);
    destroy(): void;
    handle(request: HttpRequest, { abortSignal }?: HttpHandlerOptions): Promise<{
        response: HttpResponse;
    }>;
    updateHttpClientConfig(key: keyof NodeHttp2HandlerOptions, value: NodeHttp2HandlerOptions[typeof key]): void;
    httpHandlerConfigs(): NodeHttp2HandlerOptions;
    /**
     * Destroys a session.
     * @param session The session to destroy.
     */
    private destroySession;
}
