import { Multiply } from "./Multiply.js";
import { SignalOperator } from "./SignalOperator.js";
/**
 * Negate the incoming signal. i.e. an input signal of 10 will output -10
 *
 * @example
 * const neg = new Tone.Negate();
 * const sig = new Tone.Signal(-2).connect(neg);
 * // output of neg is positive 2.
 * @category Signal
 */
export class Negate extends SignalOperator {
    constructor() {
        super(...arguments);
        this.name = "Negate";
        /**
         * negation is done by multiplying by -1
         */
        this._multiply = new Multiply({
            context: this.context,
            value: -1,
        });
        /**
         * The input and output are equal to the multiply node
         */
        this.input = this._multiply;
        this.output = this._multiply;
    }
    /**
     * clean up
     * @returns {Negate} this
     */
    dispose() {
        super.dispose();
        this._multiply.dispose();
        return this;
    }
}
//# sourceMappingURL=Negate.js.map