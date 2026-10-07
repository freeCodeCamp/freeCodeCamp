import { Gain } from "../../core/context/Gain.js";
import { Param } from "../../core/context/Param.js";
import { connectSeries, ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { ToneAudioWorklet } from "../../core/worklet/ToneAudioWorklet.js";
import { workletName } from "./FeedbackCombFilter.worklet.js";
/**
 * Comb filters are basic building blocks for physical modeling. Read more
 * about comb filters on [CCRMA's website](https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html).
 *
 * This comb filter is implemented with the AudioWorkletNode which allows it to have feedback delays less than the
 * Web Audio processing block of 128 samples. There is a polyfill for browsers that don't yet support the
 * AudioWorkletNode, but it will add some latency and have slower performance than the AudioWorkletNode.
 * @category Component
 */
export class FeedbackCombFilter extends ToneAudioWorklet {
    constructor() {
        const options = optionsFromArguments(FeedbackCombFilter.getDefaults(), arguments, ["delayTime", "resonance"]);
        super(options);
        this.name = "FeedbackCombFilter";
        this.input = new Gain({ context: this.context });
        this.output = new Gain({ context: this.context });
        this.delayTime = new Param({
            context: this.context,
            value: options.delayTime,
            units: "time",
            minValue: 0,
            maxValue: 1,
            param: this._dummyParam,
            swappable: true,
        });
        this.resonance = new Param({
            context: this.context,
            value: options.resonance,
            units: "normalRange",
            param: this._dummyParam,
            swappable: true,
        });
        readOnly(this, ["resonance", "delayTime"]);
    }
    _audioWorkletName() {
        return workletName;
    }
    /**
     * The default parameters
     */
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            delayTime: 0.1,
            resonance: 0.5,
        });
    }
    onReady(node) {
        connectSeries(this.input, node, this.output);
        const delayTime = node.parameters.get("delayTime");
        this.delayTime.setParam(delayTime);
        const feedback = node.parameters.get("feedback");
        this.resonance.setParam(feedback);
    }
    dispose() {
        super.dispose();
        this.input.dispose();
        this.output.dispose();
        this.delayTime.dispose();
        this.resonance.dispose();
        return this;
    }
}
//# sourceMappingURL=FeedbackCombFilter.js.map