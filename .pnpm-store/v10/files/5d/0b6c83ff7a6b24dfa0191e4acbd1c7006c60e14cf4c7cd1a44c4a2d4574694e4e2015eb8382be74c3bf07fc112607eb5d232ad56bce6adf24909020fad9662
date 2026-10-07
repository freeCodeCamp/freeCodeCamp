import { Delay } from "../core/context/Delay.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { readOnly } from "../core/util/Interface.js";
import { FeedbackEffect } from "./FeedbackEffect.js";
/**
 * FeedbackDelay is a DelayNode in which part of output signal is fed back into the delay.
 *
 * @param delayTime The delay applied to the incoming signal.
 * @param feedback The amount of the effected signal which is fed back through the delay.
 * @example
 * const feedbackDelay = new Tone.FeedbackDelay("8n", 0.5).toDestination();
 * const tom = new Tone.MembraneSynth({
 * 	octaves: 4,
 * 	pitchDecay: 0.1
 * }).connect(feedbackDelay);
 * tom.triggerAttackRelease("A2", "32n");
 * @category Effect
 */
export class FeedbackDelay extends FeedbackEffect {
    constructor() {
        const options = optionsFromArguments(FeedbackDelay.getDefaults(), arguments, ["delayTime", "feedback"]);
        super(options);
        this.name = "FeedbackDelay";
        this._delayNode = new Delay({
            context: this.context,
            delayTime: options.delayTime,
            maxDelay: options.maxDelay,
        });
        this.delayTime = this._delayNode.delayTime;
        // connect it up
        this.connectEffect(this._delayNode);
        readOnly(this, "delayTime");
    }
    static getDefaults() {
        return Object.assign(FeedbackEffect.getDefaults(), {
            delayTime: 0.25,
            maxDelay: 1,
        });
    }
    dispose() {
        super.dispose();
        this._delayNode.dispose();
        this.delayTime.dispose();
        return this;
    }
}
//# sourceMappingURL=FeedbackDelay.js.map