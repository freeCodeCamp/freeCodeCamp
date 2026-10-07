import { StereoXFeedbackEffect, } from "./StereoXFeedbackEffect.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Delay } from "../core/context/Delay.js";
import { Signal } from "../signal/Signal.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * PingPongDelay is a feedback delay effect where the echo is heard
 * first in one channel and next in the opposite channel. In a stereo
 * system these are the right and left channels.
 * PingPongDelay in more simplified terms is two Tone.FeedbackDelays
 * with independent delay values. Each delay is routed to one channel
 * (left or right), and the channel triggered second will always
 * trigger at the same interval after the first.
 * @example
 * const pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
 * const drum = new Tone.MembraneSynth().connect(pingPong);
 * drum.triggerAttackRelease("C4", "32n");
 * @category Effect
 */
export class PingPongDelay extends StereoXFeedbackEffect {
    constructor() {
        const options = optionsFromArguments(PingPongDelay.getDefaults(), arguments, ["delayTime", "feedback"]);
        super(options);
        this.name = "PingPongDelay";
        this._leftDelay = new Delay({
            context: this.context,
            maxDelay: options.maxDelay,
        });
        this._rightDelay = new Delay({
            context: this.context,
            maxDelay: options.maxDelay,
        });
        this._rightPreDelay = new Delay({
            context: this.context,
            maxDelay: options.maxDelay,
        });
        this.delayTime = new Signal({
            context: this.context,
            units: "time",
            value: options.delayTime,
        });
        // connect it up
        this.connectEffectLeft(this._leftDelay);
        this.connectEffectRight(this._rightPreDelay, this._rightDelay);
        this.delayTime.fan(this._leftDelay.delayTime, this._rightDelay.delayTime, this._rightPreDelay.delayTime);
        // rearranged the feedback to be after the rightPreDelay
        this._feedbackL.disconnect();
        this._feedbackL.connect(this._rightDelay);
        readOnly(this, ["delayTime"]);
    }
    static getDefaults() {
        return Object.assign(StereoXFeedbackEffect.getDefaults(), {
            delayTime: 0.25,
            maxDelay: 1,
        });
    }
    dispose() {
        super.dispose();
        this._leftDelay.dispose();
        this._rightDelay.dispose();
        this._rightPreDelay.dispose();
        this.delayTime.dispose();
        return this;
    }
}
//# sourceMappingURL=PingPongDelay.js.map