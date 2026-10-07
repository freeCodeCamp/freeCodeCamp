import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import type { FetchHttpHandlerOptions } from "@smithy/types";
import { HttpHandlerOptions, Provider } from "@smithy/types";
export { FetchHttpHandlerOptions };
type FetchHttpHandlerConfig = FetchHttpHandlerOptions;
/**
 * @internal
 * Detection of keepalive support. Can be overridden for testing.
 */
export declare const keepAliveSupport: {
    supported: boolean;
};
/**
 * @public
 *
 * HttpHandler implementation using browsers' `fetch` global function.
 */
export declare class FetchHttpHandler implements HttpHandler<FetchHttpHandlerConfig> {
    private config?;
    private configProvider;
    /**
     * @returns the input if it is an HttpHandler of any class,
     * or instantiates a new instance of this handler.
     */
    static create(instanceOrOptions?: HttpHandler<any> | FetchHttpHandlerOptions | Provider<FetchHttpHandlerOptions | void>): FetchHttpHandler | HttpHandler<any>;
    constructor(options?: FetchHttpHandlerOptions | Provider<FetchHttpHandlerOptions | void>);
    destroy(): void;
    handle(request: HttpRequest, { abortSignal }?: HttpHandlerOptions): Promise<{
        response: HttpResponse;
    }>;
    updateHttpClientConfig(key: keyof FetchHttpHandlerConfig, value: FetchHttpHandlerConfig[typeof key]): void;
    httpHandlerConfigs(): FetchHttpHandlerConfig;
}
