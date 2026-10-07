import "../engines-fs-provider";
import type { GraphQLEngine } from "../../schema/graphql-engine/entry";
import type { IExecutionResult } from "../../query/types";
import type { IGatsbyPage, IHeader } from "../../redux/types";
import { IGraphQLTelemetryRecord } from "../../schema/type-definitions";
import type { IScriptsAndStyles } from "../client-assets-for-template";
import type { IPageDataWithQueryResult } from "../page-data";
import type { Request } from "express";
import type { Span, SpanContext } from "opentracing";
export interface ITemplateDetails {
    query: string;
    staticQueryHashes: Array<string>;
    assets: IScriptsAndStyles;
}
export type EnginePage = Pick<IGatsbyPage, "componentChunkName" | "componentPath" | "context" | "matchPath" | "mode" | "path" | "slices">;
export interface ISSRData {
    results: IExecutionResult;
    page: EnginePage;
    templateDetails: ITemplateDetails;
    potentialPagePath: string;
    /**
     * This is no longer really just serverDataHeaders, as we add headers
     * from user defined in gatsby-config
     */
    serverDataHeaders?: Record<string, string>;
    serverDataStatus?: number;
    searchString: string;
}
declare global {
    const INLINED_TEMPLATE_TO_DETAILS: Record<string, ITemplateDetails>;
    const INLINED_HEADERS_CONFIG: Array<IHeader> | undefined;
    const WEBPACK_COMPILATION_HASH: string;
    const GATSBY_SLICES_SCRIPT: string;
    const GATSBY_PAGES: Array<[string, EnginePage]>;
    const PATH_PREFIX: string;
}
interface IGetDataBaseArgs {
    pathName: string;
    req?: Partial<Pick<Request, "query" | "method" | "url" | "headers">>;
    spanContext?: Span | SpanContext;
    telemetryResolverTimings?: Array<IGraphQLTelemetryRecord>;
}
interface IGetDataEagerEngineArgs extends IGetDataBaseArgs {
    graphqlEngine: GraphQLEngine;
}
interface IGetDataLazyEngineArgs extends IGetDataBaseArgs {
    getGraphqlEngine: () => Promise<GraphQLEngine>;
}
type IGetDataArgs = IGetDataEagerEngineArgs | IGetDataLazyEngineArgs;
export declare function getData(arg: IGetDataArgs): Promise<ISSRData>;
export declare function renderPageData({ data, spanContext, }: {
    data: ISSRData;
    spanContext?: Span | SpanContext;
}): Promise<IPageDataWithQueryResult>;
export declare function renderHTML({ data, pageData, spanContext, }: {
    data: ISSRData;
    pageData?: IPageDataWithQueryResult;
    spanContext?: Span | SpanContext;
}): Promise<string>;
export declare function findEnginePageByPath(pathName: string): EnginePage | undefined;
export {};
