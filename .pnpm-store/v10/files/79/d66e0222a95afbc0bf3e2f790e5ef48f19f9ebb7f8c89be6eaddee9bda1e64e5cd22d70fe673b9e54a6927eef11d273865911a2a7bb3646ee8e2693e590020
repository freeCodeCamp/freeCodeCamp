import { Gain } from "../../core/context/Gain.js";
import {
	connect,
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../../core/context/ToneAudioNode.js";
import { NormalRange } from "../../core/type/Units.js";
import { optionsFromArguments } from "../../core/util/Defaults.js";
import { readOnly } from "../../core/util/Interface.js";
import { GainToAudio } from "../../signal/GainToAudio.js";
import { Signal } from "../../signal/Signal.js";

interface CrossFadeOptions extends ToneAudioNodeOptions {
	fade: NormalRange;
}

/**
 * Tone.Crossfade provides equal power fading between two inputs.
 * More on crossfading technique [here](https://en.wikipedia.org/wiki/Fade_(audio_engineering)#Crossfading).
 * ```
 *                                             +---------+
 *                                            +> input a +>--+
 * +-----------+   +---------------------+     |         |   |
 * | 1s signal +>--> stereoPannerNode  L +>----> gain    |   |
 * +-----------+   |                     |     +---------+   |
 *               +-> pan               R +>-+                |   +--------+
 *               | +---------------------+  |                +---> output +>
 *  +------+     |                          |  +---------+   |   +--------+
 *  | fade +>----+                          | +> input b +>--+
 *  +------+                                |  |         |
 *                                          +--> gain    |
 *                                             +---------+
 * ```
 * @example
 * const crossFade = new Tone.CrossFade().toDestination();
 * // connect two inputs Tone.to a/b
 * const inputA = new Tone.Oscillator(440, "square").connect(crossFade.a).start();
 * const inputB = new Tone.Oscillator(440, "sine").connect(crossFade.b).start();
 * // use the fade to control the mix between the two
 * crossFade.fade.value = 0.5;
 * @category Component
 */
export class CrossFade extends ToneAudioNode<CrossFadeOptions> {
	readonly name: string = "CrossFade";

	/**
	 * The crossfading is done by a StereoPannerNode
	 */
	private _panner: StereoPannerNode = this.context.createStereoPanner();

	/**
	 * Split the output of the panner node into two values used to control the gains.
	 */
	private _split: ChannelSplitterNode = this.context.createChannelSplitter(2);

	/**
	 * Convert the fade value into an audio range value so it can be connected
	 * to the panner.pan AudioParam
	 */
	private _g2a: GainToAudio = new GainToAudio({ context: this.context });

	/**
	 * The input which is at full level when fade = 0
	 */
	readonly a: Gain = new Gain({
		context: this.context,
		gain: 0,
	});

	/**
	 * The input which is at full level when fade = 1
	 */
	readonly b: Gain = new Gain({
		context: this.context,
		gain: 0,
	});

	/**
	 * The output is a mix between `a` and `b` at the ratio of `fade`
	 */
	readonly output: Gain = new Gain({ context: this.context });

	/**
	 * CrossFade has no input, you must choose either `a` or `b`
	 */
	readonly input: undefined;

	/**
	 * The mix between the two inputs. A fade value of 0
	 * will output 100% crossFade.a and
	 * a value of 1 will output 100% crossFade.b.
	 */
	readonly fade: Signal<"normalRange">;

	protected _internalChannels = [this.a, this.b];

	/**
	 * @param fade The initial fade value [0, 1].
	 */
	constructor(fade?: NormalRange);
	constructor(options?: Partial<CrossFadeOptions>);
	constructor() {
		const options = optionsFromArguments(
			CrossFade.getDefaults(),
			arguments,
			["fade"]
		);
		super(options);

		this.fade = new Signal({
			context: this.context,
			units: "normalRange",
			value: options.fade,
		});
		readOnly(this, "fade");

		this.context.getConstant(1).connect(this._panner);
		this._panner.connect(this._split);
		// this is necessary for standardized-audio-context
		// doesn't make any difference for the native AudioContext
		// https://github.com/chrisguttandin/standardized-audio-context/issues/647
		this._panner.channelCount = 1;
		this._panner.channelCountMode = "explicit";
		connect(this._split, this.a.gain, 0);
		connect(this._split, this.b.gain, 1);

		this.fade.chain(this._g2a, this._panner.pan);

		this.a.connect(this.output);
		this.b.connect(this.output);
	}

	static getDefaults(): CrossFadeOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			fade: 0.5,
		});
	}

	dispose(): this {
		super.dispose();
		this.a.dispose();
		this.b.dispose();
		this.output.dispose();
		this.fade.dispose();
		this._g2a.dispose();
		this._panner.disconnect();
		this._split.disconnect();
		return this;
	}
}
