import { updateTask } from '@vitest/runner';
import { createDefer, getSafeTimers } from '@vitest/utils';
import { a as getBenchOptions, g as getBenchFn } from './chunks/benchmark.CYdenmiT.js';
import { g as getWorkerState } from './chunks/utils.XdZDrNZV.js';
import { setState, GLOBAL_EXPECT, getState } from '@vitest/expect';
import { getTests, getNames, getTestName } from '@vitest/runner/utils';
import { normalize } from 'pathe';
import { g as getSnapshotClient, i as inject, c as createExpect, v as vi } from './chunks/vi.bdSIJ99Y.js';
import { r as rpc } from './chunks/rpc.-pEldfrD.js';
import 'chai';
import './chunks/_commonjsHelpers.BFTU3MAI.js';
import '@vitest/snapshot';
import '@vitest/utils/error';
import '@vitest/spy';
import '@vitest/utils/source-map';
import './chunks/date.Bq6ZW5rf.js';
import './chunks/index.B521nVV-.js';

function createBenchmarkResult(name) {
	return {
		name,
		rank: 0,
		rme: 0,
		samples: []
	};
}
const benchmarkTasks = /* @__PURE__ */ new WeakMap();
async function runBenchmarkSuite(suite, runner) {
	const { Task, Bench } = await runner.importTinybench();
	const start = performance.now();
	const benchmarkGroup = [];
	const benchmarkSuiteGroup = [];
	for (const task of suite.tasks) {
		if (task.mode !== "run" && task.mode !== "queued") continue;
		if (task.meta?.benchmark) benchmarkGroup.push(task);
		else if (task.type === "suite") benchmarkSuiteGroup.push(task);
	}
	// run sub suites sequentially
	for (const subSuite of benchmarkSuiteGroup) await runBenchmarkSuite(subSuite, runner);
	if (benchmarkGroup.length) {
		const defer = createDefer();
		suite.result = {
			state: "run",
			startTime: start,
			benchmark: createBenchmarkResult(suite.name)
		};
		updateTask$1("suite-prepare", suite);
		const addBenchTaskListener = (task, benchmark) => {
			task.addEventListener("complete", (e) => {
				const task = e.task;
				const taskRes = task.result;
				const result = benchmark.result.benchmark;
				benchmark.result.state = "pass";
				Object.assign(result, taskRes);
				// compute extra stats and free raw samples as early as possible
				const samples = result.samples;
				result.sampleCount = samples.length;
				result.median = samples.length % 2 ? samples[Math.floor(samples.length / 2)] : (samples[samples.length / 2] + samples[samples.length / 2 - 1]) / 2;
				if (!runner.config.benchmark?.includeSamples) result.samples.length = 0;
				updateTask$1("test-finished", benchmark);
			}, { once: true });
			task.addEventListener("error", (e) => {
				const task = e.task;
				defer.reject(benchmark ? task.result.error : e);
			}, { once: true });
		};
		benchmarkGroup.forEach((benchmark) => {
			const options = getBenchOptions(benchmark);
			const benchmarkInstance = new Bench(options);
			const benchmarkFn = getBenchFn(benchmark);
			benchmark.result = {
				state: "run",
				startTime: start,
				benchmark: createBenchmarkResult(benchmark.name)
			};
			const task = new Task(benchmarkInstance, benchmark.name, benchmarkFn);
			benchmarkTasks.set(benchmark, task);
			addBenchTaskListener(task, benchmark);
		});
		const { setTimeout } = getSafeTimers();
		const tasks = [];
		for (const benchmark of benchmarkGroup) {
			const task = benchmarkTasks.get(benchmark);
			updateTask$1("test-prepare", benchmark);
			await task.warmup();
			tasks.push([await new Promise((resolve) => setTimeout(async () => {
				resolve(await task.run());
			})), benchmark]);
		}
		suite.result.duration = performance.now() - start;
		suite.result.state = "pass";
		updateTask$1("suite-finished", suite);
		defer.resolve(null);
		await defer;
	}
	function updateTask$1(event, task) {
		updateTask(event, task, runner);
	}
}
class NodeBenchmarkRunner {
	__vitest_executor;
	constructor(config) {
		this.config = config;
	}
	async importTinybench() {
		return await import('tinybench');
	}
	importFile(filepath, source) {
		if (source === "setup") getWorkerState().moduleCache.delete(filepath);
		return this.__vitest_executor.executeId(filepath);
	}
	async runSuite(suite) {
		await runBenchmarkSuite(suite, this);
	}
	async runTask() {
		throw new Error("`test()` and `it()` is only available in test mode.");
	}
}

