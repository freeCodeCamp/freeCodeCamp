import { TaskMeta, Suite, File, SerializableRetry, TestAnnotation, TestArtifact, ImportDuration, Test, Task, TaskResultPack, FileSpecification, CancelReason, SequenceSetupFiles, SequenceHooks, TestTagDefinition } from '@vitest/runner';
import { TestError, SerializedError, Arrayable, ParsedStack, Awaitable } from '@vitest/utils';
import { a as AfterSuiteRunMeta, U as UserConsoleLog, A as AsyncLeak, P as ProvidedContext, O as OTELCarrier, L as LabelColor } from './traces.d.D2T_R8rx.js';
import { Writable } from 'node:stream';
import { DevEnvironment, TransformResult as TransformResult$1, ViteDevServer, Plugin, UserConfig as UserConfig$1, DepOptimizationConfig, ServerOptions, ConfigEnv, AliasOptions } from 'vite';
import { b as SerializedRootConfig, B as BrowserTraceViewMode, S as SerializedConfig, F as FakeTimerInstallOpts } from './config.d.A1h_Y6Jt.js';
import { S as SerializedTestSpecification, c as SourceModuleDiagnostic, B as BrowserTesterOptions } from './browser.d.BcoexmFG.js';
import { PrettyFormatOptions } from '@vitest/pretty-format';
import { SnapshotSummary, SnapshotStateOptions } from '@vitest/snapshot';
import { SerializedDiffOptions } from '@vitest/utils/diff';
import { chai } from '@vitest/expect';
import { happyDomTypes, jsdomTypes } from 'vitest/optional-types.js';
import { c as ContextTestEnvironment, d as WorkerExecuteContext, e as WorkerTestEnvironment } from './worker.d.ZpHpO4yb.js';
import { B as BenchmarkResult } from './benchmark.d.DAaHLpsq.js';
import { MockedModule } from '@vitest/mocker';
import { StackTraceParserOptions } from '@vitest/utils/source-map';
import { CDPSession, BrowserCommands } from 'vitest/browser';
import { a as RuntimeCoverageProviderModule } from './coverage.d.BZtK59WP.js';
import { SnapshotManager } from '@vitest/snapshot/manager';
import { Console } from 'node:console';
import { Stats } from 'node:fs';

type ChaiConfig = Omit<Partial<typeof chai.config>, "useProxy" | "proxyExcludedKeys" | "deepEqual">;

type HappyDOMOptions = Omit<NonNullable<ConstructorParameters<typeof happyDomTypes.Window>[0]>, "console">;

type JSDOMOptions = ConstructorOptionsOverride & Omit<jsdomTypes.ConstructorOptions, keyof ConstructorOptionsOverride>;
interface ConstructorOptionsOverride {
	/**
	* The html content for the test.
	*
	* @default '<!DOCTYPE html>'
	*/
	html?: string | ArrayBufferLike;
	/**
	* userAgent affects the value read from navigator.userAgent, as well as the User-Agent header sent while fetching subresources.
	*
	* @default `Mozilla/5.0 (${process.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${jsdomVersion}`
	*/
	userAgent?: string;
	/**
	* url sets the value returned by window.location, document.URL, and document.documentURI,
	* and affects things like resolution of relative URLs within the document
	* and the same-origin restrictions and referrer used while fetching subresources.
	*
	* @default 'http://localhost:3000'.
	*/
	url?: string;
	/**
	* Enable console?
	*
	* @default false
	*/
	console?: boolean;
	/**
	* jsdom does not have the capability to render visual content, and will act like a headless browser by default.
	* It provides hints to web pages through APIs such as document.hidden that their content is not visible.
	*
	* When the `pretendToBeVisual` option is set to `true`, jsdom will pretend that it is rendering and displaying
	* content.
	*
	* @default true
	*/
	pretendToBeVisual?: boolean;
	/**
	* Enable CookieJar
	*
	* @default false
	*/
	cookieJar?: boolean;
	resources?: "usable";
}

