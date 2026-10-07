import { SignalOperator, SignalOperatorOptions } from "./SignalOperator.js";
import { ToneAudioNode } from "../core/context/ToneAudioNode.js";
export type GreaterThanZeroOptions = SignalOperatorOptions;
/**
 * GreaterThanZero outputs 1 when the input is strictly greater than zero
 * @example
 * return Tone.Offline(() => {
 * 	const gt0 = new Tone.GreaterThanZero().toDestination();
 * 	const sig = new Tone.Signal(0.5).connect(gt0);
 * 	sig.setValueAtTime(-1, 0.05);
 * }, 0.1, 1);
 * @category Signal
 */
export declare class GreaterThanZero extends SignalOperator<GreaterThanZeroOptions> {
    readonly name: string;
    /**
     * The waveshaper
     */
    private _thresh;
    /**
     * Scale the first thresholded signal by a large value.
     * this will help with values which are very close to 0
     */
    private _scale;
    readonly output: ToneAudioNode;
    readonly input: ToneAudioNode;
    constructor(options?: Partial<GreaterThanZeroOptions>);
    dispose(): this;
}
