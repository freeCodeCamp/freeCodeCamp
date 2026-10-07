import { connectSeries } from "../core/context/ToneAudioNode.js";
import { Gain } from "../core/context/Gain.js";
import { Param } from "../core/context/Param.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Signal, SignalOptions } from "./Signal.js";

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
	override = false;

	readonly name: string = "Add";

	/**
	 * the summing node
	 */
	private _sum: Gain = new Gain({ context: this.context });
	readonly input = this._sum;
	readonly output = this._sum;

	/**
	 * The value which is added to the input signal
	 */
	readonly addend: Param<"number"> = this._param;

	/**
	 * @param value If no value is provided, will sum the input and {@link addend}.
	 */
	constructor(value?: number);
	constructor(options?: Partial<SignalOptions<"number">>);
	constructor() {
		super(optionsFromArguments(Add.getDefaults(), arguments, ["value"]));

		connectSeries(this._constantSource, this._sum);
	}

	static getDefaults(): SignalOptions<"number"> {
		return Object.assign(Signal.getDefaults(), {
			value: 0,
		});
	}

	dispose(): this {
		super.dispose();
		this._sum.dispose();
		return this;
	}
}
