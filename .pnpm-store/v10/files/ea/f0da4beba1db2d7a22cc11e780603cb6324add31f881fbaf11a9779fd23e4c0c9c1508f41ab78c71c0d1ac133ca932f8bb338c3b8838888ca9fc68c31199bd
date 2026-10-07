import { Task, TaskMeta, Suite, File, TestAnnotation, ImportDuration, TaskResultPack, TaskEventPack, SequenceSetupFiles, SequenceHooks, CancelReason } from '@vitest/runner';
import { b as Awaitable, U as UserConsoleLog, c as Arrayable$1, A as AfterSuiteRunMeta, L as LabelColor, f as EnvironmentOptions, P as ProvidedContext } from './environment.d.cL3nLXbE.js';
import { ParsedStack, TestError, SerializedError, ErrorWithDiff, Arrayable, Awaitable as Awaitable$1 } from '@vitest/utils';
import { Writable } from 'node:stream';
import { TransformResult as TransformResult$1, UserConfig as UserConfig$1, DepOptimizationConfig, ServerOptions, ConfigEnv, AliasOptions, ViteDevServer, ModuleNode } from 'vite';
import { Console } from 'node:console';
import { MockedModule } from '@vitest/mocker';
import { StackTraceParserOptions } from '@vitest/utils/source-map';
import { T as TestExecutionMethod } from './worker.d.1GmBbd7G.js';
import { a as SerializedConfig, F as FakeTimerInstallOpts } from './config.d.D2ROskhv.js';
import { PrettyFormatOptions } from '@vitest/pretty-format';
import { SnapshotSummary, SnapshotStateOptions } from '@vitest/snapshot';
import { SerializedDiffOptions } from '@vitest/utils/diff';
import { ViteNodeServerOptions } from 'vite-node';
import * as chai from 'chai';
import { B as BenchmarkResult } from './benchmark.d.BwvBVTda.js';
import { a as RuntimeCoverageProviderModule } from './coverage.d.S9RMNXIe.js';
import { SnapshotManager } from '@vitest/snapshot/manager';
import { Stats } from 'node:fs';

declare class TypeCheckError extends Error {
	message: string;
	stacks: ParsedStack[];
	name: string;
	constructor(message: string, stacks: ParsedStack[]);
}

interface ErrorOptions {
	type?: string;
	fullStack?: boolean;
	project?: TestProject;
	verbose?: boolean;
	screenshotPaths?: string[];
	task?: Task;
	showCodeFrame?: boolean;
}
type Listener = () => void;
declare class Logger {
	ctx: Vitest;
	outputStream: NodeJS.WriteStream | Writable;
	errorStream: NodeJS.WriteStream | Writable;
	private _clearScreenPending;
	private _highlights;
	private cleanupListeners;
	console: Console;
	constructor(ctx: Vitest, outputStream?: NodeJS.WriteStream | Writable, errorStream?: NodeJS.WriteStream | Writable);
	log(...args: any[]): void;
	error(...args: any[]): void;
	warn(...args: any[]): void;
	clearFullScreen(message?: string): void;
	clearScreen(message: string, force?: boolean): void;
	private _clearScreen;
	printError(err: unknown, options?: ErrorOptions): void;
	deprecate(message: string): void;
	clearHighlightCache(filename?: string): void;
	highlight(filename: string, source: string): string;
	printNoTestFound(filters?: string[]): void;
	printBanner(): void;
	printBrowserBanner(project: TestProject): void;
	printUnhandledErrors(errors: unknown[]): void;
	printSourceTypeErrors(errors: TypeCheckError[]): void;
	getColumns(): number;
	onTerminalCleanup(listener: Listener): void;
	private addCleanupListeners;
	private registerUnhandledRejection;
}

type SerializedTestSpecification = [project: {
	name: string | undefined
	root: string
}, file: string, options: {
	pool: string
	testLines?: number[] | undefined
}];

declare class ReportedTaskImplementation {
	/**
	* The project associated with the test or suite.
	*/
	readonly project: TestProject;
	/**
	* Unique identifier.
	* This ID is deterministic and will be the same for the same test across multiple runs.
	* The ID is based on the project name, module url and test order.
	*/
	readonly id: string;
	/**
	* Location in the module where the test or suite is defined.
	*/
	readonly location: {
		line: number
		column: number
	} | undefined;
	/**
	* Checks if the test did not fail the suite.
	* If the test is not finished yet or was skipped, it will return `true`.
	*/
	ok(): boolean;
	/**
	* Custom metadata that was attached to the test during its execution.
	*/
	meta(): TaskMeta;
}
declare class TestCase extends ReportedTaskImplementation {
	#private;
	readonly type = "test";
	/**
	* Direct reference to the test module where the test or suite is defined.
	*/
	readonly module: TestModule;
	/**
	* Name of the test.
	*/
	readonly name: string;
	/**
	* Options that the test was initiated with.
	*/
	readonly options: TaskOptions;
	/**
	* Parent suite. If the test was called directly inside the module, the parent will be the module itself.
	*/
	readonly parent: TestSuite | TestModule;
	/**
	* Full name of the test including all parent suites separated with `>`.
	*/
	get fullName(): string;
	/**
	* Test results.
	* - **pending**: Test was collected, but didn't finish running yet.
	* - **passed**: Test passed successfully
	* - **failed**: Test failed to execute
	* - **skipped**: Test was skipped during collection or dynamically with `ctx.skip()`.
	*/
	result(): TestResult;
	/**
	* Test annotations added via the `task.annotate` API during the test execution.
	*/
	annotations(): ReadonlyArray<TestAnnotation>;
	/**
	* Useful information about the test like duration, memory usage, etc.
	* Diagnostic is only available after the test has finished.
	*/
	diagnostic(): TestDiagnostic | undefined;
}
declare class TestCollection {
	#private;
	constructor(task: Suite | File, project: TestProject);
	/**
	* Returns the test or suite at a specific index.
	*/
	at(index: number): TestCase | TestSuite | undefined;
	/**
	* The number of tests and suites in the collection.
	*/
	get size(): number;
	/**
	* Returns the collection in array form for easier manipulation.
	*/
	array(): (TestCase | TestSuite)[];
	/**
	* Filters all tests that are part of this collection and its children.
	*/
	allTests(state?: TestState): Generator<TestCase, undefined, void>;
	/**
	* Filters only the tests that are part of this collection.
	*/
	tests(state?: TestState): Generator<TestCase, undefined, void>;
	/**
	* Filters only the suites that are part of this collection.
	*/
	suites(): Generator<TestSuite, undefined, void>;
	/**
	* Filters all suites that are part of this collection and its children.
	*/
	allSuites(): Generator<TestSuite, undefined, void>;
	[Symbol.iterator](): Generator<TestSuite | TestCase, undefined, void>;
}

type ReportedHookContext = {
	readonly name: "beforeAll" | "afterAll"
	readonly entity: TestSuite | TestModule
} | {
	readonly name: "beforeEach" | "afterEach"
	readonly entity: TestCase
};
declare abstract class SuiteImplementation extends ReportedTaskImplementation {
	/**
	* Collection of suites and tests that are part of this suite.
	*/
	readonly children: TestCollection;
	/**
	* Errors that happened outside of the test run during collection, like syntax errors.
	*/
	errors(): SerializedError[];
}
declare class TestSuite extends SuiteImplementation {
	#private;
	readonly type = "suite";
	/**
	* Name of the test or the suite.
	*/
	readonly name: string;
	/**
	* Direct reference to the test module where the test or suite is defined.
	*/
	readonly module: TestModule;
	/**
	* Parent suite. If suite was called directly inside the module, the parent will be the module itself.
	*/
	readonly parent: TestSuite | TestModule;
	/**
	* Options that suite was initiated with.
	*/
	readonly options: TaskOptions;
	/**
	* Checks if the suite has any failed tests.
	* This will also return `false` if suite failed during collection.
	*/
	ok: () => boolean;
	/**
	* The meta information attached to the suite during its collection or execution.
	*/
	meta: () => TaskMeta;
	/**
	* Checks the running state of the suite.
	*/
	state(): TestSuiteState;
	/**
	* Full name of the suite including all parent suites separated with `>`.
	*/
	get fullName(): string;
}
declare class TestModule extends SuiteImplementation {
	readonly location: undefined;
	readonly type = "module";
	/**
	* This is usually an absolute UNIX file path.
	* It can be a virtual ID if the file is not on the disk.
	* This value corresponds to the ID in the Vite's module graph.
	*/
	readonly moduleId: string;
	/**
	* Checks the running state of the test file.
	*/
	state(): TestModuleState;
	/**
	* Checks if the module has any failed tests.
	* This will also return `false` if module failed during collection.
	*/
	ok: () => boolean;
	/**
	* The meta information attached to the module during its collection or execution.
	*/
	meta: () => TaskMeta;
	/**
	* Useful information about the module like duration, memory usage, etc.
	* If the module was not executed yet, all diagnostic values will return `0`.
	*/
	diagnostic(): ModuleDiagnostic;
}
interface TaskOptions {
	readonly each: boolean | undefined;
	readonly fails: boolean | undefined;
	readonly concurrent: boolean | undefined;
	readonly shuffle: boolean | undefined;
	readonly retry: number | undefined;
	readonly repeats: number | undefined;
	readonly mode: "run" | "only" | "skip" | "todo";
}
type TestSuiteState = "skipped" | "pending" | "failed" | "passed";
type TestModuleState = TestSuiteState | "queued";
type TestState = TestResult["state"];
type TestResult = TestResultPassed | TestResultFailed | TestResultSkipped | TestResultPending;
interface TestResultPending {
	/**
	* The test was collected, but didn't finish running yet.
	*/
	readonly state: "pending";
	/**
	* Pending tests have no errors.
	*/
	readonly errors: undefined;
}
interface TestResultPassed {
	/**
	* The test passed successfully.
	*/
	readonly state: "passed";
	/**
	* Errors that were thrown during the test execution.
	*
	* **Note**: If test was retried successfully, errors will still be reported.
	*/
	readonly errors: ReadonlyArray<TestError> | undefined;
}
interface TestResultFailed {
	/**
	* The test failed to execute.
	*/
	readonly state: "failed";
	/**
	* Errors that were thrown during the test execution.
	*/
	readonly errors: ReadonlyArray<TestError>;
}
interface TestResultSkipped {
	/**
	* The test was skipped with `only` (on another test), `skip` or `todo` flag.
	* You can see which one was used in the `options.mode` option.
	*/
	readonly state: "skipped";
	/**
	* Skipped tests have no errors.
	*/
	readonly errors: undefined;
	/**
	* A custom note passed down to `ctx.skip(note)`.
	*/
	readonly note: string | undefined;
}
interface TestDiagnostic {
	/**
	* If the duration of the test is above `slowTestThreshold`.
	*/
	readonly slow: boolean;
	/**
	* The amount of memory used by the test in bytes.
	* This value is only available if the test was executed with `logHeapUsage` flag.
	*/
	readonly heap: number | undefined;
	/**
	* The time it takes to execute the test in ms.
	*/
	readonly duration: number;
	/**
	* The time in ms when the test started.
	*/
	readonly startTime: number;
	/**
	* The amount of times the test was retried.
	*/
	readonly retryCount: number;
	/**
	* The amount of times the test was repeated as configured by `repeats` option.
	* This value can be lower if the test failed during the repeat and no `retry` is configured.
	*/
	readonly repeatCount: number;
	/**
	* If test passed on a second retry.
	*/
	readonly flaky: boolean;
}
interface ModuleDiagnostic {
	/**
	* The time it takes to import and initiate an environment.
	*/
	readonly environmentSetupDuration: number;
	/**
	* The time it takes Vitest to setup test harness (runner, mocks, etc.).
	*/
	readonly prepareDuration: number;
	/**
	* The time it takes to import the test module.
	* This includes importing everything in the module and executing suite callbacks.
	*/
	readonly collectDuration: number;
	/**
	* The time it takes to import the setup module.
	*/
	readonly setupDuration: number;
	/**
	* Accumulated duration of all tests and hooks in the module.
	*/
	readonly duration: number;
	/**
	* The amount of memory used by the test module in bytes.
	* This value is only available if the test was executed with `logHeapUsage` flag.
	*/
	readonly heap: number | undefined;
	/**
	* The time spent importing every non-externalized dependency that Vitest has processed.
	*/
	readonly importDurations: Record<string, ImportDuration>;
}

