import { Clock } from './interpreter';
export interface SimulatedClock extends Clock {
    start(speed: number): void;
    increment(ms: number): void;
    set(ms: number): void;
}
export declare class SimulatedClock implements SimulatedClock {
    private timeouts;
    private _now;
    private _id;
    now(): number;
    private getId;
    setTimeout(fn: (...args: any[]) => void, timeout: number): number;
    clearTimeout(id: number): void;
    private flushTimeouts;
}
//# sourceMappingURL=SimulatedClock.d.ts.map