import { JobInput, InternalJob } from "./types";
export { InternalJob };
export type JobResultInterface = Record<string, unknown>;
/**
 * Create an internal job object
 */
export declare function createInternalJob(job: JobInput | InternalJob, plugin: {
    name: string;
    version: string;
    resolve: string;
}): InternalJob;
/**
 * Creates a job
 */
export declare function enqueueJob(job: InternalJob): Promise<Record<string, unknown>>;
/**
 * Get in progress job promise
 */
export declare function getInProcessJobPromise(contentDigest: string): Promise<Record<string, unknown>> | undefined;
/**
 * Remove a job from our inProgressQueue to reduce memory usage
 */
export declare function removeInProgressJob(contentDigest: string): void;
/**
 * Wait for all processing jobs to have finished
 */
export declare function waitUntilAllJobsComplete(): Promise<void>;
/**
 * Wait for specific jobs for engines
 */
export declare function waitJobs(jobDigests: Set<string>): Promise<void>;
export declare function isJobStale(job: Partial<InternalJob> & {
    inputPaths: InternalJob["inputPaths"];
}): boolean;
