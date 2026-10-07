import { File as File$1, TestAnnotation, TaskResultPack as TaskResultPack$1, TaskEventPack, TaskPopulated, Suite as Suite$1, Test as Test$1, Custom as Custom$1, Task as Task$1, TaskBase as TaskBase$1, TaskResult as TaskResult$1, DoneCallback as DoneCallback$1, RuntimeContext as RuntimeContext$1, SuiteHooks as SuiteHooks$1, SequenceHooks as SequenceHooks$1, SequenceSetupFiles as SequenceSetupFiles$1 } from '@vitest/runner';
export { CancelReason, ExtendedContext, HookCleanupCallback, HookListener, ImportDuration, OnTestFailedHandler, OnTestFinishedHandler, RunMode, Custom as RunnerCustomCase, Task as RunnerTask, TaskBase as RunnerTaskBase, TaskEventPack as RunnerTaskEventPack, TaskResult as RunnerTaskResult, TaskResultPack as RunnerTaskResultPack, Test as RunnerTestCase, File as RunnerTestFile, Suite as RunnerTestSuite, SuiteAPI, SuiteCollector, SuiteFactory, TaskContext, TaskCustomOptions, TaskMeta, TaskState, TestAPI, TestAnnotation, TestContext, TestFunction, TestOptions, afterAll, afterEach, beforeAll, beforeEach, describe, it, onTestFailed, onTestFinished, suite, test } from '@vitest/runner';
import { S as SerializedTestSpecification, h as CoverageProvider$1, a as ReportContext$1, i as CoverageProviderModule$1, j as CoverageReporter$1, k as CoverageProviderName, l as CoverageOptions$1, R as ResolvedCoverageOptions$1, B as BaseCoverageOptions$1, m as CoverageIstanbulOptions$1, c as CoverageV8Options$1, n as CustomProviderOptions$1, o as Reporter$1, V as Vitest$1, p as BrowserScript$1, q as BrowserConfigOptions$1, r as BuiltinEnvironment$1, s as VitestEnvironment$1, P as Pool$1, t as PoolOptions$1, u as CSSModuleScopeStrategy$1, A as ApiConfig$1, v as VitestRunMode$1, D as DepsOptimizationOptions$1, w as TransformModePatterns$1, I as InlineConfig$1, x as TypecheckConfig$1, y as UserConfig$1, z as ResolvedConfig$1, E as ProjectConfig$1, U as UserWorkspaceConfig$1, F as BenchmarkUserOptions$1 } from './chunks/reporters.d.BFLkQcL6.js';
export { G as BrowserTesterOptions } from './chunks/reporters.d.BFLkQcL6.js';
import { W as WorkerContext$1 } from './chunks/worker.d.CKwWzBSj.js';
import { R as RawErrsMap$1, T as TscErrorInfo$1, C as CollectLineNumbers$1, a as CollectLines$1, b as RootAndTarget$1, c as Context$1 } from './chunks/global.d.MAmajcmJ.js';
import { b as Awaitable$1, U as UserConsoleLog, L as LabelColor, M as ModuleGraphData, P as ProvidedContext, N as Nullable$1, c as Arrayable$1, d as ArgumentsType$1, e as MutableArray$1, C as Constructable$1, a as EnvironmentReturn$1, V as VmEnvironmentReturn$1, E as Environment$1, R as ResolvedTestEnvironment$1, J as JSDOMOptions$1, H as HappyDOMOptions$1, f as EnvironmentOptions$1 } from './chunks/environment.d.cL3nLXbE.js';
export { A as AfterSuiteRunMeta, g as ModuleCache } from './chunks/environment.d.cL3nLXbE.js';
import { a as BirpcReturn, b as WorkerRPC$1 } from './chunks/worker.d.1GmBbd7G.js';
export { C as ContextRPC, d as ContextTestEnvironment, e as ResolveIdFunction, c as RunnerRPC, R as RuntimeRPC, T as TestExecutionMethod, W as WorkerGlobalState } from './chunks/worker.d.1GmBbd7G.js';
import './chunks/vite.d.CMLlLIFP.js';
import { a as SerializedConfig, F as FakeTimerInstallOpts, R as RuntimeOptions } from './chunks/config.d.D2ROskhv.js';
export { b as RuntimeConfig, S as SerializedCoverageConfig } from './chunks/config.d.D2ROskhv.js';
import { ExpectStatic } from '@vitest/expect';
export { Assertion, AsymmetricMatchersContaining, DeeplyAllowMatchers, ExpectPollOptions, ExpectStatic, JestAssertion, Matchers } from '@vitest/expect';
import { spyOn, fn, MaybeMockedDeep, MaybeMocked, MaybePartiallyMocked, MaybePartiallyMockedDeep, MockInstance } from '@vitest/spy';
export { Mock, MockContext, MockInstance, Mocked, MockedClass, MockedFunction, MockedObject } from '@vitest/spy';
import { M as MockFactoryWithHelper, a as MockOptions } from './chunks/mocker.d.BE_2ls6u.js';
export { b as bench } from './chunks/suite.d.FvehnV49.js';
export { a as BenchFunction, b as Benchmark, c as BenchmarkAPI, B as BenchmarkResult } from './chunks/benchmark.d.BwvBVTda.js';
export { ExpectTypeOf, expectTypeOf } from 'expect-type';
export { SnapshotData, SnapshotMatchOptions, SnapshotResult, SnapshotSerializer, SnapshotStateOptions, SnapshotSummary, SnapshotUpdateState, UncheckedSnapshot } from '@vitest/snapshot';
export { ErrorWithDiff, ParsedStack, SerializedError, TestError } from '@vitest/utils';
export { DiffOptions } from '@vitest/utils/diff';
import * as chai from 'chai';
export { chai };
export { assert, should } from 'chai';
export { Bench as BenchFactory, Options as BenchOptions, Task as BenchTask, TaskResult as BenchTaskResult } from 'tinybench';
import 'node:stream';
import 'vite';
import 'node:console';
import '@vitest/mocker';
import '@vitest/utils/source-map';
import '@vitest/pretty-format';
import 'vite-node';
import './chunks/coverage.d.S9RMNXIe.js';
import 'vite-node/client';
import '@vitest/snapshot/manager';
import 'node:fs';
import 'node:worker_threads';
import 'vitest/optional-types.js';
import '@vitest/snapshot/environment';
import '@vitest/runner/utils';

