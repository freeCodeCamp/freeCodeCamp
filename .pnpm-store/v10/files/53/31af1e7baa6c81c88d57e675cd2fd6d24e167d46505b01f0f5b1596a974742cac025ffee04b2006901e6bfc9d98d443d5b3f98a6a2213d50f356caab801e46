import { Param } from "../../core/context/Param.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { AudioRange } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";

interface TonePannerOptions extends ToneAudioNodeOptions {
	pan: AudioRange;
	channelCount: number;
}

/**
 * Panner is an equal power Left/Right Panner. It is a wrapper around the StereoPannerNode.
 * @example
 * return Tone.Offline(() => {
 * // move the input signal from right to left
 * 	const panner = new Tone.Panner(1).toDestination();
 * 	panner.pan.rampTo(-1, 0.5);
 * 	const osc = new Tone.Oscillator(100).connect(panner).start();
 * }, 0.5, 2);
 * @category Component
 */
export class Panner extends ToneAudioNode<TonePannerOptions> {
	readonly name: string = "Panner";

	/**
	 * the panner node
	 */
	private _panner: StereoPannerNode = this.context.createStereoPanner();
	readonly input: StereoPannerNode = this._panner;
	readonly output: StereoPannerNode = this._panner;

	/**
	 * The pan control. -1 = hard left, 1 = hard right.
	 * @min -1
	 * @max 1
	 * @example
	 * return Tone.Offline(() => {
	 * 	// pan hard right
	 * 	const panner = new Tone.Panner(1).toDestination();
	 * 	// pan hard left
	 * 	panner.pan.setValueAtTime(-1, 0.25);
	 * 	const osc = new Tone.Oscillator(50, "triangle").connect(panner).start();
	 * }, 0.5, 2);
	 */
	readonly pan: Param<"audioRange">;

	constructor(options?: Partial<TonePannerOptions>);
	/**
	 * @param pan The initial panner value (Defaults to 0 = "center").
	 */
	constructor(pan?: AudioRange);
	constructor() {
		const options = optionsFromArguments(Panner.getDefaults(), arguments, [
			"pan",
		]);
		super(options);

		this.pan = new Param({
			context: this.context,
			param: this._panner.pan,
			value: options.pan,
			minValue: -1,
			maxValue: 1,
		});

		// this is necessary for standardized-audio-context
		// doesn't make any difference for the native AudioContext
		// https://github.com/chrisguttandin/standardized-audio-context/issues/647
		this._panner.channelCount = options.channelCount;
		this._panner.channelCountMode = "explicit";

		// initial value
		readOnly(this, "pan");
	}

	static getDefaults(): TonePannerOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			pan: 0,
			channelCount: 1,
		});
	}

	dispose(): this {
		super.dispose();
		this._panner.disconnect();
		this.pan.dispose();
		return this;
	}
}
