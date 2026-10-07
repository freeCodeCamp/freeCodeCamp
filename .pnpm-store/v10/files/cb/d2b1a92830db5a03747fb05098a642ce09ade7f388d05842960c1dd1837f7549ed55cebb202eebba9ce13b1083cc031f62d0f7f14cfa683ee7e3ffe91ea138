import { Frequency, NormalRange, Time } from "../../core/type/Units.js";
import { Envelope, EnvelopeOptions } from "./Envelope.js";
export interface FrequencyEnvelopeOptions extends EnvelopeOptions {
    baseFrequency: Frequency;
    octaves: number;
    exponent: number;
}
/**
 * FrequencyEnvelope is an {@link Envelope} which ramps between {@link baseFrequency}
 * and {@link octaves}. It can also have an optional {@link exponent} to adjust the curve
 * which it ramps.
 * @example
 * const oscillator = new Tone.Oscillator().toDestination().start();
 * const freqEnv = new Tone.FrequencyEnvelope({
 * 	attack: 0.2,
 * 	baseFrequency: "C2",
 * 	octaves: 4
 * });
 * freqEnv.connect(oscillator.frequency);
 * freqEnv.triggerAttack();
 * @category Component
 */
export declare class FrequencyEnvelope extends Envelope {
    readonly name: string;
    /**
     * Private reference to the base frequency as a number
     */
    private _baseFrequency;
    /**
     * The number of octaves
     */
    private _octaves;
    /**
     * Internal scaler from 0-1 to the final output range
     */
    private _scale;
    /**
     * Apply a power curve to the output
     */
    private _exponent;
    /**
     * @param attack	the attack time in seconds
     * @param decay		the decay time in seconds
     * @param sustain 	a percentage (0-1) of the full amplitude
     * @param release	the release time in seconds
     */
    constructor(attack?: Time, decay?: Time, sustain?: NormalRange, release?: Time);
    constructor(options?: Partial<FrequencyEnvelopeOptions>);
    static getDefaults(): FrequencyEnvelopeOptions;
    /**
     * The envelope's minimum output value. This is the value which it
     * starts at.
     */
    get baseFrequency(): Frequency;
    set baseFrequency(min: Frequency);
    /**
     * The number of octaves above the baseFrequency that the
     * envelope will scale to.
     */
    get octaves(): number;
    set octaves(octaves: number);
    /**
     * The envelope's exponent value.
     */
    get exponent(): number;
    set exponent(exponent: number);
    /**
     * Clean up
     */
    dispose(): this;
}
