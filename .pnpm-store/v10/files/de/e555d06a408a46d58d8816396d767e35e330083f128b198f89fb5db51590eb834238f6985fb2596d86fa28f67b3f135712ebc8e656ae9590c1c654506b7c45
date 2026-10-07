import { StereoEffect, StereoEffectOptions } from "./StereoEffect.js";
import { Frequency, NormalRange } from "../core/type/Units.js";
import { Signal } from "../signal/Signal.js";
export interface FreeverbOptions extends StereoEffectOptions {
    dampening: Frequency;
    roomSize: NormalRange;
}
/**
 * Freeverb is a reverb based on [Freeverb](https://ccrma.stanford.edu/~jos/pasp/Freeverb.html).
 * Read more on reverb on [Sound On Sound](https://web.archive.org/web/20160404083902/http://www.soundonsound.com:80/sos/feb01/articles/synthsecrets.asp).
 * Freeverb is now implemented with an AudioWorkletNode which may result on performance degradation on some platforms. Consider using {@link Reverb}.
 * @example
 * const freeverb = new Tone.Freeverb().toDestination();
 * freeverb.dampening = 1000;
 * // routing synth through the reverb
 * const synth = new Tone.NoiseSynth().connect(freeverb);
 * synth.triggerAttackRelease(0.05);
 * @category Effect
 */
export declare class Freeverb extends StereoEffect<FreeverbOptions> {
    readonly name: string;
    /**
     * The roomSize value between 0 and 1. A larger roomSize will result in a longer decay.
     */
    readonly roomSize: Signal<"normalRange">;
    /**
     * the comb filters
     */
    private _combFilters;
    /**
     * the allpass filters on the left
     */
    private _allpassFiltersL;
    /**
     * the allpass filters on the right
     */
    private _allpassFiltersR;
    /**
     * @param roomSize Correlated to the decay time.
     * @param dampening The cutoff frequency of a lowpass filter as part of the reverb.
     */
    constructor(roomSize?: NormalRange, dampening?: Frequency);
    constructor(options?: Partial<FreeverbOptions>);
    static getDefaults(): FreeverbOptions;
    /**
     * The amount of dampening of the reverberant signal.
     */
    get dampening(): Frequency;
    set dampening(d: Frequency);
    dispose(): this;
}
