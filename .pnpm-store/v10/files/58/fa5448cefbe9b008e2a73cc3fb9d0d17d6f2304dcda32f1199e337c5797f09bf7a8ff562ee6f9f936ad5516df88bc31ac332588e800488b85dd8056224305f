import { TimeClass } from "../../core/type/Time.js";
import { PlaybackState } from "../../core/util/StateTimeline.js";
import { Signal } from "../../signal/Signal.js";
import { ToneWithContext, ToneWithContextOptions } from "../context/ToneWithContext.js";
import { TransportTimeClass } from "../type/TransportTime.js";
import { BarsBeatsSixteenths, BPM, NormalRange, Seconds, Subdivision, Ticks, Time, TimeSignature, TransportTime } from "../type/Units.js";
import { Emitter } from "../util/Emitter.js";
import { TickParam } from "./TickParam.js";
interface TransportOptions extends ToneWithContextOptions {
    bpm: BPM;
    swing: NormalRange;
    swingSubdivision: Subdivision;
    timeSignature: number;
    loopStart: Time;
    loopEnd: Time;
    ppq: number;
}
type TransportEventNames = "start" | "stop" | "pause" | "loop" | "loopEnd" | "loopStart" | "ticks";
type TransportCallback = (time: Seconds) => void;
/**
 * Transport for timing musical events.
 * Supports tempo curves and time changes. Unlike browser-based timing (setInterval, requestAnimationFrame)
 * Transport timing events pass in the exact time of the scheduled event
 * in the argument of the callback function. Pass that time value to the object
 * you're scheduling. <br><br>
 * A single transport is created for you when the library is initialized.
 * <br><br>
 * The transport emits the events: "start", "stop", "pause", and "loop" which are
 * called with the time of that event as the argument.
 *
 * @example
 * const osc = new Tone.Oscillator().toDestination();
 * // repeated event every 8th note
 * Tone.getTransport().scheduleRepeat((time) => {
 * 	// use the callback time to schedule events
 * 	osc.start(time).stop(time + 0.1);
 * }, "8n");
 * // transport must be started before it starts invoking events
 * Tone.getTransport().start();
 * @category Core
 */
