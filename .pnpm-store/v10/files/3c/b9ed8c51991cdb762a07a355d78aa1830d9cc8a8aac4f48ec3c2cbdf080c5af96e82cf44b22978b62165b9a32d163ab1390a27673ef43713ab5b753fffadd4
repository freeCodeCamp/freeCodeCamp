export interface MysqlError extends Error {
    code: string;
    errno: number;
    fatal: boolean;
    sql?: string;
    sqlState?: string;
    sqlMessage?: string;
    [key: string]: any;
}
export interface ConnectionConfig {
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string;
    [key: string]: any;
}
export interface PoolConfig extends ConnectionConfig {
    connectionConfig?: ConnectionConfig;
    [key: string]: any;
}
export interface QueryOptions {
    sql: string;
    values?: any;
    [key: string]: any;
}
export interface FieldInfo {
    catalog: string;
    db: string;
    table: string;
    orgTable: string;
    name: string;
    orgName: string;
    charsetNr: number;
    length: number;
    type: number;
    [key: string]: any;
}
export type queryCallback = (err: MysqlError | null, results?: any, fields?: FieldInfo[]) => void;
export interface Query {
    sql: string;
    values?: any;
    on(event: string, listener: (...args: any[]) => void): this;
    [key: string]: any;
}
export type QueryFunction = {
    (query: string | QueryOptions, callback?: queryCallback): Query;
    (query: string | QueryOptions, values?: any, callback?: queryCallback): Query;
};
export interface Connection {
    config: ConnectionConfig;
    query: QueryFunction;
    [key: string]: any;
}
export interface PoolConnection extends Connection {
    release(): void;
    [key: string]: any;
}
export interface Pool {
    config: PoolConfig;
    query: QueryFunction;
    getConnection(callback: (err: MysqlError, connection: PoolConnection) => void): void;
    end(callback?: (err?: MysqlError) => void): void;
    on(event: string, listener: (...args: any[]) => void): this;
    [key: string]: any;
}
export interface PoolCluster {
    getConnection(callback: (err: MysqlError, connection: PoolConnection) => void): void;
    getConnection(pattern: string, callback: (err: MysqlError, connection: PoolConnection) => void): void;
    getConnection(pattern: string, selector: string, callback: (err: MysqlError, connection: PoolConnection) => void): void;
    add(config: PoolConfig): void;
    add(id: string, config: PoolConfig): void;
    [key: string]: any;
}
export declare function createConnection(connectionUri: string | ConnectionConfig): Connection;
export declare function createPool(config: string | PoolConfig): Pool;
export declare function createPoolCluster(config?: PoolConfig): PoolCluster;
//# sourceMappingURL=mysql-types.d.ts.map