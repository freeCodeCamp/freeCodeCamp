import type { SandpackNodeMessage } from "./clients/node/types";
import type { SandpackRuntimeMessage } from "./clients/runtime/types";
export interface ClientOptions {
    /**
     * Paths to external resources
     */
    externalResources?: string[];
    /**
     * Location of the bundler.
     */
    bundlerURL?: string;
    /**
     * Level of logging to do in the bundler
     */
    logLevel?: SandpackLogLevel;
    /**
     * Relative path that the iframe loads (eg: /about)
     */
    startRoute?: string;
    /**
     * Width of iframe.
     */
    width?: string;
    /**
     * Height of iframe.
     */
    height?: string;
    /**
     * If we should skip the third step: evaluation.
     */
    skipEval?: boolean;
    /**
     * Boolean flags to trigger certain UI elements in the bundler
     */
    showOpenInCodeSandbox?: boolean;
    showErrorScreen?: boolean;
    showLoadingScreen?: boolean;
    /**
     * The bundler will clear the console if you set this to true, everytime the iframe refreshes / starts the first compile
     */
    clearConsoleOnFirstCompile?: boolean;
    /**
     * You can pass a custom file resolver that is responsible for resolving files.
     * We will use this to get all files from the file system.
     */
    fileResolver?: {
        isFile: (path: string) => Promise<boolean>;
        readFile: (path: string) => Promise<string>;
    };
    reactDevTools?: ReactDevToolsMode;
    /**
     * The custom private npm registry setting makes it possible
     * to retrieve npm packages from your own npm registry.
     */
    customNpmRegistries?: NpmRegistry[];
    /**
     * CodeSandbox sandbox id: used internally by codesandbox
     */
    sandboxId?: string;
    /**
     * CodeSandbox team id: with this information, bundler can connect to CodeSandbox
     * and unlock a few capabilities
     */
    teamId?: string;
    /**
     * Enable the service worker feature for sandpack-bundler
     */
    experimental_enableServiceWorker?: boolean;
    experimental_stableServiceWorkerId?: string;
}
export interface SandboxSetup {
    files: SandpackBundlerFiles;
    dependencies?: Dependencies;
    devDependencies?: Dependencies;
    entry?: string;
    /**
     * What template we use, if not defined we infer the template from the dependencies or files.
     *
     */
    template?: SandpackTemplate;
    /**
     * Only use unpkg for fetching the dependencies, no preprocessing. It's slower, but doesn't talk
     * to AWS.
     */
    disableDependencyPreprocessing?: boolean;
}
export interface SandpackBundlerFile {
    code: string;
    hidden?: boolean;
    active?: boolean;
    readOnly?: boolean;
}
export type SandpackBundlerFiles = Record<string, SandpackBundlerFile>;
export interface Module {
    code: string;
    path: string;
}
export type Modules = Record<string, {
    code: string;
    path: string;
}>;
export type Dependencies = Record<string, string>;
export type ReactDevToolsMode = "latest" | "legacy";
export interface ModuleSource {
    fileName: string;
    compiledCode: string;
    sourceMap: unknown | undefined;
}
export declare enum SandpackLogLevel {
    None = 0,
    Error = 10,
    Warning = 20,
    Info = 30,
    Debug = 40
}
export interface ErrorStackFrame {
    columnNumber: number;
    fileName: string;
    functionName: string;
    lineNumber: number;
    _originalColumnNumber: number;
    _originalFileName: string;
    _originalFunctionName: string;
    _originalLineNumber: number;
    _originalScriptCode: Array<{
        lineNumber: number;
        content: string;
        highlight: boolean;
    }>;
}
export interface TranspiledModule {
    module: Module;
    query: string;
    source: ModuleSource | undefined;
    assets: Record<string, ModuleSource>;
    isEntry: boolean;
    isTestFile: boolean;
    childModules: string[];
    /**
     * All extra modules emitted by the loader
     */
    emittedAssets: ModuleSource[];
    initiators: string[];
    dependencies: string[];
    asyncDependencies: string[];
    transpilationDependencies: string[];
    transpilationInitiators: string[];
}
export interface BundlerState {
    entry: string;
    transpiledModules: Record<string, TranspiledModule>;
}
export type SandpackMessage = SandpackRuntimeMessage | SandpackNodeMessage;
export type ListenerFunction = (msg: SandpackMessage) => void;
export type UnsubscribeFunction = () => void;
export type Listen = (listener: ListenerFunction, clientId?: string) => UnsubscribeFunction;
export type Dispatch = (msg: SandpackMessage, clientId?: string) => void;
export interface SandpackError {
    message: string;
    line?: number;
    column?: number;
    path?: string;
    title?: string;
}
export interface SandpackErrorMessage {
    title: string;
    path: string;
    message: string;
    line: number;
    column: number;
    payload: {
        frames?: ErrorStackFrame[];
    };
}
export type ClientStatus = "initializing" | "installing-dependencies" | "transpiling" | "evaluating" | "running-tests" | "idle" | "done";
export type SandpackMessageConsoleMethods = "log" | "debug" | "info" | "warn" | "error" | "table" | "clear" | "time" | "timeEnd" | "count" | "assert";
export interface BaseSandpackMessage {
    type: string;
    $id?: number;
    codesandbox?: boolean;
}
export interface BaseProtocolMessage {
    type: string;
    msgId: string;
}
export interface ProtocolErrorMessage extends BaseProtocolMessage {
    error: {
        message: string;
    };
}
export interface ProtocolResultMessage extends BaseProtocolMessage {
    result: any;
}
export interface ProtocolRequestMessage extends BaseProtocolMessage {
    method: string;
    params: any[];
}
export interface NpmRegistry {
    enabledScopes: string[];
    limitToScopes: boolean;
    registryUrl: string;
    /**
     * It must be `false` if you're providing a sef-host solution,
     * otherwise, it'll try to proxy from CodeSandbox Proxy
     */
    proxyEnabled: boolean;
    registryAuthToken?: string;
}
type TestStatus = "running" | "pass" | "fail";
export type TestError = Error & {
    matcherResult?: boolean;
    mappedErrors?: Array<{
        fileName: string;
        _originalFunctionName: string;
        _originalColumnNumber: number;
        _originalLineNumber: number;
        _originalScriptCode: Array<{
            lineNumber: number;
            content: string;
            highlight: boolean;
        }> | null;
    }>;
};
export interface Test {
    name: string;
    blocks: string[];
    status: TestStatus;
    path: string;
    errors: TestError[];
    duration?: number | undefined;
}
export type SandboxTestMessage = RunAllTests | RunTests | ClearJestErrors | ({
    type: "test";
} & (InitializedTestsMessage | TestCountMessage | TotalTestStartMessage | TotalTestEndMessage | AddFileMessage | RemoveFileMessage | FileErrorMessage | DescribeStartMessage | DescribeEndMessage | AddTestMessage | TestStartMessage | TestEndMessage));
interface InitializedTestsMessage {
    event: "initialize_tests";
}
interface ClearJestErrors {
    type: "action";
    action: "clear-errors";
    source: "jest";
    path: string;
}
interface TestCountMessage {
    event: "test_count";
    count: number;
}
interface TotalTestStartMessage {
    event: "total_test_start";
}
interface TotalTestEndMessage {
    event: "total_test_end";
}
interface AddFileMessage {
    event: "add_file";
    path: string;
}
interface RemoveFileMessage {
    event: "remove_file";
    path: string;
}
interface FileErrorMessage {
    event: "file_error";
    path: string;
    error: TestError;
}
interface DescribeStartMessage {
    event: "describe_start";
    blockName: string;
}
interface DescribeEndMessage {
    event: "describe_end";
}
interface AddTestMessage {
    event: "add_test";
    testName: string;
    path: string;
}
interface TestStartMessage {
    event: "test_start";
    test: Test;
}
interface TestEndMessage {
    event: "test_end";
    test: Test;
}
interface RunAllTests {
    type: "run-all-tests";
}
interface RunTests {
    type: "run-tests";
    path: string;
}
export type SandpackTemplate = "angular-cli" | "create-react-app" | "create-react-app-typescript" | "svelte" | "parcel" | "vue-cli" | "static" | "solid" | "nextjs" | "node";
export {};
