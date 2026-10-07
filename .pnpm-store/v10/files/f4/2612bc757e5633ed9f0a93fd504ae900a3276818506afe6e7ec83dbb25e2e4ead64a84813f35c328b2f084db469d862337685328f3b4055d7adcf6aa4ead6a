/**
 * Options added to the Browser SDK's init options that are specific for Replay.
 * Note: This type was moved to @sentry/core to avoid a circular dependency between Browser and Replay.
 */
export type BrowserClientReplayOptions = {
    /**
     * The sample rate for session-long replays.
     * 1.0 will record all sessions and 0 will record none.
     */
    replaysSessionSampleRate?: number;
    /**
     * The sample rate for sessions that has had an error occur.
     * This is independent of `sessionSampleRate`.
     * 1.0 will record all sessions and 0 will record none.
     */
    replaysOnErrorSampleRate?: number;
};
export type BrowserClientProfilingOptions = {
    /**
     * The sample rate for profiling
     * 1.0 will profile all transactions and 0 will profile none.
     *
     * @deprecated Use `profileSessionSampleRate` and `profileLifecycle` instead.
     */
    profilesSampleRate?: number;
    /**
     * Sets profiling session sample rate for the entire profiling session.
     *
     * A profiling session corresponds to a user session, meaning it is set once at integration initialization and
     * persisted until the next page reload. This rate determines what percentage of user sessions will have profiling enabled.
     * @default 0
     */
    profileSessionSampleRate?: number;
    /**
     * Set the lifecycle mode of the profiler.
     * - **manual**: The profiler will be manually started and stopped via `startProfiler`/`stopProfiler`.
     *    If a session is sampled, is dependent on the `profileSessionSampleRate`.
     * - **trace**: The profiler will be automatically started when a root span exists and stopped when there are no
     *    more sampled root spans. Whether a session is sampled, is dependent on the `profileSessionSampleRate` and the
     *    existing sampling configuration for tracing (`tracesSampleRate`/`tracesSampler`).
     *
     * @default 'manual'
     */
    profileLifecycle?: 'manual' | 'trace';
};
//# sourceMappingURL=browseroptions.d.ts.map
