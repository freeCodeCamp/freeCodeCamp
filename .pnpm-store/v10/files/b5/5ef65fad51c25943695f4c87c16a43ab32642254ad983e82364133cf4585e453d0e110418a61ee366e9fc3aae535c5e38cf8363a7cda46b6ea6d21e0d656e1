import { StereoEffect, StereoEffectOptions } from "./StereoEffect.js";
import { NormalRange } from "../core/type/Units.js";
import { Signal } from "../signal/Signal.js";
import { Gain } from "../core/context/Gain.js";
import { Split } from "../component/channel/Split.js";
import { Merge } from "../component/channel/Merge.js";
export interface StereoFeedbackEffectOptions extends StereoEffectOptions {
    feedback: NormalRange;
}
/**
 * Base class for stereo feedback effects where the effectReturn is fed back into the same channel.
 */
export declare class StereoFeedbackEffect<Options extends StereoFeedbackEffectOptions> extends StereoEffect<Options> {
    /**
     * The amount of feedback from the output
     * back into the input of the effect (routed
     * across left and right channels).
     */
    readonly feedback: Signal<"normalRange">;
    /**
     * the left side feedback
     */
    protected _feedbackL: Gain;
    /**
     * the right side feedback
     */
    protected _feedbackR: Gain;
    /**
     * Split the channels for feedback
     */
    protected _feedbackSplit: Split;
    /**
     * Merge the channels for feedback
     */
    protected _feedbackMerge: Merge;
    constructor(options: StereoFeedbackEffectOptions);
    static getDefaults(): StereoFeedbackEffectOptions;
    dispose(): this;
}
