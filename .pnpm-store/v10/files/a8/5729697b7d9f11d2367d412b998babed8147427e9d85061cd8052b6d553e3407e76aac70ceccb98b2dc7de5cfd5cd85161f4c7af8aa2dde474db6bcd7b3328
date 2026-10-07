import type { WebFetchHeaders } from './webfetchapi';
type XHRSendInput = unknown;
export type ConsoleLevel = 'debug' | 'info' | 'warn' | 'error' | 'log' | 'assert' | 'trace';
export interface SentryWrappedXMLHttpRequest {
    __sentry_xhr_v3__?: SentryXhrData;
    __sentry_own_request__?: boolean;
    __sentry_xhr_span_id__?: string;
    setRequestHeader?: (key: string, val: string) => void;
    getResponseHeader?: (key: string) => string | null;
}
export interface SentryXhrData {
    method: string;
    url: string;
    status_code?: number;
    body?: XHRSendInput;
    request_body_size?: number;
    response_body_size?: number;
    request_headers: Record<string, string>;
}
export interface HandlerDataXhr {
    xhr: SentryWrappedXMLHttpRequest;
    startTimestamp?: number;
    endTimestamp?: number;
    error?: unknown;
    virtualError?: unknown;
}
interface SentryFetchData {
    method: string;
    url: string;
    request_body_size?: number;
    response_body_size?: number;
    __span?: string;
}
export interface HandlerDataFetch {
    args: any[];
    fetchData: SentryFetchData;
    startTimestamp: number;
    endTimestamp?: number;
    response?: {
        readonly ok: boolean;
        readonly status: number;
        readonly url: string;
        headers: WebFetchHeaders;
    };
    error?: unknown;
    virtualError?: unknown;
    /** Headers that the user passed to the fetch request. */
    headers?: WebFetchHeaders;
}
export interface HandlerDataDom {
    event: object | {
        target: object;
    };
    name: string;
    global?: boolean;
}
export interface HandlerDataConsole {
    level: ConsoleLevel;
    args: any[];
}
export interface HandlerDataHistory {
    /** The full URL of the previous page */
    from: string | undefined;
    /** The full URL of the new page */
    to: string;
}
export interface HandlerDataError {
    column?: number;
    error?: Error;
    line?: number;
    msg: string | object;
    url?: string;
}
export type HandlerDataUnhandledRejection = unknown;
export {};
//# sourceMappingURL=instrument.d.ts.map