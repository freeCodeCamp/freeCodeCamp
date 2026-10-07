import { Param } from "../../core/context/Param.js";
import {
	InputNode,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Frequency, NormalRange, Time } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { RecursivePartial } from "../../core/util/Interface.js";
import { FeedbackCombFilter } from "./FeedbackCombFilter.js";
import { OnePoleFilter } from "./OnePoleFilter.js";

interface LowpassCombFilterOptions extends ToneAudioNodeOptions {
	delayTime: Time;
	resonance: NormalRange;
	dampening: Frequency;
}

/**
 * A lowpass feedback comb filter. It is similar to
 * {@link FeedbackCombFilter}, but includes a lowpass filter.
 * @category Component
 */
export class LowpassCombFilter extends ToneAudioNode<LowpassCombFilterOptions> {
	readonly name = "LowpassCombFilter";

	/**
	 * The delay node
	 */
	private _combFilter: FeedbackCombFilter;

	/**
	 * The lowpass filter
	 */
	private _lowpass: OnePoleFilter;

	/**
	 * The delayTime of the comb filter.
	 */
	readonly delayTime: Param<"time">;

	/**
	 * The amount of feedback of the delayed signal.
	 */
	readonly resonance: Param<"normalRange">;

	readonly input: InputNode;
	readonly output: OutputNode;

	/**
	 * @param delayTime The delay time of the comb filter
	 * @param resonance The resonance (feedback) of the comb filter
	 * @param dampening The cutoff of the lowpass filter dampens the signal as it is fedback.
	 */
	constructor(
		delayTime?: Time,
		resonance?: NormalRange,
		dampening?: Frequency
	);
	constructor(options?: RecursivePartial<LowpassCombFilterOptions>);
	constructor() {
		const options = optionsFromArguments(
			LowpassCombFilter.getDefaults(),
			arguments,
			["delayTime", "resonance", "dampening"]
		);
		super(options);

		this._combFilter = this.output = new FeedbackCombFilter({
			context: this.context,
			delayTime: options.delayTime,
			resonance: options.resonance,
		});
		this.delayTime = this._combFilter.delayTime;
		this.resonance = this._combFilter.resonance;

		this._lowpass = this.input = new OnePoleFilter({
			context: this.context,
			frequency: options.dampening,
			type: "lowpass",
		});

		// connections
		this._lowpass.connect(this._combFilter);
	}

	static getDefaults(): LowpassCombFilterOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			dampening: 3000,
			delayTime: 0.1,
			resonance: 0.5,
		});
	}

	/**
	 * The dampening control of the feedback
	 */
	get dampening(): Frequency {
		return this._lowpass.frequency;
	}
	set dampening(fq) {
		this._lowpass.frequency = fq;
	}

	dispose(): this {
		super.dispose();
		this._combFilter.dispose();
		this._lowpass.dispose();
		return this;
	}
}
