import {
	InputNode,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { Compressor, CompressorOptions } from "./Compressor.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { MidSideSplit } from "../channel/MidSideSplit.js";
import { MidSideMerge } from "../channel/MidSideMerge.js";
import { readOnly, RecursivePartial } from "../../core/util/Interface.js";

export interface MidSideCompressorOptions extends ToneAudioNodeOptions {
	mid: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
	side: Omit<CompressorOptions, keyof ToneAudioNodeOptions>;
}

/**
 * MidSideCompressor applies two different compressors to the {@link mid}
 * and {@link side} signal components of the input.
 * @see {@link MidSideSplit} and {@link MidSideMerge}.
 * @category Component
 */
export class MidSideCompressor extends ToneAudioNode<MidSideCompressorOptions> {
	readonly name: string = "MidSideCompressor";

	readonly input: InputNode;
	readonly output: OutputNode;

	/**
	 * Split the incoming signal into Mid/Side
	 */
	private _midSideSplit: MidSideSplit;

	/**
	 * Merge the compressed signal back into a single stream
	 */
	private _midSideMerge: MidSideMerge;

	/**
	 * The compression applied to the mid signal
	 */
	readonly mid: Compressor;

	/**
	 * The compression applied to the side signal
	 */
	readonly side: Compressor;

	constructor(options?: RecursivePartial<MidSideCompressorOptions>);
	constructor() {
		const options = optionsFromArguments(
			MidSideCompressor.getDefaults(),
			arguments
		);
		super(options);

		this._midSideSplit = this.input = new MidSideSplit({
			context: this.context,
		});
		this._midSideMerge = this.output = new MidSideMerge({
			context: this.context,
		});
		this.mid = new Compressor(
			Object.assign(options.mid, { context: this.context })
		);
		this.side = new Compressor(
			Object.assign(options.side, { context: this.context })
		);

		this._midSideSplit.mid.chain(this.mid, this._midSideMerge.mid);
		this._midSideSplit.side.chain(this.side, this._midSideMerge.side);
		readOnly(this, ["mid", "side"]);
	}

	static getDefaults(): MidSideCompressorOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			mid: {
				ratio: 3,
				threshold: -24,
				release: 0.03,
				attack: 0.02,
				knee: 16,
			},
			side: {
				ratio: 6,
				threshold: -30,
				release: 0.25,
				attack: 0.03,
				knee: 10,
			},
		});
	}

	dispose(): this {
		super.dispose();
		this.mid.dispose();
		this.side.dispose();
		this._midSideSplit.dispose();
		this._midSideMerge.dispose();
		return this;
	}
}
