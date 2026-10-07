import { M as ModuleDefinitionDurationsDiagnostic, U as UntrackedModuleDefinitionDiagnostic, S as SerializedTestSpecification, a as ModuleDefinitionDiagnostic, b as ModuleDefinitionLocation, c as SourceModuleDiagnostic, d as SourceModuleLocations } from './chunks/browser.d.BcoexmFG.js';
export { B as BrowserTesterOptions } from './chunks/browser.d.BcoexmFG.js';
import './chunks/global.d.DVsSRdQ5.js';
import { File, TestAnnotation, TestArtifact, TaskResultPack, TaskEventPack, Test, TaskPopulated } from '@vitest/runner';
export { CancelReason, ImportDuration, OnTestFailedHandler, OnTestFinishedHandler, RunMode, Task as RunnerTask, TaskBase as RunnerTaskBase, TaskEventPack as RunnerTaskEventPack, TaskResult as RunnerTaskResult, TaskResultPack as RunnerTaskResultPack, Test as RunnerTestCase, File as RunnerTestFile, Suite as RunnerTestSuite, SuiteAPI, SuiteCollector, SuiteFactory, SuiteOptions, TaskCustomOptions, TaskMeta, TaskState, TestAPI, TestAnnotation, TestAnnotationArtifact, TestArtifact, TestArtifactBase, TestArtifactLocation, TestArtifactRegistry, TestAttachment, TestContext, TestFunction, TestOptions, VitestRunnerConfig as TestRunnerConfig, TestTags, VitestRunner as VitestTestRunner, afterAll, afterEach, aroundAll, aroundEach, beforeAll, beforeEach, describe, it, onTestFailed, onTestFinished, recordArtifact, suite, test } from '@vitest/runner';
import { Awaitable } from '@vitest/utils';
export { ParsedStack, SerializedError, TestError } from '@vitest/utils';
import { b as BirpcReturn } from './chunks/worker.d.ZpHpO4yb.js';
export { C as ContextRPC, c as ContextTestEnvironment, T as TestExecutionMethod, W as WorkerGlobalState } from './chunks/worker.d.ZpHpO4yb.js';
import { b as SerializedRootConfig, F as FakeTimerInstallOpts, R as RuntimeOptions } from './chunks/config.d.A1h_Y6Jt.js';
export { c as RuntimeConfig, S as SerializedConfig, a as SerializedCoverageConfig } from './chunks/config.d.A1h_Y6Jt.js';
import { U as UserConsoleLog, L as LabelColor, M as ModuleGraphData, P as ProvidedContext } from './chunks/traces.d.D2T_R8rx.js';
export { a as AfterSuiteRunMeta } from './chunks/traces.d.D2T_R8rx.js';
import { ExpectStatic, MatcherState, SyncExpectationResult, AsyncExpectationResult, ExpectationResult } from '@vitest/expect';
export { Assertion, AsymmetricMatchersContaining, DeeplyAllowMatchers, ExpectPollOptions, ExpectStatic, JestAssertion, RawMatcherFn as Matcher, ExpectationResult as MatcherResult, MatcherState, Matchers, chai } from '@vitest/expect';
import { DomainSnapshotAdapter } from '@vitest/snapshot';
export { SnapshotData, SnapshotMatchOptions, SnapshotResult, SnapshotSerializer, SnapshotStateOptions, SnapshotSummary, SnapshotUpdateState, UncheckedSnapshot } from '@vitest/snapshot';
import { spyOn, fn, MaybeMockedDeep, MaybeMocked, MaybePartiallyMocked, MaybePartiallyMockedDeep, MockInstance } from '@vitest/spy';
export { Mock, MockContext, MockInstance, MockResult, MockResultIncomplete, MockResultReturn, MockResultThrow, MockSettledResult, MockSettledResultFulfilled, MockSettledResultIncomplete, MockSettledResultRejected, Mocked, MockedClass, MockedFunction, MockedObject } from '@vitest/spy';
import { Disposable } from 'vitest/optional-runtime-types.js';
import { ModuleMockFactoryWithHelper, ModuleMockOptions } from '@vitest/mocker';
export { b as bench } from './chunks/suite.d.udJtyAgw.js';
export { V as EvaluatedModules } from './chunks/evaluatedModules.d.BxJ5omdx.js';
export { NodeBenchmarkRunner as BenchmarkRunner, VitestTestRunner as TestRunner } from './runners.js';
export { a as BenchFunction, b as Benchmark, c as BenchmarkAPI, B as BenchmarkResult } from './chunks/benchmark.d.DAaHLpsq.js';
export { ExpectTypeOf, expectTypeOf } from 'expect-type';
export { a as RunnerRPC, R as RuntimeRPC } from './chunks/rpc.d.B_8sPU0w.js';
export { DiffOptions } from '@vitest/utils/diff';
export { Bench as BenchFactory, Options as BenchOptions, Task as BenchTask, TaskResult as BenchTaskResult } from 'tinybench';
import '@vitest/pretty-format';
import 'vite/module-runner';
import './chunks/environment.d.CrsxCzP1.js';
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
interface ExternalResult {
	source?: string;
}
interface TransformResultWithSource {
	code: string;
	map: SourceMap | {
		mappings: "";
	} | null;
	etag?: string;
	deps?: string[];
	dynamicDeps?: string[];
	source?: string;
	transformTime?: number;
	modules?: ModuleDefinitionDurationsDiagnostic[];
	untrackedModules?: UntrackedModuleDefinitionDiagnostic[];
}
interface WebSocketHandlers {
	getFiles: () => File[];
	getTestFiles: () => Promise<SerializedTestSpecification[]>;
	getPaths: () => string[];
	getConfig: () => SerializedRootConfig;
	/**
	* @deprecated Use `getConfig().projects` instead.
	*/
	getResolvedProjectLabels: () => {
		name: string;
		color?: LabelColor;
	}[];
	getModuleGraph: (projectName: string, id: string, browser?: boolean) => Promise<ModuleGraphData>;
	getTransformResult: (projectName: string, id: string, testFileId: string, browser?: boolean) => Promise<TransformResultWithSource | undefined>;
	getExternalResult: (id: string, testFileId: string) => Promise<ExternalResult | undefined>;
	readTestFile: (id: string) => Promise<string | null>;
	saveTestFile: (id: string, content: string) => Promise<void>;
	rerun: (files: string[], resetTestNamePattern?: boolean) => Promise<void>;
	rerunTask: (id: string) => Promise<void>;
	updateSnapshot: (file?: File) => Promise<void>;
	getUnhandledErrors: () => unknown[];
}
interface WebSocketEvents {
	onCollected?: (files?: File[]) => Awaitable<void>;
	onFinished?: (files: File[], errors: unknown[], coverage?: unknown, executionTime?: number) => Awaitable<void>;
	onTestAnnotate?: (testId: string, annotation: TestAnnotation) => Awaitable<void>;
	onTestArtifactRecord?: (testId: string, artifact: TestArtifact) => Awaitable<void>;
	onTaskUpdate?: (packs: TaskResultPack[], events: TaskEventPack[]) => Awaitable<void>;
	onUserConsoleLog?: (log: UserConsoleLog) => Awaitable<void>;
	onPathsCollected?: (paths?: string[]) => Awaitable<void>;
	onSpecsCollected?: (specs?: SerializedTestSpecification[], startTime?: number) => Awaitable<void>;
	onFinishedReportCoverage: () => void;
}
type WebSocketRPC = BirpcReturn<WebSocketEvents, WebSocketHandlers>;

