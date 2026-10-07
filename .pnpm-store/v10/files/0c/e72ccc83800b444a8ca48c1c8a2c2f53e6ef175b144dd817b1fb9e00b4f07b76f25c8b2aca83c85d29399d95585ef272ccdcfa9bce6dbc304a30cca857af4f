import { optionsFromArguments } from "../core/util/Defaults.js";
import { Add } from "./Add.js";
import { Multiply } from "./Multiply.js";
import { SignalOperator } from "./SignalOperator.js";
/**
 * Performs a linear scaling on an input signal.
 * Scales a NormalRange input to between
 * outputMin and outputMax.
 *
 * @example
 * const scale = new Tone.Scale(50, 100);
 * const signal = new Tone.Signal(0.5).connect(scale);
 * // the output of scale equals 75
 * @category Signal
 */
export class Scale extends SignalOperator {
    constructor() {
        const options = optionsFromArguments(Scale.getDefaults(), arguments, [
            "min",
            "max",
        ]);
        super(options);
        this.name = "Scale";
        this._mult = this.input = new Multiply({
            context: this.context,
            value: options.max - options.min,
        });
        this._add = this.output = new Add({
            context: this.context,
            value: options.min,
        });
        this._min = options.min;
        this._max = options.max;
        this.input.connect(this.output);
    }
    static getDefaults() {
        return Object.assign(SignalOperator.getDefaults(), {
            max: 1,
            min: 0,
        });
    }
    /**
     * The minimum output value. This number is output when the value input value is 0.
     */
    get min() {
        return this._min;
    }
    set min(min) {
        this._min = min;
        this._setRange();
    }
    /**
     * The maximum output value. This number is output when the value input value is 1.
     */
    get max() {
        return this._max;
    }
    set max(max) {
        this._max = max;
        this._setRange();
    }
    /**
     * set the values
     */
    _setRange() {
        this._add.value = this._min;
        this._mult.value = this._max - this._min;
    }
    dispose() {
        super.dispose();
        this._add.dispose();
        this._mult.dispose();
        return this;
    }
}
//# sourceMappingURL=Scale.js.map