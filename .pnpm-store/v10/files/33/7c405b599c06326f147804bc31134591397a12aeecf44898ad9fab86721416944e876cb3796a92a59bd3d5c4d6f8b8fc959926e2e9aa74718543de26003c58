import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Cents, Frequency, GainFactor } from "../../core/type/Units.js";
import { Param } from "../../core/context/Param.js";
export interface BiquadFilterOptions extends ToneAudioNodeOptions {
    frequency: Frequency;
    detune: Cents;
    Q: number;
    type: BiquadFilterType;
    gain: GainFactor;
}
/**
 * Thin wrapper around the native Web Audio [BiquadFilterNode](https://webaudio.github.io/web-audio-api/#biquadfilternode).
 * BiquadFilter is similar to {@link Filter} but doesn't have the option to set the "rolloff" value.
 * @category Component
 */
export declare class BiquadFilter extends ToneAudioNode<BiquadFilterOptions> {
    readonly name: string;
    readonly input: BiquadFilterNode;
    readonly output: BiquadFilterNode;
    /**
     * The frequency of the filter
     */
    readonly frequency: Param<"frequency">;
    /**
     * A detune value, in cents, for the frequency.
     */
    readonly detune: Param<"cents">;
    /**
     * The Q factor of the filter.
     * For lowpass and highpass filters the Q value is interpreted to be in dB.
     * For these filters the nominal range is [−𝑄𝑙𝑖𝑚,𝑄𝑙𝑖𝑚] where 𝑄𝑙𝑖𝑚 is the largest value for which 10𝑄/20 does not overflow. This is approximately 770.63678.
     * For the bandpass, notch, allpass, and peaking filters, this value is a linear value.
     * The value is related to the bandwidth of the filter and hence should be a positive value. The nominal range is
     * [0,3.4028235𝑒38], the upper limit being the most-positive-single-float.
     * This is not used for the lowshelf and highshelf filters.
     */
    readonly Q: Param<"number">;
    /**
     * The gain of the filter. Its value is in dB units. The gain is only used for lowshelf, highshelf, and peaking filters.
     */
    readonly gain: Param<"decibels">;
    private readonly _filter;
    /**
     * @param frequency The cutoff frequency of the filter.
     * @param type The type of filter.
     */
    constructor(frequency?: Frequency, type?: BiquadFilterType);
    constructor(options?: Partial<BiquadFilterOptions>);
    static getDefaults(): BiquadFilterOptions;
    /**
     * The type of this BiquadFilterNode. For a complete list of types and their attributes, see the
     * [Web Audio API](https://webaudio.github.io/web-audio-api/#dom-biquadfiltertype-lowpass)
     */
    get type(): BiquadFilterType;
    set type(type: BiquadFilterType);
    /**
     * Get the frequency response curve. This curve represents how the filter
     * responses to frequencies between 20hz-20khz.
     * @param  len The number of values to return
     * @return The frequency response curve between 20-20kHz
     */
    getFrequencyResponse(len?: number): Float32Array;
    dispose(): this;
}
