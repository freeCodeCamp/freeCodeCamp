import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Merge } from "./Merge.js";
export type MidSideMergeOptions = ToneAudioNodeOptions;
/**
 * MidSideMerge merges the mid and side signal after they've been separated by {@link MidSideSplit}
 * ```
 * Mid = (Left+Right)/sqrt(2);   // obtain mid-signal from left and right
 * Side = (Left-Right)/sqrt(2);   // obtain side-signal from left and right
 * ```
 * @category Component
 */
export declare class MidSideMerge extends ToneAudioNode<MidSideMergeOptions> {
    readonly name: string;
    /**
     * There is no input, connect sources to either {@link mid} or {@link side} inputs.
     */
    readonly input: undefined;
    /**
     * The merged signal
     */
    readonly output: Merge;
    /**
     * Merge the incoming signal into left and right channels
     */
    private _merge;
    /**
     * The "mid" input.
     */
    readonly mid: ToneAudioNode;
    /**
     * The "side" input.
     */
    readonly side: ToneAudioNode;
    /**
     * Recombine the mid/side into Left
     */
    private _left;
    /**
     * Recombine the mid/side into Right
     */
    private _right;
    /**
     * Multiply the right by sqrt(1/2)
     */
    private _leftMult;
    /**
     * Multiply the left by sqrt(1/2)
     */
    private _rightMult;
    constructor(options?: Partial<MidSideMergeOptions>);
    dispose(): this;
}
