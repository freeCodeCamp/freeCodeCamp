import { Gain } from "../core/context/Gain.js";
import { connect, disconnect, } from "../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { SignalOperator } from "./SignalOperator.js";
/**
 * Tone.Zero outputs 0's at audio-rate. The reason this has to be
 * it's own class is that many browsers optimize out Tone.Signal
 * with a value of 0 and will not process nodes further down the graph.
 * @category Signal
 */
export class Zero extends SignalOperator {
    constructor() {
        super(optionsFromArguments(Zero.getDefaults(), arguments));
        this.name = "Zero";
        /**
         * The gain node which connects the constant source to the output
         */
        this._gain = new Gain({ context: this.context });
        /**
         * Only outputs 0
         */
        this.output = this._gain;
        /**
         * no input node
         */
        this.input = undefined;
        connect(this.context.getConstant(0), this._gain);
    }
    /**
     * clean up
     */
    dispose() {
        super.dispose();
        disconnect(this.context.getConstant(0), this._gain);
        return this;
    }
}
//# sourceMappingURL=Zero.js.map