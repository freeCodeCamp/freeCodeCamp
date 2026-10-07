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
import * as http from 'node:http';
import type * as net from 'node:net';
import type { Duplex } from 'node:stream';
import type * as tls from 'node:tls';
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
    createSocket(req: http.ClientRequest, options: AgentConnectOpts, cb: (err: Error | null, s?: Duplex) => void): void;
    createConnection(): Duplex;
    get defaultPort(): number;
    set defaultPort(v: number);
    get protocol(): string;
    set protocol(v: string);
}
//# sourceMappingURL=base.d.ts.map