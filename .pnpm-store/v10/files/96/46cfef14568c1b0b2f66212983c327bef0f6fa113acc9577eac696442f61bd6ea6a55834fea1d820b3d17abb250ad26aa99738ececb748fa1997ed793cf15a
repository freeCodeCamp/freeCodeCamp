import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { FeedbackCombFilter } from "./FeedbackCombFilter.js";
import { OnePoleFilter } from "./OnePoleFilter.js";
/**
 * A lowpass feedback comb filter. It is similar to
 * {@link FeedbackCombFilter}, but includes a lowpass filter.
 * @category Component
 */
export class LowpassCombFilter extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(LowpassCombFilter.getDefaults(), arguments, ["delayTime", "resonance", "dampening"]);
        super(options);
        this.name = "LowpassCombFilter";
        this._combFilter = this.output = new FeedbackCombFilter({
            context: this.context,
            delayTime: options.delayTime,
            resonance: options.resonance,
        });
        this.delayTime = this._combFilter.delayTime;
        this.resonance = this._combFilter.resonance;
        this._lowpass = this.input = new OnePoleFilter({
            context: this.context,
            frequency: options.dampening,
            type: "lowpass",
        });
        // connections
        this._lowpass.connect(this._combFilter);
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            dampening: 3000,
            delayTime: 0.1,
            resonance: 0.5,
        });
    }
    /**
     * The dampening control of the feedback
     */
    get dampening() {
        return this._lowpass.frequency;
    }
    set dampening(fq) {
        this._lowpass.frequency = fq;
    }
    dispose() {
        super.dispose();
        this._combFilter.dispose();
        this._lowpass.dispose();
        return this;
    }
}
//# sourceMappingURL=LowpassCombFilter.js.map