declare function createExpect(test?: Test | TaskPopulated): ExpectStatic;
declare const globalExpect: ExpectStatic;
declare const assert: Chai.Assert;
declare const should: () => Chai.Should;

/**
* Gives access to injected context provided from the main thread.
* This usually returns a value provided by `globalSetup` or an external library.
*/
declare function inject<T extends keyof ProvidedContext & string>(key: T): ProvidedContext[T];

/**
* Composable snapshot matcher helpers for building custom snapshot matchers
* with `expect.extend`.
*
* @experimental
* @see https://vitest.dev/guide/snapshot.html#custom-snapshot-matchers
*/
declare const Snapshots: {
	/**
	* Composable for building custom snapshot matchers via `expect.extend`.
	* Call with `this` bound to the matcher state. Returns `{ pass, message }`
	* compatible with the custom matcher return contract.
	*
	* @example
	* ```ts
	* import { Snapshots } from 'vitest/runtime'
	*
	* expect.extend({
	*   toMatchTrimmedSnapshot(received: string) {
	*     return Snapshots.toMatchSnapshot.call(this, received.slice(0, 10))
	*   },
	* })
	* ```
	*
	* @experimental
	* @see https://vitest.dev/guide/snapshot.html#custom-snapshot-matchers
	*/
	toMatchSnapshot(this: MatcherState, received: unknown, propertiesOrHint?: object | string, hint?: string): SyncExpectationResult;
	/**
	* Composable for building custom inline snapshot matchers via `expect.extend`.
	* Call with `this` bound to the matcher state. Returns `{ pass, message }`
	* compatible with the custom matcher return contract.
	*
	* @example
	* ```ts
	* import { Snapshots } from 'vitest/runtime'
	*
	* expect.extend({
	*   toMatchTrimmedInlineSnapshot(received: string, inlineSnapshot?: string) {
	*     return Snapshots.toMatchInlineSnapshot.call(this, received.slice(0, 10), inlineSnapshot)
	*   },
	* })
	* ```
	*
	* @experimental
	* @see https://vitest.dev/guide/snapshot.html#custom-snapshot-matchers
	*/
	toMatchInlineSnapshot(this: MatcherState, received: unknown, propertiesOrInlineSnapshot?: object | string, inlineSnapshotOrHint?: string, hint?: string): SyncExpectationResult;
	/**
	* Composable for building custom file snapshot matchers via `expect.extend`.
	* Call with `this` bound to the matcher state. Returns a `Promise<{ pass, message }>`
	* compatible with the custom matcher return contract.
	*
	* @example
	* ```ts
	* import { Snapshots } from 'vitest/runtime'
	*
	* expect.extend({
	*   async toMatchTrimmedFileSnapshot(received: string, file: string) {
	*     return Snapshots.toMatchFileSnapshot.call(this, received.slice(0, 10), file)
	*   },
	* })
	* ```
	*
	* @experimental
	* @see https://vitest.dev/guide/snapshot.html#custom-snapshot-matchers
	*/
	toMatchFileSnapshot(this: MatcherState, received: unknown, filepath: string, hint?: string): AsyncExpectationResult;
	/**
	* Composable for building custom domain-based snapshot matchers via `expect.extend`.
	*
	* Call this from a matcher and pass the domain adapter that defines capture,
	* rendering, parsing, and semantic matching behavior.
	*
	* @experimental
	*/
	toMatchDomainSnapshot(this: MatcherState, domain: DomainSnapshotAdapter<any, any>, received: unknown): ExpectationResult;
	/**
	* Composable for building custom domain-based inline snapshot matchers via `expect.extend`.
	*
	* Call this from a matcher and pass the domain adapter that defines capture,
	* rendering, parsing, and semantic matching behavior.
	*
	* @experimental
	*/
	toMatchDomainInlineSnapshot(this: MatcherState, domain: DomainSnapshotAdapter<any, any>, received: unknown, inlineSnapshot?: string): ExpectationResult;
};

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
	* If you have an infinite interval, it will throw after 10,000 tries (can be configured with [`fakeTimers.loopLimit`](https://vitest.dev/config/faketimers#faketimers-looplimit)).
	*/
	runAllTimers: () => VitestUtils;
	/**
	* This method will asynchronously invoke every initiated timer until the timer queue is empty. It means that every timer called during `runAllTimersAsync` will be fired even asynchronous timers.
	* If you have an infinite interval, it will throw after 10 000 tries (can be configured with [`fakeTimers.loopLimit`](https://vitest.dev/config/faketimers#faketimers-looplimit)).
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
	* Controls how fake timers are advanced.
	* @param mode The mode to use for advancing timers.
	* - `manual`: The default behavior. Timers will only advance when you call one of `vi.advanceTimers...()` methods.
	* - `nextTimerAsync`: Timers will be advanced automatically to the next available timer after each macrotask.
	* - `interval`: Timers are advanced automatically by a specified interval.
	* @param interval The interval in milliseconds to use when `mode` is `'interval'`.
	*/
	setTimerTickMode: ((mode: "manual" | "nextTimerAsync") => VitestUtils) & ((mode: "interval", interval?: number) => VitestUtils);
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
	* Wraps a function to create an assertion helper. When an assertion fails inside the helper,
	* the error stack trace will point to where the helper was called, not inside the helper itself.
	* Works with both synchronous and asynchronous functions, and supports `expect.soft()`.
	*
	* @example
	* ```ts
	* const myEqual = vi.defineHelper((x, y) => {
	*   expect(x).toEqual(y)
	* })
	*
	* test('example', () => {
	*   myEqual('left', 'right') // Error points to this line
	* })
	* ```
	* Example output:
	* ```
	* FAIL  example.test.ts > example
	* AssertionError: expected 'left' to deeply equal 'right'
	*
	* Expected: "right"
	* Received: "left"
	*
	*  ❯ example.test.ts:6:3
	*       4| test('example', () => {
	*       5|   myEqual('left', 'right')
	*        |   ^
	*       6| })
	* ```
	* @param fn The assertion function to wrap
	* @returns A wrapped function with the same signature
	*/
	defineHelper: <F extends (...args: any) => any>(fn: F) => F;
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
	* Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking/modules).
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	* @param factory Mocked module factory. The result of this function will be an exports object
	*/
	mock(path: string, factory?: ModuleMockFactoryWithHelper | ModuleMockOptions): void;
	mock<T>(module: Promise<T>, factory?: ModuleMockFactoryWithHelper<T> | ModuleMockOptions): void;
	/**
	* Removes module from mocked registry. All calls to import will return the original module even if it was mocked before.
	*
	* This call is hoisted to the top of the file, so it will only unmock modules that were defined in `setupFiles`, for example.
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	*/
	unmock(path: string): void;
	unmock(module: Promise<unknown>): void;
	/**
	* Mocks every subsequent [dynamic import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) call.
	*
	* Unlike [`vi.mock`](https://vitest.dev/api/vi#vi-mock), this method will not mock statically imported modules because it is not hoisted to the top of the file.
	*
	* Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking/modules).
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	* @param factory Mocked module factory. The result of this function will be an exports object
	*
	* @returns A disposable object that calls {@link doUnmock()} when disposed
	*/
	doMock(path: string, factory?: ModuleMockFactoryWithHelper | ModuleMockOptions): Disposable;
	doMock<T>(module: Promise<T>, factory?: ModuleMockFactoryWithHelper<T> | ModuleMockOptions): Disposable;
	/**
	* Removes module from mocked registry. All subsequent calls to import will return original module.
	*
	* Unlike [`vi.unmock`](https://vitest.dev/api/vi#vi-unmock), this method is not hoisted to the top of the file.
	* @param path Path to the module. Can be aliased, if your Vitest config supports it
	*/
	doUnmock(path: string): void;
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
	* Mocking algorithm is described in [documentation](https://vitest.dev/guide/mocking/modules).
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
	*
	* const spied = vi.mockObject(original, { spy: true })
	* expect(spied.simple()).toBe('value')
	* expect(spied.simple).toHaveBeenCalled()
	* expect(spied.simple.mock.results[0]).toEqual({ type: 'return', value: 'value' })
	* ```
	*
	* @param value - The object to be mocked
	* @returns A deeply mocked version of the input object
	*/
	mockObject: <T>(value: T, options?: ModuleMockOptions) => MaybeMockedDeep<T>;
	/**
	* Type helper for TypeScript. Just returns the object that was passed.
	*
	* When `partial` is `true` it will expect a `Partial<T>` as a return value. By default, this will only make TypeScript believe that
	* the first level values are mocked. You can pass down `{ partial: true, deep: true }` to make nested objects also partial recursively.
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
		partial?: false;
		deep?: false;
	}) => MaybeMocked<T>) & (<T>(item: T, options: {
		partial?: false;
		deep: true;
	}) => MaybeMockedDeep<T>) & (<T>(item: T, options: {
		partial: true;
		deep?: false;
	}) => MaybePartiallyMocked<T>) & (<T>(item: T, options: {
		partial: true;
		deep: true;
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
	* If config was changed with `vi.setConfig`, this will reset it to the original state().
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

declare namespace Experimental {
	export { ModuleDefinitionDiagnostic, ModuleDefinitionDurationsDiagnostic, ModuleDefinitionLocation, SourceModuleDiagnostic, SourceModuleLocations, UntrackedModuleDefinitionDiagnostic };
}

export { Experimental, LabelColor, ModuleGraphData, ProvidedContext, SerializedRootConfig, SerializedTestSpecification, Snapshots, UserConsoleLog, assert, assertType, createExpect, globalExpect as expect, inject, should, vi, vitest };
export type { AssertType, BrowserUI, ExternalResult, TransformResultWithSource, VitestUtils, WebSocketEvents, WebSocketHandlers, WebSocketRPC };
