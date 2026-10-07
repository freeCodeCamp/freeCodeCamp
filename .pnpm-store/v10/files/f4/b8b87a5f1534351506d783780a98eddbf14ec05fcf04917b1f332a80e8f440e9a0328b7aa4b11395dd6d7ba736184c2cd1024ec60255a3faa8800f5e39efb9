import {
	ToneWithContext,
	ToneWithContextOptions,
} from "../context/ToneWithContext.js";
import { Frequency, Hertz, Seconds, Ticks, Time } from "../type/Units.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { Emitter } from "../util/Emitter.js";
import { noOp, readOnly } from "../util/Interface.js";
import { PlaybackState, StateTimeline } from "../util/StateTimeline.js";
import { TickSignal } from "./TickSignal.js";
import { TickSource } from "./TickSource.js";
import { assertContextRunning } from "../util/Debug.js";

type ClockCallback = (time: Seconds, ticks?: Ticks) => void;

interface ClockOptions extends ToneWithContextOptions {
	frequency: Hertz;
	callback: ClockCallback;
	units: "hertz" | "bpm";
}

type ClockEvent = "start" | "stop" | "pause";

/**
 * A sample accurate clock which provides a callback at the given rate.
 * While the callback is not sample-accurate (it is still susceptible to
 * loose JS timing), the time passed in as the argument to the callback
 * is precise. For most applications, it is better to use Tone.Transport
 * instead of the Clock by itself since you can synchronize multiple callbacks.
 * @example
 * // the callback will be invoked approximately once a second
 * // and will print the time exactly once a second apart.
 * const clock = new Tone.Clock(time => {
 * 	console.log(time);
 * }, 1);
 * clock.start();
 * @category Core
 */
