import "../core/context/Destination.js";
import "../core/clock/Transport.js";
import { Param } from "../core/context/Param.js";
import { OutputNode, ToneAudioNode, ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { Decibels, Seconds, Time } from "../core/type/Units.js";
import { BasicPlaybackState, StateTimeline } from "../core/util/StateTimeline.js";
type onStopCallback = (source: Source<any>) => void;
export interface SourceOptions extends ToneAudioNodeOptions {
    volume: Decibels;
    mute: boolean;
    onstop: onStopCallback;
}
/**
 * Base class for sources.
 * start/stop of this.context.transport.
 *
 * ```
 * // Multiple state change events can be chained together,
 * // but must be set in the correct order and with ascending times
 * // OK
 * state.start().stop("+0.2");
 * // OK
 * state.start().stop("+0.2").start("+0.4").stop("+0.7")
 * // BAD
 * state.stop("+0.2").start();
 * // BAD
 * state.start("+0.3").stop("+0.2");
 * ```
 */
export declare abstract class Source<Options extends SourceOptions> extends ToneAudioNode<Options> {
    /**
     * The output volume node
     */
    private _volume;
    /**
     * The output node
     */
    output: OutputNode;
    /**
     * Sources have no inputs
     */
    input: undefined;
    /**
     * The volume of the output in decibels.
     * @example
     * const source = new Tone.PWMOscillator().toDestination();
     * source.volume.value = -6;
     */
    volume: Param<"decibels">;
    /**
     * The callback to invoke when the source is stopped.
     */
    onstop: onStopCallback;
    /**
     * Keep track of the scheduled state.
     */
    protected _state: StateTimeline<{
        duration?: Seconds;
        offset?: Seconds;
        /**
         * Either the buffer is explicitly scheduled to end using the stop method,
         * or it's implicitly ended when the buffer is over.
         */
        implicitEnd?: boolean;
    }>;
    /**
     * The synced `start` callback function from the transport
     */
    protected _synced: boolean;
    /**
     * Keep track of all of the scheduled event ids
     */
    private _scheduled;
    /**
     * Placeholder functions for syncing/unsyncing to transport
     */
    private _syncedStart;
    private _syncedStop;
    constructor(options: SourceOptions);
    static getDefaults(): SourceOptions;
    /**
     * Returns the playback state of the source, either "started" or "stopped".
     * @example
     * const player = new Tone.Player("https://tonejs.github.io/audio/berklee/ahntone_c3.mp3", () => {
     * 	player.start();
     * 	console.log(player.state);
     * }).toDestination();
     */
    get state(): BasicPlaybackState;
    /**
     * Mute the output.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * // mute the output
     * osc.mute = true;
     */
    get mute(): boolean;
    set mute(mute: boolean);
    protected abstract _start(time: Time, offset?: Time, duration?: Time): void;
    protected abstract _stop(time: Time): void;
    protected abstract _restart(time: Seconds, offset?: Time, duration?: Time): void;
    /**
     * Ensure that the scheduled time is not before the current time.
     * Should only be used when scheduled unsynced.
     */
    private _clampToCurrentTime;
    /**
     * Start the source at the specified time. If no time is given,
     * start the source now.
     * @param  time When the source should be started.
     * @example
     * const source = new Tone.Oscillator().toDestination();
     * source.start("+0.5"); // starts the source 0.5 seconds from now
     */
    start(time?: Time, offset?: Time, duration?: Time): this;
    /**
     * Stop the source at the specified time. If no time is given,
     * stop the source now.
     * @param  time When the source should be stopped.
     * @example
     * const source = new Tone.Oscillator().toDestination();
     * source.start();
     * source.stop("+0.5"); // stops the source 0.5 seconds from now
     */
    stop(time?: Time): this;
    /**
     * Restart the source.
     */
    restart(time?: Time, offset?: Time, duration?: Time): this;
    /**
     * Sync the source to the Transport so that all subsequent
     * calls to `start` and `stop` are synced to the TransportTime
     * instead of the AudioContext time.
     *
     * @example
     * const osc = new Tone.Oscillator().toDestination();
     * // sync the source so that it plays between 0 and 0.3 on the Transport's timeline
     * osc.sync().start(0).stop(0.3);
     * // start the transport.
     * Tone.Transport.start();
     * // set it to loop once a second
     * Tone.Transport.loop = true;
     * Tone.Transport.loopEnd = 1;
     */
    sync(): this;
    /**
     * Unsync the source to the Transport.
     * @see {@link sync}
     */
    unsync(): this;
    /**
     * Clean up.
     */
    dispose(): this;
}
export {};
