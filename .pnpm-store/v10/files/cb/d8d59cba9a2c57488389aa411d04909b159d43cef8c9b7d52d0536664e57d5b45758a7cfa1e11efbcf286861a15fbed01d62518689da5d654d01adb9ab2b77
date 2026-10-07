import type { Span } from '@opentelemetry/api';
import type { InstrumentationConfig, SemconvStability } from '@opentelemetry/instrumentation';
/**
 * Function that can be used to serialize db.statement tag
 * @param cmdName - The name of the command (eg. set, get, mset)
 * @param cmdArgs - Array of arguments passed to the command
 * @returns serialized string that will be used as the db.statement attribute.
 */
export type DbStatementSerializer = (cmdName: string, cmdArgs: Array<string | Buffer>) => string;
/**
 * Function that can be used to add custom attributes to span on response from redis server
 */
export interface RedisResponseCustomAttributeFunction {
    (span: Span, cmdName: string, cmdArgs: Array<string | Buffer>, response: unknown): void;
}
export interface RedisInstrumentationConfig extends InstrumentationConfig {
    /** Custom serializer function for the db.statement tag */
    dbStatementSerializer?: DbStatementSerializer;
    /** Function for adding custom attributes on db response */
    responseHook?: RedisResponseCustomAttributeFunction;
    /** Require parent to create redis span, default when unset is false */
    requireParentSpan?: boolean;
    /**
     * Controls which semantic-convention attributes are emitted on spans.
     * Default: 'OLD'.
     */
    semconvStability?: SemconvStability;
}
export type CommandArgs = Array<string | Buffer | number | any[]>;
/**
 * Function that can be used to serialize db.statement tag for ioredis
 */
export type IORedisDbStatementSerializer = (cmdName: string, cmdArgs: CommandArgs) => string;
export interface IORedisRequestHookInformation {
    moduleVersion?: string;
    cmdName: string;
    cmdArgs: CommandArgs;
}
export interface RedisRequestCustomAttributeFunction {
    (span: Span, requestInfo: IORedisRequestHookInformation): void;
}
/**
 * Function that can be used to add custom attributes to span on response from redis server (ioredis)
 */
export interface IORedisResponseCustomAttributeFunction {
    (span: Span, cmdName: string, cmdArgs: CommandArgs, response: unknown): void;
}
export interface IORedisInstrumentationConfig extends InstrumentationConfig {
    /** Custom serializer function for the db.statement tag */
    dbStatementSerializer?: IORedisDbStatementSerializer;
    /** Function for adding custom attributes on db request */
    requestHook?: RedisRequestCustomAttributeFunction;
    /** Function for adding custom attributes on db response */
    responseHook?: IORedisResponseCustomAttributeFunction;
    /** Require parent to create ioredis span, default when unset is true */
    requireParentSpan?: boolean;
}
//# sourceMappingURL=types.d.ts.map