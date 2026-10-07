/// <reference types="node" />
import { GatsbyIterable } from "../../common/iterable";
import { DbQuery } from "../../common/query";
import { IDataStore, ILmdbDatabases, NodeId } from "../../types";
import { IIndexMetadata, IndexFieldValue, IndexKey, undefinedSymbol } from "./create-index";
export declare const BinaryInfinityNegative: Buffer;
export declare const BinaryInfinityPositive: string;
type RangeEdgeAfter = [IndexFieldValue, typeof BinaryInfinityPositive];
type RangeEdgeBefore = [typeof undefinedSymbol, IndexFieldValue];
type RangeValue = IndexFieldValue | RangeEdgeAfter | RangeEdgeBefore | typeof BinaryInfinityPositive | typeof BinaryInfinityNegative;
type RangeBoundary = Array<RangeValue>;
export interface IIndexEntry {
    key: IndexKey;
    value: NodeId;
}
interface IIndexRange {
    start: RangeBoundary;
    end: RangeBoundary;
}
export interface IFilterArgs {
    datastore: IDataStore;
    databases: ILmdbDatabases;
    dbQueries: Array<DbQuery>;
    indexMetadata: IIndexMetadata;
    limit?: number;
    skip?: number;
    reverse?: boolean;
}
interface IFilterContext extends IFilterArgs {
    usedLimit: number | undefined;
    usedSkip: number;
    usedQueries: Set<DbQuery>;
}
export interface IFilterResult {
    entries: GatsbyIterable<IIndexEntry>;
    usedQueries: Set<DbQuery>;
    usedLimit: number | undefined;
    usedSkip: number;
}
export declare function filterUsingIndex(args: IFilterArgs): IFilterResult;
export declare function countUsingIndexOnly(args: IFilterArgs): number;
export declare function getIndexRanges(context: IFilterContext): Array<IIndexRange>;
export {};
