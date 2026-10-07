import { z as ResolvedConfig, y as UserConfig, v as VitestRunMode, H as VitestOptions, V as Vitest, A as ApiConfig, T as TestProject, J as TestSequencer, K as TestSpecification, L as Logger, M as TestModule, N as ModuleDiagnostic } from './chunks/reporters.d.BFLkQcL6.js';
export { B as BaseCoverageOptions, F as BenchmarkUserOptions, ag as BrowserBuiltinProvider, ah as BrowserCommand, ai as BrowserCommandContext, q as BrowserConfigOptions, aj as BrowserInstanceOption, ak as BrowserModuleMocker, al as BrowserOrchestrator, am as BrowserProvider, an as BrowserProviderInitializationOptions, ao as BrowserProviderModule, ap as BrowserProviderOptions, p as BrowserScript, aq as BrowserServerState, ar as BrowserServerStateSession, r as BuiltinEnvironment, as as CDPSession, u as CSSModuleScopeStrategy, m as CoverageIstanbulOptions, l as CoverageOptions, h as CoverageProvider, i as CoverageProviderModule, j as CoverageReporter, c as CoverageV8Options, n as CustomProviderOptions, D as DepsOptimizationOptions, a0 as HTMLOptions, I as InlineConfig, a2 as JUnitOptions, a1 as JsonOptions, O as OnServerRestartHandler, Q as OnTestsRerunHandler, at as ParentProjectBrowser, P as Pool, t as PoolOptions, Y as ProcessPool, au as ProjectBrowser, E as ProjectConfig, a as ReportContext, aA as ReportedHookContext, o as Reporter, ax as ResolveSnapshotPathHandler, ay as ResolveSnapshotPathHandlerContext, av as ResolvedBrowserOptions, R as ResolvedCoverageOptions, aw as ResolvedProjectConfig, $ as SerializedTestProject, a3 as TaskOptions, a4 as TestCase, a5 as TestCollection, a6 as TestDiagnostic, a7 as TestModuleState, a8 as TestResult, a9 as TestResultFailed, aa as TestResultPassed, ab as TestResultSkipped, aB as TestRunEndReason, az as TestRunResult, af as TestSequencerConstructor, ac as TestState, ad as TestSuite, ae as TestSuiteState, w as TransformModePatterns, x as TypecheckConfig, U as UserWorkspaceConfig, s as VitestEnvironment, X as VitestPackageInstaller, g as WatcherTriggerPattern, Z as WorkspaceSpec, _ as getFilePoolName } from './chunks/reporters.d.BFLkQcL6.js';
import * as vite from 'vite';
import { InlineConfig, UserConfig as UserConfig$1, Plugin, ResolvedConfig as ResolvedConfig$1, LogLevel, LoggerOptions, Logger as Logger$1 } from 'vite';
export { vite as Vite };
export { esbuildVersion, isCSSRequest, isFileServingAllowed, parseAst, parseAstAsync, rollupVersion, version as viteVersion } from 'vite';
import { IncomingMessage } from 'node:http';
import { R as RuntimeRPC } from './chunks/worker.d.1GmBbd7G.js';
export { T as TestExecutionType } from './chunks/worker.d.1GmBbd7G.js';
import { Writable } from 'node:stream';
export { V as VitestPluginContext } from './chunks/vite.d.CMLlLIFP.js';
export { W as WorkerContext } from './chunks/worker.d.CKwWzBSj.js';
export { C as TypeCheckCollectLineNumbers, a as TypeCheckCollectLines, c as TypeCheckContext, T as TypeCheckErrorInfo, R as TypeCheckRawErrorsMap, b as TypeCheckRootAndTarget } from './chunks/global.d.MAmajcmJ.js';
import { Debugger } from 'debug';
export { Task as RunnerTask, TaskResult as RunnerTaskResult, TaskResultPack as RunnerTaskResultPack, Test as RunnerTestCase, File as RunnerTestFile, Suite as RunnerTestSuite, SequenceHooks, SequenceSetupFiles } from '@vitest/runner';
export { f as EnvironmentOptions, H as HappyDOMOptions, J as JSDOMOptions } from './chunks/environment.d.cL3nLXbE.js';
export { SerializedError } from '@vitest/utils';
export { b as RuntimeConfig } from './chunks/config.d.D2ROskhv.js';
export { generateFileHash } from '@vitest/runner/utils';
import 'node:console';
import '@vitest/mocker';
import '@vitest/utils/source-map';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/utils/diff';
import 'vite-node';
import 'chai';
import './chunks/benchmark.d.BwvBVTda.js';
import 'tinybench';
import './chunks/coverage.d.S9RMNXIe.js';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'node:fs';
import 'node:worker_threads';
import '@vitest/expect';
import 'vitest/optional-types.js';
import '@vitest/snapshot/environment';

