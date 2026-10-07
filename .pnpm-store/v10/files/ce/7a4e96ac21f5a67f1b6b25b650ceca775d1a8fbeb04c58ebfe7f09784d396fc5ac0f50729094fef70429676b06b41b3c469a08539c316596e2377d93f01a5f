export interface FieldDef {
    name: string;
    tableID: number;
    columnID: number;
    dataTypeID: number;
    dataTypeSize: number;
    dataTypeModifier: number;
    format: string;
}
export interface QueryResultBase {
    command: string;
    rowCount: number | null;
    oid: number;
    fields: FieldDef[];
}
export interface QueryResult<R = any> extends QueryResultBase {
    rows: R[];
}
export interface QueryArrayResult<R extends any[] = any[]> extends QueryResultBase {
    rows: R[];
}
export interface PgClientBase {
    connect(): Promise<void>;
    connect(callback: (err: Error) => void): void;
    query(...args: any[]): any;
    copyFrom(queryText: string): any;
    copyTo(queryText: string): any;
    pauseDrain(): void;
    resumeDrain(): void;
    escapeIdentifier(str: string): string;
    escapeLiteral(str: string): string;
    on(event: 'drain', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'notice', listener: (notice: any) => void): this;
    on(event: 'notification', listener: (message: any) => void): this;
    on(event: 'end', listener: () => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    [key: string]: any;
}
export interface PgClient extends PgClientBase {
    user?: string | undefined;
    database?: string | undefined;
    port: number;
    host: string;
    password?: string | undefined;
    ssl: boolean;
    readonly connection: any;
    end(): Promise<void>;
    end(callback: (err: Error) => void): void;
}
export interface PgPoolClient extends PgClientBase {
    release(err?: Error | boolean): void;
}
//# sourceMappingURL=pg-types.d.ts.map