type BuiltinPool = "browser" | "threads" | "forks" | "vmThreads" | "vmForks" | "typescript";
type Pool = BuiltinPool | (string & {});
interface PoolOptions extends Record<string, unknown> {
	/**
	* Run tests in `node:worker_threads`.
	*
	* Test isolation (when enabled) is done by spawning a new thread for each test file.
	*
	* This pool is used by default.
	*/
	threads?: ThreadsOptions & WorkerContextOptions;
	/**
	* Run tests in `node:child_process` using [`fork()`](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)
	*
	* Test isolation (when enabled) is done by spawning a new child process for each test file.
	*/
	forks?: ForksOptions & WorkerContextOptions;
	/**
	* Run tests in isolated `node:vm`.
	* Test files are run parallel using `node:worker_threads`.
	*
	* This makes tests run faster, but VM module is unstable. Your tests might leak memory.
	*/
	vmThreads?: ThreadsOptions & VmOptions;
	/**
	* Run tests in isolated `node:vm`.
	*
	* Test files are run parallel using `node:child_process` [`fork()`](https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options)
	*
	* This makes tests run faster, but VM module is unstable. Your tests might leak memory.
	*/
	vmForks?: ForksOptions & VmOptions;
}
interface ResolvedPoolOptions extends PoolOptions {
	threads?: ResolvedThreadsOptions & WorkerContextOptions;
	forks?: ResolvedForksOptions & WorkerContextOptions;
	vmThreads?: ResolvedThreadsOptions & VmOptions;
	vmForks?: ResolvedForksOptions & VmOptions;
}
interface ThreadsOptions {
	/** Minimum amount of threads to use */
	minThreads?: number | string;
	/** Maximum amount of threads to use */
	maxThreads?: number | string;
	/**
	* Run tests inside a single thread.
	*
	* @default false
	*/
	singleThread?: boolean;
	/**
	* Use Atomics to synchronize threads
	*
	* This can improve performance in some cases, but might cause segfault in older Node versions.
	*
	* @default false
	*/
	useAtomics?: boolean;
}
interface ResolvedThreadsOptions extends ThreadsOptions {
	minThreads?: number;
	maxThreads?: number;
}
interface ForksOptions {
	/** Minimum amount of child processes to use */
	minForks?: number | string;
	/** Maximum amount of child processes to use */
	maxForks?: number | string;
	/**
	* Run tests inside a single fork.
	*
	* @default false
	*/
	singleFork?: boolean;
}
interface ResolvedForksOptions extends ForksOptions {
	minForks?: number;
	maxForks?: number;
}
interface WorkerContextOptions {
	/**
	* Isolate test environment by recycling `worker_threads` or `child_process` after each test
	*
	* @default true
	*/
	isolate?: boolean;
	/**
	* Pass additional arguments to `node` process when spawning `worker_threads` or `child_process`.
	*
	* See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.
	*
	* Set to `process.execArgv` to pass all arguments of the current process.
	*
	* Be careful when using, it as some options may crash worker, e.g. --prof, --title. See https://github.com/nodejs/node/issues/41103
	*
	* @default [] // no execution arguments are passed
	*/
	execArgv?: string[];
}
interface VmOptions {
	/**
	* Specifies the memory limit for `worker_thread` or `child_process` before they are recycled.
	* If you see memory leaks, try to tinker this value.
	*/
	memoryLimit?: string | number;
	/** Isolation is always enabled */
	isolate?: true;
	/**
	* Pass additional arguments to `node` process when spawning `worker_threads` or `child_process`.
	*
	* See [Command-line API | Node.js](https://nodejs.org/docs/latest/api/cli.html) for more information.
	*
	* Set to `process.execArgv` to pass all arguments of the current process.
	*
	* Be careful when using, it as some options may crash worker, e.g. --prof, --title. See https://github.com/nodejs/node/issues/41103
	*
	* @default [] // no execution arguments are passed
	*/
	execArgv?: string[];
}

declare class TestSpecification {
	/**
	* @deprecated use `project` instead
	*/
	readonly 0: TestProject;
	/**
	* @deprecated use `moduleId` instead
	*/
	readonly 1: string;
	/**
	* @deprecated use `pool` instead
	*/
	readonly 2: {
		pool: Pool
	};
	/**
	* The task ID associated with the test module.
	*/
	readonly taskId: string;
	/**
	* The test project that the module belongs to.
	*/
	readonly project: TestProject;
	/**
	* The ID of the module in the Vite module graph. It is usually an absolute file path.
	*/
	readonly moduleId: string;
	/**
	* The current test pool. It's possible to have multiple pools in a single test project with `poolMatchGlob` and `typecheck.enabled`.
	* @experimental In Vitest 4, the project will only support a single pool and this property will be removed.
	*/
	readonly pool: Pool;
	/**
	* Line numbers of the test locations to run.
	*/
	readonly testLines: number[] | undefined;
	constructor(project: TestProject, moduleId: string, pool: Pool, testLines?: number[] | undefined);
	/**
	* Test module associated with the specification.
	*/
	get testModule(): TestModule | undefined;
	toJSON(): SerializedTestSpecification;
	/**
	* for backwards compatibility
	* @deprecated
	*/
	[Symbol.iterator](): Generator<string | TestProject, void, unknown>;
}

type TestRunEndReason = "passed" | "interrupted" | "failed";
interface Reporter {
	onInit?: (vitest: Vitest) => void;
	/**
	* Called when the project initiated the browser instance.
	* project.browser will always be defined.
	* @experimental
	*/
	onBrowserInit?: (project: TestProject) => Awaitable<void>;
	/**
	* @deprecated use `onTestRunStart` instead
	*/
	onPathsCollected?: (paths?: string[]) => Awaitable<void>;
	/**
	* @deprecated use `onTestRunStart` instead
	*/
	onSpecsCollected?: (specs?: SerializedTestSpecification[]) => Awaitable<void>;
	/**
	* @deprecated use `onTestModuleCollected` instead
	*/
	onCollected?: (files: File[]) => Awaitable<void>;
	/**
	* @deprecated use `onTestRunEnd` instead
	*/
	onFinished?: (files: File[], errors: unknown[], coverage?: unknown) => Awaitable<void>;
	/**
	* @deprecated use `onTestModuleQueued`, `onTestModuleStart`, `onTestModuleEnd`, `onTestCaseReady`, `onTestCaseResult` instead
	*/
	onTaskUpdate?: (packs: TaskResultPack[], events: TaskEventPack[]) => Awaitable<void>;
	onTestRemoved?: (trigger?: string) => Awaitable<void>;
	onWatcherStart?: (files?: File[], errors?: unknown[]) => Awaitable<void>;
	onWatcherRerun?: (files: string[], trigger?: string) => Awaitable<void>;
	onServerRestart?: (reason?: string) => Awaitable<void>;
	onUserConsoleLog?: (log: UserConsoleLog) => Awaitable<void>;
	onProcessTimeout?: () => Awaitable<void>;
	/**
	* Called when the new test run starts.
	*/
	onTestRunStart?: (specifications: ReadonlyArray<TestSpecification>) => Awaitable<void>;
	/**
	* Called when the test run is finished.
	*/
	onTestRunEnd?: (testModules: ReadonlyArray<TestModule>, unhandledErrors: ReadonlyArray<SerializedError>, reason: TestRunEndReason) => Awaitable<void>;
	/**
	* Called when the module is enqueued for testing. The file itself is not loaded yet.
	*/
	onTestModuleQueued?: (testModule: TestModule) => Awaitable<void>;
	/**
	* Called when the test file is loaded and the module is ready to run tests.
	*/
	onTestModuleCollected?: (testModule: TestModule) => Awaitable<void>;
	/**
	* Called when starting to run tests of the test file
	*/
	onTestModuleStart?: (testModule: TestModule) => Awaitable<void>;
	/**
	* Called when all tests of the test file have finished running.
	*/
	onTestModuleEnd?: (testModule: TestModule) => Awaitable<void>;
	/**
	* Called when test case is ready to run.
	* Called before the `beforeEach` hooks for the test are run.
	*/
	onTestCaseReady?: (testCase: TestCase) => Awaitable<void>;
	/**
	* Called after the test and its hooks are finished running.
	* The `result()` cannot be `pending`.
	*/
	onTestCaseResult?: (testCase: TestCase) => Awaitable<void>;
	/**
	* Called when annotation is added via the `task.annotate` API.
	*/
	onTestCaseAnnotate?: (testCase: TestCase, annotation: TestAnnotation) => Awaitable<void>;
	/**
	* Called when test suite is ready to run.
	* Called before the `beforeAll` hooks for the test are run.
	*/
	onTestSuiteReady?: (testSuite: TestSuite) => Awaitable<void>;
	/**
	* Called after the test suite and its hooks are finished running.
	* The `state` cannot be `pending`.
	*/
	onTestSuiteResult?: (testSuite: TestSuite) => Awaitable<void>;
	/**
	* Called before the hook starts to run.
	*/
	onHookStart?: (hook: ReportedHookContext) => Awaitable<void>;
	/**
	* Called after the hook finished running.
	*/
	onHookEnd?: (hook: ReportedHookContext) => Awaitable<void>;
	onCoverage?: (coverage: unknown) => Awaitable<void>;
}

interface BaseOptions {
	isTTY?: boolean;
}
declare abstract class BaseReporter implements Reporter {
	start: number;
	end: number;
	watchFilters?: string[];
	failedUnwatchedFiles: TestModule[];
	isTTY: boolean;
	ctx: Vitest;
	renderSucceed: boolean;
	protected verbose: boolean;
	private _filesInWatchMode;
	private _timeStart;
	constructor(options?: BaseOptions);
	onInit(ctx: Vitest): void;
	log(...messages: any): void;
	error(...messages: any): void;
	relative(path: string): string;
	onFinished(files?: File[], errors?: unknown[]): void;
	onTestCaseResult(testCase: TestCase): void;
	onTestSuiteResult(testSuite: TestSuite): void;
	onTestModuleEnd(testModule: TestModule): void;
	private logFailedTask;
	protected printTestModule(testModule: TestModule): void;
	protected printTestCase(moduleState: TestModuleState, test: TestCase): void;
	private getModuleLog;
	protected printTestSuite(_suite: TestSuite): void;
	protected getTestName(test: Task, separator?: string): string;
	protected getFullName(test: Task, separator?: string): string;
	protected formatShortError(error: ErrorWithDiff): string;
	protected getTestIndentation(_test: Task): string;
	protected printAnnotations(test: TestCase, console: "log" | "error", padding?: number): void;
	protected getDurationPrefix(task: Task): string;
	onWatcherStart(files?: File[], errors?: unknown[]): void;
	onWatcherRerun(files: string[], trigger?: string): void;
	onUserConsoleLog(log: UserConsoleLog, taskState?: TestResult["state"]): void;
	onTestRemoved(trigger?: string): void;
	shouldLog(log: UserConsoleLog, taskState?: TestResult["state"]): boolean;
	onServerRestart(reason?: string): void;
	reportSummary(files: File[], errors: unknown[]): void;
	reportTestSummary(files: File[], errors: unknown[]): void;
	private printErrorsSummary;
	reportBenchmarkSummary(files: File[]): void;
	private printTaskErrors;
}

interface BlobOptions {
	outputFile?: string;
}
declare class BlobReporter implements Reporter {
	start: number;
	ctx: Vitest;
	options: BlobOptions;
	constructor(options: BlobOptions);
	onInit(ctx: Vitest): void;
	onFinished(files: File[] | undefined, errors: unknown[] | undefined, coverage: unknown): Promise<void>;
}
interface MergedBlobs {
	files: File[];
	errors: unknown[];
	coverages: unknown[];
	executionTimes: number[];
}

interface DefaultReporterOptions extends BaseOptions {
	summary?: boolean;
}
declare class DefaultReporter extends BaseReporter {
	private options;
	private summary?;
	constructor(options?: DefaultReporterOptions);
	onTestRunStart(specifications: ReadonlyArray<TestSpecification>): void;
	onTestModuleQueued(file: TestModule): void;
	onTestModuleCollected(module: TestModule): void;
	onTestModuleEnd(module: TestModule): void;
	onTestCaseReady(test: TestCase): void;
	onTestCaseResult(test: TestCase): void;
	onHookStart(hook: ReportedHookContext): void;
	onHookEnd(hook: ReportedHookContext): void;
	onInit(ctx: Vitest): void;
	onTestRunEnd(): void;
}

interface HTMLOptions {
	outputFile?: string;
}

interface CoverageSummaryData {
    lines: Totals;
    statements: Totals;
    branches: Totals;
    functions: Totals;
}

declare class CoverageSummary {
    constructor(data: CoverageSummary | CoverageSummaryData);
    merge(obj: CoverageSummary): CoverageSummary;
    toJSON(): CoverageSummaryData;
    isEmpty(): boolean;
    data: CoverageSummaryData;
    lines: Totals;
    statements: Totals;
    branches: Totals;
    functions: Totals;
}

interface CoverageMapData {
    [key: string]: FileCoverage | FileCoverageData;
}

declare class CoverageMap {
    constructor(data: CoverageMapData | CoverageMap);
    addFileCoverage(pathOrObject: string | FileCoverage | FileCoverageData): void;
    files(): string[];
    fileCoverageFor(filename: string): FileCoverage;
    filter(callback: (key: string) => boolean): void;
    getCoverageSummary(): CoverageSummary;
    merge(data: CoverageMapData | CoverageMap): void;
    toJSON(): CoverageMapData;
    data: CoverageMapData;
}

interface Location {
    line: number;
    column: number;
}

interface Range {
    start: Location;
    end: Location;
}

interface BranchMapping {
    loc: Range;
    type: string;
    locations: Range[];
    line: number;
}

interface FunctionMapping {
    name: string;
    decl: Range;
    loc: Range;
    line: number;
}

