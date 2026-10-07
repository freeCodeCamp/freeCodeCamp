export interface NodeSchedule {
    scheduleJob(nameOrExpression: string | Date | object, expressionOrCallback: string | Date | object | (() => void), callback?: () => void): unknown;
}
/**
 * Instruments the `node-schedule` library to send a check-in event to Sentry for each job execution.
 *
 * ```ts
 * import * as Sentry from '@sentry/node';
 * import * as schedule from 'node-schedule';
 *
 * const scheduleWithCheckIn = Sentry.cron.instrumentNodeSchedule(schedule);
 *
 * const job = scheduleWithCheckIn.scheduleJob('my-cron-job', '* * * * *', () => {
 *  console.log('You will see this message every minute');
 * });
 * ```
 */
export declare function instrumentNodeSchedule<T>(lib: T & NodeSchedule): T;
//# sourceMappingURL=node-schedule.d.ts.map