export class Clock<TypeName extends "bpm" | "hertz" = "hertz">
	extends ToneWithContext<ClockOptions>
	implements Emitter<ClockEvent>
{
	readonly name: string = "Clock";

	/**
	 * The callback function to invoke at the scheduled tick.
	 */
	callback: ClockCallback = noOp;

	/**
	 * The tick counter
	 */
	private _tickSource: TickSource<TypeName>;

	/**
	 * The last time the loop callback was invoked
	 */
	private _lastUpdate = 0;

	/**
	 * Keep track of the playback state
	 */
	private _state: StateTimeline = new StateTimeline("stopped");

	/**
	 * Context bound reference to the _loop method
	 * This is necessary to remove the event in the end.
	 */
	private _boundLoop: () => void = this._loop.bind(this);

	/**
	 * The rate the callback function should be invoked.
	 */
	frequency: TickSignal<TypeName>;

	/**
	 * @param callback The callback to be invoked with the time of the audio event
	 * @param frequency The rate of the callback
	 */
	constructor(callback?: ClockCallback, frequency?: Frequency);
	constructor(options: Partial<ClockOptions>);
	constructor() {
		const options = optionsFromArguments(Clock.getDefaults(), arguments, [
			"callback",
			"frequency",
		]);
		super(options);

		this.callback = options.callback;
		this._tickSource = new TickSource({
			context: this.context,
			frequency: options.frequency,
			units: options.units,
		});
		this._lastUpdate = 0;
		this.frequency = this._tickSource.frequency;
		readOnly(this, "frequency");

		// add an initial state
		this._state.setStateAtTime("stopped", 0);

		// bind a callback to the worker thread
		this.context.on("tick", this._boundLoop);
	}

	static getDefaults(): ClockOptions {
		return Object.assign(ToneWithContext.getDefaults(), {
			callback: noOp as ClockCallback,
			frequency: 1,
			units: "hertz",
		}) as ClockOptions;
	}

	/**
	 * Returns the playback state of the source, either "started", "stopped" or "paused".
	 */
	get state(): PlaybackState {
		return this._state.getValueAtTime(this.now());
	}

	/**
	 * Start the clock at the given time. Optionally pass in an offset
	 * of where to start the tick counter from.
	 * @param  time    The time the clock should start
	 * @param offset  Where the tick counter starts counting from.
	 */
	start(time?: Time, offset?: Ticks): this {
		// make sure the context is running
		assertContextRunning(this.context);
		// start the loop
		const computedTime = this.toSeconds(time);
		this.log("start", computedTime);
		if (this._state.getValueAtTime(computedTime) !== "started") {
			this._state.setStateAtTime("started", computedTime);
			this._tickSource.start(computedTime, offset);
			if (computedTime < this._lastUpdate) {
				this.emit("start", computedTime, offset);
			}
		}
		return this;
	}

	/**
	 * Stop the clock. Stopping the clock resets the tick counter to 0.
	 * @param time The time when the clock should stop.
	 * @example
	 * const clock = new Tone.Clock(time => {
	 * 	console.log(time);
	 * }, 1);
	 * clock.start();
	 * // stop the clock after 10 seconds
	 * clock.stop("+10");
	 */
	stop(time?: Time): this {
		const computedTime = this.toSeconds(time);
		this.log("stop", computedTime);
		this._state.cancel(computedTime);
		this._state.setStateAtTime("stopped", computedTime);
		this._tickSource.stop(computedTime);
		if (computedTime < this._lastUpdate) {
			this.emit("stop", computedTime);
		}
		return this;
	}

	/**
	 * Pause the clock. Pausing does not reset the tick counter.
	 * @param time The time when the clock should stop.
	 */
	pause(time?: Time): this {
		const computedTime = this.toSeconds(time);
		if (this._state.getValueAtTime(computedTime) === "started") {
			this._state.setStateAtTime("paused", computedTime);
			this._tickSource.pause(computedTime);
			if (computedTime < this._lastUpdate) {
				this.emit("pause", computedTime);
			}
		}
		return this;
	}

	/**
	 * The number of times the callback was invoked. Starts counting at 0
	 * and increments after the callback was invoked.
	 */
	get ticks(): Ticks {
		return Math.ceil(this.getTicksAtTime(this.now()));
	}
	set ticks(t: Ticks) {
		this._tickSource.ticks = t;
	}

	/**
	 * The time since ticks=0 that the Clock has been running. Accounts for tempo curves
	 */
	get seconds(): Seconds {
		return this._tickSource.seconds;
	}
	set seconds(s: Seconds) {
		this._tickSource.seconds = s;
	}

	/**
	 * Return the elapsed seconds at the given time.
	 * @param  time  When to get the elapsed seconds
	 * @return  The number of elapsed seconds
	 */
	getSecondsAtTime(time: Time): Seconds {
		return this._tickSource.getSecondsAtTime(time);
	}

	/**
	 * Set the clock's ticks at the given time.
	 * @param  ticks The tick value to set
	 * @param  time  When to set the tick value
	 */
	setTicksAtTime(ticks: Ticks, time: Time): this {
		this._tickSource.setTicksAtTime(ticks, time);
		return this;
	}

	/**
	 * Get the time of the given tick. The second argument
	 * is when to test before. Since ticks can be set (with setTicksAtTime)
	 * there may be multiple times for a given tick value.
	 * @param  tick The tick number.
	 * @param  before When to measure the tick value from.
	 * @return The time of the tick
	 */
	getTimeOfTick(tick: Ticks, before = this.now()): Seconds {
		return this._tickSource.getTimeOfTick(tick, before);
	}

	/**
	 * Get the clock's ticks at the given time.
	 * @param  time  When to get the tick value
	 * @return The tick value at the given time.
	 */
	getTicksAtTime(time?: Time): Ticks {
		return this._tickSource.getTicksAtTime(time);
	}

	/**
	 * Get the time of the next tick
	 * @param  offset The tick number.
	 */
	nextTickTime(offset: Ticks, when: Time): Seconds {
		const computedTime = this.toSeconds(when);
		const currentTick = this.getTicksAtTime(computedTime);
		return this._tickSource.getTimeOfTick(
			currentTick + offset,
			computedTime
		);
	}

	/**
	 * The scheduling loop.
	 */
	private _loop(): void {
		const startTime = this._lastUpdate;
		const endTime = this.now();
		this._lastUpdate = endTime;
		this.log("loop", startTime, endTime);

		if (startTime !== endTime) {
			// the state change events
			this._state.forEachBetween(startTime, endTime, (e) => {
				switch (e.state) {
					case "started":
						const offset = this._tickSource.getTicksAtTime(e.time);
						this.emit("start", e.time, offset);
						break;
					case "stopped":
						if (e.time !== 0) {
							this.emit("stop", e.time);
						}
						break;
					case "paused":
						this.emit("pause", e.time);
						break;
				}
			});
			// the tick callbacks
			this._tickSource.forEachTickBetween(
				startTime,
				endTime,
				(time, ticks) => {
					this.callback(time, ticks);
				}
			);
		}
	}

	/**
	 * Returns the scheduled state at the given time.
	 * @param  time  The time to query.
	 * @return  The name of the state input in setStateAtTime.
	 * @example
	 * const clock = new Tone.Clock();
	 * clock.start("+0.1");
	 * clock.getStateAtTime("+0.1"); // returns "started"
	 */
	getStateAtTime(time: Time): PlaybackState {
		const computedTime = this.toSeconds(time);
		return this._state.getValueAtTime(computedTime);
	}

	/**
	 * Clean up
	 */
	dispose(): this {
		super.dispose();
		this.context.off("tick", this._boundLoop);
		this._tickSource.dispose();
		this._state.dispose();
		return this;
	}

	//-------------------------------------
	// EMITTER MIXIN TO SATISFY COMPILER
	//-------------------------------------

	on!: (event: ClockEvent, callback: (...args: any[]) => void) => this;
	once!: (event: ClockEvent, callback: (...args: any[]) => void) => this;
	off!: (
		event: ClockEvent,
		callback?: ((...args: any[]) => void) | undefined
	) => this;
	emit!: (event: any, ...args: any[]) => this;
}

Emitter.mixin(Clock);
