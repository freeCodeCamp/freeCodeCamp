/**
 * This code was originally forked from https://github.com/TooTallNate/proxy-agents/tree/b133295fd16f6475578b6b15bd9b4e33ecb0d0b7
 * With the following LICENSE:
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Nathan Rajlich <nathan@tootallnate.net>*
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * 'Software'), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:*
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.*
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import type * as http from 'node:http';
import type { OutgoingHttpHeaders } from 'node:http';
import * as net from 'node:net';
import * as tls from 'node:tls';
import type { AgentConnectOpts } from './base';
import { Agent } from './base';
type Protocol<T> = T extends `${infer Protocol}:${infer _}` ? Protocol : never;
type ConnectOptsMap = {
    http: Omit<net.TcpNetConnectOpts, 'host' | 'port'>;
    https: Omit<tls.ConnectionOptions, 'host' | 'port'>;
};
type ConnectOpts<T> = {
    [P in keyof ConnectOptsMap]: Protocol<T> extends P ? ConnectOptsMap[P] : never;
}[keyof ConnectOptsMap];
export type HttpsProxyAgentOptions<T> = ConnectOpts<T> & http.AgentOptions & {
    headers?: OutgoingHttpHeaders | (() => OutgoingHttpHeaders);
};
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
 */
export declare class HttpsProxyAgent<Uri extends string> extends Agent {
    static protocols: readonly ["http", "https"];
    readonly proxy: URL;
    proxyHeaders: OutgoingHttpHeaders | (() => OutgoingHttpHeaders);
    connectOpts: net.TcpNetConnectOpts & tls.ConnectionOptions;
    constructor(proxy: Uri | URL, opts?: HttpsProxyAgentOptions<Uri>);
    /**
     * Called when the node-core HTTP client library is creating a
     * new HTTP request.
     */
    connect(req: http.ClientRequest, opts: AgentConnectOpts): Promise<net.Socket>;
}
export {};
//# sourceMappingURL=index.d.ts.map