interface SourceMap {
	file: string;
	mappings: string;
	names: string[];
	sources: string[];
	sourcesContent?: string[];
	version: number;
	toString: () => string;
	toUrl: () => string;
}
interface TransformResultWithSource {
	code: string;
	map: SourceMap | {
		mappings: ""
	} | null;
	etag?: string;
	deps?: string[];
	dynamicDeps?: string[];
	source?: string;
}
interface WebSocketHandlers {
	onTaskUpdate: (packs: TaskResultPack$1[], events: TaskEventPack[]) => void;
	getFiles: () => File$1[];
	getTestFiles: () => Promise<SerializedTestSpecification[]>;
	getPaths: () => string[];
	getConfig: () => SerializedConfig;
	// TODO: Remove in v4
	/** @deprecated -- Use `getResolvedProjectLabels` instead */
	getResolvedProjectNames: () => string[];
	getResolvedProjectLabels: () => {
		name: string
		color?: LabelColor
	}[];
	getModuleGraph: (projectName: string, id: string, browser?: boolean) => Promise<ModuleGraphData>;
	getTransformResult: (projectName: string, id: string, browser?: boolean) => Promise<TransformResultWithSource | undefined>;
	readTestFile: (id: string) => Promise<string | null>;
	saveTestFile: (id: string, content: string) => Promise<void>;
	rerun: (files: string[], resetTestNamePattern?: boolean) => Promise<void>;
	rerunTask: (id: string) => Promise<void>;
	updateSnapshot: (file?: File$1) => Promise<void>;
	getUnhandledErrors: () => unknown[];
}
interface WebSocketEvents {
	onCollected?: (files?: File$1[]) => Awaitable$1<void>;
	onFinished?: (files: File$1[], errors: unknown[], coverage?: unknown) => Awaitable$1<void>;
	onTestAnnotate?: (testId: string, annotation: TestAnnotation) => Awaitable$1<void>;
	onTaskUpdate?: (packs: TaskResultPack$1[], events: TaskEventPack[]) => Awaitable$1<void>;
	onUserConsoleLog?: (log: UserConsoleLog) => Awaitable$1<void>;
	onPathsCollected?: (paths?: string[]) => Awaitable$1<void>;
	onSpecsCollected?: (specs?: SerializedTestSpecification[]) => Awaitable$1<void>;
	onFinishedReportCoverage: () => void;
}
type WebSocketRPC = BirpcReturn<WebSocketEvents, WebSocketHandlers>;

