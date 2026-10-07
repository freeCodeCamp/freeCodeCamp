import { TestError, Awaitable } from '@vitest/utils';
import { DiffOptions } from '@vitest/utils/diff';

/**
* This is a subset of Vitest config that's required for the runner to work.
*/
interface VitestRunnerConfig {
	root: string;
	setupFiles: string[];
	name: string | undefined;
	passWithNoTests: boolean;
	testNamePattern: RegExp | undefined;
	allowOnly: boolean;
	sequence: {
		shuffle?: boolean;
		concurrent?: boolean;
		seed: number;
		hooks: SequenceHooks;
		setupFiles: SequenceSetupFiles;
	};
	chaiConfig: {
		truncateThreshold?: number;
	} | undefined;
	maxConcurrency: number;
	testTimeout: number;
	hookTimeout: number;
	retry: SerializableRetry;
	includeTaskLocation: boolean | undefined;
	diffOptions?: DiffOptions;
	tags: TestTagDefinition[];
	tagsFilter: string[] | undefined;
	strictTags: boolean;
}
/**
* Possible options to run a single file in a test.
*/
interface FileSpecification {
	filepath: string;
	fileTags?: string[];
	testLocations?: number[] | undefined;
	testNamePattern?: RegExp | undefined;
	testTagsFilter?: string[] | undefined;
	testIds?: string[] | undefined;
}
interface TestTagDefinition extends Omit<TestOptions, "tags" | "shuffle"> {
	/**
	* The name of the tag. This is what you use in the `tags` array in tests.
	*/
	name: keyof TestTags extends never ? string : TestTags[keyof TestTags];
	/**
	* A description for the tag. This will be shown in the CLI help and UI.
	*/
	description?: string;
	/**
	* Priority for merging options when multiple tags with the same options are applied to a test.
	*
	* Lower number means higher priority. E.g., priority 1 takes precedence over priority 3.
	*/
	priority?: number;
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
		retry: number;
		repeats: number;
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
		retry: number;
		repeats: number;
	}) => unknown;
	/**
	* Called after the retry resolution happened. Unlike `onAfterTryTask`, the test now has a new state.
	* All `after` hooks were also called by this point.
	*/
	onAfterRetryTask?: (test: Test, options: {
		retry: number;
		repeats: number;
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
	* @experimental
	*
	* Called when artifacts are recorded on tests via the `recordArtifact` utility.
	*/
	onTestArtifactRecord?: <Artifact extends TestArtifact>(test: Test, artifact: Artifact) => Promise<Artifact>;
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
	* The current Vite environment that processes the files on the server.
	*/
	viteEnvironment?: string;
	onCleanupWorkerContext?: (cleanup: () => unknown) => void;
	trace?<T>(name: string, cb: () => T): T;
	trace?<T>(name: string, attributes: Record<string, any>, cb: () => T): T;
}

interface TestFixtureItem extends FixtureOptions {
	name: string;
	value: unknown;
	scope: "test" | "file" | "worker";
	deps: Set<string>;
	parent?: TestFixtureItem;
}
type UserFixtures = Record<string, unknown>;
type FixtureRegistrations = Map<string, TestFixtureItem>;
declare class TestFixtures {
	private _suiteContexts;
	private _overrides;
	private _registrations;
	private static _definitions;
	private static _builtinFixtures;
	private static _fixtureOptionKeys;
	private static _fixtureScopes;
	private static _workerContextSuite;
	static clearDefinitions(): void;
	static getWorkerContexts(): Record<string, any>[];
	static getFileContexts(file: File): Record<string, any>[];
	static isFixtureOptions(obj: unknown): boolean;
	constructor(registrations?: FixtureRegistrations);
	extend(runner: VitestRunner, userFixtures: UserFixtures): TestFixtures;
	get(suite: Suite): FixtureRegistrations;
	override(runner: VitestRunner, userFixtures: UserFixtures): void;
	getFileContext(file: File): Record<string, any>;
	getWorkerContext(): Record<string, any>;
	private parseUserFixtures;
}

/**
* Registers a callback function to be executed once before all tests within the current suite.
* This hook is useful for scenarios where you need to perform setup operations that are common to all tests in a suite, such as initializing a database connection or setting up a test environment.
*
* **Note:** The `beforeAll` hooks are executed in the order they are defined one after another. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed before all tests.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using beforeAll to set up a database connection
* beforeAll(async () => {
*   await database.connect();
* });
* ```
*/
declare function beforeAll<ExtraContext = object>(this: unknown, fn: BeforeAllListener<ExtraContext>, timeout?: number): void;
/**
* Registers a callback function to be executed once after all tests within the current suite have completed.
* This hook is useful for scenarios where you need to perform cleanup operations after all tests in a suite have run, such as closing database connections or cleaning up temporary files.
*
* **Note:** The `afterAll` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed after all tests.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using afterAll to close a database connection
* afterAll(async () => {
*   await database.disconnect();
* });
* ```
*/
declare function afterAll<ExtraContext = object>(this: unknown, fn: AfterAllListener<ExtraContext>, timeout?: number): void;
/**
* Registers a callback function to be executed before each test within the current suite.
* This hook is useful for scenarios where you need to reset or reinitialize the test environment before each test runs, such as resetting database states, clearing caches, or reinitializing variables.
*
* **Note:** The `beforeEach` hooks are executed in the order they are defined one after another. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed before each test. This function receives an `TestContext` parameter if additional test context is needed.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using beforeEach to reset a database state
* beforeEach(async () => {
*   await database.reset();
* });
* ```
*/
declare function beforeEach<ExtraContext = object>(fn: BeforeEachListener<ExtraContext>, timeout?: number): void;
/**
* Registers a callback function to be executed after each test within the current suite has completed.
* This hook is useful for scenarios where you need to clean up or reset the test environment after each test runs, such as deleting temporary files, clearing test-specific database entries, or resetting mocked functions.
*
* **Note:** The `afterEach` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed after each test. This function receives an `TestContext` parameter if additional test context is needed.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using afterEach to delete temporary files created during a test
* afterEach(async () => {
*   await fileSystem.deleteTempFiles();
* });
* ```
*/
declare function afterEach<ExtraContext = object>(fn: AfterEachListener<ExtraContext>, timeout?: number): void;
/**
* Registers a callback function to be executed when a test fails within the current suite.
* This function allows for custom actions to be performed in response to test failures, such as logging, cleanup, or additional diagnostics.
*
* **Note:** The `onTestFailed` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* @param {Function} fn - The callback function to be executed upon a test failure. The function receives the test result (including errors).
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @throws {Error} Throws an error if the function is not called within a test.
* @returns {void}
* @example
* ```ts
* // Example of using onTestFailed to log failure details
* onTestFailed(({ errors }) => {
*   console.log(`Test failed: ${test.name}`, errors);
* });
* ```
*/
declare const onTestFailed: TaskHook<OnTestFailedHandler>;
/**
* Registers a callback function to be executed when the current test finishes, regardless of the outcome (pass or fail).
* This function is ideal for performing actions that should occur after every test execution, such as cleanup, logging, or resetting shared resources.
*
* This hook is useful if you have access to a resource in the test itself and you want to clean it up after the test finishes. It is a more compact way to clean up resources than using the combination of `beforeEach` and `afterEach`.
*
* **Note:** The `onTestFinished` hooks are running in reverse order of their registration. You can configure this by changing the `sequence.hooks` option in the config file.
*
* **Note:** The `onTestFinished` hook is not called if the test is canceled with a dynamic `ctx.skip()` call.
*
* @param {Function} fn - The callback function to be executed after a test finishes. The function can receive parameters providing details about the completed test, including its success or failure status.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @throws {Error} Throws an error if the function is not called within a test.
* @returns {void}
* @example
* ```ts
* // Example of using onTestFinished for cleanup
* const db = await connectToDatabase();
* onTestFinished(async () => {
*   await db.disconnect();
* });
* ```
*/
declare const onTestFinished: TaskHook<OnTestFinishedHandler>;
/**
* Registers a callback function that wraps around all tests within the current suite.
* The callback receives a `runSuite` function that must be called to run the suite's tests.
* This hook is useful for scenarios where you need to wrap an entire suite in a context
* (e.g., starting a server, opening a database connection that all tests share).
*
* **Note:** When multiple `aroundAll` hooks are registered, they are nested inside each other.
* The first registered hook is the outermost wrapper.
*
* @param {Function} fn - The callback function that wraps the suite. Must call `runSuite()` to run the tests.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using aroundAll to wrap suite in a tracing span
* aroundAll(async (runSuite) => {
*   await tracer.trace('test-suite', runSuite);
* });
* ```
* @example
* ```ts
* // Example of using aroundAll with fixtures
* aroundAll(async (runSuite, { db }) => {
*   await db.transaction(() => runSuite());
* });
* ```
*/
declare function aroundAll<ExtraContext = object>(this: unknown, fn: AroundAllListener<ExtraContext>, timeout?: number): void;
/**
* Registers a callback function that wraps around each test within the current suite.
* The callback receives a `runTest` function that must be called to run the test.
* This hook is useful for scenarios where you need to wrap tests in a context (e.g., database transactions).
*
* **Note:** When multiple `aroundEach` hooks are registered, they are nested inside each other.
* The first registered hook is the outermost wrapper.
*
* @param {Function} fn - The callback function that wraps the test. Must call `runTest()` to run the test.
* @param {number} [timeout] - Optional timeout in milliseconds for the hook. If not provided, the default hook timeout from the runner's configuration is used.
* @returns {void}
* @example
* ```ts
* // Example of using aroundEach to wrap tests in a database transaction
* aroundEach(async (runTest) => {
*   await database.transaction(() => runTest());
* });
* ```
* @example
* ```ts
* // Example of using aroundEach with fixtures
* aroundEach(async (runTest, { db }) => {
*   await db.transaction(() => runTest());
* });
* ```
*/
declare function aroundEach<ExtraContext = object>(fn: AroundEachListener<ExtraContext>, timeout?: number): void;

type ChainableFunction<
	T extends string,
	F extends (...args: any) => any,
	C = object
> = F & { [x in T] : ChainableFunction<T, F, C> } & {
	fn: (this: Record<T, any>, ...args: Parameters<F>) => ReturnType<F>;
} & C;
declare function createChainable<
	T extends string,
	Args extends any[],
	R = any
>(keys: T[], fn: (this: Record<T, any>, ...args: Args) => R, context?: Record<string, any>): ChainableFunction<T, (...args: Args) => R>;

type RunMode = "run" | "skip" | "only" | "todo" | "queued";
type TaskState = RunMode | "pass" | "fail";
interface TaskBase {
	/**
	* Unique task identifier. Based on the file id and the position of the task.
	* The id of the file task is based on the file path relative to root and project name.
	* It will not change between runs.
	* @example `1201091390`, `1201091390_0`, `1201091390_0_1`
	*/
	id: string;
	/**
	* Task name provided by the user. If no name was provided, it will be an empty string.
	*/
	name: string;
	/**
	* Full name including the file path, any parent suites, and this task's name.
	*
	* Uses ` > ` as the separator between levels.
	*
	* @example
	* // file
	* 'test/task-names.test.ts'
	* @example
	* // suite
	* 'test/task-names.test.ts > meal planning'
	* 'test/task-names.test.ts > meal planning > grocery lists'
	* @example
	* // test
	* 'test/task-names.test.ts > meal planning > grocery lists > calculates ingredients'
	*/
	fullName: string;
	/**
	* Full name excluding the file path, including any parent suites and this task's name. `undefined` for file tasks.
	*
	* Uses ` > ` as the separator between levels.
	*
	* @example
	* // file
	* undefined
	* @example
	* // suite
	* 'meal planning'
	* 'meal planning > grocery lists'
	* @example
	* // test
	* 'meal planning > grocery lists > calculates ingredients'
	*/
	fullTestName?: string;
	/**
	* Task mode.
	* - **skip**: task is skipped
	* - **only**: only this task and other tasks with `only` mode will run
	* - **todo**: task is marked as a todo, alias for `skip`
	* - **run**: task will run or already ran
	* - **queued**: task will start running next. It can only exist on the File
	*/
	mode: RunMode;
	/**
	* Custom metadata for the task. JSON reporter will save this data.
	*/
	meta: TaskMeta;
	/**
	* Whether the task was produced with `.each()` method.
	*/
	each?: boolean;
	/**
	* Whether the task should run concurrently with other tasks.
	*/
	concurrent?: boolean;
	/**
	* Whether the tasks of the suite run in a random order.
	*/
	shuffle?: boolean;
	/**
	* Suite that this task is part of. File task or the global suite will have no parent.
	*/
	suite?: Suite;
	/**
	* Result of the task. Suite and file tasks will only have the result if there
	* was an error during collection or inside `afterAll`/`beforeAll`.
	*/
	result?: TaskResult;
	/**
	* Retry configuration for the task.
	* - If a number, specifies how many times to retry
	* - If an object, allows fine-grained retry control
	* @default 0
	*/
	retry?: Retry;
	/**
	* The amount of times the task should be repeated after the successful run.
	* If the task fails, it will not be retried unless `retry` is specified.
	* @default 0
	*/
	repeats?: number;
	/**
	* Location of the task in the file. This field is populated only if
	* `includeTaskLocation` option is set. It is generated by calling `new Error`
	* and parsing the stack trace, so the location might differ depending on the runtime.
	*/
	location?: Location;
	/**
	* If the test was collected by parsing the file AST, and the name
	* is not a static string, this property will be set to `true`.
	* @experimental
	*/
	dynamic?: boolean;
	/**
	* Custom tags of the task. Useful for filtering tasks.
	*/
	tags?: string[];
}
interface TaskPopulated extends TaskBase {
	/**
	* File task. It's the root task of the file.
	*/
	file: File;
	/**
	* Whether the task should succeed if it fails. If the task fails, it will be marked as passed.
	*/
	fails?: boolean;
	/**
	* Store promises (from async expects) to wait for them before finishing the test
	*/
	promises?: Promise<any>[];
}
/**
* Custom metadata that can be used in reporters.
*/
interface TaskMeta {}
/**
* The result of calling a task.
*/
interface TaskResult {
	/**
	* State of the task. Inherits the `task.mode` during collection.
	* When the task has finished, it will be changed to `pass` or `fail`.
	* - **pass**: task ran successfully
	* - **fail**: task failed
	*/
	state: TaskState;
	/**
	* Errors that occurred during the task execution. It is possible to have several errors
	* if `expect.soft()` failed multiple times or `retry` was triggered.
	*/
	errors?: TestError[];
	/**
	* How long in milliseconds the task took to run.
	*/
	duration?: number;
	/**
	* Time in milliseconds when the task started running.
	*/
	startTime?: number;
	/**
	* Heap size in bytes after the task finished.
	* Only available if `logHeapUsage` option is set and `process.memoryUsage` is defined.
	*/
	heap?: number;
	/**
	* State of related to this task hooks. Useful during reporting.
	*/
	hooks?: Partial<Record<keyof SuiteHooks, TaskState>>;
	/**
	* The amount of times the task was retried. The task is retried only if it
	* failed and `retry` option is set.
	*/
	retryCount?: number;
	/**
	* The amount of times the task was repeated. The task is repeated only if
	* `repeats` option is set. This number also contains `retryCount`.
	*/
	repeatCount?: number;
}
/** The time spent importing & executing a non-externalized file. */
interface ImportDuration {
	/** The time spent importing & executing the file itself, not counting all non-externalized imports that the file does. */
	selfTime: number;
	/** The time spent importing & executing the file and all its imports. */
	totalTime: number;
	/** Will be set to `true`, if the module was externalized. In this case totalTime and selfTime are identical. */
	external?: boolean;
	/** Which module imported this module first. All subsequent imports are cached. */
	importer?: string;
}
/**
* The tuple representing a single task update.
* Usually reported after the task finishes.
*/
type TaskResultPack = [id: string, result: TaskResult | undefined, meta: TaskMeta];
interface TaskEventData {
	annotation?: TestAnnotation | undefined;
	artifact?: TestArtifact | undefined;
}
type TaskEventPack = [id: string, event: TaskUpdateEvent, data: TaskEventData | undefined];
type TaskUpdateEvent = "test-failed-early" | "suite-failed-early" | "test-prepare" | "test-finished" | "test-retried" | "test-cancel" | "suite-prepare" | "suite-finished" | "before-hook-start" | "before-hook-end" | "after-hook-start" | "after-hook-end" | "test-annotation" | "test-artifact";
interface Suite extends TaskBase {
	type: "suite";
	/**
	* File task. It's the root task of the file.
	*/
	file: File;
	/**
	* An array of tasks that are part of the suite.
	*/
	tasks: Task[];
}
interface File extends Suite {
	/**
	* The name of the pool that the file belongs to.
	* @default 'forks'
	*/
	pool?: string;
	/**
	* The environment that processes the file on the server.
	*/
	viteEnvironment?: string;
	/**
	* The path to the file in UNIX format.
	*/
	filepath: string;
	/**
	* The name of the workspace project the file belongs to.
	*/
	projectName: string | undefined;
	/**
	* The time it took to collect all tests in the file.
	* This time also includes importing all the file dependencies.
	*/
	collectDuration?: number;
	/**
	* The time it took to import the setup file.
	*/
	setupDuration?: number;
	/** The time spent importing every non-externalized dependency that Vitest has processed. */
	importDurations?: Record<string, ImportDuration>;
}
interface Test<ExtraContext = object> extends TaskPopulated {
	type: "test";
	/**
	* Test context that will be passed to the test function.
	*/
	context: TestContext & ExtraContext;
	/**
	* The test timeout in milliseconds.
	*/
	timeout: number;
	/**
	* An array of custom annotations.
	*/
	annotations: TestAnnotation[];
	/**
	* An array of artifacts produced by the test.
	*
	* @experimental
	*/
	artifacts: TestArtifact[];
	fullTestName: string;
}
type Task = Test | Suite | File;
type TestFunction<ExtraContext = object> = (context: TestContext & ExtraContext) => Awaitable<any> | void;
type ExtractEachCallbackArgs<T extends ReadonlyArray<any>> = {
	1: [T[0]];
	2: [T[0], T[1]];
	3: [T[0], T[1], T[2]];
	4: [T[0], T[1], T[2], T[3]];
	5: [T[0], T[1], T[2], T[3], T[4]];
	6: [T[0], T[1], T[2], T[3], T[4], T[5]];
	7: [T[0], T[1], T[2], T[3], T[4], T[5], T[6]];
	8: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7]];
	9: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8]];
	10: [T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9]];
	fallback: Array<T extends ReadonlyArray<infer U> ? U : any>;
}[T extends Readonly<[any]> ? 1 : T extends Readonly<[any, any]> ? 2 : T extends Readonly<[any, any, any]> ? 3 : T extends Readonly<[any, any, any, any]> ? 4 : T extends Readonly<[any, any, any, any, any]> ? 5 : T extends Readonly<[any, any, any, any, any, any]> ? 6 : T extends Readonly<[any, any, any, any, any, any, any]> ? 7 : T extends Readonly<[any, any, any, any, any, any, any, any]> ? 8 : T extends Readonly<[any, any, any, any, any, any, any, any, any]> ? 9 : T extends Readonly<[any, any, any, any, any, any, any, any, any, any]> ? 10 : "fallback"];
interface EachFunctionReturn<T extends any[]> {
	(name: string | Function, fn: (...args: T) => Awaitable<void>, options?: number): void;
	(name: string | Function, options: TestCollectorOptions, fn: (...args: T) => Awaitable<void>): void;
}
interface TestEachFunction {
	<T extends any[] | [any]>(cases: ReadonlyArray<T>): EachFunctionReturn<T>;
	<T extends ReadonlyArray<any>>(cases: ReadonlyArray<T>): EachFunctionReturn<ExtractEachCallbackArgs<T>>;
	<T>(cases: ReadonlyArray<T>): EachFunctionReturn<T[]>;
	(...args: [TemplateStringsArray, ...any]): EachFunctionReturn<any[]>;
}
interface TestForFunctionReturn<
	Arg,
	Context
