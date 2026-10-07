import type { TrailingSlash } from "gatsby-page-utils";
import type { Express } from "express";
import { IProgram, Stage } from "../commands/types";
import { GraphQLFieldExtensionDefinition } from "../schema/extensions";
import { DocumentNode, GraphQLSchema, DefinitionNode, SourceLocation } from "graphql";
import { SchemaComposer } from "graphql-compose";
import { IGatsbyCLIState } from "gatsby-cli/src/reporter/redux/types";
import { ThunkAction } from "redux-thunk";
import { InternalJob, JobResultInterface } from "../utils/jobs/manager";
import { ITypeMetadata } from "../schema/infer/inference-metadata";
import { Span } from "opentracing";
import { ICollectedSlices } from "../utils/babel/find-slices";
import type { IAdapter, IAdapterFinalConfig, IAdapterManager } from "../utils/adapter/types";
type SystemPath = string;
type Identifier = string;
export interface IRedirect {
    fromPath: string;
    toPath: string;
    isPermanent?: boolean;
    redirectInBrowser?: boolean;
    ignoreCase: boolean;
    statusCode?: HttpStatusCode;
    [key: string]: any;
}
export declare enum ProgramStatus {
    BOOTSTRAP_FINISHED = "BOOTSTRAP_FINISHED",
    BOOTSTRAP_QUERY_RUNNING_FINISHED = "BOOTSTRAP_QUERY_RUNNING_FINISHED"
}
export type PageMode = "SSG" | "DSG" | "SSR";
export interface IGatsbyPage {
    internalComponentName: string;
    path: string;
    matchPath: undefined | string;
    component: SystemPath;
    componentChunkName: string;
    isCreatedByStatefulCreatePages: boolean;
    context: Record<string, unknown>;
    updatedAt: number;
    pluginCreator___NODE: Identifier;
    pluginCreatorId: Identifier;
    componentPath: SystemPath;
    ownerNodeId: Identifier;
    manifestId?: string;
    defer?: boolean;
    /**
     * INTERNAL. Do not use `page.mode`, it can be removed at any time
     * `page.mode` is currently reliable only in engines and `onPostBuild` hook
     * (in develop it is dynamic and can change at any time)
     * TODO: remove, see comments in utils/page-mode:materializePageMode
     *
     * @internal
     */
    mode: PageMode;
    slices: Record<string, string>;
}
export interface IGatsbySlice {
    componentPath: string;
    componentChunkName: string;
    context: Record<string, unknown>;
    name: string;
    updatedAt: number;
}
export interface IGatsbyFunction {
    /** The route in the browser to access the function **/
    functionRoute: string;
    /** The absolute path to the original function **/
    originalAbsoluteFilePath: string;
    /** The relative path to the original function **/
    originalRelativeFilePath: string;
    /** The relative path to the compiled function (always ends with .js) **/
    relativeCompiledFilePath: string;
    /** The absolute path to the compiled function (doesn't transfer across machines) **/
    absoluteCompiledFilePath: string;
    /** The matchPath regex created by path-to-regexp. Only created if the function is dynamic. **/
    matchPath: string | undefined;
    /** The plugin that owns this function route **/
    pluginName: string;
    /** Function identifier used to match functions usage in routes manifest */
    functionId: string;
}
export interface IGraphQLTypegenOptions {
    typesOutputPath: string;
    documentSearchPaths: Array<string>;
    generateOnBuild: boolean;
}
export interface IHeader {
    source: string;
    headers: Array<{
        key: string;
        value: string;
    }>;
}
export interface IGatsbyConfig {
    plugins?: Array<{
        resolve: string;
        options: {
            [key: string]: unknown;
        };
    }>;
    siteMetadata?: {
        title?: string;
        author?: string;
        description?: string;
        siteUrl?: string;
        [key: string]: unknown;
    };
    polyfill?: boolean;
    developMiddleware?: (app: Express) => void;
    proxy?: any;
    partytownProxiedURLs?: Array<string>;
    pathPrefix?: string;
    assetPrefix?: string;
    mapping?: Record<string, string>;
    jsxRuntime?: "classic" | "automatic";
    jsxImportSource?: string;
    trailingSlash?: TrailingSlash;
    graphqlTypegen?: IGraphQLTypegenOptions;
    headers?: Array<IHeader>;
    adapter?: IAdapter;
}
export interface IGatsbyNode {
    id: Identifier;
    parent: Identifier;
    children: Array<Identifier>;
    internal: {
        type: string;
        counter: number;
        owner: string;
        contentDigest: string;
        mediaType?: string;
        content?: string;
        description?: string;
    };
    [key: string]: unknown;
    fields: Array<string>;
}
export interface IGatsbyPlugin {
    id: Identifier;
    name: string;
    version: string;
    [key: string]: any;
}
export interface IGatsbyPluginContext {
    [key: string]: (...args: Array<any>) => any;
}
export interface IGatsbyStaticQueryComponents {
    name: string;
    componentPath: SystemPath;
    id: Identifier;
    query: string;
    hash: string;
}
export interface IGatsbyPageComponent {
    componentPath: SystemPath;
    componentChunkName: string;
    query: string;
    pages: Set<string>;
    isInBootstrap: boolean;
    serverData: boolean;
    config: boolean;
    isSlice: boolean;
    Head: boolean;
}
export interface IDefinitionMeta {
    name: string;
    def: DefinitionNode;
    filePath: string;
    text: string;
    templateLoc: SourceLocation;
    printedAst: string | null;
    isHook: boolean;
    isStaticQuery: boolean;
    isFragment: boolean;
    isConfigQuery: boolean;
    hash: number;
}
type GatsbyNodes = Map<string, IGatsbyNode>;
export interface IGatsbyIncompleteJobV2 {
    job: InternalJob;
}
export interface IGatsbyIncompleteJob {
    job: InternalJob;
    plugin: IGatsbyPlugin;
}
export interface IGatsbyCompleteJobV2 {
    result: JobResultInterface;
    inputPaths: InternalJob["inputPaths"];
}
export interface IPlugin {
    name: string;
    options: Record<string, unknown>;
}
export interface IBabelStage {
    plugins: Array<IPlugin>;
    presets: Array<IPlugin>;
    options?: {
        cacheDirectory: boolean;
        sourceType: string;
        sourceMaps?: string;
    };
}
export interface IStateProgram extends IProgram {
    extensions: Array<string>;
    browserslist: Array<string>;
}
export interface IQueryState {
    dirty: number;
    running: number;
}
export interface IComponentState {
    componentPath: string;
    query: string;
    pages: Set<Identifier>;
    errors: number;
}
export interface IHtmlFileState {
    dirty: number;
    isDeleted: boolean;
    pageDataHash: string;
}
export interface IStaticQueryResultState {
    dirty: number;
    staticQueryResultHash: string;
}
export type GatsbyNodeAPI = "onPreBootstrap" | "onPostBootstrap" | "onCreateWebpackConfig" | "onCreatePage" | "onCreateNode" | "sourceNodes" | "createPagesStatefully" | "createPages" | "onPostBuild";
export interface IGatsbyState {
    program: IStateProgram;
    nodes: GatsbyNodes;
    nodesByType: Map<string, GatsbyNodes>;
    resolvedNodesCache: Map<string, any>;
    nodesTouched: Set<string>;
    typeOwners: {
        pluginsToTypes: Map<IGatsbyPlugin[`name`], Set<IGatsbyNode[`internal`][`type`]>>;
        typesToPlugins: Map<IGatsbyNode[`internal`][`type`], IGatsbyPlugin[`name`]>;
    };
    nodeManifests: Array<INodeManifest>;
    requestHeaders: Map<string, {
        [header: string]: string;
    }>;
    statefulSourcePlugins: Set<string>;
    telemetry: ITelemetry;
    lastAction: ActionsUnion;
    flattenedPlugins: Array<{
        resolve: SystemPath;
        id: Identifier;
        name: string;
        version: string;
        pluginOptions: {
            plugins: [];
            [key: string]: unknown;
        };
        nodeAPIs: Array<GatsbyNodeAPI>;
        browserAPIs: Array<"onRouteUpdate" | "registerServiceWorker" | "onServiceWorkerActive" | "onPostPrefetchPathname">;
        ssrAPIs: Array<"onRenderBody" | "onPreRenderHTML">;
        pluginFilepath: SystemPath;
        subPluginPaths?: Array<string>;
        modulePath?: string;
    }>;
    config: IGatsbyConfig;
    functions: Array<IGatsbyFunction>;
    pages: Map<string, IGatsbyPage>;
    schema: GraphQLSchema;
    definitions: Map<string, IDefinitionMeta>;
    status: {
        plugins: Record<string, IGatsbyPlugin>;
        PLUGINS_HASH: Identifier;
        LAST_NODE_COUNTER: number;
        cdnObfuscatedPrefix: string;
    };
    queries: {
        byNode: Map<Identifier, Set<Identifier>>;
        byConnection: Map<string, Set<Identifier>>;
        queryNodes: Map<Identifier, Set<Identifier>>;
        trackedQueries: Map<Identifier, IQueryState>;
        trackedComponents: Map<string, IComponentState>;
        deletedQueries: Set<Identifier>;
        dirtyQueriesListToEmitViaWebsocket: Array<string>;
    };
    components: Map<IGatsbyPageComponent["componentPath"], IGatsbyPageComponent>;
    staticQueryComponents: Map<IGatsbyStaticQueryComponents["id"], IGatsbyStaticQueryComponents>;
    staticQueriesByTemplate: Map<SystemPath, Array<Identifier>>;
    pendingPageDataWrites: {
        pagePaths: Set<string>;
        sliceNames: Set<string>;
    };
    jobs: {
        active: Array<any>;
        done: Array<any>;
    };
    jobsV2: {
        incomplete: Map<Identifier, IGatsbyIncompleteJobV2>;
        complete: Map<Identifier, IGatsbyCompleteJobV2>;
        jobsByRequest: Map<string, Set<Identifier>>;
    };
    webpack: any;
    webpackCompilationHash: string;
    redirects: Array<IRedirect>;
    babelrc: {
        stages: {
            [key in Stage]: IBabelStage;
        };
    };
    schemaCustomization: {
        composer: null | SchemaComposer<any>;
        context: Record<string, any>;
        fieldExtensions: GraphQLFieldExtensionDefinition;
        printConfig: {
            path?: string;
            include?: {
                types?: Array<string>;
                plugins?: Array<string>;
            };
            exclude?: {
                types?: Array<string>;
                plugins?: Array<string>;
            };
            withFieldTypes?: boolean;
        } | null;
        thirdPartySchemas: Array<GraphQLSchema>;
        types: Array<string | {
            typeOrTypeDef: DocumentNode;
            plugin: IGatsbyPlugin;
        }>;
    };
    logs: IGatsbyCLIState;
    inferenceMetadata: {
        step: string;
        typeMap: {
            [key: string]: ITypeMetadata;
        };
    };
    pageDataStats: Map<SystemPath, number>;
    visitedPages: Map<string, Set<string>>;
    html: {
        trackedHtmlFiles: Map<Identifier, IHtmlFileState>;
        browserCompilationHash: string;
        ssrCompilationHash: string;
        trackedStaticQueryResults: Map<string, IStaticQueryResultState>;
        unsafeBuiltinWasUsedInSSR: boolean;
        templateCompilationHashes: Record<string, string>;
        slicesProps: {
            bySliceId: Map<string, {
                pages: Set<string>;
                props: Record<string, unknown>;
                sliceName: string;
                hasChildren: boolean;
                dirty: number;
            }>;
            byPagePath: Map<string, Set<string>>;
            bySliceName: Map<string, {
                sliceDataHash: string;
                dirty: number;
                props: Set<string>;
            }>;
        };
        pagesThatNeedToStitchSlices: Set<string>;
    };
    slices: Map<string, IGatsbySlice>;
    componentsUsingSlices: Map<string, ICollectedSlices>;
    slicesByTemplate: Map<SystemPath, ICollectedSlices>;
    adapter: {
        instance?: IAdapter;
        manager: IAdapterManager;
        config: IAdapterFinalConfig;
    };
    remoteFileAllowedUrls: Set<string>;
}
export type GatsbyStateKeys = keyof IGatsbyState;
export interface ICachedReduxState {
    nodes?: IGatsbyState["nodes"];
    typeOwners?: IGatsbyState["typeOwners"];
    statefulSourcePlugins?: IGatsbyState["statefulSourcePlugins"];
    status: IGatsbyState["status"];
    components: IGatsbyState["components"];
    jobsV2: IGatsbyState["jobsV2"];
    staticQueryComponents: IGatsbyState["staticQueryComponents"];
    webpackCompilationHash: IGatsbyState["webpackCompilationHash"];
    pageDataStats: IGatsbyState["pageDataStats"];
    pages?: IGatsbyState["pages"];
    staticQueriesByTemplate: IGatsbyState["staticQueriesByTemplate"];
    pendingPageDataWrites: IGatsbyState["pendingPageDataWrites"];
    queries: IGatsbyState["queries"];
    html: IGatsbyState["html"];
    slices: IGatsbyState["slices"];
    slicesByTemplate: IGatsbyState["slicesByTemplate"];
}
export type ActionsUnion = IInitAction | IAddChildNodeToParentNodeAction | IAddFieldToNodeAction | IAddThirdPartySchema | IApiFinishedAction | ICreateFieldExtension | ICreateNodeAction | ICreatePageAction | ICreatePageDependencyAction | ICreateTypes | IDeleteCacheAction | IDeleteNodeAction | IDeletePageAction | IPageQueryRunAction | IPrintTypeDefinitions | IQueryClearDirtyQueriesListToEmitViaWebsocket | IQueryExtractedAction | IQueryExtractedBabelSuccessAction | IQueryExtractionBabelErrorAction | IQueryExtractionGraphQLErrorAction | IQueryStartAction | IRemoveStaticQuery | IReplaceComponentQueryAction | IReplaceStaticQueryAction | IReplaceWebpackConfigAction | ISetPluginStatusAction | ISetProgramStatusAction | ISetResolvedNodesAction | ISetSchemaAction | ISetGraphQLDefinitionsAction | ISetSiteFlattenedPluginsAction | ISetWebpackCompilationHashAction | ISetSSRGlobalSharedWebpackCompilationHashAction | ISetWebpackConfigAction | ITouchNodeAction | IUpdatePluginsHashAction | ICreateJobV2Action | IEndJobV2Action | IRemoveStaleJobV2Action | IAddPageDataStatsAction | IAddSliceDataStatsAction | IRemoveTemplateComponentAction | ISetBabelPluginAction | ISetBabelPresetAction | ISetBabelOptionsAction | ICreateJobAction | ISetJobAction | IEndJobAction | ISetStaticQueriesByTemplateAction | IAddPendingPageDataWriteAction | IAddPendingTemplateDataWriteAction | IAddPendingSliceDataWriteAction | IAddPendingSliceTemplateDataWriteAction | IClearPendingPageDataWriteAction | IClearPendingSliceDataWriteAction | ICreateResolverContext | IClearSchemaCustomizationAction | ISetSchemaComposerAction | IStartIncrementalInferenceAction | IBuildTypeMetadataAction | IDisableTypeInferenceAction | ISetProgramAction | ISetProgramExtensions | IRemovedHtml | ITrackedHtmlCleanup | IGeneratedHtml | IMarkHtmlDirty | ISSRUsedUnsafeBuiltin | ISetSiteConfig | IMergeWorkerQueryState | ISetComponentFeatures | IMaterializePageMode | ISetJobV2Context | IClearJobV2Context | ISetDomainRequestHeaders | IEnableStatefulSourcePluginAction | ICreateSliceAction | IDeleteSliceAction | ISetSSRTemplateWebpackCompilationHashAction | ISetComponentsUsingSlicesAction | ISetSlicesByTemplateAction | ISetSlicesProps | ISlicesPropsRemoveStale | ISlicesPropsRendered | ISlicesStitched | ISlicesScriptsRegenerated | IProcessGatsbyImageSourceUrlAction | IClearGatsbyImageSourceUrlAction | ISetAdapterAction | IDisablePluginsByNameAction | IAddImageCdnAllowedUrl;
export interface IInitAction {
    type: `INIT`;
}
export interface ISetComponentFeatures {
    type: `SET_COMPONENT_FEATURES`;
    payload: {
        componentPath: string;
        serverData: boolean;
        config: boolean;
        Head: boolean;
    };
}
export interface IApiFinishedAction {
    type: `API_FINISHED`;
    payload: {
        apiName: GatsbyNodeAPI;
    };
}
interface ISetBabelPluginAction {
    type: `SET_BABEL_PLUGIN`;
    payload: {
        stage: Stage;
        name: IPlugin["name"];
        options: IPlugin["options"];
    };
}
interface ISetBabelPresetAction {
    type: `SET_BABEL_PRESET`;
    payload: {
        stage: Stage;
        name: IPlugin["name"];
        options: IPlugin["options"];
    };
}
interface ISetBabelOptionsAction {
    type: `SET_BABEL_OPTIONS`;
    payload: {
        stage: Stage;
        name: IPlugin["name"];
        options: IPlugin["options"];
    };
}
export interface ICreateJobV2Action {
    type: `CREATE_JOB_V2`;
    payload: {
        job: IGatsbyIncompleteJobV2["job"];
    };
    plugin: {
        name: string;
    };
}
export interface IEndJobV2Action {
    type: `END_JOB_V2`;
    payload: {
        jobContentDigest: string;
        result: JobResultInterface;
    };
    plugin: {
        name: string;
    };
}
export interface IRemoveStaleJobV2Action {
    type: `REMOVE_STALE_JOB_V2`;
    payload: {
        contentDigest: string;
    };
}
export type ICreateJobV2FromInternalAction = ThunkAction<Promise<Record<string, unknown>>, IGatsbyState, void, ActionsUnion>;
interface ICreateJobAction {
    type: `CREATE_JOB`;
    payload: {
        id: string;
        job: IGatsbyIncompleteJob["job"];
    };
    plugin: IGatsbyIncompleteJob["plugin"];
}
interface ISetJobAction {
    type: `SET_JOB`;
    payload: {
        id: string;
        job: IGatsbyIncompleteJob["job"];
    };
    plugin: IGatsbyIncompleteJob["plugin"];
}
interface IEndJobAction {
    type: `END_JOB`;
    payload: {
        id: string;
        job: IGatsbyIncompleteJob["job"];
    };
    plugin: IGatsbyIncompleteJob["plugin"];
}
export interface ICreatePageDependencyActionPayloadType {
    path: string;
    nodeId?: string;
    connection?: string;
}
export interface ICreatePageDependencyAction {
    type: `CREATE_COMPONENT_DEPENDENCY`;
    plugin?: string;
    payload: Array<ICreatePageDependencyActionPayloadType>;
}
export interface IDeleteComponentDependenciesAction {
    type: "DELETE_COMPONENTS_DEPENDENCIES";
    payload: {
        paths: Array<string>;
    };
}
export interface IReplaceComponentQueryAction {
    type: "REPLACE_COMPONENT_QUERY";
    payload: {
        query: string;
        componentPath: string;
    };
}
export interface IReplaceStaticQueryAction {
    type: `REPLACE_STATIC_QUERY`;
    plugin: IGatsbyPlugin | null | undefined;
    payload: {
        name: string;
        componentPath: string;
        id: string;
        query: string;
        hash: string;
    };
}
export interface IQueryClearDirtyQueriesListToEmitViaWebsocket {
    type: `QUERY_CLEAR_DIRTY_QUERIES_LIST_TO_EMIT_VIA_WEBSOCKET`;
}
export interface IQueryExtractedAction {
    type: `QUERY_EXTRACTED`;
    plugin: IGatsbyPlugin;
    traceId: string | undefined;
    payload: {
        componentPath: string;
        query: string;
    };
}
export interface IQueryExtractionGraphQLErrorAction {
    type: `QUERY_EXTRACTION_GRAPHQL_ERROR`;
    plugin: IGatsbyPlugin;
    traceId: string | undefined;
    payload: {
        componentPath: string;
        error: string;
    };
}
export interface IQueryExtractedBabelSuccessAction {
    type: `QUERY_EXTRACTION_BABEL_SUCCESS`;
    plugin: IGatsbyPlugin;
    traceId: string | undefined;
    payload: {
        componentPath: string;
    };
}
export interface IQueryExtractionBabelErrorAction {
    type: `QUERY_EXTRACTION_BABEL_ERROR`;
    plugin: IGatsbyPlugin;
    traceId: string | undefined;
    payload: {
        componentPath: string;
        error: Error;
    };
}
export interface ISetProgramStatusAction {
    type: `SET_PROGRAM_STATUS`;
    plugin: IGatsbyPlugin;
    traceId: string | undefined;
    payload: ProgramStatus;
}
export interface IPageQueryRunAction {
    type: `PAGE_QUERY_RUN`;
    plugin: IGatsbyPlugin;
    traceId: string | undefined;
    payload: {
        path: string;
        componentPath: string;
        queryType: "page" | "static" | "slice";
        resultHash: string;
        queryHash: string;
    };
}
export interface IQueryStartAction {
    type: `QUERY_START`;
    plugin: IGatsbyPlugin;
    traceId: string | undefined;
    payload: {
        path: string;
        componentPath: string;
        isPage: boolean;
    };
}
export interface IRemoveStaleJobAction {
    type: `REMOVE_STALE_JOB_V2`;
    plugin: IGatsbyPlugin | undefined;
    traceId?: string;
    payload: {
        contentDigest: string;
    };
}
export interface IAddThirdPartySchema {
    type: `ADD_THIRD_PARTY_SCHEMA`;
    plugin: IGatsbyPlugin;
    traceId?: string;
    payload: GraphQLSchema;
}
export interface ICreateTypes {
    type: `CREATE_TYPES`;
    plugin: IGatsbyPlugin;
    traceId?: string;
    payload: DocumentNode | Array<DocumentNode>;
}
export interface ICreateFieldExtension {
    type: `CREATE_FIELD_EXTENSION`;
    plugin: IGatsbyPlugin;
    traceId?: string;
    payload: {
        name: string;
        extension: GraphQLFieldExtensionDefinition;
    };
}
export interface IPrintTypeDefinitions {
    type: `PRINT_SCHEMA_REQUESTED`;
    plugin: IGatsbyPlugin;
    traceId?: string;
    payload: {
        path?: string;
        include?: {
            types?: Array<string>;
            plugins?: Array<string>;
        };
        exclude?: {
            types?: Array<string>;
            plugins?: Array<string>;
        };
        withFieldTypes?: boolean;
    };
}
export interface ICreateResolverContext {
    type: `CREATE_RESOLVER_CONTEXT`;
    plugin: IGatsbyPlugin;
    traceId?: string;
    payload: IGatsbyPluginContext | {
        [camelCasedPluginNameWithoutPrefix: string]: IGatsbyPluginContext;
    };
}
interface IClearSchemaCustomizationAction {
    type: `CLEAR_SCHEMA_CUSTOMIZATION`;
}
interface ISetSchemaComposerAction {
    type: `SET_SCHEMA_COMPOSER`;
    payload: SchemaComposer<any>;
}
export interface ICreateServerVisitedPage {
    type: `CREATE_SERVER_VISITED_PAGE`;
    payload: IGatsbyPage;
    plugin?: IGatsbyPlugin;
}
export interface ICreatePageAction {
    type: `CREATE_PAGE`;
    payload: IGatsbyPage;
    plugin?: IGatsbyPlugin;
    contextModified?: boolean;
    componentModified?: boolean;
    slicesModified?: boolean;
}
export interface ICreateSliceAction {
    type: `CREATE_SLICE`;
    payload: IGatsbySlice;
    plugin?: IGatsbyPlugin;
    traceId: string | undefined;
    componentModified?: boolean;
    contextModified?: boolean;
}
export interface IDeleteSliceAction {
    type: `DELETE_SLICE`;
    payload: {
        name: string;
        componentPath: string;
    };
}
export interface ISetComponentsUsingSlicesAction {
    type: `SET_COMPONENTS_USING_PAGE_SLICES`;
    payload: Map<string, ICollectedSlices>;
}
export interface ISetSlicesByTemplateAction {
    type: `SET_SLICES_BY_TEMPLATE`;
    payload: {
        componentPath: string;
        slices: ICollectedSlices;
    };
}
export interface ISetSlicesProps {
    type: `SET_SLICES_PROPS`;
    payload: Record<string, Record<string, {
        props: Record<string, unknown>;
        sliceName: string;
        hasChildren: boolean;
    }>>;
}
export interface ISlicesPropsRemoveStale {
    type: `SLICES_PROPS_REMOVE_STALE`;
}
export interface ISlicesPropsRendered {
    type: `SLICES_PROPS_RENDERED`;
    payload: Array<{
        sliceId: string;
    }>;
}
export interface ISlicesStitched {
    type: `SLICES_STITCHED`;
}
export interface ISlicesScriptsRegenerated {
    type: `SLICES_SCRIPTS_REGENERATED`;
}
export interface ICreateRedirectAction {
    type: `CREATE_REDIRECT`;
    payload: IRedirect;
}
export interface IDeleteCacheAction {
    type: `DELETE_CACHE`;
    cacheIsCorrupt?: boolean;
}
export interface IRemoveTemplateComponentAction {
    type: `REMOVE_STATIC_QUERIES_BY_TEMPLATE`;
    payload: {
        componentPath: string;
    };
}
export interface ISetStaticQueriesByTemplateAction {
    type: `SET_STATIC_QUERIES_BY_TEMPLATE`;
    payload: {
        componentPath: string;
        staticQueryHashes: Array<Identifier>;
    };
}
export interface IAddPendingPageDataWriteAction {
    type: `ADD_PENDING_PAGE_DATA_WRITE`;
    payload: {
        path: string;
    };
}
export interface IAddPendingTemplateDataWriteAction {
    type: `ADD_PENDING_TEMPLATE_DATA_WRITE`;
    payload: {
        componentPath: SystemPath;
        pages: Array<string>;
    };
}
export interface IAddPendingSliceDataWriteAction {
    type: `ADD_PENDING_SLICE_DATA_WRITE`;
    payload: {
        name: string;
    };
}
export interface IAddPendingSliceTemplateDataWriteAction {
    type: `ADD_PENDING_SLICE_TEMPLATE_DATA_WRITE`;
    payload: {
        componentPath: SystemPath;
        sliceNames: Array<string>;
    };
}
export interface IClearPendingPageDataWriteAction {
    type: `CLEAR_PENDING_PAGE_DATA_WRITE`;
    payload: {
        page: string;
    };
}
export interface IClearPendingSliceDataWriteAction {
    type: `CLEAR_PENDING_SLICE_DATA_WRITE`;
    payload: {
        name: string;
    };
}
export interface IDeletePageAction {
    type: `DELETE_PAGE`;
    payload: IGatsbyPage;
}
export interface IRemoveStaticQuery {
    type: `REMOVE_STATIC_QUERY`;
    payload: IGatsbyStaticQueryComponents["id"];
}
export interface ISetWebpackCompilationHashAction {
    type: `SET_WEBPACK_COMPILATION_HASH`;
    payload: IGatsbyState["webpackCompilationHash"];
}
export interface ISetSSRGlobalSharedWebpackCompilationHashAction {
    type: `SET_SSR_WEBPACK_COMPILATION_HASH`;
    payload: string;
}
export interface ISetSSRTemplateWebpackCompilationHashAction {
    type: `SET_SSR_TEMPLATE_WEBPACK_COMPILATION_HASH`;
    payload: {
        templateHash: string;
        templatePath: string;
        isSlice: boolean;
        pages: Array<string>;
    };
}
export interface IUpdatePluginsHashAction {
    type: `UPDATE_PLUGINS_HASH`;
    payload: Identifier;
}
export interface ISetPluginStatusAction {
    type: `SET_PLUGIN_STATUS`;
    plugin: IGatsbyPlugin;
    payload: {
        [key: string]: any;
    };
}
export interface IReplaceWebpackConfigAction {
    type: `REPLACE_WEBPACK_CONFIG`;
    payload: IGatsbyState["webpack"];
}
export interface ISetWebpackConfigAction {
    type: `SET_WEBPACK_CONFIG`;
    payload: Partial<IGatsbyState["webpack"]>;
}
export interface ISetSchemaAction {
    type: `SET_SCHEMA`;
    payload: IGatsbyState["schema"];
}
export interface ISetGraphQLDefinitionsAction {
    type: `SET_GRAPHQL_DEFINITIONS`;
    payload: IGatsbyState["definitions"];
}
export interface ISetSiteConfig {
    type: `SET_SITE_CONFIG`;
    payload: IGatsbyState["config"];
}
export interface ISetSiteFunctions {
    type: `SET_SITE_FUNCTIONS`;
    payload: IGatsbyState["functions"];
}
export interface ICreateNodeAction {
    type: `CREATE_NODE`;
    payload: IGatsbyNode;
    oldNode?: IGatsbyNode;
    traceId: string;
    parentSpan: Span;
    followsSpan: Span;
    plugin: IGatsbyPlugin;
}
export interface IAddFieldToNodeAction {
    type: `ADD_FIELD_TO_NODE`;
    payload: IGatsbyNode;
    addedField: string;
}
export interface IAddChildNodeToParentNodeAction {
    type: `ADD_CHILD_NODE_TO_PARENT_NODE`;
    payload: IGatsbyNode;
}
export interface IDeleteNodeAction {
    type: `DELETE_NODE`;
    payload: IGatsbyNode | void;
    plugin: IGatsbyPlugin;
    isRecursiveChildrenDelete?: boolean;
}
export interface ISetSiteFlattenedPluginsAction {
    type: `SET_SITE_FLATTENED_PLUGINS`;
    payload: IGatsbyState["flattenedPlugins"];
}
export interface ISetResolvedNodesAction {
    type: `SET_RESOLVED_NODES`;
    payload: {
        key: string;
        nodes: IGatsbyState["resolvedNodesCache"];
    };
}
export interface IAddPageDataStatsAction {
    type: `ADD_PAGE_DATA_STATS`;
    payload: {
        pagePath: string;
        filePath: SystemPath;
        size: number;
        pageDataHash: string;
    };
}
export interface IAddSliceDataStatsAction {
    type: `ADD_SLICE_DATA_STATS`;
    payload: {
        sliceName: string;
        filePath: SystemPath;
        size: number;
        sliceDataHash: string;
    };
}
export interface ITouchNodeAction {
    type: `TOUCH_NODE`;
    payload: Identifier;
    typeName: IGatsbyNode["internal"]["type"];
    plugin: IGatsbyPlugin;
}
interface IStartIncrementalInferenceAction {
    type: `START_INCREMENTAL_INFERENCE`;
}
interface IBuildTypeMetadataAction {
    type: `BUILD_TYPE_METADATA`;
    payload: {
        nodes: Array<IGatsbyNode>;
        clearExistingMetadata: boolean;
        typeName: string;
    };
}
interface IDisableTypeInferenceAction {
    type: `DISABLE_TYPE_INFERENCE`;
    payload: Array<string>;
}
interface ISetProgramAction {
    type: `SET_PROGRAM`;
    payload: IStateProgram;
}
interface ISetProgramExtensions {
    type: `SET_PROGRAM_EXTENSIONS`;
    payload: Array<string>;
}
interface IRemovedHtml {
    type: `HTML_REMOVED`;
    payload: string;
}
interface ITrackedHtmlCleanup {
    type: `HTML_TRACKED_PAGES_CLEANUP`;
    payload: Set<string>;
}
interface IGeneratedHtml {
    type: `HTML_GENERATED`;
    payload: Array<string>;
}
interface IMarkHtmlDirty {
    type: `HTML_MARK_DIRTY_BECAUSE_STATIC_QUERY_RESULT_CHANGED`;
    payload: {
        pages: Set<string>;
        slices: Set<string>;
        staticQueryHashes: Set<string>;
    };
}
interface ISSRUsedUnsafeBuiltin {
    type: `SSR_USED_UNSAFE_BUILTIN`;
}
export interface ICreateNodeManifest {
    type: `CREATE_NODE_MANIFEST`;
    payload: {
        manifestId: string;
        node: IGatsbyNode;
        pluginName: string;
        updatedAtUTC?: string | number;
    };
}
export interface IDeleteNodeManifests {
    type: `DELETE_NODE_MANIFESTS`;
}
export interface INodeManifest {
    manifestId: string;
    pluginName: string;
    node: {
        id: string;
    };
}
export interface ISetDomainRequestHeaders {
    type: `SET_REQUEST_HEADERS`;
    payload: {
        domain: string;
        headers: {
            [header: string]: string;
        };
    };
}
export interface IEnableStatefulSourcePluginAction {
    type: `ENABLE_STATEFUL_SOURCE_PLUGIN`;
    plugin: IGatsbyPlugin;
}
export interface IProcessGatsbyImageSourceUrlAction {
    type: `PROCESS_GATSBY_IMAGE_SOURCE_URL`;
    payload: {
        sourceUrl: string;
    };
}
export interface IClearGatsbyImageSourceUrlAction {
    type: `CLEAR_GATSBY_IMAGE_SOURCE_URL`;
}
export interface ISetAdapterAction {
    type: `SET_ADAPTER`;
    payload: {
        instance?: IAdapter;
        manager: IAdapterManager;
        config: IAdapterFinalConfig;
    };
}
export interface IDisablePluginsByNameAction {
    type: `DISABLE_PLUGINS_BY_NAME`;
    payload: {
        pluginsToDisable: Array<string>;
        reason: string;
    };
}
export interface IAddImageCdnAllowedUrl {
    type: `ADD_REMOTE_FILE_ALLOWED_URL`;
    payload: {
        urls: Array<string>;
    };
    plugin: IGatsbyPlugin;
    traceId?: string;
}
export interface ITelemetry {
    gatsbyImageSourceUrls: Set<string>;
}
export interface IMergeWorkerQueryState {
    type: `MERGE_WORKER_QUERY_STATE`;
    payload: {
        workerId: number;
        queryStateChunk: IGatsbyState["queries"];
        queryStateTelemetryChunk: IGatsbyState["telemetry"];
    };
}
export interface IMaterializePageMode {
    type: `MATERIALIZE_PAGE_MODE`;
    payload: {
        path: string;
        pageMode: PageMode;
    };
}
export interface ISetJobV2Context {
    type: `SET_JOB_V2_CONTEXT`;
    payload: {
        job: IGatsbyIncompleteJobV2["job"];
        requestId: string;
    };
}
export interface IClearJobV2Context {
    type: `CLEAR_JOB_V2_CONTEXT`;
    payload: {
        requestId: string;
    };
}
export declare const HTTP_STATUS_CODE: {
    /**
     * The server has received the request headers and the client should proceed to send the request body
     * (in the case of a request for which a body needs to be sent; for example, a POST request).
     * Sending a large request body to a server after a request has been rejected for inappropriate headers would be inefficient.
     * To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request
     * and receive a 100 Continue status code in response before sending the body. The response 417 Expectation Failed indicates the request should not be continued.
     */
    readonly CONTINUE_100: 100;
    /**
     * The requester has asked the server to switch protocols and the server has agreed to do so.
     */
    readonly SWITCHING_PROTOCOLS_101: 101;
    /**
     * A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request.
     * This code indicates that the server has received and is processing the request, but no response is available yet.
     * This prevents the client from timing out and assuming the request was lost.
     */
    readonly PROCESSING_102: 102;
    /**
     * Standard response for successful HTTP requests.
     * The actual response will depend on the request method used.
     * In a GET request, the response will contain an entity corresponding to the requested resource.
     * In a POST request, the response will contain an entity describing or containing the result of the action.
     */
    readonly OK_200: 200;
    /**
     * The request has been fulfilled, resulting in the creation of a new resource.
     */
    readonly CREATED_201: 201;
    /**
     * The request has been accepted for processing, but the processing has not been completed.
     * The request might or might not be eventually acted upon, and may be disallowed when processing occurs.
     */
    readonly ACCEPTED_202: 202;
    /**
     * SINCE HTTP/1.1
     * The server is a transforming proxy that received a 200 OK from its origin,
     * but is returning a modified version of the origin's response.
     */
    readonly NON_AUTHORITATIVE_INFORMATION_203: 203;
    /**
     * The server successfully processed the request and is not returning any content.
     */
    readonly NO_CONTENT_204: 204;
    /**
     * The server successfully processed the request, but is not returning any content.
     * Unlike a 204 response, this response requires that the requester reset the document view.
     */
    readonly RESET_CONTENT_205: 205;
    /**
     * The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
     * The range header is used by HTTP clients to enable resuming of interrupted downloads,
     * or split a download into multiple simultaneous streams.
     */
    readonly PARTIAL_CONTENT_206: 206;
    /**
     * The message body that follows is an XML message and can contain a number of separate response codes,
     * depending on how many sub-requests were made.
     */
    readonly MULTI_STATUS_207: 207;
    /**
     * The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response,
     * and are not being included again.
     */
    readonly ALREADY_REPORTED_208: 208;
    /**
     * The server has fulfilled a request for the resource,
     * and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
     */
    readonly IM_USED_226: 226;
    /**
     * Indicates multiple options for the resource from which the client may choose (via agent-driven content negotiation).
     * For example, this code could be used to present multiple video format options,
     * to list files with different filename extensions, or to suggest word-sense disambiguation.
     */
    readonly MULTIPLE_CHOICES_300: 300;
    /**
     * This and all future requests should be directed to the given URI.
     */
    readonly MOVED_PERMANENTLY_301: 301;
    /**
     * This is an example of industry practice contradicting the standard.
     * The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect
     * (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302
     * with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307
     * to distinguish between the two behaviours. However, some Web applications and frameworks
     * use the 302 status code as if it were the 303.
     */
    readonly FOUND_302: 302;
    /**
     * SINCE HTTP/1.1
     * The response to the request can be found under another URI using a GET method.
     * When received in response to a POST (or PUT/DELETE), the client should presume that
     * the server has received the data and should issue a redirect with a separate GET message.
     */
    readonly SEE_OTHER_303: 303;
    /**
     * Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
     * In such case, there is no need to retransmit the resource since the client still has a previously-downloaded copy.
     */
    readonly NOT_MODIFIED_304: 304;
    /**
     * SINCE HTTP/1.1
     * The requested resource is available only through a proxy, the address for which is provided in the response.
     * Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.
     */
    readonly USE_PROXY_305: 305;
    /**
     * No longer used. Originally meant "Subsequent requests should use the specified proxy."
     */
    readonly SWITCH_PROXY_306: 306;
    /**
     * SINCE HTTP/1.1
     * In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
     * In contrast to how 302 was historically implemented, the request method is not allowed to be changed when reissuing the original request.
     * For example, a POST request should be repeated using another POST request.
     */
    readonly TEMPORARY_REDIRECT_307: 307;
    /**
     * The request and all future requests should be repeated using another URI.
     * 307 and 308 parallel the behaviors of 302 and 301, but do not allow the HTTP method to change.
     * So, for example, submitting a form to a permanently redirected resource may continue smoothly.
     */
    readonly PERMANENT_REDIRECT_308: 308;
    /**
     * The server cannot or will not process the request due to an apparent client error
     * (e.g., malformed request syntax, too large size, invalid request message framing, or deceptive request routing).
     */
    readonly BAD_REQUEST_400: 400;
    /**
     * Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet
     * been provided. The response must include a WWW-Authenticate header field containing a challenge applicable to the
     * requested resource. See Basic access authentication and Digest access authentication. 401 semantically means
     * "unauthenticated",i.e. the user does not have the necessary credentials.
     */
    readonly UNAUTHORIZED_401: 401;
    /**
     * Reserved for future use. The original intention was that this code might be used as part of some form of digital
     * cash or micro payment scheme, but that has not happened, and this code is not usually used.
     * Google Developers API uses this status if a particular developer has exceeded the daily limit on requests.
     */
    readonly PAYMENT_REQUIRED_402: 402;
    /**
     * The request was valid, but the server is refusing action.
     * The user might not have the necessary permissions for a resource.
     */
    readonly FORBIDDEN_403: 403;
    /**
     * The requested resource could not be found but may be available in the future.
     * Subsequent requests by the client are permissible.
     */
    readonly NOT_FOUND_404: 404;
    /**
     * A request method is not supported for the requested resource;
     * for example, a GET request on a form that requires data to be presented via POST, or a PUT request on a read-only resource.
     */
    readonly METHOD_NOT_ALLOWED_405: 405;
    /**
     * The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
     */
    readonly NOT_ACCEPTABLE_406: 406;
    /**
     * The client must first authenticate itself with the proxy.
     */
    readonly PROXY_AUTHENTICATION_REQUIRED_407: 407;
    /**
     * The server timed out waiting for the request.
     * According to HTTP specifications:
     * "The client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time."
     */
    readonly REQUEST_TIMEOUT_408: 408;
    /**
     * Indicates that the request could not be processed because of conflict in the request,
     * such as an edit conflict between multiple simultaneous updates.
     */
    readonly CONFLICT_409: 409;
    /**
     * Indicates that the resource requested is no longer available and will not be available again.
     * This should be used when a resource has been intentionally removed and the resource should be purged.
     * Upon receiving a 410 status code, the client should not request the resource in the future.
     * Clients such as search engines should remove the resource from their indices.
     * Most use cases do not require clients and search engines to purge the resource, and a "404 Not Found" may be used instead.
     */
    readonly GONE_410: 410;
    /**
     * The request did not specify the length of its content, which is required by the requested resource.
     */
    readonly LENGTH_REQUIRED_411: 411;
    /**
     * The server does not meet one of the preconditions that the requester put on the request.
     */
    readonly PRECONDITION_FAILED_412: 412;
    /**
     * The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
     */
    readonly PAYLOAD_TOO_LARGE_413: 413;
    /**
     * The URI provided was too long for the server to process. Often the result of too much data being encoded as a query-string of a GET request,
     * in which case it should be converted to a POST request.
     * Called "Request-URI Too Long" previously.
     */
    readonly URI_TOO_LONG_414: 414;
    /**
     * The request entity has a media type which the server or resource does not support.
     * For example, the client uploads an image as image/svg+xml, but the server requires that images use a different format.
     */
    readonly UNSUPPORTED_MEDIA_TYPE_415: 415;
    /**
     * The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
     * For example, if the client asked for a part of the file that lies beyond the end of the file.
     * Called "Requested Range Not Satisfiable" previously.
     */
    readonly RANGE_NOT_SATISFIABLE_416: 416;
    /**
     * The server cannot meet the requirements of the Expect request-header field.
     */
    readonly EXPECTATION_FAILED_417: 417;
    /**
     * This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol,
     * and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by
     * teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
     */
    readonly I_AM_A_TEAPOT_418: 418;
    /**
     * The request was directed at a server that is not able to produce a response (for example because a connection reuse).
     */
    readonly MISDIRECTED_REQUEST_421: 421;
    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    readonly UNPROCESSABLE_ENTITY_422: 422;
    /**
     * The resource that is being accessed is locked.
     */
    readonly LOCKED_423: 423;
    /**
     * The request failed due to failure of a previous request (e.g., a PROPPATCH).
     */
    readonly FAILED_DEPENDENCY_424: 424;
    /**
     * The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
     */
    readonly UPGRADE_REQUIRED_426: 426;
    /**
     * The origin server requires the request to be conditional.
     * Intended to prevent "the 'lost update' problem, where a client
     * GETs a resource's state, modifies it, and PUTs it back to the server,
     * when meanwhile a third party has modified the state on the server, leading to a conflict."
     */
    readonly PRECONDITION_REQUIRED_428: 428;
    /**
     * The user has sent too many requests in a given amount of time. Intended for use with rate-limiting schemes.
     */
    readonly TOO_MANY_REQUESTS_429: 429;
    /**
     * The server is unwilling to process the request because either an individual header field,
     * or all the header fields collectively, are too large.
     */
    readonly REQUEST_HEADER_FIELDS_TOO_LARGE_431: 431;
    /**
     * A server operator has received a legal demand to deny access to a resource or to a set of resources
     * that includes the requested resource. The code 451 was chosen as a reference to the novel Fahrenheit 451.
     */
    readonly UNAVAILABLE_FOR_LEGAL_REASONS_451: 451;
    /**
     * A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
     */
    readonly INTERNAL_SERVER_ERROR_500: 500;
    /**
     * The server either does not recognize the request method, or it lacks the ability to fulfill the request.
     * Usually this implies future availability (e.g., a new feature of a web-service API).
     */
    readonly NOT_IMPLEMENTED_501: 501;
    /**
     * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
     */
    readonly BAD_GATEWAY_502: 502;
    /**
     * The server is currently unavailable (because it is overloaded or down for maintenance).
     * Generally, this is a temporary state.
     */
    readonly SERVICE_UNAVAILABLE_503: 503;
    /**
     * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
     */
    readonly GATEWAY_TIMEOUT_504: 504;
    /**
     * The server does not support the HTTP protocol version used in the request
     */
    readonly HTTP_VERSION_NOT_SUPPORTED_505: 505;
    /**
     * Transparent content negotiation for the request results in a circular reference.
     */
    readonly VARIANT_ALSO_NEGOTIATES_506: 506;
    /**
     * The server is unable to store the representation needed to complete the request.
     */
    readonly INSUFFICIENT_STORAGE_507: 507;
    /**
     * The server detected an infinite loop while processing the request.
     */
    readonly LOOP_DETECTED_508: 508;
    /**
     * Further extensions to the request are required for the server to fulfill it.
     */
    readonly NOT_EXTENDED_510: 510;
    /**
     * The client needs to authenticate to gain network access.
     * Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used
     * to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).
     */
    readonly NETWORK_AUTHENTICATION_REQUIRED_511: 511;
};
export type HttpStatusCode = (typeof HTTP_STATUS_CODE)[keyof typeof HTTP_STATUS_CODE];
export {};
