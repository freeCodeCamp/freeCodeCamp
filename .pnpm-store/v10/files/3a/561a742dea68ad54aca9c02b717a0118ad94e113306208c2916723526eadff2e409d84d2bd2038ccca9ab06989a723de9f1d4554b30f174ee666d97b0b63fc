export {};

import * as perf_hooks from "node:perf_hooks";

type _Performance = typeof globalThis extends { onmessage: any } ? {} : perf_hooks.Performance;
type _PerformanceEntry = typeof globalThis extends { onmessage: any } ? {} : perf_hooks.PerformanceEntry;
type _PerformanceMark = typeof globalThis extends { onmessage: any } ? {} : perf_hooks.PerformanceMark;
type _PerformanceMeasure = typeof globalThis extends { onmessage: any } ? {} : perf_hooks.PerformanceMeasure;
type _PerformanceObserver = typeof globalThis extends { onmessage: any } ? {} : perf_hooks.PerformanceObserver;
type _PerformanceObserverEntryList = typeof globalThis extends { onmessage: any } ? {}
    : perf_hooks.PerformanceObserverEntryList;
type _PerformanceResourceTiming = typeof globalThis extends { onmessage: any } ? {}
    : perf_hooks.PerformanceResourceTiming;

declare global {
    interface Performance extends _Performance {}
    var Performance: typeof globalThis extends { onmessage: any; Performance: infer T } ? T
        : typeof perf_hooks.Performance;

    interface PerformanceEntry extends _PerformanceEntry {}
    var PerformanceEntry: typeof globalThis extends { onmessage: any; PerformanceEntry: infer T } ? T
        : typeof perf_hooks.PerformanceEntry;

    interface PerformanceMark extends _PerformanceMark {}
    var PerformanceMark: typeof globalThis extends { onmessage: any; PerformanceMark: infer T } ? T
        : typeof perf_hooks.PerformanceMark;

    interface PerformanceMeasure extends _PerformanceMeasure {}
    var PerformanceMeasure: typeof globalThis extends { onmessage: any; PerformanceMeasure: infer T } ? T
        : typeof perf_hooks.PerformanceMeasure;

    interface PerformanceObserver extends _PerformanceObserver {}
    var PerformanceObserver: typeof globalThis extends { onmessage: any; PerformanceObserver: infer T } ? T
        : typeof perf_hooks.PerformanceObserver;

    interface PerformanceObserverEntryList extends _PerformanceObserverEntryList {}
    var PerformanceObserverEntryList: typeof globalThis extends
        { onmessage: any; PerformanceObserverEntryList: infer T } ? T : typeof perf_hooks.PerformanceObserverEntryList;

    interface PerformanceResourceTiming extends _PerformanceResourceTiming {}
    var PerformanceResourceTiming: typeof globalThis extends { onmessage: any; PerformanceResourceTiming: infer T } ? T
        : typeof perf_hooks.PerformanceResourceTiming;

    var performance: typeof globalThis extends { onmessage: any; performance: infer T } ? T : perf_hooks.Performance;
}
