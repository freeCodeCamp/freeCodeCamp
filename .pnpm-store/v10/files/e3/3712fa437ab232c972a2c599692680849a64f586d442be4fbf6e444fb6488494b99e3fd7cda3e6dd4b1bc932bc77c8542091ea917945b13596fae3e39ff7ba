/// <reference types="node" />
import type { IStructuredError } from "gatsby-cli/src/structured-errors/types";
import { IGatsbyPage, IGatsbyState } from "../redux/types";
import { ICollectedSlices } from "./babel/find-slices";
interface IPageDataBase {
    componentChunkName: IGatsbyPage["componentChunkName"];
    matchPath: IGatsbyPage["matchPath"];
    path: IGatsbyPage["path"];
    staticQueryHashes: Array<string>;
    getServerDataError?: IStructuredError | Array<IStructuredError> | null;
    manifestId?: string;
}
export type IPageDataInput = IPageDataBase & {
    slices: Record<string, string>;
    componentPath: string;
};
export type IPageData = IPageDataBase & {
    slicesMap: Record<string, string>;
};
export declare function constructPageDataString({ componentChunkName, componentPath, matchPath, path: pagePath, staticQueryHashes, manifestId, slices: overrideSlices, }: IPageDataInput, result: string | Buffer, slicesUsedByTemplates: Map<string, ICollectedSlices>, slices: IGatsbyState["slices"]): string;
export declare function reverseFixedPagePath(pageDataRequestPath: string): string;
export declare function getPagePathFromPageDataPath(pageDataPath: string): string | null;
export {};
