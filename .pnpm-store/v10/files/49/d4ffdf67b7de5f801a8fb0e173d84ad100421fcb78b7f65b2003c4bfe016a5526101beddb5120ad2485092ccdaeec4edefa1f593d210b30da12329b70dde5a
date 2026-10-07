/// <reference types="node" />
import { ClientRequest, IncomingMessage } from 'http';
export interface Timings {
    start: number;
    socket?: number;
    lookup?: number;
    connect?: number;
    secureConnect?: number;
    upload?: number;
    response?: number;
    end?: number;
    error?: number;
    abort?: number;
    phases: {
        wait?: number;
        dns?: number;
        tcp?: number;
        tls?: number;
        request?: number;
        firstByte?: number;
        download?: number;
        total?: number;
    };
}
export interface ClientRequestWithTimings extends ClientRequest {
    timings?: Timings;
}
export interface IncomingMessageWithTimings extends IncomingMessage {
    timings?: Timings;
}
declare const timer: (request: ClientRequestWithTimings) => Timings;
export default timer;