// CI fails only for this file, but it works locally

declare function createExpect(test?: TaskPopulated): ExpectStatic;
declare const globalExpect: ExpectStatic;

/**
* Gives access to injected context provided from the main thread.
* This usually returns a value provided by `globalSetup` or an external library.
*/
declare function inject<T extends keyof ProvidedContext & string>(key: T): ProvidedContext[T];

// The waitFor function was inspired by https://github.com/testing-library/web-testing-library/pull/2
type WaitForCallback<T> = () => T | Promise<T>;
interface WaitForOptions {
	/**
	* @description Time in ms between each check callback
	* @default 50ms
	*/
	interval?: number;
	/**
	* @description Time in ms after which the throw a timeout error
	* @default 1000ms
	*/
	timeout?: number;
}
declare function waitFor<T>(callback: WaitForCallback<T>, options?: number | WaitForOptions): Promise<T>;
type WaitUntilCallback<T> = () => T | Promise<T>;
interface WaitUntilOptions extends Pick<WaitForOptions, "interval" | "timeout"> {}
type Truthy<T> = T extends false | "" | 0 | null | undefined ? never : T;
declare function waitUntil<T>(callback: WaitUntilCallback<T>, options?: number | WaitUntilOptions): Promise<Truthy<T>>;

type ESModuleExports = Record<string, unknown>;
interface VitestUtils {
	/**
	* Checks if fake timers are enabled.
	*/
	isFakeTimers: () => boolean;
	/**
	* This method wraps all further calls to timers until [`vi.useRealTimers()`](https://vitest.dev/api/vi#vi-userealtimers) is called.
	*/
	useFakeTimers: (config?: FakeTimerInstallOpts) => VitestUtils;
	/**
	* Restores mocked timers to their original implementations. All timers that were scheduled before will be discarded.
	*/
	useRealTimers: () => VitestUtils;
	/**
	* This method will call every timer that was initiated after [`vi.useFakeTimers`](https://vitest.dev/api/vi#vi-usefaketimers) call.
	* It will not fire any timer that was initiated during its call.
	*/
	runOnlyPendingTimers: () => VitestUtils;
	/**
	* This method will asynchronously call every timer that was initiated after [`vi.useFakeTimers`](https://vitest.dev/api/vi#vi-usefaketimers) call, even asynchronous ones.
	* It will not fire any timer that was initiated during its call.
	*/
	runOnlyPendingTimersAsync: () => Promise<VitestUtils>;
	/**
	* This method will invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimers` will be fired.
	* If you have an infinite interval, it will throw after 10,000 tries (can be configured with [`fakeTimers.loopLimit`](https://vitest.dev/config/#faketimers-looplimit)).
	*/
	runAllTimers: () => VitestUtils;
	/**
	* This method will asynchronously invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimersAsync` will be fired even asynchronous timers.
	* If you have an infinite interval, it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](https://vitest.dev/config/#faketimers-looplimit)).
	*/
	runAllTimersAsync: () => Promise<VitestUtils>;
	/**
	* Calls every microtask that was queued by `process.nextTick`. This will also run all microtasks scheduled by themselves.
	*/
	runAllTicks: () => VitestUtils;
	/**
	* This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first.
	*/
	advanceTimersByTime: (ms: number) => VitestUtils;
	/**
	* This method will invoke every initiated timer until the specified number of milliseconds is passed or the queue is empty - whatever comes first. This will include and await asynchronously set timers.
	*/
	advanceTimersByTimeAsync: (ms: number) => Promise<VitestUtils>;
	/**
	* Will call next available timer. Useful to make assertions between each timer call. You can chain call it to manage timers by yourself.
	*/
	advanceTimersToNextTimer: () => VitestUtils;
	/**
	* Will call next available timer and wait until it's resolved if it was set asynchronously. Useful to make assertions between each timer call.
	*/
	advanceTimersToNextTimerAsync: () => Promise<VitestUtils>;
	/**
	* Similar to [`vi.advanceTimersByTime`](https://vitest.dev/api/vi#vi-advancetimersbytime), but will advance timers by the milliseconds needed to execute callbacks currently scheduled with `requestAnimationFrame`.
	*/
	advanceTimersToNextFrame: () => VitestUtils;
	/**
	* Get the number of waiting timers.
	*/
	getTimerCount: () => number;
	/**
	* If fake timers are enabled, this method simulates a user changing the system clock (will affect date related API like `hrtime`, `performance.now` or `new Date()`) - however, it will not fire any timers.
	* If fake timers are not enabled, this method will only mock `Date.*` and `new Date()` calls.
	*/
	setSystemTime: (time: number | string | Date) => VitestUtils;
	/**
	* Returns mocked current date. If date is not mocked the method will return `null`.
	*/
	getMockedSystemTime: () => Date | null;
	/**
	* When using `vi.useFakeTimers`, `Date.now` calls are mocked. If you need to get real time in milliseconds, you can call this function.
	*/
	getRealSystemTime: () => number;
	/**
	* Removes all timers that are scheduled to run. These timers will never run in the future.
	*/
	clearAllTimers: () => VitestUtils;
	/**
	* Creates a spy on a method or getter/setter of an object similar to [`vi.fn()`](https://vitest.dev/api/vi#vi-fn). It returns a [mock function](https://vitest.dev/api/mock).
	* @example
	* ```ts
	* const cart = {
	*   getApples: () => 42
	* }
	*
	* const spy = vi.spyOn(cart, 'getApples').mockReturnValue(10)
	*
	* expect(cart.getApples()).toBe(10)
	* expect(spy).toHaveBeenCalled()
	* expect(spy).toHaveReturnedWith(10)
	* ```
	*/
	spyOn: typeof spyOn;
	/**
	* Creates a spy on a function, though can be initiated without one. Every time a function is invoked, it stores its call arguments, returns, and instances. Also, you can manipulate its behavior with [methods](https://vitest.dev/api/mock).
	*
	* If no function is given, mock will return `undefined`, when invoked.
	* @example
	* ```ts
	* const getApples = vi.fn(() => 0)
	*
	* getApples()
	*
	* expect(getApples).toHaveBeenCalled()
	* expect(getApples).toHaveReturnedWith(0)
	*
	* getApples.mockReturnValueOnce(5)
	*
	* expect(getApples()).toBe(5)
	* expect(getApples).toHaveNthReturnedWith(2, 5)
	* ```
	*/
	fn: typeof fn;
	/**
	* Wait for the callback to execute successfully. If the callback throws an error or returns a rejected promise it will continue to wait until it succeeds or times out.
	*
	* This is very useful when you need to wait for some asynchronous action to complete, for example, when you start a server and need to wait for it to start.
	* @example
	* ```ts
	* const server = createServer()
	*
	* await vi.waitFor(
	*   () => {
	*     if (!server.isReady)
	*       throw new Error('Server not started')
	*
	*     console.log('Server started')
	*   }, {
	*     timeout: 500, // default is 1000
	*     interval: 20, // default is 50
	*   }
	* )
	* ```
	*/
	waitFor: typeof waitFor;
	/**
	* This is similar to [`vi.waitFor`](https://vitest.dev/api/vi#vi-waitfor), but if the callback throws any errors, execution is immediately interrupted and an error message is received.
	*
	* If the callback returns a falsy value, the next check will continue until a truthy value is returned. This is useful when you need to wait for something to exist before taking the next step.
	* @example
	* ```ts
	* const element = await vi.waitUntil(
	*   () => document.querySelector('.element'),
	*   {
	*     timeout: 500, // default is 1000
	*     interval: 20, // default is 50
	*   }
	* )
	*
	* // do something with the element
	* expect(element.querySelector('.element-child')).toBeTruthy()
	* ```
	*/
	waitUntil: typeof waitUntil;
	/**
	* Run the factory before imports are evaluated. You can return a value from the factory
	* to reuse it inside your [`vi.mock`](https://vitest.dev/api/vi#vi-mock) factory and tests.
	*
	* If used with [`vi.mock`](https://vitest.dev/api/vi#vi-mock), both will be hoisted in the order they are defined in.
	*/
	hoisted: <T>(factory: () => T) => T;
	/**
	* Mocks every import call to the module even if it was already statically imported.
	*
	* The call to `vi.mock` is hoisted to the top of the file, so you don't have access to variables declared in the global file scope
	* unless they are defined with [`vi.hoisted`](https://vitest.dev/api/vi#vi-hoisted) before this call.
	*
	* Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking#modules).
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	* @param factory Mocked module factory. The result of this function will be an exports object
	*/
	// eslint-disable-next-line ts/method-signature-style
	mock(path: string, factory?: MockFactoryWithHelper | MockOptions): void;
	// eslint-disable-next-line ts/method-signature-style
	mock<T>(module: Promise<T>, factory?: MockFactoryWithHelper<T> | MockOptions): void;
	/**
	* Removes module from mocked registry. All calls to import will return the original module even if it was mocked before.
	*
	* This call is hoisted to the top of the file, so it will only unmock modules that were defined in `setupFiles`, for example.
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	*/
	// eslint-disable-next-line ts/method-signature-style
	unmock(path: string): void;
	// eslint-disable-next-line ts/method-signature-style
	unmock(module: Promise<unknown>): void;
	/**
	* Mocks every subsequent [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) call.
	*
	* Unlike [`vi.mock`](https://vitest.dev/api/vi#vi-mock), this method will not mock statically imported modules because it is not hoisted to the top of the file.
	*
	* Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking#modules).
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	* @param factory Mocked module factory. The result of this function will be an exports object
	*/
	// eslint-disable-next-line ts/method-signature-style
	doMock(path: string, factory?: MockFactoryWithHelper | MockOptions): void;
	// eslint-disable-next-line ts/method-signature-style
	doMock<T>(module: Promise<T>, factory?: MockFactoryWithHelper<T> | MockOptions): void;
	/**
	* Removes module from mocked registry. All subsequent calls to import will return original module.
	*
	* Unlike [`vi.unmock`](https://vitest.dev/api/vi#vi-unmock), this method is not hoisted to the top of the file.
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	*/
	// eslint-disable-next-line ts/method-signature-style
	doUnmock(path: string): void;
	// eslint-disable-next-line ts/method-signature-style
	doUnmock(module: Promise<unknown>): void;
	/**
	* Imports module, bypassing all checks if it should be mocked.
	* Can be useful if you want to mock module partially.
	* @example
	* ```ts
	* vi.mock('./example.js', async () => {
	*  const axios = await vi.importActual<typeof import('./example.js')>('./example.js')
	*
	*  return { ...axios, get: vi.fn() }
	* })
	* ```
	* @param path Path to the module. Can be aliased, if your config supports it
	*/
	importActual: <T = ESModuleExports>(path: string) => Promise<T>;
	/**
	* Imports a module with all of its properties and nested properties mocked.
	*
	* Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking#modules).
	* @example
	* ```ts
	* const example = await vi.importMock<typeof import('./example.js')>('./example.js')
	* example.calc.mockReturnValue(10)
	* expect(example.calc()).toBe(10)
	* ```
	* @param path Path to the module. Can be aliased, if your config supports it
	* @returns Fully mocked module
	*/
	importMock: <T = ESModuleExports>(path: string) => Promise<MaybeMockedDeep<T>>;
	/**
	* Deeply mocks properties and methods of a given object
	* in the same way as `vi.mock()` mocks module exports.
	*
	* @example
	* ```ts
	* const original = {
	*   simple: () => 'value',
	*   nested: {
	*     method: () => 'real'
	*   },
	*   prop: 'foo',
	* }
	*
	* const mocked = vi.mockObject(original)
	* expect(mocked.simple()).toBe(undefined)
	* expect(mocked.nested.method()).toBe(undefined)
	* expect(mocked.prop).toBe('foo')
	*
	* mocked.simple.mockReturnValue('mocked')
	* mocked.nested.method.mockReturnValue('mocked nested')
	*
	* expect(mocked.simple()).toBe('mocked')
	* expect(mocked.nested.method()).toBe('mocked nested')
	* ```
	*
	* @param value - The object to be mocked
	* @returns A deeply mocked version of the input object
	*/
	mockObject: <T>(value: T) => MaybeMockedDeep<T>;
	/**
	* Type helper for TypeScript. Just returns the object that was passed.
	*
	* When `partial` is `true` it will expect a `Partial<T>` as a return value. By default, this will only make TypeScript believe that
	* the first level values are mocked. You can pass down `{ deep: true }` as a second argument to tell TypeScript that the whole object is mocked, if it actually is.
	* @example
	* ```ts
	* import example from './example.js'
	* vi.mock('./example.js')
	*
	* test('1 + 1 equals 10' async () => {
	*  vi.mocked(example.calc).mockReturnValue(10)
	*  expect(example.calc(1, '+', 1)).toBe(10)
	* })
	* ```
	* @param item Anything that can be mocked
	* @param deep If the object is deeply mocked
	* @param options If the object is partially or deeply mocked
	*/
	mocked: (<T>(item: T, deep?: false) => MaybeMocked<T>) & (<T>(item: T, deep: true) => MaybeMockedDeep<T>) & (<T>(item: T, options: {
		partial?: false
		deep?: false
	}) => MaybeMocked<T>) & (<T>(item: T, options: {
		partial?: false
		deep: true
	}) => MaybeMockedDeep<T>) & (<T>(item: T, options: {
		partial: true
		deep?: false
	}) => MaybePartiallyMocked<T>) & (<T>(item: T, options: {
		partial: true
		deep: true
	}) => MaybePartiallyMockedDeep<T>) & (<T>(item: T) => MaybeMocked<T>);
	/**
	* Checks that a given parameter is a mock function. If you are using TypeScript, it will also narrow down its type.
	*/
	isMockFunction: (fn: any) => fn is MockInstance;
	/**
	* Calls [`.mockClear()`](https://vitest.dev/api/mock#mockclear) on every mocked function.
	*
	* This will only empty `.mock` state, it will not affect mock implementations.
	*
	* This is useful if you need to clean up mocks between different assertions within a test.
	*/
	clearAllMocks: () => VitestUtils;
	/**
	* Calls [`.mockReset()`](https://vitest.dev/api/mock#mockreset) on every mocked function.
	*
	* This will empty `.mock` state, reset "once" implementations, and reset each mock's base implementation to its original.
	*
	* This is useful when you want to reset all mocks to their original states.
	*/
	resetAllMocks: () => VitestUtils;
	/**
	* Calls [`.mockRestore()`](https://vitest.dev/api/mock#mockrestore) on every mocked function.
	*
	* This will empty `.mock` state, restore all original mock implementations, and restore original descriptors of spied-on objects.
	*
	* This is useful for inter-test cleanup and/or removing mocks created by [`vi.spyOn(...)`](https://vitest.dev/api/vi#vi-spyon).
	*/
	restoreAllMocks: () => VitestUtils;
	/**
	* Makes value available on global namespace.
	* Useful, if you want to have global variables available, like `IntersectionObserver`.
	* You can return it back to original value with `vi.unstubAllGlobals`, or by enabling `unstubGlobals` config option.
	*/
	stubGlobal: (name: string | symbol | number, value: unknown) => VitestUtils;
	/**
	* Changes the value of `import.meta.env` and `process.env`.
	* You can return it back to original value with `vi.unstubAllEnvs`, or by enabling `unstubEnvs` config option.
	*/
	stubEnv: <T extends string>(name: T, value: T extends "PROD" | "DEV" | "SSR" ? boolean : string | undefined) => VitestUtils;
	/**
	* Reset the value to original value that was available before first `vi.stubGlobal` was called.
	*/
	unstubAllGlobals: () => VitestUtils;
	/**
	* Reset environmental variables to the ones that were available before first `vi.stubEnv` was called.
	*/
	unstubAllEnvs: () => VitestUtils;
	/**
	* Resets modules registry by clearing the cache of all modules. This allows modules to be reevaluated when reimported.
	* Top-level imports cannot be re-evaluated. Might be useful to isolate modules where local state conflicts between tests.
	*
	* This method does not reset mocks registry. To clear mocks registry, use [`vi.unmock`](https://vitest.dev/api/vi#vi-unmock) or [`vi.doUnmock`](https://vitest.dev/api/vi#vi-dounmock).
	*/
	resetModules: () => VitestUtils;
	/**
	* Wait for all imports to load. Useful, if you have a synchronous call that starts
	* importing a module that you cannot await otherwise.
	* Will also wait for new imports, started during the wait.
	*/
	dynamicImportSettled: () => Promise<void>;
	/**
	* Updates runtime config. You can only change values that are used when executing tests.
	*/
	setConfig: (config: RuntimeOptions) => void;
	/**
	* If config was changed with `vi.setConfig`, this will reset it to the original state.
	*/
	resetConfig: () => void;
}
declare const vitest: VitestUtils;
declare const vi: VitestUtils;

