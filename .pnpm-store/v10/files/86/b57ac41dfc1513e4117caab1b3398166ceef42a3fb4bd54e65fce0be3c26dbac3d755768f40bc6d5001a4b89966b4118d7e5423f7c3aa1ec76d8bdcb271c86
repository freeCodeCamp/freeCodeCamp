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
}
export type Func<T> = (...args: unknown[]) => T;
export type MongoInternalCommand = {
    findandmodify: boolean;
    createIndexes: boolean;
    count: boolean;
    aggregate: boolean;
    ismaster: boolean;
    indexes?: unknown[];
    query?: Record<string, unknown>;
    limit?: number;
    q?: Record<string, unknown>;
    u?: Record<string, unknown>;
};
export type ServerSession = {
    id: any;
    lastUse: number;
    txnNumber: number;
    isDirty: boolean;
};
export type CursorState = {
    cmd: MongoInternalCommand;
} & Record<string, unknown>;
export interface MongoResponseHookInformation {
    data: CommandResult;
}
export type CommandResult = {
    result?: unknown;
    connection?: unknown;
    message?: unknown;
};
export type WireProtocolInternal = {
    insert: (server: MongoInternalTopology, ns: string, ops: unknown[], options: unknown | Function, callback?: Function) => unknown;
    update: (server: MongoInternalTopology, ns: string, ops: unknown[], options: unknown | Function, callback?: Function) => unknown;
    remove: (server: MongoInternalTopology, ns: string, ops: unknown[], options: unknown | Function, callback?: Function) => unknown;
    killCursors: (server: MongoInternalTopology, ns: string, cursorState: CursorState, callback: Function) => unknown;
    getMore: (server: MongoInternalTopology, ns: string, cursorState: CursorState, batchSize: number, options: unknown | Function, callback?: Function) => unknown;
    query: (server: MongoInternalTopology, ns: string, cmd: MongoInternalCommand, cursorState: CursorState, options: unknown | Function, callback?: Function) => unknown;
    command: (server: MongoInternalTopology, ns: string, cmd: MongoInternalCommand, options: unknown | Function, callback?: Function) => unknown;
};
export type MongoInternalTopology = {
    s?: {
        options?: {
            host?: string;
            port?: number;
            servername?: string;
        };
        host?: string;
        port?: number;
    };
    description?: {
        address?: string;
    };
};
export declare enum MongodbCommandType {
    CREATE_INDEXES = "createIndexes",
    FIND_AND_MODIFY = "findAndModify",
    IS_MASTER = "isMaster",
    COUNT = "count",
    AGGREGATE = "aggregate",
    UNKNOWN = "unknown"
}
export type Document = {
    [key: string]: any;
};
export interface MongodbNamespace {
    db: string;
    collection?: string;
}
export type V4Connection = {
    command: Function;
    commandPromise(ns: MongodbNamespace, cmd: Document, options: undefined | unknown, responseType: undefined | unknown): Promise<any>;
    commandCallback(ns: MongodbNamespace, cmd: Document, options: undefined | unknown, callback: any): void;
};
export type V4ConnectionPool = {
    checkOut: (callback: (error: any, connection: any) => void) => void;
};
export type V4Connect = {
    connect: Function;
    connectPromise: (options: any) => Promise<any>;
    connectCallback: (options: any, callback: any) => void;
};
export type V4Session = {
    acquire: () => ServerSession;
    release: (session: ServerSession) => void;
};
/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#replacer
 */
export type Replacer = (key: string, value: unknown) => unknown;
//# sourceMappingURL=internal-types.d.ts.map