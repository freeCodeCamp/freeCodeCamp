import { File, TestAnnotation, TaskResultPack, TaskEventPack, CancelReason, FileSpecification, Task } from '@vitest/runner';
import { ViteNodeResolveId, ModuleCacheMap, ModuleExecutionInfo } from 'vite-node';
import { a as SerializedConfig } from './config.d.D2ROskhv.js';
import { T as TransformMode, U as UserConsoleLog, A as AfterSuiteRunMeta, E as Environment } from './environment.d.cL3nLXbE.js';
import { SnapshotResult } from '@vitest/snapshot';

type ArgumentsType<T> = T extends (...args: infer A) => any ? A : never;
type ReturnType<T> = T extends (...args: any) => infer R ? R : never;
type PromisifyFn<T> = ReturnType<T> extends Promise<any> ? T : (...args: ArgumentsType<T>) => Promise<Awaited<ReturnType<T>>>;
type BirpcResolver = (name: string, resolved: (...args: unknown[]) => unknown) => ((...args: unknown[]) => unknown) | undefined;
interface ChannelOptions {
    /**
     * Function to post raw message
     */
    post: (data: any, ...extras: any[]) => any | Promise<any>;
    /**
     * Listener to receive raw message
     */
    on: (fn: (data: any, ...extras: any[]) => void) => any | Promise<any>;
    /**
     * Clear the listener when `$close` is called
     */
    off?: (fn: (data: any, ...extras: any[]) => void) => any | Promise<any>;
    /**
     * Custom function to serialize data
     *
     * by default it passes the data as-is
     */
    serialize?: (data: any) => any;
    /**
     * Custom function to deserialize data
     *
     * by default it passes the data as-is
     */
    deserialize?: (data: any) => any;
    /**
     * Call the methods with the RPC context or the original functions object
     */
    bind?: 'rpc' | 'functions';
}
interface EventOptions<Remote> {
    /**
     * Names of remote functions that do not need response.
     */
    eventNames?: (keyof Remote)[];
    /**
     * Maximum timeout for waiting for response, in milliseconds.
     *
     * @default 60_000
     */
    timeout?: number;
    /**
     * Custom resolver to resolve function to be called
     *
     * For advanced use cases only
     */
    resolver?: BirpcResolver;
    /**
     * Custom error handler
     *
     * @deprecated use `onFunctionError` and `onGeneralError` instead
     */
    onError?: (error: Error, functionName: string, args: any[]) => boolean | void;
    /**
     * Custom error handler for errors occurred in local functions being called
     *
     * @returns `true` to prevent the error from being thrown
     */
    onFunctionError?: (error: Error, functionName: string, args: any[]) => boolean | void;
    /**
     * Custom error handler for errors occurred during serialization or messsaging
     *
     * @returns `true` to prevent the error from being thrown
     */
    onGeneralError?: (error: Error, functionName?: string, args?: any[]) => boolean | void;
    /**
     * Custom error handler for timeouts
     *
     * @returns `true` to prevent the error from being thrown
     */
    onTimeoutError?: (functionName: string, args: any[]) => boolean | void;
}
type BirpcOptions<Remote> = EventOptions<Remote> & ChannelOptions;
type BirpcFn<T> = PromisifyFn<T> & {
    /**
     * Send event without asking for response
     */
    asEvent: (...args: ArgumentsType<T>) => void;
};
type BirpcReturn<RemoteFunctions, LocalFunctions = Record<string, never>> = {
    [K in keyof RemoteFunctions]: BirpcFn<RemoteFunctions[K]>;
} & {
    $functions: LocalFunctions;
    $close: (error?: Error) => void;
    $closed: boolean;
};

interface RuntimeRPC {
	fetch: (id: string, transformMode: TransformMode) => Promise<{
		externalize?: string
		id?: string
	}>;
	transform: (id: string, transformMode: TransformMode) => Promise<{
		code?: string
	}>;
	resolveId: (id: string, importer: string | undefined, transformMode: TransformMode) => Promise<{
		external?: boolean | "absolute" | "relative"
		id: string
		/** @deprecated */
		meta?: Record<string, any> | null
		/** @deprecated */
		moduleSideEffects?: boolean | "no-treeshake" | null
		/** @deprecated */
		syntheticNamedExports?: boolean | string | null
	} | null>;
	/**
	* @deprecated unused
	*/
	getSourceMap: (id: string, force?: boolean) => Promise<any>;
	onUserConsoleLog: (log: UserConsoleLog) => void;
	onUnhandledError: (err: unknown, type: string) => void;
	onQueued: (file: File) => void;
	onCollected: (files: File[]) => Promise<void>;
	onAfterSuiteRun: (meta: AfterSuiteRunMeta) => void;
	onTaskAnnotate: (testId: string, annotation: TestAnnotation) => Promise<TestAnnotation>;
	onTaskUpdate: (pack: TaskResultPack[], events: TaskEventPack[]) => Promise<void>;
	onCancel: (reason: CancelReason) => void;
	getCountOfFailedTests: () => number;
	snapshotSaved: (snapshot: SnapshotResult) => void;
	resolveSnapshotPath: (testPath: string) => string;
}
interface RunnerRPC {
	onCancel: (reason: CancelReason) => void;
}

/** @deprecated unused */
type ResolveIdFunction = (id: string, importer?: string) => Promise<ViteNodeResolveId | null>;
type WorkerRPC = BirpcReturn<RuntimeRPC, RunnerRPC>;
interface ContextTestEnvironment {
	name: string;
	transformMode?: TransformMode;
	options: Record<string, any> | null;
}
type TestExecutionMethod = "run" | "collect";
interface ContextRPC {
	pool: string;
	worker: string;
	workerId: number;
	config: SerializedConfig;
	projectName: string;
	files: string[] | FileSpecification[];
	environment: ContextTestEnvironment;
	providedContext: Record<string, any>;
	invalidates?: string[];
}
interface WorkerGlobalState {
	ctx: ContextRPC;
	config: SerializedConfig;
	rpc: WorkerRPC;
	current?: Task;
	filepath?: string;
	environment: Environment;
	environmentTeardownRun?: boolean;
	onCancel: Promise<CancelReason>;
	moduleCache: ModuleCacheMap;
	moduleExecutionInfo?: ModuleExecutionInfo;
	onCleanup: (listener: () => unknown) => void;
	providedContext: Record<string, any>;
	durations: {
		environment: number
		prepare: number
	};
	onFilterStackTrace?: (trace: string) => string;
}

export type { BirpcOptions as B, ContextRPC as C, RuntimeRPC as R, TestExecutionMethod as T, WorkerGlobalState as W, BirpcReturn as a, WorkerRPC as b, RunnerRPC as c, ContextTestEnvironment as d, ResolveIdFunction as e };
