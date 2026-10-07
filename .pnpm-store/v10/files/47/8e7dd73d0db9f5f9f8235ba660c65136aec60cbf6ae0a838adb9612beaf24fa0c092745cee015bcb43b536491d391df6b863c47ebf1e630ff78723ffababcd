import type * as api from '@opentelemetry/api';
/**
 * Converts a number of milliseconds from epoch to HrTime([seconds, remainder in nanoseconds]).
 * @param epochMillis
 */
export declare function millisToHrTime(epochMillis: number): api.HrTime;
/**
 * @deprecated Use `performance.timeOrigin` directly.
 */
export declare function getTimeOrigin(): number;
/**
 * Returns an hrtime calculated via performance component.
 * @param performanceNow
 */
export declare function hrTime(performanceNow?: number): api.HrTime;
/**
 *
 * Converts a TimeInput to an HrTime, defaults to _hrtime().
 * @param time
 */
export declare function timeInputToHrTime(time: api.TimeInput): api.HrTime;
/**
 * Returns a duration of two hrTime.
 * @param startTime
 * @param endTime
 */
export declare function hrTimeDuration(startTime: api.HrTime, endTime: api.HrTime): api.HrTime;
/**
 * Convert hrTime to timestamp, for example "2019-05-14T17:00:00.000123456Z"
 * @param time
 */
export declare function hrTimeToTimeStamp(time: api.HrTime): string;
/**
 * Convert hrTime to nanoseconds.
 * @param time
 */
export declare function hrTimeToNanoseconds(time: api.HrTime): number;
/**
 * Convert hrTime to microseconds.
 * @param time
 */
export declare function hrTimeToMicroseconds(time: api.HrTime): number;
/**
 * Convert hrTime to milliseconds.
 * @param time
 */
export declare function hrTimeToMilliseconds(time: api.HrTime): number;
/**
 * Convert hrTime to seconds.
 * @param time
 */
export declare function hrTimeToSeconds(time: api.HrTime): number;
/**
 * check if time is HrTime
 * @param value
 */
export declare function isTimeInputHrTime(value: unknown): value is api.HrTime;
/**
 * check if input value is a correct types.TimeInput
 * @param value
 */
export declare function isTimeInput(value: unknown): value is api.HrTime | number | Date;
/**
 * Given 2 HrTime formatted times, return their sum as an HrTime.
 */
export declare function addHrTimes(time1: api.HrTime, time2: api.HrTime): api.HrTime;
//# sourceMappingURL=time.d.ts.map