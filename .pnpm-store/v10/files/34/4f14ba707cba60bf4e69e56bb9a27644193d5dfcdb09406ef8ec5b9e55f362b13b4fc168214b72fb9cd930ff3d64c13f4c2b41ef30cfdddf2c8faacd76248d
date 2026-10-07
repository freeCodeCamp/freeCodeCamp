import { StereoFeedbackEffect, StereoFeedbackEffectOptions } from "./StereoFeedbackEffect.js";
import { NormalRange } from "../core/type/Units.js";
export interface StereoXFeedbackEffectOptions extends StereoFeedbackEffectOptions {
    feedback: NormalRange;
}
/**
 * Just like a {@link StereoFeedbackEffect}, but the feedback is routed from left to right
 * and right to left instead of on the same channel.
 * ```
 * +--------------------------------+ feedbackL <-----------------------------------+
 * |                                                                                |
 * +-->                          +----->        +---->                          +-----+
 *      feedbackMerge +--> split        (EFFECT)       merge +--> feedbackSplit     | |
 * +-->                          +----->        +---->                          +---+ |
 * |                                                                                  |
 * +--------------------------------+ feedbackR <-------------------------------------+
 * ```
 */
export declare class StereoXFeedbackEffect<Options extends StereoXFeedbackEffectOptions> extends StereoFeedbackEffect<Options> {
    constructor(options: StereoXFeedbackEffectOptions);
}
