import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { Multiply } from "./Multiply.js";
import { SignalOperator } from "./SignalOperator.js";
/**
 * Negate the incoming signal. i.e. an input signal of 10 will output -10
 *
 * @example
 * const neg = new Tone.Negate();
 * const sig = new Tone.Signal(-2).connect(neg);
 * // output of neg is positive 2.
 * @category Signal
 */
export declare class Negate extends SignalOperator<ToneAudioNodeOptions> {
    readonly name: string;
    /**
     * negation is done by multiplying by -1
     */
    private _multiply;
    /**
     * The input and output are equal to the multiply node
     */
    input: Multiply<"number">;
    output: Multiply<"number">;
    /**
     * clean up
     * @returns {Negate} this
     */
    dispose(): this;
}