interface AssertType {
	<T>(value: T): void;
}
declare const assertType: AssertType;

interface BrowserUI {
	setCurrentFileId: (fileId: string) => void;
	setIframeViewport: (width: number, height: number) => Promise<void>;
}

/** @deprecated import `TypeCheckRawErrorsMap` from `vitest/node` instead */
type RawErrsMap = RawErrsMap$1;
/** @deprecated import `TypeCheckErrorInfo` from `vitest/node` instead */
type TscErrorInfo = TscErrorInfo$1;
/** @deprecated import `TypeCheckCollectLineNumbers` from `vitest/node` instead */
type CollectLineNumbers = CollectLineNumbers$1;
/** @deprecated import `TypeCheckCollectLines` from `vitest/node` instead */
type CollectLines = CollectLines$1;
/** @deprecated import `TypeCheckRootAndTarget` from `vitest/node` instead */
type RootAndTarget = RootAndTarget$1;
/** @deprecated import `TypeCheckContext` from `vitest/node` instead */
type Context = Context$1;
/** @deprecated use `RunnerTestSuite` instead */
type Suite = Suite$1;
/** @deprecated use `RunnerTestFile` instead */
type File = File$1;
/** @deprecated use `RunnerTestCase` instead */
type Test = Test$1;
/** @deprecated do not use `Custom`, use `RunnerTestCase` instead */
type Custom = Custom$1;
/** @deprecated use `RunnerTask` instead */
type Task = Task$1;
/** @deprecated use `RunnerTaskBase` instead */
type TaskBase = TaskBase$1;
/** @deprecated use `RunnerTaskResult` instead */
type TaskResult = TaskResult$1;
/** @deprecated use `RunnerTaskResultPack` instead */
type TaskResultPack = TaskResultPack$1;
/** @deprecated don't use `DoneCallback` since it's not supported */
type DoneCallback = DoneCallback$1;
/** @deprecated internal type, don't use it */
type RuntimeContext = RuntimeContext$1;
/** @deprecated internal type, don't use it */
type SuiteHooks = SuiteHooks$1;

