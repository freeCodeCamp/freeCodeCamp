import { Cents, Degrees, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { FatConstructorOptions, FatOscillatorOptions, ToneOscillatorInterface, ToneOscillatorType } from "./OscillatorInterface.js";
export { FatOscillatorOptions } from "./OscillatorInterface.js";
/**
 * FatOscillator is an array of oscillators with detune spread between the oscillators
 * @example
 * const fatOsc = new Tone.FatOscillator("Ab3", "sawtooth", 40).toDestination().start();
 * @category Source
 */
export declare class FatOscillator extends Source<FatOscillatorOptions> implements ToneOscillatorInterface {
    readonly name: string;
    readonly frequency: Signal<"frequency">;
    readonly detune: Signal<"cents">;
    /**
     * The array of oscillators
     */
    private _oscillators;
    /**
     * The total spread of the oscillators
     */
    private _spread;
    /**
     * The type of the oscillator
     */
    private _type;
    /**
     * The phase of the oscillators
     */
    private _phase;
    /**
     * The partials array
     */
    private _partials;
    /**
     * The number of partials to use
     */
    private _partialCount;
    /**
     * @param frequency The oscillator's frequency.
     * @param type The type of the oscillator.
     * @param spread The detune spread between the oscillators.
     */
    constructor(frequency?: Frequency, type?: ToneOscillatorType, spread?: Cents);
    constructor(options?: Partial<FatConstructorOptions>);
    static getDefaults(): FatOscillatorOptions;
    /**
     * start the oscillator
     */
    protected _start(time: Time): void;
    /**
     * stop the oscillator
     */
    protected _stop(time: Time): void;
    protected _restart(time: Seconds): void;
    /**
     * Iterate over all of the oscillators
     */
    private _forEach;
    /**
     * The type of the oscillator
     */
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    /**
     * The detune spread between the oscillators. If "count" is
     * set to 3 oscillators and the "spread" is set to 40,
     * the three oscillators would be detuned like this: [-20, 0, 20]
     * for a total detune spread of 40 cents.
     * @example
     * const fatOsc = new Tone.FatOscillator().toDestination().start();
     * fatOsc.spread = 70;
     */
    get spread(): Cents;
    set spread(spread: Cents);
    /**
     * The number of detuned oscillators. Must be an integer greater than 1.
     * @example
     * const fatOsc = new Tone.FatOscillator("C#3", "sawtooth").toDestination().start();
     * // use 4 sawtooth oscillators
     * fatOsc.count = 4;
     */
    get count(): number;
    set count(count: number);
    get phase(): Degrees;
    set phase(phase: Degrees);
    get baseType(): OscillatorType;
    set baseType(baseType: OscillatorType);
    get partials(): number[];
    set partials(partials: number[]);
    get partialCount(): number;
    set partialCount(partialCount: number);
    asArray(length?: number): Promise<Float32Array>;
    /**
     * Clean up.
     */
    dispose(): this;
}
