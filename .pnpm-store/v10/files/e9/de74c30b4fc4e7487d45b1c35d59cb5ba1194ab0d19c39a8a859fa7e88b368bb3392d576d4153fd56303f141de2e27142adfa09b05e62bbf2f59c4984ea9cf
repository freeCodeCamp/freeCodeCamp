import { SignalOperator } from "./SignalOperator.js";
import { WaveShaper } from "./WaveShaper.js";
/**
 * GainToAudio converts an input in NormalRange [0,1] to AudioRange [-1,1].
 * @see {@link AudioToGain}.
 * @category Signal
 */
export class GainToAudio extends SignalOperator {
    constructor() {
        super(...arguments);
        this.name = "GainToAudio";
        /**
         * The node which converts the audio ranges
         */
        this._norm = new WaveShaper({
            context: this.context,
            mapping: (x) => Math.abs(x) * 2 - 1,
        });
        /**
         * The NormalRange input [0, 1]
         */
        this.input = this._norm;
        /**
         * The AudioRange output [-1, 1]
         */
        this.output = this._norm;
    }
    /**
     * clean up
     */
    dispose() {
        super.dispose();
        this._norm.dispose();
        return this;
    }
}
//# sourceMappingURL=GainToAudio.js.map