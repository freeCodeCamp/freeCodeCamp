import "../core/clock/Transport.js";
import { ToneWithContext, ToneWithContextOptions } from "../core/context/ToneWithContext.js";
import { TransportTimeClass } from "../core/type/TransportTime.js";
import { NormalRange, Positive, Seconds, Ticks, Time, TransportTime } from "../core/type/Units.js";
import { BasicPlaybackState, StateTimeline } from "../core/util/StateTimeline.js";
export type ToneEventCallback<T> = (time: Seconds, value: T) => void;
export interface ToneEventOptions<T> extends ToneWithContextOptions {
    callback: ToneEventCallback<T>;
    loop: boolean | number;
    loopEnd: Time;
    loopStart: Time;
    playbackRate: Positive;
    value?: T;
    probability: NormalRange;
    mute: boolean;
    humanize: boolean | Time;
}
/**
 * ToneEvent abstracts away this.context.transport.schedule and provides a schedulable
 * callback for a single or repeatable events along the timeline.
 *
 * @example
 * const synth = new Tone.PolySynth().toDestination();
 * const chordEvent = new Tone.ToneEvent(((time, chord) => {
 * 	// the chord as well as the exact time of the event
 * 	// are passed in as arguments to the callback function
 * 	synth.triggerAttackRelease(chord, 0.5, time);
 * }), ["D4", "E4", "F4"]);
 * // start the chord at the beginning of the transport timeline
 * chordEvent.start();
 * // loop it every measure for 8 measures
 * chordEvent.loop = 8;
 * chordEvent.loopEnd = "1m";
 * @category Event
 */
export declare class ToneEvent<ValueType = any> extends ToneWithContext<ToneEventOptions<ValueType>> {
    readonly name: string;
    /**
     * Loop value
     */
    protected _loop: boolean | number;
    /**
     * The callback to invoke.
     */
    callback: ToneEventCallback<ValueType>;
    /**
     * The value which is passed to the
     * callback function.
     */
    value: ValueType;
    /**
     * When the note is scheduled to start.
     */
    protected _loopStart: Ticks;
    /**
     * When the note is scheduled to start.
     */
    protected _loopEnd: Ticks;
    /**
     * Tracks the scheduled events
     */
    protected _state: StateTimeline<{
        id: number;
    }>;
    /**
     * The playback speed of the note. A speed of 1
     * is no change.
     */
    protected _playbackRate: Positive;
    /**
     * A delay time from when the event is scheduled to start
     */
    protected _startOffset: Ticks;
    /**
     * private holder of probability value
     */
    protected _probability: NormalRange;
    /**
     * the amount of variation from the given time.
     */
    protected _humanize: boolean | Time;
    /**
     * If mute is true, the callback won't be invoked.
     */
    mute: boolean;
    /**
     * @param callback The callback to invoke at the time.
     * @param value The value or values which should be passed to the callback function on invocation.
     */
    constructor(callback?: ToneEventCallback<ValueType>, value?: ValueType);
    constructor(options?: Partial<ToneEventOptions<ValueType>>);
    static getDefaults(): ToneEventOptions<any>;
    /**
     * Reschedule all of the events along the timeline
     * with the updated values.
     * @param after Only reschedules events after the given time.
     */
    private _rescheduleEvents;
    /**
     * Returns the playback state of the note, either "started" or "stopped".
     */
    get state(): BasicPlaybackState;
    /**
     * The start from the scheduled start time.
     */
    get startOffset(): Ticks;
    set startOffset(offset: Ticks);
    /**
     * The probability of the notes being triggered.
     */
    get probability(): NormalRange;
    set probability(prob: NormalRange);
    /**
     * If set to true, will apply small random variation
     * to the callback time. If the value is given as a time, it will randomize
     * by that amount.
     * @example
     * const event = new Tone.ToneEvent();
     * event.humanize = true;
     */
    get humanize(): Time | boolean;
    set humanize(variation: Time | boolean);
    /**
     * Start the note at the given time.
     * @param  time  When the event should start.
     */
    start(time?: TransportTime | TransportTimeClass): this;
    /**
     * Stop the Event at the given time.
     * @param  time  When the event should stop.
     */
    stop(time?: TransportTime | TransportTimeClass): this;
    /**
     * Cancel all scheduled events greater than or equal to the given time
     * @param  time  The time after which events will be cancel.
     */
    cancel(time?: TransportTime | TransportTimeClass): this;
    /**
     * The callback function invoker. Also
     * checks if the Event is done playing
     * @param  time  The time of the event in seconds
     */
    protected _tick(time: Seconds): void;
    /**
     * Get the duration of the loop.
     */
    protected _getLoopDuration(): Ticks;
    /**
     * If the note should loop or not
     * between ToneEvent.loopStart and
     * ToneEvent.loopEnd. If set to true,
     * the event will loop indefinitely,
     * if set to a number greater than 1
     * it will play a specific number of
     * times, if set to false, 0 or 1, the
     * part will only play once.
     */
    get loop(): boolean | number;
    set loop(loop: boolean | number);
    /**
     * The playback rate of the event. Defaults to 1.
     * @example
     * const note = new Tone.ToneEvent();
     * note.loop = true;
     * // repeat the note twice as fast
     * note.playbackRate = 2;
     */
    get playbackRate(): Positive;
    set playbackRate(rate: Positive);
    /**
     * The loopEnd point is the time the event will loop
     * if ToneEvent.loop is true.
     */
    get loopEnd(): Time;
    set loopEnd(loopEnd: Time);
    /**
     * The time when the loop should start.
     */
    get loopStart(): Time;
    set loopStart(loopStart: Time);
    /**
     * The current progress of the loop interval.
     * Returns 0 if the event is not started yet or
     * it is not set to loop.
     */
    get progress(): NormalRange;
    dispose(): this;
}
