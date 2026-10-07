import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";

interface SplitOptions extends ToneAudioNodeOptions {
	channels: number;
}

/**
 * Split splits an incoming signal into the number of given channels.
 *
 * @example
 * const split = new Tone.Split();
 * // stereoSignal.connect(split);
 * @category Component
 */
export class Split extends ToneAudioNode<SplitOptions> {
	readonly name: string = "Split";

	/**
	 * The splitting node
	 */
	private _splitter: ChannelSplitterNode;

	readonly input: ChannelSplitterNode;
	readonly output: ChannelSplitterNode;

	/**
	 * @param channels The number of channels to merge.
	 */
	constructor(channels?: number);
	constructor(options?: Partial<SplitOptions>);
	constructor() {
		const options = optionsFromArguments(Split.getDefaults(), arguments, [
			"channels",
		]);
		super(options);

		this._splitter =
			this.input =
			this.output =
				this.context.createChannelSplitter(options.channels);
		this._internalChannels = [this._splitter];
	}

	static getDefaults(): SplitOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			channels: 2,
		});
	}

	dispose(): this {
		super.dispose();
		this._splitter.disconnect();
		return this;
	}
}
