import { Gain } from "../core/context/Gain.js";
import { Param } from "../core/context/Param.js";
import { Signal, SignalOptions } from "./Signal.js";
/**
 * Add a signal and a number or two signals. When no value is
 * passed into the constructor, Tone.Add will sum input and `addend`
 * If a value is passed into the constructor, the it will be added to the input.
 *
 * @example
 * return Tone.Offline(() => {
 * 	const add = new Tone.Add(2).toDestination();
 * 	add.addend.setValueAtTime(1, 0.2);
 * 	const signal = new Tone.Signal(2);
 * 	// add a signal and a scalar
 * 	signal.connect(add);
 * 	signal.setValueAtTime(1, 0.1);
 * }, 0.5, 1);
 * @category Signal
 */
export declare class Add extends Signal {
    override: boolean;
    readonly name: string;
    /**
     * the summing node
     */
    private _sum;
    readonly input: Gain<"gain">;
    readonly output: Gain<"gain">;
    /**
     * The value which is added to the input signal
     */
    readonly addend: Param<"number">;
    /**
     * @param value If no value is provided, will sum the input and {@link addend}.
     */
    constructor(value?: number);
    constructor(options?: Partial<SignalOptions<"number">>);
    static getDefaults(): SignalOptions<"number">;
    dispose(): this;
}
