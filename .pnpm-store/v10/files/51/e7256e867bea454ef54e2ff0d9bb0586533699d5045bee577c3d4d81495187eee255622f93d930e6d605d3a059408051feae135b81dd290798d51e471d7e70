import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode } from "../../core/context/ToneAudioNode.js";
import { Frequency } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { BiquadFilterOptions } from "./BiquadFilter.js";
export type FilterRollOff = -12 | -24 | -48 | -96;
export type FilterOptions = BiquadFilterOptions & {
    rolloff: FilterRollOff;
};
/**
 * Tone.Filter is a filter which allows for all of the same native methods
 * as the [BiquadFilterNode](http://webaudio.github.io/web-audio-api/#the-biquadfilternode-interface).
 * Tone.Filter has the added ability to set the filter rolloff at -12
 * (default), -24 and -48.
 * @example
 * const filter = new Tone.Filter(1500, "highpass").toDestination();
 * filter.frequency.rampTo(20000, 10);
 * const noise = new Tone.Noise().connect(filter).start();
 * @category Component
 */
export declare class Filter extends ToneAudioNode<FilterOptions> {
    readonly name: string;
    readonly input: Gain<"gain">;
    readonly output: Gain<"gain">;
    private _filters;
    /**
     * the rolloff value of the filter
     */
    private _rolloff;
    private _type;
    /**
     * The Q or Quality of the filter
     */
    readonly Q: Signal<"positive">;
    /**
     * The cutoff frequency of the filter.
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The detune parameter
     */
    readonly detune: Signal<"cents">;
    /**
     * The gain of the filter, only used in certain filter types
     */
    readonly gain: Signal<"decibels">;
    /**
     * @param frequency The cutoff frequency of the filter.
     * @param type The type of filter.
     * @param rolloff The drop in decibels per octave after the cutoff frequency
     */
    constructor(frequency?: Frequency, type?: BiquadFilterType, rolloff?: FilterRollOff);
    constructor(options?: Partial<FilterOptions>);
    static getDefaults(): FilterOptions;
    /**
     * The type of the filter. Types: "lowpass", "highpass",
     * "bandpass", "lowshelf", "highshelf", "notch", "allpass", or "peaking".
     */
    get type(): BiquadFilterType;
    set type(type: BiquadFilterType);
    /**
     * The rolloff of the filter which is the drop in db
     * per octave. Implemented internally by cascading filters.
     * Only accepts the values -12, -24, -48 and -96.
     */
    get rolloff(): FilterRollOff;
    set rolloff(rolloff: FilterRollOff);
    /**
     * Get the frequency response curve. This curve represents how the filter
     * responses to frequencies between 20hz-20khz.
     * @param  len The number of values to return
     * @return The frequency response curve between 20-20kHz
     */
    getFrequencyResponse(len?: number): Float32Array;
    /**
     * Clean up.
     */
    dispose(): this;
}
