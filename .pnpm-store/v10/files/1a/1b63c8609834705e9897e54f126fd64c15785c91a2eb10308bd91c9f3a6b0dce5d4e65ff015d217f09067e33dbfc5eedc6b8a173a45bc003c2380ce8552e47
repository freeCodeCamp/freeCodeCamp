import * as opentracing from '../index';
import Reference from '../reference';
import MockContext from './mock_context';
import MockTracer from './mock_tracer';
export interface DebugInfo {
    uuid: string;
    operation: string;
    millis: [number, number, number];
    tags?: {
        [key: string]: any;
    };
}
/**
 * OpenTracing Span implementation designed for use in unit tests.
 */
export declare class MockSpan extends opentracing.Span {
    private _operationName;
    private _tags;
    private _logs;
    _finishMs: number;
    private _mockTracer;
    private _uuid;
    private _startMs;
    _startStack?: string;
    protected _context(): MockContext;
    protected _setOperationName(name: string): void;
    protected _addTags(set: {
        [key: string]: any;
    }): void;
    protected _log(fields: {
        [key: string]: any;
    }, timestamp?: number): void;
    protected _finish(finishTime?: number): void;
    constructor(tracer: MockTracer);
    uuid(): string;
    operationName(): string;
    durationMs(): number;
    tags(): {
        [key: string]: any;
    };
    tracer(): opentracing.Tracer;
    private _generateUUID;
    addReference(ref: Reference): void;
    /**
     * Returns a simplified object better for console.log()'ing.
     */
    debug(): DebugInfo;
}
export default MockSpan;
//# sourceMappingURL=mock_span.d.ts.map