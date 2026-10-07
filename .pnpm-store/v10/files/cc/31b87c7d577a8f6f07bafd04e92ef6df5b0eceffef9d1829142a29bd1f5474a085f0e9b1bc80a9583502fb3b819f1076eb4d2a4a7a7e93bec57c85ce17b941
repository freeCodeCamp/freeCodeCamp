import { Param } from "../context/Param.js";
import { Seconds, Time } from "../type/Units.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { readOnly } from "../util/Interface.js";
import { ToneAudioNode, ToneAudioNodeOptions } from "./ToneAudioNode.js";

export interface DelayOptions extends ToneAudioNodeOptions {
	delayTime: Time;
	maxDelay: Time;
}

/**
 * Wrapper around Web Audio's native [DelayNode](http://webaudio.github.io/web-audio-api/#the-delaynode-interface).
 * @category Core
 * @example
 * return Tone.Offline(() => {
 * 	const delay = new Tone.Delay(0.1).toDestination();
 * 	// connect the signal to both the delay and the destination
 * 	const pulse = new Tone.PulseOscillator().connect(delay).toDestination();
 * 	// start and stop the pulse
 * 	pulse.start(0).stop(0.01);
 * }, 0.5, 1);
 */
export class Delay extends ToneAudioNode<DelayOptions> {
	readonly name: string = "Delay";

	/**
	 * Private holder of the max delay time
	 */
	private _maxDelay: Seconds;

	/**
	 * The amount of time the incoming signal is delayed.
	 * @example
	 * const delay = new Tone.Delay().toDestination();
	 * // modulate the delayTime between 0.1 and 1 seconds
	 * const delayLFO = new Tone.LFO(0.5, 0.1, 1).start().connect(delay.delayTime);
	 * const pulse = new Tone.PulseOscillator().connect(delay).start();
	 * // the change in delayTime causes the pitch to go up and down
	 */
	readonly delayTime: Param<"time">;

	/**
	 * Private reference to the internal DelayNode
	 */
	private _delayNode: DelayNode;
	readonly input: DelayNode;
	readonly output: DelayNode;

	/**
	 * @param delayTime The delay applied to the incoming signal.
	 * @param maxDelay The maximum delay time.
	 */
	constructor(delayTime?: Time, maxDelay?: Time);
	constructor(options?: Partial<DelayOptions>);
	constructor() {
		const options = optionsFromArguments(Delay.getDefaults(), arguments, [
			"delayTime",
			"maxDelay",
		]);
		super(options);

		const maxDelayInSeconds = this.toSeconds(options.maxDelay);
		this._maxDelay = Math.max(
			maxDelayInSeconds,
			this.toSeconds(options.delayTime)
		);

		this._delayNode =
			this.input =
			this.output =
				this.context.createDelay(maxDelayInSeconds);

		this.delayTime = new Param({
			context: this.context,
			param: this._delayNode.delayTime,
			units: "time",
			value: options.delayTime,
			minValue: 0,
			maxValue: this.maxDelay,
		});

		readOnly(this, "delayTime");
	}

	static getDefaults(): DelayOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			delayTime: 0,
			maxDelay: 1,
		});
	}

	/**
	 * The maximum delay time. This cannot be changed after
	 * the value is passed into the constructor.
	 */
	get maxDelay(): Seconds {
		return this._maxDelay;
	}

	/**
	 * Clean up.
	 */
	dispose(): this {
		super.dispose();
		this._delayNode.disconnect();
		this.delayTime.dispose();
		return this;
	}
}
