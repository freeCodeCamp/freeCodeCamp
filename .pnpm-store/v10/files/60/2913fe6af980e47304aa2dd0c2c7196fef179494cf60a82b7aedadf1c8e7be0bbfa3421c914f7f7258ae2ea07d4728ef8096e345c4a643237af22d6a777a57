/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
/// <reference types="node" />
import * as net from 'net';
import * as tls from 'tls';
import * as http from 'http';
import type { Duplex } from 'stream';
export * from './helpers';
interface HttpConnectOpts extends net.TcpNetConnectOpts {
    secureEndpoint: false;
    protocol?: string;
}
interface HttpsConnectOpts extends tls.ConnectionOptions {
    secureEndpoint: true;
    protocol?: string;
    port: number;
}
export type AgentConnectOpts = HttpConnectOpts | HttpsConnectOpts;
declare const INTERNAL: unique symbol;
export declare abstract class Agent extends http.Agent {
    private [INTERNAL];
    options: Partial<net.TcpNetConnectOpts & tls.ConnectionOptions>;
    keepAlive: boolean;
    constructor(opts?: http.AgentOptions);
    abstract connect(req: http.ClientRequest, options: AgentConnectOpts): Promise<Duplex | http.Agent> | Duplex | http.Agent;
    /**
     * Determine whether this is an `http` or `https` request.
     */
    isSecureEndpoint(options?: AgentConnectOpts): boolean;
    private incrementSockets;
    private decrementSockets;
    getName(options?: AgentConnectOpts): string;
    createSocket(req: http.ClientRequest, options: AgentConnectOpts, cb: (err: Error | null, s?: Duplex) => void): void;
    createConnection(): Duplex;
    get defaultPort(): number;
    set defaultPort(v: number);
    get protocol(): string;
    set protocol(v: string);
}
//# sourceMappingURL=index.d.ts.map