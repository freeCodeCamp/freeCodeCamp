import { StereoEffect, StereoEffectOptions } from "./StereoEffect.js";
import { Frequency, Positive } from "../core/type/Units.js";
import { Signal } from "../signal/Signal.js";
export interface PhaserOptions extends StereoEffectOptions {
    frequency: Frequency;
    octaves: Positive;
    stages: Positive;
    Q: Positive;
    baseFrequency: Frequency;
}
/**
 * Phaser is a phaser effect. Phasers work by changing the phase
 * of different frequency components of an incoming signal. Read more on
 * [Wikipedia](https://en.wikipedia.org/wiki/Phaser_(effect)).
 * Inspiration for this phaser comes from [Tuna.js](https://github.com/Dinahmoe/tuna/).
 * @example
 * const phaser = new Tone.Phaser({
 * 	frequency: 15,
 * 	octaves: 5,
 * 	baseFrequency: 1000
 * }).toDestination();
 * const synth = new Tone.FMSynth().connect(phaser);
 * synth.triggerAttackRelease("E3", "2n");
 * @category Effect
 */
export declare class Phaser extends StereoEffect<PhaserOptions> {
    readonly name: string;
    /**
     * the lfo which controls the frequency on the left side
     */
    private _lfoL;
    /**
     * the lfo which controls the frequency on the right side
     */
    private _lfoR;
    /**
     * the base modulation frequency
     */
    private _baseFrequency;
    /**
     * the octaves of the phasing
     */
    private _octaves;
    /**
     * The quality factor of the filters
     */
    readonly Q: Signal<"positive">;
    /**
     * the array of filters for the left side
     */
    private _filtersL;
    /**
     * the array of filters for the left side
     */
    private _filtersR;
    /**
     * the frequency of the effect
     */
    readonly frequency: Signal<"frequency">;
    /**
     * @param frequency The speed of the phasing.
     * @param octaves The octaves of the effect.
     * @param baseFrequency The base frequency of the filters.
     */
    constructor(frequency?: Frequency, octaves?: Positive, baseFrequency?: Frequency);
    constructor(options?: Partial<PhaserOptions>);
    static getDefaults(): PhaserOptions;
    private _makeFilters;
    /**
     * The number of octaves the phase goes above the baseFrequency
     */
    get octaves(): number;
    set octaves(octaves: number);
    /**
     * The the base frequency of the filters.
     */
    get baseFrequency(): Frequency;
    set baseFrequency(freq: Frequency);
    dispose(): this;
}
