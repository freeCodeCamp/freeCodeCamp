import {
	InputNode,
	OutputNode,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { Analyser } from "./Analyser.js";

export type MeterBaseOptions = ToneAudioNodeOptions;

/**
 * The base class for Metering classes.
 */
export class MeterBase<
	Options extends MeterBaseOptions,
> extends ToneAudioNode<Options> {
	readonly name: string = "MeterBase";

	/**
	 * The signal to be analysed
	 */
	input: InputNode;

	/**
	 * The output is just a pass through of the input
	 */
	output: OutputNode;

	/**
	 * The analyser node for the incoming signal
	 */
	protected _analyser: Analyser;

	constructor(options?: Partial<MeterBaseOptions>);
	constructor() {
		super(optionsFromArguments(MeterBase.getDefaults(), arguments));

		this.input =
			this.output =
			this._analyser =
				new Analyser({
					context: this.context,
					size: 256,
					type: "waveform",
				});
	}

	dispose(): this {
		super.dispose();
		this._analyser.dispose();
		return this;
	}
}
