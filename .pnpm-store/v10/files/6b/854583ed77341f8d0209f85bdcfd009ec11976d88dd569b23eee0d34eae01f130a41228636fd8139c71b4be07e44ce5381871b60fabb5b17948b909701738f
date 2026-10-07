import { ToneAudioNode, ToneAudioNodeOptions } from "../../core/context/ToneAudioNode.js";
import { Split } from "./Split.js";
export type MidSideSplitOptions = ToneAudioNodeOptions;
/**
 * Mid/Side processing separates the the 'mid' signal (which comes out of both the left and the right channel)
 * and the 'side' (which only comes out of the the side channels).
 * ```
 * Mid = (Left+Right)/sqrt(2);   // obtain mid-signal from left and right
 * Side = (Left-Right)/sqrt(2);   // obtain side-signal from left and right
 * ```
 * @category Component
 */
export declare class MidSideSplit extends ToneAudioNode<MidSideSplitOptions> {
    readonly name: string;
    readonly input: Split;
    /**
     * There is no output node, use either {@link mid} or {@link side} outputs.
     */
    readonly output: undefined;
    /**
     * Split the incoming signal into left and right channels
     */
    private _split;
    /**
     * Sums the left and right channels
     */
    private _midAdd;
    /**
     * Subtract left and right channels.
     */
    private _sideSubtract;
    /**
     * The "mid" output. `(Left+Right)/sqrt(2)`
     */
    readonly mid: ToneAudioNode;
    /**
     * The "side" output. `(Left-Right)/sqrt(2)`
     */
    readonly side: ToneAudioNode;
    constructor(options?: Partial<MidSideSplitOptions>);
    dispose(): this;
}
