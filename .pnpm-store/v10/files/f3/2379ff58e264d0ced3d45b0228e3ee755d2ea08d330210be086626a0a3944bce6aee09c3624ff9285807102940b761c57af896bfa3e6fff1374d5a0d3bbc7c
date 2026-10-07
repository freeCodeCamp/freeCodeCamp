/**
 * @public
 */
export type RequestHandlerOutput<ResponseType> = {
    response: ResponseType;
};
/**
 * @public
 */
export interface RequestHandler<RequestType, ResponseType, HandlerOptions = {}> {
    /**
     * metadata contains information of a handler. For example
     * 'h2' refers this handler is for handling HTTP/2 requests,
     * whereas 'h1' refers handling HTTP1 requests
     */
    metadata?: RequestHandlerMetadata;
    destroy?: () => void;
    handle: (request: RequestType, handlerOptions?: HandlerOptions) => Promise<RequestHandlerOutput<ResponseType>>;
}
/**
 * @public
 */
export interface RequestHandlerMetadata {
    handlerProtocol: RequestHandlerProtocol | string;
}
export declare enum RequestHandlerProtocol {
    HTTP_0_9 = "http/0.9",
    HTTP_1_0 = "http/1.0",
    TDS_8_0 = "tds/8.0"
}
export interface RequestContext {
    destination: URL;
}
