import { AudioRange, Degrees, Frequency, Time } from "../../core/type/Units.js";
import { Signal } from "../../signal/Signal.js";
import { Source } from "../Source.js";
import { ToneOscillatorConstructorOptions, ToneOscillatorInterface, ToneOscillatorOptions, ToneOscillatorType } from "./OscillatorInterface.js";
export { ToneOscillatorOptions, ToneOscillatorType, } from "./OscillatorInterface.js";
/**
 * Oscillator supports a number of features including
 * phase rotation, multiple oscillator types (see Oscillator.type),
 * and Transport syncing (see Oscillator.syncFrequency).
 *
 * @example
 * // make and start a 440hz sine tone
 * const osc = new Tone.Oscillator(440, "sine").toDestination().start();
 * @category Source
 */
export declare class Oscillator extends Source<ToneOscillatorOptions> implements ToneOscillatorInterface {
    readonly name: string;
    /**
     * the main oscillator
     */
    private _oscillator;
    /**
     * The frequency control.
     */
    frequency: Signal<"frequency">;
    /**
     * The detune control signal.
     */
    detune: Signal<"cents">;
    /**
     * the periodic wave
     */
    private _wave?;
    /**
     * The partials of the oscillator
     */
    private _partials;
    /**
     * The number of partials to limit or extend the periodic wave by
     */
    private _partialCount;
    /**
     * the phase of the oscillator between 0 - 360
     */
    private _phase;
    /**
     * the type of the oscillator
     */
    private _type;
    /**
     * @param frequency Starting frequency
     * @param type The oscillator type. Read more about type below.
     */
    constructor(frequency?: Frequency, type?: ToneOscillatorType);
    constructor(options?: Partial<ToneOscillatorConstructorOptions>);
    static getDefaults(): ToneOscillatorOptions;
    /**
     * start the oscillator
     */
    protected _start(time?: Time): void;
    /**
     * stop the oscillator
     */
    protected _stop(time?: Time): void;
    /**
     * Restart the oscillator. Does not stop the oscillator, but instead
     * just cancels any scheduled 'stop' from being invoked.
     */
    protected _restart(time?: Time): this;
    /**
     * Sync the signal to the Transport's bpm. Any changes to the transports bpm,
     * will also affect the oscillators frequency.
     * @example
     * const osc = new Tone.Oscillator().toDestination().start();
     * osc.frequency.value = 440;
     * // the ratio between the bpm and the frequency will be maintained
     * osc.syncFrequency();
     * // double the tempo
     * Tone.Transport.bpm.value *= 2;
     * // the frequency of the oscillator is doubled to 880
     */
    syncFrequency(): this;
    /**
     * Unsync the oscillator's frequency from the Transport.
     * @see {@link syncFrequency}
     */
    unsyncFrequency(): this;
    /**
     * Cache the periodic waves to avoid having to redo computations
     */
    private static _periodicWaveCache;
    /**
     * Get a cached periodic wave. Avoids having to recompute
     * the oscillator values when they have already been computed
     * with the same values.
     */
    private _getCachedPeriodicWave;
    get type(): ToneOscillatorType;
    set type(type: ToneOscillatorType);
    get baseType(): OscillatorType;
    set baseType(baseType: OscillatorType);
    get partialCount(): number;
    set partialCount(p: number);
    /**
     * Returns the real and imaginary components based
     * on the oscillator type.
     * @returns [real: Float32Array, imaginary: Float32Array]
     */
    private _getRealImaginary;
    /**
     * Compute the inverse FFT for a given phase.
     */
    private _inverseFFT;
    /**
     * Returns the initial value of the oscillator when stopped.
     * E.g. a "sine" oscillator with phase = 90 would return an initial value of -1.
     */
    getInitialValue(): AudioRange;
    get partials(): number[];
    set partials(partials: number[]);
    get phase(): Degrees;
    set phase(phase: Degrees);
    asArray(length?: number): Promise<Float32Array>;
    dispose(): this;
}
