import { ToneAudioNode } from "../core/context/ToneAudioNode.js";
import { Signal, SignalOptions } from "./Signal.js";
import { Param } from "../core/context/Param.js";
export type GreaterThanOptions = SignalOptions<"number">;
/**
 * Output 1 if the signal is greater than the value, otherwise outputs 0.
 * can compare two signals or a signal and a number.
 *
 * @example
 * return Tone.Offline(() => {
 * 	const gt = new Tone.GreaterThan(2).toDestination();
 * 	const sig = new Tone.Signal(4).connect(gt);
 * }, 0.1, 1);
 * @category Signal
 */
export declare class GreaterThan extends Signal<"number"> {
    readonly name: string;
    readonly override: boolean;
    readonly input: ToneAudioNode;
    readonly output: ToneAudioNode;
    /**
     * compare that amount to zero after subtracting
     */
    private _gtz;
    /**
     * Subtract the value from the input node
     */
    private _subtract;
    /**
     * The signal to compare to the incoming signal against.
     * @example
     * return Tone.Offline(() => {
     * 	// change the comparison value
     * 	const gt = new Tone.GreaterThan(1.5).toDestination();
     * 	const signal = new Tone.Signal(1).connect(gt);
     * 	gt.comparator.setValueAtTime(0.5, 0.1);
     * }, 0.5, 1);
     */
    readonly comparator: Param<"number">;
    /**
     * @param value The value to compare to
     */
    constructor(value?: number);
    constructor(options?: Partial<GreaterThanOptions>);
    static getDefaults(): GreaterThanOptions;
    dispose(): this;
}
