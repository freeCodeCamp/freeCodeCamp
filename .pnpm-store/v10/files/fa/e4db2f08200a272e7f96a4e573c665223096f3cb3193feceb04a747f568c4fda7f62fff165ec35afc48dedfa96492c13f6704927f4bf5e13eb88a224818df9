import * as tinybench from 'tinybench';
import { VitestRunner, VitestRunnerImportSource, Suite, File, Task, CancelReason, Test, TestContext, ImportDuration } from '@vitest/runner';
export { VitestRunner } from '@vitest/runner';
import { a as SerializedConfig } from './chunks/config.d.D2ROskhv.js';
import '@vitest/pretty-format';
import '@vitest/snapshot';
import '@vitest/snapshot/environment';
import '@vitest/utils/diff';

declare class NodeBenchmarkRunner implements VitestRunner {
	config: SerializedConfig;
	private __vitest_executor;
	constructor(config: SerializedConfig);
	importTinybench(): Promise<typeof tinybench>;
	importFile(filepath: string, source: VitestRunnerImportSource): unknown;
	runSuite(suite: Suite): Promise<void>;
	runTask(): Promise<void>;
}

declare class VitestTestRunner implements VitestRunner {
	config: SerializedConfig;
	private snapshotClient;
	private workerState;
	private __vitest_executor;
	private cancelRun;
	private assertionsErrors;
	pool: string;
	constructor(config: SerializedConfig);
	importFile(filepath: string, source: VitestRunnerImportSource): unknown;
	onCollectStart(file: File): void;
	onCleanupWorkerContext(listener: () => unknown): void;
	onAfterRunFiles(): void;
	getWorkerContext(): Record<string, unknown>;
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
}

export { NodeBenchmarkRunner, VitestTestRunner };
