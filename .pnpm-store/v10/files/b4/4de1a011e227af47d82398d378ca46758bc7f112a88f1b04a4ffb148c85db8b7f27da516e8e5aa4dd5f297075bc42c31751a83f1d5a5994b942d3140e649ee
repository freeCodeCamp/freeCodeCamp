import { WaveShaper } from "./WaveShaper.js";
import { SignalOperator } from "./SignalOperator.js";
import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
export interface PowOptions extends ToneAudioNodeOptions {
    value: number;
}
/**
 * Pow applies an exponent to the incoming signal. The incoming signal must be AudioRange [-1, 1]
 *
 * @example
 * const pow = new Tone.Pow(2);
 * const sig = new Tone.Signal(0.5).connect(pow);
 * // output of pow is 0.25.
 * @category Signal
 */
export declare class Pow extends SignalOperator<PowOptions> {
    readonly name: string;
    private _exponent;
    private _exponentScaler;
    input: WaveShaper;
    output: WaveShaper;
    /**
     * @param value Constant exponent value to use
     */
    constructor(value?: number);
    constructor(options?: Partial<PowOptions>);
    static getDefaults(): PowOptions;
    /**
     * the function which maps the waveshaper
     * @param exponent exponent value
     */
    private _expFunc;
    /**
     * The value of the exponent.
     */
    get value(): number;
    set value(exponent: number);
    /**
     * Clean up.
     */
    dispose(): this;
}
