import { Effect, EffectOptions } from "./Effect.js";
import { Positive } from "../core/type/Units.js";
export interface ChebyshevOptions extends EffectOptions {
    order: Positive;
    oversample: OverSampleType;
}
/**
 * Chebyshev is a waveshaper which is good
 * for making different types of distortion sounds.
 * Note that odd orders sound very different from even ones,
 * and order = 1 is no change.
 * Read more at [music.columbia.edu](http://music.columbia.edu/cmc/musicandcomputers/chapter4/04_06.php).
 * @example
 * // create a new cheby
 * const cheby = new Tone.Chebyshev(50).toDestination();
 * // create a monosynth connected to our cheby
 * const synth = new Tone.MonoSynth().connect(cheby);
 * synth.triggerAttackRelease("C2", 0.4);
 * @category Effect
 */
export declare class Chebyshev extends Effect<ChebyshevOptions> {
    readonly name: string;
    /**
     * The private waveshaper node
     */
    private _shaper;
    /**
     * holds onto the order of the filter
     */
    private _order;
    /**
     * @param order The order of the chebyshev polynomial. Normal range between 1-100.
     */
    constructor(order?: Positive);
    constructor(options?: Partial<ChebyshevOptions>);
    static getDefaults(): ChebyshevOptions;
    /**
     * get the coefficient for that degree
     * @param  x the x value
     * @param  degree
     * @param  memo memoize the computed value. this speeds up computation greatly.
     */
    private _getCoefficient;
    /**
     * The order of the Chebyshev polynomial which creates the equation which is applied to the incoming
     * signal through a Tone.WaveShaper. Must be an integer. The equations are in the form:
     * ```
     * order 2: 2x^2 + 1
     * order 3: 4x^3 + 3x
     * ```
     * @min 1
     * @max 100
     */
    get order(): Positive;
    set order(order: Positive);
    /**
     * The oversampling of the effect. Can either be "none", "2x" or "4x".
     */
    get oversample(): OverSampleType;
    set oversample(oversampling: OverSampleType);
    dispose(): this;
}
