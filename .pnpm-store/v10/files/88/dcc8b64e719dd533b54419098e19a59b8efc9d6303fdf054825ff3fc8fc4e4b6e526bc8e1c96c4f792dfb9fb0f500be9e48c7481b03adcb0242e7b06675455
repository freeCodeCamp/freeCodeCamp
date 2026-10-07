import { Gain } from "../core/context/Gain.js";
import {
	connect,
	disconnect,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { SignalOperator } from "./SignalOperator.js";

/**
 * Tone.Zero outputs 0's at audio-rate. The reason this has to be
 * it's own class is that many browsers optimize out Tone.Signal
 * with a value of 0 and will not process nodes further down the graph.
 * @category Signal
 */
export class Zero extends SignalOperator<ToneAudioNodeOptions> {
	readonly name: string = "Zero";

	/**
	 * The gain node which connects the constant source to the output
	 */
	private _gain = new Gain({ context: this.context });

	/**
	 * Only outputs 0
	 */
	output = this._gain;

	/**
	 * no input node
	 */
	input = undefined;

	constructor(options?: Partial<ToneAudioNodeOptions>);
	constructor() {
		super(optionsFromArguments(Zero.getDefaults(), arguments));
		connect(this.context.getConstant(0), this._gain);
	}

	/**
	 * clean up
	 */
	dispose(): this {
		super.dispose();
		disconnect(this.context.getConstant(0), this._gain);
		return this;
	}
}
