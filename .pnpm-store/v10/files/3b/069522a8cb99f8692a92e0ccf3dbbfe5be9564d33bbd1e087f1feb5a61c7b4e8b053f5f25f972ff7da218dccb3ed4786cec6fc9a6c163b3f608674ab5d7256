import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { SignalOperator } from "./SignalOperator.js";
import { WaveShaper } from "./WaveShaper.js";

/**
 * AudioToGain converts an input in AudioRange [-1,1] to NormalRange [0,1].
 * @see {@link GainToAudio}.
 * @category Signal
 */
export class AudioToGain extends SignalOperator<ToneAudioNodeOptions> {
	readonly name: string = "AudioToGain";

	/**
	 * The node which converts the audio ranges
	 */
	private _norm = new WaveShaper({
		context: this.context,
		mapping: (x) => (x + 1) / 2,
	});

	/**
	 * The AudioRange input [-1, 1]
	 */
	input = this._norm;

	/**
	 * The GainRange output [0, 1]
	 */
	output = this._norm;

	/**
	 * clean up
	 */
	dispose(): this {
		super.dispose();
		this._norm.dispose();
		return this;
	}
}
