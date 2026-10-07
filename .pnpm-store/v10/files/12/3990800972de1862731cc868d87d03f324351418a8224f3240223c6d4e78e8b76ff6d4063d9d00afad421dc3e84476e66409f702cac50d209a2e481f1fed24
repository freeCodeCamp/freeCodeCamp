/// <reference types="node" />
import net from 'net';
import http from 'http';
import https from 'https';
import { Duplex } from 'stream';
import { EventEmitter } from 'events';
declare function createAgent(opts?: createAgent.AgentOptions): createAgent.Agent;
declare function createAgent(callback: createAgent.AgentCallback, opts?: createAgent.AgentOptions): createAgent.Agent;
declare namespace createAgent {
    interface ClientRequest extends http.ClientRequest {
        _last?: boolean;
        _hadError?: boolean;
        method: string;
    }
    interface AgentRequestOptions {
        host?: string;
        path?: string;
        port: number;
    }
    interface HttpRequestOptions extends AgentRequestOptions, Omit<http.RequestOptions, keyof AgentRequestOptions> {
        secureEndpoint: false;
    }
    interface HttpsRequestOptions extends AgentRequestOptions, Omit<https.RequestOptions, keyof AgentRequestOptions> {
        secureEndpoint: true;
    }
    type RequestOptions = HttpRequestOptions | HttpsRequestOptions;
    type AgentLike = Pick<createAgent.Agent, 'addRequest'> | http.Agent;
    type AgentCallbackReturn = Duplex | AgentLike;
    type AgentCallbackCallback = (err?: Error | null, socket?: createAgent.AgentCallbackReturn) => void;
    type AgentCallbackPromise = (req: createAgent.ClientRequest, opts: createAgent.RequestOptions) => createAgent.AgentCallbackReturn | Promise<createAgent.AgentCallbackReturn>;
    type AgentCallback = typeof Agent.prototype.callback;
    type AgentOptions = {
        timeout?: number;
    };
    /**
     * Base `http.Agent` implementation.
     * No pooling/keep-alive is implemented by default.
     *
     * @param {Function} callback
     * @api public
     */
    class Agent extends EventEmitter {
        timeout: number | null;
        maxFreeSockets: number;
        maxTotalSockets: number;
        maxSockets: number;
        sockets: {
            [key: string]: net.Socket[];
        };
        freeSockets: {
            [key: string]: net.Socket[];
        };
        requests: {
            [key: string]: http.IncomingMessage[];
        };
        options: https.AgentOptions;
        private promisifiedCallback?;
        private explicitDefaultPort?;
        private explicitProtocol?;
        constructor(callback?: createAgent.AgentCallback | createAgent.AgentOptions, _opts?: createAgent.AgentOptions);
        get defaultPort(): number;
        set defaultPort(v: number);
        get protocol(): string;
        set protocol(v: string);
        callback(req: createAgent.ClientRequest, opts: createAgent.RequestOptions, fn: createAgent.AgentCallbackCallback): void;
        callback(req: createAgent.ClientRequest, opts: createAgent.RequestOptions): createAgent.AgentCallbackReturn | Promise<createAgent.AgentCallbackReturn>;
        /**
         * Called by node-core's "_http_client.js" module when creating
         * a new HTTP request with this Agent instance.
         *
         * @api public
         */
        addRequest(req: ClientRequest, _opts: RequestOptions): void;
        freeSocket(socket: net.Socket, opts: AgentOptions): void;
        destroy(): void;
    }
}
export = createAgent;
