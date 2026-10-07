/// <reference types="node" />
import net from 'net';
import { Agent, ClientRequest, RequestOptions } from 'agent-base';
import { HttpsProxyAgentOptions } from '.';
/**
 * The `HttpsProxyAgent` implements an HTTP Agent subclass that connects to
 * the specified "HTTP(s) proxy server" in order to proxy HTTPS requests.
 *
 * Outgoing HTTP requests are first tunneled through the proxy server using the
 * `CONNECT` HTTP request method to establish a connection to the proxy server,
 * and then the proxy server connects to the destination target and issues the
 * HTTP request from the proxy server.
 *
 * `https:` requests have their socket connection upgraded to TLS once
 * the connection to the proxy server has been established.
 *
 * @api public
 */
export default class HttpsProxyAgent extends Agent {
    private secureProxy;
    private proxy;
    constructor(_opts: string | HttpsProxyAgentOptions);
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     *
     * @api protected
     */
    callback(req: ClientRequest, opts: RequestOptions): Promise<net.Socket>;
}
