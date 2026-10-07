import { Gain } from "../../core/context/Gain.js";
import { ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly, writable } from "../../core/util/Interface.js";
import { Signal } from "../../signal/Signal.js";
import { Filter } from "../filter/Filter.js";
/**
 * Split the incoming signal into three bands (low, mid, high)
 * with two crossover frequency controls.
 * ```
 *            +----------------------+
 *          +-> input < lowFrequency +------------------> low
 *          | +----------------------+
 *          |
 *          | +--------------------------------------+
 * input ---+-> lowFrequency < input < highFrequency +--> mid
 *          | +--------------------------------------+
 *          |
 *          | +-----------------------+
 *          +-> highFrequency < input +-----------------> high
 *            +-----------------------+
 * ```
 * @category Component
 */
export class MultibandSplit extends ToneAudioNode {
    constructor() {
        const options = optionsFromArguments(MultibandSplit.getDefaults(), arguments, ["lowFrequency", "highFrequency"]);
        super(options);
        this.name = "MultibandSplit";
        /**
         * the input
         */
        this.input = new Gain({ context: this.context });
        /**
         * no output node, use either low, mid or high outputs
         */
        this.output = undefined;
        /**
         * The low band.
         */
        this.low = new Filter({
            context: this.context,
            frequency: 0,
            type: "lowpass",
        });
        /**
         * the lower filter of the mid band
         */
        this._lowMidFilter = new Filter({
            context: this.context,
            frequency: 0,
            type: "highpass",
        });
        /**
         * The mid band output.
         */
        this.mid = new Filter({
            context: this.context,
            frequency: 0,
            type: "lowpass",
        });
        /**
         * The high band output.
         */
        this.high = new Filter({
            context: this.context,
            frequency: 0,
            type: "highpass",
        });
        this._internalChannels = [this.low, this.mid, this.high];
        this.lowFrequency = new Signal({
            context: this.context,
            units: "frequency",
            value: options.lowFrequency,
        });
        this.highFrequency = new Signal({
            context: this.context,
            units: "frequency",
            value: options.highFrequency,
        });
        this.Q = new Signal({
            context: this.context,
            units: "positive",
            value: options.Q,
        });
        this.input.fan(this.low, this.high);
        this.input.chain(this._lowMidFilter, this.mid);
        // the frequency control signal
        this.lowFrequency.fan(this.low.frequency, this._lowMidFilter.frequency);
        this.highFrequency.fan(this.mid.frequency, this.high.frequency);
        // the Q value
        this.Q.connect(this.low.Q);
        this.Q.connect(this._lowMidFilter.Q);
        this.Q.connect(this.mid.Q);
        this.Q.connect(this.high.Q);
        readOnly(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]);
    }
    static getDefaults() {
        return Object.assign(ToneAudioNode.getDefaults(), {
            Q: 1,
            highFrequency: 2500,
            lowFrequency: 400,
        });
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        writable(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]);
        this.low.dispose();
        this._lowMidFilter.dispose();
        this.mid.dispose();
        this.high.dispose();
        this.lowFrequency.dispose();
        this.highFrequency.dispose();
        this.Q.dispose();
        return this;
    }
}
//# sourceMappingURL=MultibandSplit.js.map