interface FileCoverageData {
    path: string;
    statementMap: { [key: string]: Range };
    fnMap: { [key: string]: FunctionMapping };
    branchMap: { [key: string]: BranchMapping };
    s: { [key: string]: number };
    f: { [key: string]: number };
    b: { [key: string]: number[] };
}

interface Totals {
    total: number;
    covered: number;
    skipped: number;
    pct: number;
}

interface Coverage {
    covered: number;
    total: number;
    coverage: number;
}

declare class FileCoverage implements FileCoverageData {
    constructor(data: string | FileCoverage | FileCoverageData);
    merge(other: FileCoverageData): void;
    getBranchCoverageByLine(): { [line: number]: Coverage };
    getLineCoverage(): { [line: number]: number };
    getUncoveredLines(): number[];
    resetHits(): void;
    computeBranchTotals(): Totals;
    computeSimpleTotals(): Totals;
    toSummary(): CoverageSummary;
    toJSON(): object;

    data: FileCoverageData;
    path: string;
    statementMap: { [key: string]: Range };
    fnMap: { [key: string]: FunctionMapping };
    branchMap: { [key: string]: BranchMapping };
    s: { [key: string]: number };
    f: { [key: string]: number };
    b: { [key: string]: number[] };
}

// for compatibility reasons, the reporter produces a JSON similar to the one produced by the Jest JSON reporter
// the following types are extracted from the Jest repository (and simplified)
// the commented-out fields are the missing ones
type Status = "passed" | "failed" | "skipped" | "pending" | "todo" | "disabled";
type Milliseconds = number;
interface Callsite {
	line: number;
	column: number;
}
interface JsonAssertionResult {
	ancestorTitles: Array<string>;
	fullName: string;
	status: Status;
	title: string;
	meta: TaskMeta;
	duration?: Milliseconds | null;
	failureMessages: Array<string> | null;
	location?: Callsite | null;
}
interface JsonTestResult {
	message: string;
	name: string;
	status: "failed" | "passed";
	startTime: number;
	endTime: number;
	assertionResults: Array<JsonAssertionResult>;
}
interface JsonTestResults {
	numFailedTests: number;
	numFailedTestSuites: number;
	numPassedTests: number;
	numPassedTestSuites: number;
	numPendingTests: number;
	numPendingTestSuites: number;
	numTodoTests: number;
	numTotalTests: number;
	numTotalTestSuites: number;
	startTime: number;
	success: boolean;
	testResults: Array<JsonTestResult>;
	snapshot: SnapshotSummary;
	coverageMap?: CoverageMap | null | undefined;
}
interface JsonOptions$1 {
	outputFile?: string;
}
declare class JsonReporter implements Reporter {
	start: number;
	ctx: Vitest;
	options: JsonOptions$1;
	constructor(options: JsonOptions$1);
	onInit(ctx: Vitest): void;
	protected logTasks(files: File[], coverageMap?: CoverageMap | null): Promise<void>;
	onFinished(files?: File[], _errors?: unknown[], coverageMap?: unknown): Promise<void>;
	/**
	* Writes the report to an output file if specified in the config,
	* or logs it to the console otherwise.
	* @param report
	*/
	writeReport(report: string): Promise<void>;
}

interface ClassnameTemplateVariables {
	filename: string;
	filepath: string;
}
interface JUnitOptions {
	outputFile?: string;
	/** @deprecated Use `classnameTemplate` instead. */
	classname?: string;
	/**
	* Template for the classname attribute. Can be either a string or a function. The string can contain placeholders {filename} and {filepath}.
	*/
	classnameTemplate?: string | ((classnameVariables: ClassnameTemplateVariables) => string);
	suiteName?: string;
	/**
	* Write <system-out> and <system-err> for console output
	* @default true
	*/
	includeConsoleOutput?: boolean;
	/**
	* Add <testcase file="..."> attribute (validated on CIRCLE CI and GitLab CI)
	* @default false
	*/
	addFileAttribute?: boolean;
}
declare class JUnitReporter implements Reporter {
	private ctx;
	private reportFile?;
	private baseLog;
	private logger;
	private _timeStart;
	private fileFd?;
	private options;
	constructor(options: JUnitOptions);
	onInit(ctx: Vitest): Promise<void>;
	writeElement(name: string, attrs: Record<string, any>, children: () => Promise<void>): Promise<void>;
	writeLogs(task: Task, type: "err" | "out"): Promise<void>;
	writeTasks(tasks: Task[], filename: string): Promise<void>;
	onFinished(files?: File[]): Promise<void>;
}

declare class BasicReporter extends BaseReporter {
	constructor();
	onInit(ctx: Vitest): void;
	reportSummary(files: File[], errors: unknown[]): void;
}

declare class DotReporter extends BaseReporter {
	private renderer?;
	private tests;
	private finishedTests;
	onInit(ctx: Vitest): void;
	// Ignore default logging of base reporter
	printTestModule(): void;
	onWatcherRerun(files: string[], trigger?: string): void;
	onFinished(files?: File[], errors?: unknown[]): void;
	onTestModuleCollected(module: TestModule): void;
	onTestCaseReady(test: TestCase): void;
	onTestCaseResult(test: TestCase): void;
	onTestModuleEnd(testModule: TestModule): void;
	private createSummary;
}

interface GithubActionsReporterOptions {
	onWritePath?: (path: string) => string;
}
declare class GithubActionsReporter implements Reporter {
	ctx: Vitest;
	options: GithubActionsReporterOptions;
	constructor(options?: GithubActionsReporterOptions);
	onInit(ctx: Vitest): void;
	onTestCaseAnnotate(testCase: TestCase, annotation: TestAnnotation): void;
	onFinished(files?: File[], errors?: unknown[]): void;
}

declare class HangingProcessReporter implements Reporter {
	whyRunning: (() => void) | undefined;
	onInit(): void;
	onProcessTimeout(): void;
}

declare class TapReporter implements Reporter {
	protected ctx: Vitest;
	private logger;
	onInit(ctx: Vitest): void;
	static getComment(task: Task): string;
	private logErrorDetails;
	protected logTasks(tasks: Task[]): void;
	onFinished(files?: File[]): void;
}

declare class TapFlatReporter extends TapReporter {
	onInit(ctx: Vitest): void;
	onFinished(files?: File[]): void;
}

declare class VerboseReporter extends DefaultReporter {
	protected verbose: boolean;
	renderSucceed: boolean;
	printTestModule(module: TestModule): void;
	onTestCaseResult(test: TestCase): void;
	protected printTestSuite(testSuite: TestSuite): void;
	protected getTestName(test: Task): string;
	protected getTestIndentation(test: Task): string;
	protected formatShortError(): string;
}

type FormattedBenchmarkResult = BenchmarkResult & {
	id: string
};

declare function renderTable(options: {
	tasks: Task[]
	level: number
	shallow?: boolean
	showHeap: boolean
	columns: number
	slowTestThreshold: number
	compare?: Record<Task["id"], FormattedBenchmarkResult>
}): string;

declare class BenchmarkReporter extends DefaultReporter {
	compare?: Parameters<typeof renderTable>[0]["compare"];
	onInit(ctx: Vitest): Promise<void>;
	onTaskUpdate(packs: TaskResultPack[]): void;
	onTestSuiteResult(testSuite: TestSuite): void;
	protected printTestModule(testModule: TestModule): void;
	private printSuiteTable;
	onFinished(files?: File[], errors?: unknown[]): Promise<void>;
}

declare class VerboseBenchmarkReporter extends BenchmarkReporter {
	protected verbose: boolean;
}

declare const BenchmarkReportsMap: {
	default: typeof BenchmarkReporter
	verbose: typeof VerboseBenchmarkReporter
};
type BenchmarkBuiltinReporters = keyof typeof BenchmarkReportsMap;

declare const ReportersMap: {
	default: typeof DefaultReporter
	basic: typeof BasicReporter
	blob: typeof BlobReporter
	verbose: typeof VerboseReporter
	dot: typeof DotReporter
	json: typeof JsonReporter
	tap: typeof TapReporter
	"tap-flat": typeof TapFlatReporter
	junit: typeof JUnitReporter
	"hanging-process": typeof HangingProcessReporter
	"github-actions": typeof GithubActionsReporter
};
type BuiltinReporters = keyof typeof ReportersMap;
interface BuiltinReporterOptions {
	"default": DefaultReporterOptions;
	"basic": BaseOptions;
	"verbose": DefaultReporterOptions;
	"dot": BaseOptions;
	"json": JsonOptions$1;
	"blob": BlobOptions;
	"tap": never;
	"tap-flat": never;
	"junit": JUnitOptions;
	"hanging-process": never;
	"html": HTMLOptions;
}

interface BrowserTesterOptions {
	method: TestExecutionMethod;
	files: string[];
	providedContext: string;
	startTime: number;
}

type ChaiConfig = Omit<Partial<typeof chai.config>, "useProxy" | "proxyExcludedKeys">;

interface TestSequencer {
	/**
	* Slicing tests into shards. Will be run before `sort`.
	* Only run, if `shard` is defined.
	*/
	shard: (files: TestSpecification[]) => Awaitable<TestSpecification[]>;
	sort: (files: TestSpecification[]) => Awaitable<TestSpecification[]>;
}
interface TestSequencerConstructor {
	new (ctx: Vitest): TestSequencer;
}

interface WatcherTriggerPattern {
	pattern: RegExp;
	testsToRun: (file: string, match: RegExpMatchArray) => string[] | string | null | undefined | void;
}

interface BenchmarkUserOptions {
	/**
	* Include globs for benchmark test files
	*
	* @default ['**\/*.{bench,benchmark}.?(c|m)[jt]s?(x)']
	*/
	include?: string[];
	/**
	* Exclude globs for benchmark test files
	* @default ['**\/node_modules/**', '**\/dist/**', '**\/cypress/**', '**\/.{idea,git,cache,output,temp}/**', '**\/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*']
	*/
	exclude?: string[];
	/**
	* Include globs for in-source benchmark test files
	*
	* @default []
	*/
	includeSource?: string[];
	/**
	* Custom reporter for output. Can contain one or more built-in report names, reporter instances,
	* and/or paths to custom reporters
	*
	* @default ['default']
	*/
	reporters?: Arrayable<BenchmarkBuiltinReporters | Reporter>;
	/**
	* @deprecated Use `benchmark.outputJson` instead
	*/
	outputFile?: string | (Partial<Record<BenchmarkBuiltinReporters, string>> & Record<string, string>);
	/**
	* benchmark output file to compare against
	*/
	compare?: string;
	/**
	* benchmark output file
	*/
	outputJson?: string;
	/**
	* Include `samples` array of benchmark results for API or custom reporter usages.
	* This is disabled by default to reduce memory usage.
	* @default false
	*/
	includeSamples?: boolean;
}

interface Node {
    isRoot(): boolean;
    visit(visitor: Visitor, state: any): void;
}

interface Visitor<N extends Node = Node> {
    onStart(root: N, state: any): void;
    onSummary(root: N, state: any): void;
    onDetail(root: N, state: any): void;
    onSummaryEnd(root: N, state: any): void;
    onEnd(root: N, state: any): void;
}

interface FileOptions {
    file: string;
}

interface ProjectOptions {
    projectRoot: string;
}

interface ReportOptions {
    clover: CloverOptions;
    cobertura: CoberturaOptions;
    "html-spa": HtmlSpaOptions;
    html: HtmlOptions;
    json: JsonOptions;
    "json-summary": JsonSummaryOptions;
    lcov: LcovOptions;
    lcovonly: LcovOnlyOptions;
    none: never;
    teamcity: TeamcityOptions;
    text: TextOptions;
    "text-lcov": TextLcovOptions;
    "text-summary": TextSummaryOptions;
}

interface CloverOptions extends FileOptions, ProjectOptions {}

interface CoberturaOptions extends FileOptions, ProjectOptions {}

interface HtmlSpaOptions extends HtmlOptions {
    metricsToShow: Array<"lines" | "branches" | "functions" | "statements">;
}
interface HtmlOptions {
    verbose: boolean;
    skipEmpty: boolean;
    subdir: string;
    linkMapper: LinkMapper;
}

type JsonOptions = FileOptions;
type JsonSummaryOptions = FileOptions;

interface LcovOptions extends FileOptions, ProjectOptions {}
interface LcovOnlyOptions extends FileOptions, ProjectOptions {}

interface TeamcityOptions extends FileOptions {
    blockName: string;
}

interface TextOptions extends FileOptions {
    maxCols: number;
    skipEmpty: boolean;
    skipFull: boolean;
}
type TextLcovOptions = ProjectOptions;
type TextSummaryOptions = FileOptions;

interface LinkMapper {
    getPath(node: string | Node): string;
    relativePath(source: string | Node, target: string | Node): string;
    assetPath(node: Node, name: string): string;
}