/** @deprecated import from `vitest/node` instead */
type WorkerContext = WorkerContext$1;
/** @deprecated import from `vitest/node` instead */
type WorkerRPC = WorkerRPC$1;

/** @deprecated do not use, internal helper */
type Awaitable<T> = Awaitable$1<T>;
/** @deprecated do not use, internal helper */
type Nullable<T> = Nullable$1<T>;
/** @deprecated do not use, internal helper */
type Arrayable<T> = Arrayable$1<T>;
/** @deprecated do not use, internal helper */
type ArgumentsType<T> = ArgumentsType$1<T>;
/** @deprecated do not use, internal helper */
type MutableArray<T extends readonly any[]> = MutableArray$1<T>;
/** @deprecated do not use, internal helper */
type Constructable = Constructable$1;

/** @deprecated import from `vitest/environments` instead */
type EnvironmentReturn = EnvironmentReturn$1;
/** @deprecated import from `vitest/environments` instead */
type VmEnvironmentReturn = VmEnvironmentReturn$1;
/** @deprecated import from `vitest/environments` instead */
type Environment = Environment$1;
/** @deprecated do not use it */
type ResolvedTestEnvironment = ResolvedTestEnvironment$1;
/** @deprecated import from `vitest/node` instead */
type CoverageProvider = CoverageProvider$1;
/** @deprecated import from `vitest/node` instead */
type ReportContext = ReportContext$1;
/** @deprecated import from `vitest/node` instead */
type CoverageProviderModule = CoverageProviderModule$1;
/** @deprecated import from `vitest/node` instead */
type CoverageReporter = CoverageReporter$1;
/** @deprecated import from `vitest/node` instead */
type CoverageOptions<T extends CoverageProviderName = CoverageProviderName> = CoverageOptions$1<T>;
/** @deprecated import from `vitest/node` instead */
type ResolvedCoverageOptions<T extends CoverageProviderName = CoverageProviderName> = ResolvedCoverageOptions$1<T>;
/** @deprecated import from `vitest/node` instead */
type BaseCoverageOptions = BaseCoverageOptions$1;
/** @deprecated import from `vitest/node` instead */
type CoverageIstanbulOptions = CoverageIstanbulOptions$1;
/** @deprecated import from `vitest/node` instead */
type CoverageV8Options = CoverageV8Options$1;
/** @deprecated import from `vitest/node` instead */
type CustomProviderOptions = CustomProviderOptions$1;

