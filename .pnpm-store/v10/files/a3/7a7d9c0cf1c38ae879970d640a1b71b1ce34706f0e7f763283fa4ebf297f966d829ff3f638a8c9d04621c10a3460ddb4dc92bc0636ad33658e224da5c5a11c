import type { IGatsbySlice, IGatsbyState } from "../redux/types";
import { reverseFixedPagePath, IPageData, IPageDataInput } from "./page-data-helpers";
import { Span } from "opentracing";
export { reverseFixedPagePath };
import { IExecutionResult } from "../query/types";
import { ICollectedSlices } from "./babel/find-slices";
export interface IPageDataWithQueryResult extends IPageData {
    result: IExecutionResult;
}
export interface ISliceData {
    componentChunkName: string;
    result: IExecutionResult;
    staticQueryHashes: Array<string>;
}
export declare function readPageData(publicDir: string, pagePath: string): Promise<IPageDataWithQueryResult>;
export declare function removePageData(publicDir: string, pagePath: string): Promise<void>;
export declare function pageDataExists(publicDir: string, pagePath: string): boolean;
export declare function waitUntilPageQueryResultsAreStored(): Promise<void>;
export declare function savePageQueryResult(pagePath: string, stringifiedResult: string): Promise<void>;
export declare function readPageQueryResult(pagePath: string): Promise<string>;
export declare function writePageData(publicDir: string, pageData: IPageDataInput, slicesUsedByTemplates: Map<string, ICollectedSlices>, slices: IGatsbyState["slices"]): Promise<string>;
export declare function writeSliceData(publicDir: string, { componentChunkName, name }: IGatsbySlice, staticQueryHashes: Array<string>): Promise<string>;
export declare function readSliceData(publicDir: string, sliceName: string): Promise<IPageDataWithQueryResult>;
export declare function isFlushEnqueued(): boolean;
export declare function flush(parentSpan?: Span): Promise<void>;
export declare function enqueueFlush(parentSpan?: Span): void;
export declare function handleStalePageData(parentSpan: Span): Promise<void>;
interface IModifyPageDataForErrorMessage {
    errors: {
        graphql?: IPageDataWithQueryResult["result"]["errors"];
        getServerData?: IPageDataWithQueryResult["getServerDataError"];
    };
    graphqlExtensions?: IPageDataWithQueryResult["result"]["extensions"];
    pageContext?: IPageDataWithQueryResult["result"]["pageContext"];
    path: IPageDataWithQueryResult["path"];
    matchPath: IPageDataWithQueryResult["matchPath"];
    slicesMap: IPageDataWithQueryResult["slicesMap"];
}
export declare function modifyPageDataForErrorMessage(input: IPageDataWithQueryResult): IModifyPageDataForErrorMessage;
