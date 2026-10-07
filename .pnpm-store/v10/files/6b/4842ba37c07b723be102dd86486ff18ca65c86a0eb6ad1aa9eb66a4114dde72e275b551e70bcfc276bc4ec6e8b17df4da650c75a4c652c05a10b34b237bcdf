import { MonitorConfig } from '@sentry/core';
export interface NodeCronOptions {
    name: string;
    timezone?: string;
}
export interface NodeCron {
    schedule: (cronExpression: string, callback: (context?: unknown) => void, options: NodeCronOptions | undefined) => unknown;
}
/**
 * Wraps the `node-cron` library with check-in monitoring.
 *
 * ```ts
 * import * as Sentry from "@sentry/node";
 * import * as cron from "node-cron";
 *
 * const cronWithCheckIn = Sentry.cron.instrumentNodeCron(cron);
 *
 * cronWithCheckIn.schedule(
 *   "* * * * *",
 *   () => {
 *     console.log("running a task every minute");
 *   },
 *   { name: "my-cron-job" },
 * );
 * ```
 */
export declare function instrumentNodeCron<T>(lib: Partial<NodeCron> & T, monitorConfig?: Pick<MonitorConfig, 'isolateTrace'>): T;
//# sourceMappingURL=node-cron.d.ts.map