interface TestSpecificationOptions {
	testNamePattern?: RegExp;
	testIds?: string[];
	testLines?: number[];
	testTagsFilter?: string[];
}
declare class TestSpecification {
	/**
	* The task id associated with the test module.
	*/
	readonly taskId: string;
	/**
	* The test project that the module belongs to.
	*/
	readonly project: TestProject;
	/**
	* The id of the module in the Vite module graph. It is usually an absolute file path.
	*/
	readonly moduleId: string;
	/**
	* The current test pool. It's possible to have multiple pools in a single test project with `typecheck.enabled`.
	*/
	readonly pool: Pool;
	/**
	* Line numbers of the test locations to run.
	*/
	testLines: number[] | undefined;
	/**
	* Regular expression pattern to filter test names.
	*/
	testNamePattern: RegExp | undefined;
	/**
	* The ids of tasks inside of this specification to run.
	*/
	testIds: string[] | undefined;
	/**
	* The tags of tests to run.
	*/
	testTagsFilter: string[] | undefined;
	/**
	* Test module associated with the specification. This will be `undefined` if tests have not been run yet.
	*/
	get testModule(): TestModule | undefined;
	toJSON(): SerializedTestSpecification;
}

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
		line: number;
		column: number;
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
	* Tags associated with the test.
	*/
	readonly tags: string[];
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
	* @experimental
	*
	* Test artifacts recorded via the `recordArtifact` API during the test execution.
	*/
	artifacts(): ReadonlyArray<TestArtifact>;
	/**
	* Useful information about the test like duration, memory usage, etc.
	* Diagnostic is only available after the test has finished.
	*/
	diagnostic(): TestDiagnostic | undefined;
	/**
	* Returns a new test specification that can be used to filter or run this specific test case.
	*/
	toTestSpecification(): TestSpecification;
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
	readonly name: "beforeAll" | "afterAll";
	readonly entity: TestSuite | TestModule;
} | {
	readonly name: "beforeEach" | "afterEach";
	readonly entity: TestCase;
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
	* Returns a new test specification that can be used to filter or run this specific test suite.
	*/
	toTestSpecification(): TestSpecification;
	/**
	* Full name of the suite including all parent suites separated with `>`.
	*/
	get fullName(): string;
}
declare class TestModule extends SuiteImplementation {
	readonly location: undefined;
	readonly type = "module";
	/**
	* The Vite environment that processes files on the server.
	*
	* Can be empty if test module did not run yet.
	*/
	readonly viteEnvironment: DevEnvironment | undefined;
	/**
	* This is usually an absolute UNIX file path.
	* It can be a virtual ID if the file is not on the disk.
	* This value corresponds to the ID in the Vite's module graph.
	*/
	readonly moduleId: string;
	/**
	* Module id relative to the project. This is the same as `task.name`.
	*/
	readonly relativeModuleId: string;
	/**
	* Returns a new test specification that can be used to filter or run this specific test module.
	*/
	toTestSpecification(testCases?: TestCase[]): TestSpecification;
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
	readonly retry: SerializableRetry | undefined;
	readonly repeats: number | undefined;
	readonly tags: string[] | undefined;
	/**
	* Only tests have a `timeout` option.
	*/
	readonly timeout: number | undefined;
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
declare function experimental_getRunnerTask(entity: TestCase): Test;
declare function experimental_getRunnerTask(entity: TestSuite): Suite;
declare function experimental_getRunnerTask(entity: TestModule): File;
declare function experimental_getRunnerTask(entity: TestCase | TestSuite | TestModule): Suite | File | Test;

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
    json: JsonOptions$1;
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

type JsonOptions$1 = FileOptions;
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
	/** Callback called when test run starts */
	onTestRunStart?: () => void | Promise<void>;
	/** Callback called when test run fails due to test failures */
	onTestFailure?: () => void | Promise<void>;
	/** Callback to generate final coverage results */
	generateCoverage: (reportContext: ReportContext) => CoverageResults | Promise<CoverageResults>;
	/** Callback to convert coverage results to coverage reports. Called with results returned from `generateCoverage` */
	reportCoverage: (coverage: CoverageResults, reportContext: ReportContext) => void | Promise<void>;
	/** Callback for `--merge-reports` options. Called with multiple coverage results generated by `generateCoverage`. */
	mergeReports?: (coverages: CoverageResults[]) => void | Promise<void>;
	/** Callback called for instrumenting files with coverage counters. */
	onFileTransform?: (sourceCode: string, id: string, pluginCtx: any) => TransformResult | Promise<TransformResult>;
	/**
	* Return `true` if this file is transformed by the coverage provider.
	* This is used to generate the persistent file hash by `fsModuleCache`
	* @experimental
	*/
	requiresTransform?: (id: string) => boolean;
	/** Callback that's called when the coverage is enabled via a programmatic `enableCoverage` API. */
	onEnabled?: () => void | Promise<void>;
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
/** Fields that have default values. Internally these will always be defined. */
type FieldsWithDefaultValues = "provider" | "enabled" | "clean" | "cleanOnRerun" | "reportsDirectory" | "exclude" | "reportOnFailure" | "allowExternal" | "processingConcurrency" | "reporter" | "excludeAfterRemap" | "ignoreClassMethods" | "skipFull" | "watermarks";
type ResolvedCoverageOptions = CoverageOptions & Required<Pick<CoverageOptions, FieldsWithDefaultValues>> & {
	reporter: CoverageReporterWithOptions[];
	htmlDir?: string;
};
interface CoverageOptions {
	/**
	* Coverage provider to use.
	*
	* @default 'v8'
	*/
	provider?: "v8" | "istanbul" | "custom";
	/**
	* Enables coverage collection. Can be overridden using `--coverage` CLI option.
	*
	* @default false
	*/
	enabled?: boolean;
	/**
	* List of files included in coverage as glob patterns.
	* By default only files covered by tests are included.
	*
	* See [Including and excluding files from coverage report](https://vitest.dev/guide/coverage.html#including-and-excluding-files-from-coverage-report) for examples.
	*/
	include?: string[];
	/**
	* List of files excluded from coverage as glob patterns.
	* Files are first checked against `coverage.include`.
	*
	* See [Including and excluding files from coverage report](https://vitest.dev/guide/coverage.html#including-and-excluding-files-from-coverage-report) for examples.
	*/
	exclude?: string[];
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
	reporter?: Arrayable<CoverageReporter> | (CoverageReporter | [CoverageReporter] | CoverageReporterWithOptions)[];
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
		[glob: string]: Pick<Thresholds, 100 | "statements" | "functions" | "branches" | "lines">;
	} & Thresholds);
	/**
	* Watermarks for statements, lines, branches and functions.
	*
	* Default value is `[50,80]` for each property.
	*/
	watermarks?: {
		statements?: [number, number];
		functions?: [number, number];
		branches?: [number, number];
		lines?: [number, number];
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
	/**
	* Set to array of class method names to ignore for coverage
	*
	* @default []
	*/
	ignoreClassMethods?: string[];
	/**
	* Custom instrumenter factory to use instead of the default `istanbul-lib-instrument`.
	*
	* The factory receives the same runtime coverage options Vitest passes to its
	* built-in Istanbul instrumenter and must return an object implementing the
	* `CoverageInstrumenter` interface.
	*
	* This allows using faster instrumenters (e.g., oxc-coverage-instrument, SWC) while
	* keeping the Istanbul coverage pipeline for collection, merging, and reporting.
	*
	* @example
	* ```ts
	* import { defineConfig } from 'vitest/config'
	* import { createOxcInstrumenter } from 'oxc-coverage-instrument/vitest'
	*
	* export default defineConfig({
	*   test: {
	*     coverage: {
	*       provider: 'istanbul',
	*       instrumenter: options => createOxcInstrumenter(options),
	*     }
	*   }
	* })
	*
	* @experimental
	*/
	instrumenter?: (options: InstrumenterOptions) => CoverageInstrumenter;
	/**
	* Directory of HTML coverage output to be served in UI mode and HTML reporter.
	* This is automatically configured for builtin reporter with html output (`html`, `html-spa`, and `lcov` reporters).
	* Use this option to override with custom coverage reporting location.
	*/
	htmlDir?: string;
	/**
	* Collect coverage only for files changed since a specified commit or branch.
	* Inherits the default value from `test.changed`.
	*/
	changed?: boolean | string;
	/**
	* Name of the module or path to a file to load the custom provider from
	*/
	customProviderModule?: string;
}
interface Thresholds {
	/** Set global thresholds to `100` */
	100?: boolean;
	/** Check thresholds per file. */
	perFile?: boolean;
	/**
	* Update threshold values automatically when current coverage is higher than earlier thresholds
	* Also can accept a function to format the new threshold values
	*
	* @default false
	*/
	autoUpdate?: boolean | ((newThreshold: number) => number);
	/** Thresholds for statements */
	statements?: number;
	/** Thresholds for functions */
	functions?: number;
	/** Thresholds for branches */
	branches?: number;
	/** Thresholds for lines */
	lines?: number;
}
/**
* Options passed to the custom instrumenter factory.
*/
interface InstrumenterOptions {
	/** Global variable name that Vitest uses to store coverage data at runtime. */
	coverageVariable: string;
	/** Global scope where the coverage variable is attached at runtime. */
	coverageGlobalScope: string;
	/** Whether the coverage global scope should be resolved through an evaluated function. */
	coverageGlobalScopeFunc: boolean;
	/** Class method names to exclude from function coverage. */
	ignoreClassMethods: string[];
}
/**
* Interface for custom coverage instrumenters.
*
* Matches the subset of istanbul-lib-instrument's `Instrumenter` that Vitest
* actually uses. Implement this to plug in a faster instrumenter while keeping
* the Istanbul coverage pipeline for collection, merging, and reporting.
*/
interface CoverageInstrumenter {
	/** Instrument source code synchronously. Returns the instrumented code string. */
	instrumentSync: (code: string, filename: string, inputSourceMap?: any) => string;
	/** Get the source map of the last instrumented file. */
	lastSourceMap: () => any;
	/** Get the Istanbul-compatible file coverage object of the last instrumented file. */
	lastFileCoverage: () => any;
}
/** @deprecated Use `CoverageOptions` instead */
interface CoverageV8Options extends CoverageOptions {}
/** @deprecated Use `CoverageOptions` instead */
interface CoverageIstanbulOptions extends CoverageOptions {}
/** @deprecated Use `CoverageOptions` instead */
interface BaseCoverageOptions extends CoverageOptions {}
/** @deprecated Use `CoverageOptions` instead */
interface CustomProviderOptions extends CoverageOptions {}

interface TestRunResult {
	testModules: TestModule[];
	unhandledErrors: unknown[];
}

interface VCSProviderOptions {
	root: string;
	changedSince?: string | boolean;
}
interface VCSProvider {
	findChangedFiles(options: VCSProviderOptions): Promise<string[]>;
}

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
	printNoTestTagsFound(): void;
	printTags(): void;
	printNoTestFound(filters?: string[]): void;
	printBanner(): void;
	printBrowserBanner(project: TestProject): void;
	printUnhandledErrors(errors: ReadonlyArray<unknown>): void;
	printSourceTypeErrors(errors: TypeCheckError[]): void;
	getColumns(): number;
	onTerminalCleanup(listener: Listener): void;
	private addCleanupListeners;
	private registerUnhandledRejection;
}

interface SuiteResultCache {
	failed: boolean;
	duration: number;
}
declare class ResultsCache {
	private logger;
	private cache;
	private workspacesKeyMap;
	private cachePath;
	private version;
	private root;
	constructor(logger: Logger);
	getCachePath(): string | null;
	setConfig(root: string, config: ResolvedConfig["cache"]): void;
	getResults(key: string): SuiteResultCache | undefined;
	clearCache(): Promise<void>;
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
	constructor(logger: Logger);
	getFileTestResults(key: string): SuiteResultCache | undefined;
	getFileStats(key: string): {
		size: number;
	} | undefined;
	static resolveCacheDir(root: string, dir?: string, projectName?: string): string;
}

declare class VitestPackageInstaller {
	isPackageExists(name: string, options?: {
		paths?: string[];
	}): boolean;
	ensureInstalled(dependency: string, root: string, version?: string): Promise<boolean>;
}

type TestRunEndReason = "passed" | "interrupted" | "failed";
interface Reporter {
	onInit?: (vitest: Vitest) => void;
	/**
	* Called when the project initiated the browser instance.
	* project.browser will always be defined.
	*/
	onBrowserInit?: (project: TestProject) => Awaitable<void>;
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
	* Called when artifacts are recorded on tests via the `recordArtifact` utility.
	*/
	onTestCaseArtifactRecord?: (testCase: TestCase, artifact: TestArtifact) => Awaitable<void>;
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

interface BlobOptions {
	outputFile?: string;
}
declare class BlobReporter implements Reporter {
	start: number;
	ctx: Vitest;
	options: BlobOptions;
	coverage: unknown | undefined;
	constructor(options: BlobOptions);
	onInit(ctx: Vitest): void;
	onCoverage(coverage: unknown): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>, unhandledErrors: ReadonlyArray<SerializedError>): Promise<void>;
}
interface MergedBlobs {
	files: File[];
	errors: unknown[];
	coverages: unknown[];
	executionTimes: number[];
}