> {
	(name: string | Function, fn: (arg: Arg, context: Context) => Awaitable<void>): void;
	(name: string | Function, options: TestCollectorOptions, fn: (args: Arg, context: Context) => Awaitable<void>): void;
}
interface TestForFunction<ExtraContext> {
	<T>(cases: ReadonlyArray<T>): TestForFunctionReturn<T, TestContext & ExtraContext>;
	(strings: TemplateStringsArray, ...values: any[]): TestForFunctionReturn<any, TestContext & ExtraContext>;
}
interface SuiteForFunction {
	<T>(cases: ReadonlyArray<T>): EachFunctionReturn<[T]>;
	(...args: [TemplateStringsArray, ...any]): EachFunctionReturn<any[]>;
}
interface TestCollectorCallable<C = object> {
	<ExtraContext extends C>(name: string | Function, fn?: TestFunction<ExtraContext>, options?: number): void;
	<ExtraContext extends C>(name: string | Function, options?: TestCollectorOptions, fn?: TestFunction<ExtraContext>): void;
}
type ChainableTestAPI<ExtraContext = object> = ChainableFunction<"concurrent" | "sequential" | "only" | "skip" | "todo" | "fails", TestCollectorCallable<ExtraContext>, {
	each: TestEachFunction;
	for: TestForFunction<ExtraContext>;
}>;
type TestCollectorOptions = Omit<TestOptions, "shuffle">;
/**
* Retry configuration for tests.
* Can be a number for simple retry count, or an object for advanced retry control.
*/
type Retry = number | {
	/**
	* The number of times to retry the test if it fails.
	* @default 0
	*/
	count?: number;
	/**
	* Delay in milliseconds between retry attempts.
	* @default 0
	*/
	delay?: number;
	/**
	* Condition to determine if a test should be retried based on the error.
	* - If a RegExp, it is tested against the error message
	* - If a function, called with the TestError object; return true to retry
	*
	* NOTE: Functions can only be used in test files, not in vitest.config.ts,
	* because the configuration is serialized when passed to worker threads.
	*
	* @default undefined (retry on all errors)
	*/
	condition?: RegExp | ((error: TestError) => boolean);
};
/**
* Serializable retry configuration (used in config files).
* Functions cannot be serialized, so only string conditions are allowed.
*/
type SerializableRetry = number | {
	/**
	* The number of times to retry the test if it fails.
	* @default 0
	*/
	count?: number;
	/**
	* Delay in milliseconds between retry attempts.
	* @default 0
	*/
	delay?: number;
	/**
	* Condition to determine if a test should be retried based on the error.
	* Must be a RegExp tested against the error message.
	*
	* @default undefined (retry on all errors)
	*/
	condition?: RegExp;
};
interface TestOptions {
	/**
	* Test timeout.
	*/
	timeout?: number;
	/**
	* Retry configuration for the test.
	* - If a number, specifies how many times to retry
	* - If an object, allows fine-grained retry control
	* @default 0
	*/
	retry?: Retry;
	/**
	* How many times the test will run again.
	* Only inner tests will repeat if set on `describe()`, nested `describe()` will inherit parent's repeat by default.
	*
	* @default 0
	*/
	repeats?: number;
	/**
	* Whether suites and tests run concurrently.
	* Tests inherit `concurrent` from `describe()` and nested `describe()` will inherit from parent's `concurrent`.
	*/
	concurrent?: boolean;
	/**
	* Whether tests run sequentially.
	* Tests inherit `sequential` from `describe()` and nested `describe()` will inherit from parent's `sequential`.
	*/
	sequential?: boolean;
	/**
	* Whether the test should be skipped.
	*/
	skip?: boolean;
	/**
	* Should this test be the only one running in a suite.
	*/
	only?: boolean;
	/**
	* Whether the test should be skipped and marked as a todo.
	*/
	todo?: boolean;
	/**
	* Whether the test is expected to fail. If it does, the test will pass, otherwise it will fail.
	*/
	fails?: boolean;
	/**
	* Custom tags of the test. Useful for filtering tests.
	*/
	tags?: keyof TestTags extends never ? string[] | string : TestTags[keyof TestTags] | TestTags[keyof TestTags][];
	/**
	* Custom test metadata available to reporters.
	*/
	meta?: Partial<TaskMeta>;
}
interface TestTags {}
interface SuiteOptions extends TestOptions {
	/**
	* Whether the tasks of the suite run in a random order.
	*/
	shuffle?: boolean;
}
interface ExtendedAPI<ExtraContext> {
	skipIf: (condition: any) => ChainableTestAPI<ExtraContext>;
	runIf: (condition: any) => ChainableTestAPI<ExtraContext>;
}
interface Hooks<ExtraContext> {
	/**
	* Suite-level hooks only receive file/worker scoped fixtures.
	* Test-scoped fixtures are NOT available in beforeAll/afterAll/aroundAll.
	*/
	beforeAll: typeof beforeAll<ExtractSuiteContext<ExtraContext>>;
	afterAll: typeof afterAll<ExtractSuiteContext<ExtraContext>>;
	aroundAll: typeof aroundAll<ExtractSuiteContext<ExtraContext>>;
	/**
	* Test-level hooks receive all fixtures including test-scoped ones.
	*/
	beforeEach: typeof beforeEach<ExtraContext>;
	afterEach: typeof afterEach<ExtraContext>;
	aroundEach: typeof aroundEach<ExtraContext>;
}
type TestAPI<ExtraContext = object> = ChainableTestAPI<ExtraContext> & ExtendedAPI<ExtraContext> & Hooks<ExtraContext> & {
	/**
	* Extend the test API with custom fixtures.
	*
	* @example
	* ```ts
	* // Simple test fixtures (backward compatible)
	* const myTest = test.extend<{ foo: string }>({
	*   foo: 'value',
	* })
	*
	* // With scoped fixtures - use $test/$file/$worker structure
	* const myTest = test.extend<{
	*   $test: { testData: string }
	*   $file: { fileDb: Database }
	*   $worker: { workerConfig: Config }
	* }>({
	*   testData: async ({ fileDb }, use) => {
	*     await use(await fileDb.getData())
	*   },
	*   fileDb: [async ({ workerConfig }, use) => {
	*     // File fixture can only access workerConfig, NOT testData
	*     const db = new Database(workerConfig)
	*     await use(db)
	*     await db.close()
	*   }, { scope: 'file' }],
	*   workerConfig: [async ({}, use) => {
	*     // Worker fixture can only access other worker fixtures
	*     await use(loadConfig())
	*   }, { scope: 'worker' }],
	* })
	*
	* // Builder pattern with automatic type inference
	* const myTest = test
	*   .extend('config', { scope: 'worker' }, async ({}) => {
	*     return { port: 3000 }  // Type inferred as { port: number }
	*   })
	*   .extend('db', { scope: 'file' }, async ({ config }, { onCleanup }) => {
	*     // TypeScript knows config is { port: number }
	*     const db = new Database(config.port)
	*     onCleanup(() => db.close())  // Register cleanup
	*     return db  // Type inferred as Database
	*   })
	*   .extend('data', async ({ db }) => {
	*     // TypeScript knows db is Database
	*     return await db.getData()  // Type inferred from return
	*   })
	* ```
	*/
	extend: {
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, options: WorkerScopeFixtureOptions, fn: BuilderFixtureFn<T, WorkerScopeContext<ExtraContext>>): TestAPI<AddBuilderWorker<ExtraContext, K, T>>;
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, options: FileScopeFixtureOptions, fn: BuilderFixtureFn<T, FileScopeContext<ExtraContext>>): TestAPI<AddBuilderFile<ExtraContext, K, T>>;
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, options: TestScopeFixtureOptions, fn: BuilderFixtureFn<T, TestScopeContext<ExtraContext>>): TestAPI<AddBuilderTest<ExtraContext, K, T>>;
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, fn: BuilderFixtureFn<T, TestScopeContext<ExtraContext>>): TestAPI<AddBuilderTest<ExtraContext, K, T>>;
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, options: WorkerScopeFixtureOptions, value: T extends (...args: any[]) => any ? never : T): TestAPI<AddBuilderWorker<ExtraContext, K, T>>;
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, options: FileScopeFixtureOptions, value: T extends (...args: any[]) => any ? never : T): TestAPI<AddBuilderFile<ExtraContext, K, T>>;
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, options: TestScopeFixtureOptions, value: T extends (...args: any[]) => any ? never : T): TestAPI<AddBuilderTest<ExtraContext, K, T>>;
		<
			K extends string,
			T extends (K extends keyof ExtraContext ? ExtraContext[K] : unknown)
		>(name: K, value: T extends (...args: any[]) => any ? never : T): TestAPI<AddBuilderTest<ExtraContext, K, T>>;
		<T extends ScopedFixturesDef>(fixtures: ScopedFixturesObject<T, ExtraContext>): TestAPI<ExtractScopedFixtures<T> & ExtraContext>;
		<T extends Record<string, any> = object>(fixtures: Fixtures<T, ExtraContext>): TestAPI<{ [K in keyof T | keyof ExtraContext] : K extends keyof T ? T[K] : K extends keyof ExtraContext ? ExtraContext[K] : never }>;
	};
	/**
	* Overwrite fixture values for the current suite scope.
	* Supports both object syntax and builder pattern.
	*
	* @example
	* ```ts
	* describe('with custom config', () => {
	*   // Object syntax
	*   test.override({ config: { port: 4000 } })
	*
	*   // Builder pattern - value
	*   test.override('config', { port: 4000 })
	*
	*   // Builder pattern - function
	*   test.override('config', () => ({ port: 4000 }))
	*
	*   // Builder pattern - function with cleanup
	*   test.override('db', async ({ config }, { onCleanup }) => {
	*     const db = await createDb(config)
	*     onCleanup(() => db.close())
	*     return db
	*   })
	* })
	* ```
	*/
	override: {
		<K extends keyof ExtraContext>(name: K, options: FixtureOptions, fn: BuilderFixtureFn<ExtraContext[K], ExtraContext & TestContext>): TestAPI<ExtraContext>;
		<K extends keyof ExtraContext>(name: K, fn: BuilderFixtureFn<ExtraContext[K], ExtraContext & TestContext>): TestAPI<ExtraContext>;
		<K extends keyof ExtraContext>(name: K, options: FixtureOptions, value: ExtraContext[K] extends (...args: any[]) => any ? never : ExtraContext[K]): TestAPI<ExtraContext>;
		<K extends keyof ExtraContext>(name: K, value: ExtraContext[K] extends (...args: any[]) => any ? never : ExtraContext[K]): TestAPI<ExtraContext>;
		(fixtures: Partial<Fixtures<ExtraContext>>): TestAPI<ExtraContext>;
	};
	/**
	* @deprecated Use `test.override()` instead
	*/
	scoped: (fixtures: Partial<Fixtures<ExtraContext>>) => TestAPI<ExtraContext>;
	describe: SuiteAPI<ExtraContext>;
	suite: SuiteAPI<ExtraContext>;
};
interface FixtureOptions {
	/**
	* Whether to automatically set up current fixture, even though it's not being used.
	* Test-scoped auto fixtures are not initialized in suite-level hooks (`beforeAll`/`afterAll`/`aroundAll`).
	* @default false
	*/
	auto?: boolean;
	/**
	* Indicated if the injected value from the config should be preferred over the fixture value
	*/
	injected?: boolean;
	/**
	* When should the fixture be set up.
	* - **test**: fixture will be set up before every test
	* - **worker**: fixture will be set up once per worker
	* - **file**: fixture will be set up once per file
	*
	* **Warning:** The `vmThreads` and `vmForks` pools initiate worker fixtures once per test file.
	* @default 'test'
	*/
	scope?: "test" | "worker" | "file";
}
/**
* Options for test-scoped fixtures.
* Test fixtures are set up before each test and have access to all fixtures.
*/
interface TestScopeFixtureOptions extends Omit<FixtureOptions, "scope"> {
	/**
	* @default 'test'
	*/
	scope?: "test";
}
/**
* Options for file-scoped fixtures.
* File fixtures are set up once per file and can only access other file fixtures and worker fixtures.
*/
interface FileScopeFixtureOptions extends Omit<FixtureOptions, "scope"> {
	/**
	* Must be 'file' for file-scoped fixtures.
	*/
	scope: "file";
}
/**
* Options for worker-scoped fixtures.
* Worker fixtures are set up once per worker and can only access other worker fixtures.
*/
interface WorkerScopeFixtureOptions extends Omit<FixtureOptions, "scope"> {
	/**
	* Must be 'worker' for worker-scoped fixtures.
	*/
	scope: "worker";
}
type Use<T> = (value: T) => Promise<void>;
/**
* Cleanup registration function for builder pattern fixtures.
* Call this to register a cleanup function that runs after the test/file/worker completes.
*
* **Note:** This function can only be called once per fixture. If you need multiple
* cleanup operations, either combine them into a single cleanup function or split
* your fixture into multiple smaller fixtures.
*/
type OnCleanup = (cleanup: () => Awaitable<void>) => void;
/**
* Builder pattern fixture function with automatic type inference.
* Returns the fixture value directly (type is inferred from return).
* Use onCleanup to register teardown logic.
*
* Parameters can be omitted if not needed:
* - `async () => value` - no dependencies, no cleanup
* - `async ({ dep }) => value` - with dependencies, no cleanup
* - `async ({ dep }, { onCleanup }) => value` - with dependencies and cleanup
*/
type BuilderFixtureFn<
	T,
	Context
