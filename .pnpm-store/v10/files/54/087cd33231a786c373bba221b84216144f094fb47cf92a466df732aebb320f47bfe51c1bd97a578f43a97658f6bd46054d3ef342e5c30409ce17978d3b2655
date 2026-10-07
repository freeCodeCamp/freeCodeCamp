import { Frequency, Positive } from "../core/type/Units.js";
import { Filter, FilterOptions } from "../component/filter/Filter.js";
import { SourceOptions } from "../source/Source.js";
import { LFOEffect, LFOEffectOptions } from "./LFOEffect.js";
export interface AutoFilterOptions extends LFOEffectOptions {
    baseFrequency: Frequency;
    octaves: Positive;
    filter: Omit<FilterOptions, keyof SourceOptions | "frequency" | "detune" | "gain">;
}
/**
 * AutoFilter is a Tone.Filter with a Tone.LFO connected to the filter cutoff frequency.
 * Setting the LFO rate and depth allows for control over the filter modulation rate
 * and depth.
 *
 * @example
 * // create an autofilter and start it's LFO
 * const autoFilter = new Tone.AutoFilter("4n").toDestination().start();
 * // route an oscillator through the filter and start it
 * const oscillator = new Tone.Oscillator().connect(autoFilter).start();
 * @category Effect
 */
export declare class AutoFilter extends LFOEffect<AutoFilterOptions> {
    readonly name: string;
    /**
     * The filter node
     */
    readonly filter: Filter;
    /**
     * The octaves placeholder
     */
    private _octaves;
    /**
     * @param frequency The rate of the LFO.
     * @param baseFrequency The lower value of the LFOs oscillation
     * @param octaves The number of octaves above the baseFrequency
     */
    constructor(frequency?: Frequency, baseFrequency?: Frequency, octaves?: Positive);
    constructor(options?: Partial<AutoFilterOptions>);
    static getDefaults(): AutoFilterOptions;
    /**
     * The minimum value of the filter's cutoff frequency.
     */
    get baseFrequency(): Frequency;
    set baseFrequency(freq: Frequency);
    /**
     * The maximum value of the filter's cutoff frequency.
     */
    get octaves(): Positive;
    set octaves(oct: Positive);
    dispose(): this;
}
