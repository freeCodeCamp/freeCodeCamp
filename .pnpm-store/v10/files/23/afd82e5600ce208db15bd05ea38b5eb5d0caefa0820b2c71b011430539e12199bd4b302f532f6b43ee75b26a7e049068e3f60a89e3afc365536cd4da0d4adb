import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly, writable } from "../../core/util/Interface.js";
import { MultibandSplit } from "../channel/MultibandSplit.js";
/**
 * EQ3 provides 3 equalizer bins: Low/Mid/High.
 * @category Component
 */
export class EQ3 extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(EQ3.getDefaults(), arguments, [
            "low",
            "mid",
            "high",
        ]);
        super(options);
        this.name = "EQ3";
        /**
         * the output
         */
        this.output = new Gain({ context: this.context });
        this._internalChannels = [];
        this.input = this._multibandSplit = new MultibandSplit({
            context: this.context,
            highFrequency: options.highFrequency,
            lowFrequency: options.lowFrequency,
        });
        this._lowGain = new Gain({
            context: this.context,
            gain: options.low,
            units: "decibels",
        });
        this._midGain = new Gain({
            context: this.context,
            gain: options.mid,
            units: "decibels",
        });
        this._highGain = new Gain({
            context: this.context,
            gain: options.high,
            units: "decibels",
        });
        this.low = this._lowGain.gain;
        this.mid = this._midGain.gain;
        this.high = this._highGain.gain;
        this.Q = this._multibandSplit.Q;
        this.lowFrequency = this._multibandSplit.lowFrequency;
        this.highFrequency = this._multibandSplit.highFrequency;
        // the frequency bands
        this._multibandSplit.low.chain(this._lowGain, this.output);
        this._multibandSplit.mid.chain(this._midGain, this.output);
        this._multibandSplit.high.chain(this._highGain, this.output);
        readOnly(this, ["low", "mid", "high", "lowFrequency", "highFrequency"]);
        this._internalChannels = [this._multibandSplit];
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            high: 0,
            highFrequency: 2500,
            low: 0,
            lowFrequency: 400,
            mid: 0,
        });
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        writable(this, ["low", "mid", "high", "lowFrequency", "highFrequency"]);
        this._multibandSplit.dispose();
        this.lowFrequency.dispose();
        this.highFrequency.dispose();
        this._lowGain.dispose();
        this._midGain.dispose();
        this._highGain.dispose();
        this.low.dispose();
        this.mid.dispose();
        this.high.dispose();
        this.Q.dispose();
        return this;
    }
}
//# sourceMappingURL=EQ3.js.map