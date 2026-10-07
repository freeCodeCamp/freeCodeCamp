import { IDataStore, ILmdbDatabases } from "../../types";
interface IIndexingContext {
    databases: ILmdbDatabases;
    datastore: IDataStore;
}
export type IndexFields = Map<string, number>;
export interface IIndexMetadata {
    state: "ready" | "building" | "stale" | "error" | "initial";
    error?: string;
    typeName: string;
    keyPrefix: number | string;
    keyFields: Array<[fieldName: string, orderDirection: number]>;
    multiKeyFields: Array<string>;
    stats: {
        keyCount: number;
        itemCount: number;
        maxKeysPerItem: number;
    };
}
export declare const undefinedSymbol: unique symbol;
export type IndexFieldValue = number | string | boolean | null | typeof undefinedSymbol | Array<IndexFieldValue>;
export type IndexKey = Array<IndexFieldValue>;
export declare function createIndex(context: IIndexingContext, typeName: string, indexFields: IndexFields): Promise<IIndexMetadata>;
export declare function getIndexMetadata(context: IIndexingContext, typeName: string, indexFields: IndexFields, assertReady?: boolean): IIndexMetadata;
export {};
