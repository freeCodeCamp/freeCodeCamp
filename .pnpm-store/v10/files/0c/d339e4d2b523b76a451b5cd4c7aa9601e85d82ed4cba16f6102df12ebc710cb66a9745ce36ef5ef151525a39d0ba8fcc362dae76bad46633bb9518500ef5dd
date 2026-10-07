import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import type { Span } from '@opentelemetry/api';
export interface MySQL2ResponseHookInformation {
    queryResults: any;
}
export interface MySQL2InstrumentationExecutionResponseHook {
    (span: Span, responseHookInfo: MySQL2ResponseHookInformation): void;
}
export interface MySQL2InstrumentationQueryMaskingHook {
    (query: string): string;
}
export interface MySQL2InstrumentationConfig extends InstrumentationConfig {
    maskStatement?: boolean;
    maskStatementHook?: MySQL2InstrumentationQueryMaskingHook;
    responseHook?: MySQL2InstrumentationExecutionResponseHook;
    addSqlCommenterCommentToQueries?: boolean;
}
//# sourceMappingURL=types.d.ts.map