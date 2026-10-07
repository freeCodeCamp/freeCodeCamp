"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perf_hooks_1 = require("perf_hooks");
function createPerformance() {
    let enabled = false;
    let timeOrigin;
    let marks;
    let measurements;
    function enable() {
        enabled = true;
        marks = new Map();
        measurements = new Map();
        timeOrigin = perf_hooks_1.performance.now();
    }
    function disable() {
        enabled = false;
    }
    function mark(name) {
        if (enabled) {
            marks.set(name, perf_hooks_1.performance.now());
        }
    }
    function measure(name, startMark, endMark) {
        if (enabled) {
            const start = (startMark && marks.get(startMark)) || timeOrigin;
            const end = (endMark && marks.get(endMark)) || perf_hooks_1.performance.now();
            measurements.set(name, (measurements.get(name) || 0) + (end - start));
        }
    }
    function markStart(name) {
        if (enabled) {
            mark(`${name} start`);
        }
    }
    function markEnd(name) {
        if (enabled) {
            mark(`${name} end`);
            measure(name, `${name} start`, `${name} end`);
        }
    }
    function formatName(name, width = 0) {
        return `${name}:`.padEnd(width);
    }
    function formatDuration(duration, width = 0) {
        return `${(duration / 1000).toFixed(2)} s`.padStart(width);
    }
    function print() {
        if (enabled) {
            let nameWidth = 0;
            let durationWidth = 0;
            measurements.forEach((duration, name) => {
                nameWidth = Math.max(nameWidth, formatName(name).length);
                durationWidth = Math.max(durationWidth, formatDuration(duration).length);
            });
            measurements.forEach((duration, name) => {
                console.log(`${formatName(name, nameWidth)} ${formatDuration(duration, durationWidth)}`);
            });
        }
    }
    return { enable, disable, mark, markStart, markEnd, measure, print };
}
exports.createPerformance = createPerformance;