declare class StateManager {
	filesMap: Map<string, File[]>;
	pathsSet: Set<string>;
	idMap: Map<string, Task>;
	taskFileMap: WeakMap<Task, File>;
	errorsSet: Set<unknown>;
	leakSet: Set<AsyncLeak>;
	reportedTasksMap: WeakMap<Task, TestModule | TestCase | TestSuite>;
	blobs?: MergedBlobs;
	transformTime: number;
	metadata: Record<string, {
		externalized: Record<string, string>;
		duration: Record<string, number[]>;
		tmps: Record<string, string>;
		dumpDir?: string;
		outline?: {
			externalized: number;
			inlined: number;
		};
	}>;
	onUnhandledError?: OnUnhandledErrorCallback;
	constructor(options: {
		onUnhandledError?: OnUnhandledErrorCallback;
	});
	catchError(error: unknown, type: string): void;
	catchLeaks(leaks: AsyncLeak[]): void;
	clearErrors(): void;
	getUnhandledErrors(): unknown[];
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
	getReportedEntityById(taskId: string): TestModule | TestCase | TestSuite | undefined;
	updateTasks(packs: TaskResultPack[]): void;
	updateUserLog(log: UserConsoleLog): void;
	getCountOfFailedTests(): number;
	cancelFiles(files: FileSpecification[], project: TestProject): void;
}

