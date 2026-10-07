import { Source, SourceOptions } from "../Source.js";
import { ToneAudioBuffer } from "../../core/context/ToneAudioBuffer.js";
import { Cents, Positive, Seconds, Time } from "../../core/type/Units.js";
interface GrainPlayerOptions extends SourceOptions {
    onload: () => void;
    onerror: (error: Error) => void;
    reverse: boolean;
    url?: ToneAudioBuffer | string | AudioBuffer;
    overlap: Seconds;
    grainSize: Seconds;
    playbackRate: Positive;
    detune: Cents;
    loop: boolean;
    loopStart: Time;
    loopEnd: Time;
}
/**
 * GrainPlayer implements [granular synthesis](https://en.wikipedia.org/wiki/Granular_synthesis).
 * Granular Synthesis enables you to adjust pitch and playback rate independently. The grainSize is the
 * amount of time each small chunk of audio is played for and the overlap is the
 * amount of crossfading transition time between successive grains.
 * @category Source
 */
export declare class GrainPlayer extends Source<GrainPlayerOptions> {
    readonly name: string;
    /**
     * The audio buffer belonging to the player.
     */
    buffer: ToneAudioBuffer;
    /**
     * Create a repeating tick to schedule the grains.
     */
    private _clock;
    /**
     * Internal loopStart value
     */
    private _loopStart;
    /**
     * Internal loopStart value
     */
    private _loopEnd;
    /**
     * All of the currently playing BufferSources
     */
    private _activeSources;
    /**
     * Internal reference to the playback rate
     */
    private _playbackRate;
    /**
     * Internal grain size reference;
     */
    private _grainSize;
    /**
     * Internal overlap reference;
     */
    private _overlap;
    /**
     * Adjust the pitch independently of the playbackRate.
     */
    detune: Cents;
    /**
     * If the buffer should loop back to the loopStart when completed
     */
    loop: boolean;
    /**
     * @param url Either the AudioBuffer or the url from which to load the AudioBuffer
     * @param onload The function to invoke when the buffer is loaded.
     */
    constructor(url?: string | AudioBuffer | ToneAudioBuffer, onload?: () => void);
    constructor(options?: Partial<GrainPlayerOptions>);
    static getDefaults(): GrainPlayerOptions;
    /**
     * Internal start method
     */
    protected _start(time?: Time, offset?: Time, duration?: Time): void;
    /**
     * Stop and then restart the player from the beginning (or offset)
     * @param  time When the player should start.
     * @param  offset The offset from the beginning of the sample to start at.
     * @param  duration How long the sample should play. If no duration is given,
     * 					it will default to the full length of the sample (minus any offset)
     */
    restart(time?: Seconds, offset?: Time, duration?: Time): this;
    protected _restart(time?: Seconds, offset?: Time, duration?: Time): void;
    /**
     * Internal stop method
     */
    protected _stop(time?: Time): void;
    /**
     * Invoked when the clock is stopped
     */
    private _onstop;
    /**
     * Invoked on each clock tick. scheduled a new grain at this time.
     */
    private _tick;
    /**
     * The playback rate of the sample
     */
    get playbackRate(): Positive;
    set playbackRate(rate: Positive);
    /**
     * The loop start time.
     */
    get loopStart(): Time;
    set loopStart(time: Time);
    /**
     * The loop end time.
     */
    get loopEnd(): Time;
    set loopEnd(time: Time);
    /**
     * The direction the buffer should play in
     */
    get reverse(): boolean;
    set reverse(rev: boolean);
    /**
     * The size of each chunk of audio that the
     * buffer is chopped into and played back at.
     */
    get grainSize(): Time;
    set grainSize(size: Time);
    /**
     * The duration of the cross-fade between successive grains.
     */
    get overlap(): Time;
    set overlap(time: Time);
    /**
     * If all the buffer is loaded
     */
    get loaded(): boolean;
    dispose(): this;
}
export {};
