import {
	StereoFeedbackEffect,
	StereoFeedbackEffectOptions,
} from "./StereoFeedbackEffect.js";
import { NormalRange } from "../core/type/Units.js";
import { readOnly } from "../core/util/Interface.js";

export interface StereoXFeedbackEffectOptions
	extends StereoFeedbackEffectOptions {
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
export class StereoXFeedbackEffect<
	Options extends StereoXFeedbackEffectOptions,
> extends StereoFeedbackEffect<Options> {
	constructor(options: StereoXFeedbackEffectOptions) {
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
