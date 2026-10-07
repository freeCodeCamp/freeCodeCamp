import { AudioRange, Degrees, Frequency, Seconds, Time } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { PulseOscillatorOptions, ToneOscillatorInterface } from "./OscillatorInterface.js";
export { PulseOscillatorOptions } from "./OscillatorInterface.js";
/**
 * PulseOscillator is an oscillator with control over pulse width,
 * also known as the duty cycle. At 50% duty cycle (width = 0) the wave is
 * a square wave.
 * [Read more](https://wigglewave.wordpress.com/2014/08/16/pulse-waveforms-and-harmonics/).
 * ```
 *    width = -0.25        width = 0.0          width = 0.25
 *
 *   +-----+            +-------+       +    +-------+     +-+
 *   |     |            |       |       |            |     |
 *   |     |            |       |       |            |     |
 * +-+     +-------+    +       +-------+            +-----+
 *
 *
 *    width = -0.5                              width = 0.5
 *
 *     +---+                                 +-------+   +---+
 *     |   |                                         |   |
 *     |   |                                         |   |
 * +---+   +-------+                                 +---+
 *
 *
 *    width = -0.75                             width = 0.75
 *
 *       +-+                                 +-------+ +-----+
 *       | |                                         | |
 *       | |                                         | |
 * +-----+ +-------+                                 +-+
 * ```
 * @example
 * return Tone.Offline(() => {
 * 	const pulse = new Tone.PulseOscillator(50, 0.4).toDestination().start();
 * }, 0.1, 1);
 * @category Source
 */
export declare class PulseOscillator extends Source<PulseOscillatorOptions> implements ToneOscillatorInterface {
    readonly name: string;
    /**
     * The width of the pulse.
     * @example
     * return Tone.Offline(() => {
     * 	const pulse = new Tone.PulseOscillator(20, 0.8).toDestination().start();
     * }, 0.1, 1);
     */
    readonly width: Signal<"audioRange">;
    /**
     * gate the width amount
     */
    private _widthGate;
    /**
     * the sawtooth oscillator
     */
    private _triangle;
    /**
     * The frequency control.
     */
    readonly frequency: Signal<"frequency">;
    /**
     * The detune in cents.
     */
    readonly detune: Signal<"cents">;
    /**
     * Threshold the signal to turn it into a square
     */
    private _thresh;
    /**
     * @param frequency The frequency of the oscillator
     * @param width The width of the pulse
     */
    constructor(frequency?: Frequency, width?: AudioRange);
    constructor(options?: Partial<PulseOscillatorOptions>);
    static getDefaults(): PulseOscillatorOptions;
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
     * The phase of the oscillator in degrees.
     */
    get phase(): Degrees;
    set phase(phase: Degrees);
    /**
     * The type of the oscillator. Always returns "pulse".
     */
    get type(): "pulse";
    /**
     * The baseType of the oscillator. Always returns "pulse".
     */
    get baseType(): "pulse";
    /**
     * The partials of the waveform. Cannot set partials for this waveform type
     */
    get partials(): number[];
    /**
     * No partials for this waveform type.
     */
    get partialCount(): number;
    /**
     * *Internal use* The carrier oscillator type is fed through the
     * waveshaper node to create the pulse. Using different carrier oscillators
     * changes oscillator's behavior.
     */
    set carrierType(type: "triangle" | "sine");
    asArray(length?: number): Promise<Float32Array>;
    /**
     * Clean up method.
     */
    dispose(): this;
}
