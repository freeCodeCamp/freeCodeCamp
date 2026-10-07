import * as tinybench from 'tinybench';
import { VitestRunner, VitestRunnerImportSource, Suite, File, Task, CancelReason, Test, TestContext, ImportDuration, createTaskCollector, getCurrentSuite, getCurrentTest, getHooks, getFn } from '@vitest/runner';
export { VitestRunner } from '@vitest/runner';
import { S as SerializedConfig } from './chunks/config.d.A1h_Y6Jt.js';
import { T as Traces } from './chunks/traces.d.D2T_R8rx.js';
import { createChainable, matchesTags } from '@vitest/runner/utils';
import { g as getBenchFn, a as getBenchOptions } from './chunks/suite.d.udJtyAgw.js';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/utils/diff';
import './chunks/benchmark.d.DAaHLpsq.js';

declare class NodeBenchmarkRunner implements VitestRunner {
	config: SerializedConfig;
	private moduleRunner;
	constructor(config: SerializedConfig);
	importTinybench(): Promise<typeof tinybench>;
	importFile(filepath: string, source: VitestRunnerImportSource): unknown;
	runSuite(suite: Suite): Promise<void>;
	runTask(): Promise<void>;
}

declare class TestRunner implements VitestRunner {
	config: SerializedConfig;
	private snapshotClient;
	private workerState;
	private moduleRunner;
	private cancelRun;
	private assertionsErrors;
	pool: string;
	private _otel;
	viteEnvironment: string;
	private viteModuleRunner;
	constructor(config: SerializedConfig);
	importFile(filepath: string, source: VitestRunnerImportSource): unknown;
	onCollectStart(file: File): void;
	onCleanupWorkerContext(listener: () => unknown): void;
	onAfterRunFiles(): void;
	onAfterRunSuite(suite: Suite): Promise<void>;
	onAfterRunTask(test: Task): void;
	cancel(_reason: CancelReason): void;
	injectValue(key: string): any;
	onBeforeRunTask(test: Task): Promise<void>;
	onBeforeRunSuite(suite: Suite): Promise<void>;
	onBeforeTryTask(test: Task): void;
	onAfterTryTask(test: Test): void;
	extendTaskContext(context: TestContext): TestContext;
	getImportDurations(): Record<string, ImportDuration>;
	trace: <T>(name: string, attributes: Record<string, any> | (() => T), cb?: () => T) => T;
	__setTraces(traces: Traces): void;
	static createTaskCollector: typeof createTaskCollector;
	static getCurrentSuite: typeof getCurrentSuite;
	static getCurrentTest: typeof getCurrentTest;
	static createChainable: typeof createChainable;
	static getSuiteHooks: typeof getHooks;
	static getTestFn: typeof getFn;
	static setSuiteHooks: typeof getHooks;
	static setTestFn: typeof getFn;
	static matchesTags: typeof matchesTags;
	/**
	* @deprecated
	*/
	static getBenchFn: typeof getBenchFn;
	/**
	* @deprecated
	*/
	static getBenchOptions: typeof getBenchOptions;
}

export { NodeBenchmarkRunner, TestRunner as VitestTestRunner };
