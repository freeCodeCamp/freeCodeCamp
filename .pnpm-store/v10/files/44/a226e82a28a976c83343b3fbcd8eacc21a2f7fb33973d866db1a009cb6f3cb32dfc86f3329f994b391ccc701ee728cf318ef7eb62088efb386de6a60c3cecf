export interface Connection {
    config: ConnectionConfig;
    query: (...args: any[]) => Query;
    execute: (...args: any[]) => Query;
    [key: string]: any;
}
export interface ConnectionConfig {
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    connectionConfig?: ConnectionConfig;
    [key: string]: any;
}
export interface Query {
    sql: string;
    onResult?: (...args: any[]) => any;
    once(event: string, callback: (...args: any[]) => void): Query;
    [key: string]: any;
}
export interface QueryOptions {
    sql: string;
    values?: any | any[] | {
        [param: string]: any;
    };
    [key: string]: any;
}
export interface QueryError extends Error {
    code?: string;
    errno?: number;
    sqlState?: string;
    sqlMessage?: string;
    [key: string]: any;
}
export interface FieldPacket {
    [key: string]: any;
}
export type FormatFunction = (sql: string, values?: any[], stringifyObjects?: boolean, timeZone?: string) => string;
//# sourceMappingURL=mysql2-types.d.ts.map
