"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHrTimes = exports.isTimeInput = exports.isTimeInputHrTime = exports.hrTimeToSeconds = exports.hrTimeToMilliseconds = exports.hrTimeToMicroseconds = exports.hrTimeToNanoseconds = exports.hrTimeToTimeStamp = exports.hrTimeDuration = exports.timeInputToHrTime = exports.hrTime = exports.getTimeOrigin = exports.millisToHrTime = void 0;
const platform_1 = require("../platform");
const NANOSECOND_DIGITS = 9;
const NANOSECOND_DIGITS_IN_MILLIS = 6;
const MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
const SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
/**
 * Converts a number of milliseconds from epoch to HrTime([seconds, remainder in nanoseconds]).
 * @param epochMillis
 */
function millisToHrTime(epochMillis) {
    const epochSeconds = epochMillis / 1000;
    // Decimals only.
    const seconds = Math.trunc(epochSeconds);
    // Round sub-nanosecond accuracy to nanosecond.
    const nanos = Math.round((epochMillis % 1000) * MILLISECONDS_TO_NANOSECONDS);
    return [seconds, nanos];
}
exports.millisToHrTime = millisToHrTime;
/**
 * @deprecated Use `performance.timeOrigin` directly.
 */
function getTimeOrigin() {
    return platform_1.otperformance.timeOrigin;
}
exports.getTimeOrigin = getTimeOrigin;
/**
 * Returns an hrtime calculated via performance component.
 * @param performanceNow
 */
function hrTime(performanceNow) {
    const timeOrigin = millisToHrTime(platform_1.otperformance.timeOrigin);
    const now = millisToHrTime(typeof performanceNow === 'number' ? performanceNow : platform_1.otperformance.now());
    return addHrTimes(timeOrigin, now);
}
exports.hrTime = hrTime;
/**
 *
 * Converts a TimeInput to an HrTime, defaults to _hrtime().
 * @param time
 */
function timeInputToHrTime(time) {
    // process.hrtime
    if (isTimeInputHrTime(time)) {
        return time;
    }
    else if (typeof time === 'number') {
        // Must be a performance.now() if it's smaller than process start time.
        if (time < platform_1.otperformance.timeOrigin) {
            return hrTime(time);
        }
        else {
            // epoch milliseconds or performance.timeOrigin
            return millisToHrTime(time);
        }
    }
    else if (time instanceof Date) {
        return millisToHrTime(time.getTime());
    }
    else {
        throw TypeError('Invalid input type');
    }
}
exports.timeInputToHrTime = timeInputToHrTime;
/**
 * Returns a duration of two hrTime.
 * @param startTime
 * @param endTime
 */
function hrTimeDuration(startTime, endTime) {
    let seconds = endTime[0] - startTime[0];
    let nanos = endTime[1] - startTime[1];
    // overflow
    if (nanos < 0) {
        seconds -= 1;
        // negate
        nanos += SECOND_TO_NANOSECONDS;
    }
    return [seconds, nanos];
}
exports.hrTimeDuration = hrTimeDuration;
/**
 * Convert hrTime to timestamp, for example "2019-05-14T17:00:00.000123456Z"
 * @param time
 */
function hrTimeToTimeStamp(time) {
    const precision = NANOSECOND_DIGITS;
    const tmp = `${'0'.repeat(precision)}${time[1]}Z`;
    const nanoString = tmp.substring(tmp.length - precision - 1);
    const date = new Date(time[0] * 1000).toISOString();
    return date.replace('000Z', nanoString);
}
exports.hrTimeToTimeStamp = hrTimeToTimeStamp;
/**
 * Convert hrTime to nanoseconds.
 * @param time
 */
function hrTimeToNanoseconds(time) {
    return time[0] * SECOND_TO_NANOSECONDS + time[1];
}
exports.hrTimeToNanoseconds = hrTimeToNanoseconds;
/**
 * Convert hrTime to microseconds.
 * @param time
 */
function hrTimeToMicroseconds(time) {
    return time[0] * 1e6 + time[1] / 1e3;
}
exports.hrTimeToMicroseconds = hrTimeToMicroseconds;
/**
 * Convert hrTime to milliseconds.
 * @param time
 */
function hrTimeToMilliseconds(time) {
    return time[0] * 1e3 + time[1] / 1e6;
}
exports.hrTimeToMilliseconds = hrTimeToMilliseconds;
/**
 * Convert hrTime to seconds.
 * @param time
 */
function hrTimeToSeconds(time) {
    return time[0] + time[1] / SECOND_TO_NANOSECONDS;
}
exports.hrTimeToSeconds = hrTimeToSeconds;
/**
 * check if time is HrTime
 * @param value
 */
function isTimeInputHrTime(value) {
    return (Array.isArray(value) &&
        value.length === 2 &&
        typeof value[0] === 'number' &&
        typeof value[1] === 'number');
}
exports.isTimeInputHrTime = isTimeInputHrTime;
/**
 * check if input value is a correct types.TimeInput
 * @param value
 */
function isTimeInput(value) {
    return (isTimeInputHrTime(value) ||
        typeof value === 'number' ||
        value instanceof Date);
}
exports.isTimeInput = isTimeInput;
/**
 * Given 2 HrTime formatted times, return their sum as an HrTime.
 */
function addHrTimes(time1, time2) {
    const out = [time1[0] + time2[0], time1[1] + time2[1]];
    // Nanoseconds
    if (out[1] >= SECOND_TO_NANOSECONDS) {
        out[1] -= SECOND_TO_NANOSECONDS;
        out[0] += 1;
    }
    return out;
}
exports.addHrTimes = addHrTimes;
//# sourceMappingURL=time.js.map