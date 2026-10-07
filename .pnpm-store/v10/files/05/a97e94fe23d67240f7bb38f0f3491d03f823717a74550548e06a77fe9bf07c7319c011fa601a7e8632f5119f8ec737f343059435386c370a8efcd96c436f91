import { connectSeries } from "../core/context/ToneAudioNode.js";
import { Gain } from "../core/context/Gain.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Signal } from "./Signal.js";
/**
 * Add a signal and a number or two signals. When no value is
 * passed into the constructor, Tone.Add will sum input and `addend`
 * If a value is passed into the constructor, the it will be added to the input.
 *
 * @example
 * return Tone.Offline(() => {
 * 	const add = new Tone.Add(2).toDestination();
 * 	add.addend.setValueAtTime(1, 0.2);
 * 	const signal = new Tone.Signal(2);
 * 	// add a signal and a scalar
 * 	signal.connect(add);
 * 	signal.setValueAtTime(1, 0.1);
 * }, 0.5, 1);
 * @category Signal
 */
export class Add extends Signal {
    constructor() {
        super(optionsFromArguments(Add.getDefaults(), arguments, ["value"]));
        this.override = false;
        this.name = "Add";
        /**
         * the summing node
         */
        this._sum = new Gain({ context: this.context });
        this.input = this._sum;
        this.output = this._sum;
        /**
         * The value which is added to the input signal
         */
        this.addend = this._param;
        connectSeries(this._constantSource, this._sum);
    }
    static getDefaults() {
        return Object.assign(Signal.getDefaults(), {
            value: 0,
        });
    }
    dispose() {
        super.dispose();
        this._sum.dispose();
        return this;
    }
}
//# sourceMappingURL=Add.js.map