import {
	InputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Compressor, CompressorOptions } from "./Compressor.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly, RecursivePartial } from "../../core/util/Interface.js";
import { Frequency } from "../../core/type/Units.js";
import { MultibandSplit } from "../channel/MultibandSplit.js";
import { Signal } from "../../signal/Signal.js";
import { Gain } from "../../core/context/Gain.js";

export interface MultibandCompressorOptions extends ToneAudioNodeOptions {
	mid: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
	low: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
	high: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
	lowFrequency: Frequency;
	highFrequency: Frequency;
}

/**
 * A compressor with separate controls over low/mid/high dynamics.
 * @see {@link Compressor} and {@link MultibandSplit}
 *
 * @example
 * const multiband = new Tone.MultibandCompressor({
 * 	lowFrequency: 200,
 * 	highFrequency: 1300,
 * 	low: {
 * 		threshold: -12
 * 	}
 * });
 * @category Component
 */
export class MultibandCompressor extends ToneAudioNode<MultibandCompressorOptions> {
	readonly name: string = "MultibandCompressor";

	readonly input: InputNode;
	readonly output: ToneAudioNode;

	/**
	 * Split the incoming signal into high/mid/low
	 */
	private _splitter: MultibandSplit;

	/**
	 * low/mid crossover frequency.
	 */
	readonly lowFrequency: Signal<"frequency">;

	/**
	 * mid/high crossover frequency.
	 */
	readonly highFrequency: Signal<"frequency">;

	/**
	 * The compressor applied to the low frequencies
	 */
	readonly low: Compressor;

	/**
	 * The compressor applied to the mid frequencies
	 */
	readonly mid: Compressor;

	/**
	 * The compressor applied to the high frequencies
	 */
	readonly high: Compressor;

	constructor(options?: RecursivePartial<MultibandCompressorOptions>);
	constructor() {
		const options = optionsFromArguments(
			MultibandCompressor.getDefaults(),
			arguments
		);
		super(options);

		this._splitter = this.input = new MultibandSplit({
			context: this.context,
			lowFrequency: options.lowFrequency,
			highFrequency: options.highFrequency,
		});
		this.lowFrequency = this._splitter.lowFrequency;
		this.highFrequency = this._splitter.highFrequency;
		this.output = new Gain({ context: this.context });
		this.low = new Compressor(
			Object.assign(options.low, { context: this.context })
		);
		this.mid = new Compressor(
			Object.assign(options.mid, { context: this.context })
		);
		this.high = new Compressor(
			Object.assign(options.high, { context: this.context })
		);

		// connect the compressor
		this._splitter.low.chain(this.low, this.output);
		this._splitter.mid.chain(this.mid, this.output);
		this._splitter.high.chain(this.high, this.output);

		readOnly(this, ["high", "mid", "low", "highFrequency", "lowFrequency"]);
	}

	static getDefaults(): MultibandCompressorOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			lowFrequency: 250,
			highFrequency: 2000,
			low: {
				ratio: 6,
				threshold: -30,
				release: 0.25,
				attack: 0.03,
				knee: 10,
			},
			mid: {
				ratio: 3,
				threshold: -24,
				release: 0.03,
				attack: 0.02,
				knee: 16,
			},
			high: {
				ratio: 3,
				threshold: -24,
				release: 0.03,
				attack: 0.02,
				knee: 16,
			},
		});
	}

	dispose(): this {
		super.dispose();
		this._splitter.dispose();
		this.low.dispose();
		this.mid.dispose();
		this.high.dispose();
		this.output.dispose();
		return this;
	}
}
