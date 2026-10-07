import { connectSeries } from "../core/context/ToneAudioNode.js";
import { Gain } from "../core/context/Gain.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Negate } from "../signal/Negate.js";
import { Signal } from "../signal/Signal.js";
/**
 * Subtract the signal connected to the input is subtracted from the signal connected
 * The subtrahend.
 *
 * @example
 * // subtract a scalar from a signal
 * const sub = new Tone.Subtract(1);
 * const sig = new Tone.Signal(4).connect(sub);
 * // the output of sub is 3.
 * @example
 * // subtract two signals
 * const sub = new Tone.Subtract();
 * const sigA = new Tone.Signal(10);
 * const sigB = new Tone.Signal(2.5);
 * sigA.connect(sub);
 * sigB.connect(sub.subtrahend);
 * // output of sub is 7.5
 * @category Signal
 */
export class Subtract extends Signal {
    constructor() {
        super(optionsFromArguments(Subtract.getDefaults(), arguments, ["value"]));
        this.override = false;
        this.name = "Subtract";
        /**
         * the summing node
         */
        this._sum = new Gain({ context: this.context });
        this.input = this._sum;
        this.output = this._sum;
        /**
         * Negate the input of the second input before connecting it to the summing node.
         */
        this._neg = new Negate({ context: this.context });
        /**
         * The value which is subtracted from the main signal
         */
        this.subtrahend = this._param;
        connectSeries(this._constantSource, this._neg, this._sum);
    }
    static getDefaults() {
        return Object.assign(Signal.getDefaults(), {
            value: 0,
        });
    }
    dispose() {
        super.dispose();
        this._neg.dispose();
        this._sum.dispose();
        return this;
    }
}
//# sourceMappingURL=Subtract.js.map