> = (context: Context, fixture: {
	onCleanup: OnCleanup;
}) => T | Promise<T>;
type ExtractSuiteContext<C> = C extends {
	$__worker?: any;
} | {
	$__file?: any;
} | {
	$__test?: any;
} ? ExtractBuilderWorker<C> & ExtractBuilderFile<C> : C;
/**
* Extracts worker-scoped fixtures from a context that includes scope info.
*/
type ExtractBuilderWorker<C> = C extends {
	$__worker?: infer W;
} ? W extends Record<string, any> ? W : object : object;
/**
* Extracts file-scoped fixtures from a context that includes scope info.
*/
type ExtractBuilderFile<C> = C extends {
	$__file?: infer F;
} ? F extends Record<string, any> ? F : object : object;
/**
* Extracts test-scoped fixtures from a context that includes scope info.
*/
type ExtractBuilderTest<C> = C extends {
	$__test?: infer T;
} ? T extends Record<string, any> ? T : object : object;
/**
* Adds a worker fixture to the context with proper scope tracking.
*/
type AddBuilderWorker<
	C,
	K extends string,
	V
> = Omit<C, "$__worker"> & Record<K, V> & {
	readonly $__worker?: ExtractBuilderWorker<C> & Record<K, V>;
	readonly $__file?: ExtractBuilderFile<C>;
	readonly $__test?: ExtractBuilderTest<C>;
};
/**
* Adds a file fixture to the context with proper scope tracking.
*/
type AddBuilderFile<
	C,
	K extends string,
	V
