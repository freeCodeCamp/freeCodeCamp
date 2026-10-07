import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Frequency } from "../../core/type/Units.js";
import { Gain } from "../../core/context/Gain.js";
export type OnePoleFilterType = "highpass" | "lowpass";
export interface OnePoleFilterOptions extends ToneAudioNodeOptions {
    frequency: Frequency;
    type: OnePoleFilterType;
}
/**
 * A one pole filter with 6db-per-octave rolloff. Either "highpass" or "lowpass".
 * Note that changing the type or frequency may result in a discontinuity which
 * can sound like a click or pop.
 * References:
 * * http://www.earlevel.com/main/2012/12/15/a-one-pole-filter/
 * * http://www.dspguide.com/ch19/2.htm
 * * https://github.com/vitaliy-bobrov/js-rocks/blob/master/src/app/audio/effects/one-pole-filters.ts
 * @category Component
 */
export declare class OnePoleFilter extends ToneAudioNode<OnePoleFilterOptions> {
    readonly name: string;
    /**
     * Hold the current frequency
     */
    private _frequency;
    /**
     * the current one pole type
     */
    private _type;
    /**
     * the current one pole filter
     */
    private _filter;
    readonly input: Gain;
    readonly output: Gain;
    /**
     * @param frequency The frequency
     * @param type The  filter type, either "lowpass" or "highpass"
     */
    constructor(frequency?: Frequency, type?: OnePoleFilterType);
    constructor(options?: Partial<OnePoleFilterOptions>);
    static getDefaults(): OnePoleFilterOptions;
    /**
     * Create a filter and dispose the old one
     */
    private _createFilter;
    /**
     * The frequency value.
     */
    get frequency(): Frequency;
    set frequency(fq: Frequency);
    /**
     * The OnePole Filter type, either "highpass" or "lowpass"
     */
    get type(): OnePoleFilterType;
    set type(t: OnePoleFilterType);
    /**
     * Get the frequency response curve. This curve represents how the filter
     * responses to frequencies between 20hz-20khz.
     * @param  len The number of values to return
     * @return The frequency response curve between 20-20kHz
     */
    getFrequencyResponse(len?: number): Float32Array;
    dispose(): this;
}
