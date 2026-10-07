import type { ClientRequest } from 'node:http';
declare const reentry: unique symbol;
type TimedOutOptions = {
    host?: string;
    hostname?: string;
    protocol?: string;
};
export type Delays = {
    lookup?: number;
    socket?: number;
    connect?: number;
    secureConnect?: number;
    send?: number;
    response?: number;
    read?: number;
    request?: number;
};
export type ErrorCode = 'ETIMEDOUT' | 'ECONNRESET' | 'EADDRINUSE' | 'ECONNREFUSED' | 'EPIPE' | 'ENOTFOUND' | 'ENETUNREACH' | 'EAI_AGAIN';
export declare class TimeoutError extends Error {
    event: string;
    code: ErrorCode;
    constructor(threshold: number, event: string);
}
export default function timedOut(request: ClientRequest, delays: Delays, options: TimedOutOptions): () => void;
declare module 'http' {
    interface ClientRequest {
        [reentry]?: boolean;
    }
}
export {};
