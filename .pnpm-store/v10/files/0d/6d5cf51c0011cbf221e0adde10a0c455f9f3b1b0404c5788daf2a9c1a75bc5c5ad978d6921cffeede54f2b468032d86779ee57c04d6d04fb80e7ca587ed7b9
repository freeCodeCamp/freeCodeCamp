import { ErrorId } from "./error-map";
export interface IConstructError {
    details: {
        id?: ErrorId;
        context?: Record<string, any>;
        error?: Error;
        pluginName?: string;
        [key: string]: unknown;
    };
}
export interface ILocationPosition {
    line: number;
    column: number;
}
export interface IStructuredStackFrame {
    fileName: string;
    functionName?: string;
    lineNumber?: number;
    columnNumber?: number;
}
export interface IStructuredError {
    code?: string;
    text: string;
    stack: Array<IStructuredStackFrame>;
    filePath?: string;
    location?: {
        start: ILocationPosition;
        end?: ILocationPosition;
    };
    category?: `${ErrorCategory}`;
    error?: Error;
    group?: string;
    level: `${Level}`;
    type: `${Type}`;
    docsUrl?: string;
    pluginName?: string;
}
export interface IOptionalGraphQLInfoContext {
    codeFrame?: string;
    filePath?: string;
    urlPath?: string;
    plugin?: string;
}
export declare enum Level {
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO",
    DEBUG = "DEBUG"
}
export declare enum Type {
    HTML_COMPILATION = "HTML.COMPILATION",
    HTML_GENERATION = "HTML.GENERATION",
    HTML_GENERATION_DEV_SSR = "HTML.GENERATION.DEV_SSR",
    HTML_GENERATION_SSG = "HTML.GENERATION.SSG",
    RSC_COMPILATION = "RSC.COMPILATION",
    RSC_UNKNOWN = "RSC.UNKNOWN",
    PAGE_DATA = "PAGE_DATA",
    GRAPHQL_SCHEMA = "GRAPHQL.SCHEMA",
    GRAPHQL_QUERY_RUNNING = "GRAPHQL.QUERY_RUNNING",
    GRAPHQL_EXTRACTION = "GRAPHQL.EXTRACTION",
    GRAPHQL_VALIDATION = "GRAPHQL.VALIDATION",
    GRAPHQL_UNKNOWN = "GRAPHQL.UNKNOWN",
    ENGINE_COMPILATION = "ENGINE.COMPILATION",
    ENGINE_HTML = "ENGINE.HTML",
    ENGINE_VALIDATION = "ENGINE.VALIDATION",
    ENGINE_EXECUTION = "ENGINE.EXECUTION",
    API_CONFIG_VALIDATION = "API.CONFIG.VALIDATION",
    API_CONFIG_LOADING = "API.CONFIG.LOADING",
    API_CONFIG_COMPILATION = "API.CONFIG.COMPILATION",
    API_NODE_VALIDATION = "API.NODE.VALIDATION",
    API_NODE_COMPILATION = "API.NODE.COMPILATION",
    API_NODE_EXECUTION = "API.NODE.EXECUTION",
    API_TYPESCRIPT_COMPILATION = "API.TYPESCRIPT.COMPILATION",
    API_TYPESCRIPT_TYPEGEN = "API.TYPESCRIPT.TYPEGEN",
    FUNCTIONS_COMPILATION = "FUNCTIONS.COMPILATION",
    FUNCTIONS_EXECUTION = "FUNCTIONS.EXECUTION",
    CLI_VALIDATION = "CLI.VALIDATION",
    ADAPTER = "ADAPTER",
    WEBPACK_DEVELOP = "WEBPACK.DEVELOP",
    WEBPACK_DEVELOP_HTML = "WEBPACK.DEVELOP-HTML",
    WEBPACK_BUILD_JAVASCRIPT = "WEBPACK.BUILD-JAVASCRIPT",
    WEBPACK_BUILD_HTML = "WEBPACK.BUILD-HTML",
    UNKNOWN = "UNKNOWN",
    /** @deprecated */
    GRAPHQL = "GRAPHQL",
    /** @deprecated */
    CONFIG = "CONFIG",
    /** @deprecated */
    WEBPACK = "WEBPACK",
    /** @deprecated */
    PLUGIN = "PLUGIN",
    /** @deprecated */
    COMPILATION = "COMPILATION"
}
export declare enum ErrorCategory {
    USER = "USER",
    SYSTEM = "SYSTEM",
    THIRD_PARTY = "THIRD_PARTY",
    UNKNOWN = "UNKNOWN"
}
