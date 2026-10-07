import { Degrees, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { PWMOscillatorOptions, ToneOscillatorInterface } from "./OscillatorInterface.js";
export { PWMOscillatorOptions } from "./OscillatorInterface.js";
/**
 * PWMOscillator modulates the width of a Tone.PulseOscillator
 * at the modulationFrequency. This has the effect of continuously
 * changing the timbre of the oscillator by altering the harmonics
 * generated.
 * @example
 * return Tone.Offline(() => {
 * 	const pwm = new Tone.PWMOscillator(60, 0.3).toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export declare class PWMOscillator extends Source<PWMOscillatorOptions> implements ToneOscillatorInterface {
    readonly name: string;
    readonly sourceType = "pwm";
    /**
     * the pulse oscillator
     */
    private _pulse;
    /**
     * the modulator
     */
    private _modulator;
    /**
     * Scale the oscillator so it doesn't go silent
     * at the extreme values.
     */
    private _scale;
    /**
     * The frequency control.
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The detune of the oscillator.
     */
    readonly detune: Signal<"cents">;
    /**
     * The width modulation rate of the oscillator.
     * @example
     * return Tone.Offline(() => {
     * 	const osc = new Tone.PWMOscillator(20, 2).toDestination().start();
     * }, 0.1, 1);
     */
    readonly modulationFrequency: Signal<"frequency">;
    /**
     * @param {Frequency} frequency The starting frequency of the oscillator.
     * @param {Frequency} modulationFrequency The modulation frequency of the width of the pulse.
     */
    constructor(frequency?: Frequency, modulationFrequency?: Frequency);
    constructor(options?: Partial<PWMOscillatorOptions>);
    static getDefaults(): PWMOscillatorOptions;
    /**
     * start the oscillator
     */
    protected _start(time: Time): void;
    /**
     * stop the oscillator
     */
    protected _stop(time: Time): void;
    /**
     * restart the oscillator
     */
    protected _restart(time: Seconds): void;
    /**
     * The type of the oscillator. Always returns "pwm".
     */
    get type(): "pwm";
    /**
     * The baseType of the oscillator. Always returns "pwm".
     */
    get baseType(): "pwm";
    /**
     * The partials of the waveform. Cannot set partials for this waveform type
     */
    get partials(): number[];
    /**
     * No partials for this waveform type.
     */
    get partialCount(): number;
    /**
     * The phase of the oscillator in degrees.
     */
    get phase(): Degrees;
    set phase(phase: Degrees);
    asArray(length?: number): Promise<Float32Array>;
    /**
     * Clean up.
     */
    dispose(): this;
}
