import { Gain } from "../core/context/Gain.js";
import { Param } from "../core/context/Param.js";
import { Signal, SignalOptions } from "../signal/Signal.js";
/**
 * Subtract the signal connected to the input is subtracted from the signal connected
 * The subtrahend.
 *
 * @example
 * // subtract a scalar from a signal
 * const sub = new Tone.Subtract(1);
 * const sig = new Tone.Signal(4).connect(sub);
 * // the output of sub is 3.
 * @example
 * // subtract two signals
 * const sub = new Tone.Subtract();
 * const sigA = new Tone.Signal(10);
 * const sigB = new Tone.Signal(2.5);
 * sigA.connect(sub);
 * sigB.connect(sub.subtrahend);
 * // output of sub is 7.5
 * @category Signal
 */
export declare class Subtract extends Signal {
    override: boolean;
    readonly name: string;
    /**
     * the summing node
     */
    private _sum;
    readonly input: Gain;
    readonly output: Gain;
    /**
     * Negate the input of the second input before connecting it to the summing node.
     */
    private _neg;
    /**
     * The value which is subtracted from the main signal
     */
    subtrahend: Param<"number">;
    /**
     * @param value The value to subtract from the incoming signal. If the value
     *             is omitted, it will subtract the second signal from the first.
     */
    constructor(value?: number);
    constructor(options?: Partial<SignalOptions<"number">>);
    static getDefaults(): SignalOptions<"number">;
    dispose(): this;
}
