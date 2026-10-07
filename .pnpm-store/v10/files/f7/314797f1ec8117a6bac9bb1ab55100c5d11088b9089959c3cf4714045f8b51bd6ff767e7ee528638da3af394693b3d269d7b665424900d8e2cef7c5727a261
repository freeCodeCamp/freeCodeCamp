import { ToneAudioNodeOptions } from "../core/context/ToneAudioNode.js";
import { SignalOperator } from "./SignalOperator.js";
import { WaveShaper } from "./WaveShaper.js";

/**
 * Return the absolute value of an incoming signal.
 *
 * @example
 * return Tone.Offline(() => {
 * 	const abs = new Tone.Abs().toDestination();
 * 	const signal = new Tone.Signal(1);
 * 	signal.rampTo(-1, 0.5);
 * 	signal.connect(abs);
 * }, 0.5, 1);
 * @category Signal
 */
export class Abs extends SignalOperator<ToneAudioNodeOptions> {
	readonly name: string = "Abs";

	/**
	 * The node which converts the audio ranges
	 */
	private _abs = new WaveShaper({
		context: this.context,
		mapping: (val) => {
			if (Math.abs(val) < 0.001) {
				return 0;
			} else {
				return Math.abs(val);
			}
		},
	});

	/**
	 * The AudioRange input [-1, 1]
	 */
	input = this._abs;

	/**
	 * The output range [0, 1]
	 */
	output = this._abs;

	/**
	 * clean up
	 */
	dispose(): this {
		super.dispose();
		this._abs.dispose();
		return this;
	}
}
