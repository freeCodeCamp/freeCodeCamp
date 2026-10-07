import { StereoFeedbackEffect, } from "./StereoFeedbackEffect.js";
import { readOnly } from "../core/util/Interface.js";
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
export class StereoXFeedbackEffect extends StereoFeedbackEffect {
    constructor(options) {
        super(options);
        // the left output connected to the right input
        this._feedbackL.disconnect();
        this._feedbackL.connect(this._feedbackMerge, 0, 1);
        // the left output connected to the right input
        this._feedbackR.disconnect();
        this._feedbackR.connect(this._feedbackMerge, 0, 0);
        readOnly(this, ["feedback"]);
    }
}
//# sourceMappingURL=StereoXFeedbackEffect.js.map