/** @deprecated import from `vitest/reporter` instead */
type Reporter = Reporter$1;
/** @deprecated import from `vitest/node` instead */
type Vitest = Vitest$1;

/** @deprecated import from `vitest/node` instead */
type BrowserScript = BrowserScript$1;
/** @deprecated import from `vitest/node` instead */
type BrowserConfigOptions = BrowserConfigOptions$1;
/** @deprecated import from `vitest/node` instead */
type SequenceHooks = SequenceHooks$1;
/** @deprecated import from `vitest/node` instead */
type SequenceSetupFiles = SequenceSetupFiles$1;
/** @deprecated import from `vitest/node` instead */
type BuiltinEnvironment = BuiltinEnvironment$1;
/** @deprecated import from `vitest/node` instead */
type VitestEnvironment = VitestEnvironment$1;
/** @deprecated import from `vitest/node` instead */
type Pool = Pool$1;
/** @deprecated import from `vitest/node` instead */
type PoolOptions = PoolOptions$1;
/** @deprecated import from `vitest/node` instead */
type CSSModuleScopeStrategy = CSSModuleScopeStrategy$1;
/** @deprecated import from `vitest/node` instead */
type ApiConfig = ApiConfig$1;
/** @deprecated import from `vitest/node` instead */
type JSDOMOptions = JSDOMOptions$1;
/** @deprecated import from `vitest/node` instead */
type HappyDOMOptions = HappyDOMOptions$1;
/** @deprecated import from `vitest/node` instead */
type EnvironmentOptions = EnvironmentOptions$1;
/** @deprecated import from `vitest/node` instead */
type VitestRunMode = VitestRunMode$1;
/** @deprecated import from `vitest/node` instead */
type DepsOptimizationOptions = DepsOptimizationOptions$1;
/** @deprecated import from `vitest/node` instead */
type TransformModePatterns = TransformModePatterns$1;
/** @deprecated import from `vitest/node` instead */
type InlineConfig = InlineConfig$1;
/** @deprecated import from `vitest/node` instead */
type TypecheckConfig = TypecheckConfig$1;
/** @deprecated import from `vitest/node` instead */
type UserConfig = UserConfig$1;
/** @deprecated import from `vitest/node` instead */
type ResolvedConfig = ResolvedConfig$1;
/** @deprecated import from `vitest/node` instead */
type ProjectConfig = ProjectConfig$1;
/** @deprecated import from `vitest/node` instead */
type UserWorkspaceConfig = UserWorkspaceConfig$1;

