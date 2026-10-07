import { Gain } from "../../core/context/Gain.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Frequency, Positive } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly, writable } from "../../core/util/Interface.js";
import { Signal } from "../../signal/Signal.js";
import { Filter } from "../filter/Filter.js";

interface MultibandSplitOptions extends ToneAudioNodeOptions {
	Q: Positive;
	lowFrequency: Frequency;
	highFrequency: Frequency;
}

/**
 * Split the incoming signal into three bands (low, mid, high)
 * with two crossover frequency controls.
 * ```
 *            +----------------------+
 *          +-> input < lowFrequency +------------------> low
 *          | +----------------------+
 *          |
 *          | +--------------------------------------+
 * input ---+-> lowFrequency < input < highFrequency +--> mid
 *          | +--------------------------------------+
 *          |
 *          | +-----------------------+
 *          +-> highFrequency < input +-----------------> high
 *            +-----------------------+
 * ```
 * @category Component
 */
export class MultibandSplit extends ToneAudioNode<MultibandSplitOptions> {
	readonly name: string = "MultibandSplit";

	/**
	 * the input
	 */
	readonly input = new Gain({ context: this.context });

	/**
	 * no output node, use either low, mid or high outputs
	 */
	readonly output = undefined;

	/**
	 * The low band.
	 */
	readonly low = new Filter({
		context: this.context,
		frequency: 0,
		type: "lowpass",
	});

	/**
	 * the lower filter of the mid band
	 */
	private _lowMidFilter = new Filter({
		context: this.context,
		frequency: 0,
		type: "highpass",
	});

	/**
	 * The mid band output.
	 */
	readonly mid = new Filter({
		context: this.context,
		frequency: 0,
		type: "lowpass",
	});

	/**
	 * The high band output.
	 */
	readonly high = new Filter({
		context: this.context,
		frequency: 0,
		type: "highpass",
	});

	/**
	 * The low/mid crossover frequency.
	 */
	readonly lowFrequency: Signal<"frequency">;

	/**
	 * The mid/high crossover frequency.
	 */
	readonly highFrequency: Signal<"frequency">;

	protected _internalChannels = [this.low, this.mid, this.high];

	/**
	 * The Q or Quality of the filter
	 */
	readonly Q: Signal<"positive">;

	/**
	 * @param lowFrequency the low/mid crossover frequency
	 * @param highFrequency the mid/high crossover frequency
	 */
	constructor(lowFrequency?: Frequency, highFrequency?: Frequency);
	constructor(options?: Partial<MultibandSplitOptions>);
	constructor() {
		const options = optionsFromArguments(
			MultibandSplit.getDefaults(),
			arguments,
			["lowFrequency", "highFrequency"]
		);
		super(options);

		this.lowFrequency = new Signal({
			context: this.context,
			units: "frequency",
			value: options.lowFrequency,
		});

		this.highFrequency = new Signal({
			context: this.context,
			units: "frequency",
			value: options.highFrequency,
		});

		this.Q = new Signal({
			context: this.context,
			units: "positive",
			value: options.Q,
		});

		this.input.fan(this.low, this.high);
		this.input.chain(this._lowMidFilter, this.mid);
		// the frequency control signal
		this.lowFrequency.fan(this.low.frequency, this._lowMidFilter.frequency);
		this.highFrequency.fan(this.mid.frequency, this.high.frequency);
		// the Q value
		this.Q.connect(this.low.Q);
		this.Q.connect(this._lowMidFilter.Q);
		this.Q.connect(this.mid.Q);
		this.Q.connect(this.high.Q);

		readOnly(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]);
	}

	static getDefaults(): MultibandSplitOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			Q: 1,
			highFrequency: 2500,
			lowFrequency: 400,
		});
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		writable(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]);
		this.low.dispose();
		this._lowMidFilter.dispose();
		this.mid.dispose();
		this.high.dispose();
		this.lowFrequency.dispose();
		this.highFrequency.dispose();
		this.Q.dispose();
		return this;
	}
}
