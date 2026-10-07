import type { IScriptsAndStyles } from "./client-assets-for-template";
import { IPageDataWithQueryResult } from "./page-data";
export declare const getStaticQueryPath: (hash: string) => string;
export declare const getStaticQueryResult: (hash: string) => Promise<any>;
export interface IResourcesForTemplate extends IScriptsAndStyles {
    staticQueryContext: Record<string, {
        data: unknown;
    }>;
}
export declare function clearStaticQueryCaches(): void;
export declare const getStaticQueryContext: (staticQueryHashes: IPageDataWithQueryResult["staticQueryHashes"]) => Promise<{
    staticQueryContext: IResourcesForTemplate["staticQueryContext"];
}>;
