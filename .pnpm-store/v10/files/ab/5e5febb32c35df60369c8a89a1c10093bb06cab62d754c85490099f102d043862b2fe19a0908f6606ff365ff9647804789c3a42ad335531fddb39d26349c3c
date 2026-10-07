import * as vite from 'vite';
import { InlineConfig, UserConfig as UserConfig$1, Plugin, ResolvedConfig as ResolvedConfig$1, ViteDevServer, LogLevel, LoggerOptions, Logger as Logger$1 } from 'vite';
export { vite as Vite };
export { esbuildVersion, isCSSRequest, isFileLoadingAllowed, parseAst, parseAstAsync, rollupVersion, version as viteVersion } from 'vite';
import { IncomingMessage } from 'node:http';
import { R as ResolvedConfig, e as UserConfig, f as VitestRunMode, g as VitestOptions, V as Vitest, A as ApiConfig, L as Logger, h as TestSpecification, T as TestProject, P as PoolWorker, i as PoolOptions, j as WorkerRequest, k as TestSequencer } from './chunks/reporters.d.CEnv6XRv.js';
export { M as AgentReporter, B as BaseCoverageOptions, l as BaseReporter, m as BenchmarkBuiltinReporters, n as BenchmarkReporter, o as BenchmarkReportsMap, p as BenchmarkUserOptions, q as BrowserBuiltinProvider, r as BrowserCommand, s as BrowserCommandContext, t as BrowserConfigOptions, u as BrowserInstanceOption, v as BrowserModuleMocker, w as BrowserOrchestrator, x as BrowserProvider, y as BrowserProviderOption, z as BrowserScript, D as BrowserServerFactory, E as BrowserServerOptions, G as BrowserServerState, H as BrowserServerStateSession, J as BuiltinEnvironment, K as BuiltinReporterOptions, N as BuiltinReporters, O as CSSModuleScopeStrategy, Q as CoverageInstrumenter, S as CoverageIstanbulOptions, C as CoverageOptions, X as CoverageProvider, Y as CoverageProviderModule, Z as CoverageReporter, _ as CoverageV8Options, $ as CustomProviderOptions, a0 as DefaultReporter, a1 as DepsOptimizationOptions, a2 as DotReporter, a3 as EnvironmentOptions, a4 as GithubActionsReporter, a5 as HTMLOptions, a6 as HangingProcessReporter, I as InlineConfig, a7 as InstrumenterOptions, a8 as JUnitOptions, a9 as JUnitReporter, aa as JsonAssertionResult, ab as JsonOptions, ac as JsonReporter, ad as JsonTestResult, ae as JsonTestResults, M as MinimalReporter, af as ModuleDiagnostic, ag as OnServerRestartHandler, ah as OnTestsRerunHandler, ai as ParentProjectBrowser, aj as Pool, ak as PoolRunnerInitializer, al as PoolTask, am as ProjectBrowser, an as ProjectConfig, ao as ReportContext, ap as ReportedHookContext, aq as Reporter, ar as ReportersMap, as as ResolveSnapshotPathHandler, at as ResolveSnapshotPathHandlerContext, au as ResolvedBrowserOptions, av as ResolvedCoverageOptions, aw as ResolvedProjectConfig, ax as SerializedTestProject, ay as TapFlatReporter, az as TapReporter, aA as TaskOptions, aB as TestCase, aC as TestCollection, aD as TestDiagnostic, aE as TestModule, aF as TestModuleState, aG as TestResult, aH as TestResultFailed, aI as TestResultPassed, aJ as TestResultSkipped, aK as TestRunEndReason, aL as TestRunResult, aM as TestSequencerConstructor, aN as TestSpecificationOptions, aO as TestState, aP as TestSuite, aQ as TestSuiteState, aR as ToMatchScreenshotComparators, aS as ToMatchScreenshotOptions, aT as TypecheckConfig, U as UserWorkspaceConfig, aU as VerboseBenchmarkReporter, aV as VerboseReporter, aW as VitestEnvironment, aX as VitestPackageInstaller, W as WatcherTriggerPattern, aY as WorkerResponse, aZ as _BrowserNames, a_ as experimental_getRunnerTask } from './chunks/reporters.d.CEnv6XRv.js';
export { C as CacheKeyIdGenerator, a as CacheKeyIdGeneratorContext, V as VitestPluginContext } from './chunks/plugin.d.BM2TCi12.js';
export { BaseCoverageProvider } from './coverage.js';
import { Awaitable } from '@vitest/utils';
export { SerializedError } from '@vitest/utils';
import { R as RuntimeRPC } from './chunks/rpc.d.B_8sPU0w.js';
import { Writable } from 'node:stream';
import { C as ContextRPC } from './chunks/worker.d.ZpHpO4yb.js';
export { T as TestExecutionType } from './chunks/worker.d.ZpHpO4yb.js';
import { Debugger } from 'obug';
import './chunks/global.d.DVsSRdQ5.js';
export { Task as RunnerTask, TaskResult as RunnerTaskResult, TaskResultPack as RunnerTaskResultPack, Test as RunnerTestCase, File as RunnerTestFile, Suite as RunnerTestSuite, SequenceHooks, SequenceSetupFiles } from '@vitest/runner';
export { c as RuntimeConfig } from './chunks/config.d.A1h_Y6Jt.js';
export { generateFileHash } from '@vitest/runner/utils';
export { CDPSession } from 'vitest/browser';
import './chunks/traces.d.D2T_R8rx.js';
import './chunks/browser.d.BcoexmFG.js';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/utils/diff';
import '@vitest/expect';
import 'vitest/optional-types.js';
import './chunks/benchmark.d.DAaHLpsq.js';
import 'tinybench';
import '@vitest/mocker';
import '@vitest/utils/source-map';
import './chunks/coverage.d.BZtK59WP.js';
import '@vitest/snapshot/manager';
import 'node:console';
import 'node:fs';
import 'vite/module-runner';
import './chunks/environment.d.CrsxCzP1.js';

