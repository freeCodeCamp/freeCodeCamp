"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfiler = exports.createNoopProfiler = void 0;
function createNoopProfiler() {
    return {
        run(fn) {
            return Promise.resolve().then(() => fn());
        },
        collect() {
            return [];
        },
    };
}
exports.createNoopProfiler = createNoopProfiler;
function createProfiler() {
    const events = [];
    return {
        collect() {
            return events;
        },
        run(fn, name, cat) {
            let startTime;
            return Promise.resolve()
                .then(() => {
                startTime = process.hrtime();
            })
                .then(() => fn())
                .then(value => {
                const duration = process.hrtime(startTime);
                // Trace Event Format documentation:
                // https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview
                const event = {
                    name,
                    cat,
                    ph: 'X',
                    ts: hrtimeToMicroseconds(startTime),
                    pid: 1,
                    tid: 0,
                    dur: hrtimeToMicroseconds(duration),
                };
                events.push(event);
                return value;
            });
        },
    };
}
exports.createProfiler = createProfiler;
function hrtimeToMicroseconds(hrtime) {
    return (hrtime[0] * 1e9 + hrtime[1]) / 1000;
}
