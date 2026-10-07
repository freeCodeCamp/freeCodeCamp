import { File, TestArtifact, TaskResultPack, TaskEventPack, CancelReason } from '@vitest/runner';
import { SnapshotResult } from '@vitest/snapshot';
import { FetchFunctionOptions, FetchResult } from 'vite/module-runner';
import { O as OTELCarrier, F as FetchCachedFileSystemResult, R as ResolveFunctionResult, U as UserConsoleLog, A as AsyncLeak, a as AfterSuiteRunMeta } from './traces.d.D2T_R8rx.js';

interface RuntimeRPC {
	fetch: (id: string, importer: string | undefined, environment: string, options?: FetchFunctionOptions, otelCarrier?: OTELCarrier) => Promise<FetchResult | FetchCachedFileSystemResult>;
	resolve: (id: string, importer: string | undefined, environment: string) => Promise<ResolveFunctionResult | null>;
	transform: (id: string) => Promise<{
		code?: string;
	}>;
	onUserConsoleLog: (log: UserConsoleLog) => void;
	onUnhandledError: (err: unknown, type: string) => void;
	onAsyncLeaks: (leak: AsyncLeak[]) => void;
	onQueued: (file: File) => void;
	onCollected: (files: File[]) => Promise<void>;
	onAfterSuiteRun: (meta: AfterSuiteRunMeta) => void;
	onTaskArtifactRecord: <Artifact extends TestArtifact>(testId: string, artifact: Artifact) => Promise<Artifact>;
	onTaskUpdate: (pack: TaskResultPack[], events: TaskEventPack[]) => Promise<void>;
	onCancel: (reason: CancelReason) => void;
	getCountOfFailedTests: () => number;
	snapshotSaved: (snapshot: SnapshotResult) => void;
	resolveSnapshotPath: (testPath: string) => string;
	ensureModuleGraphEntry: (id: string, importer: string) => void;
}
interface RunnerRPC {
	onCancel: (reason: CancelReason) => void;
}

export type { RuntimeRPC as R, RunnerRPC as a };
