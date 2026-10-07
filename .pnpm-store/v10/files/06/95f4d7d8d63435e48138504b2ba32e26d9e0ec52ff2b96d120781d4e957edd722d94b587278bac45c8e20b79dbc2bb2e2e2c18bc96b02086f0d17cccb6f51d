import { InternalJob } from "./types";
import { GatsbyWorkerPool } from "../worker/types";
export declare function initJobsMessagingInMainProcess(workerPool: GatsbyWorkerPool): void;
export declare const waitUntilWorkerJobsAreComplete: () => Promise<void>;
export declare function initJobsMessagingInWorker(): void;
/**
 * Forwards job to main process (if executed in worker context) and returns
 * a promise. Will return `undefined` if called not in worker context.
 */
export declare function maybeSendJobToMainProcess(job: InternalJob): Promise<Record<string, unknown>> | undefined;
