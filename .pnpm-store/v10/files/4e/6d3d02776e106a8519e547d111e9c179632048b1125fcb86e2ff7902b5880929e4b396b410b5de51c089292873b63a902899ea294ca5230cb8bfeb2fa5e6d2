import {
	InputNode,
	OutputNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Add } from "./Add.js";
import { Multiply } from "./Multiply.js";
import { SignalOperator } from "./SignalOperator.js";

export interface ScaleOptions extends ToneAudioNodeOptions {
	min: number;
	max: number;
}

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
export class Scale<
	Options extends ScaleOptions = ScaleOptions,
> extends SignalOperator<Options> {
	readonly name: string = "Scale";

	input: InputNode;
	output: OutputNode;

	/**
	 * Hold the multiple
	 */
	protected _mult: Multiply;

	/**
	 * Hold the adder
	 */
	protected _add: Add;

	/**
	 * Private reference to the min value
	 */
	private _min: number;

	/**
	 * Private reference to the max value
	 */
	private _max: number;

	/**
	 * @param min The output value when the input is 0.
	 * @param max The output value when the input is 1.
	 */
	constructor(min?: number, max?: number);
	constructor(options?: Partial<ScaleOptions>);
	constructor() {
		const options = optionsFromArguments(Scale.getDefaults(), arguments, [
			"min",
			"max",
		]);
		super(options as Options);

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

	static getDefaults(): ScaleOptions {
		return Object.assign(SignalOperator.getDefaults(), {
			max: 1,
			min: 0,
		});
	}

	/**
	 * The minimum output value. This number is output when the value input value is 0.
	 */
	get min(): number {
		return this._min;
	}
	set min(min) {
		this._min = min;
		this._setRange();
	}

	/**
	 * The maximum output value. This number is output when the value input value is 1.
	 */
	get max(): number {
		return this._max;
	}
	set max(max) {
		this._max = max;
		this._setRange();
	}

	/**
	 * set the values
	 */
	private _setRange(): void {
		this._add.value = this._min;
		this._mult.value = this._max - this._min;
	}

	dispose(): this {
		super.dispose();
		this._add.dispose();
		this._mult.dispose();
		return this;
	}
}
