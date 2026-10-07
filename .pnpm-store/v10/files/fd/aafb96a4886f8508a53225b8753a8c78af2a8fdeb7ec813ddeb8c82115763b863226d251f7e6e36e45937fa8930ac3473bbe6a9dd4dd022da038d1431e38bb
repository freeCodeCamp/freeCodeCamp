import { InstrumentationConfig } from '@opentelemetry/instrumentation';
import { Span } from '@opentelemetry/api';
export interface MongoDBInstrumentationExecutionResponseHook {
    (span: Span, responseInfo: MongoResponseHookInformation): void;
}
/**
 * Function that can be used to serialize db.statement tag
 * @param cmd - MongoDB command object
 *
 * @returns serialized string that will be used as the db.statement attribute.
 */
export type DbStatementSerializer = (cmd: Record<string, unknown>) => string;
export interface MongoDBInstrumentationConfig extends InstrumentationConfig {
    /**
     * If true, additional information about query parameters and
     * results will be attached (as `attributes`) to spans representing
     * database operations.
     */
    enhancedDatabaseReporting?: boolean;
    /**
     * Hook that allows adding custom span attributes based on the data
     * returned from MongoDB actions.
     *
     * @default undefined
     */
    responseHook?: MongoDBInstrumentationExecutionResponseHook;
    /**
     * Custom serializer function for the db.statement tag
     */
    dbStatementSerializer?: DbStatementSerializer;
    /**
     * Require parent to create mongodb span, default when unset is true
     */
    requireParentSpan?: boolean;
}
export interface MongoResponseHookInformation {
    data: CommandResult;
}
export type CommandResult = {
    result?: unknown;
    connection?: unknown;
    message?: unknown;
};
export declare enum MongodbCommandType {
    CREATE_INDEXES = "createIndexes",
    FIND_AND_MODIFY = "findAndModify",
    IS_MASTER = "isMaster",
    COUNT = "count",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=types.d.ts.map