declare class VitestWatcher {
	private vitest;
	/**
	* Modules that will be invalidated on the next run.
	*/
	readonly invalidates: Set<string>;
	/**
	* Test files that have changed and need to be rerun.
	*/
	readonly changedTests: Set<string>;
	private readonly _onRerun;
	constructor(vitest: Vitest);
	close(): void;
	unregisterWatcher: () => void;
	registerWatcher(): this;
	private scheduleRerun;
	private getTestFilesFromWatcherTrigger;
	onFileChange: (id: string) => void;
	onFileDelete: (id: string) => void;
	onFileCreate: (id: string) => void;
	private handleSetupFile;
	/**
	* @returns A value indicating whether rerun is needed (changedTests was mutated)
	*/
	private handleFileChanged;
}
interface WatcherTriggerPattern {
	pattern: RegExp;
	testsToRun: (file: string, match: RegExpMatchArray) => string[] | string | null | undefined | void;
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
	/**
	* A watcher handler. This is not the file system watcher. The handler only
	* exposes methods to handle changed files.
	*
	* If you have your own watcher, you can use these methods to replicate
	* Vitest behaviour.
	*/
	readonly watcher: VitestWatcher;
	/**
	* The version control system provider used to detect changed files.
	* This is used with the `--changed` flag to determine which test files to run.
	* By default, Vitest uses Git. You can provide a custom implementation via
	* `experimental.vcsProvider` in your config.
	*/
	vcs: VCSProvider;
	private isFirstRun;
	private restartsCount;
	private readonly specifications;
	private pool;
	private _vite?;
	private _state?;
	private _cache?;
	private _snapshot?;
	private _coverageProvider?;
	constructor(mode: VitestRunMode, cliOptions: UserConfig, options?: VitestOptions);
	private _onRestartListeners;
	private _onClose;
	private _onSetServer;
	private _onCancelListeners;
	private _onUserTestsRerun;
	private _onFilterWatchedSpecification;
	/**
	* The global config.
	*/
	get config(): ResolvedConfig;
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
	listTags(): Promise<void>;
	enableCoverage(): Promise<void>;
	disableCoverage(): void;
	private clearAllCachePaths;
	private _coverageOverrideCache;
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
	/**
	* Return project that has the root (or "global") config.
	*/
	getRootProject(): TestProject;
	get serializedRootConfig(): SerializedRootConfig;
	getProjectByName(name: string): TestProject;
	/**
	* Import a file using Vite module runner. The file will be transformed by Vite and executed in a separate context.
	* @param moduleId The ID of the module in Vite module graph
	*/
	import<T>(moduleId: string): Promise<T>;
	/**
	* Creates a coverage provider if `coverage` is enabled in the config.
	*/
	createCoverageProvider(): Promise<CoverageProvider | null>;
	private resolveProjects;
	/**
	* Glob test files in every project and create a TestSpecification for each file and pool.
	* @param filters String filters to match the test files.
	*/
	globTestSpecifications(filters?: string[]): Promise<TestSpecification[]>;
	private initCoverageProvider;
	/**
	* Deletes all Vitest caches, including `experimental.fsModuleCache`.
	* @experimental
	*/
	experimental_clearCache(): Promise<void>;
	/**
	* Merge reports from multiple runs located in the specified directory (value from `--merge-reports` if not specified).
	*/
	mergeReports(directory?: string): Promise<TestRunResult>;
	/**
	* Returns the seed, if tests are running in a random order.
	*/
	getSeed(): number | null;
	collect(filters?: string[], options?: {
		staticParse?: boolean;
		staticParseConcurrency?: number;
	}): Promise<TestRunResult>;
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
	* @deprecated use `standalone()` instead
	*/
	init(): Promise<void>;
	/**
	* Initialize reporters and the coverage provider. This method doesn't run any tests.
	* If the `--watch` flag is provided, Vitest will still run changed tests even if this method was not called.
	*/
	standalone(): Promise<void>;
	/**
	* If there is a test run happening, returns a promise that will
	* resolve when the test run is finished.
	*/
	waitForTestRunEnd(): Promise<void>;
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
	* Runs tests for the given file paths. This does not trigger `onWatcher*` events.
	* @param filepaths A list of file paths to run tests for.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	runTestFiles(filepaths: string[], allTestsRun?: boolean): Promise<TestRunResult>;
	/**
	* Rerun files and trigger `onWatcherRerun`, `onWatcherStart` and `onTestsRerun` events.
	* @param specifications A list of specifications to run.
	* @param allTestsRun Indicates whether all tests were run. This only matters for coverage.
	*/
	rerunTestSpecifications(specifications: TestSpecification[], allTestsRun?: boolean): Promise<TestRunResult>;
	private runFiles;
	/**
	* Returns module's diagnostic. If `testModule` is not provided, `selfTime` and `totalTime` will be aggregated across all tests.
	*
	* If the module was not transformed or executed, the diagnostic will be empty.
	* @experimental
	* @see {@link https://vitest.dev/api/advanced/vitest#getsourcemodulediagnostic}
	*/
	experimental_getSourceModuleDiagnostic(moduleId: string, testModule?: TestModule): Promise<SourceModuleDiagnostic>;
	experimental_parseSpecifications(specifications: TestSpecification[], options?: {
		/** @default os.availableParallelism() */
		concurrency?: number;
	}): Promise<TestModule[]>;
	experimental_parseSpecification(specification: TestSpecification): Promise<TestModule>;
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
	* Returns the regexp used for the global test name pattern.
	*/
	getGlobalTestNamePattern(): RegExp | undefined;
	/**
	* Resets the global test name pattern. This method doesn't run any tests.
	*/
	resetGlobalTestNamePattern(): void;
	private _rerunTimer;
	private scheduleRerun;
	/**
	* Invalidate a file in all projects.
	*/
	invalidateFile(filepath: string): void;
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
	onCancel(fn: (reason: CancelReason) => Awaitable<void>): () => void;
	/**
	* Register a handler that will be called when the server is closed.
	*/
	onClose(fn: () => Awaitable<void>): void;
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

interface BrowserModuleMocker {
	register: (sessionId: string, module: MockedModule) => Promise<void>;
	delete: (sessionId: string, url: string) => Promise<void>;
	clear: (sessionId: string) => Promise<void>;
}
interface BrowserProviderOption<Options extends object = object> {
	name: string;
	supportedBrowser?: ReadonlyArray<string>;
	options: Options;
	providerFactory: (project: TestProject) => BrowserProvider;
	serverFactory: BrowserServerFactory;
}
interface BrowserServerOptions {
	project: TestProject;
	coveragePlugin: () => Plugin;
	mocksPlugins: (options: {
		filter: (id: string) => boolean;
	}) => Plugin[];
	metaEnvReplacer: () => Plugin;
}
interface BrowserServerFactory {
	(options: BrowserServerOptions): Promise<ParentProjectBrowser>;
}
interface BrowserProvider {
	name: string;
	mocker?: BrowserModuleMocker;
	readonly initScripts?: string[];
	/**
	* @experimental opt-in into file parallelisation
	*/
	supportsParallelism: boolean;
	getCommandsContext: (sessionId: string) => Record<string, unknown>;
	openPage: (sessionId: string, url: string, options: {
		parallel: boolean;
	}) => Promise<void>;
	getCDPSession?: (sessionId: string) => Promise<CDPSession>;
	close: () => Awaitable<void>;
}
type BrowserBuiltinProvider = "webdriverio" | "playwright" | "preview";
interface _BrowserNames {}
type UnsupportedProperties = "browser" | "typecheck" | "alias" | "sequence" | "root" | "pool" | "runner" | "api" | "deps" | "environment" | "environmentOptions" | "server" | "benchmark" | "name";
interface BrowserInstanceOption extends Omit<ProjectConfig, UnsupportedProperties>, Pick<BrowserConfigOptions, "headless" | "locators" | "viewport" | "testerHtmlPath" | "screenshotDirectory" | "screenshotFailures"> {
	/**
	* Name of the browser
	*/
	browser: keyof _BrowserNames extends never ? string : _BrowserNames[keyof _BrowserNames];
	name?: string;
	provider?: BrowserProviderOption;
}
interface BrowserConfigOptions {
	/**
	* if running tests in the browser should be the default
	*
	* @default false
	*/
	enabled?: boolean;
	/**
	* Configurations for different browser setups
	*/
	instances?: BrowserInstanceOption[];
	/**
	* Browser provider
	* @example
	* ```ts
	* import { playwright } from '@vitest/browser-playwright'
	* export default defineConfig({
	*   test: {
	*     browser: {
	*       provider: playwright(),
	*     },
	*   },
	* })
	* ```
	*/
	provider?: BrowserProviderOption;
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
	* @deprecated use top-level `isolate` instead
	*/
	isolate?: boolean;
	/**
	* Run test files in parallel if provider supports this option
	* This option only has effect in headless mode (enabled in CI by default)
	*
	* @default // Same as "test.fileParallelism"
	* @deprecated use top-level `fileParallelism` instead
	*/
	fileParallelism?: boolean;
	/**
	* Show Vitest UI
	*
	* @default !process.env.CI
	*/
	ui?: boolean;
	/**
	* Default position for the details panel in browser mode
	* 'right' shows the details panel on the right side (horizontal split)
	* 'bottom' shows the details panel at the bottom (vertical split)
	* @default 'right'
	*/
	detailsPanelPosition?: "right" | "bottom";
	/**
	* Default viewport size
	*/
	viewport?: {
		/**
		* Width of the viewport
		* @default 414
		*/
		width: number;
		/**
		* Height of the viewport
		* @default 896
		*/
		height: number;
	};
	/**
	* Locator options
	*/
	locators?: {
		/**
		* Attribute used to locate elements by test id
		* @default 'data-testid'
		*/
		testIdAttribute?: string;
		/**
		* Should locators match the text exactly by default
		* @default false
		*/
		exact?: boolean;
	};
	/**
	* Generate traces that can be viewed on https://trace.playwright.dev/
	*
	* This option is supported only by **playwright** provider.
	*/
	trace?: BrowserTraceViewMode | {
		mode: BrowserTraceViewMode;
		/**
		* The directory where all traces will be stored. By default, Vitest
		* stores all traces in `__traces__` folder close to the test file.
		*/
		tracesDir?: string;
		/**
		* Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.
		* @default true
		*/
		screenshots?: boolean;
		/**
		* If this option is true tracing will
		* - capture DOM snapshot on every action
		* - record network activity
		* @default true
		*/
		snapshots?: boolean;
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
	* Path to the index.html file that will be used to run tests.
	*/
	testerHtmlPath?: string;
	/**
	* Scripts injected into the main window.
	*/
	orchestratorScripts?: BrowserScript[];
	/**
	* Commands that will be executed on the server
	* via the browser `import("vitest/browser").commands` API.
	* @see {@link https://vitest.dev/api/browser/commands}
	*/
	commands?: Record<string, BrowserCommand<any>>;
	/**
	* Timeout for connecting to the browser
	* @default 30000
	*/
	connectTimeout?: number;
	expect?: {
		toMatchScreenshot?: { [ComparatorName in keyof ToMatchScreenshotComparators] : {
			/**
			* The name of the comparator to use for visual diffing.
			*
			* @defaultValue `'pixelmatch'`
			*/
			comparatorName?: ComparatorName;
			comparatorOptions?: ToMatchScreenshotComparators[ComparatorName];
		} }[keyof ToMatchScreenshotComparators] & ToMatchScreenshotOptions;
	};
	/**
	* Enables tracking uncaught errors and exceptions so they can be reported by Vitest.
	*
	* If you need to hide certain errors, it is recommended to use [`onUnhandledError`](https://vitest.dev/config/onunhandlederror) option instead.
	*
	* Disabling this will completely remove all Vitest error handlers, which can help debugging with the "Pause on exceptions" checkbox turned on.
	* @default true
	*/
	trackUnhandledErrors?: boolean;
}
interface BrowserCommandContext {
	testPath: string | undefined;
	provider: BrowserProvider;
	project: TestProject;
	sessionId: string;
	triggerCommand: <K extends keyof BrowserCommands>(name: K, ...args: Parameters<BrowserCommands[K]>) => ReturnType<BrowserCommands[K]>;
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
	vite: ViteDevServer;
}
interface ProjectBrowser {
	vite: ViteDevServer;
	state: BrowserServerState;
	provider: BrowserProvider;
	close: () => Promise<void>;
	initBrowserProvider: (project: TestProject) => Promise<void>;
	parseStacktrace: (stack: string) => ParsedStack[];
	parseErrorStacktrace: (error: TestError, options?: StackTraceParserOptions) => ParsedStack[];
	registerCommand: <K extends keyof BrowserCommands>(name: K, cb: BrowserCommand<Parameters<BrowserCommands[K]>, ReturnType<BrowserCommands[K]>>) => void;
	triggerCommand: <K extends keyof BrowserCommands>(name: K, context: BrowserCommandContext, ...args: Parameters<BrowserCommands[K]>) => ReturnType<BrowserCommands[K]>;
}
interface BrowserCommand<
	Payload extends unknown[] = [],
	ReturnValue = any
> {
	(context: BrowserCommandContext, ...payload: Payload): Awaitable<ReturnValue>;
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
	enabled: boolean;
	headless: boolean;
	isolate: boolean;
	fileParallelism: boolean;
	api: ApiConfig;
	ui: boolean;
	viewport: {
		width: number;
		height: number;
	};
	screenshotFailures: boolean;
	locators: {
		testIdAttribute: string;
		exact: boolean;
	};
	trace: {
		mode: BrowserTraceViewMode;
		tracesDir?: string;
		screenshots?: boolean;
		snapshots?: boolean;
		sources?: boolean;
	};
}
type ToMatchScreenshotResolvePath = (data: {
	/**
	* Path **without** extension, sanitized and relative to the test file.
	*
	* This comes from the arguments passed to `toMatchScreenshot`; if called
	* without arguments this will be the auto-generated name.
	*
	* @example
	* test('calls `onClick`', () => {
	*   expect(locator).toMatchScreenshot()
	*   // arg = "calls-onclick-1"
	* })
	*
	* @example
	* expect(locator).toMatchScreenshot('foo/bar/baz.png')
	* // arg = "foo/bar/baz"
	*
	* @example
	* expect(locator).toMatchScreenshot('../foo/bar/baz.png')
	* // arg = "foo/bar/baz"
	*/
	arg: string;
	/**
	* Screenshot extension, with leading dot.
	*
	* This can be set through the arguments passed to `toMatchScreenshot`, but
	* the value will fall back to `'.png'` if an unsupported extension is used.
	*/
	ext: string;
	/**
	* The instance's browser name.
	*/
	browserName: string;
	/**
	* The value of {@linkcode process.platform}.
	*/
	platform: NodeJS.Platform;
	/**
	* The value provided to
	* {@linkcode https://vitest.dev/config/browser/screenshotdirectory|browser.screenshotDirectory},
	* if none is provided, its default value.
	*/
	screenshotDirectory: string;
	/**
	* Absolute path to the project's
	* {@linkcode https://vitest.dev/config/root|root}.
	*/
	root: string;
	/**
	* Path to the test file, relative to the project's
	* {@linkcode https://vitest.dev/config/root|root}.
	*/
	testFileDirectory: string;
	/**
	* The test's filename.
	*/
	testFileName: string;
	/**
	* The {@linkcode https://vitest.dev/api/#test|test}'s name, including
	* parent {@linkcode https://vitest.dev/api/#describe|describe}, sanitized.
	*/
	testName: string;
	/**
	* The value provided to
	* {@linkcode https://vitest.dev/config/attachmentsdir|attachmentsDir},
	* if none is provided, its default value.
	*/
	attachmentsDir: string;
}) => string;
interface ToMatchScreenshotOptions {
	/**
	* Overrides default reference screenshot path.
	*
	* @default `${root}/${testFileDirectory}/${screenshotDirectory}/${testFileName}/${arg}-${browserName}-${platform}${ext}`
	*/
	resolveScreenshotPath?: ToMatchScreenshotResolvePath;
	/**
	* Overrides default screenshot path used for diffs.
	*
	* @default `${root}/${attachmentsDir}/${testFileDirectory}/${testFileName}/${arg}-${browserName}-${platform}${ext}`
	*/
	resolveDiffPath?: ToMatchScreenshotResolvePath;
}
interface ToMatchScreenshotComparators {}

declare class TestProject {
	options?: InitializeProjectOptions | undefined;
	/**
	* The global Vitest instance.
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
	/**
	* Temporary directory for the project. This is unique for each project. Vitest stores transformed content here.
	*/
	readonly tmpDir: string;
	private runner;
	private closingPromise;
	private typecheckFilesList;
	private _globalSetups?;
	private _provided;
	constructor(vitest: Vitest, options?: InitializeProjectOptions | undefined, tmpDir?: string);
	/**
	* The unique hash of this project. This value is consistent between the reruns.
	*
	* It is based on the root of the project (not consistent between OS) and its name.
	*/
	get hash(): string;
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
	createSpecification(moduleId: string, locationsOrOptions?: number[] | TestSpecificationOptions | undefined, pool?: string): TestSpecification;
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
	/**
	* Check if this is the root project. The root project is the one that has the root config.
	*/
	isRootProject(): boolean;
	onTestsRerun(cb: OnTestsRerunHandler): void;
	/**
	* Get all files in the project that match the globs in the config and the filters.
	* @param filters String filters to match the test files.
	*/
	globTestFiles(filters?: string[]): Promise<{
		/**
		* Test files that match the filters.
		*/
		testFiles: string[];
		/**
		* Typecheck test files that match the filters. This will be empty unless `typecheck.enabled` is `true`.
		*/
		typecheckTestFiles: string[];
	}>;
	private globAllTestFiles;
	isBrowserEnabled(): boolean;
	private markTestFile;
	/**
	* Test if a file matches the test globs. This does the actual glob matching if the test is not cached, unlike `isCachedTestFile`.
	*/
	matchesTestGlob(moduleId: string, source?: () => string): boolean;
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
	private _setHash;
	private _serializeOverriddenConfig;
	private clearTmpDir;
}
interface SerializedTestProject {
	name: string;
	serializedConfig: SerializedConfig;
	context: ProvidedContext;
}
interface InitializeProjectOptions extends TestProjectInlineConfiguration {
	configFile: string | false;
}

interface PoolRunnerInitializer {
	readonly name: string;
	createPoolWorker: (options: PoolOptions) => PoolWorker;
}
interface PoolOptions {
	distPath: string;
	project: TestProject;
	method: "run" | "collect";
	cacheFs?: boolean;
	environment: ContextTestEnvironment;
	execArgv: string[];
	env: Partial<NodeJS.ProcessEnv>;
}
interface PoolWorker {
	readonly name: string;
	readonly reportMemory?: boolean;
	readonly cacheFs?: boolean;
	on: (event: string, callback: (arg: any) => void) => void;
	off: (event: string, callback: (arg: any) => void) => void;
	send: (message: WorkerRequest) => void;
	deserialize: (data: unknown) => unknown;
	start: () => Promise<void>;
	stop: () => Promise<void>;
	/**
	* This is called on workers that already satisfy certain constraints:
	* - The task has the same worker name
	* - The task has the same project
	*/
	canReuse?: (task: PoolTask) => boolean;
}
interface PoolTask {
	worker: "forks" | "threads" | "vmForks" | "vmThreads" | (string & {});
	project: TestProject;
	isolate: boolean;
	/**
	* Custom `process.env`. All tasks in the same project will reference the same object,
	* so modifying it once will modify it for every task.
	*/
	env: Partial<NodeJS.ProcessEnv>;
	/**
	* Custom `execArgv`. All tasks in the same project will reference the same array,
	* so modifying it once will modify it for every task.
	*/
	execArgv: string[];
	context: WorkerExecuteContext;
	memoryLimit: number | null;
}
type WorkerRequest = {
	__vitest_worker_request__: true;
} & ({
	type: "start";
	poolId: number;
	workerId: WorkerExecuteContext["workerId"];
	options: {
		reportMemory: boolean;
	};
	context: {
		environment: WorkerTestEnvironment;
		config: SerializedConfig;
		pool: string;
	};
	traces: {
		enabled: boolean;
		sdkPath?: string;
		otelCarrier?: OTELCarrier;
	};
} | {
	type: "stop";
	otelCarrier?: OTELCarrier;
} | {
	type: "run";
	context: WorkerExecuteContext;
	otelCarrier?: OTELCarrier;
} | {
	type: "collect";
	context: WorkerExecuteContext;
	otelCarrier?: OTELCarrier;
} | {
	type: "cancel";
});
type WorkerResponse = {
	__vitest_worker_response__: true;
} & ({
	type: "started";
	error?: unknown;
} | {
	type: "stopped";
	error?: unknown;
} | {
	type: "testfileFinished";
	usedMemory?: number;
	error?: unknown;
});

interface BaseOptions {
	isTTY?: boolean;
	silent?: boolean | "passed-only";
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
	protected silent?: boolean | "passed-only";
	private _filesInWatchMode;
	private _timeStart;
	constructor(options?: BaseOptions);
	onInit(ctx: Vitest): void;
	log(...messages: any): void;
	error(...messages: any): void;
	relative(path: string): string;
	onTestRunStart(_specifications: ReadonlyArray<TestSpecification>): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>, unhandledErrors: ReadonlyArray<SerializedError>, _reason: TestRunEndReason): void;
	onTestCaseResult(testCase: TestCase): void;
	onTestSuiteResult(testSuite: TestSuite): void;
	onTestModuleEnd(testModule: TestModule): void;
	protected logFailedTask(task: Task): void;
	protected printTestModule(testModule: TestModule): void;
	protected printTestCase(moduleState: TestModuleState, test: TestCase): void;
	private getModuleLog;
	protected printTestSuite(testSuite: TestSuite): void;
	protected getTestName(test: Task, _separator?: string): string;
	protected getFullName(test: Task, separator?: string): string;
	protected getTestIndentation(test: Task): string;
	protected printAnnotations(test: TestCase, console: "log" | "error", padding?: number): void;
	protected getEntityPrefix(entity: TestCase | TestModule | TestSuite): string;
	protected getTestCaseSuffix(testCase: TestCase): string;
	protected getStateSymbol(test: TestCase | TestModule | TestSuite): string;
	private getDurationPrefix;
	onWatcherStart(files?: File[], errors?: unknown[]): void;
	onWatcherRerun(files: string[], trigger?: string): void;
	onUserConsoleLog(log: UserConsoleLog, taskState?: TestResult["state"]): void;
	onTestRemoved(trigger?: string): void;
	shouldLog(log: UserConsoleLog, taskState?: TestResult["state"]): boolean;
	onServerRestart(reason?: string): void;
	reportSummary(files: File[], errors: unknown[]): void;
	reportTestSummary(files: File[], errors: unknown[], leakCount: number): void;
	private reportImportDurations;
	private importDurationTime;
	private ellipsisPath;
	private printErrorsSummary;
	private printLeaksSummary;
	reportBenchmarkSummary(files: File[]): void;
	private printTaskErrors;
}

interface DefaultReporterOptions extends BaseOptions {
	summary?: boolean;
}
declare class DefaultReporter extends BaseReporter {
	private options;
	private summary?;
	constructor(options?: DefaultReporterOptions);
	onTestRunStart(specifications: ReadonlyArray<TestSpecification>): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>, unhandledErrors: ReadonlyArray<SerializedError>, reason: TestRunEndReason): void;
	onTestModuleQueued(file: TestModule): void;
	onTestModuleCollected(module: TestModule): void;
	onTestModuleEnd(module: TestModule): void;
	onTestCaseReady(test: TestCase): void;
	onTestCaseResult(test: TestCase): void;
	onHookStart(hook: ReportedHookContext): void;
	onHookEnd(hook: ReportedHookContext): void;
	onInit(ctx: Vitest): void;
}