/** @deprecated use `SerializedTestSpecification` instead */
type SerializableSpec = SerializedTestSpecification;

/** @deprecated import from `vitest/node` instead */
type BenchmarkUserOptions = BenchmarkUserOptions$1;

export { LabelColor, ModuleGraphData, ProvidedContext, SerializedConfig, SerializedTestSpecification, UserConsoleLog, assertType, createExpect, globalExpect as expect, inject, vi, vitest };
export type { ApiConfig, ArgumentsType, Arrayable, AssertType, Awaitable, BaseCoverageOptions, BenchmarkUserOptions, BrowserConfigOptions, BrowserScript, BrowserUI, BuiltinEnvironment, CSSModuleScopeStrategy, CollectLineNumbers, CollectLines, Constructable, Context, CoverageIstanbulOptions, CoverageOptions, CoverageProvider, CoverageProviderModule, CoverageReporter, CoverageV8Options, Custom, CustomProviderOptions, DepsOptimizationOptions, DoneCallback, Environment, EnvironmentOptions, EnvironmentReturn, File, HappyDOMOptions, InlineConfig, JSDOMOptions, MutableArray, Nullable, Pool, PoolOptions, ProjectConfig, RawErrsMap, ReportContext, Reporter, ResolvedConfig, ResolvedCoverageOptions, ResolvedTestEnvironment, RootAndTarget, RuntimeContext, SequenceHooks, SequenceSetupFiles, SerializableSpec, Suite, SuiteHooks, Task, TaskBase, TaskResult, TaskResultPack, Test, TransformModePatterns, TransformResultWithSource, TscErrorInfo, TypecheckConfig, UserConfig, UserWorkspaceConfig, Vitest, VitestEnvironment, VitestRunMode, VitestUtils, VmEnvironmentReturn, WebSocketEvents, WebSocketHandlers, WebSocketRPC, WorkerContext, WorkerRPC };
