/// <reference types="node" />
import net from 'net';
import tls from 'tls';
import { Url } from 'url';
import { AgentOptions } from 'agent-base';
import { OutgoingHttpHeaders } from 'http';
import _HttpsProxyAgent from './agent';
declare function createHttpsProxyAgent(opts: string | createHttpsProxyAgent.HttpsProxyAgentOptions): _HttpsProxyAgent;
declare namespace createHttpsProxyAgent {
    interface BaseHttpsProxyAgentOptions {
        headers?: OutgoingHttpHeaders;
        secureProxy?: boolean;
        host?: string | null;
        path?: string | null;
        port?: string | number | null;
    }
    export interface HttpsProxyAgentOptions extends AgentOptions, BaseHttpsProxyAgentOptions, Partial<Omit<Url & net.NetConnectOpts & tls.ConnectionOptions, keyof BaseHttpsProxyAgentOptions>> {
    }
    export type HttpsProxyAgent = _HttpsProxyAgent;
    export const HttpsProxyAgent: typeof _HttpsProxyAgent;
    export {};
}
export = createHttpsProxyAgent;
