import { Scale, ScaleOptions } from "./Scale.js";
import { Positive } from "../core/type/Units.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { Pow } from "./Pow.js";

export interface ScaleExpOptions extends ScaleOptions {
	exponent: Positive;
}

/**
 * Performs an exponential scaling on an input signal.
 * Scales a NormalRange value [0,1] exponentially
 * to the output range of outputMin to outputMax.
 * @example
 * const scaleExp = new Tone.ScaleExp(0, 100, 2);
 * const signal = new Tone.Signal(0.5).connect(scaleExp);
 * @category Signal
 */
export class ScaleExp extends Scale<ScaleExpOptions> {
	readonly name: string = "ScaleExp";

	/**
	 * The exponent scaler
	 */
	private _exp: Pow;

	/**
	 * @param min The output value when the input is 0.
	 * @param max The output value when the input is 1.
	 * @param exponent The exponent which scales the incoming signal.
	 */
	constructor(min?: number, max?: number, exponent?: number);
	constructor(options?: Partial<ScaleExpOptions>);
	constructor() {
		const options = optionsFromArguments(
			ScaleExp.getDefaults(),
			arguments,
			["min", "max", "exponent"]
		);
		super(options);

		this.input = this._exp = new Pow({
			context: this.context,
			value: options.exponent,
		});
		this._exp.connect(this._mult);
	}

	static getDefaults(): ScaleExpOptions {
		return Object.assign(Scale.getDefaults(), {
			exponent: 1,
		});
	}

	/**
	 * Instead of interpolating linearly between the {@link min} and
	 * {@link max} values, setting the exponent will interpolate between
	 * the two values with an exponential curve.
	 */
	get exponent(): Positive {
		return this._exp.value;
	}
	set exponent(exp) {
		this._exp.value = exp;
	}

	dispose(): this {
		super.dispose();
		this._exp.dispose();
		return this;
	}
}
