import { Param } from "../../core/context/Param.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Decibels, Positive, Time } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";

export interface CompressorOptions extends ToneAudioNodeOptions {
	attack: Time;
	knee: Decibels;
	ratio: Positive;
	release: Time;
	threshold: Decibels;
}

/**
 * Compressor is a thin wrapper around the Web Audio
 * [DynamicsCompressorNode](http://webaudio.github.io/web-audio-api/#the-dynamicscompressornode-interface).
 * Compression reduces the volume of loud sounds or amplifies quiet sounds
 * by narrowing or "compressing" an audio signal's dynamic range.
 * Read more on [Wikipedia](https://en.wikipedia.org/wiki/Dynamic_range_compression).
 * @example
 * const comp = new Tone.Compressor(-30, 3);
 * @category Component
 */
export class Compressor extends ToneAudioNode<CompressorOptions> {
	readonly name: string = "Compressor";

	/**
	 * the compressor node
	 */
	private _compressor: DynamicsCompressorNode =
		this.context.createDynamicsCompressor();
	readonly input = this._compressor;
	readonly output = this._compressor;

	/**
	 * The decibel value above which the compression will start taking effect.
	 * @min -100
	 * @max 0
	 */
	readonly threshold: Param<"decibels">;

	/**
	 * The amount of time (in seconds) to reduce the gain by 10dB.
	 * @min 0
	 * @max 1
	 */
	readonly attack: Param<"time">;

	/**
	 * The amount of time (in seconds) to increase the gain by 10dB.
	 * @min 0
	 * @max 1
	 */
	readonly release: Param<"time">;

	/**
	 * A decibel value representing the range above the threshold where the
	 * curve smoothly transitions to the "ratio" portion.
	 * @min 0
	 * @max 40
	 */
	readonly knee: Param<"decibels">;

	/**
	 * The amount of dB change in input for a 1 dB change in output.
	 * @min 1
	 * @max 20
	 */
	readonly ratio: Param<"positive">;

	/**
	 * @param threshold The value above which the compression starts to be applied.
	 * @param ratio The gain reduction ratio.
	 */
	constructor(threshold?: Decibels, ratio?: Positive);
	constructor(options?: Partial<CompressorOptions>);
	constructor() {
		const options = optionsFromArguments(
			Compressor.getDefaults(),
			arguments,
			["threshold", "ratio"]
		);
		super(options);

		this.threshold = new Param({
			minValue: this._compressor.threshold.minValue,
			maxValue: this._compressor.threshold.maxValue,
			context: this.context,
			convert: false,
			param: this._compressor.threshold,
			units: "decibels",
			value: options.threshold,
		});

		this.attack = new Param({
			minValue: this._compressor.attack.minValue,
			maxValue: this._compressor.attack.maxValue,
			context: this.context,
			param: this._compressor.attack,
			units: "time",
			value: options.attack,
		});

		this.release = new Param({
			minValue: this._compressor.release.minValue,
			maxValue: this._compressor.release.maxValue,
			context: this.context,
			param: this._compressor.release,
			units: "time",
			value: options.release,
		});

		this.knee = new Param({
			minValue: this._compressor.knee.minValue,
			maxValue: this._compressor.knee.maxValue,
			context: this.context,
			convert: false,
			param: this._compressor.knee,
			units: "decibels",
			value: options.knee,
		});

		this.ratio = new Param({
			minValue: this._compressor.ratio.minValue,
			maxValue: this._compressor.ratio.maxValue,
			context: this.context,
			convert: false,
			param: this._compressor.ratio,
			units: "positive",
			value: options.ratio,
		});

		// set the defaults
		readOnly(this, ["knee", "release", "attack", "ratio", "threshold"]);
	}

	static getDefaults(): CompressorOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			attack: 0.003,
			knee: 30,
			ratio: 12,
			release: 0.25,
			threshold: -24,
		});
	}

	/**
	 * A read-only decibel value for metering purposes, representing the current amount of gain
	 * reduction that the compressor is applying to the signal. If fed no signal the value will be 0 (no gain reduction).
	 */
	get reduction(): Decibels {
		return this._compressor.reduction;
	}

	dispose(): this {
		super.dispose();
		this._compressor.disconnect();
		this.attack.dispose();
		this.release.dispose();
		this.threshold.dispose();
		this.ratio.dispose();
		this.knee.dispose();
		return this;
	}
}
