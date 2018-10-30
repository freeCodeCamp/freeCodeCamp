declare module "bottleneck" {
    namespace Bottleneck {
        type ConstructorOptions = {
            /**
             * How many jobs can be running at the same time.
             */
            readonly maxConcurrent?: number | null;
            /**
             * How long to wait after launching a job before launching another one.
             */
            readonly minTime?: number;
            /**
             * How long can the queue get? When the queue length exceeds that value, the selected `strategy` is executed to shed the load.
             */
            readonly highWater?: number | null;
            /**
             * Which strategy to use if the queue gets longer than the high water mark.
             */
            readonly strategy?: Bottleneck.Strategy;
            /**
             * The `penalty` value used by the `Bottleneck.strategy.BLOCK` strategy.
             */
            readonly penalty?: number | null;
            /**
             * How many jobs can be executed before the limiter stops executing jobs. If `reservoir` reaches `0`, no jobs will be executed until it is no longer `0`.
             */
            readonly reservoir?: number | null;
            /**
             * Every `reservoirRefreshInterval` milliseconds, the `reservoir` value will be automatically reset to `reservoirRefreshAmount`. This feature has an accuracy of +/- 5 seconds.
             */
            readonly reservoirRefreshInterval?: number | null;
            /**
             * The value to reset `reservoir` to when `reservoirRefreshInterval` is in use.
             */
            readonly reservoirRefreshAmount?: number | null;
            /**
             * Optional identifier
             */
            readonly id?: string;
            /**
             * Set to true to leave your failed jobs hanging instead of failing them.
             */
            readonly rejectOnDrop?: boolean;
            /**
             * Set to true to keep track of done jobs with counts() and jobStatus(). Uses more memory.
             */
            readonly trackDoneStatus?: boolean;
            /**
             * Where the limiter stores its internal state. The default (`local`) keeps the state in the limiter itself. Set it to `redis` to enable Clustering.
             */
            readonly datastore?: string;
            /**
             * Override the Promise library used by Bottleneck.
             */
            readonly Promise?: any;
            /**
             * This object is passed directly to the redis client library you've selected.
             */
            readonly clientOptions?: any;
            /**
             * **ioredis only.** When `clusterNodes` is not null, the client will be instantiated by calling `new Redis.Cluster(clusterNodes, clientOptions)`.
             */
            readonly clusterNodes?: any;
            /**
             * An existing Bottleneck.RedisConnection or Bottleneck.IORedisConnection object to use.
             * If using, `datastore`, `clientOptions` and `clusterNodes` will be ignored.
             */
            readonly connection?: Bottleneck.RedisConnection | Bottleneck.IORedisConnection;
            /**
             * When set to `true`, on initial startup, the limiter will wipe any existing Bottleneck state data on the Redis db.
             */
            readonly clearDatastore?: boolean;
            /**
             * The Redis TTL in milliseconds for the keys created by the limiter. When `timeout` is set, the limiter's state will be automatically removed from Redis after timeout milliseconds of inactivity. Note: timeout is 300000 (5 minutes) by default when using a Group.
             */
             readonly timeout?: number | null;

            [propName: string]: any;
        };
        type JobOptions = {
            /**
             * A priority between `0` and `9`. A job with a priority of `4` will _always_ be executed before a job with a priority of `5`.
             */
            readonly priority?: number;
            /**
             * Must be an integer equal to or higher than `0`. The `weight` is what increases the number of running jobs (up to `maxConcurrent`, if using) and decreases the `reservoir` value (if using).
             */
            readonly weight?: number;
            /**
             * The number milliseconds a job has to finish. Jobs that take longer than their `expiration` will be failed with a `BottleneckError`.
             */
            readonly expiration?: number | null;
            /**
             * Optional identifier, helps with debug output.
             */
            readonly id?: string;
        };
        type StopOptions = {
            /**
             * When `true`, drop all the RECEIVED, QUEUED and RUNNING jobs. When `false`, allow those jobs to complete before resolving the Promise returned by this method.
             */
            readonly dropWaitingJobs?: boolean;
            /**
             * The error message used to drop jobs when `dropWaitingJobs` is `true`.
             */
            readonly dropErrorMessage?: string;
            /**
             * The error message used to reject a job added to the limiter after `stop()` has been called.
             */
            readonly enqueueErrorMessage?: string;
        };
        type Callback<T> = (err: any, result: T) => void;
        interface ClientsList { client?: any; subscriber?: any }
        interface GroupLimiterPair { key: string; limiter: Bottleneck }
        interface Strategy {}

        enum Status {
            RECEIVED = "RECEIVED",
            QUEUED = "QUEUED",
            RUNNING = "RUNNING",
            EXECUTING = "EXECUTING",
            DONE = "DONE"
        }
        interface Counts {
            RECEIVED: number,
            QUEUED: number,
            RUNNING: number,
            EXECUTING: number,
            DONE?: number
        }

        type RedisConnectionOptions = {
            /**
             * This object is passed directly to NodeRedis' createClient() method.
             */
            readonly clientOptions?: any;
            /**
             * An existing NodeRedis client to use. If using, `clientOptions` will be ignored.
             */
            readonly client?: any;
        };

        type IORedisConnectionOptions = {
            /**
             * This object is passed directly to ioredis' constructor method.
             */
            readonly clientOptions?: any;
            /**
             * When `clusterNodes` is not null, the client will be instantiated by calling `new Redis.Cluster(clusterNodes, clientOptions)`.
             */
            readonly clusterNodes?: any;
            /**
             * An existing ioredis client to use. If using, `clientOptions` and `clusterNodes` will be ignored.
             */
            readonly client?: any;
        };

        type BatcherOptions = {
            /**
             * Maximum acceptable time (in milliseconds) a request can have to wait before being flushed to the `"batch"` event.
             */
            readonly maxTime?: number;
            /**
             * Maximum number of requests in a batch.
             */
            readonly maxSize?: number;
        };

        class BottleneckError extends Error {
        }

        class RedisConnection {
            constructor(options?: Bottleneck.RedisConnectionOptions);

            /**
             * Register an event listener.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            on(name: string, fn: Function): void;
            on(name: "error", fn: (error: any) => void): void;

            /**
             * Register an event listener for one event only.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            once(name: string, fn: Function): void;
            once(name: "error", fn: (error: any) => void): void;

            /**
             * Close the redis clients.
             * @param flush - Write transient data before closing.
             */
            disconnect(flush?: boolean): Promise<void>;
        }

        class IORedisConnection {
            constructor(options?: Bottleneck.IORedisConnectionOptions);

            /**
             * Register an event listener.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            on(name: string, fn: Function): void;
            on(name: "error", fn: (error: any) => void): void;

            /**
             * Register an event listener for one event only.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            once(name: string, fn: Function): void;
            once(name: "error", fn: (error: any) => void): void;

            /**
             * Close the redis clients.
             * @param flush - Write transient data before closing.
             */
            disconnect(flush?: boolean): Promise<void>;
        }

        class Batcher {
            constructor(options?: Bottleneck.BatcherOptions);

            /**
             * Register an event listener.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            on(name: string, fn: Function): void;
            on(name: "error", fn: (error: any) => void): void;
            on(name: "batch", fn: (batch: any[]) => void): void;

            /**
             * Register an event listener for one event only.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            once(name: string, fn: Function): void;
            once(name: "error", fn: (error: any) => void): void;
            once(name: "batch", fn: (batch: any[]) => void): void;

            /**
             * Add a request to the Batcher. Batches are flushed to the "batch" event.
             */
            add(data: any): Promise<void>;
        }

        class Group {
            constructor(options?: Bottleneck.ConstructorOptions);

            id: string;
            datastore: string;
            connection?: Bottleneck.RedisConnection | Bottleneck.IORedisConnection;

            /**
             * Returns the limiter for the specified key.
             * @param str - The limiter key.
             */
            key(str: string): Bottleneck;

            /**
             * Register an event listener.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            on(name: string, fn: Function): void;
            on(name: "error", fn: (error: any) => void): void;
            on(name: "created", fn: (created: Bottleneck, key: string) => void): void;

            /**
             * Register an event listener for one event only.
             * @param name - The event name.
             * @param fn - The callback function.
             */
            once(name: string, fn: Function): void;
            once(name: "error", fn: (error: any) => void): void;
            once(name: "created", fn: (created: Bottleneck, key: string) => void): void;

            /**
             * Removes all registered event listeners.
             * @param name - The optional event name to remove listeners from.
             */
            removeAllListeners(name?: string): void;

            /**
             * Updates the group settings.
             * @param options - The new settings.
             */
            updateSettings(options: Bottleneck.ConstructorOptions): void;

            /**
             * Deletes the limiter for the given key
             * @param str - The key
             */
            deleteKey(str: string): Promise<void>;

            /**
             * Disconnects the underlying redis clients, unless the Group was created with the `connection` option.
             * @param flush - Write transient data before closing.
             */
            disconnect(flush?: boolean): Promise<void>;

            /**
             * Returns all the key-limiter pairs.
             */
            limiters(): Bottleneck.GroupLimiterPair[];

            /**
             * Returns all the keys in the Cluster
             */
            keys(): string[];
        }
    }

    class Bottleneck {
        public static readonly strategy: {
            /**
             * When adding a new job to a limiter, if the queue length reaches `highWater`, drop the oldest job with the lowest priority. This is useful when jobs that have been waiting for too long are not important anymore. If all the queued jobs are more important (based on their `priority` value) than the one being added, it will not be added.
             */
            readonly LEAK: Bottleneck.Strategy;
            /**
             * Same as `LEAK`, except it will only drop jobs that are less important than the one being added. If all the queued jobs are as or more important than the new one, it will not be added.
             */
            readonly OVERFLOW_PRIORITY: Bottleneck.Strategy;
            /**
             * When adding a new job to a limiter, if the queue length reaches `highWater`, do not add the new job. This strategy totally ignores priority levels.
             */
            readonly OVERFLOW: Bottleneck.Strategy;
            /**
             * When adding a new job to a limiter, if the queue length reaches `highWater`, the limiter falls into "blocked mode". All queued jobs are dropped and no new jobs will be accepted until the limiter unblocks. It will unblock after `penalty` milliseconds have passed without receiving a new job. `penalty` is equal to `15 * minTime` (or `5000` if `minTime` is `0`) by default and can be changed by calling `changePenalty()`. This strategy is ideal when bruteforce attacks are to be expected. This strategy totally ignores priority levels.
             */
            readonly BLOCK: Bottleneck.Strategy;
        };

        constructor(options?: Bottleneck.ConstructorOptions);

        id: string;
        datastore: string;
        connection?: Bottleneck.RedisConnection | Bottleneck.IORedisConnection;

        /**
         * Returns a promise which will be resolved once the limiter is ready to accept jobs
         * or rejected if it fails to start up.
         */
        ready(): Promise<any>;

        /**
         * Returns a datastore-specific object of redis clients.
         */
        clients(): Bottleneck.ClientsList;

        /**
         * Returns the name of the Redis pubsub channel used for this limiter
         */
        channel(): string;

        /**
         * Disconnects the underlying redis clients, unless the limiter was created with the `connection` option.
         * @param flush - Write transient data before closing.
         */
        disconnect(flush?: boolean): Promise<void>;

        /**
         * Broadcast a string to every limiter in the Cluster.
         */
        publish(message: string): Promise<void>;

        /**
         * Returns an object with the current number of jobs per status.
         */
        counts(): Bottleneck.Counts;

        /**
         * Returns the status of the job with the provided job id.
         */
        jobStatus(id: string): Bottleneck.Status;

        /**
         * Returns the status of the job with the provided job id.
         */
        jobs(status?: Bottleneck.Status): string[];

        /**
         * Returns the number of requests queued.
         * @param priority - Returns the number of requests queued with the specified priority.
         */
        queued(priority?: number): number;

        /**
         * Returns whether there are any jobs currently in the queue or in the process of being added to the queue.
         */
        empty(): boolean;

        /**
         * Returns the total weight of jobs in a RUNNING or EXECUTING state in the Cluster.
         */
        running(): Promise<number>;

        /**
         * Returns the total weight of jobs in a DONE state in the Cluster.
         */
        done(): Promise<number>;

        /**
         * If a request was added right now, would it be run immediately?
         * @param weight - The weight of the request
         */
        check(weight?: number): Promise<boolean>;

        /**
         * Register an event listener.
         * @param name - The event name.
         * @param fn - The callback function.
         */
        on(name: string, fn: Function): void;
        on(name: "error", fn: (error: any) => void): void;
        on(name: "empty", fn: () => void): void;
        on(name: "idle", fn: () => void): void;
        on(name: "depleted", fn: (empty: boolean) => void): void;
        on(name: "dropped", fn: (dropped: any) => void): void;
        on(name: "message", fn: (message: string) => void): void;
        on(name: "debug", fn: (message: string, data: any) => void): void;

        /**
         * Register an event listener for one event only.
         * @param name - The event name.
         * @param fn - The callback function.
         */
        once(name: string, fn: Function): void;
        once(name: "error", fn: (error: any) => void): void;
        once(name: "empty", fn: () => void): void;
        once(name: "idle", fn: () => void): void;
        once(name: "depleted", fn: (empty: boolean) => void): void;
        once(name: "dropped", fn: (dropped: any) => void): void;
        once(name: "message", fn: (message: string) => void): void;
        once(name: "debug", fn: (message: string, data: any) => void): void;

        /**
         * Removes all registered event listeners.
         * @param name - The optional event name to remove listeners from.
         */
        removeAllListeners(name?: string): void;

        /**
         * Changes the settings for future requests.
         * @param options - The new settings.
         */
        updateSettings(options?: Bottleneck.ConstructorOptions): Bottleneck;

        /**
         * Adds to the reservoir count and returns the new value.
         */
        incrementReservoir(incrementBy: number): Promise<number>;

        /**
         * The `stop()` method is used to safely shutdown a limiter. It prevents any new jobs from being added to the limiter and waits for all Executing jobs to complete.
         */
        stop(options?: Bottleneck.StopOptions): Promise<void>;

        /**
         * Returns the current reservoir count, if any.
         */
        currentReservoir(): Promise<number | null>;

        /**
         * Chain this limiter to another.
         * @param limiter - The limiter that requests to this limiter must also follow.
         */
        chain(limiter?: Bottleneck): Bottleneck;

        wrap<R>(fn: () => PromiseLike<R>): (() => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions) => Promise<R>; };
        wrap<R, A1>(fn: (arg1: A1) => PromiseLike<R>): ((arg1: A1) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1) => Promise<R>; };
        wrap<R, A1, A2>(fn: (arg1: A1, arg2: A2) => PromiseLike<R>): ((arg1: A1, arg2: A2) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2) => Promise<R>; };
        wrap<R, A1, A2, A3>(fn: (arg1: A1, arg2: A2, arg3: A3) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3) => Promise<R>; };
        wrap<R, A1, A2, A3, A4>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Promise<R>; };
        wrap<R, A1, A2, A3, A4, A5>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Promise<R>; };
        wrap<R, A1, A2, A3, A4, A5, A6>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6) => Promise<R>; };
        wrap<R, A1, A2, A3, A4, A5, A6, A7>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7) => Promise<R>; };
        wrap<R, A1, A2, A3, A4, A5, A6, A7, A8>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8) => Promise<R>; };
        wrap<R, A1, A2, A3, A4, A5, A6, A7, A8, A9>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9) => Promise<R>; };
        wrap<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10) => PromiseLike<R>): ((arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10) => Promise<R>) & { withOptions: (options: Bottleneck.JobOptions, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10) => Promise<R>; };

        submit<R>(fn: (callback: Bottleneck.Callback<R>) => void, callback: Bottleneck.Callback<R>): void;
        submit<R, A1>(fn: (arg1: A1, callback: Bottleneck.Callback<R>) => void, arg1: A1, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2>(fn: (arg1: A1, arg2: A2, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3>(fn: (arg1: A1, arg2: A2, arg3: A3, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7, A8>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7, A8, A9>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10, callback: Bottleneck.Callback<R>): void;

        submit<R>(options: Bottleneck.JobOptions, fn: (callback: Bottleneck.Callback<R>) => void, callback: Bottleneck.Callback<R>): void;
        submit<R, A1>(options: Bottleneck.JobOptions, fn: (arg1: A1, callback: Bottleneck.Callback<R>) => void, arg1: A1, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7, A8>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7, A8, A9>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, callback: Bottleneck.Callback<R>): void;
        submit<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10, callback: Bottleneck.Callback<R>) => void, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10, callback: Bottleneck.Callback<R>): void;

        schedule<R>(fn: () => PromiseLike<R>): Promise<R>;
        schedule<R, A1>(fn: (arg1: A1) => PromiseLike<R>, arg1: A1): Promise<R>;
        schedule<R, A1, A2>(fn: (arg1: A1, arg2: A2) => PromiseLike<R>, arg1: A1, arg2: A2): Promise<R>;
        schedule<R, A1, A2, A3>(fn: (arg1: A1, arg2: A2, arg3: A3) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3): Promise<R>;
        schedule<R, A1, A2, A3, A4>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7, A8>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7, A8, A9>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10): Promise<R>;

        schedule<R>(options: Bottleneck.JobOptions, fn: () => PromiseLike<R>): Promise<R>;
        schedule<R, A1>(options: Bottleneck.JobOptions, fn: (arg1: A1) => PromiseLike<R>, arg1: A1): Promise<R>;
        schedule<R, A1, A2>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2) => PromiseLike<R>, arg1: A1, arg2: A2): Promise<R>;
        schedule<R, A1, A2, A3>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3): Promise<R>;
        schedule<R, A1, A2, A3, A4>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7, A8>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7, A8, A9>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9): Promise<R>;
        schedule<R, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10>(options: Bottleneck.JobOptions, fn: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10) => PromiseLike<R>, arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, arg6: A6, arg7: A7, arg8: A8, arg9: A9, arg10: A10): Promise<R>;
    }

    export default Bottleneck;
}

