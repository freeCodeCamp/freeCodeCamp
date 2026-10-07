interface SchedulerOptions {
    deferEvents: boolean;
}
export declare class Scheduler {
    private processingEvent;
    private queue;
    private initialized;
    private options;
    constructor(options?: Partial<SchedulerOptions>);
    initialize(callback?: () => void): void;
    schedule(task: () => void): void;
    clear(): void;
    private flushEvents;
    private process;
}
export {};
//# sourceMappingURL=scheduler.d.ts.map