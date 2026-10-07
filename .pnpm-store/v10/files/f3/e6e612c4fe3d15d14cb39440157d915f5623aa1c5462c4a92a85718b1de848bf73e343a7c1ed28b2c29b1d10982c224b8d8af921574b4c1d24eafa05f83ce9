/**
 * A class that represents each benchmark task in Tinybench. It keeps track of the
 * results, name, Bench instance, the task function and the number times the task
 * function has been executed.
 */
declare class Task extends EventTarget {
    bench: Bench;
    /**
     * task name
     */
    name: string;
    fn: Fn;
    runs: number;
    /**
     * the result object
     */
    result?: TaskResult;
    /**
     * Task options
     */
    opts: FnOptions;
    constructor(bench: Bench, name: string, fn: Fn, opts?: FnOptions);
    private loop;
    /**
     * run the current task and write the results in `Task.result` object
     */
    run(): Promise<this>;
    /**
     * warmup the current task
     */
    warmup(): Promise<void>;
    addEventListener<K extends TaskEvents, T = TaskEventsMap[K]>(type: K, listener: T, options?: AddEventListenerOptionsArgument): void;
    removeEventListener<K extends TaskEvents, T = TaskEventsMap[K]>(type: K, listener: T, options?: RemoveEventListenerOptionsArgument): void;
    /**
     * change the result object values
     */
    setResult(result: Partial<TaskResult>): void;
    /**
     * reset the task to make the `Task.runs` a zero-value and remove the `Task.result`
     * object
     */
    reset(): void;
}

/**
 * the task function
 */
type Fn = () => any | Promise<any>;
interface FnOptions {
    /**
     * An optional function that is run before iterations of this task begin
     */
    beforeAll?: (this: Task) => void | Promise<void>;
    /**
     * An optional function that is run before each iteration of this task
     */
    beforeEach?: (this: Task) => void | Promise<void>;
    /**
     * An optional function that is run after each iteration of this task
     */
    afterEach?: (this: Task) => void | Promise<void>;
    /**
     * An optional function that is run after all iterations of this task end
     */
    afterAll?: (this: Task) => void | Promise<void>;
}
/**
 * the benchmark task result object
 */
type TaskResult = {
    error?: unknown;
    /**
     * The amount of time in milliseconds to run the benchmark task (cycle).
     */
    totalTime: number;
    /**
     * the minimum value in the samples
     */
    min: number;
    /**
     * the maximum value in the samples
     */
    max: number;
    /**
     * the number of operations per second
     */
    hz: number;
    /**
     * how long each operation takes (ms)
     */
    period: number;
    /**
     * task samples of each task iteration time (ms)
     */
    samples: number[];
    /**
     * samples mean/average (estimate of the population mean)
     */
    mean: number;
    /**
     * samples variance (estimate of the population variance)
     */
    variance: number;
    /**
     * samples standard deviation (estimate of the population standard deviation)
     */
    sd: number;
    /**
     * standard error of the mean (a.k.a. the standard deviation of the sampling distribution of the sample mean)
     */
    sem: number;
    /**
     * degrees of freedom
     */
    df: number;
    /**
     * critical value of the samples
     */
    critical: number;
    /**
     * margin of error
     */
    moe: number;
    /**
     * relative margin of error
     */
    rme: number;
    /**
     * p75 percentile
     */
    p75: number;
    /**
     * p99 percentile
     */
    p99: number;
    /**
     * p995 percentile
     */
    p995: number;
    /**
     * p999 percentile
     */
    p999: number;
};
/**
  * Both the `Task` and `Bench` objects extend the `EventTarget` object,
  * so you can attach a listeners to different types of events
  * to each class instance using the universal `addEventListener` and
 * `removeEventListener`
 */
/**
 * Bench events
 */
type BenchEvents = 'abort' | 'complete' | 'error' | 'reset' | 'start' | 'warmup' | 'cycle' | 'add' | 'remove' | 'todo';
type Hook = (task: Task, mode: 'warmup' | 'run') => void | Promise<void>;
type NoopEventListener = () => any | Promise<any>;
type TaskEventListener = (e: Event & {
    task: Task;
}) => any | Promise<any>;
interface BenchEventsMap {
    abort: NoopEventListener;
    start: NoopEventListener;
    complete: NoopEventListener;
    warmup: NoopEventListener;
    reset: NoopEventListener;
    add: TaskEventListener;
    remove: TaskEventListener;
    cycle: TaskEventListener;
    error: TaskEventListener;
    todo: TaskEventListener;
}
/**
 * task events
 */
