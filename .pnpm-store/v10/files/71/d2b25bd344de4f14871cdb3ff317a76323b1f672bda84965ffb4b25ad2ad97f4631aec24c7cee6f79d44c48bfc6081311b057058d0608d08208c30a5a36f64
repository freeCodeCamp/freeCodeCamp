import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import { Attributes, Span } from '@opentelemetry/api';
export interface UndiciRequest {
    origin: string;
    method: string;
    path: string;
    /**
     * Serialized string of headers in the form `name: value\r\n` for v5
     * Array of strings `[key1, value1, key2, value2]`, where values are
     * `string | string[]` for v6
     */
    headers: string | (string | string[])[];
    /**
     * Helper method to add headers (from v6)
     */
    addHeader: (name: string, value: string) => void;
    throwOnError: boolean;
    completed: boolean;
    aborted: boolean;
    idempotent: boolean;
    contentLength: number | null;
    contentType: string | null;
    body: any;
}
export interface UndiciResponse {
    headers: Buffer[];
    statusCode: number;
    statusText: string;
}
export interface IgnoreRequestFunction<T = UndiciRequest> {
    (request: T): boolean;
}
export interface RequestHookFunction<T = UndiciRequest> {
    (span: Span, request: T): void;
}
export interface ResponseHookFunction<RequestType = UndiciRequest, ResponseType = UndiciResponse> {
    (span: Span, info: {
        request: RequestType;
        response: ResponseType;
    }): void;
}
export interface StartSpanHookFunction<T = UndiciRequest> {
    (request: T): Attributes;
}
export interface UndiciInstrumentationConfig<RequestType = UndiciRequest, ResponseType = UndiciResponse> extends InstrumentationConfig {
    /** Not trace all outgoing requests that matched with custom function */
    ignoreRequestHook?: IgnoreRequestFunction<RequestType>;
    /** Function for adding custom attributes before request is handled */
    requestHook?: RequestHookFunction<RequestType>;
    /** Function called once response headers have been received */
    responseHook?: ResponseHookFunction<RequestType, ResponseType>;
    /** Function for adding custom attributes before a span is started */
    startSpanHook?: StartSpanHookFunction<RequestType>;
    /** Require parent to create span for outgoing requests */
    requireParentforSpans?: boolean;
    /** Map the following HTTP headers to span attributes. */
    headersToSpanAttributes?: {
        requestHeaders?: string[];
        responseHeaders?: string[];
    };
}
//# sourceMappingURL=types.d.ts.map
