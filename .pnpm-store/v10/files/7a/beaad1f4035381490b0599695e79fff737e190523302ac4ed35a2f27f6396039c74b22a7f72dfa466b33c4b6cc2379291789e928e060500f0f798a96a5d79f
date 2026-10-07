import { Gain } from "../core/context/Gain.js";
import { readOnly } from "../core/util/Interface.js";
import { Effect } from "./Effect.js";
/**
 * FeedbackEffect provides a loop between an audio source and its own output.
 * This is a base-class for feedback effects.
 *
 * NOTE: Feedback effects require at least one DelayNode to be in the feedback cycle.
 */
export class FeedbackEffect extends Effect {
    constructor(options) {
        super(options);
        this.name = "FeedbackEffect";
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
    static getDefaults() {
        return Object.assign(Effect.getDefaults(), {
            feedback: 0.125,
        });
    }
    dispose() {
        super.dispose();
        this._feedbackGain.dispose();
        this.feedback.dispose();
        return this;
    }
}
//# sourceMappingURL=FeedbackEffect.js.map