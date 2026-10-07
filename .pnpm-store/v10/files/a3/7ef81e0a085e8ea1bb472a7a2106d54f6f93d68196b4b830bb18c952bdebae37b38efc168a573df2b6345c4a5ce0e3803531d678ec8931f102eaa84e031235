import { optionsFromArguments } from "../core/util/Defaults.js";
import { Subtract } from "./Subtract.js";
import { Signal } from "./Signal.js";
import { GreaterThanZero } from "./GreaterThanZero.js";
import { readOnly } from "../core/util/Interface.js";
/**
 * Output 1 if the signal is greater than the value, otherwise outputs 0.
 * can compare two signals or a signal and a number.
 *
 * @example
 * return Tone.Offline(() => {
 * 	const gt = new Tone.GreaterThan(2).toDestination();
 * 	const sig = new Tone.Signal(4).connect(gt);
 * }, 0.1, 1);
 * @category Signal
 */
export class GreaterThan extends Signal {
    constructor() {
        const options = optionsFromArguments(GreaterThan.getDefaults(), arguments, ["value"]);
        super(options);
        this.name = "GreaterThan";
        this.override = false;
        this._subtract = this.input = new Subtract({
            context: this.context,
            value: options.value,
        });
        this._gtz = this.output = new GreaterThanZero({
            context: this.context,
        });
        this.comparator = this._param = this._subtract.subtrahend;
        readOnly(this, "comparator");
        // connect
        this._subtract.connect(this._gtz);
    }
    static getDefaults() {
        return Object.assign(Signal.getDefaults(), {
            value: 0,
        });
    }
    dispose() {
        super.dispose();
        this._gtz.dispose();
        this._subtract.dispose();
        this.comparator.dispose();
        return this;
    }
}
//# sourceMappingURL=GreaterThan.js.map