interface GithubActionsReporterOptions {
	onWritePath?: (path: string) => string;
	/**
	* @default true
	*/
	displayAnnotations?: boolean;
	/**
	* Configuration for the GitHub Actions Job Summary.
	*
	* When enabled, a markdown summary of test results is written to the path specified by `outputPath`.
	*/
	jobSummary?: Partial<JobSummaryOptions>;
}
interface JobSummaryOptions {
	/**
	* Whether to generate the summary.
	*
	* @default true
	*/
	enabled: boolean;
	/**
	* File path to write the summary to.
	*
	* @default process.env.GITHUB_STEP_SUMMARY
	*/
	outputPath: string | undefined;
	/**
	* Configuration for generating permalink URLs to source files in the GitHub repository.
	*
	* When all three values are available (either from this config or the defaults picked from environment variables), test names in the summary will link to the relevant source lines.
	*/
	fileLinks: {
		/**
		* The GitHub repository in `owner/repo` format.
		*
		* @default process.env.GITHUB_REPOSITORY
		*/
		repository?: string | undefined;
		/**
		* The commit SHA to use in permalink URLs.
		*
		* @default process.env.GITHUB_SHA
		*/
		commitHash?: string | undefined;
		/**
		* The absolute path to the root of the repository on disk.
		*
		* This value is used to compute relative file paths for the permalink URLs.
		*
		* @default process.env.GITHUB_WORKSPACE
		*/
		workspacePath?: string | undefined;
	};
}
type ResolvedOptions = Required<GithubActionsReporterOptions>;
declare class GithubActionsReporter implements Reporter {
	ctx: Vitest;
	options: ResolvedOptions;
	constructor(options?: GithubActionsReporterOptions);
	onInit(ctx: Vitest): void;
	onTestCaseAnnotate(testCase: TestCase, annotation: TestAnnotation): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>, unhandledErrors: ReadonlyArray<SerializedError>): void;
}

