import { SignalOperator, SignalOperatorOptions } from "./SignalOperator.js";
import { Multiply } from "./Multiply.js";
import { ToneAudioNode } from "../core/context/ToneAudioNode.js";
import { WaveShaper } from "./WaveShaper.js";
import { optionsFromArguments } from "../core/util/Defaults.js";

export type GreaterThanZeroOptions = SignalOperatorOptions;

/**
 * GreaterThanZero outputs 1 when the input is strictly greater than zero
 * @example
 * return Tone.Offline(() => {
 * 	const gt0 = new Tone.GreaterThanZero().toDestination();
 * 	const sig = new Tone.Signal(0.5).connect(gt0);
 * 	sig.setValueAtTime(-1, 0.05);
 * }, 0.1, 1);
 * @category Signal
 */
export class GreaterThanZero extends SignalOperator<GreaterThanZeroOptions> {
	readonly name: string = "GreaterThanZero";

	/**
	 * The waveshaper
	 */
	private _thresh: WaveShaper;

	/**
	 * Scale the first thresholded signal by a large value.
	 * this will help with values which are very close to 0
	 */
	private _scale: Multiply;

	readonly output: ToneAudioNode;
	readonly input: ToneAudioNode;

	constructor(options?: Partial<GreaterThanZeroOptions>);
	constructor() {
		super(optionsFromArguments(GreaterThanZero.getDefaults(), arguments));

		this._thresh = this.output = new WaveShaper({
			context: this.context,
			length: 127,
			mapping: (val) => {
				if (val <= 0) {
					return 0;
				} else {
					return 1;
				}
			},
		});
		this._scale = this.input = new Multiply({
			context: this.context,
			value: 10000,
		});

		// connections
		this._scale.connect(this._thresh);
	}

	dispose(): this {
		super.dispose();
		this._scale.dispose();
		this._thresh.dispose();
		return this;
	}
}
