/// <reference types="node" />
import net from 'net';
import { Agent, ClientRequest, RequestOptions } from 'agent-base';
import { HttpProxyAgentOptions } from '.';
interface HttpProxyAgentClientRequest extends ClientRequest {
    path: string;
    output?: string[];
    outputData?: {
        data: string;
    }[];
    _header?: string | null;
    _implicitHeader(): void;
}
/**
 * The `HttpProxyAgent` implements an HTTP Agent subclass that connects
 * to the specified "HTTP proxy server" in order to proxy HTTP requests.
 *
 * @api public
 */
export default class HttpProxyAgent extends Agent {
    private secureProxy;
    private proxy;
    constructor(_opts: string | HttpProxyAgentOptions);
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */
    callback(req: HttpProxyAgentClientRequest, opts: RequestOptions): Promise<net.Socket>;
}
export {};
