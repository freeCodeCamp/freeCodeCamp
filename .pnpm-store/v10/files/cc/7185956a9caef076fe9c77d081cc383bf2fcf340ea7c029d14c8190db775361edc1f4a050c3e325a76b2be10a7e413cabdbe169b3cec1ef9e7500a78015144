export type CronJobParams = {
    cronTime: string | Date;
    onTick: (context: unknown, onComplete?: unknown) => void | Promise<void>;
    onComplete?: () => void | Promise<void>;
    start?: boolean | null;
    context?: unknown;
    runOnInit?: boolean | null;
    unrefTimeout?: boolean | null;
} & ({
    timeZone?: string | null;
    utcOffset?: never;
} | {
    timeZone?: never;
    utcOffset?: number | null;
});
export type CronJob = {};
export type CronJobConstructor = {
    from: (param: CronJobParams) => CronJob;
    new (cronTime: CronJobParams['cronTime'], onTick: CronJobParams['onTick'], onComplete?: CronJobParams['onComplete'], start?: CronJobParams['start'], timeZone?: CronJobParams['timeZone'], context?: CronJobParams['context'], runOnInit?: CronJobParams['runOnInit'], utcOffset?: null, unrefTimeout?: CronJobParams['unrefTimeout']): CronJob;
    new (cronTime: CronJobParams['cronTime'], onTick: CronJobParams['onTick'], onComplete?: CronJobParams['onComplete'], start?: CronJobParams['start'], timeZone?: null, context?: CronJobParams['context'], runOnInit?: CronJobParams['runOnInit'], utcOffset?: CronJobParams['utcOffset'], unrefTimeout?: CronJobParams['unrefTimeout']): CronJob;
};
/**
 * Instruments the `cron` library to send a check-in event to Sentry for each job execution.
 *
 * ```ts
 * import * as Sentry from '@sentry/node';
 * import { CronJob } from 'cron';
 *
 * const CronJobWithCheckIn = Sentry.cron.instrumentCron(CronJob, 'my-cron-job');
 *
 * // use the constructor
 * const job = new CronJobWithCheckIn('* * * * *', () => {
 *  console.log('You will see this message every minute');
 * });
 *
 * // or from
 * const job = CronJobWithCheckIn.from({ cronTime: '* * * * *', onTick: () => {
 *   console.log('You will see this message every minute');
 * });
 * ```
 */
export declare function instrumentCron<T>(lib: T & CronJobConstructor, monitorSlug: string): T;
//# sourceMappingURL=cron.d.ts.map