import { EventEmitter } from 'events';
export declare class Connection extends EventEmitter {
    config: any;
    connect(connectListener?: (err?: Error) => void): void;
    execSql(request: Request): void;
    [key: string]: any;
}
export declare class Request extends EventEmitter {
    sqlTextOrProcedure: string | undefined;
    callback: any;
    table: string | undefined;
    parametersByName: any;
    constructor(sqlTextOrProcedure: string | undefined, callback: (error: Error | null | undefined, rowCount?: number, rows?: any) => void);
    addParameter(name: string, type: any, value?: unknown, options?: any): void;
    [key: string]: any;
}
export declare const TYPES: {
    VarBinary: any;
    [key: string]: any;
};
//# sourceMappingURL=tedious-types.d.ts.map
