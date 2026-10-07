import { Gain } from "../core/context/Gain.js";
import { Param } from "../core/context/Param.js";
import { NormalRange } from "../core/type/Units.js";
import { readOnly } from "../core/util/Interface.js";
import { Effect, EffectOptions } from "./Effect.js";

export interface FeedbackEffectOptions extends EffectOptions {
	/**
	 * The feedback from the output back to the input
	 * ```
	 * +---<--------<---+
	 * |                |
	 * |  +----------+  |
	 * +--> feedback +>-+
	 *    +----------+
	 * ```
	 */
	feedback: NormalRange;
}

/**
 * FeedbackEffect provides a loop between an audio source and its own output.
 * This is a base-class for feedback effects.
 *
 * NOTE: Feedback effects require at least one DelayNode to be in the feedback cycle.
 */
export abstract class FeedbackEffect<
	Options extends FeedbackEffectOptions,
> extends Effect<Options> {
	readonly name: string = "FeedbackEffect";

	/**
	 * the gain which controls the feedback
	 */
	private _feedbackGain: Gain<"normalRange">;

	/**
	 * The amount of signal which is fed back into the effect input.
	 */
	feedback: Param<"normalRange">;

	constructor(options: FeedbackEffectOptions) {
		super(options);

		this._feedbackGain = new Gain({
			context: this.context,
			gain: options.feedback,
			units: "normalRange",
		});

		this.feedback = this._feedbackGain.gain;
		readOnly(this, "feedback");

		// the feedback loop
		this.effectReturn.chain(this._feedbackGain, this.effectSend);
	}

	static getDefaults(): FeedbackEffectOptions {
		return Object.assign(Effect.getDefaults(), {
			feedback: 0.125,
		});
	}

	dispose(): this {
		super.dispose();
		this._feedbackGain.dispose();
		this.feedback.dispose();
		return this;
	}
}
