import { ToneWithContext, ToneWithContextOptions } from "../context/ToneWithContext.js";
import { Seconds, Ticks, Time } from "../type/Units.js";
import { PlaybackState } from "../util/StateTimeline.js";
import { TickSignal } from "./TickSignal.js";
interface TickSourceOptions extends ToneWithContextOptions {
    frequency: number;
    units: "bpm" | "hertz";
}
/**
 * Uses [TickSignal](TickSignal) to track elapsed ticks with complex automation curves.
 */
export declare class TickSource<TypeName extends "bpm" | "hertz"> extends ToneWithContext<TickSourceOptions> {
    readonly name: string;
    /**
     * The frequency the callback function should be invoked.
     */
    readonly frequency: TickSignal<TypeName>;
    /**
     * The state timeline
     */
    private _state;
    /**
     * The offset values of the ticks
     */
    private _tickOffset;
    /**
     * Memoized values of getTicksAtTime at events with state other than "started"
     */
    private _ticksAtTime;
    /**
     * Memoized values of getSecondsAtTime at events with state other than "started"
     */
    private _secondsAtTime;
    /**
     * @param frequency The initial frequency that the signal ticks at
     */
    constructor(frequency?: number);
    constructor(options?: Partial<TickSourceOptions>);
    static getDefaults(): TickSourceOptions;
    /**
     * Returns the playback state of the source, either "started", "stopped" or "paused".
     */
    get state(): PlaybackState;
    /**
     * Start the clock at the given time. Optionally pass in an offset
     * of where to start the tick counter from.
     * @param  time    The time the clock should start
     * @param offset The number of ticks to start the source at
     */
    start(time: Time, offset?: Ticks): this;
    /**
     * Stop the clock. Stopping the clock resets the tick counter to 0.
     * @param time The time when the clock should stop.
     */
    stop(time: Time): this;
    /**
     * Pause the clock. Pausing does not reset the tick counter.
     * @param time The time when the clock should stop.
     */
    pause(time: Time): this;
    /**
     * Cancel start/stop/pause and setTickAtTime events scheduled after the given time.
     * @param time When to clear the events after
     */
    cancel(time: Time): this;
    /**
     * Get the elapsed ticks at the given time
     * @param  time  When to get the tick value
     * @return The number of ticks
     */
    getTicksAtTime(time?: Time): Ticks;
    /**
     * The number of times the callback was invoked. Starts counting at 0
     * and increments after the callback was invoked. Returns -1 when stopped.
     */
    get ticks(): Ticks;
    set ticks(t: Ticks);
    /**
     * The time since ticks=0 that the TickSource has been running. Accounts
     * for tempo curves
     */
    get seconds(): Seconds;
    set seconds(s: Seconds);
    /**
     * Return the elapsed seconds at the given time.
     * @param  time  When to get the elapsed seconds
     * @return  The number of elapsed seconds
     */
    getSecondsAtTime(time: Time): Seconds;
    /**
     * Set the clock's ticks at the given time.
     * @param  ticks The tick value to set
     * @param  time  When to set the tick value
     */
    setTicksAtTime(ticks: Ticks, time: Time): this;
    /**
     * Returns the scheduled state at the given time.
     * @param  time  The time to query.
     */
    getStateAtTime(time: Time): PlaybackState;
    /**
     * Get the time of the given tick. The second argument
     * is when to test before. Since ticks can be set (with setTicksAtTime)
     * there may be multiple times for a given tick value.
     * @param  tick The tick number.
     * @param  before When to measure the tick value from.
     * @return The time of the tick
     */
    getTimeOfTick(tick: Ticks, before?: number): Seconds;
    /**
     * Invoke the callback event at all scheduled ticks between the
     * start time and the end time
     * @param  startTime  The beginning of the search range
     * @param  endTime    The end of the search range
     * @param  callback   The callback to invoke with each tick
     */
    forEachTickBetween(startTime: number, endTime: number, callback: (when: Seconds, ticks: Ticks) => void): this;
    /**
     * Clean up
     */
    dispose(): this;
}
export {};