type TransformResult = string | Partial<TransformResult$1> | undefined | null | void;
type CoverageResults = unknown;
interface CoverageProvider {
	name: string;
	/** Called when provider is being initialized before tests run */
	initialize: (ctx: Vitest) => Promise<void> | void;
	/** Called when setting coverage options for Vitest context (`ctx.config.coverage`) */
	resolveOptions: () => ResolvedCoverageOptions;
	/** Callback to clean previous reports */
	clean: (clean?: boolean) => void | Promise<void>;
	/** Called with coverage results after a single test file has been run */
	onAfterSuiteRun: (meta: AfterSuiteRunMeta) => void | Promise<void>;
	/** Callback called when test run fails */
	onTestFailure?: () => void | Promise<void>;
	/** Callback to generate final coverage results */
	generateCoverage: (reportContext: ReportContext) => CoverageResults | Promise<CoverageResults>;
	/** Callback to convert coverage results to coverage reports. Called with results returned from `generateCoverage` */
	reportCoverage: (coverage: CoverageResults, reportContext: ReportContext) => void | Promise<void>;
	/** Callback for `--merge-reports` options. Called with multiple coverage results generated by `generateCoverage`. */
	mergeReports?: (coverages: CoverageResults[]) => void | Promise<void>;
	/** Callback called for instrumenting files with coverage counters. */
	onFileTransform?: (sourceCode: string, id: string, pluginCtx: any) => TransformResult | Promise<TransformResult>;
}
interface ReportContext {
	/** Indicates whether all tests were run. False when only specific tests were run. */
	allTestsRun?: boolean;
}
interface CoverageProviderModule extends RuntimeCoverageProviderModule {
	/**
	* Factory for creating a new coverage provider
	*/
	getProvider: () => CoverageProvider | Promise<CoverageProvider>;
}
type CoverageReporter = keyof ReportOptions | (string & {});
type CoverageReporterWithOptions<ReporterName extends CoverageReporter = CoverageReporter> = ReporterName extends keyof ReportOptions ? ReportOptions[ReporterName] extends never ? [ReporterName, object] : [ReporterName, Partial<ReportOptions[ReporterName]>] : [ReporterName, Record<string, unknown>];
type CoverageProviderName = "v8" | "istanbul" | "custom" | undefined;
type CoverageOptions<T extends CoverageProviderName = CoverageProviderName> = T extends "istanbul" ? {
	provider: T
} & CoverageIstanbulOptions : T extends "v8" ? {
	/**
	* Provider to use for coverage collection.
	*
	* @default 'v8'
	*/
	provider: T
} & CoverageV8Options : T extends "custom" ? {
	provider: T
} & CustomProviderOptions : {
	provider?: T
} & CoverageV8Options;
/** Fields that have default values. Internally these will always be defined. */
type FieldsWithDefaultValues = "enabled" | "clean" | "cleanOnRerun" | "reportsDirectory" | "exclude" | "extension" | "reportOnFailure" | "allowExternal" | "processingConcurrency";
type ResolvedCoverageOptions<T extends CoverageProviderName = CoverageProviderName> = CoverageOptions<T> & Required<Pick<CoverageOptions<T>, FieldsWithDefaultValues>> & {
	reporter: CoverageReporterWithOptions[]
};
interface BaseCoverageOptions {
	/**
	* Enables coverage collection. Can be overridden using `--coverage` CLI option.
	*
	* @default false
	*/
	enabled?: boolean;
	/**
	* List of files included in coverage as glob patterns
	*
	* @default ['**']
	*/
	include?: string[];
	/**
	* Extensions for files to be included in coverage
	*
	* @default ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue', '.svelte', '.marko']
	*/
	extension?: string | string[];
	/**
	* List of files excluded from coverage as glob patterns
	*
	* @default ['coverage/**', 'dist/**', '**\/[.]**', 'packages/*\/test?(s)/**', '**\/*.d.ts', '**\/virtual:*', '**\/__x00__*', '**\/\x00*', 'cypress/**', 'test?(s)/**', 'test?(-*).?(c|m)[jt]s?(x)', '**\/*{.,-}{test,spec}?(-d).?(c|m)[jt]s?(x)', '**\/__tests__/**', '**\/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*', '**\/vitest.{workspace,projects}.[jt]s?(on)', '**\/.{eslint,mocha,prettier}rc.{?(c|m)js,yml}']
	*/
	exclude?: string[];
	/**
	* Whether to include all files, including the untested ones into report
	*
	* @default true
	*/
	all?: boolean;
	/**
	* Clean coverage results before running tests
	*
	* @default true
	*/
	clean?: boolean;
	/**
	* Clean coverage report on watch rerun
	*
	* @default true
	*/
	cleanOnRerun?: boolean;
	/**
	* Directory to write coverage report to
	*
	* @default './coverage'
	*/
	reportsDirectory?: string;
	/**
	* Coverage reporters to use.
	* See [istanbul documentation](https://istanbul.js.org/docs/advanced/alternative-reporters/) for detailed list of all reporters.
	*
	* @default ['text', 'html', 'clover', 'json']
	*/
	reporter?: Arrayable$1<CoverageReporter> | (CoverageReporter | [CoverageReporter] | CoverageReporterWithOptions)[];
	/**
	* Do not show files with 100% statement, branch, and function coverage
	*
	* @default false
	*/
	skipFull?: boolean;
	/**
	* Configurations for thresholds
	*
	* @example
	*
	* ```ts
	* {
	*   // Thresholds for all files
	*   functions: 95,
	*   branches: 70,
	*   perFile: true,
	*   autoUpdate: true,
	*
	*   // Thresholds for utilities
	*   'src/utils/**.ts': {
	*     lines: 100,
	*     statements: 95,
	*   }
	* }
	* ```
	*/
	thresholds?: Thresholds | ({
		[glob: string]: Pick<Thresholds, 100 | "statements" | "functions" | "branches" | "lines">
	} & Thresholds);
	/**
	* Watermarks for statements, lines, branches and functions.
	*
	* Default value is `[50,80]` for each property.
	*/
	watermarks?: {
		statements?: [number, number]
		functions?: [number, number]
		branches?: [number, number]
		lines?: [number, number]
	};
	/**
	* Generate coverage report even when tests fail.
	*
	* @default false
	*/
	reportOnFailure?: boolean;
	/**
	* Collect coverage of files outside the project `root`.
	*
	* @default false
	*/
	allowExternal?: boolean;
	/**
	* Apply exclusions again after coverage has been remapped to original sources.
	* This is useful when your source files are transpiled and may contain source maps
	* of non-source files.
	*
	* Use this option when you are seeing files that show up in report even if they
	* match your `coverage.exclude` patterns.
	*
	* @default false
	*/
	excludeAfterRemap?: boolean;
	/**
	* Concurrency limit used when processing the coverage results.
	* Defaults to `Math.min(20, os.availableParallelism?.() ?? os.cpus().length)`
	*/
	processingConcurrency?: number;
}
interface CoverageIstanbulOptions extends BaseCoverageOptions {
	/**
	* Set to array of class method names to ignore for coverage
	*
	* @default []
	*/
	ignoreClassMethods?: string[];
}
interface CoverageV8Options extends BaseCoverageOptions {
	/**
	* Ignore empty lines, comments and other non-runtime code, e.g. Typescript types
	* - Requires `experimentalAstAwareRemapping: false`
	*/
	ignoreEmptyLines?: boolean;
	/**
	* Remap coverage with experimental AST based analysis
	* - Provides more accurate results compared to default mode
	*/
	experimentalAstAwareRemapping?: boolean;
	/**
	* Set to array of class method names to ignore for coverage.
	* - Requires `experimentalAstAwareRemapping: true`
	*
	* @default []
	*/
	ignoreClassMethods?: string[];
}
interface CustomProviderOptions extends Pick<BaseCoverageOptions, FieldsWithDefaultValues> {
	/** Name of the module or path to a file to load the custom provider from */
	customProviderModule: string;
}
interface Thresholds {
	/** Set global thresholds to `100` */
	100?: boolean;
	/** Check thresholds per file. */
	perFile?: boolean;
	/**
	* Update threshold values automatically when current coverage is higher than earlier thresholds
	*
	* @default false
	*/
	autoUpdate?: boolean;
	/** Thresholds for statements */
	statements?: number;
	/** Thresholds for functions */
	functions?: number;
	/** Thresholds for branches */
	branches?: number;
	/** Thresholds for lines */
	lines?: number;
}

type BuiltinEnvironment = "node" | "jsdom" | "happy-dom" | "edge-runtime";
// Record is used, so user can get intellisense for builtin environments, but still allow custom environments
type VitestEnvironment = BuiltinEnvironment | (string & Record<never, never>);

type CSSModuleScopeStrategy = "stable" | "scoped" | "non-scoped";
type ApiConfig = Pick<ServerOptions, "port" | "strictPort" | "host" | "middlewareMode">;

