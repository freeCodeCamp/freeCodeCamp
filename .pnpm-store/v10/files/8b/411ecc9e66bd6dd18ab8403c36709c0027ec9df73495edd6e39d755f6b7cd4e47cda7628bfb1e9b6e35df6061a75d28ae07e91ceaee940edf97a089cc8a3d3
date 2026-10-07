import { SignalOperator } from "./SignalOperator.js";
import { Multiply } from "./Multiply.js";
import { WaveShaper } from "./WaveShaper.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
/**
 * GreaterThanZero outputs 1 when the input is strictly greater than zero
 * @example
 * return Tone.Offline(() => {
 * 	const gt0 = new Tone.GreaterThanZero().toDestination();
 * 	const sig = new Tone.Signal(0.5).connect(gt0);
 * 	sig.setValueAtTime(-1, 0.05);
 * }, 0.1, 1);
 * @category Signal
 */
export class GreaterThanZero extends SignalOperator {
    constructor() {
        super(optionsFromArguments(GreaterThanZero.getDefaults(), arguments));
        this.name = "GreaterThanZero";
        this._thresh = this.output = new WaveShaper({
            context: this.context,
            length: 127,
            mapping: (val) => {
                if (val <= 0) {
                    return 0;
                }
                else {
                    return 1;
                }
            },
        });
        this._scale = this.input = new Multiply({
            context: this.context,
            value: 10000,
        });
        // connections
        this._scale.connect(this._thresh);
    }
    dispose() {
        super.dispose();
        this._scale.dispose();
        this._thresh.dispose();
        return this;
    }
}
//# sourceMappingURL=GreaterThanZero.js.map