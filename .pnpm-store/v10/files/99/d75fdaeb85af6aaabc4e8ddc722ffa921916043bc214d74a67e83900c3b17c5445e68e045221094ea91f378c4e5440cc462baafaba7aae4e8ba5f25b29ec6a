import { ToneAudioNode } from "../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Subtract } from "./Subtract.js";
import { Signal, SignalOptions } from "./Signal.js";
import { GreaterThanZero } from "./GreaterThanZero.js";
import { readOnly } from "../core/util/Interface.js";
import { Param } from "../core/context/Param.js";

export type GreaterThanOptions = SignalOptions<"number">;

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
export class GreaterThan extends Signal<"number"> {
	readonly name: string = "GreaterThan";

	readonly override: boolean = false;

	readonly input: ToneAudioNode;
	readonly output: ToneAudioNode;

	/**
	 * compare that amount to zero after subtracting
	 */
	private _gtz: GreaterThanZero;

	/**
	 * Subtract the value from the input node
	 */
	private _subtract: Subtract;

	/**
	 * The signal to compare to the incoming signal against.
	 * @example
	 * return Tone.Offline(() => {
	 * 	// change the comparison value
	 * 	const gt = new Tone.GreaterThan(1.5).toDestination();
	 * 	const signal = new Tone.Signal(1).connect(gt);
	 * 	gt.comparator.setValueAtTime(0.5, 0.1);
	 * }, 0.5, 1);
	 */
	readonly comparator: Param<"number">;

	/**
	 * @param value The value to compare to
	 */
	constructor(value?: number);
	constructor(options?: Partial<GreaterThanOptions>);
	constructor() {
		const options = optionsFromArguments(
			GreaterThan.getDefaults(),
			arguments,
			["value"]
		);
		super(options);

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

	static getDefaults(): GreaterThanOptions {
		return Object.assign(Signal.getDefaults(), {
			value: 0,
		});
	}

	dispose(): this {
		super.dispose();
		this._gtz.dispose();
		this._subtract.dispose();
		this.comparator.dispose();
		return this;
	}
}