export declare class TransportClass extends ToneWithContext<TransportOptions> implements Emitter<TransportEventNames> {
    readonly name: string;
    /**
     * If the transport loops or not.
     */
    private _loop;
    /**
     * The loop start position in ticks
     */
    private _loopStart;
    /**
     * The loop end position in ticks
     */
    private _loopEnd;
    /**
     * Pulses per quarter is the number of ticks per quarter note.
     */
    private _ppq;
    /**
     * watches the main oscillator for timing ticks
     * initially starts at 120bpm
     */
    private _clock;
    /**
     * The Beats Per Minute of the Transport.
     * @example
     * const osc = new Tone.Oscillator().toDestination();
     * Tone.getTransport().bpm.value = 80;
     * // start/stop the oscillator every quarter note
     * Tone.getTransport().scheduleRepeat(time => {
     * 	osc.start(time).stop(time + 0.1);
     * }, "4n");
     * Tone.getTransport().start();
     * // ramp the bpm to 120 over 10 seconds
     * Tone.getTransport().bpm.rampTo(120, 10);
     */
    bpm: TickParam<"bpm">;
    /**
     * The time signature, or more accurately the numerator
     * of the time signature over a denominator of 4.
     */
    private _timeSignature;
    /**
     * All the events in an object to keep track by ID
     */
    private _scheduledEvents;
    /**
     * The scheduled events.
     */
    private _timeline;
    /**
     * Repeated events
     */
    private _repeatedEvents;
    /**
     * All of the synced Signals
     */
    private _syncedSignals;
    /**
     * The subdivision of the swing
     */
    private _swingTicks;
    /**
     * The swing amount
     */
    private _swingAmount;
    constructor(options?: Partial<TransportOptions>);
    static getDefaults(): TransportOptions;
    /**
     * called on every tick
     * @param  tickTime clock relative tick time
     */
    private _processTick;
    /**
     * Schedule an event along the timeline.
     * @param callback The callback to be invoked at the time.
     * @param time The time to invoke the callback at.
     * @return The id of the event which can be used for canceling the event.
     * @example
     * // schedule an event on the 16th measure
     * Tone.getTransport().schedule((time) => {
     * 	// invoked on measure 16
     * 	console.log("measure 16!");
     * }, "16:0:0");
     */
    schedule(callback: TransportCallback, time: TransportTime | TransportTimeClass): number;
    /**
     * Schedule a repeated event along the timeline. The event will fire
     * at the `interval` starting at the `startTime` and for the specified
     * `duration`.
     * @param  callback   The callback to invoke.
     * @param  interval   The duration between successive callbacks. Must be a positive number.
     * @param  startTime  When along the timeline the events should start being invoked.
     * @param  duration How long the event should repeat.
     * @return  The ID of the scheduled event. Use this to cancel the event.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // a callback invoked every eighth note after the first measure
     * Tone.getTransport().scheduleRepeat((time) => {
     * 	osc.start(time).stop(time + 0.1);
     * }, "8n", "1m");
     */
    scheduleRepeat(callback: TransportCallback, interval: Time | TimeClass, startTime?: TransportTime | TransportTimeClass, duration?: Time): number;
    /**
     * Schedule an event that will be removed after it is invoked.
     * @param callback The callback to invoke once.
     * @param time The time the callback should be invoked.
     * @returns The ID of the scheduled event.
     */
    scheduleOnce(callback: TransportCallback, time: TransportTime | TransportTimeClass): number;
    /**
     * Clear the passed in event id from the timeline
     * @param eventId The id of the event.
     */
    clear(eventId: number): this;
    /**
     * Add an event to the correct timeline. Keep track of the
     * timeline it was added to.
     * @returns the event id which was just added
     */
    private _addEvent;
    /**
     * Remove scheduled events from the timeline after
     * the given time. Repeated events will be removed
     * if their startTime is after the given time
     * @param after Clear all events after this time.
     */
    cancel(after?: TransportTime): this;
    /**
     * Bind start/stop/pause events from the clock and emit them.
     */
    private _bindClockEvents;
    /**
     * Returns the playback state of the source, either "started", "stopped", or "paused"
     */
    get state(): PlaybackState;
    /**
     * Start the transport and all sources synced to the transport.
     * @param  time The time when the transport should start.
     * @param  offset The timeline offset to start the transport.
     * @example
     * // start the transport in one second starting at beginning of the 5th measure.
     * Tone.getTransport().start("+1", "4:0:0");
     */
    start(time?: Time, offset?: TransportTime): this;
    /**
     * Stop the transport and all sources synced to the transport.
     * @param time The time when the transport should stop.
     * @example
     * Tone.getTransport().stop();
     */
    stop(time?: Time): this;
    /**
     * Pause the transport and all sources synced to the transport.
     */
    pause(time?: Time): this;
    /**
     * Toggle the current state of the transport. If it is
     * started, it will stop it, otherwise it will start the Transport.
     * @param  time The time of the event
     */
    toggle(time?: Time): this;
    /**
     * The time signature as just the numerator over 4.
     * For example 4/4 would be just 4 and 6/8 would be 3.
     * @example
     * // common time
     * Tone.getTransport().timeSignature = 4;
     * // 7/8
     * Tone.getTransport().timeSignature = [7, 8];
     * // this will be reduced to a single number
     * Tone.getTransport().timeSignature; // returns 3.5
     */
    get timeSignature(): TimeSignature;
    set timeSignature(timeSig: TimeSignature);
    /**
     * When the Transport.loop = true, this is the starting position of the loop.
     */
    get loopStart(): Time;
    set loopStart(startPosition: Time);
    /**
     * When the Transport.loop = true, this is the ending position of the loop.
     */
    get loopEnd(): Time;
    set loopEnd(endPosition: Time);
    /**
     * If the transport loops or not.
     */
    get loop(): boolean;
    set loop(loop: boolean);
    /**
     * Set the loop start and stop at the same time.
     * @example
     * // loop over the first measure
     * Tone.getTransport().setLoopPoints(0, "1m");
     * Tone.getTransport().loop = true;
     */
    setLoopPoints(startPosition: TransportTime, endPosition: TransportTime): this;
    /**
     * The swing value. Between 0-1 where 1 equal to the note + half the subdivision.
     */
    get swing(): NormalRange;
    set swing(amount: NormalRange);
    /**
     * Set the subdivision which the swing will be applied to.
     * The default value is an 8th note. Value must be less
     * than a quarter note.
     */
    get swingSubdivision(): Subdivision;
    set swingSubdivision(subdivision: Subdivision);
    /**
     * The Transport's position in Bars:Beats:Sixteenths.
     * Setting the value will jump to that position right away.
     */
    get position(): BarsBeatsSixteenths | Time;
    set position(progress: Time);
    /**
     * The Transport's position in seconds.
     * Setting the value will jump to that position right away.
     */
    get seconds(): Seconds;
    set seconds(s: Seconds);
    /**
     * The Transport's loop position as a normalized value. Always
     * returns 0 if the Transport.loop = false.
     */
    get progress(): NormalRange;
    /**
     * The Transport's current tick position.
     */
    get ticks(): Ticks;
    set ticks(t: Ticks);
    /**
     * Get the clock's ticks at the given time.
     * @param  time  When to get the tick value
     * @return The tick value at the given time.
     */
    getTicksAtTime(time?: Time): Ticks;
    /**
     * Return the elapsed seconds at the given time.
     * @param  time  When to get the elapsed seconds
     * @return  The number of elapsed seconds
     */
    getSecondsAtTime(time: Time): Seconds;
    /**
     * Pulses Per Quarter note. This is the smallest resolution
     * the Transport timing supports. This should be set once
     * on initialization and not set again. Changing this value
     * after other objects have been created can cause problems.
     */
    get PPQ(): number;
    set PPQ(ppq: number);
    /**
     * Returns the time aligned to the next subdivision
     * of the Transport. If the Transport is not started,
     * it will return 0.
     * Note: this will not work precisely during tempo ramps.
     * @param  subdivision  The subdivision to quantize to
     * @return  The context time of the next subdivision.
     * @example
     * // the transport must be started, otherwise returns 0
     * Tone.getTransport().start();
     * Tone.getTransport().nextSubdivision("4n");
     */
    nextSubdivision(subdivision?: Time): Seconds;
    /**
     * Attaches the signal to the tempo control signal so that
     * any changes in the tempo will change the signal in the same
     * ratio.
     *
     * @param signal
     * @param ratio Optionally pass in the ratio between the two signals.
     * 			Otherwise it will be computed based on their current values.
     */
    syncSignal(signal: Signal<any>, ratio?: number): this;
    /**
     * Unsyncs a previously synced signal from the transport's control.
     * @see {@link syncSignal}.
     */
    unsyncSignal(signal: Signal<any>): this;
    /**
     * Clean up.
     */
    dispose(): this;
    on: (event: TransportEventNames, callback: (...args: any[]) => void) => this;
    once: (event: TransportEventNames, callback: (...args: any[]) => void) => this;
    off: (event: TransportEventNames, callback?: ((...args: any[]) => void) | undefined) => this;
    emit: (event: any, ...args: any[]) => this;
}
export {};
