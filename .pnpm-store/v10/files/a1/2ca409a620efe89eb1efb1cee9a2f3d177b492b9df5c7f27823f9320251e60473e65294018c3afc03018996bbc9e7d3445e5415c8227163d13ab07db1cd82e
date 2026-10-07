import { Interval, Seconds, Time } from "../core/type/Units.js";
import { FeedbackEffect, FeedbackEffectOptions } from "./FeedbackEffect.js";
import { optionsFromArguments } from "../core/util/Defaults.js";
import { LFO } from "../source/oscillator/LFO.js";
import { Delay } from "../core/context/Delay.js";
import { CrossFade } from "../component/channel/CrossFade.js";
import { Signal } from "../signal/Signal.js";
import { readOnly } from "../core/util/Interface.js";
import { Param } from "../core/context/Param.js";
import { intervalToFrequencyRatio } from "../core/type/Conversions.js";

export interface PitchShiftOptions extends FeedbackEffectOptions {
	pitch: Interval;
	windowSize: Seconds;
	delayTime: Time;
}

/**
 * PitchShift does near-realtime pitch shifting to the incoming signal.
 * The effect is achieved by speeding up or slowing down the delayTime
 * of a DelayNode using a sawtooth wave.
 * Algorithm found in [this pdf](http://dsp-book.narod.ru/soundproc.pdf).
 * Additional reference by [Miller Pucket](http://msp.ucsd.edu/techniques/v0.11/book-html/node115.html).
 * @category Effect
 */
export class PitchShift extends FeedbackEffect<PitchShiftOptions> {
	readonly name: string = "PitchShift";

	/**
	 * The pitch signal
	 */
	private _frequency: Signal<"frequency">;

	/**
	 * Uses two DelayNodes to cover up the jump in the sawtooth wave.
	 */
	private _delayA: Delay;

	/**
	 * The first LFO.
	 */
	private _lfoA: LFO;

	/**
	 * The second DelayNode
	 */
	private _delayB: Delay;

	/**
	 * The second LFO.
	 */
	private _lfoB: LFO;

	/**
	 * Cross fade quickly between the two delay lines to cover up the jump in the sawtooth wave
	 */
	private _crossFade: CrossFade;

	/**
	 * LFO which alternates between the two delay lines to cover up the disparity in the
	 * sawtooth wave.
	 */
	private _crossFadeLFO: LFO;

	/**
	 * The delay node
	 */
	private _feedbackDelay: Delay;

	/**
	 * The amount of delay on the input signal
	 */
	readonly delayTime: Param<"time">;

	/**
	 * Hold the current pitch
	 */
	private _pitch: Interval;

	/**
	 * Hold the current windowSize
	 */
	private _windowSize;

	/**
	 * @param pitch The interval to transpose the incoming signal by.
	 */
	constructor(pitch?: Interval);
	constructor(options?: Partial<PitchShiftOptions>);
	constructor() {
		const options = optionsFromArguments(
			PitchShift.getDefaults(),
			arguments,
			["pitch"]
		);
		super(options);

		this._frequency = new Signal({ context: this.context });
		this._delayA = new Delay({
			maxDelay: 1,
			context: this.context,
		});
		this._lfoA = new LFO({
			context: this.context,
			min: 0,
			max: 0.1,
			type: "sawtooth",
		}).connect(this._delayA.delayTime);
		this._delayB = new Delay({
			maxDelay: 1,
			context: this.context,
		});
		this._lfoB = new LFO({
			context: this.context,
			min: 0,
			max: 0.1,
			type: "sawtooth",
			phase: 180,
		}).connect(this._delayB.delayTime);
		this._crossFade = new CrossFade({ context: this.context });
		this._crossFadeLFO = new LFO({
			context: this.context,
			min: 0,
			max: 1,
			type: "triangle",
			phase: 90,
		}).connect(this._crossFade.fade);
		this._feedbackDelay = new Delay({
			delayTime: options.delayTime,
			context: this.context,
		});
		this.delayTime = this._feedbackDelay.delayTime;
		readOnly(this, "delayTime");
		this._pitch = options.pitch;

		this._windowSize = options.windowSize;

		// connect the two delay lines up
		this._delayA.connect(this._crossFade.a);
		this._delayB.connect(this._crossFade.b);
		// connect the frequency
		this._frequency.fan(
			this._lfoA.frequency,
			this._lfoB.frequency,
			this._crossFadeLFO.frequency
		);
		// route the input
		this.effectSend.fan(this._delayA, this._delayB);
		this._crossFade.chain(this._feedbackDelay, this.effectReturn);
		// start the LFOs at the same time
		const now = this.now();
		this._lfoA.start(now);
		this._lfoB.start(now);
		this._crossFadeLFO.start(now);
		// set the initial value
		this.windowSize = this._windowSize;
	}

	static getDefaults(): PitchShiftOptions {
		return Object.assign(FeedbackEffect.getDefaults(), {
			pitch: 0,
			windowSize: 0.1,
			delayTime: 0,
			feedback: 0,
		});
	}

	/**
	 * Repitch the incoming signal by some interval (measured in semi-tones).
	 * @example
	 * const pitchShift = new Tone.PitchShift().toDestination();
	 * const osc = new Tone.Oscillator().connect(pitchShift).start().toDestination();
	 * pitchShift.pitch = -12; // down one octave
	 * pitchShift.pitch = 7; // up a fifth
	 */
	get pitch() {
		return this._pitch;
	}
	set pitch(interval) {
		this._pitch = interval;
		let factor = 0;
		if (interval < 0) {
			this._lfoA.min = 0;
			this._lfoA.max = this._windowSize;
			this._lfoB.min = 0;
			this._lfoB.max = this._windowSize;
			factor = intervalToFrequencyRatio(interval - 1) + 1;
		} else {
			this._lfoA.min = this._windowSize;
			this._lfoA.max = 0;
			this._lfoB.min = this._windowSize;
			this._lfoB.max = 0;
			factor = intervalToFrequencyRatio(interval) - 1;
		}
		this._frequency.value = factor * (1.2 / this._windowSize);
	}

	/**
	 * The window size corresponds roughly to the sample length in a looping sampler.
	 * Smaller values are desirable for a less noticeable delay time of the pitch shifted
	 * signal, but larger values will result in smoother pitch shifting for larger intervals.
	 * A nominal range of 0.03 to 0.1 is recommended.
	 */
	get windowSize(): Seconds {
		return this._windowSize;
	}
	set windowSize(size) {
		this._windowSize = this.toSeconds(size);
		this.pitch = this._pitch;
	}

	dispose(): this {
		super.dispose();
		this._frequency.dispose();
		this._delayA.dispose();
		this._delayB.dispose();
		this._lfoA.dispose();
		this._lfoB.dispose();
		this._crossFade.dispose();
		this._crossFadeLFO.dispose();
		this._feedbackDelay.dispose();
		return this;
	}
}
