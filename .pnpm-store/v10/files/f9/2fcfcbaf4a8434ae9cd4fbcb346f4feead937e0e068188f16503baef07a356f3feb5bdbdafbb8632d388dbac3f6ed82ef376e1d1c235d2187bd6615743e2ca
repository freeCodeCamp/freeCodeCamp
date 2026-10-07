import { IDataStore, ILmdbDatabases, IQueryResult, IRunQueryArgs } from "../../types";
import { IIndexEntry } from "./filter-using-index";
interface IDoRunQueryArgs extends IRunQueryArgs {
    databases: ILmdbDatabases;
    datastore: IDataStore;
}
export declare function doRunQuery(args: IDoRunQueryArgs): Promise<IQueryResult>;
export declare function compareByKeySuffix(prefixLength: number): (a: IIndexEntry, b: IIndexEntry) => number;
export {};
