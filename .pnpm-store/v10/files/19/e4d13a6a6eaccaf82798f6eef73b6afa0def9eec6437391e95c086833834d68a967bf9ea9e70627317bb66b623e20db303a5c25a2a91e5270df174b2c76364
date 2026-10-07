import type { UndiciRequest, UndiciResponse } from './types';
export interface ListenerRecord {
    name: string;
    unsubscribe: () => void;
}
export interface RequestMessage {
    request: UndiciRequest;
}
export interface RequestHeadersMessage {
    request: UndiciRequest;
    socket: any;
}
export interface ResponseHeadersMessage {
    request: UndiciRequest;
    response: UndiciResponse;
}
export interface RequestTrailersMessage {
    request: UndiciRequest;
    response: UndiciResponse;
}
export interface RequestErrorMessage {
    request: UndiciRequest;
    error: Error;
}
//# sourceMappingURL=internal-types.d.ts.map