type VitestRunMode = "test" | "benchmark";
interface ProjectName {
	label: string;
	color?: LabelColor;
}
interface SequenceOptions {
	/**
	* Class that handles sorting and sharding algorithm.
	* If you only need to change sorting, you can extend
	* your custom sequencer from `BaseSequencer` from `vitest/node`.
	* @default BaseSequencer
	*/
	sequencer?: TestSequencerConstructor;
	/**
	* Controls the order in which this project runs its tests when using multiple [projects](/guide/projects).
	*
	* - Projects with the same group order number will run together, and groups are run from lowest to highest.
	* - If you don’t set this option, all projects run in parallel.
	* - If several projects use the same group order, they will run at the same time.
	* @default 0
	*/
	groupOrder?: number;
	/**
	* Should files and tests run in random order.
	* @default false
	*/
	shuffle?: boolean | {
		/**
		* Should files run in random order. Long running tests will not start
		* earlier if you enable this option.
		* @default false
		*/
		files?: boolean
		/**
		* Should tests run in random order.
		* @default false
		*/
		tests?: boolean
	};
	/**
	* Should tests run in parallel.
	* @default false
	*/
	concurrent?: boolean;
	/**
	* Defines how setup files should be ordered
	* - 'parallel' will run all setup files in parallel
	* - 'list' will run all setup files in the order they are defined in the config file
	* @default 'parallel'
	*/
	setupFiles?: SequenceSetupFiles;
	/**
	* Seed for the random number generator.
	* @default Date.now()
	*/
	seed?: number;
	/**
	* Defines how hooks should be ordered
	* - `stack` will order "after" hooks in reverse order, "before" hooks will run sequentially
	* - `list` will order hooks in the order they are defined
	* - `parallel` will run hooks in a single group in parallel
	* @default 'stack'
	*/
	hooks?: SequenceHooks;
}
type DepsOptimizationOptions = Omit<DepOptimizationConfig, "disabled" | "noDiscovery"> & {
	enabled?: boolean
};
interface TransformModePatterns {
	/**
	* Use SSR transform pipeline for all modules inside specified tests.
	* Vite plugins will receive `ssr: true` flag when processing those files.
	*
	* @default tests with node or edge environment
	*/
	ssr?: string[];
	/**
	* First do a normal transform pipeline (targeting browser),
	* then then do a SSR rewrite to run the code in Node.
	* Vite plugins will receive `ssr: false` flag when processing those files.
	*
	* @default tests with jsdom or happy-dom environment
	*/
	web?: string[];
}
interface DepsOptions {
	/**
	* Enable dependency optimization. This can improve the performance of your tests.
	*/
	optimizer?: {
		web?: DepsOptimizationOptions
		ssr?: DepsOptimizationOptions
	};
	web?: {
		/**
		* Should Vitest process assets (.png, .svg, .jpg, etc) files and resolve them like Vite does in the browser.
		*
		* These module will have a default export equal to the path to the asset, if no query is specified.
		*
		* **At the moment, this option only works with `{ pool: 'vmThreads' }`.**
		*
		* @default true
		*/
		transformAssets?: boolean
		/**
		* Should Vitest process CSS (.css, .scss, .sass, etc) files and resolve them like Vite does in the browser.
		*
		* If CSS files are disabled with `css` options, this option will just silence UNKNOWN_EXTENSION errors.
		*
		* **At the moment, this option only works with `{ pool: 'vmThreads' }`.**
		*
		* @default true
		*/
		transformCss?: boolean
		/**
		* Regexp pattern to match external files that should be transformed.
		*
		* By default, files inside `node_modules` are externalized and not transformed.
		*
		* **At the moment, this option only works with `{ pool: 'vmThreads' }`.**
		*
		* @default []
		*/
		transformGlobPattern?: RegExp | RegExp[]
	};
	/**
	* Externalize means that Vite will bypass the package to native Node.
	*
	* Externalized dependencies will not be applied Vite's transformers and resolvers.
	* And does not support HMR on reload.
	*
	* Typically, packages under `node_modules` are externalized.
	*
	* @deprecated If you rely on vite-node directly, use `server.deps.external` instead. Otherwise, consider using `deps.optimizer.{web,ssr}.exclude`.
	*/
	external?: (string | RegExp)[];
	/**
	* Vite will process inlined modules.
	*
	* This could be helpful to handle packages that ship `.js` in ESM format (that Node can't handle).
	*
	* If `true`, every dependency will be inlined
	*
	* @deprecated If you rely on vite-node directly, use `server.deps.inline` instead. Otherwise, consider using `deps.optimizer.{web,ssr}.include`.
	*/
	inline?: (string | RegExp)[] | true;
	/**
	* Interpret CJS module's default as named exports
	*
	* @default true
	*/
	interopDefault?: boolean;
	/**
	* When a dependency is a valid ESM package, try to guess the cjs version based on the path.
	* This will significantly improve the performance in huge repo, but might potentially
	* cause some misalignment if a package have different logic in ESM and CJS mode.
	*
	* @default false
	*
	* @deprecated Use `server.deps.fallbackCJS` instead.
	*/
	fallbackCJS?: boolean;
	/**
	* A list of directories relative to the config file that should be treated as module directories.
	*
	* @default ['node_modules']
	*/
	moduleDirectories?: string[];
}
type InlineReporter = Reporter;
type ReporterName = BuiltinReporters | "html" | (string & {});
type ReporterWithOptions<Name extends ReporterName = ReporterName> = Name extends keyof BuiltinReporterOptions ? BuiltinReporterOptions[Name] extends never ? [Name, object] : [Name, Partial<BuiltinReporterOptions[Name]>] : [Name, Record<string, unknown>];
interface ResolveSnapshotPathHandlerContext {
	config: SerializedConfig;
}
type ResolveSnapshotPathHandler = (testPath: string, snapExtension: string, context: ResolveSnapshotPathHandlerContext) => string;
interface InlineConfig {
	/**
	* Name of the project. Will be used to display in the reporter.
	*/
	name?: string | ProjectName;
	/**
	* Benchmark options.
	*
	* @default {}
	*/
	benchmark?: BenchmarkUserOptions;
	/**
	* Include globs for test files
	*
	* @default ['**\/*.{test,spec}.?(c|m)[jt]s?(x)']
	*/
	include?: string[];
	/**
	* Exclude globs for test files
	* @default ['**\/node_modules/**', '**\/dist/**', '**\/cypress/**', '**\/.{idea,git,cache,output,temp}/**', '**\/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*']
	*/
	exclude?: string[];
	/**
	* Include globs for in-source test files
	*
	* @default []
	*/
	includeSource?: string[];
	/**
	* Handling for dependencies inlining or externalizing
	*
	*/
	deps?: DepsOptions;
	/**
	* Vite-node server options
	*/
	server?: Omit<ViteNodeServerOptions, "transformMode">;
	/**
	* Base directory to scan for the test files
	*
	* @default `config.root`
	*/
	dir?: string;
	/**
	* Register apis globally
	*
	* @default false
	*/
	globals?: boolean;
	/**
	* Running environment
	*
	* Supports 'node', 'jsdom', 'happy-dom', 'edge-runtime'
	*
	* If used unsupported string, will try to load the package `vitest-environment-${env}`
	*
	* @default 'node'
	*/
	environment?: VitestEnvironment;
	/**
	* Environment options.
	*/
	environmentOptions?: EnvironmentOptions;
	/**
	* Automatically assign environment based on globs. The first match will be used.
	* This has effect only when running tests inside Node.js.
	*
	* Format: [glob, environment-name]
	*
	* @deprecated use [`projects`](https://vitest.dev/config/#projects) instead
	* @default []
	* @example [
	*   // all tests in tests/dom will run in jsdom
	*   ['tests/dom/**', 'jsdom'],
	*   // all tests in tests/ with .edge.test.ts will run in edge-runtime
	*   ['**\/*.edge.test.ts', 'edge-runtime'],
	*   // ...
	* ]
	*/
	environmentMatchGlobs?: [string, VitestEnvironment][];
	/**
	* Run tests in an isolated environment. This option has no effect on vmThreads pool.
	*
	* Disabling this option might improve performance if your code doesn't rely on side effects.
	*
	* @default true
	*/
	isolate?: boolean;
	/**
	* Pool used to run tests in.
	*
	* Supports 'threads', 'forks', 'vmThreads'
	*
	* @default 'forks'
	*/
	pool?: Exclude<Pool, "browser">;
	/**
	* Pool options
	*/
	poolOptions?: PoolOptions;
	/**
	* Maximum number or percentage of workers to run tests in. `poolOptions.{threads,vmThreads}.maxThreads`/`poolOptions.forks.maxForks` has higher priority.
	*/
	maxWorkers?: number | string;
	/**
	* Minimum number or percentage of workers to run tests in. `poolOptions.{threads,vmThreads}.minThreads`/`poolOptions.forks.minForks` has higher priority.
	*/
	minWorkers?: number | string;
	/**
	* Should all test files run in parallel. Doesn't affect tests running in the same file.
	* Setting this to `false` will override `maxWorkers` and `minWorkers` options to `1`.
	*
	* @default true
	*/
	fileParallelism?: boolean;
	/**
	* Automatically assign pool based on globs. The first match will be used.
	*
	* Format: [glob, pool-name]
	*
	* @deprecated use [`projects`](https://vitest.dev/config/#projects) instead
	* @default []
	* @example [
	*   // all tests in "forks" directory will run using "poolOptions.forks" API
	*   ['tests/forks/**', 'forks'],
	*   // all other tests will run based on "poolOptions.threads" option, if you didn't specify other globs
	*   // ...
	* ]
	*/
	poolMatchGlobs?: [string, Exclude<Pool, "browser">][];
	/**
	* Options for projects
	*/
	projects?: TestProjectConfiguration[];
	/**
	* Path to a workspace configuration file
	* @deprecated use `projects` instead
	*/
	workspace?: string | TestProjectConfiguration[];
	/**
	* Update snapshot
	*
	* @default false
	*/
	update?: boolean;
	/**
	* Watch mode
	*
	* @default !process.env.CI
	*/
	watch?: boolean;
	/**
	* Project root
	*
	* @default process.cwd()
	*/
	root?: string;
	/**
	* Custom reporter for output. Can contain one or more built-in report names, reporter instances,
	* and/or paths to custom reporters.
	*
	* @default []
	*/
	reporters?: Arrayable$1<ReporterName | InlineReporter> | ((ReporterName | InlineReporter) | [ReporterName] | ReporterWithOptions)[];
	/**
	* Write test results to a file when the --reporter=json` or `--reporter=junit` option is also specified.
	* Also definable individually per reporter by using an object instead.
	*/
	outputFile?: string | (Partial<Record<BuiltinReporters, string>> & Record<string, string>);
	/**
	* Default timeout of a test in milliseconds
	*
	* @default 5000
	*/
	testTimeout?: number;
	/**
	* Default timeout of a hook in milliseconds
	*
	* @default 10000
	*/
	hookTimeout?: number;
	/**
	* Default timeout to wait for close when Vitest shuts down, in milliseconds
	*
	* @default 10000
	*/
	teardownTimeout?: number;
	/**
	* Silent mode
	*
	* Use `'passed-only'` to see logs from failing tests only.
	*
	* @default false
	*/
	silent?: boolean | "passed-only";
	/**
	* Hide logs for skipped tests
	*
	* @default false
	*/
	hideSkippedTests?: boolean;
	/**
	* Path to setup files
	*/
	setupFiles?: string | string[];
	/**
	* Path to global setup files
	*/
	globalSetup?: string | string[];
	/**
	* Glob patter of file paths that will trigger the whole suite rerun
	*
	* Useful if you are testing calling CLI commands
	*
	* @default ['**\/package.json/**', '**\/{vitest,vite}.config.*\/**']
	*/
	forceRerunTriggers?: string[];
	/**
	* Pattern configuration to rerun only the tests that are affected
	* by the changes of specific files in the repository.
	*/
	watchTriggerPatterns?: WatcherTriggerPattern[];
	/**
	* Coverage options
	*/
	coverage?: CoverageOptions;
	/**
	* run test names with the specified pattern
	*/
	testNamePattern?: string | RegExp;
	/**
	* Will call `.mockClear()` on all spies before each test
	* @default false
	*/
	clearMocks?: boolean;
	/**
	* Will call `.mockReset()` on all spies before each test
	* @default false
	*/
	mockReset?: boolean;
	/**
	* Will call `.mockRestore()` on all spies before each test
	* @default false
	*/
	restoreMocks?: boolean;
	/**
	* Will restore all global stubs to their original values before each test
	* @default false
	*/
	unstubGlobals?: boolean;
	/**
	* Will restore all env stubs to their original values before each test
	* @default false
	*/
	unstubEnvs?: boolean;
	/**
	* Serve API options.
	*
	* When set to true, the default port is 51204.
	*
	* @default false
	*/
	api?: boolean | number | ApiConfig;
	/**
	* Enable Vitest UI
	*
	* @default false
	*/
	ui?: boolean;
	/**
	* options for test in a browser environment
	* @experimental
	*
	* @default false
	*/
	browser?: BrowserConfigOptions;
	/**
	* Open UI automatically.
	*
	* @default !process.env.CI
	*/
	open?: boolean;
	/**
	* Base url for the UI
	*
	* @default '/__vitest__/'
	*/
	uiBase?: string;
	/**
	* Determine the transform method for all modules imported inside a test that matches the glob pattern.
	*/
	testTransformMode?: TransformModePatterns;
	/**
	* Format options for snapshot testing.
	*/
	snapshotFormat?: Omit<PrettyFormatOptions, "plugins">;
	/**
	* Path to a module which has a default export of diff config.
	*/
	diff?: string | SerializedDiffOptions;
	/**
	* Paths to snapshot serializer modules.
	*/
	snapshotSerializers?: string[];
	/**
	* Resolve custom snapshot path
	*/
	resolveSnapshotPath?: ResolveSnapshotPathHandler;
	/**
	* Path to a custom snapshot environment module that has a default export of `SnapshotEnvironment` object.
	*/
	snapshotEnvironment?: string;
	/**
	* Pass with no tests
	*/
	passWithNoTests?: boolean;
	/**
	* Allow tests and suites that are marked as only
	*
	* @default !process.env.CI
	*/
	allowOnly?: boolean;
	/**
	* Show heap usage after each test. Useful for debugging memory leaks.
	*/
	logHeapUsage?: boolean;
	/**
	* Custom environment variables assigned to `process.env` before running tests.
	*/
	env?: Partial<NodeJS.ProcessEnv>;
	/**
	* Options for @sinon/fake-timers
	*/
	fakeTimers?: FakeTimerInstallOpts;
	/**
	* Custom handler for console.log in tests.
	*
	* Return `false` to ignore the log.
	*/
	onConsoleLog?: (log: string, type: "stdout" | "stderr") => boolean | void;
	/**
	* Enable stack trace filtering. If absent, all stack trace frames
	* will be shown.
	*
	* Return `false` to omit the frame.
	*/
	onStackTrace?: (error: ErrorWithDiff, frame: ParsedStack) => boolean | void;
	/**
	* Indicates if CSS files should be processed.
	*
	* When excluded, the CSS files will be replaced with empty strings to bypass the subsequent processing.
	*
	* @default { include: [], modules: { classNameStrategy: false } }
	*/
	css?: boolean | {
		include?: RegExp | RegExp[]
		exclude?: RegExp | RegExp[]
		modules?: {
			classNameStrategy?: CSSModuleScopeStrategy
		}
	};
	/**
	* A number of tests that are allowed to run at the same time marked with `test.concurrent`.
	* @default 5
	*/
	maxConcurrency?: number;
	/**
	* Options for configuring cache policy.
	* @default { dir: 'node_modules/.vite/vitest/{project-hash}' }
	*/
	cache?: false | {
		/**
		* @deprecated Use Vite's "cacheDir" instead if you want to change the cache director. Note caches will be written to "cacheDir\/vitest".
		*/
		dir: string
	};
	/**
	* Options for configuring the order of running tests.
	*/
	sequence?: SequenceOptions;
	/**
	* Specifies an `Object`, or an `Array` of `Object`,
	* which defines aliases used to replace values in `import` or `require` statements.
	* Will be merged with the default aliases inside `resolve.alias`.
	*/
	alias?: AliasOptions;
	/**
	* Ignore any unhandled errors that occur
	*
	* @default false
	*/
	dangerouslyIgnoreUnhandledErrors?: boolean;
	/**
	* Options for configuring typechecking test environment.
	*/
	typecheck?: Partial<TypecheckConfig>;
	/**
	* The number of milliseconds after which a test is considered slow and reported as such in the results.
	*
	* @default 300
	*/
	slowTestThreshold?: number;
	/**
	* Path to a custom test runner.
	*/
	runner?: string;
	/**
	* Debug tests by opening `node:inspector` in worker / child process.
	* Provides similar experience as `--inspect` Node CLI argument.
	*
	* Requires `poolOptions.threads.singleThread: true` OR `poolOptions.forks.singleFork: true`.
	*/
	inspect?: boolean | string;
	/**
	* Debug tests by opening `node:inspector` in worker / child process and wait for debugger to connect.
	* Provides similar experience as `--inspect-brk` Node CLI argument.
	*
	* Requires `poolOptions.threads.singleThread: true` OR `poolOptions.forks.singleFork: true`.
	*/
	inspectBrk?: boolean | string;
	/**
	* Inspector options. If `--inspect` or `--inspect-brk` is enabled, these options will be passed to the inspector.
	*/
	inspector?: {
		/**
		* Enable inspector
		*/
		enabled?: boolean
		/**
		* Port to run inspector on
		*/
		port?: number
		/**
		* Host to run inspector on
		*/
		host?: string
		/**
		* Wait for debugger to connect before running tests
		*/
		waitForDebugger?: boolean
	};
	/**
	* Define variables that will be returned from `inject` in the test environment.
	* @example
	* ```ts
	* // vitest.config.ts
	* export default defineConfig({
	*   test: {
	*     provide: {
	*       someKey: 'someValue'
	*     }
	*   }
	* })
	* ```
	* ```ts
	* // test file
	* import { inject } from 'vitest'
	* const value = inject('someKey') // 'someValue'
	* ```
	*/
	provide?: Partial<ProvidedContext>;
	/**
	* Configuration options for expect() matches.
	*/
	expect?: {
		/**
		* Throw an error if tests don't have any expect() assertions.
		*/
		requireAssertions?: boolean
		/**
		* Default options for expect.poll()
		*/
		poll?: {
			/**
			* Timeout in milliseconds
			* @default 1000
			*/
			timeout?: number
			/**
			* Polling interval in milliseconds
			* @default 50
			*/
			interval?: number
		}
	};
	/**
	* Modify default Chai config. Vitest uses Chai for `expect` and `assert` matches.
	* https://github.com/chaijs/chai/blob/4.x.x/lib/chai/config.js
	*/
	chaiConfig?: ChaiConfig;
	/**
	* Stop test execution when given number of tests have failed.
	*/
	bail?: number;
	/**
	* Retry the test specific number of times if it fails.
	*
	* @default 0
	*/
	retry?: number;
	/**
	* Show full diff when snapshot fails instead of a patch.
	*/
	expandSnapshotDiff?: boolean;
	/**
	* By default, Vitest automatically intercepts console logging during tests for extra formatting of test file, test title, etc...
	* This is also required for console log preview on Vitest UI.
	* However, disabling such interception might help when you want to debug a code with normal synchronous terminal console logging.
	*
	* This option has no effect on browser pool since Vitest preserves original logging on browser devtools.
	*
	* @default false
	*/
	disableConsoleIntercept?: boolean;
	/**
	* Always print console stack traces.
	*
	* @default false
	*/
	printConsoleTrace?: boolean;
	/**
	* Include "location" property inside the test definition
	*
	* @default false
	*/
	includeTaskLocation?: boolean;
	/**
	* Directory path for storing attachments created by `context.annotate`
	*
	* @default '.vitest-attachments'
	*/
	attachmentsDir?: string;
}
interface TypecheckConfig {
	/**
	* Run typechecking tests alongside regular tests.
	*/
	enabled?: boolean;
	/**
	* When typechecking is enabled, only run typechecking tests.
	*/
	only?: boolean;
	/**
	* What tools to use for type checking.
	*
	* @default 'tsc'
	*/
	checker: "tsc" | "vue-tsc" | (string & Record<never, never>);
	/**
	* Pattern for files that should be treated as test files
	*
	* @default ['**\/*.{test,spec}-d.?(c|m)[jt]s?(x)']
	*/
	include: string[];
	/**
	* Pattern for files that should not be treated as test files
	*
	* @default ['**\/node_modules/**', '**\/dist/**', '**\/cypress/**', '**\/.{idea,git,cache,output,temp}/**', '**\/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*']
	*/
	exclude: string[];
	/**
	* Check JS files that have `@ts-check` comment.
	* If you have it enabled in tsconfig, this will not overwrite it.
	*/
	allowJs?: boolean;
	/**
	* Do not fail, if Vitest found errors outside the test files.
	*/
	ignoreSourceErrors?: boolean;
	/**
	* Path to tsconfig, relative to the project root.
	*/
	tsconfig?: string;
	/**
	* Minimum time in milliseconds it takes to spawn the typechecker.
	* @default 10_000
	*/
	spawnTimeout?: number;
}
interface UserConfig extends InlineConfig {
	/**
	* Path to the config file.
	*
	* Default resolving to `vitest.config.*`, `vite.config.*`
	*
	* Setting to `false` will disable config resolving.
	*/
	config?: string | false | undefined;
	/**
	* Do not run tests when Vitest starts.
	*
	* Vitest will only run tests if it's called programmatically or the test file changes.
	*
	* CLI file filters will be ignored.
	*/
	standalone?: boolean;
	/**
	* Use happy-dom
	*/
	dom?: boolean;
	/**
	* Run tests that cover a list of source files
	*/
	related?: string[] | string;
	/**
	* Overrides Vite mode
	* @default 'test'
	*/
	mode?: string;
	/**
	* Runs tests that are affected by the changes in the repository, or between specified branch or commit hash
	* Requires initialized git repository
	* @default false
	*/
	changed?: boolean | string;
	/**
	* Test suite shard to execute in a format of <index>/<count>.
	* Will divide tests into a `count` numbers, and run only the `indexed` part.
	* Cannot be used with enabled watch.
	* @example --shard=2/3
	*/
	shard?: string;
	/**
	* Name of the project or projects to run.
	*/
	project?: string | string[];
	/**
	* Additional exclude patterns
	*/
	cliExclude?: string[];
	/**
	* Override vite config's clearScreen from cli
	*/
	clearScreen?: boolean;
	/**
	* benchmark.compare option exposed at the top level for cli
	*/
	compare?: string;
	/**
	* benchmark.outputJson option exposed at the top level for cli
	*/
	outputJson?: string;
	/**
	* Directory of blob reports to merge
	* @default '.vitest-reports'
	*/
	mergeReports?: string;
}
interface ResolvedConfig extends Omit<Required<UserConfig>, "project" | "config" | "filters" | "browser" | "coverage" | "testNamePattern" | "related" | "api" | "reporters" | "resolveSnapshotPath" | "benchmark" | "shard" | "cache" | "sequence" | "typecheck" | "runner" | "poolOptions" | "pool" | "cliExclude" | "diff" | "setupFiles" | "snapshotEnvironment" | "bail" | "name"> {
	mode: VitestRunMode;
	name: ProjectName["label"];
	color?: ProjectName["color"];
	base?: string;
	diff?: string | SerializedDiffOptions;
	bail?: number;
	setupFiles: string[];
	snapshotEnvironment?: string;
	config?: string;
	filters?: string[];
	testNamePattern?: RegExp;
	related?: string[];
	coverage: ResolvedCoverageOptions;
	snapshotOptions: SnapshotStateOptions;
	browser: ResolvedBrowserOptions;
	pool: Pool;
	poolOptions?: ResolvedPoolOptions;
	reporters: (InlineReporter | ReporterWithOptions)[];
	defines: Record<string, any>;
	api: ApiConfig & {
		token: string
	};
	cliExclude?: string[];
	project: string[];
	benchmark?: Required<Omit<BenchmarkUserOptions, "outputFile" | "compare" | "outputJson">> & Pick<BenchmarkUserOptions, "outputFile" | "compare" | "outputJson">;
	shard?: {
		index: number
		count: number
	};
	cache: {
		/**
		* @deprecated
		*/
		dir: string
	} | false;
	sequence: {
		sequencer: TestSequencerConstructor
		hooks: SequenceHooks
		setupFiles: SequenceSetupFiles
		shuffle?: boolean
		concurrent?: boolean
		seed: number
		groupOrder: number
	};
	typecheck: Omit<TypecheckConfig, "enabled"> & {
		enabled: boolean
	};
	runner?: string;
	maxWorkers: number;
	minWorkers: number;
}
type NonProjectOptions = "shard" | "watch" | "run" | "cache" | "update" | "reporters" | "outputFile" | "teardownTimeout" | "silent" | "forceRerunTriggers" | "testNamePattern" | "ui" | "open" | "uiBase" | "snapshotFormat" | "resolveSnapshotPath" | "passWithNoTests" | "onConsoleLog" | "onStackTrace" | "dangerouslyIgnoreUnhandledErrors" | "slowTestThreshold" | "inspect" | "inspectBrk" | "coverage" | "maxWorkers" | "minWorkers" | "fileParallelism" | "workspace" | "watchTriggerPatterns";
type ProjectConfig = Omit<InlineConfig, NonProjectOptions | "sequencer" | "deps" | "poolOptions"> & {
	mode?: string
	sequencer?: Omit<SequenceOptions, "sequencer" | "seed">
	deps?: Omit<DepsOptions, "moduleDirectories">
	poolOptions?: {
		threads?: Pick<NonNullable<PoolOptions["threads"]>, "singleThread" | "isolate">
		vmThreads?: Pick<NonNullable<PoolOptions["vmThreads"]>, "singleThread">
		forks?: Pick<NonNullable<PoolOptions["forks"]>, "singleFork" | "isolate">
	}
};
type ResolvedProjectConfig = Omit<ResolvedConfig, Exclude<NonProjectOptions, "coverage" | "watch">>;
interface UserWorkspaceConfig extends UserConfig$1 {
	test?: ProjectConfig;
}
type UserProjectConfigFn = (env: ConfigEnv) => UserWorkspaceConfig | Promise<UserWorkspaceConfig>;
type UserProjectConfigExport = UserWorkspaceConfig | Promise<UserWorkspaceConfig> | UserProjectConfigFn;
type TestProjectInlineConfiguration = (UserWorkspaceConfig & {
	/**
	* Relative path to the extendable config. All other options will be merged with this config.
	* If `true`, the project will inherit all options from the root config.
	* @example '../vite.config.ts'
	*/
	extends?: string | true
});
type TestProjectConfiguration = string | TestProjectInlineConfiguration | Promise<UserWorkspaceConfig> | UserProjectConfigFn;
/** @deprecated use `TestProjectConfiguration` instead */
type WorkspaceProjectConfiguration = TestProjectConfiguration;

