import { Degrees, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { FMConstructorOptions, FMOscillatorOptions, ToneOscillatorInterface, ToneOscillatorType } from "./OscillatorInterface.js";
export { FMOscillatorOptions } from "./OscillatorInterface.js";
/**
 * FMOscillator implements a frequency modulation synthesis
 * ```
 *                                              +-------------+
 * +---------------+        +-------------+     | Carrier Osc |
 * | Modulator Osc +>-------> GainNode    |     |             +--->Output
 * +---------------+        |             +>----> frequency   |
 *                       +--> gain        |     +-------------+
 *                       |  +-------------+
 * +-----------------+   |
 * | modulationIndex +>--+
 * +-----------------+
 * ```
 *
 * @example
 * return Tone.Offline(() => {
 * 	const fmOsc = new Tone.FMOscillator({
 * 		frequency: 200,
 * 		type: "square",
 * 		modulationType: "triangle",
 * 		harmonicity: 0.2,
 * 		modulationIndex: 3
 * 	}).toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export declare class FMOscillator extends Source<FMOscillatorOptions> implements ToneOscillatorInterface {
    readonly name: string;
    /**
     * The carrier oscillator
     */
    private _carrier;
    readonly frequency: Signal<"frequency">;
    readonly detune: Signal<"cents">;
    /**
     * The modulating oscillator
     */
    private _modulator;
    /**
     * Harmonicity is the frequency ratio between the carrier and the modulator oscillators.
     * A harmonicity of 1 gives both oscillators the same frequency.
     * Harmonicity = 2 means a change of an octave.
     * @example
     * const fmOsc = new Tone.FMOscillator("D2").toDestination().start();
     * // pitch the modulator an octave below carrier
     * fmOsc.harmonicity.value = 0.5;
     */
    readonly harmonicity: Signal<"positive">;
    /**
     * The modulation index which is in essence the depth or amount of the modulation. In other terms it is the
     * ratio of the frequency of the modulating signal (mf) to the amplitude of the
     * modulating signal (ma) -- as in ma/mf.
     */
    readonly modulationIndex: Signal<"positive">;
    /**
     * the node where the modulation happens
     */
    private _modulationNode;
    /**
     * @param frequency The starting frequency of the oscillator.
     * @param type The type of the carrier oscillator.
     * @param modulationType The type of the modulator oscillator.
     */
    constructor(frequency?: Frequency, type?: ToneOscillatorType, modulationType?: ToneOscillatorType);
    constructor(options?: Partial<FMConstructorOptions>);
    static getDefaults(): FMOscillatorOptions;
    /**
     * start the oscillator
     */
    protected _start(time: Time): void;
    /**
     * stop the oscillator
     */
    protected _stop(time: Time): void;
    protected _restart(time: Seconds): this;
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    get baseType(): OscillatorType;
    set baseType(baseType: OscillatorType);
    get partialCount(): number;
    set partialCount(partialCount: number);
    /**
     * The type of the modulator oscillator
     */
    get modulationType(): ToneOscillatorType;
    set modulationType(type: ToneOscillatorType);
    get phase(): Degrees;
    set phase(phase: Degrees);
    get partials(): number[];
    set partials(partials: number[]);
    asArray(length?: number): Promise<Float32Array>;
    /**
     * Clean up.
     */
    dispose(): this;
}