> = Omit<C, "$__file"> & Record<K, V> & {
	readonly $__worker?: ExtractBuilderWorker<C>;
	readonly $__file?: ExtractBuilderFile<C> & Record<K, V>;
	readonly $__test?: ExtractBuilderTest<C>;
};
/**
* Adds a test fixture to the context with proper scope tracking.
*/
type AddBuilderTest<
	C,
	K extends string,
	V
> = Omit<C, "$__test"> & Record<K, V> & {
	readonly $__worker?: ExtractBuilderWorker<C>;
	readonly $__file?: ExtractBuilderFile<C>;
	readonly $__test?: ExtractBuilderTest<C> & Record<K, V>;
};
/**
* Context available to worker-scoped fixtures.
* Worker fixtures can only access other worker fixtures.
* They do NOT have access to test context (task, expect, onTestFailed, etc.)
* since they run once per worker, outside of any specific test.
*/
type WorkerScopeContext<C> = ExtractBuilderWorker<C>;
/**
* Context available to file-scoped fixtures.
* File fixtures can access worker and other file fixtures.
* They do NOT have access to test context (task, expect, onTestFailed, etc.)
* since they run once per file, outside of any specific test.
*/
type FileScopeContext<C> = ExtractBuilderWorker<C> & ExtractBuilderFile<C>;
/**
* Context available to test-scoped fixtures (all fixtures + test context).
*/
type TestScopeContext<C> = C & TestContext;
type FixtureFn<
	T,
	K extends keyof T,
	ExtraContext