interface BrowserProviderInitializationOptions {
	browser: string;
	options?: BrowserProviderOptions;
}
interface CDPSession {
	send: (method: string, params?: Record<string, unknown>) => Promise<unknown>;
	on: (event: string, listener: (...args: unknown[]) => void) => void;
	once: (event: string, listener: (...args: unknown[]) => void) => void;
	off: (event: string, listener: (...args: unknown[]) => void) => void;
}
interface BrowserModuleMocker {
	register: (sessionId: string, module: MockedModule) => Promise<void>;
	delete: (sessionId: string, url: string) => Promise<void>;
	clear: (sessionId: string) => Promise<void>;
}
interface BrowserProvider {
	name: string;
	mocker?: BrowserModuleMocker;
	/**
	* @experimental opt-in into file parallelisation
	*/
	supportsParallelism: boolean;
	getSupportedBrowsers: () => readonly string[];
	getCommandsContext: (sessionId: string) => Record<string, unknown>;
	openPage: (sessionId: string, url: string, beforeNavigate?: () => Promise<void>) => Promise<void>;
	getCDPSession?: (sessionId: string) => Promise<CDPSession>;
	close: () => Awaitable$1<void>;
	// eslint-disable-next-line ts/method-signature-style -- we want to allow extended options
	initialize(ctx: TestProject, options: BrowserProviderInitializationOptions): Awaitable$1<void>;
}
interface BrowserProviderModule {
	new (): BrowserProvider;
}
interface BrowserProviderOptions {}
type BrowserBuiltinProvider = "webdriverio" | "playwright" | "preview";
type UnsupportedProperties = "browser" | "typecheck" | "alias" | "sequence" | "root" | "pool" | "poolOptions" | "runner" | "api" | "deps" | "testTransformMode" | "poolMatchGlobs" | "environmentMatchGlobs" | "environment" | "environmentOptions" | "server" | "benchmark" | "name";
interface BrowserInstanceOption extends BrowserProviderOptions, Omit<ProjectConfig, UnsupportedProperties>, Pick<BrowserConfigOptions, "headless" | "locators" | "viewport" | "testerHtmlPath" | "screenshotDirectory" | "screenshotFailures"> {
	/**
	* Name of the browser
	*/
	browser: string;
	name?: string;
}
interface BrowserConfigOptions {
	/**
	* if running tests in the browser should be the default
	*
	* @default false
	*/
	enabled?: boolean;
	/**
	* Name of the browser
	* @deprecated use `instances` instead. if both are defined, this will filter `instances` by name.
	*/
	name?: string;
	/**
	* Configurations for different browser setups
	*/
	instances?: BrowserInstanceOption[];
	/**
	* Browser provider
	*
	* @default 'preview'
	*/
	provider?: BrowserBuiltinProvider | (string & {});
	/**
	* Options that are passed down to a browser provider.
	* To support type hinting, add one of the types to your tsconfig.json "compilerOptions.types" field:
	*
	* - for webdriverio: `@vitest/browser/providers/webdriverio`
	* - for playwright: `@vitest/browser/providers/playwright`
	*
	* @example
	* { playwright: { launch: { devtools: true } }
	* @deprecated use `instances` instead
	*/
	providerOptions?: BrowserProviderOptions;
	/**
	* enable headless mode
	*
	* @default process.env.CI
	*/
	headless?: boolean;
	/**
	* Serve API options.
	*
	* The default port is 63315.
	*/
	api?: ApiConfig | number;
	/**
	* Isolate test environment after each test
	*
	* @default true
	*/
	isolate?: boolean;
	/**
	* Run test files in parallel if provider supports this option
	* This option only has effect in headless mode (enabled in CI by default)
	*
	* @default // Same as "test.fileParallelism"
	*/
	fileParallelism?: boolean;
	/**
	* Show Vitest UI
	*
	* @default !process.env.CI
	*/
	ui?: boolean;
	/**
	* Default viewport size
	*/
	viewport?: {
		/**
		* Width of the viewport
		* @default 414
		*/
		width: number
		/**
		* Height of the viewport
		* @default 896
		*/
		height: number
	};
	/**
	* Locator options
	*/
	locators?: {
		/**
		* Attribute used to locate elements by test id
		* @default 'data-testid'
		*/
		testIdAttribute?: string
	};
	/**
	* Directory where screenshots will be saved when page.screenshot() is called
	* If not set, all screenshots are saved to __screenshots__ directory in the same folder as the test file.
	* If this is set, it will be resolved relative to the project root.
	* @default __screenshots__
	*/
	screenshotDirectory?: string;
	/**
	* Should Vitest take screenshots if the test fails
	* @default !browser.ui
	*/
	screenshotFailures?: boolean;
	/**
	* Scripts injected into the tester iframe.
	* @deprecated Will be removed in the future, use `testerHtmlPath` instead.
	*/
	testerScripts?: BrowserScript[];
	/**
	* Path to the index.html file that will be used to run tests.
	*/
	testerHtmlPath?: string;
	/**
	* Scripts injected into the main window.
	*/
	orchestratorScripts?: BrowserScript[];
	/**
	* Commands that will be executed on the server
	* via the browser `import("@vitest/browser/context").commands` API.
	* @see {@link https://vitest.dev/guide/browser/commands}
	*/
	commands?: Record<string, BrowserCommand<any>>;
	/**
	* Timeout for connecting to the browser
	* @default 30000
	*/
	connectTimeout?: number;
}
interface BrowserCommandContext {
	testPath: string | undefined;
	provider: BrowserProvider;
	project: TestProject;
	/** @deprecated use `sessionId` instead */
	contextId: string;
	sessionId: string;
}
interface BrowserServerStateSession {
	project: TestProject;
	connected: () => void;
	fail: (v: Error) => void;
}
interface BrowserOrchestrator {
	cleanupTesters: () => Promise<void>;
	createTesters: (options: BrowserTesterOptions) => Promise<void>;
	onCancel: (reason: CancelReason) => Promise<void>;
	$close: () => void;
}
interface BrowserServerState {
	orchestrators: Map<string, BrowserOrchestrator>;
}
interface ParentProjectBrowser {
	spawn: (project: TestProject) => ProjectBrowser;
}
interface ProjectBrowser {
	vite: ViteDevServer;
	state: BrowserServerState;
	provider: BrowserProvider;
	close: () => Promise<void>;
	initBrowserProvider: (project: TestProject) => Promise<void>;
	parseStacktrace: (stack: string) => ParsedStack[];
	parseErrorStacktrace: (error: ErrorWithDiff, options?: StackTraceParserOptions) => ParsedStack[];
}
interface BrowserCommand<Payload extends unknown[]> {
	(context: BrowserCommandContext, ...payload: Payload): Awaitable$1<any>;
}
interface BrowserScript {
	/**
	* If "content" is provided and type is "module", this will be its identifier.
	*
	* If you are using TypeScript, you can add `.ts` extension here for example.
	* @default `injected-${index}.js`
	*/
	id?: string;
	/**
	* JavaScript content to be injected. This string is processed by Vite plugins if type is "module".
	*
	* You can use `id` to give Vite a hint about the file extension.
	*/
	content?: string;
	/**
	* Path to the script. This value is resolved by Vite so it can be a node module or a file path.
	*/
	src?: string;
	/**
	* If the script should be loaded asynchronously.
	*/
	async?: boolean;
	/**
	* Script type.
	* @default 'module'
	*/
	type?: string;
}
interface ResolvedBrowserOptions extends BrowserConfigOptions {
	name: string;
	providerOptions?: BrowserProviderOptions;
	enabled: boolean;
	headless: boolean;
	isolate: boolean;
	fileParallelism: boolean;
	api: ApiConfig;
	ui: boolean;
	viewport: {
		width: number
		height: number
	};
	screenshotFailures: boolean;
	locators: {
		testIdAttribute: string
	};
}

