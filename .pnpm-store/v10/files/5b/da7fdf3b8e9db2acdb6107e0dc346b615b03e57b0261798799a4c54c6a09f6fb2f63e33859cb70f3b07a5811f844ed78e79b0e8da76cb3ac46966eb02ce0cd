import { SignalOperator } from "./SignalOperator.js";
import { WaveShaper } from "./WaveShaper.js";
/**
 * Return the absolute value of an incoming signal.
 *
 * @example
 * return Tone.Offline(() => {
 * 	const abs = new Tone.Abs().toDestination();
 * 	const signal = new Tone.Signal(1);
 * 	signal.rampTo(-1, 0.5);
 * 	signal.connect(abs);
 * }, 0.5, 1);
 * @category Signal
 */
export class Abs extends SignalOperator {
    constructor() {
        super(...arguments);
        this.name = "Abs";
        /**
         * The node which converts the audio ranges
         */
        this._abs = new WaveShaper({
            context: this.context,
            mapping: (val) => {
                if (Math.abs(val) < 0.001) {
                    return 0;
                }
                else {
                    return Math.abs(val);
                }
            },
        });
        /**
         * The AudioRange input [-1, 1]
         */
        this.input = this._abs;
        /**
         * The output range [0, 1]
         */
        this.output = this._abs;
    }
    /**
     * clean up
     */
    dispose() {
        super.dispose();
        this._abs.dispose();
        return this;
    }
}
//# sourceMappingURL=Abs.js.map