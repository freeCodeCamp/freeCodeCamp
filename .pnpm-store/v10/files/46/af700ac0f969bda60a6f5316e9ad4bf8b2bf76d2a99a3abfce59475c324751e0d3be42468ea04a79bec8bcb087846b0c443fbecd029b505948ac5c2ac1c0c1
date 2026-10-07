import { Degrees, Frequency, Seconds } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { AMConstructorOptions, AMOscillatorOptions, ToneOscillatorInterface, ToneOscillatorType } from "./OscillatorInterface.js";
export { AMOscillatorOptions } from "./OscillatorInterface.js";
/**
 * An amplitude modulated oscillator node. It is implemented with
 * two oscillators, one which modulators the other's amplitude
 * through a gain node.
 * ```
 *    +-------------+       +----------+
 *    | Carrier Osc +>------> GainNode |
 *    +-------------+       |          +--->Output
 *                      +---> gain     |
 * +---------------+    |   +----------+
 * | Modulator Osc +>---+
 * +---------------+
 * ```
 * @example
 * return Tone.Offline(() => {
 * 	const amOsc = new Tone.AMOscillator(30, "sine", "square").toDestination().start();
 * }, 0.2, 1);
 * @category Source
 */
export declare class AMOscillator extends Source<AMOscillatorOptions> implements ToneOscillatorInterface {
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
     * convert the -1,1 output to 0,1
     */
    private _modulationScale;
    /**
     * Harmonicity is the frequency ratio between the carrier and the modulator oscillators.
     * A harmonicity of 1 gives both oscillators the same frequency.
     * Harmonicity = 2 means a change of an octave.
     * @example
     * const amOsc = new Tone.AMOscillator("D2").toDestination().start();
     * Tone.Transport.scheduleRepeat(time => {
     * 	amOsc.harmonicity.setValueAtTime(1, time);
     * 	amOsc.harmonicity.setValueAtTime(0.5, time + 0.5);
     * 	amOsc.harmonicity.setValueAtTime(1.5, time + 1);
     * 	amOsc.harmonicity.setValueAtTime(1, time + 2);
     * 	amOsc.harmonicity.linearRampToValueAtTime(2, time + 4);
     * }, 4);
     * Tone.Transport.start();
     */
    readonly harmonicity: Signal<"positive">;
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
    constructor(options?: Partial<AMConstructorOptions>);
    static getDefaults(): AMOscillatorOptions;
    /**
     * start the oscillator
     */
    protected _start(time: Seconds): void;
    /**
     * stop the oscillator
     */
    protected _stop(time: Seconds): void;
    protected _restart(time: Seconds): void;
    /**
     * The type of the carrier oscillator
     */
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