> = (context: Omit<T, K> & ExtraContext, use: Use<T[K]>) => Promise<void>;
type Fixture<
	T,
	K extends keyof T,
	ExtraContext = object
> = ((...args: any) => any) extends T[K] ? T[K] extends any ? FixtureFn<T, K, Omit<ExtraContext, Exclude<keyof T, K>>> : never : T[K] | (T[K] extends any ? FixtureFn<T, K, Omit<ExtraContext, Exclude<keyof T, K>>> : never);
/**
* Fixture function with explicit context type for scoped fixtures.
*/
type ScopedFixtureFn<
	Value,
	Context
> = (context: Context, use: Use<Value>) => Promise<void>;
/**
* Fixtures definition for backward compatibility.
* All fixtures are in T and any scope is allowed.
*/
type Fixtures<
	T,
	ExtraContext = object
> = { [K in keyof T] : Fixture<T, K, ExtraContext & TestContext> | [Fixture<T, K, ExtraContext & TestContext>, FixtureOptions?] };
/**
* Scoped fixtures definition using a single generic with optional scope keys.
* This provides better ergonomics than multiple generics.
* Uses $ prefix to avoid conflicts with fixture names.
*
* @example
* ```ts
* test.extend<{
*   $worker?: { config: Config }
*   $file?: { db: Database }
*   $test?: { data: string }
* }>({ ... })
* ```
*/
interface ScopedFixturesDef {
	$test?: Record<string, any>;
	$file?: Record<string, any>;
	$worker?: Record<string, any>;
}
/**
* Extracts fixture types from a ScopedFixturesDef.
* Handles optional properties by using Exclude to remove undefined.
*/
type ExtractScopedFixtures<T extends ScopedFixturesDef> = ([Exclude<T["$test"], undefined>] extends [never] ? object : Exclude<T["$test"], undefined>) & ([Exclude<T["$file"], undefined>] extends [never] ? object : Exclude<T["$file"], undefined>) & ([Exclude<T["$worker"], undefined>] extends [never] ? object : Exclude<T["$worker"], undefined>);
/**
* Creates the fixtures object type for ScopedFixturesDef with proper scope validation.
* - Test fixtures: can be defined as value, function, or tuple with optional scope
* - File fixtures: MUST have { scope: 'file' }
* - Worker fixtures: MUST have { scope: 'worker' }
*/
type ScopedFixturesObject<
	T extends ScopedFixturesDef,
	ExtraContext = object