declare class TestProject {
	/** @deprecated */
	path: string | number;
	options?: InitializeProjectOptions | undefined;
	/**
	* The global Vitest instance.
	* @experimental The public Vitest API is experimental and does not follow semver.
	*/
	readonly vitest: Vitest;
	/**
	* Resolved global configuration. If there are no workspace projects, this will be the same as `config`.
	*/
	readonly globalConfig: ResolvedConfig;
	/**
	* Browser instance if the browser is enabled. This is initialized when the tests run for the first time.
	*/
	browser?: ProjectBrowser;
	/** @deprecated use `vitest` instead */
	ctx: Vitest;
	/**
	* Temporary directory for the project. This is unique for each project. Vitest stores transformed content here.
	*/
	readonly tmpDir: string;
	private runner;
	private closingPromise;
	private testFilesList;
	private typecheckFilesList;
	private _globalSetups?;
	private _provided;
	constructor(path: string | number, vitest: Vitest, options?: InitializeProjectOptions | undefined);
	/**
	* The unique hash of this project. This value is consistent between the reruns.
	*
	* It is based on the root of the project (not consistent between OS) and its name.
	*/
	get hash(): string;
	// "provide" is a property, not a method to keep the context when destructed in the global setup,
	// making it a method would be a breaking change, and can be done in Vitest 3 at minimum
	/**
	* Provide a value to the test context. This value will be available to all tests with `inject`.
	*/
	provide: <T extends keyof ProvidedContext & string>(key: T, value: ProvidedContext[T]) => void;
	/**
	* Get the provided context. The project context is merged with the global context.
	*/
	getProvidedContext(): ProvidedContext;
	/**
	* Creates a new test specification. Specifications describe how to run tests.
	* @param moduleId The file path
	*/
	createSpecification(moduleId: string, locations?: number[] | undefined, pool?: string): TestSpecification;
	toJSON(): SerializedTestProject;
	/**
	* Vite's dev server instance. Every workspace project has its own server.
	*/
	get vite(): ViteDevServer;
	/**
	* Resolved project configuration.
	*/
	get config(): ResolvedConfig;
	/**
	* The name of the project or an empty string if not set.
	*/
	get name(): string;
	/**
	* The color used when reporting tasks of this project.
	*/
	get color(): ProjectName["color"];
	/**
	* Serialized project configuration. This is the config that tests receive.
	*/
	get serializedConfig(): SerializedConfig;
	/** @deprecated use `vite` instead */
	get server(): ViteDevServer;
	/**
	* Check if this is the root project. The root project is the one that has the root config.
	*/
	isRootProject(): boolean;
	/** @deprecated use `isRootProject` instead */
	isCore(): boolean;
	/** @deprecated use `createSpecification` instead */
	createSpec(moduleId: string, pool: string): WorkspaceSpec;
	/** @deprecated */
	initializeGlobalSetup(): Promise<void>;
	onTestsRerun(cb: OnTestsRerunHandler): void;
	/** @deprecated */
	teardownGlobalSetup(): Promise<void>;
	/** @deprecated use `vitest.logger` instead */
	get logger(): Logger;
	// it's possible that file path was imported with different queries (?raw, ?url, etc)
	/** @deprecated use `.vite` or `.browser.vite` directly */
	getModulesByFilepath(file: string): Set<ModuleNode>;
	/** @deprecated use `.vite` or `.browser.vite` directly */
	getModuleById(id: string): ModuleNode | undefined;
	/** @deprecated use `.vite` or `.browser.vite` directly */
	getSourceMapModuleById(id: string): TransformResult$1["map"] | undefined;
	/** @deprecated use `vitest.reporters` instead */
	get reporters(): Reporter[];
	/**
	* Get all files in the project that match the globs in the config and the filters.
	* @param filters String filters to match the test files.
	*/
	globTestFiles(filters?: string[]): Promise<{
		/**
		* Test files that match the filters.
		*/
		testFiles: string[]
		/**
		* Typecheck test files that match the filters. This will be empty unless `typecheck.enabled` is `true`.
		*/
		typecheckTestFiles: string[]
	}>;
	private globAllTestFiles;
	isBrowserEnabled(): boolean;
	private markTestFile;
	/** @deprecated use `serializedConfig` instead */
	getSerializableConfig(): SerializedConfig;
	/**
	* Test if a file matches the test globs. This does the actual glob matching if the test is not cached, unlike `isCachedTestFile`.
	*/
	matchesTestGlob(moduleId: string, source?: () => string): boolean;
	/** @deprecated use `matchesTestGlob` instead */
	isTargetFile(id: string, source?: string): Promise<boolean>;
	private isInSourceTestCode;
	private filterFiles;
	private _parentBrowser?;
	/**
	* Closes the project and all associated resources. This can only be called once; the closing promise is cached until the server restarts.
	* If the resources are needed again, create a new project.
	*/
	close(): Promise<void>;
	/**
	* Import a file using Vite module runner.
	* @param moduleId The ID of the module in Vite module graph
	*/
	import<T>(moduleId: string): Promise<T>;
	/** @deprecated use `name` instead */
	getName(): string;
	/** @deprecated internal */
	setServer(options: UserConfig, server: ViteDevServer): Promise<void>;
	private _setHash;
	private _serializeOverriddenConfig;
	private clearTmpDir;
	/** @deprecated */
	initBrowserProvider(): Promise<void>;
}

interface SerializedTestProject {
	name: string;
	serializedConfig: SerializedConfig;
	context: ProvidedContext;
}
interface InitializeProjectOptions extends TestProjectInlineConfiguration {
	configFile: string | false;
}

/**
* @deprecated use TestSpecification instead
*/
type WorkspaceSpec = TestSpecification & [project: TestProject, file: string, options: {
	pool: Pool
}];
type RunWithFiles = (files: TestSpecification[], invalidates?: string[]) => Awaitable$1<void>;
interface ProcessPool {
	name: string;
	runTests: RunWithFiles;
	collectTests: RunWithFiles;
	close?: () => Awaitable$1<void>;
}
declare function getFilePoolName(project: TestProject, file: string): Pool;

interface TestRunResult {
	testModules: TestModule[];
	unhandledErrors: unknown[];
}

interface SuiteResultCache {
	failed: boolean;
	duration: number;
}
declare class ResultsCache {
	private cache;
	private workspacesKeyMap;
	private cachePath;
	private version;
	private root;
	constructor(version: string);
	getCachePath(): string | null;
	setConfig(root: string, config: ResolvedConfig["cache"]): void;
	getResults(key: string): SuiteResultCache | undefined;
	readFromCache(): Promise<void>;
	updateResults(files: File[]): void;
	removeFromCache(filepath: string): void;
	writeToCache(): Promise<void>;
}

type FileStatsCache = Pick<Stats, "size">;
declare class FilesStatsCache {
	cache: Map<string, FileStatsCache>;
	getStats(key: string): FileStatsCache | undefined;
	populateStats(root: string, specs: TestSpecification[]): Promise<void>;
	updateStats(fsPath: string, key: string): Promise<void>;
	removeStats(fsPath: string): void;
}

declare class VitestCache {
	results: ResultsCache;
	stats: FilesStatsCache;
	constructor(version: string);
	getFileTestResults(key: string): SuiteResultCache | undefined;
	getFileStats(key: string): {
		size: number
	} | undefined;
	static resolveCacheDir(root: string, dir?: string, projectName?: string): string;
}

declare class VitestPackageInstaller {
	isPackageExists(name: string, options?: {
		paths?: string[]
	}): boolean;
	ensureInstalled(dependency: string, root: string, version?: string): Promise<boolean>;
}

declare class StateManager {
	filesMap: Map<string, File[]>;
	pathsSet: Set<string>;
	idMap: Map<string, Task>;
	taskFileMap: WeakMap<Task, File>;
	errorsSet: Set<unknown>;
	processTimeoutCauses: Set<string>;
	reportedTasksMap: WeakMap<Task, TestModule | TestCase | TestSuite>;
	blobs?: MergedBlobs;
	catchError(err: unknown, type: string): void;
	clearErrors(): void;
	getUnhandledErrors(): unknown[];
	addProcessTimeoutCause(cause: string): void;
	getProcessTimeoutCauses(): string[];
	getPaths(): string[];
	/**
	* Return files that were running or collected.
	*/
	getFiles(keys?: string[]): File[];
	getTestModules(keys?: string[]): TestModule[];
	getFilepaths(): string[];
	getFailedFilepaths(): string[];
	collectPaths(paths?: string[]): void;
	collectFiles(project: TestProject, files?: File[]): void;
	clearFiles(project: TestProject, paths?: string[]): void;
	updateId(task: Task, project: TestProject): void;
	getReportedEntity(task: Task): TestModule | TestCase | TestSuite | undefined;
	updateTasks(packs: TaskResultPack[]): void;
	updateUserLog(log: UserConsoleLog): void;
	getCountOfFailedTests(): number;
	cancelFiles(files: string[], project: TestProject): void;
}

