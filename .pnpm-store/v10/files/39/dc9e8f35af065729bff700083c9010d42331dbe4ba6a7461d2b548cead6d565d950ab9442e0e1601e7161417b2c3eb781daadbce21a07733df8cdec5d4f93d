import { Time } from "../../core/type/Units.js";
import {
	InputNode,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { OnePoleFilter } from "../filter/OnePoleFilter.js";
import { Abs } from "../../signal/Abs.js";

export interface FollowerOptions extends ToneAudioNodeOptions {
	smoothing: Time;
}

/**
 * Follower is a simple envelope follower.
 * It's implemented by applying a lowpass filter to the absolute value of the incoming signal.
 * ```
 *          +-----+    +---------------+
 * Input +--> Abs +----> OnePoleFilter +--> Output
 *          +-----+    +---------------+
 * ```
 * @category Component
 */
export class Follower extends ToneAudioNode<FollowerOptions> {
	readonly name: string = "Follower";

	readonly input: InputNode;
	readonly output: OutputNode;

	/**
	 * Private reference to the smoothing parameter
	 */
	private _smoothing: Time;

	/**
	 * The lowpass filter
	 */
	private _lowpass: OnePoleFilter;

	/**
	 * The absolute value
	 */
	private _abs: Abs;

	/**
	 * @param smoothing The rate of change of the follower.
	 */
	constructor(smoothing?: Time);
	constructor(options?: Partial<FollowerOptions>);
	constructor() {
		const options = optionsFromArguments(
			Follower.getDefaults(),
			arguments,
			["smoothing"]
		);
		super(options);

		this._abs = this.input = new Abs({ context: this.context });
		this._lowpass = this.output = new OnePoleFilter({
			context: this.context,
			frequency: 1 / this.toSeconds(options.smoothing),
			type: "lowpass",
		});
		this._abs.connect(this._lowpass);
		this._smoothing = options.smoothing;
	}

	static getDefaults(): FollowerOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			smoothing: 0.05,
		});
	}

	/**
	 * The amount of time it takes a value change to arrive at the updated value.
	 */
	get smoothing(): Time {
		return this._smoothing;
	}
	set smoothing(smoothing) {
		this._smoothing = smoothing;
		this._lowpass.frequency = 1 / this.toSeconds(this.smoothing);
	}

	dispose(): this {
		super.dispose();
		this._abs.dispose();
		this._lowpass.dispose();
		return this;
	}
}
