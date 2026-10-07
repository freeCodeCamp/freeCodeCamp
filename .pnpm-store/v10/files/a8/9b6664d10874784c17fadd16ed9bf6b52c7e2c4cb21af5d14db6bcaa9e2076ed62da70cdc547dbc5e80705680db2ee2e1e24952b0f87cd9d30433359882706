import { Effect, EffectOptions } from "./Effect.js";
import { Decibels, Frequency, GainFactor, Positive, Time } from "../core/type/Units.js";
import { Signal } from "../signal/Signal.js";
export interface AutoWahOptions extends EffectOptions {
    baseFrequency: Frequency;
    octaves: Positive;
    sensitivity: Decibels;
    Q: Positive;
    gain: GainFactor;
    follower: Time;
}
/**
 * AutoWah connects a {@link Follower} to a {@link Filter}.
 * The frequency of the filter, follows the input amplitude curve.
 * Inspiration from [Tuna.js](https://github.com/Dinahmoe/tuna).
 *
 * @example
 * const autoWah = new Tone.AutoWah(50, 6, -30).toDestination();
 * // initialize the synth and connect to autowah
 * const synth = new Tone.Synth().connect(autoWah);
 * // Q value influences the effect of the wah - default is 2
 * autoWah.Q.value = 6;
 * // more audible on higher notes
 * synth.triggerAttackRelease("C4", "8n");
 * @category Effect
 */
export declare class AutoWah extends Effect<AutoWahOptions> {
    readonly name: string;
    /**
     * The envelope follower. Set the attack/release
     * timing to adjust how the envelope is followed.
     */
    private _follower;
    /**
     * scales the follower value to the frequency domain
     */
    private _sweepRange;
    /**
     * Hold the base frequency value
     */
    private _baseFrequency;
    /**
     * Private holder for the octave count
     */
    private _octaves;
    /**
     * the input gain to adjust the sensitivity
     */
    private _inputBoost;
    /**
     * Private holder for the filter
     */
    private _bandpass;
    /**
     * The peaking fitler
     */
    private _peaking;
    /**
     * The gain of the filter.
     */
    readonly gain: Signal<"decibels">;
    /**
     * The quality of the filter.
     */
    readonly Q: Signal<"positive">;
    /**
     * @param baseFrequency The frequency the filter is set to at the low point of the wah
     * @param octaves The number of octaves above the baseFrequency the filter will sweep to when fully open.
     * @param sensitivity The decibel threshold sensitivity for the incoming signal. Normal range of -40 to 0.
     */
    constructor(baseFrequency?: Frequency, octaves?: Positive, sensitivity?: Decibels);
    constructor(options?: Partial<AutoWahOptions>);
    static getDefaults(): AutoWahOptions;
    /**
     * The number of octaves that the filter will sweep above the baseFrequency.
     */
    get octaves(): number;
    set octaves(octaves: number);
    /**
     * The follower's smoothing time
     */
    get follower(): Time;
    set follower(follower: Time);
    /**
     * The base frequency from which the sweep will start from.
     */
    get baseFrequency(): Frequency;
    set baseFrequency(baseFreq: Frequency);
    /**
     * The sensitivity to control how responsive to the input signal the filter is.
     */
    get sensitivity(): Decibels;
    set sensitivity(sensitivity: Decibels);
    /**
     * sets the sweep range of the scaler
     */
    private _setSweepRange;
    dispose(): this;
}
