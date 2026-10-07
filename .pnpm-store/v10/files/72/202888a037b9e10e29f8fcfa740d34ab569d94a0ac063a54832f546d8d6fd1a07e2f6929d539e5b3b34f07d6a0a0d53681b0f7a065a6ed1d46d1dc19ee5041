import type { TraceState as TraceStateApi } from '@opentelemetry/api';
/**
 * TraceState must be a class and not a simple object type because of the spec
 * requirement (https://www.w3.org/TR/trace-context/#tracestate-field).
 *
 * Here is the list of allowed mutations:
 * - New key-value pair should be added into the beginning of the list
 * - The value of any key can be updated. Modified keys MUST be moved to the
 * beginning of the list.
 */
export declare class TraceState implements TraceStateApi {
    private _length;
    private _rawTraceState;
    private _internalState;
    constructor(rawTraceState?: string);
    set(key: string, value: string): TraceState;
    unset(key: string): TraceState;
    get(key: string): string | undefined;
    serialize(): string;
    private _getState;
    private _fromState;
}
//# sourceMappingURL=TraceState.d.ts.map