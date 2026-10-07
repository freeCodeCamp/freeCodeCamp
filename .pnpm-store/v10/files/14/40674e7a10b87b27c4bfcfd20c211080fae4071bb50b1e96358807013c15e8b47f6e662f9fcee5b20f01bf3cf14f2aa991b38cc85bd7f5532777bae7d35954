import { Gain } from "../core/context/Gain.js";
import {
	ToneAudioNode,
	ToneAudioNodeOptions,
} from "../core/context/ToneAudioNode.js";
import { GainFactor, Seconds, Time } from "../core/type/Units.js";
import { noOp } from "../core/util/Interface.js";
import { assert } from "../core/util/Debug.js";
import { BasicPlaybackState } from "../core/util/StateTimeline.js";

export type OneShotSourceCurve = "linear" | "exponential";

type onEndedCallback = (source: OneShotSource<any>) => void;

export interface OneShotSourceOptions extends ToneAudioNodeOptions {
	onended: onEndedCallback;
	fadeIn: Time;
	fadeOut: Time;
	curve: OneShotSourceCurve;
}

/**
 * Base class for fire-and-forget nodes
 */
export abstract class OneShotSource<
	Options extends ToneAudioNodeOptions,
> extends ToneAudioNode<Options> {
	/**
	 * The callback to invoke after the
	 * source is done playing.
	 */
	onended: onEndedCallback = noOp;

	/**
	 * Sources do not have input nodes
	 */
	input: undefined;

	/**
	 * The start time
	 */
	protected _startTime = -1;

	/**
	 * The stop time
	 */
	protected _stopTime = -1;

	/**
	 * The id of the timeout
	 */
	private _timeout = -1;

	/**
	 * The public output node
	 */
	output: Gain = new Gain({
		context: this.context,
		gain: 0,
	});

	/**
	 * The output gain node.
	 */
	protected _gainNode = this.output;

	/**
	 * The fadeIn time of the amplitude envelope.
	 */
	protected _fadeIn: Time;

	/**
	 * The fadeOut time of the amplitude envelope.
	 */
	protected _fadeOut: Time;

	/**
	 * The curve applied to the fades, either "linear" or "exponential"
	 */
	protected _curve: OneShotSourceCurve;

	constructor(options: OneShotSourceOptions) {
		super(options);

		this._fadeIn = options.fadeIn;
		this._fadeOut = options.fadeOut;
		this._curve = options.curve;
		this.onended = options.onended;
	}

	static getDefaults(): OneShotSourceOptions {
		return Object.assign(ToneAudioNode.getDefaults(), {
			curve: "linear" as OneShotSourceCurve,
			fadeIn: 0,
			fadeOut: 0,
			onended: noOp,
		});
	}

	/**
	 * Stop the source node
	 */
	protected abstract _stopSource(time: Seconds): void;

	/**
	 * Start the source node at the given time
	 * @param  time When to start the node
	 */
	protected abstract start(time?: Time): this;
	/**
	 * Start the source at the given time
	 * @param  time When to start the source
	 */
	protected _startGain(time: Seconds, gain: GainFactor = 1): this {
		assert(
			this._startTime === -1,
			"Source cannot be started more than once"
		);
		// apply a fade in envelope
		const fadeInTime = this.toSeconds(this._fadeIn);

		// record the start time
		this._startTime = time + fadeInTime;
		this._startTime = Math.max(this._startTime, this.context.currentTime);

		// schedule the envelope
		if (fadeInTime > 0) {
			this._gainNode.gain.setValueAtTime(0, time);
			if (this._curve === "linear") {
				this._gainNode.gain.linearRampToValueAtTime(
					gain,
					time + fadeInTime
				);
			} else {
				this._gainNode.gain.exponentialApproachValueAtTime(
					gain,
					time,
					fadeInTime
				);
			}
		} else {
			this._gainNode.gain.setValueAtTime(gain, time);
		}
		return this;
	}

	/**
	 * Stop the source node at the given time.
	 * @param time When to stop the source
	 */
	stop(time?: Time): this {
		this.log("stop", time);
		this._stopGain(this.toSeconds(time));
		return this;
	}

	/**
	 * Stop the source at the given time
	 * @param  time When to stop the source
	 */
	protected _stopGain(time: Seconds): this {
		assert(this._startTime !== -1, "'start' must be called before 'stop'");
		// cancel the previous stop
		this.cancelStop();

		// the fadeOut time
		const fadeOutTime = this.toSeconds(this._fadeOut);

		// schedule the stop callback
		this._stopTime = this.toSeconds(time) + fadeOutTime;
		this._stopTime = Math.max(this._stopTime, this.now());
		if (fadeOutTime > 0) {
			// start the fade out curve at the given time
			if (this._curve === "linear") {
				this._gainNode.gain.linearRampTo(0, fadeOutTime, time);
			} else {
				this._gainNode.gain.targetRampTo(0, fadeOutTime, time);
			}
		} else {
			// stop any ongoing ramps, and set the value to 0
			this._gainNode.gain.cancelAndHoldAtTime(time);
			this._gainNode.gain.setValueAtTime(0, time);
		}
		this.context.clearTimeout(this._timeout);
		this._timeout = this.context.setTimeout(() => {
			// allow additional time for the exponential curve to fully decay
			const additionalTail =
				this._curve === "exponential" ? fadeOutTime * 2 : 0;
			this._stopSource(this.now() + additionalTail);
			this._onended();
		}, this._stopTime - this.context.currentTime);
		return this;
	}

	/**
	 * Invoke the onended callback
	 */
	protected _onended(): void {
		if (this.onended === noOp) {
			return;
		}

		this.onended(this);
		// overwrite onended to make sure it only is called once
		this.onended = noOp;
		// dispose when it's ended to free up for garbage collection only in the online context
		if (!this.context.isOffline) {
			const disposeCallback = () => this.dispose();
			if (typeof requestIdleCallback !== "undefined") {
				requestIdleCallback(disposeCallback);
			} else {
				setTimeout(disposeCallback, 10);
			}
		}
	}

	/**
	 * Get the playback state at the given time
	 */
	getStateAtTime = function (time: Time): BasicPlaybackState {
		const computedTime = this.toSeconds(time);
		if (
			this._startTime !== -1 &&
			computedTime >= this._startTime &&
			(this._stopTime === -1 || computedTime <= this._stopTime)
		) {
			return "started";
		} else {
			return "stopped";
		}
	};

	/**
	 * Get the playback state at the current time
	 */
	get state(): BasicPlaybackState {
		return this.getStateAtTime(this.now());
	}

	/**
	 * Cancel a scheduled stop event
	 */
	cancelStop(): this {
		this.log("cancelStop");
		assert(this._startTime !== -1, "Source is not started");
		// cancel the stop envelope
		this._gainNode.gain.cancelScheduledValues(
			this._startTime + this.sampleTime
		);
		this.context.clearTimeout(this._timeout);
		this._stopTime = -1;
		return this;
	}

	dispose(): this {
		super.dispose();
		this._gainNode.dispose();
		this.onended = noOp;
		return this;
	}
}