interface HTMLOptions {
	outputFile?: string;
}

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
	tags: string[];
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
interface JsonOptions {
	outputFile?: string;
	/** @experimental */
	filterMeta?: (key: string, value: unknown) => unknown;
}
declare class JsonReporter implements Reporter {
	start: number;
	ctx: Vitest;
	options: JsonOptions;
	coverageMap?: CoverageMap;
	constructor(options: JsonOptions);
	onInit(ctx: Vitest): void;
	onCoverage(coverageMap: unknown): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>): Promise<void>;
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
	/**
	* Hostname to use in the report. By default, it uses os.hostname()
	*/
	hostname?: string;
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
	onTestRunEnd(testModules: ReadonlyArray<TestModule>): Promise<void>;
}

declare class DotReporter extends BaseReporter {
	private renderer?;
	private tests;
	private finishedTests;
	onInit(ctx: Vitest): void;
	printTestModule(): void;
	onTestRunStart(_specifications: ReadonlyArray<TestSpecification>): void;
	onWatcherRerun(files: string[], trigger?: string): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>, unhandledErrors: ReadonlyArray<SerializedError>, reason: TestRunEndReason): void;
	onTestModuleCollected(module: TestModule): void;
	onTestCaseReady(test: TestCase): void;
	onTestCaseResult(test: TestCase): void;
	onTestModuleEnd(testModule: TestModule): void;
	private createSummary;
}

declare class HangingProcessReporter implements Reporter {
	whyRunning: (() => void) | undefined;
	onInit(): void;
	onProcessTimeout(): void;
}

declare class MinimalReporter extends DefaultReporter {
	renderSucceed: boolean;
	constructor(options?: DefaultReporterOptions);
	onTestRunStart(specifications: ReadonlyArray<TestSpecification>): void;
	protected printTestModule(testModule: TestModule): void;
	protected printTestCase(moduleState: TestModuleState, test: TestCase): void;
}

declare class TapReporter implements Reporter {
	protected ctx: Vitest;
	private logger;
	onInit(ctx: Vitest): void;
	static getComment(task: Task): string;
	private logErrorDetails;
	protected logTasks(tasks: Task[]): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>): void;
}

declare class TapFlatReporter extends TapReporter {
	onInit(ctx: Vitest): void;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>): void;
}

declare class TreeReporter extends DefaultReporter {
	protected verbose: boolean;
	renderSucceed: boolean;
}

declare class VerboseReporter extends DefaultReporter {
	protected verbose: boolean;
	renderSucceed: boolean;
	printTestModule(_module: TestModule): void;
	onTestCaseResult(test: TestCase): void;
}

type FormattedBenchmarkResult = BenchmarkResult & {
	id: string;
};

declare function renderTable(options: {
	tasks: Task[];
	level: number;
	shallow?: boolean;
	showHeap: boolean;
	columns: number;
	slowTestThreshold: number;
	compare?: Record<Task["id"], FormattedBenchmarkResult>;
}): string;

declare class BenchmarkReporter extends DefaultReporter {
	compare?: Parameters<typeof renderTable>[0]["compare"];
	onInit(ctx: Vitest): Promise<void>;
	onTaskUpdate(packs: TaskResultPack[]): void;
	onTestSuiteResult(testSuite: TestSuite): void;
	protected printTestModule(testModule: TestModule): void;
	private printSuiteTable;
	onTestRunEnd(testModules: ReadonlyArray<TestModule>, unhandledErrors: ReadonlyArray<SerializedError>, reason: TestRunEndReason): Promise<void>;
}

declare class VerboseBenchmarkReporter extends BenchmarkReporter {
	protected verbose: boolean;
}

declare const BenchmarkReportsMap: {
	default: typeof BenchmarkReporter;
	verbose: typeof VerboseBenchmarkReporter;
};
type BenchmarkBuiltinReporters = keyof typeof BenchmarkReportsMap;

declare const ReportersMap: {
	default: typeof DefaultReporter;
	agent: typeof MinimalReporter;
	minimal: typeof MinimalReporter;
	blob: typeof BlobReporter;
	verbose: typeof VerboseReporter;
	dot: typeof DotReporter;
	json: typeof JsonReporter;
	tap: typeof TapReporter;
	"tap-flat": typeof TapFlatReporter;
	junit: typeof JUnitReporter;
	tree: typeof TreeReporter;
	"hanging-process": typeof HangingProcessReporter;
	"github-actions": typeof GithubActionsReporter;
};
type BuiltinReporters = keyof typeof ReportersMap;
interface BuiltinReporterOptions {
	"default": DefaultReporterOptions;
	"minimal": DefaultReporterOptions;
	"agent": DefaultReporterOptions;
	"verbose": DefaultReporterOptions;
	"dot": BaseOptions;
	"tree": BaseOptions;
	"json": JsonOptions;
	"blob": BlobOptions;
	"tap": never;
	"tap-flat": never;
	"junit": JUnitOptions;
	"hanging-process": never;
	"html": HTMLOptions;
	"github-actions": GithubActionsReporterOptions;
}

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
	* Custom reporters to use for output. Can contain one or more built-in reporter names, reporter instances,
	* and/or paths to custom reporter files to import.
	*
	* @default ['default']
	*/
	reporters?: Arrayable<BenchmarkBuiltinReporters | Reporter | (string & {})>;
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

