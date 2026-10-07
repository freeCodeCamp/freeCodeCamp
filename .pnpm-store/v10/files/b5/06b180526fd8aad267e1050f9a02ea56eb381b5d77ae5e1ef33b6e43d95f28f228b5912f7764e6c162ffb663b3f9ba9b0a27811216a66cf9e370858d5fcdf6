import { FetchHttpHandlerOptions, HttpHandlerOptions, NodeHttpHandlerOptions, RequestHandler } from "@smithy/types";
import { HttpRequest } from "./httpRequest";
import { HttpResponse } from "./httpResponse";
/**
 * @internal
 */
export type HttpHandler<HttpHandlerConfig extends object = {}> = RequestHandler<HttpRequest, HttpResponse, HttpHandlerOptions> & {
    /**
     * @internal
     * @param key
     * @param value
     */
    updateHttpClientConfig(key: keyof HttpHandlerConfig, value: HttpHandlerConfig[typeof key]): void;
    /**
     * @internal
     */
    httpHandlerConfigs(): HttpHandlerConfig;
};
/**
 * @public
 *
 * A type representing the accepted user inputs for the `requestHandler` field
 * of a client's constructor object.
 *
 * You may provide an instance of an HttpHandler, or alternatively
 * provide the constructor arguments as an object which will be passed
 * to the constructor of the default request handler.
 *
 * The default class constructor to which your arguments will be passed
 * varies. The Node.js default is the NodeHttpHandler and the browser/react-native
 * default is the FetchHttpHandler. In rarer cases specific clients may be
 * configured to use other default implementations such as Websocket or HTTP2.
 *
 * The fallback type Record<string, unknown> is part of the union to allow
 * passing constructor params to an unknown requestHandler type.
 */
export type HttpHandlerUserInput = HttpHandler | NodeHttpHandlerOptions | FetchHttpHandlerOptions | Record<string, unknown>;