> = { [K in keyof NonNullable<T["$test"]>] : NonNullable<T["$test"]>[K] | ScopedFixtureFn<NonNullable<T["$test"]>[K], ExtractScopedFixtures<T> & ExtraContext & TestContext> | [ScopedFixtureFn<NonNullable<T["$test"]>[K], ExtractScopedFixtures<T> & ExtraContext & TestContext>, TestScopeFixtureOptions?] } & { [K in keyof NonNullable<T["$file"]>] : [ScopedFixtureFn<NonNullable<T["$file"]>[K], (NonNullable<T["$file"]> & NonNullable<T["$worker"]>) & ExtraContext>, FileScopeFixtureOptions] } & { [K in keyof NonNullable<T["$worker"]>] : [ScopedFixtureFn<NonNullable<T["$worker"]>[K], NonNullable<T["$worker"]> & ExtraContext>, WorkerScopeFixtureOptions] };
type InferFixturesTypes<T> = T extends TestAPI<infer C> ? C : T;
interface SuiteCollectorCallable<ExtraContext = object> {
	<OverrideExtraContext extends ExtraContext = ExtraContext>(name: string | Function, fn?: SuiteFactory<OverrideExtraContext>, options?: number): SuiteCollector<OverrideExtraContext>;
	<OverrideExtraContext extends ExtraContext = ExtraContext>(name: string | Function, options: SuiteOptions, fn?: SuiteFactory<OverrideExtraContext>): SuiteCollector<OverrideExtraContext>;
}
type ChainableSuiteAPI<ExtraContext = object> = ChainableFunction<"concurrent" | "sequential" | "only" | "skip" | "todo" | "shuffle", SuiteCollectorCallable<ExtraContext>, {
	each: TestEachFunction;
	for: SuiteForFunction;
}>;
type SuiteAPI<ExtraContext = object> = ChainableSuiteAPI<ExtraContext> & {
	skipIf: (condition: any) => ChainableSuiteAPI<ExtraContext>;
	runIf: (condition: any) => ChainableSuiteAPI<ExtraContext>;
};
interface BeforeAllListener<ExtraContext = object> {
	(context: ExtraContext, suite: Readonly<Suite | File>): Awaitable<unknown>;
}
interface AfterAllListener<ExtraContext = object> {
	(context: ExtraContext, suite: Readonly<Suite | File>): Awaitable<unknown>;
}
interface BeforeEachListener<ExtraContext = object> {
	(context: TestContext & ExtraContext, suite: Readonly<Suite>): Awaitable<unknown>;
}
interface AfterEachListener<ExtraContext = object> {
	(context: TestContext & ExtraContext, suite: Readonly<Suite>): Awaitable<unknown>;
}
interface AroundEachListener<ExtraContext = object> {
	(runTest: () => Promise<void>, context: TestContext & ExtraContext, suite: Readonly<Suite>): Awaitable<unknown>;
}
interface AroundAllListener<ExtraContext = object> {
	(runSuite: () => Promise<void>, context: ExtraContext, suite: Readonly<Suite | File>): Awaitable<unknown>;
}
interface RegisteredAllListener {
	(suite: Readonly<Suite | File>): Awaitable<unknown>;
}
interface RegisteredAroundAllListener {
	(runSuite: () => Promise<void>, suite: Readonly<Suite | File>): Awaitable<unknown>;
}
interface SuiteHooks<ExtraContext = object> {
	beforeAll: RegisteredAllListener[];
	afterAll: RegisteredAllListener[];
	aroundAll: RegisteredAroundAllListener[];
	beforeEach: BeforeEachListener<ExtraContext>[];
	afterEach: AfterEachListener<ExtraContext>[];
	aroundEach: AroundEachListener<ExtraContext>[];
}
interface TaskCustomOptions extends TestOptions {
	/**
	* Whether the task was produced with `.each()` method.
	*/
	each?: boolean;
	/**
	* Task fixtures.
	*/
	fixtures?: TestFixtures;
	/**
	* Function that will be called when the task is executed.
	* If nothing is provided, the runner will try to get the function using `getFn(task)`.
	* If the runner cannot find the function, the task will be marked as failed.
	*/
	handler?: (context: TestContext) => Awaitable<void>;
}
interface SuiteCollector<ExtraContext = object> {
	readonly name: string;
	readonly mode: RunMode;
	options?: SuiteOptions;
	type: "collector";
	test: TestAPI<ExtraContext>;
	tasks: (Suite | Test<ExtraContext> | SuiteCollector<ExtraContext>)[];
	file: File;
	suite?: Suite;
	task: (name: string, options?: TaskCustomOptions) => Test<ExtraContext>;
	collect: (file: File) => Promise<Suite>;
	clear: () => void;
	on: <T extends keyof SuiteHooks<ExtraContext>>(name: T, ...fn: SuiteHooks<ExtraContext>[T]) => void;
}
type SuiteFactory<ExtraContext = object> = (test: TestAPI<ExtraContext>) => Awaitable<void>;
interface RuntimeContext {
	tasks: (SuiteCollector | Test)[];
	currentSuite: SuiteCollector | null;
}
/**
* User's custom test context.
*/
interface TestContext {
	/**
	* Metadata of the current test
	*/
	readonly task: Readonly<Test>;
	/**
	* An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that will be aborted if the test times out or
	* the test run was cancelled.
	* @see {@link https://vitest.dev/guide/test-context#signal}
	*/
	readonly signal: AbortSignal;
	/**
	* Register a callback to run when this specific test fails.
	* Useful when tests run concurrently.
	* @see {@link https://vitest.dev/guide/test-context#ontestfailed}
	*/
	readonly onTestFailed: (fn: OnTestFailedHandler, timeout?: number) => void;
	/**
	* Register a callback to run when this specific test finishes.
	* Useful when tests run concurrently.
	* @see {@link https://vitest.dev/guide/test-context#ontestfinished}
	*/
	readonly onTestFinished: (fn: OnTestFinishedHandler, timeout?: number) => void;
	/**
	* Mark tests as skipped. All execution after this call will be skipped.
	* This function throws an error, so make sure you are not catching it accidentally.
	* @see {@link https://vitest.dev/guide/test-context#skip}
	*/
	readonly skip: {
		(note?: string): never;
		(condition: boolean, note?: string): void;
	};
	/**
	* Add a test annotation that will be displayed by your reporter.
	* @see {@link https://vitest.dev/guide/test-context#annotate}
	*/
	readonly annotate: {
		(message: string, type?: string, attachment?: TestAttachment): Promise<TestAnnotation>;
		(message: string, attachment?: TestAttachment): Promise<TestAnnotation>;
	};
}
type OnTestFailedHandler = (context: TestContext) => Awaitable<void>;
type OnTestFinishedHandler = (context: TestContext) => Awaitable<void>;
interface TaskHook<HookListener> {
	(fn: HookListener, timeout?: number): void;
}
type SequenceHooks = "stack" | "list" | "parallel";
type SequenceSetupFiles = "list" | "parallel";
/**
* Represents a file or data attachment associated with a test artifact.
*
* Attachments can be either file-based (via `path`) or inline content (via `body`).
* The `contentType` helps consumers understand how to interpret the attachment data.
*/
interface TestAttachment {
	/** MIME type of the attachment (e.g., 'image/png', 'text/plain') */
	contentType?: string;
	/** File system path to the attachment */
	path?: string;
	/** Inline attachment content as a string or raw binary data */
	body?: string | Uint8Array | undefined;
	/**
	* @experimental
	* How the string `body` is encoded.
	* - `'base64'` (default): body is already base64-encoded
	* - `'utf-8'`: body is a utf8 string
	*
	* `body: Uint8Array` is always auto-encoded to string with `bodyEncoding: 'base64'`
	* regardless of this option.
	*/
	bodyEncoding?: "base64" | "utf-8";
}
interface Location {
	/** Line number in the source file (1-indexed) */
	line: number;
	/** Column number in the line (1-indexed) */
	column: number;
}
interface FileLocation extends Location {
	/** Line number in the source file (1-indexed) */
	line: number;
	/** Column number in the line (1-indexed) */
	column: number;
	/** Path to the source file */
	file: string;
}
/**
* Source code location information for a test artifact.
*
* Indicates where in the source code the artifact originated from.
*/
interface TestArtifactLocation extends FileLocation {}
/**
* @experimental
*
* Base interface for all test artifacts.
*
* Extend this interface when creating custom test artifacts. Vitest automatically manages the `attachments` array and injects the `location` property to indicate where the artifact was created in your test code.
*
* **Important**: when running with [`api.allowWrite`](https://vitest.dev/config/api#api-allowwrite) or [`browser.api.allowWrite`](https://vitest.dev/config/browser/api#api-allowwrite) disabled, Vitest empties the `attachments` array on every artifact before reporting it.
*/
interface TestArtifactBase {
	/** File or data attachments associated with this artifact */
	attachments?: TestAttachment[];
	/** Source location where this artifact was created */
	location?: TestArtifactLocation;
}
/**
* @deprecated Use {@linkcode TestArtifactLocation} instead.
*
* Kept for backwards compatibility.
*/
type TestAnnotationLocation = TestArtifactLocation;
interface TestAnnotation {
	message: string;
	type: string;
	location?: TestArtifactLocation;
	attachment?: TestAttachment;
}
/**
* @experimental
*
* Artifact type for test annotations.
*/
interface TestAnnotationArtifact extends TestArtifactBase {
	type: "internal:annotation";
	annotation: TestAnnotation;
}
interface VisualRegressionArtifactAttachment extends TestAttachment {
	name: "reference" | "actual" | "diff";
	width: number;
	height: number;
}
/**
* @experimental
*
* Artifact type for visual regressions.
*/
interface VisualRegressionArtifact extends TestArtifactBase {
	type: "internal:toMatchScreenshot";
	kind: "visual-regression";
	message: string;
	attachments: VisualRegressionArtifactAttachment[];
}
interface FailureScreenshotArtifactAttachment extends TestAttachment {
	path: string;
	/** Original file system path to the screenshot, before attachment resolution */
	originalPath: string;
	body?: undefined;
}
/**
* @experimental
*
* Artifact type for failure screenshots.
*/
interface FailureScreenshotArtifact extends TestArtifactBase {
	type: "internal:failureScreenshot";
	attachments: [FailureScreenshotArtifactAttachment] | [];
}
/**
* @experimental
* @advanced
*
* Registry for custom test artifact types.
*
* Augment this interface to register custom artifact types that your tests can produce.
*
* Each custom artifact should extend {@linkcode TestArtifactBase} and include a unique `type` discriminator property.
*
* @remarks
* - Use a `Symbol` as the **registry key** to guarantee uniqueness
* - The `type` property should follow the pattern `'package-name:artifact-name'`, `'internal:'` is a reserved prefix
* - Use `attachments` to include files or data; extend {@linkcode TestAttachment} for custom metadata
* - `location` property is automatically injected to indicate where the artifact was created
*
* @example
*  ```ts
* // Define custom attachment type for generated PDF
* interface PDFAttachment extends TestAttachment {
*   contentType: 'application/pdf'
*   body: Uint8Array
*   pageCount: number
*   fileSize: number
* }
*
* interface PDFGenerationArtifact extends TestArtifactBase {
*   type: 'my-plugin:pdf-generation'
*   templateName: string
*   isValid: boolean
*   attachments: [PDFAttachment]
* }
*
* // Use a symbol to guarantee key uniqueness
* const pdfKey = Symbol('pdf-generation')
*
* declare module 'vitest' {
*   interface TestArtifactRegistry {
*     [pdfKey]: PDFGenerationArtifact
*   }
* }
*
* // Custom assertion for PDF generation
* async function toGenerateValidPDF(
*   this: MatcherState,
*   actual: PDFTemplate,
*   data: Record<string, unknown>
* ): AsyncExpectationResult {
*   const pdfBuffer = await actual.render(data)
*   const validation = await validatePDF(pdfBuffer)
*
*   await recordArtifact(this.task, {
*     type: 'my-plugin:pdf-generation',
*     templateName: actual.name,
*     isValid: validation.success,
*     attachments: [{
*       contentType: 'application/pdf',
*       body: pdfBuffer,
*       pageCount: validation.pageCount,
*       fileSize: pdfBuffer.byteLength
*     }]
*   })
*
*   return {
*     pass: validation.success,
*     message: () => validation.success
*       ? `Generated valid PDF with ${validation.pageCount} pages`
*       : `Invalid PDF: ${validation.error}`
*   }
* }
* ```
*/
interface TestArtifactRegistry {}
/**
* @experimental
*
* Union type of all test artifacts, including built-in and custom registered artifacts.
*
* This type automatically includes all artifacts registered via {@link TestArtifactRegistry}.
*/
type TestArtifact = FailureScreenshotArtifact | TestAnnotationArtifact | VisualRegressionArtifact | TestArtifactRegistry[keyof TestArtifactRegistry];

