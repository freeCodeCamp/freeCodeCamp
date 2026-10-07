/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as net from 'net';
import * as tls from 'tls';
import * as http from 'http';
import { Agent, AgentConnectOpts } from 'agent-base';
import { URL } from 'url';
import type { OutgoingHttpHeaders } from 'http';
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