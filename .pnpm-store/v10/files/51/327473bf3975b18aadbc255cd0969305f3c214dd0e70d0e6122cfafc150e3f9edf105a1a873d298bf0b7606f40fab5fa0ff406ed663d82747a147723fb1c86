import { Gain } from "../../core/context/Gain.js";
import {
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Merge } from "./Merge.js";

export type MonoOptions = ToneAudioNodeOptions;

/**
 * Mono coerces the incoming mono or stereo signal into a mono signal
 * where both left and right channels have the same value. This can be useful
 * for [stereo imaging](https://en.wikipedia.org/wiki/Stereo_imaging).
 * @category Component
 */
export class Mono extends ToneAudioNode<MonoOptions> {
	readonly name: string = "Mono";

	/**
	 * merge the signal
	 */
	private _merge: Merge;

	/**
	 * The summed output of the multiple inputs
	 */
	readonly output: OutputNode;

	/**
	 * The stereo signal to sum to mono
	 */
	readonly input: Gain;

	constructor(options?: Partial<MonoOptions>);
	constructor() {
		super(optionsFromArguments(Mono.getDefaults(), arguments));

		this.input = new Gain({ context: this.context });

		this._merge = this.output = new Merge({
			channels: 2,
			context: this.context,
		});

		this.input.connect(this._merge, 0, 0);
		this.input.connect(this._merge, 0, 1);
	}

	dispose(): this {
		super.dispose();
		this._merge.dispose();
		this.input.dispose();
		return this;
	}
}
