import { Gain } from "../../core/context/Gain.js";
import { connectSeries, ToneAudioNode, } from "../../core/context/ToneAudioNode.js";
/**
 * PhaseShiftAllpass is an very efficient implementation of a Hilbert Transform
 * using two Allpass filter banks whose outputs have a phase difference of 90°.
 * Here the `offset90` phase is offset by +90° in relation to `output`.
 * Coefficients and structure was developed by Olli Niemitalo.
 * For more details see: http://yehar.com/blog/?p=368
 * @category Component
 */
export class PhaseShiftAllpass extends ToneAudioNode {
    constructor(options) {
        super(options);
        this.name = "PhaseShiftAllpass";
        this.input = new Gain({ context: this.context });
        /**
         * The phase shifted output
         */
        this.output = new Gain({ context: this.context });
        /**
         * The PhaseShifted allpass output
         */
        this.offset90 = new Gain({ context: this.context });
        const allpassBank1Values = [
            0.6923878, 0.9360654322959, 0.988229522686, 0.9987488452737,
        ];
        const allpassBank2Values = [
            0.4021921162426, 0.856171088242, 0.9722909545651, 0.9952884791278,
        ];
        this._bank0 = this._createAllPassFilterBank(allpassBank1Values);
        this._bank1 = this._createAllPassFilterBank(allpassBank2Values);
        this._oneSampleDelay = this.context.createIIRFilter([0.0, 1.0], [1.0, 0.0]);
        // connect Allpass filter banks
        connectSeries(this.input, ...this._bank0, this._oneSampleDelay, this.output);
        connectSeries(this.input, ...this._bank1, this.offset90);
    }
    /**
     * Create all of the IIR filters from an array of values using the coefficient calculation.
     */
    _createAllPassFilterBank(bankValues) {
        const nodes = bankValues.map((value) => {
            const coefficients = [
                [value * value, 0, -1],
                [1, 0, -(value * value)],
            ];
            return this.context.createIIRFilter(coefficients[0], coefficients[1]);
        });
        return nodes;
    }
    dispose() {
        super.dispose();
        this.input.dispose();
        this.output.dispose();
        this.offset90.dispose();
        this._bank0.forEach((f) => f.disconnect());
        this._bank1.forEach((f) => f.disconnect());
        this._oneSampleDelay.disconnect();
        return this;
    }
}
//# sourceMappingURL=PhaseShiftAllpass.js.map