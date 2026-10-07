/// <reference types="node" />
/// <reference types="node" />
import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import type { NodeHttpHandlerOptions } from "@smithy/types";
import { HttpHandlerOptions, Provider } from "@smithy/types";
import { Agent as hAgent } from "http";
import { Agent as hsAgent } from "https";
export { NodeHttpHandlerOptions };
export declare const DEFAULT_REQUEST_TIMEOUT = 0;
export declare class NodeHttpHandler implements HttpHandler<NodeHttpHandlerOptions> {
    private config?;
    private configProvider;
    private socketWarningTimestamp;
    readonly metadata: {
        handlerProtocol: string;
    };
    /**
     * @returns the input if it is an HttpHandler of any class,
     * or instantiates a new instance of this handler.
     */
    static create(instanceOrOptions?: HttpHandler<any> | NodeHttpHandlerOptions | Provider<NodeHttpHandlerOptions | void>): NodeHttpHandler | HttpHandler<any>;
    /**
     * @internal
     *
     * @param agent - http(s) agent in use by the NodeHttpHandler instance.
     * @returns timestamp of last emitted warning.
     */
    static checkSocketUsage(agent: hAgent | hsAgent, socketWarningTimestamp: number): number;
    constructor(options?: NodeHttpHandlerOptions | Provider<NodeHttpHandlerOptions | void>);
    private resolveDefaultConfig;
    destroy(): void;
    handle(request: HttpRequest, { abortSignal }?: HttpHandlerOptions): Promise<{
        response: HttpResponse;
    }>;
    updateHttpClientConfig(key: keyof NodeHttpHandlerOptions, value: NodeHttpHandlerOptions[typeof key]): void;
    httpHandlerConfigs(): NodeHttpHandlerOptions;
}
