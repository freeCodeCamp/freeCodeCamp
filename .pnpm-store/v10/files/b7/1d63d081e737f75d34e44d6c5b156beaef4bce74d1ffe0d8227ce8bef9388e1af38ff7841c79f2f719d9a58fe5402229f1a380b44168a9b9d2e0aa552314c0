/**
 * Aligned with upstream Undici request shape; see `packages/node/.../node-fetch/vendored/types.ts`
 * (vendored from `@opentelemetry/instrumentation-undici`).
 */
export interface UndiciRequest {
    origin: string;
    method: string;
    path: string;
    /**
     * Serialized string of headers in the form `name: value\r\n` for v5
     * Array of strings `[key1, value1, ...]` for v6 (values may be `string | string[]`)
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
    body: unknown;
}
export interface UndiciResponse {
    headers: Buffer[];
    statusCode: number;
    statusText: string;
}
//# sourceMappingURL=types.d.ts.map
