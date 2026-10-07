import { TraceContext } from './context';
interface CrontabSchedule {
    type: 'crontab';
    /** The crontab schedule string, e.g. 0 * * * *. */
    value: string;
}
interface IntervalSchedule {
    type: 'interval';
    value: number;
    unit: 'year' | 'month' | 'week' | 'day' | 'hour' | 'minute';
}
type MonitorSchedule = CrontabSchedule | IntervalSchedule;
export interface SerializedCheckIn {
    /** Check-In ID (unique and client generated). */
    check_in_id: string;
    /** The distinct slug of the monitor. */
    monitor_slug: string;
    /** The status of the check-in. */
    status: 'in_progress' | 'ok' | 'error';
    /** The duration of the check-in in seconds. Will only take effect if the status is ok or error. */
    duration?: number;
    release?: string;
    environment?: string;
    monitor_config?: {
        schedule: MonitorSchedule;
        /**
         * The allowed allowed margin of minutes after the expected check-in time that
         * the monitor will not be considered missed for.
         */
        checkin_margin?: number;
        /**
         * The allowed allowed duration in minutes that the monitor may be `in_progress`
         * for before being considered failed due to timeout.
         */
        max_runtime?: number;
        /**
         * A tz database string representing the timezone which the monitor's execution schedule is in.
         * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
         */
        timezone?: string;
        /** How many consecutive failed check-ins it takes to create an issue. */
        failure_issue_threshold?: number;
        /** How many consecutive OK check-ins it takes to resolve an issue. */
        recovery_threshold?: number;
    };
    contexts?: {
        trace?: TraceContext;
    };
}
export interface HeartbeatCheckIn {
    /** The distinct slug of the monitor. */
    monitorSlug: SerializedCheckIn['monitor_slug'];
    /** The status of the check-in. */
    status: 'ok' | 'error';
}
export interface InProgressCheckIn {
    /** The distinct slug of the monitor. */
    monitorSlug: SerializedCheckIn['monitor_slug'];
    /** The status of the check-in. */
    status: 'in_progress';
}
export interface FinishedCheckIn {
    /** The distinct slug of the monitor. */
    monitorSlug: SerializedCheckIn['monitor_slug'];
    /** The status of the check-in. */
    status: 'ok' | 'error';
    /** Check-In ID (unique and client generated). */
    checkInId: SerializedCheckIn['check_in_id'];
    /** The duration of the check-in in seconds. Will only take effect if the status is ok or error. */
    duration?: SerializedCheckIn['duration'];
}
export type CheckIn = HeartbeatCheckIn | InProgressCheckIn | FinishedCheckIn;
type SerializedMonitorConfig = NonNullable<SerializedCheckIn['monitor_config']>;
export interface MonitorConfig {
    /**
     * The schedule on which the monitor should run. Either a crontab schedule string or an interval.
     */
    schedule: MonitorSchedule;
    /**
     * The allowed allowed margin of minutes after the expected check-in time that
     * the monitor will not be considered missed for.
     */
    checkinMargin?: SerializedMonitorConfig['checkin_margin'];
    /**
     * The allowed allowed duration in minutes that the monitor may be `in_progress`
     * for before being considered failed due to timeout.
     */
    maxRuntime?: SerializedMonitorConfig['max_runtime'];
    /**
     * A tz database string representing the timezone which the monitor's execution schedule is in.
     * See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     */
    timezone?: SerializedMonitorConfig['timezone'];
    /** How many consecutive failed check-ins it takes to create an issue. */
    failureIssueThreshold?: SerializedMonitorConfig['failure_issue_threshold'];
    /** How many consecutive OK check-ins it takes to resolve an issue. */
    recoveryThreshold?: SerializedMonitorConfig['recovery_threshold'];
    /**
     * If set to true, creates a new trace for the monitor callback instead of continuing the current trace.
     * This allows distinguishing between different cron job executions.
     */
    isolateTrace?: boolean;
}
export {};
//# sourceMappingURL=checkin.d.ts.map