type TaskEvents = 'abort' | 'complete' | 'error' | 'reset' | 'start' | 'warmup' | 'cycle';
type TaskEventsMap = {
    abort: NoopEventListener;
    start: TaskEventListener;
    error: TaskEventListener;
    cycle: TaskEventListener;
    complete: TaskEventListener;
    warmup: TaskEventListener;
    reset: TaskEventListener;
};
type Options = {
    /**
     * time needed for running a benchmark task (milliseconds) @default 500
     */
    time?: number;
    /**
     * number of times that a task should run if even the time option is finished @default 10
     */
    iterations?: number;
    /**
     * function to get the current timestamp in milliseconds
     */
    now?: () => number;
    /**
     * An AbortSignal for aborting the benchmark
     */
    signal?: AbortSignal;
    /**
     * Throw if a task fails (events will not work if true)
     */
    throws?: boolean;
    /**
     * warmup time (milliseconds) @default 100ms
     */
    warmupTime?: number;
    /**
     * warmup iterations @default 5
     */
    warmupIterations?: number;
    /**
     * setup function to run before each benchmark task (cycle)
     */
    setup?: Hook;
    /**
     * teardown function to run after each benchmark task (cycle)
     */
    teardown?: Hook;
};
type BenchEvent = Event & {
    task: Task | null;
};
type RemoveEventListenerOptionsArgument = Parameters<typeof EventTarget.prototype.removeEventListener>[2];
type AddEventListenerOptionsArgument = Parameters<typeof EventTarget.prototype.addEventListener>[2];

/**
 * The Benchmark instance for keeping track of the benchmark tasks and controlling
 * them.
 */
declare class Bench extends EventTarget {
    _tasks: Map<string, Task>;
    _todos: Map<string, Task>;
    /**
   * Executes tasks concurrently based on the specified concurrency mode.
   *
   * - When `mode` is set to `null` (default), concurrency is disabled.
   * - When `mode` is set to 'task', each task's iterations (calls of a task function) run concurrently.
   * - When `mode` is set to 'bench', different tasks within the bench run concurrently.
   */
    concurrency: 'task' | 'bench' | null;
    /**
     * The maximum number of concurrent tasks to run. Defaults to Infinity.
     */
    threshold: number;
    signal?: AbortSignal;
    throws: boolean;
    warmupTime: number;
    warmupIterations: number;
    time: number;
    iterations: number;
    now: () => number;
    setup: Hook;
    teardown: Hook;
    constructor(options?: Options);
    private runTask;
    /**
     * run the added tasks that were registered using the
     * {@link add} method.
     * Note: This method does not do any warmup. Call {@link warmup} for that.
     */
    run(): Promise<Task[]>;
    /**
     * See Bench.{@link concurrency}
     */
    runConcurrently(threshold?: number, mode?: NonNullable<Bench['concurrency']>): Promise<Task[]>;
    /**
     * warmup the benchmark tasks.
     * This is not run by default by the {@link run} method.
     */
    warmup(): Promise<void>;
    /**
     * warmup the benchmark tasks concurrently.
     * This is not run by default by the {@link runConcurrently} method.
     */
    warmupConcurrently(threshold?: number, mode?: NonNullable<Bench['concurrency']>): Promise<void>;
    /**
     * reset each task and remove its result
     */
    reset(): void;
    /**
     * add a benchmark task to the task map
     */
    add(name: string, fn: Fn, opts?: FnOptions): this;
    /**
     * add a benchmark todo to the todo map
     */
    todo(name: string, fn?: Fn, opts?: FnOptions): this;
    /**
     * remove a benchmark task from the task map
     */
    remove(name: string): this;
    addEventListener<K extends BenchEvents, T = BenchEventsMap[K]>(type: K, listener: T, options?: AddEventListenerOptionsArgument): void;
    removeEventListener<K extends BenchEvents, T = BenchEventsMap[K]>(type: K, listener: T, options?: RemoveEventListenerOptionsArgument): void;
    /**
     * table of the tasks results
     */
    table(convert?: (task: Task) => Record<string, string | number> | undefined): (Record<string, string | number> | null)[];
    /**
     * (getter) tasks results as an array
     */
    get results(): (TaskResult | undefined)[];
    /**
     * (getter) tasks as an array
     */
    get tasks(): Task[];
    get todos(): Task[];
    /**
     * get a task based on the task name
     */
    getTask(name: string): Task | undefined;
}

declare const hrtimeNow: () => number;
declare const now: () => number;

export { Bench, type BenchEvent, type BenchEvents, type Fn, type Hook, type Options, Task, type TaskEvents, type TaskResult, hrtimeNow, now };