interface VitestOptions {
	packageInstaller?: VitestPackageInstaller;
	stdin?: NodeJS.ReadStream;
	stdout?: NodeJS.WriteStream | Writable;
	stderr?: NodeJS.WriteStream | Writable;
}
declare class Vitest {
	readonly mode: VitestRunMode;
	/**
	* Current Vitest version.
	* @example '2.0.0'
	*/
	readonly version: string;
	static readonly version: string;
	/**
	* The logger instance used to log messages. It's recommended to use this logger instead of `console`.
	* It's possible to override stdout and stderr streams when initiating Vitest.
	* @example
	* new Vitest('test', {
	*   stdout: new Writable(),
	* })
	*/
	readonly logger: Logger;
	/**
	* The package installer instance used to install Vitest packages.
	* @example
	* await vitest.packageInstaller.ensureInstalled('@vitest/browser', process.cwd())
	*/
	readonly packageInstaller: VitestPackageInstaller;
	/**
	* A path to the built Vitest directory. This is usually a folder in `node_modules`.
	*/
	readonly distPath: string;
	/**
	* A list of projects that are currently running.
	* If projects were filtered with `--project` flag, they won't appear here.
	*/
	projects: TestProject[];
	private isFirstRun;
	private restartsCount;
	private readonly specifications;
	private readonly watcher;
	private pool;
	private _config?;
	private _vite?;
	private _state?;
	private _cache?;
	private _snapshot?;
	private _workspaceConfigPath?;
	constructor(mode: VitestRunMode, cliOptions: UserConfig, options?: VitestOptions);
	private _onRestartListeners;
	private _onClose;
	private _onSetServer;
	private _onCancelListeners;
	private _onUserTestsRerun;
	private _onFilterWatchedSpecification;
	/** @deprecated will be removed in 4.0, use `onFilterWatchedSpecification` instead */
	get invalidates(): Set<string>;
	/** @deprecated will be removed in 4.0, use `onFilterWatchedSpecification` instead */
	get changedTests(): Set<string>;
	/**
	* The global config.
	*/
	get config(): ResolvedConfig;
	/** @deprecated use `vitest.vite` instead */
	get server(): ViteDevServer;
	/**
	* Global Vite's dev server instance.
	*/
	get vite(): ViteDevServer;
	/**
	* The global test state manager.
	* @experimental The State API is experimental and not subject to semver.
	*/
	get state(): StateManager;
	/**
	* The global snapshot manager. You can access the current state on `snapshot.summary`.
	*/
	get snapshot(): SnapshotManager;
	/**
	* Test results and test file stats cache. Primarily used by the sequencer to sort tests.
	*/
	get cache(): VitestCache;
	/** @deprecated internal */
	setServer(options: UserConfig, server: ViteDevServer): Promise<void>;
	/**
	* Inject new test projects into the workspace.
	* @param config Glob, config path or a custom config options.
	* @returns An array of new test projects. Can be empty if the name was filtered out.
	*/
	private injectTestProject;
	/**
	* Provide a value to the test context. This value will be available to all tests with `inject`.
	*/
	provide: <T extends keyof ProvidedContext & string>(key: T, value: ProvidedContext[T]) => void;
	/**
	* Get global provided context.
	*/
	getProvidedContext(): ProvidedContext;
	/** @deprecated use `getRootProject` instead */
	getCoreWorkspaceProject(): TestProject;
	/**
	* Return project that has the root (or "global") config.
	*/
	getRootProject(): TestProject;
	/**
	* @deprecated use Reported Task API instead
	*/
	getProjectByTaskId(taskId: string): TestProject;
	getProjectByName(name: string): TestProject;
	/**
	* Import a file using Vite module runner. The file will be transformed by Vite and executed in a separate context.
	* @param moduleId The ID of the module in Vite module graph
	*/
	import<T>(moduleId: string): Promise<T>;
	private resolveWorkspaceConfigPath;
	private resolveProjects;
	/**
	* Glob test files in every project and create a TestSpecification for each file and pool.
	* @param filters String filters to match the test files.
	*/
	globTestSpecifications(filters?: string[]): Promise<TestSpecification[]>;
	private initCoverageProvider;
	/**
	* Merge reports from multiple runs located in the specified directory (value from `--merge-reports` if not specified).
	*/
	mergeReports(directory?: string): Promise<TestRunResult>;
	collect(filters?: string[]): Promise<TestRunResult>;
	/** @deprecated use `getRelevantTestSpecifications` instead */
	listFiles(filters?: string[]): Promise<TestSpecification[]>;
	/**
	* Returns the list of test files that match the config and filters.
	* @param filters String filters to match the test files
	*/
	getRelevantTestSpecifications(filters?: string[]): Promise<TestSpecification[]>;
	/**
	* Initialize reporters, the coverage provider, and run tests.
	* This method can throw an error:
	*   - `FilesNotFoundError` if no tests are found
	*   - `GitNotFoundError` if `--related` flag is used, but git repository is not initialized
	*   - `Error` from the user reporters
	* @param filters String filters to match the test files
	*/
	start(filters?: string[]): Promise<TestRunResult>;
	/**
	* Initialize reporters and the coverage provider. This method doesn't run any tests.
	* If the `--watch` flag is provided, Vitest will still run changed tests even if this method was not called.
	*/
	init(): Promise<void>;
	/**
	* @deprecated remove when vscode extension supports "getModuleSpecifications"
	*/
	getProjectsByTestFile(file: string): WorkspaceSpec[];
	/** @deprecated */
	getFileWorkspaceSpecs(file: string): WorkspaceSpec[];
	/**
	* Get test specifications associated with the given module. If module is not a test file, an empty array is returned.
	*
	* **Note:** this method relies on a cache generated by `globTestSpecifications`. If the file was not processed yet, use `project.matchesGlobPattern` instead.
	* @param moduleId The module ID to get test specifications for.
	*/
	getModuleSpecifications(moduleId: string): TestSpecification[];
	/**
	* Vitest automatically caches test specifications for each file. This method clears the cache for the given file or the whole cache altogether.
	*/
	clearSpecificationsCache(moduleId?: string): void;
	/**
	* Run tests for the given test specifications. This does not trigger `onWatcher*` events.
	* @param specifications A list of specifications to run.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	runTestSpecifications(specifications: TestSpecification[], allTestsRun?: boolean): Promise<TestRunResult>;
	/**
	* Rerun files and trigger `onWatcherRerun`, `onWatcherStart` and `onTestsRerun` events.
	* @param specifications A list of specifications to run.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	rerunTestSpecifications(specifications: TestSpecification[], allTestsRun?: boolean): Promise<TestRunResult>;
	private runFiles;
	/**
	* Collect tests in specified modules. Vitest will run the files to collect tests.
	* @param specifications A list of specifications to run.
	*/
	collectTests(specifications: TestSpecification[]): Promise<TestRunResult>;
	/**
	* Gracefully cancel the current test run. Vitest will wait until all running tests are finished before cancelling.
	*/
	cancelCurrentRun(reason: CancelReason): Promise<void>;
	private initializeGlobalSetup;
	/**
	* Update snapshots in specified files. If no files are provided, it will update files with failed tests and obsolete snapshots.
	* @param files The list of files on the file system
	*/
	updateSnapshot(files?: string[]): Promise<TestRunResult>;
	/**
	* Enable the mode that allows updating snapshots when running tests.
	* This method doesn't run any tests.
	*
	* Every test that runs after this method is called will update snapshots.
	* To disable the mode, call `resetSnapshotUpdate`.
	*/
	enableSnapshotUpdate(): void;
	/**
	* Disable the mode that allows updating snapshots when running tests.
	*/
	resetSnapshotUpdate(): void;
	/**
	* Set the global test name pattern to a regexp.
	* This method doesn't run any tests.
	*/
	setGlobalTestNamePattern(pattern: string | RegExp): void;
	/**
	* Resets the global test name pattern. This method doesn't run any tests.
	*/
	resetGlobalTestNamePattern(): void;
	private _rerunTimer;
	// we can't use a single `triggerId` yet because vscode extension relies on this
	private scheduleRerun;
	/**
	* Invalidate a file in all projects.
	*/
	invalidateFile(filepath: string): void;
	/** @deprecated use `invalidateFile` */
	updateLastChanged(filepath: string): void;
	private reportCoverage;
	/**
	* Closes all projects and their associated resources.
	* This can only be called once; the closing promise is cached until the server restarts.
	*/
	close(): Promise<void>;
	/**
	* Closes all projects and exit the process
	* @param force If true, the process will exit immediately after closing the projects.
	*/
	exit(force?: boolean): Promise<void>;
	/**
	* @deprecated use `globTestSpecifications` instead
	*/
	globTestSpecs(filters?: string[]): Promise<TestSpecification[]>;
	/**
	* @deprecated use `globTestSpecifications` instead
	*/
	globTestFiles(filters?: string[]): Promise<TestSpecification[]>;
	/** @deprecated filter by `this.projects` yourself */
	getModuleProjects(filepath: string): TestProject[];
	/**
	* Should the server be kept running after the tests are done.
	*/
	shouldKeepServer(): boolean;
	/**
	* Register a handler that will be called when the server is restarted due to a config change.
	*/
	onServerRestart(fn: OnServerRestartHandler): void;
	/**
	* Register a handler that will be called when the test run is cancelled with `vitest.cancelCurrentRun`.
	*/
	onCancel(fn: (reason: CancelReason) => Awaitable$1<void>): void;
	/**
	* Register a handler that will be called when the server is closed.
	*/
	onClose(fn: () => Awaitable$1<void>): void;
	/**
	* Register a handler that will be called when the tests are rerunning.
	*/
	onTestsRerun(fn: OnTestsRerunHandler): void;
	/**
	* Register a handler that will be called when a file is changed.
	* This callback should return `true` of `false` indicating whether the test file needs to be rerun.
	* @example
	* const testsToRun = [resolve('./test.spec.ts')]
	* vitest.onFilterWatchedSpecification(specification => testsToRun.includes(specification.moduleId))
	*/
	onFilterWatchedSpecification(fn: (specification: TestSpecification) => boolean): void;
	/**
	* Check if the project with a given name should be included.
	*/
	matchesProjectFilter(name: string): boolean;
}
type OnServerRestartHandler = (reason?: string) => Promise<void> | void;
type OnTestsRerunHandler = (testFiles: TestSpecification[]) => Promise<void> | void;

export { CoverageMap as C, TestSpecification as K, Logger as L, TestModule as M, TestProject as T, Vitest as V, VitestPackageInstaller as X, getFilePoolName as _, TestCase as a4, TestCollection as a5, BasicReporter as aC, BenchmarkReporter as aD, BenchmarkReportsMap as aE, DefaultReporter as aF, DotReporter as aG, GithubActionsReporter as aH, HangingProcessReporter as aI, JsonReporter as aJ, JUnitReporter as aK, ReportersMap as aL, TapFlatReporter as aM, TapReporter as aN, VerboseBenchmarkReporter as aO, VerboseReporter as aP, BaseReporter as aQ, TestSuite as ad };
export type { SerializedTestProject as $, ApiConfig as A, BaseCoverageOptions as B, DepsOptimizationOptions as D, ProjectConfig as E, BenchmarkUserOptions as F, BrowserTesterOptions as G, VitestOptions as H, InlineConfig as I, TestSequencer as J, ModuleDiagnostic as N, OnServerRestartHandler as O, Pool as P, OnTestsRerunHandler as Q, ResolvedCoverageOptions as R, SerializedTestSpecification as S, UserWorkspaceConfig as U, WorkspaceProjectConfiguration as W, ProcessPool as Y, WorkspaceSpec as Z, ReportContext as a, HTMLOptions as a0, JsonOptions$1 as a1, JUnitOptions as a2, TaskOptions as a3, TestDiagnostic as a6, TestModuleState as a7, TestResult as a8, TestResultFailed as a9, ReportedHookContext as aA, TestRunEndReason as aB, BenchmarkBuiltinReporters as aR, BuiltinReporterOptions as aS, BuiltinReporters as aT, JsonAssertionResult as aU, JsonTestResult as aV, JsonTestResults as aW, TestResultPassed as aa, TestResultSkipped as ab, TestState as ac, TestSuiteState as ae, TestSequencerConstructor as af, BrowserBuiltinProvider as ag, BrowserCommand as ah, BrowserCommandContext as ai, BrowserInstanceOption as aj, BrowserModuleMocker as ak, BrowserOrchestrator as al, BrowserProvider as am, BrowserProviderInitializationOptions as an, BrowserProviderModule as ao, BrowserProviderOptions as ap, BrowserServerState as aq, BrowserServerStateSession as ar, CDPSession as as, ParentProjectBrowser as at, ProjectBrowser as au, ResolvedBrowserOptions as av, ResolvedProjectConfig as aw, ResolveSnapshotPathHandler as ax, ResolveSnapshotPathHandlerContext as ay, TestRunResult as az, TestProjectConfiguration as b, CoverageV8Options as c, UserProjectConfigFn as d, UserProjectConfigExport as e, TestProjectInlineConfiguration as f, WatcherTriggerPattern as g, CoverageProvider as h, CoverageProviderModule as i, CoverageReporter as j, CoverageProviderName as k, CoverageOptions as l, CoverageIstanbulOptions as m, CustomProviderOptions as n, Reporter as o, BrowserScript as p, BrowserConfigOptions as q, BuiltinEnvironment as r, VitestEnvironment as s, PoolOptions as t, CSSModuleScopeStrategy as u, VitestRunMode as v, TransformModePatterns as w, TypecheckConfig as x, UserConfig as y, ResolvedConfig as z };