type RawErrsMap = Map<string, TscErrorInfo[]>;
interface TscErrorInfo {
	filePath: string;
	errCode: number;
	errMsg: string;
	line: number;
	column: number;
}
interface CollectLineNumbers {
	target: number;
	next: number;
	prev?: number;
}
type CollectLines = { [key in keyof CollectLineNumbers] : string };
interface RootAndTarget {
	root: string;
	targetAbsPath: string;
}
type Context = RootAndTarget & {
	rawErrsMap: RawErrsMap;
	openedDirs: Set<string>;
	lastActivePath?: string;
};

declare function isValidApiRequest(config: ResolvedConfig, req: IncomingMessage): boolean;

declare function escapeTestName(label: string, dynamic: boolean): string;

interface CliOptions extends UserConfig {
	/**
	* Override the watch mode
	*/
	run?: boolean;
	/**
	* Removes colors from the console output
	*/
	color?: boolean;
	/**
	* Output collected tests as JSON or to a file
	*/
	json?: string | boolean;
	/**
	* Output collected test files only
	*/
	filesOnly?: boolean;
	/**
	* Parse files statically instead of running them to collect tests
	* @experimental
	*/
	staticParse?: boolean;
	/**
	* How many tests to process at the same time
	* @experimental
	*/
	staticParseConcurrency?: number;
	/**
	* Override vite config's configLoader from CLI.
	* Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly (default: `bundle`).
	* This is only available with **vite version 6.1.0** and above.
	* @experimental
	*/
	configLoader?: InlineConfig extends {
		configLoader?: infer T;
	} ? T : never;
}
/**
* Start Vitest programmatically
*
* Returns a Vitest instance if initialized successfully.
*/
declare function startVitest(mode: VitestRunMode, cliFilters?: string[], options?: CliOptions, viteOverrides?: UserConfig$1, vitestOptions?: VitestOptions): Promise<Vitest>;

interface CliParseOptions {
	allowUnknownOptions?: boolean;
}
declare function parseCLI(argv: string | string[], config?: CliParseOptions): {
	filter: string[];
	options: CliOptions;
};

/**
* @deprecated Internal function
*/
declare function resolveApiServerConfig<Options extends ApiConfig & Omit<UserConfig, "expect">>(options: Options, defaultPort: number, parentApi?: ApiConfig, logger?: Logger): ApiConfig | undefined;

declare function createVitest(mode: VitestRunMode, options: CliOptions, viteOverrides?: UserConfig$1, vitestOptions?: VitestOptions): Promise<Vitest>;

declare class FilesNotFoundError extends Error {
	code: string;
	constructor(mode: "test" | "benchmark");
}
declare class GitNotFoundError extends Error {
	code: string;
	constructor();
}

declare function VitestPlugin(options?: UserConfig, vitest?: Vitest): Promise<Plugin[]>;

declare function resolveConfig(options?: UserConfig, viteOverrides?: UserConfig$1): Promise<{
	vitestConfig: ResolvedConfig;
	viteConfig: ResolvedConfig$1;
}>;

declare function resolveFsAllow(projectRoot: string, rootConfigFile: string | false | undefined): string[];

type RunWithFiles = (files: TestSpecification[], invalidates?: string[]) => Promise<void>;
interface ProcessPool {
	name: string;
	runTests: RunWithFiles;
	collectTests: RunWithFiles;
	close?: () => Awaitable<void>;
}
declare function getFilePoolName(project: TestProject): ResolvedConfig["pool"];

