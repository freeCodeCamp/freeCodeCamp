import { Scale, ScaleOptions } from "./Scale.js";
import { Positive } from "../core/type/Units.js";
export interface ScaleExpOptions extends ScaleOptions {
    exponent: Positive;
}
/**
 * Performs an exponential scaling on an input signal.
 * Scales a NormalRange value [0,1] exponentially
 * to the output range of outputMin to outputMax.
 * @example
 * const scaleExp = new Tone.ScaleExp(0, 100, 2);
 * const signal = new Tone.Signal(0.5).connect(scaleExp);
 * @category Signal
 */
export declare class ScaleExp extends Scale<ScaleExpOptions> {
    readonly name: string;
    /**
     * The exponent scaler
     */
    private _exp;
    /**
     * @param min The output value when the input is 0.
     * @param max The output value when the input is 1.
     * @param exponent The exponent which scales the incoming signal.
     */
    constructor(min?: number, max?: number, exponent?: number);
    constructor(options?: Partial<ScaleExpOptions>);
    static getDefaults(): ScaleExpOptions;
    /**
     * Instead of interpolating linearly between the {@link min} and
     * {@link max} values, setting the exponent will interpolate between
     * the two values with an exponential curve.
     */
    get exponent(): Positive;
    set exponent(exp: Positive);
    dispose(): this;
}