export { afterAll as a8, afterEach as a9, aroundAll as aa, aroundEach as ab, beforeAll as ac, beforeEach as ad, onTestFailed as ae, onTestFinished as af, createChainable as ah };
export type { TestFunction as $, AfterAllListener as A, BeforeAllListener as B, CancelReason as C, TaskBase as D, TaskCustomOptions as E, FileSpecification as F, TaskEventPack as G, TaskHook as H, ImportDuration as I, TaskMeta as J, TaskPopulated as K, TaskResult as L, TaskResultPack as M, TaskState as N, OnTestFailedHandler as O, TestAnnotation as P, TestAnnotationArtifact as Q, Retry as R, Suite as S, TestArtifact as T, TestAnnotationLocation as U, VitestRunner as V, TestArtifactBase as W, TestArtifactLocation as X, TestArtifactRegistry as Y, TestAttachment as Z, TestContext as _, Test as a, TestOptions as a0, TestTagDefinition as a1, TestTags as a2, Use as a3, VisualRegressionArtifact as a4, VitestRunnerConfig as a5, VitestRunnerConstructor as a6, VitestRunnerImportSource as a7, ChainableFunction as ag, SuiteHooks as b, File as c, TaskUpdateEvent as d, Task as e, TestAPI as f, SuiteAPI as g, SuiteCollector as h, AfterEachListener as i, AroundAllListener as j, AroundEachListener as k, BeforeEachListener as l, FailureScreenshotArtifact as m, Fixture as n, FixtureFn as o, FixtureOptions as p, Fixtures as q, InferFixturesTypes as r, OnTestFinishedHandler as s, RunMode as t, RuntimeContext as u, SequenceHooks as v, SequenceSetupFiles as w, SerializableRetry as x, SuiteFactory as y, SuiteOptions as z };