interface MethodsOptions {
	cacheFs?: boolean;
	collect?: boolean;
}
declare function createMethodsRPC(project: TestProject, methodsOptions?: MethodsOptions): RuntimeRPC;

/** @experimental */
declare class ForksPoolWorker implements PoolWorker {
	readonly name: string;
	readonly cacheFs: boolean;
	protected readonly entrypoint: string;
	protected execArgv: string[];
	protected env: Partial<NodeJS.ProcessEnv>;
	private _fork?;
	private stdout;
	private stderr;
	constructor(options: PoolOptions);
	on(event: string, callback: (arg: any) => void): void;
	off(event: string, callback: (arg: any) => void): void;
	send(message: WorkerRequest): void;
	start(): Promise<void>;
	stop(): Promise<void>;
	deserialize(data: unknown): unknown;
	private get fork();
}

/** @experimental */
declare class ThreadsPoolWorker implements PoolWorker {
	readonly name: string;
	protected readonly entrypoint: string;
	protected execArgv: string[];
	protected env: Partial<NodeJS.ProcessEnv>;
	private _thread?;
	private stdout;
	private stderr;
	constructor(options: PoolOptions);
	on(event: string, callback: (arg: any) => void): void;
	off(event: string, callback: (arg: any) => void): void;
	send(message: WorkerRequest): void;
	start(): Promise<void>;
	stop(): Promise<void>;
	deserialize(data: unknown): unknown;
	private get thread();
}

/** @experimental */
declare class TypecheckPoolWorker implements PoolWorker {
	readonly name: string;
	private readonly project;
	private _eventEmitter;
	constructor(options: PoolOptions);
	start(): Promise<void>;
	stop(): Promise<void>;
	canReuse(): boolean;
	send(message: WorkerRequest): void;
	on(event: string, callback: (arg: any) => any): void;
	off(event: string, callback: (arg: any) => any): void;
	deserialize(data: unknown): unknown;
}

/** @experimental */
declare class VmForksPoolWorker extends ForksPoolWorker {
	readonly name = "vmForks";
	readonly reportMemory: true;
	protected readonly entrypoint: string;
	constructor(options: PoolOptions);
	canReuse(): boolean;
}

/** @experimental */
declare class VmThreadsPoolWorker extends ThreadsPoolWorker {
	readonly name = "vmThreads";
	readonly reportMemory: true;
	protected readonly entrypoint: string;
	constructor(options: PoolOptions);
	canReuse(): boolean;
}

declare class BaseSequencer implements TestSequencer {
	protected ctx: Vitest;
	constructor(ctx: Vitest);
	shard(files: TestSpecification[]): Promise<TestSpecification[]>;
	sort(files: TestSpecification[]): Promise<TestSpecification[]>;
	private calculateShardRange;
}

declare function registerConsoleShortcuts(ctx: Vitest, stdin: NodeJS.ReadStream | undefined, stdout: NodeJS.WriteStream | Writable): () => void;

interface WorkerContext extends ContextRPC {}

/**
* Check if the url is allowed to be served, via the `server.fs` config.
* @deprecated Use the `isFileLoadingAllowed` function instead.
*/
declare function isFileServingAllowed(config: ResolvedConfig$1, url: string): boolean;
declare function isFileServingAllowed(url: string, server: ViteDevServer): boolean;

declare function createViteLogger(console: Logger, level?: LogLevel, options?: LoggerOptions): Logger$1;

declare const rootDir: string;
declare const distDir: string;

declare function createDebugger(namespace: `vitest:${string}`): Debugger | undefined;

declare const version: string;

declare const createViteServer: typeof vite.createServer;

declare const rolldownVersion: string | undefined;

export { ApiConfig, BaseSequencer, ForksPoolWorker, GitNotFoundError, PoolOptions, PoolWorker, ResolvedConfig, TestProject, TestSequencer, TestSpecification, UserConfig as TestUserConfig, FilesNotFoundError as TestsNotFoundError, ThreadsPoolWorker, TypecheckPoolWorker, Vitest, VitestOptions, VitestPlugin, VitestRunMode, VmForksPoolWorker, VmThreadsPoolWorker, WorkerRequest, createDebugger, createMethodsRPC, createViteLogger, createViteServer, createVitest, distDir, escapeTestName, getFilePoolName, isFileServingAllowed, isValidApiRequest, parseCLI, registerConsoleShortcuts, resolveApiServerConfig, resolveConfig, resolveFsAllow, rolldownVersion, rootDir, startVitest, version };
export type { CliOptions, CliParseOptions, ProcessPool, CollectLineNumbers as TypeCheckCollectLineNumbers, CollectLines as TypeCheckCollectLines, Context as TypeCheckContext, TscErrorInfo as TypeCheckErrorInfo, RawErrsMap as TypeCheckRawErrorsMap, RootAndTarget as TypeCheckRootAndTarget, WorkerContext };
