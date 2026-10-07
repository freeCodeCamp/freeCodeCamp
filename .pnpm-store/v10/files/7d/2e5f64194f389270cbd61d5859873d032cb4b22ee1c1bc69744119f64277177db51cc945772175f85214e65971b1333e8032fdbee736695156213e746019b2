import { IGatsbyPlugin, ProgramStatus, ICreatePageDependencyAction, IDeleteComponentDependenciesAction, IReplaceComponentQueryAction, IReplaceStaticQueryAction, IQueryExtractedAction, IQueryExtractionGraphQLErrorAction, IQueryExtractedBabelSuccessAction, IQueryExtractionBabelErrorAction, ISetProgramStatusAction, IPageQueryRunAction, IRemoveStaleJobAction, ISetSiteConfig, ISetSiteFunctions, IGatsbyState, IDefinitionMeta, ISetGraphQLDefinitionsAction, IQueryStartAction, IApiFinishedAction, IQueryClearDirtyQueriesListToEmitViaWebsocket, ICreateJobV2FromInternalAction, ICreatePageDependencyActionPayloadType, IDeleteNodeManifests, IClearGatsbyImageSourceUrlAction } from "../types";
import { InternalJob } from "../../utils/jobs/manager";
/**
 * Create a dependency between a page and data. Probably for
 * internal use only.
 * @private
 */
export declare const createPageDependencies: (payload: Array<ICreatePageDependencyActionPayloadType>, plugin?: string) => ICreatePageDependencyAction;
/**
 * Create a dependency between a page and data. Probably for
 * internal use only.
 *
 * Shorthand for createPageDependencies.
 * @private
 */
export declare const createPageDependency: (payload: ICreatePageDependencyActionPayloadType, plugin?: string) => ICreatePageDependencyAction;
/**
 * Delete dependencies between an array of pages and data. Probably for
 * internal use only. Used when deleting pages.
 * @private
 */
export declare const deleteComponentsDependencies: (paths: Array<string>) => IDeleteComponentDependenciesAction;
/**
 * When the query watcher extracts a GraphQL query, it calls
 * this to store the query with its component.
 * @private
 */
export declare const replaceComponentQuery: ({ query, componentPath, }: {
    query: string;
    componentPath: string;
}) => IReplaceComponentQueryAction;
export declare const apiFinished: (payload: IApiFinishedAction["payload"]) => IApiFinishedAction;
/**
 * When the query watcher extracts a "static" GraphQL query from useStaticQuery
 * it calls this to store the query with its component.
 * @private
 */
export declare const replaceStaticQuery: (args: {
    name: string;
    componentPath: string;
    id: string;
    query: string;
    hash: string;
}, plugin?: IGatsbyPlugin | null | undefined) => IReplaceStaticQueryAction;
/**
 *
 * Report that a query has been extracted from a component. Used by
 * query-compiler.js.
 * @private
 */
export declare const queryExtracted: ({ componentPath, query }: {
    componentPath: string;
    query: string;
}, plugin: IGatsbyPlugin, traceId?: string) => IQueryExtractedAction;
/**
 * Set Definitions for fragment extraction, etc.
 *
 * Used by developer tools such as vscode-graphql & graphiql
 *
 * query-compiler.js.
 * @private
 */
export declare const setGraphQLDefinitions: (definitionsByName: Map<string, IDefinitionMeta>) => ISetGraphQLDefinitionsAction;
/**
 *
 * Report that the Relay Compiler found a graphql error when attempting to extract a query
 * @private
 */
export declare const queryExtractionGraphQLError: ({ componentPath, error }: {
    componentPath: string;
    error: string;
}, plugin: IGatsbyPlugin, traceId?: string) => IQueryExtractionGraphQLErrorAction;
/**
 *
 * Report that babel was able to extract the graphql query.
 * Indicates that the file is free of JS errors.
 * @private
 */
export declare const queryExtractedBabelSuccess: ({ componentPath }: {
    componentPath: any;
}, plugin: IGatsbyPlugin, traceId?: string) => IQueryExtractedBabelSuccessAction;
/**
 *
 * Report that the Relay Compiler found a babel error when attempting to extract a query
 * @private
 */
export declare const queryExtractionBabelError: ({ componentPath, error }: {
    componentPath: string;
    error: Error;
}, plugin: IGatsbyPlugin, traceId?: string) => IQueryExtractionBabelErrorAction;
/**
 * Set overall program status e.g. `BOOTSTRAPING` or `BOOTSTRAP_FINISHED`.
 * @private
 */
export declare const setProgramStatus: (status: ProgramStatus, plugin: IGatsbyPlugin, traceId?: string) => ISetProgramStatusAction;
/**
 * Broadcast that a page's query was run.
 * @private
 */
export declare const pageQueryRun: (payload: IPageQueryRunAction["payload"], plugin: IGatsbyPlugin, traceId?: string) => IPageQueryRunAction;
export declare const queryStart: ({ path, componentPath, isPage }: {
    path: any;
    componentPath: any;
    isPage: any;
}, plugin: IGatsbyPlugin, traceId?: string) => IQueryStartAction;
export declare const clearDirtyQueriesListToEmitViaWebsocket: () => IQueryClearDirtyQueriesListToEmitViaWebsocket;
/**
 * Remove jobs which are marked as stale (inputPath doesn't exists)
 * @private
 */
export declare const removeStaleJob: (contentDigest: string, plugin?: IGatsbyPlugin, traceId?: string) => IRemoveStaleJobAction;
/**
 * Set gatsby config
 * @private
 */
export declare const setSiteConfig: (config?: unknown) => ISetSiteConfig;
/**
 * Set gatsby functions
 * @private
 */
export declare const setFunctions: (functions: IGatsbyState["functions"]) => ISetSiteFunctions;
export declare const deleteNodeManifests: () => IDeleteNodeManifests;
export declare const createJobV2FromInternalJob: (internalJob: InternalJob) => ICreateJobV2FromInternalAction;
export declare const clearGatsbyImageSourceUrls: () => IClearGatsbyImageSourceUrlAction;
