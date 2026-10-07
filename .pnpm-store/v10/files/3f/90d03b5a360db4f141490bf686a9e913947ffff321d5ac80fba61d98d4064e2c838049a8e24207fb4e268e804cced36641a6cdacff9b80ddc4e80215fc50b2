import { Frequency, NormalRange, Time } from "../core/type/Units.js";
import { RecursivePartial } from "../core/util/Interface.js";
import { Instrument, InstrumentOptions } from "./Instrument.js";
export interface PluckSynthOptions extends InstrumentOptions {
    attackNoise: number;
    dampening: Frequency;
    resonance: NormalRange;
    release: Time;
}
/**
 * Karplus-Strong string synthesis.
 * @example
 * const plucky = new Tone.PluckSynth().toDestination();
 * plucky.triggerAttack("C4", "+0.5");
 * plucky.triggerAttack("C3", "+1");
 * plucky.triggerAttack("C2", "+1.5");
 * plucky.triggerAttack("C1", "+2");
 * @category Instrument
 */
export declare class PluckSynth extends Instrument<PluckSynthOptions> {
    readonly name = "PluckSynth";
    /**
     * Noise burst at the beginning
     */
    private _noise;
    private _lfcf;
    /**
     * The amount of noise at the attack.
     * Nominal range of [0.1, 20]
     * @min 0.1
     * @max 20
     */
    attackNoise: number;
    /**
     * The amount of resonance of the pluck. Also correlates to the sustain duration.
     */
    resonance: NormalRange;
    /**
     * The release time which corresponds to a resonance ramp down to 0
     */
    release: Time;
    constructor(options?: RecursivePartial<PluckSynthOptions>);
    static getDefaults(): PluckSynthOptions;
    /**
     * The dampening control. i.e. the lowpass filter frequency of the comb filter
     * @min 0
     * @max 7000
     */
    get dampening(): Frequency;
    set dampening(fq: Frequency);
    triggerAttack(note: Frequency, time?: Time): this;
    /**
     * Ramp down the {@link resonance} to 0 over the duration of the release time.
     */
    triggerRelease(time?: Time): this;
    dispose(): this;
}
