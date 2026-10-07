import { Gain } from "../core/context/Gain.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Signal } from "./Signal.js";
/**
 * Multiply two incoming signals. Or, if a number is given in the constructor,
 * multiplies the incoming signal by that value.
 *
 * @example
 * // multiply two signals
 * const mult = new Tone.Multiply();
 * const sigA = new Tone.Signal(3);
 * const sigB = new Tone.Signal(4);
 * sigA.connect(mult);
 * sigB.connect(mult.factor);
 * // output of mult is 12.
 * @example
 * // multiply a signal and a number
 * const mult = new Tone.Multiply(10);
 * const sig = new Tone.Signal(2).connect(mult);
 * // the output of mult is 20.
 * @category Signal
 */
export class Multiply extends Signal {
    constructor() {
        const options = optionsFromArguments(Multiply.getDefaults(), arguments, ["value"]);
        super(options);
        this.name = "Multiply";
        /**
         * Indicates if the value should be overridden on connection
         */
        this.override = false;
        this._mult =
            this.input =
                this.output =
                    new Gain({
                        context: this.context,
                        minValue: options.minValue,
                        maxValue: options.maxValue,
                    });
        this.factor = this._param = this._mult
            .gain;
        this.factor.setValueAtTime(options.value, 0);
    }
    static getDefaults() {
        return Object.assign(Signal.getDefaults(), {
            value: 0,
        });
    }
    dispose() {
        super.dispose();
        this._mult.dispose();
        return this;
    }
}
//# sourceMappingURL=Multiply.js.map