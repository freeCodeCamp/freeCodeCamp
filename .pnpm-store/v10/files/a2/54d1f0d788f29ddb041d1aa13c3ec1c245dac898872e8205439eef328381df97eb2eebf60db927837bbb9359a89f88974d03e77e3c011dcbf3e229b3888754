import { Seconds } from "../type/Units.js";
export type TickerClockSource = "worker" | "timeout" | "offline";
/**
 * A class which provides a reliable callback using either
 * a Web Worker, or if that isn't supported, falls back to setTimeout.
 */
export declare class Ticker {
    /**
     * Either "worker" or "timeout" or "offline"
     */
    private _type;
    /**
     * The update interval of the worker
     */
    private _updateInterval;
    /**
     * The lowest allowable interval, preferably calculated from context sampleRate
     */
    private _minimumUpdateInterval;
    /**
     * The callback to invoke at regular intervals
     */
    private _callback;
    /**
     * track the callback interval
     */
    private _timeout;
    /**
     * private reference to the worker
     */
    private _worker;
    constructor(callback: () => void, type: TickerClockSource, updateInterval: Seconds, contextSampleRate?: number);
    /**
     * Generate a web worker
     */
    private _createWorker;
    /**
     * Create a timeout loop
     */
    private _createTimeout;
    /**
     * Create the clock source.
     */
    private _createClock;
    /**
     * Clean up the current clock source
     */
    private _disposeClock;
    /**
     * The rate in seconds the ticker will update
     */
    get updateInterval(): Seconds;
    set updateInterval(interval: Seconds);
    /**
     * The type of the ticker, either a worker or a timeout
     */
    get type(): TickerClockSource;
    set type(type: TickerClockSource);
    /**
     * Clean up
     */
    dispose(): void;
}