declare function isValidApiRequest(config: ResolvedConfig, req: IncomingMessage): boolean;

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
	* Override vite config's configLoader from cli.
	* Use `bundle` to bundle the config with esbuild or `runner` (experimental) to process it on the fly (default: `bundle`).
	* This is only available with **vite version 6.1.0** and above.
	* @experimental
	*/
	configLoader?: InlineConfig extends {
		configLoader?: infer T
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
	filter: string[]
	options: CliOptions
};

declare function resolveApiServerConfig<Options extends ApiConfig & UserConfig>(options: Options, defaultPort: number): ApiConfig | undefined;

declare function createVitest(mode: VitestRunMode, options: CliOptions, viteOverrides?: UserConfig$1, vitestOptions?: VitestOptions): Promise<Vitest>;

declare class FilesNotFoundError extends Error {
	code: string;
	constructor(mode: "test" | "benchmark");
}
declare class GitNotFoundError extends Error {
	code: string;
	constructor();
}

/** @deprecated use `TestProject` instead */
type GlobalSetupContext = TestProject;

declare function VitestPlugin(options?: UserConfig, vitest?: Vitest): Promise<Plugin[]>;

// this is only exported as a public function and not used inside vitest
declare function resolveConfig(options?: UserConfig, viteOverrides?: UserConfig$1): Promise<{
	vitestConfig: ResolvedConfig
	viteConfig: ResolvedConfig$1
}>;

declare function resolveFsAllow(projectRoot: string, rootConfigFile: string | false | undefined): string[];

interface MethodsOptions {
	cacheFs?: boolean;
	// do not report files
	collect?: boolean;
}
declare function createMethodsRPC(project: TestProject, options?: MethodsOptions): RuntimeRPC;

declare class BaseSequencer implements TestSequencer {
	protected ctx: Vitest;
	constructor(ctx: Vitest);
	// async so it can be extended by other sequelizers
	shard(files: TestSpecification[]): Promise<TestSpecification[]>;
	// async so it can be extended by other sequelizers
	sort(files: TestSpecification[]): Promise<TestSpecification[]>;
}

declare function registerConsoleShortcuts(ctx: Vitest, stdin: NodeJS.ReadStream | undefined, stdout: NodeJS.WriteStream | Writable): () => void;

// This is copy-pasted and needs to be synced from time to time. Ideally, Vite's `createLogger` should accept a custom `console`
// https://github.com/vitejs/vite/blob/main/packages/vite/src/node/logger.ts?rgh-link-date=2024-10-16T23%3A29%3A19Z
// When Vitest supports only Vite 6 and above, we can use Vite's `createLogger({ console })`
// https://github.com/vitejs/vite/pull/18379
declare function createViteLogger(console: Logger, level?: LogLevel, options?: LoggerOptions): Logger$1;

declare const rootDir: string;
declare const distDir: string;

declare function createDebugger(namespace: `vitest:${string}`): Debugger | undefined;

declare const version: string;

/** @deprecated use `createViteServer` instead */
declare const createServer: typeof vite.createServer;
declare const createViteServer: typeof vite.createServer;

/**
* @deprecated Use `TestModule` instead
*/
declare const TestFile: typeof TestModule;

/**
* @deprecated Use `ModuleDiagnostic` instead
*/
type FileDiagnostic = ModuleDiagnostic;

// rolldownVersion is exported only by rolldown-vite
declare const rolldownVersion: string | undefined;

export { ApiConfig, BaseSequencer, GitNotFoundError, ModuleDiagnostic, ResolvedConfig, TestFile, TestModule, TestProject, TestSequencer, TestSpecification, FilesNotFoundError as TestsNotFoundError, UserConfig, Vitest, VitestOptions, VitestPlugin, VitestRunMode, TestProject as WorkspaceProject, createDebugger, createMethodsRPC, createServer, createViteLogger, createViteServer, createVitest, distDir, isValidApiRequest, parseCLI, registerConsoleShortcuts, resolveApiServerConfig, resolveConfig, resolveFsAllow, rolldownVersion, rootDir, startVitest, version };
export type { CliParseOptions, FileDiagnostic, GlobalSetupContext };