type BuiltinEnvironment = "node" | "jsdom" | "happy-dom" | "edge-runtime";
type VitestEnvironment = BuiltinEnvironment | (string & Record<never, never>);
type CSSModuleScopeStrategy = "stable" | "scoped" | "non-scoped";
type ApiConfig = Pick<ServerOptions, "port" | "strictPort" | "host" | "middlewareMode"> & {
	/**
	* Allow any write operations from the API server.
	*
	* @default true if `api.host` is exposed to network, false otherwise
	*/
	allowWrite?: boolean;
	/**
	* Allow running test files via the API.
	* If `api.host` is exposed to network and `allowWrite` is true,
	* anyone connected to the API server can run arbitrary code on your machine.
	*
	* @default true if `api.host` is exposed to network, false otherwise
	*/
	allowExec?: boolean;
};
interface EnvironmentOptions {
	/**
	* jsdom options.
	*/
	jsdom?: JSDOMOptions;
	happyDOM?: HappyDOMOptions;
	[x: string]: unknown;
}

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
		files?: boolean;
		/**
		* Should tests run in random order.
		* @default false
		*/
		tests?: boolean;
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
	enabled?: boolean;
};
interface DepsOptions {
	/**
	* Enable dependency optimization. This can improve the performance of your tests.
	*/
	optimizer?: Partial<Record<"client" | "ssr" | ({} & string), DepsOptimizationOptions>>;
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
		transformAssets?: boolean;
		/**
		* Should Vitest process CSS (.css, .scss, .sass, etc) files and resolve them like Vite does in the browser.
		*
		* If CSS files are disabled with `css` options, this option will just silence UNKNOWN_EXTENSION errors.
		*
		* **At the moment, this option only works with `{ pool: 'vmThreads' }`.**
		*
		* @default true
		*/
		transformCss?: boolean;
		/**
		* Regexp pattern to match external files that should be transformed.
		*
		* By default, files inside `node_modules` are externalized and not transformed.
		*
		* **At the moment, this option only works with `{ pool: 'vmThreads' }`.**
		*
		* @default []
		*/
		transformGlobPattern?: RegExp | RegExp[];
	};
	/**
	* Interpret CJS module's default as named exports
	*
	* @default true
	*/
	interopDefault?: boolean;
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
type BuiltinPool = "browser" | "threads" | "forks" | "vmThreads" | "vmForks" | "typescript";
type Pool = BuiltinPool | (string & {});
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
	* A list of [glob patterns](https://superchupu.dev/tinyglobby/comparison) that match your test files.
	*
	* @default ['**\/*.{test,spec}.?(c|m)[jt]s?(x)']
	* @see {@link https://vitest.dev/config/include}
	*/
	include?: string[];
	/**
	* Exclude globs for test files
	* @default ['**\/node_modules/**', '**\/.git/**']
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
	server?: {
		deps?: ServerDepsOptions;
		debug?: {
			/**
			* The folder where Vitest stores the contents of transformed
			* test files that can be inspected manually.
			*
			* If `true`, Vitest dumps the files in `.vitest-dump` folder relative to the root of the project.
			*
			* You can also use `VITEST_DEBUG_DUMP` env variable to enable this.
			*/
			dump?: string | true;
			/**
			* If dump is enabled, should Vitest load the files from there instead of transforming them.
			*
			* You can also use `VITEST_DEBUG_LOAD_DUMP` env variable to enable this.
			*/
			load?: boolean;
		};
	};
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
	* Run tests in an isolated environment. This option has no effect on vmThreads pool.
	*
	* Disabling this option improves performance if your code doesn't rely on side effects.
	*
	* @default true
	*/
	isolate?: boolean;
	/**
	* Pass additional arguments to `node` process when spawning the worker.
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
	/**
	* Specifies the memory limit for `worker_thread` or `child_process` before they are recycled.
	* If you see memory leaks, try to tinker this value.
	*/
	vmMemoryLimit?: string | number;
	/**
	* Pool used to run tests in.
	*
	* Supports 'threads', 'forks', 'vmThreads', 'vmForks'
	*
	* @default 'forks'
	*/
	pool?: Exclude<Pool, "browser"> | PoolRunnerInitializer;
	/**
	* Maximum number or percentage of workers to run tests in.
	*/
	maxWorkers?: number | string;
	/**
	* Should all test files run in parallel. Doesn't affect tests running in the same file.
	* Setting this to `false` will override `maxWorkers` option to `1`.
	*
	* @default true
	*/
	fileParallelism?: boolean;
	/**
	* Options for projects
	*/
	projects?: TestProjectConfiguration[];
	/**
	* Update snapshot
	*
	* @default false
	*/
	update?: boolean | "all" | "new" | "none";
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
	* Custom reporter for output. Can contain one or more built-in reporter names, reporter instances,
	* and/or paths to custom reporters.
	*
	* @default ['default'] (or ['default', 'github-actions'] when `process.env.GITHUB_ACTIONS === 'true'`)
	*/
	reporters?: Arrayable<ReporterName | InlineReporter> | ((ReporterName | InlineReporter) | [ReporterName] | ReporterWithOptions)[];
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
	* Glob pattern of file paths that will trigger the whole suite rerun
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
	* Run test names with the specified pattern
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
	* Format options for snapshot testing.
	*/
	snapshotFormat?: Omit<PrettyFormatOptions, "plugins" | "compareKeys"> & {
		compareKeys?: null | undefined;
	};
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
	* Detect asynchronous resources leaking from the test file.
	*
	* @default false
	*/
	detectAsyncLeaks?: boolean;
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
	onConsoleLog?: (log: string, type: "stdout" | "stderr", entity: TestModule | TestCase | TestSuite | undefined) => boolean | void;
	/**
	* Enable stack trace filtering. If absent, all stack trace frames
	* will be shown.
	*
	* Return `false` to omit the frame.
	*/
	onStackTrace?: (error: TestError, frame: ParsedStack) => boolean | void;
	/**
	* A callback that can return `false` to ignore an unhandled error
	*/
	onUnhandledError?: OnUnhandledErrorCallback;
	/**
	* Indicates if CSS files should be processed.
	*
	* When excluded, the CSS files will be replaced with empty strings to bypass the subsequent processing.
	*
	* @default { include: [], modules: { classNameStrategy: false } }
	*/
	css?: boolean | {
		include?: RegExp | RegExp[];
		exclude?: RegExp | RegExp[];
		modules?: {
			classNameStrategy?: CSSModuleScopeStrategy;
		};
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
		dir: string;
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
	* Requires `fileParallelism: false`.
	*/
	inspect?: boolean | string;
	/**
	* Debug tests by opening `node:inspector` in worker / child process and wait for debugger to connect.
	* Provides similar experience as `--inspect-brk` Node CLI argument.
	*
	* Requires `fileParallelism: false`.
	*/
	inspectBrk?: boolean | string;
	/**
	* Inspector options. If `--inspect` or `--inspect-brk` is enabled, these options will be passed to the inspector.
	*/
	inspector?: {
		/**
		* Enable inspector
		*/
		enabled?: boolean;
		/**
		* Port to run inspector on
		*/
		port?: number;
		/**
		* Host to run inspector on
		*/
		host?: string;
		/**
		* Wait for debugger to connect before running tests
		*/
		waitForDebugger?: boolean;
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
		requireAssertions?: boolean;
		/**
		* Default options for expect.poll()
		*/
		poll?: {
			/**
			* Timeout in milliseconds
			* @default 1000
			*/
			timeout?: number;
			/**
			* Polling interval in milliseconds
			* @default 50
			*/
			interval?: number;
		};
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
	* Retry configuration for tests.
	* - If a number, specifies how many times to retry failed tests
	* - If an object, allows fine-grained retry control
	*
	* ⚠️ WARNING: Function form is NOT supported in a config file
	* because configurations are serialized when passed to worker threads.
	* Use the function form only in test files directly.
	*
	* @default 0 // Don't retry
	*/
	retry?: SerializableRetry;
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
	/**
	* Experimental features
	*
	* @experimental
	*/
	experimental?: {
		/**
		* Enable caching of modules on the file system between reruns.
		*/
		fsModuleCache?: boolean;
		/**
		* Path relative to the root of the project where the fs module cache will be stored.
		* @default node_modules/.experimental-vitest-cache
		*/
		fsModuleCachePath?: string;
		/**
		* {@link https://vitest.dev/guide/open-telemetry}
		*/
		openTelemetry?: {
			enabled: boolean;
			sdkPath?: string;
			browserSdkPath?: string;
		};
		/**
		* Configure import duration collection and display.
		*
		* The `limit` option controls how many imports to collect and display.
		* The `print` option controls CLI terminal output.
		* UI can always toggle the breakdown display regardless of `print` setting.
		*/
		importDurations?: {
			/**
			* When to print import breakdown to CLI terminal after tests finish.
			* - `true`: Always print
			* - `false`: Never print (default)
			* - `'on-warn'`: Print only when any import exceeds the warn threshold
			* @default false
			*/
			print?: boolean | "on-warn";
			/**
			* Maximum number of imports to collect and display.
			* @default 0 (or 10 if `print` or UI is enabled)
			*/
			limit?: number;
			/**
			* Fail the test run if any import exceeds the danger threshold.
			* When failing, the breakdown is always printed regardless of `print` setting.
			* @default false
			*/
			failOnDanger?: boolean;
			/**
			* Duration thresholds in milliseconds for coloring and warnings.
			*/
			thresholds?: {
				/**
				* Warning threshold - imports exceeding this are shown in yellow/orange.
				* @default 100
				*/
				warn?: number;
				/**
				* Danger threshold - imports exceeding this are shown in red.
				* @default 500
				*/
				danger?: number;
			};
		};
		/**
		* Controls whether Vitest uses Vite's module runner to run the code or fallback to the native `import`.
		*
		* If Node.js cannot process the code, consider registering [module loader](https://nodejs.org/api/module.html#customization-hooks) via `execArgv`.
		* @default true
		*/
		viteModuleRunner?: boolean;
		/**
		* If module runner is disabled, Vitest uses a module loader to transform files to support
		* `import.meta.vitest` and `vi.mock`.
		*
		* If you don't use these features, you can disable this.
		*
		* This option only affects `loader.load` method, Vitest always defines a `loader.resolve` to populate the module graph.
		*/
		nodeLoader?: boolean;
		/**
		* Custom provider for detecting changed files. Used with the `--changed` flag
		* to determine which files have been modified.
		*
		* By default, Vitest uses Git to detect changed files. You can provide a custom
		* implementation of the `VCSProvider` interface to use a different version control system.
		*/
		vcsProvider?: VCSProvider | string;
		/**
		* Parse test specifications before running them.
		* This will apply `.only` flag and test name pattern across all files without running them.
		*/
		preParse?: boolean;
	};
	/**
	* Define tags available in your test files.
	*
	* If test defines a tag that is not listed here, an error will be thrown.
	*/
	tags?: TestTagDefinition[];
	/**
	* Should Vitest throw an error if test has a tag that is not defined in the config.
	* @default true
	*/
	strictTags?: boolean;
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
	* If CLI file filters are passed, standalone mode is ignored.
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
	/**
	* Delete all Vitest caches, including `experimental.fsModuleCache`.
	* @experimental
	*/
	clearCache?: boolean;
	/**
	* Tags expression to filter tests to run. Multiple filters will be applied using AND logic.
	* @see {@link https://vitest.dev/guide/test-tags#syntax}
	*/
	tagsFilter?: string[];
	/**
	* Log all available tags instead of running tests.
	*/
	listTags?: boolean | "json";
}
type OnUnhandledErrorCallback = (error: (TestError | Error) & {
	type: string;
}) => boolean | void;
interface ResolvedConfig extends Omit<Required<UserConfig>, "project" | "config" | "filters" | "browser" | "coverage" | "testNamePattern" | "related" | "api" | "reporters" | "resolveSnapshotPath" | "benchmark" | "shard" | "cache" | "sequence" | "typecheck" | "runner" | "pool" | "cliExclude" | "diff" | "setupFiles" | "snapshotEnvironment" | "bail" | "name" | "vmMemoryLimit" | "fileParallelism" | "tagsFilter"> {
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
	poolRunner?: PoolRunnerInitializer;
	reporters: (InlineReporter | ReporterWithOptions)[];
	defines: Record<string, any>;
	viteDefine: Record<string, any>;
	api: ApiConfig & {
		token: string;
	};
	cliExclude?: string[];
	project: string[];
	benchmark?: Required<Omit<BenchmarkUserOptions, "outputFile" | "compare" | "outputJson">> & Pick<BenchmarkUserOptions, "outputFile" | "compare" | "outputJson">;
	shard?: {
		index: number;
		count: number;
	};
	cache: {
		/**
		* @deprecated
		*/
		dir: string;
	} | false;
	sequence: {
		sequencer: TestSequencerConstructor;
		hooks: SequenceHooks;
		setupFiles: SequenceSetupFiles;
		shuffle?: boolean;
		concurrent?: boolean;
		seed: number;
		groupOrder: number;
	};
	typecheck: Omit<TypecheckConfig, "enabled"> & {
		enabled: boolean;
	};
	runner?: string;
	maxWorkers: number;
	vmMemoryLimit?: UserConfig["vmMemoryLimit"];
	dumpDir?: string;
	tagsFilter?: string[];
	experimental: Omit<Required<UserConfig>["experimental"], "importDurations"> & {
		importDurations: {
			print: boolean | "on-warn";
			limit: number;
			failOnDanger: boolean;
			thresholds: {
				warn: number;
				danger: number;
			};
		};
	};
}
type NonProjectOptions = "shard" | "watch" | "run" | "cache" | "update" | "reporters" | "outputFile" | "teardownTimeout" | "silent" | "forceRerunTriggers" | "testNamePattern" | "ui" | "open" | "uiBase" | "snapshotFormat" | "resolveSnapshotPath" | "passWithNoTests" | "onConsoleLog" | "onStackTrace" | "dangerouslyIgnoreUnhandledErrors" | "slowTestThreshold" | "inspect" | "inspectBrk" | "coverage" | "watchTriggerPatterns" | "tagsFilter";
interface ServerDepsOptions {
	/**
	* Externalize means that Vite will bpass the package to native Node.
	*
	* Externalized dependencies will not be applied Vite's transformers and resolvers.
	* And does not support HMR on reload.
	*
	* Typically, packages under `node_modules` are externalized.
	*/
	external?: (string | RegExp)[];
	/**
	* Vite will process inlined modules.
	*
	* This could be helpful to handle packages that ship `.js` in ESM format (that Node can't handle).
	*
	* If `true`, every dependency will be inlined
	*/
	inline?: (string | RegExp)[] | true;
	/**
	* Try to guess the CJS version of a package when it's invalid ESM
	* @default false
	*/
	fallbackCJS?: boolean;
}
type ProjectConfig = Omit<InlineConfig, NonProjectOptions | "sequencer" | "deps"> & {
	mode?: string;
	sequencer?: Omit<SequenceOptions, "sequencer" | "seed">;
	deps?: Omit<DepsOptions, "moduleDirectories">;
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
	extends?: string | true;
});
type TestProjectConfiguration = string | TestProjectInlineConfiguration | Promise<UserWorkspaceConfig> | UserProjectConfigFn;

