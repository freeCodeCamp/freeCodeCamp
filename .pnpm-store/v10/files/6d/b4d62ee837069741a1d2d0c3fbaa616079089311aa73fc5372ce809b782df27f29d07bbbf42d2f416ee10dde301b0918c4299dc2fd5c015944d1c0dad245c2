import { NormalRange, Positive, Seconds, Time, TransportTime } from "../core/type/Units.js";
import { ToneWithContext, ToneWithContextOptions } from "../core/context/ToneWithContext.js";
import { BasicPlaybackState } from "../core/util/StateTimeline.js";
export interface LoopOptions extends ToneWithContextOptions {
    callback: (time: Seconds) => void;
    interval: Time;
    playbackRate: Positive;
    iterations: number;
    probability: NormalRange;
    mute: boolean;
    humanize: boolean | Time;
}
/**
 * Loop creates a looped callback at the
 * specified interval. The callback can be
 * started, stopped and scheduled along
 * the Transport's timeline.
 * @example
 * const loop = new Tone.Loop((time) => {
 * 	// triggered every eighth note.
 * 	console.log(time);
 * }, "8n").start(0);
 * Tone.Transport.start();
 * @category Event
 */
export declare class Loop<Options extends LoopOptions = LoopOptions> extends ToneWithContext<Options> {
    readonly name: string;
    /**
     * The event which produces the callbacks
     */
    private _event;
    /**
     * The callback to invoke with the next event in the pattern
     */
    callback: (time: Seconds) => void;
    /**
     * @param callback The callback to invoke at the time.
     * @param interval The time between successive callback calls.
     */
    constructor(callback?: (time: Seconds) => void, interval?: Time);
    constructor(options?: Partial<LoopOptions>);
    static getDefaults(): LoopOptions;
    /**
     * Start the loop at the specified time along the Transport's timeline.
     * @param  time  When to start the Loop.
     */
    start(time?: TransportTime): this;
    /**
     * Stop the loop at the given time.
     * @param  time  When to stop the Loop.
     */
    stop(time?: TransportTime): this;
    /**
     * Cancel all scheduled events greater than or equal to the given time
     * @param  time  The time after which events will be cancel.
     */
    cancel(time?: TransportTime): this;
    /**
     * Internal function called when the notes should be called
     * @param time  The time the event occurs
     */
    protected _tick(time: Seconds): void;
    /**
     * The state of the Loop, either started or stopped.
     */
    get state(): BasicPlaybackState;
    /**
     * The progress of the loop as a value between 0-1. 0, when the loop is stopped or done iterating.
     */
    get progress(): NormalRange;
    /**
     * The time between successive callbacks.
     * @example
     * const loop = new Tone.Loop();
     * loop.interval = "8n"; // loop every 8n
     */
    get interval(): Time;
    set interval(interval: Time);
    /**
     * The playback rate of the loop. The normal playback rate is 1 (no change).
     * A `playbackRate` of 2 would be twice as fast.
     */
    get playbackRate(): Positive;
    set playbackRate(rate: Positive);
    /**
     * Random variation +/-0.01s to the scheduled time.
     * Or give it a time value which it will randomize by.
     */
    get humanize(): boolean | Time;
    set humanize(variation: boolean | Time);
    /**
     * The probably of the callback being invoked.
     */
    get probability(): NormalRange;
    set probability(prob: NormalRange);
    /**
     * Muting the Loop means that no callbacks are invoked.
     */
    get mute(): boolean;
    set mute(mute: boolean);
    /**
     * The number of iterations of the loop. The default value is `Infinity` (loop forever).
     */
    get iterations(): number;
    set iterations(iters: number);
    dispose(): this;
}
