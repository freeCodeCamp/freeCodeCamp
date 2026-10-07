interface IWorkerOptions {
    numWorkers?: number;
    env?: Record<string, string>;
    silent?: boolean;
}
type WrapReturnOfAFunctionInAPromise<FunctionThatDoesNotReturnAPromise extends (...args: Array<any>) => any> = (...a: Parameters<FunctionThatDoesNotReturnAPromise>) => Promise<ReturnType<FunctionThatDoesNotReturnAPromise>>;
type EnsureFunctionReturnsAPromise<MaybeFunction> = MaybeFunction extends (...args: Array<any>) => Promise<any> ? MaybeFunction : MaybeFunction extends (...args: Array<any>) => any ? WrapReturnOfAFunctionInAPromise<MaybeFunction> : never;
type WrapReturnInArray<MaybeFunction> = MaybeFunction extends (...args: Array<any>) => any ? (...a: Parameters<MaybeFunction>) => Array<ReturnType<MaybeFunction>> : never;
export type CreateWorkerPoolType<ExposedFunctions> = WorkerPool & {
    [FunctionName in keyof ExposedFunctions]: EnsureFunctionReturnsAPromise<ExposedFunctions[FunctionName]>;
} & {
    all: {
        [FunctionName in keyof ExposedFunctions]: WrapReturnInArray<EnsureFunctionReturnsAPromise<ExposedFunctions[FunctionName]>>;
    };
};
export interface IPublicWorkerInfo {
    workerId: number;
}
/**
 * Worker pool is a class that allow you to queue function execution across multiple
 * child processes, in order to parallelize work. It accepts absolute path to worker module
 * and will expose exported function of that module as properties on WorkerPool instance.
 *
 * Worker pool allows queueing execution of a function on all workers (via `.all` property)
 * as well as distributing execution across workers (via `.single` property)
 */
export declare class WorkerPool<WorkerModuleExports = Record<string, unknown>, MessagesFromParent = unknown, MessagesFromChild = MessagesFromParent> {
    private workerPath;
    private options?;
    /**
     * Schedule task execution on all workers. Useful for setting up workers
     */
    all: {
        [FunctionName in keyof WorkerModuleExports]: WrapReturnInArray<EnsureFunctionReturnsAPromise<WorkerModuleExports[FunctionName]>>;
    };
    /**
     * Schedule task execution on single worker. Useful to distribute tasks between multiple workers.
     */
    single: {
        [FunctionName in keyof WorkerModuleExports]: EnsureFunctionReturnsAPromise<WorkerModuleExports[FunctionName]>;
    };
    private workers;
    private taskQueue;
    private idleWorkers;
    private listeners;
    private counter;
    constructor(workerPath: string, options?: IWorkerOptions | undefined);
    private startAll;
    /**
     * Kills worker processes and rejects and ongoing or pending tasks.
     * @returns Array of promises for each worker that will resolve once worker did exit.
     */
    end(): Array<Promise<number | null>>;
    /**
     * Kills all running worker processes and spawns a new pool of processes
     */
    restart(): Promise<void>;
    getWorkerInfo(): Array<IPublicWorkerInfo>;
    private checkForWork;
    private doWork;
    private scheduleWork;
    private scheduleWorkSingle;
    private scheduleWorkAll;
    onMessage(listener: (msg: MessagesFromChild, workerId: number) => void): void;
    sendMessage(msg: MessagesFromParent, workerId: number): void;
}
export * from "./child";