export { Logger as L, MinimalReporter as M, TestProject as T, Vitest as V, CoverageMap as a$, DefaultReporter as a0, DotReporter as a2, GithubActionsReporter as a4, HangingProcessReporter as a6, JUnitReporter as a9, TestCase as aB, TestCollection as aC, TestModule as aE, TestSuite as aP, VerboseBenchmarkReporter as aU, VerboseReporter as aV, VitestPackageInstaller as aX, experimental_getRunnerTask as a_, JsonReporter as ac, ReportersMap as ar, TapFlatReporter as ay, TapReporter as az, TestSpecification as h, BaseReporter as l, BenchmarkReporter as n, BenchmarkReportsMap as o };
export type { CustomProviderOptions as $, ApiConfig as A, BaseCoverageOptions as B, CoverageOptions as C, BrowserServerFactory as D, BrowserServerOptions as E, FieldsWithDefaultValues as F, BrowserServerState as G, BrowserServerStateSession as H, InlineConfig as I, BuiltinEnvironment as J, BuiltinReporterOptions as K, BuiltinReporters as N, CSSModuleScopeStrategy as O, PoolWorker as P, CoverageInstrumenter as Q, ResolvedConfig as R, CoverageIstanbulOptions as S, UserWorkspaceConfig as U, WatcherTriggerPattern as W, CoverageProvider as X, CoverageProviderModule as Y, CoverageReporter as Z, CoverageV8Options as _, TestProjectConfiguration as a, DepsOptimizationOptions as a1, EnvironmentOptions as a3, HTMLOptions as a5, InstrumenterOptions as a7, JUnitOptions as a8, TaskOptions as aA, TestDiagnostic as aD, TestModuleState as aF, TestResult as aG, TestResultFailed as aH, TestResultPassed as aI, TestResultSkipped as aJ, TestRunEndReason as aK, TestRunResult as aL, TestSequencerConstructor as aM, TestSpecificationOptions as aN, TestState as aO, TestSuiteState as aQ, ToMatchScreenshotComparators as aR, ToMatchScreenshotOptions as aS, TypecheckConfig as aT, VitestEnvironment as aW, WorkerResponse as aY, _BrowserNames as aZ, JsonAssertionResult as aa, JsonOptions as ab, JsonTestResult as ad, JsonTestResults as ae, ModuleDiagnostic as af, OnServerRestartHandler as ag, OnTestsRerunHandler as ah, ParentProjectBrowser as ai, Pool as aj, PoolRunnerInitializer as ak, PoolTask as al, ProjectBrowser as am, ProjectConfig as an, ReportContext as ao, ReportedHookContext as ap, Reporter as aq, ResolveSnapshotPathHandler as as, ResolveSnapshotPathHandlerContext as at, ResolvedBrowserOptions as au, ResolvedCoverageOptions as av, ResolvedProjectConfig as aw, SerializedTestProject as ax, UserProjectConfigFn as b, UserProjectConfigExport as c, TestProjectInlineConfiguration as d, UserConfig as e, VitestRunMode as f, VitestOptions as g, PoolOptions as i, WorkerRequest as j, TestSequencer as k, BenchmarkBuiltinReporters as m, BenchmarkUserOptions as p, BrowserBuiltinProvider as q, BrowserCommand as r, BrowserCommandContext as s, BrowserConfigOptions as t, BrowserInstanceOption as u, BrowserModuleMocker as v, BrowserOrchestrator as w, BrowserProvider as x, BrowserProviderOption as y, BrowserScript as z };
