import { ClientRequest } from 'http';
declare const reentry: unique symbol;
interface TimedOutOptions {
    host?: string;
    hostname?: string;
    protocol?: string;
}
export interface Delays {
    lookup?: number;
    connect?: number;
    secureConnect?: number;
    socket?: number;
    response?: number;
    send?: number;
    request?: number;
}
export declare type ErrorCode = 'ETIMEDOUT' | 'ECONNRESET' | 'EADDRINUSE' | 'ECONNREFUSED' | 'EPIPE' | 'ENOTFOUND' | 'ENETUNREACH' | 'EAI_AGAIN';
export declare class TimeoutError extends Error {
    event: string;
    code: ErrorCode;
    constructor(threshold: number, event: string);
}
declare const _default: (request: ClientRequest, delays: Delays, options: TimedOutOptions) => () => void;
export default _default;
declare module 'http' {
    interface ClientRequest {
        [reentry]: boolean;
    }
}