// worker context is shared between all tests
const workerContext = Object.create(null);
class VitestTestRunner {
	snapshotClient = getSnapshotClient();
	workerState = getWorkerState();
	__vitest_executor;
	cancelRun = false;
	assertionsErrors = /* @__PURE__ */ new WeakMap();
	pool = this.workerState.ctx.pool;
	constructor(config) {
		this.config = config;
	}
	importFile(filepath, source) {
		if (source === "setup") this.workerState.moduleCache.delete(filepath);
		return this.__vitest_executor.executeId(filepath);
	}
	onCollectStart(file) {
		this.workerState.current = file;
	}
	onCleanupWorkerContext(listener) {
		this.workerState.onCleanup(listener);
	}
	onAfterRunFiles() {
		this.snapshotClient.clear();
		this.workerState.current = void 0;
	}
	getWorkerContext() {
		return workerContext;
	}
	async onAfterRunSuite(suite) {
		if (this.config.logHeapUsage && typeof process !== "undefined") suite.result.heap = process.memoryUsage().heapUsed;
		if (suite.mode !== "skip" && "filepath" in suite) {
			// mark snapshots in skipped tests as not obsolete
			for (const test of getTests(suite)) if (test.mode === "skip") {
				const name = getNames(test).slice(1).join(" > ");
				this.snapshotClient.skipTest(suite.file.filepath, name);
			}
			const result = await this.snapshotClient.finish(suite.file.filepath);
			await rpc().snapshotSaved(result);
		}
		this.workerState.current = suite.suite || suite.file;
	}
	onAfterRunTask(test) {
		if (this.config.logHeapUsage && typeof process !== "undefined") test.result.heap = process.memoryUsage().heapUsed;
		this.workerState.current = test.suite || test.file;
	}
	cancel(_reason) {
		this.cancelRun = true;
	}
	injectValue(key) {
		// inject has a very limiting type controlled by ProvidedContext
		// some tests override it which causes the build to fail
		return inject(key);
	}
	async onBeforeRunTask(test) {
		if (this.cancelRun) test.mode = "skip";
		if (test.mode !== "run" && test.mode !== "queued") return;
		this.workerState.current = test;
	}
	async onBeforeRunSuite(suite) {
		if (this.cancelRun) suite.mode = "skip";
		// initialize snapshot state before running file suite
		if (suite.mode !== "skip" && "filepath" in suite) await this.snapshotClient.setup(suite.file.filepath, this.workerState.config.snapshotOptions);
		this.workerState.current = suite;
	}
	onBeforeTryTask(test) {
		clearModuleMocks(this.config);
		this.snapshotClient.clearTest(test.file.filepath, test.id);
		setState({
			assertionCalls: 0,
			isExpectingAssertions: false,
			isExpectingAssertionsError: null,
			expectedAssertionsNumber: null,
			expectedAssertionsNumberErrorGen: null,
			currentTestName: getTestName(test),
			snapshotState: this.snapshotClient.getSnapshotState(test.file.filepath)
		}, globalThis[GLOBAL_EXPECT]);
	}
	onAfterTryTask(test) {
		const { assertionCalls, expectedAssertionsNumber, expectedAssertionsNumberErrorGen, isExpectingAssertions, isExpectingAssertionsError } = test.context._local ? test.context.expect.getState() : getState(globalThis[GLOBAL_EXPECT]);
		if (expectedAssertionsNumber !== null && assertionCalls !== expectedAssertionsNumber) throw expectedAssertionsNumberErrorGen();
		if (isExpectingAssertions === true && assertionCalls === 0) throw isExpectingAssertionsError;
		if (this.config.expect.requireAssertions && assertionCalls === 0) throw this.assertionsErrors.get(test);
	}
	extendTaskContext(context) {
		// create error during the test initialization so we have a nice stack trace
		if (this.config.expect.requireAssertions) this.assertionsErrors.set(context.task, new Error("expected any number of assertion, but got none"));
		let _expect;
		Object.defineProperty(context, "expect", { get() {
			if (!_expect) _expect = createExpect(context.task);
			return _expect;
		} });
		Object.defineProperty(context, "_local", { get() {
			return _expect != null;
		} });
		return context;
	}
	getImportDurations() {
		const entries = [...this.workerState.moduleExecutionInfo?.entries() ?? []];
		return Object.fromEntries(entries.map(([filepath, { duration, selfTime }]) => [normalize(filepath), {
			selfTime,
			totalTime: duration
		}]));
	}
}
function clearModuleMocks(config) {
	const { clearMocks, mockReset, restoreMocks, unstubEnvs, unstubGlobals } = config;
	// since each function calls another, we can just call one
	if (restoreMocks) vi.restoreAllMocks();
	else if (mockReset) vi.resetAllMocks();
	else if (clearMocks) vi.clearAllMocks();
	if (unstubEnvs) vi.unstubAllEnvs();
	if (unstubGlobals) vi.unstubAllGlobals();
}

export { NodeBenchmarkRunner, VitestTestRunner };
