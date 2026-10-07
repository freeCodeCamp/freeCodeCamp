import { Param } from "../core/context/Param.js";
import { Signal, SignalOptions } from "./Signal.js";
import { InputNode, OutputNode } from "../core/context/ToneAudioNode.js";
/**
 * Multiply two incoming signals. Or, if a number is given in the constructor,
 * multiplies the incoming signal by that value.
 *
 * @example
 * // multiply two signals
 * const mult = new Tone.Multiply();
 * const sigA = new Tone.Signal(3);
 * const sigB = new Tone.Signal(4);
 * sigA.connect(mult);
 * sigB.connect(mult.factor);
 * // output of mult is 12.
 * @example
 * // multiply a signal and a number
 * const mult = new Tone.Multiply(10);
 * const sig = new Tone.Signal(2).connect(mult);
 * // the output of mult is 20.
 * @category Signal
 */
export declare class Multiply<TypeName extends "number" | "positive" = "number"> extends Signal<TypeName> {
    readonly name: string;
    /**
     * Indicates if the value should be overridden on connection
     */
    readonly override = false;
    /**
     * the input gain node
     */
    private _mult;
    /**
     * The multiplicand input.
     */
    input: InputNode;
    /**
     * The product of the input and {@link factor}
     */
    output: OutputNode;
    /**
     * The multiplication factor. Can be set directly or a signal can be connected to it.
     */
    factor: Param<TypeName>;
    /**
     * @param value Constant value to multiple
     */
    constructor(value?: number);
    constructor(options?: Partial<SignalOptions<TypeName>>);
    static getDefaults(): SignalOptions<any>;
    dispose(): this;
}
