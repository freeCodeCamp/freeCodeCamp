import { DiffOptions } from '@vitest/utils/diff';
import { F as File, a as Test, S as Suite, L as TaskResultPack, z as TaskEventPack, N as TestAnnotation, U as TestContext, I as ImportDuration, t as SequenceHooks, u as SequenceSetupFiles } from './tasks.d-CkscK4of.js';
export { A as AfterAllListener, b as AfterEachListener, B as BeforeAllListener, d as BeforeEachListener, g as Custom, j as CustomAPI, D as DoneCallback, E as ExtendedContext, m as Fixture, n as FixtureFn, o as FixtureOptions, p as Fixtures, H as HookCleanupCallback, q as HookListener, r as InferFixturesTypes, O as OnTestFailedHandler, f as OnTestFinishedHandler, R as RunMode, s as RuntimeContext, k as SuiteAPI, l as SuiteCollector, v as SuiteFactory, h as SuiteHooks, T as Task, w as TaskBase, x as TaskContext, y as TaskCustomOptions, e as TaskHook, G as TaskMeta, J as TaskPopulated, K as TaskResult, M as TaskState, i as TaskUpdateEvent, j as TestAPI, P as TestAnnotationLocation, Q as TestAttachment, V as TestFunction, W as TestOptions, X as Use } from './tasks.d-CkscK4of.js';
import '@vitest/utils';

/**
* This is a subset of Vitest config that's required for the runner to work.
*/
interface VitestRunnerConfig {
	root: string;
	setupFiles: string[];
	name?: string;
	passWithNoTests: boolean;
	testNamePattern?: RegExp;
	allowOnly?: boolean;
	sequence: {
		shuffle?: boolean
		concurrent?: boolean
		seed: number
		hooks: SequenceHooks
		setupFiles: SequenceSetupFiles
	};
	chaiConfig?: {
		truncateThreshold?: number
	};
	maxConcurrency: number;
	testTimeout: number;
	hookTimeout: number;
	retry: number;
	includeTaskLocation?: boolean;
	diffOptions?: DiffOptions;
}
/**
* Possible options to run a single file in a test.
*/
interface FileSpecification {
	filepath: string;
	testLocations: number[] | undefined;
}
type VitestRunnerImportSource = "collect" | "setup";
interface VitestRunnerConstructor {
	new (config: VitestRunnerConfig): VitestRunner;
}
type CancelReason = "keyboard-input" | "test-failure" | (string & Record<string, never>);
interface VitestRunner {
	/**
	* First thing that's getting called before actually collecting and running tests.
	*/
	onBeforeCollect?: (paths: string[]) => unknown;
	/**
	* Called after the file task was created but not collected yet.
	*/
	onCollectStart?: (file: File) => unknown;
	/**
	* Called after collecting tests and before "onBeforeRun".
	*/
	onCollected?: (files: File[]) => unknown;
	/**
	* Called when test runner should cancel next test runs.
	* Runner should listen for this method and mark tests and suites as skipped in
	* "onBeforeRunSuite" and "onBeforeRunTask" when called.
	*/
	cancel?: (reason: CancelReason) => unknown;
	/**
	* Called before running a single test. Doesn't have "result" yet.
	*/
	onBeforeRunTask?: (test: Test) => unknown;
	/**
	* Called before actually running the test function. Already has "result" with "state" and "startTime".
	*/
	onBeforeTryTask?: (test: Test, options: {
		retry: number
		repeats: number
	}) => unknown;
	/**
	* When the task has finished running, but before cleanup hooks are called
	*/
	onTaskFinished?: (test: Test) => unknown;
	/**
	* Called after result and state are set.
	*/
	onAfterRunTask?: (test: Test) => unknown;
	/**
	* Called right after running the test function. Doesn't have new state yet. Will not be called, if the test function throws.
	*/
	onAfterTryTask?: (test: Test, options: {
		retry: number
		repeats: number
	}) => unknown;
	/**
	* Called before running a single suite. Doesn't have "result" yet.
	*/
	onBeforeRunSuite?: (suite: Suite) => unknown;
	/**
	* Called after running a single suite. Has state and result.
	*/
	onAfterRunSuite?: (suite: Suite) => unknown;
	/**
	* If defined, will be called instead of usual Vitest suite partition and handling.
	* "before" and "after" hooks will not be ignored.
	*/
	runSuite?: (suite: Suite) => Promise<void>;
	/**
	* If defined, will be called instead of usual Vitest handling. Useful, if you have your custom test function.
	* "before" and "after" hooks will not be ignored.
	*/
	runTask?: (test: Test) => Promise<void>;
	/**
	* Called, when a task is updated. The same as "onTaskUpdate" in a reporter, but this is running in the same thread as tests.
	*/
	onTaskUpdate?: (task: TaskResultPack[], events: TaskEventPack[]) => Promise<void>;
	/**
	* Called when annotation is added via the `context.annotate` method.
	*/
	onTestAnnotate?: (test: Test, annotation: TestAnnotation) => Promise<TestAnnotation>;
	/**
	* Called before running all tests in collected paths.
	*/
	onBeforeRunFiles?: (files: File[]) => unknown;
	/**
	* Called right after running all tests in collected paths.
	*/
	onAfterRunFiles?: (files: File[]) => unknown;
	/**
	* Called when new context for a test is defined. Useful if you want to add custom properties to the context.
	* If you only want to define custom context, consider using "beforeAll" in "setupFiles" instead.
	*
	* @see https://vitest.dev/advanced/runner#your-task-function
	*/
	extendTaskContext?: (context: TestContext) => TestContext;
	/**
	* Called when test and setup files are imported. Can be called in two situations: when collecting tests and when importing setup files.
	*/
	importFile: (filepath: string, source: VitestRunnerImportSource) => unknown;
	/**
	* Function that is called when the runner attempts to get the value when `test.extend` is used with `{ injected: true }`
	*/
	injectValue?: (key: string) => unknown;
	/**
	* Gets the time spent importing each individual non-externalized file that Vitest collected.
	*/
	getImportDurations?: () => Record<string, ImportDuration>;
	/**
	* Publicly available configuration.
	*/
	config: VitestRunnerConfig;
	/**
	* The name of the current pool. Can affect how stack trace is inferred on the server side.
	*/
	pool?: string;
	/**
	* Return the worker context for fixtures specified with `scope: 'worker'`
	*/
	getWorkerContext?: () => Record<string, unknown>;
	onCleanupWorkerContext?: (cleanup: () => unknown) => void;
	/** @private */
	_currentTaskStartTime?: number;
	/** @private */
	_currentTaskTimeout?: number;
}

export { File, ImportDuration, SequenceHooks, SequenceSetupFiles, Suite, TaskEventPack, TaskResultPack, Test, TestAnnotation, TestContext };
export type { CancelReason, FileSpecification, VitestRunner, VitestRunnerConfig, VitestRunnerConstructor, VitestRunnerImportSource };
