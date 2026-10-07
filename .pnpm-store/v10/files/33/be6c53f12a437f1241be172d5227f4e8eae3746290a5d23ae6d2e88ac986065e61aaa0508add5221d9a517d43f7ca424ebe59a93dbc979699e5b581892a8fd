import { StereoFeedbackEffect, StereoFeedbackEffectOptions } from "../effect/StereoFeedbackEffect.js";
import { Degrees, Frequency, Milliseconds, NormalRange, Time } from "../core/type/Units.js";
import { ToneOscillatorType } from "../source/oscillator/OscillatorInterface.js";
import { Signal } from "../signal/Signal.js";
export interface ChorusOptions extends StereoFeedbackEffectOptions {
    frequency: Frequency;
    delayTime: Milliseconds;
    depth: NormalRange;
    type: ToneOscillatorType;
    spread: Degrees;
}
/**
 * Chorus is a stereo chorus effect composed of a left and right delay with an {@link LFO} applied to the delayTime of each channel.
 * When {@link feedback} is set to a value larger than 0, you also get Flanger-type effects.
 * Inspiration from [Tuna.js](https://github.com/Dinahmoe/tuna/blob/master/tuna.js).
 * Read more on the chorus effect on [Sound On Sound](http://www.soundonsound.com/sos/jun04/articles/synthsecrets.htm).
 *
 * @example
 * const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
 * const synth = new Tone.PolySynth().connect(chorus);
 * synth.triggerAttackRelease(["C3", "E3", "G3"], "8n");
 *
 * @category Effect
 */
export declare class Chorus extends StereoFeedbackEffect<ChorusOptions> {
    readonly name: string;
    /**
     * the depth of the chorus
     */
    private _depth;
    /**
     * the delayTime in seconds.
     */
    private _delayTime;
    /**
     * the lfo which controls the delayTime
     */
    private _lfoL;
    /**
     * another LFO for the right side with a 180 degree phase diff
     */
    private _lfoR;
    /**
     * delay for left
     */
    private _delayNodeL;
    /**
     * delay for right
     */
    private _delayNodeR;
    /**
     * The frequency of the LFO which modulates the delayTime.
     */
    readonly frequency: Signal<"frequency">;
    /**
     * @param frequency The frequency of the LFO.
     * @param delayTime The delay of the chorus effect in ms.
     * @param depth The depth of the chorus.
     */
    constructor(frequency?: Frequency, delayTime?: Milliseconds, depth?: NormalRange);
    constructor(options?: Partial<ChorusOptions>);
    static getDefaults(): ChorusOptions;
    /**
     * The depth of the effect. A depth of 1 makes the delayTime
     * modulate between 0 and 2*delayTime (centered around the delayTime).
     */
    get depth(): NormalRange;
    set depth(depth: NormalRange);
    /**
     * The delayTime in milliseconds of the chorus. A larger delayTime
     * will give a more pronounced effect. Nominal range a delayTime
     * is between 2 and 20ms.
     */
    get delayTime(): Milliseconds;
    set delayTime(delayTime: Milliseconds);
    /**
     * The oscillator type of the LFO.
     */
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    /**
     * Amount of stereo spread. When set to 0, both LFO's will be panned centrally.
     * When set to 180, LFO's will be panned hard left and right respectively.
     */
    get spread(): Degrees;
    set spread(spread: Degrees);
    /**
     * Start the effect.
     */
    start(time?: Time): this;
    /**
     * Stop the lfo
     */
    stop(time?: Time): this;
    /**
     * Sync the filter to the transport.
     * @see {@link LFO.sync}
     */
    sync(): this;
    /**
     * Unsync the filter from the transport.
     */
    unsync(): this;
    dispose(): this;
}
