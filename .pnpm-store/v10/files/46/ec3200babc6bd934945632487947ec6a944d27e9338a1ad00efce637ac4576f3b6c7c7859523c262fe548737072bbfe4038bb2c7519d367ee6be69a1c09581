import {
	StereoFeedbackEffect,
	StereoFeedbackEffectOptions,
} from "../effect/StereoFeedbackEffect.js";
import {
	Degrees,
	Frequency,
	Milliseconds,
	NormalRange,
	Seconds,
	Time,
} from "../core/type/Units.js";
import { ToneOscillatorType } from "../source/oscillator/OscillatorInterface.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { LFO } from "../source/oscillator/LFO.js";
import { Delay } from "../core/context/Delay.js";
import { Signal } from "../signal/Signal.js";
import { readOnly } from "../core/util/Interface.js";

export interface ChorusOptions extends StereoFeedbackEffectOptions {
	frequency: Frequency;
	delayTime: Milliseconds;
	depth: NormalRange;
	type: ToneOscillatorType;
	spread: Degrees;
}

/**
 * Chorus is a stereo chorus effect composed of a left and right delay with an {@link LFO} applied to the delayTime of each channel.
 * When {@link feedback} is set to a value larger than 0, you also get Flanger-type effects.
 * Inspiration from [Tuna.js](https://github.com/Dinahmoe/tuna/blob/master/tuna.js).
 * Read more on the chorus effect on [Sound On Sound](http://www.soundonsound.com/sos/jun04/articles/synthsecrets.htm).
 *
 * @example
 * const chorus = new Tone.Chorus(4, 2.5, 0.5).toDestination().start();
 * const synth = new Tone.PolySynth().connect(chorus);
 * synth.triggerAttackRelease(["C3", "E3", "G3"], "8n");
 *
 * @category Effect
 */
export class Chorus extends StereoFeedbackEffect<ChorusOptions> {
	readonly name: string = "Chorus";

	/**
	 * the depth of the chorus
	 */
	private _depth: NormalRange;

	/**
	 * the delayTime in seconds.
	 */
	private _delayTime: Seconds;

	/**
	 * the lfo which controls the delayTime
	 */
	private _lfoL: LFO;

	/**
	 * another LFO for the right side with a 180 degree phase diff
	 */
	private _lfoR: LFO;

	/**
	 * delay for left
	 */
	private _delayNodeL: Delay;

	/**
	 * delay for right
	 */
	private _delayNodeR: Delay;

	/**
	 * The frequency of the LFO which modulates the delayTime.
	 */
	readonly frequency: Signal<"frequency">;

	/**
	 * @param frequency The frequency of the LFO.
	 * @param delayTime The delay of the chorus effect in ms.
	 * @param depth The depth of the chorus.
	 */
	constructor(
		frequency?: Frequency,
		delayTime?: Milliseconds,
		depth?: NormalRange
	);
	constructor(options?: Partial<ChorusOptions>);
	constructor() {
		const options = optionsFromArguments(Chorus.getDefaults(), arguments, [
			"frequency",
			"delayTime",
			"depth",
		]);
		super(options);

		this._depth = options.depth;
		this._delayTime = options.delayTime / 1000;
		this._lfoL = new LFO({
			context: this.context,
			frequency: options.frequency,
			min: 0,
			max: 1,
		});
		this._lfoR = new LFO({
			context: this.context,
			frequency: options.frequency,
			min: 0,
			max: 1,
			phase: 180,
		});
		this._delayNodeL = new Delay({ context: this.context });
		this._delayNodeR = new Delay({ context: this.context });
		this.frequency = this._lfoL.frequency;
		readOnly(this, ["frequency"]);
		// have one LFO frequency control the other
		this._lfoL.frequency.connect(this._lfoR.frequency);

		// connections
		this.connectEffectLeft(this._delayNodeL);
		this.connectEffectRight(this._delayNodeR);
		// lfo setup
		this._lfoL.connect(this._delayNodeL.delayTime);
		this._lfoR.connect(this._delayNodeR.delayTime);
		// set the initial values
		this.depth = this._depth;
		this.type = options.type;
		this.spread = options.spread;
	}

	static getDefaults(): ChorusOptions {
		return Object.assign(StereoFeedbackEffect.getDefaults(), {
			frequency: 1.5,
			delayTime: 3.5,
			depth: 0.7,
			type: "sine" as const,
			spread: 180,
			feedback: 0,
			wet: 0.5,
		});
	}

	/**
	 * The depth of the effect. A depth of 1 makes the delayTime
	 * modulate between 0 and 2*delayTime (centered around the delayTime).
	 */
	get depth(): NormalRange {
		return this._depth;
	}
	set depth(depth) {
		this._depth = depth;
		const deviation = this._delayTime * depth;
		this._lfoL.min = Math.max(this._delayTime - deviation, 0);
		this._lfoL.max = this._delayTime + deviation;
		this._lfoR.min = Math.max(this._delayTime - deviation, 0);
		this._lfoR.max = this._delayTime + deviation;
	}

	/**
	 * The delayTime in milliseconds of the chorus. A larger delayTime
	 * will give a more pronounced effect. Nominal range a delayTime
	 * is between 2 and 20ms.
	 */
	get delayTime(): Milliseconds {
		return this._delayTime * 1000;
	}
	set delayTime(delayTime) {
		this._delayTime = delayTime / 1000;
		this.depth = this._depth;
	}

	/**
	 * The oscillator type of the LFO.
	 */
	get type(): ToneOscillatorType {
		return this._lfoL.type;
	}
	set type(type) {
		this._lfoL.type = type;
		this._lfoR.type = type;
	}

	/**
	 * Amount of stereo spread. When set to 0, both LFO's will be panned centrally.
	 * When set to 180, LFO's will be panned hard left and right respectively.
	 */
	get spread(): Degrees {
		return this._lfoR.phase - this._lfoL.phase;
	}
	set spread(spread) {
		this._lfoL.phase = 90 - spread / 2;
		this._lfoR.phase = spread / 2 + 90;
	}

	/**
	 * Start the effect.
	 */
	start(time?: Time): this {
		this._lfoL.start(time);
		this._lfoR.start(time);
		return this;
	}

	/**
	 * Stop the lfo
	 */
	stop(time?: Time): this {
		this._lfoL.stop(time);
		this._lfoR.stop(time);
		return this;
	}

	/**
	 * Sync the filter to the transport.
	 * @see {@link LFO.sync}
	 */
	sync(): this {
		this._lfoL.sync();
		this._lfoR.sync();
		return this;
	}

	/**
	 * Unsync the filter from the transport.
	 */
	unsync(): this {
		this._lfoL.unsync();
		this._lfoR.unsync();
		return this;
	}

	dispose(): this {
		super.dispose();
		this._lfoL.dispose();
		this._lfoR.dispose();
		this._delayNodeL.dispose();
		this._delayNodeR.dispose();
		this.frequency.dispose();
		return this;
	}
}
