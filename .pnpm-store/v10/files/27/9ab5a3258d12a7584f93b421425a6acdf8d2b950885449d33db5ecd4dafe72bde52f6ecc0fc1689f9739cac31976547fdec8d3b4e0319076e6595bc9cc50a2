import { Attributes } from '@opentelemetry/api';
import { FormatFunction } from './mysql2-types';
import { MySQL2InstrumentationQueryMaskingHook } from './types';
import { SemconvStability } from '@opentelemetry/instrumentation';
interface QueryOptions {
    sql: string;
    values?: any | any[] | {
        [param: string]: any;
    };
}
interface Query {
    sql: string;
}
interface Config {
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    connectionConfig?: Config;
}
export declare function getConnectionAttributes(config: Config, dbSemconvStability: SemconvStability, netSemconvStability: SemconvStability): Attributes;
export declare function getQueryText(query: string | Query | QueryOptions, format?: FormatFunction, values?: any[], maskStatement?: boolean, maskStatementHook?: MySQL2InstrumentationQueryMaskingHook): string;
export declare function getSpanName(query: string | Query | QueryOptions): string;
export declare const once: (fn: Function) => (...args: unknown[]) => any;
export declare function getConnectionPrototypeToInstrument(connection: any): any;
export {};
//# sourceMappingURL=utils.d.ts.map
