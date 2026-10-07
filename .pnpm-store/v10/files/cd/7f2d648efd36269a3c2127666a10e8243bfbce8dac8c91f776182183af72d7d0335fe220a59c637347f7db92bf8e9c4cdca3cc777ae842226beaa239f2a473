import {
	ToneWithContext,
	ToneWithContextOptions,
} from "../context/ToneWithContext.js";
import { Seconds, Ticks, Time } from "../type/Units.js";
import { optionsFromArguments } from "../util/Defaults.js";
import { readOnly } from "../util/Interface.js";
import {
	PlaybackState,
	StateTimeline,
	StateTimelineEvent,
} from "../util/StateTimeline.js";
import { Timeline, TimelineEvent } from "../util/Timeline.js";
import { isDefined } from "../util/TypeCheck.js";
import { TickSignal } from "./TickSignal.js";
import { EQ } from "../util/Math.js";

interface TickSourceOptions extends ToneWithContextOptions {
	frequency: number;
	units: "bpm" | "hertz";
}

interface TickSourceOffsetEvent extends TimelineEvent {
	ticks: number;
	time: number;
	seconds: number;
}

interface TickSourceTicksAtTimeEvent extends TimelineEvent {
	state: PlaybackState;
	time: number;
	ticks: number;
}

interface TickSourceSecondsAtTimeEvent extends TimelineEvent {
	state: PlaybackState;
	time: number;
	seconds: number;
}

/**
 * Uses [TickSignal](TickSignal) to track elapsed ticks with complex automation curves.
 */
export class TickSource<
	TypeName extends "bpm" | "hertz",
> extends ToneWithContext<TickSourceOptions> {
	readonly name: string = "TickSource";

	/**
	 * The frequency the callback function should be invoked.
	 */
	readonly frequency: TickSignal<TypeName>;

	/**
	 * The state timeline
	 */
	private _state: StateTimeline = new StateTimeline();

	/**
	 * The offset values of the ticks
	 */
	private _tickOffset: Timeline<TickSourceOffsetEvent> = new Timeline();

	/**
	 * Memoized values of getTicksAtTime at events with state other than "started"
	 */
	private _ticksAtTime: Timeline<TickSourceTicksAtTimeEvent> =
		new Timeline<TickSourceTicksAtTimeEvent>();

	/**
	 * Memoized values of getSecondsAtTime at events with state other than "started"
	 */
	private _secondsAtTime: Timeline<TickSourceSecondsAtTimeEvent> =
		new Timeline<TickSourceSecondsAtTimeEvent>();

	/**
	 * @param frequency The initial frequency that the signal ticks at
	 */
	constructor(frequency?: number);
	constructor(options?: Partial<TickSourceOptions>);
	constructor() {
		const options = optionsFromArguments(
			TickSource.getDefaults(),
			arguments,
			["frequency"]
		);
		super(options);

		this.frequency = new TickSignal({
			context: this.context,
			units: options.units as TypeName,
			value: options.frequency,
		});
		readOnly(this, "frequency");

		// set the initial state
		this._state.setStateAtTime("stopped", 0);
		// add the first event
		this.setTicksAtTime(0, 0);
	}

	static getDefaults(): TickSourceOptions {
		return Object.assign(
			{
				frequency: 1,
				units: "hertz" as const,
			},
			ToneWithContext.getDefaults()
		);
	}

	/**
	 * Returns the playback state of the source, either "started", "stopped" or "paused".
	 */
	get state(): PlaybackState {
		return this.getStateAtTime(this.now());
	}

	/**
	 * Start the clock at the given time. Optionally pass in an offset
	 * of where to start the tick counter from.
	 * @param  time    The time the clock should start
	 * @param offset The number of ticks to start the source at
	 */
	start(time: Time, offset?: Ticks): this {
		const computedTime = this.toSeconds(time);
		if (this._state.getValueAtTime(computedTime) !== "started") {
			this._state.setStateAtTime("started", computedTime);
			if (isDefined(offset)) {
				this.setTicksAtTime(offset, computedTime);
			}
			this._ticksAtTime.cancel(computedTime);
			this._secondsAtTime.cancel(computedTime);
		}
		return this;
	}

	/**
	 * Stop the clock. Stopping the clock resets the tick counter to 0.
	 * @param time The time when the clock should stop.
	 */
	stop(time: Time): this {
		const computedTime = this.toSeconds(time);
		// cancel the previous stop
		if (this._state.getValueAtTime(computedTime) === "stopped") {
			const event = this._state.get(computedTime);
			if (event && event.time > 0) {
				this._tickOffset.cancel(event.time);
				this._state.cancel(event.time);
			}
		}
		this._state.cancel(computedTime);
		this._state.setStateAtTime("stopped", computedTime);
		this.setTicksAtTime(0, computedTime);
		this._ticksAtTime.cancel(computedTime);
		this._secondsAtTime.cancel(computedTime);
		return this;
	}

	/**
	 * Pause the clock. Pausing does not reset the tick counter.
	 * @param time The time when the clock should stop.
	 */
	pause(time: Time): this {
		const computedTime = this.toSeconds(time);
		if (this._state.getValueAtTime(computedTime) === "started") {
			this._state.setStateAtTime("paused", computedTime);
			this._ticksAtTime.cancel(computedTime);
			this._secondsAtTime.cancel(computedTime);
		}
		return this;
	}

	/**
	 * Cancel start/stop/pause and setTickAtTime events scheduled after the given time.
	 * @param time When to clear the events after
	 */
	cancel(time: Time): this {
		time = this.toSeconds(time);
		this._state.cancel(time);
		this._tickOffset.cancel(time);
		this._ticksAtTime.cancel(time);
		this._secondsAtTime.cancel(time);
		return this;
	}

	/**
	 * Get the elapsed ticks at the given time
	 * @param  time  When to get the tick value
	 * @return The number of ticks
	 */
	getTicksAtTime(time?: Time): Ticks {
		const computedTime = this.toSeconds(time);
		const stopEvent = this._state.getLastState(
			"stopped",
			computedTime
		) as StateTimelineEvent;

		// get previously memoized ticks if available
		const memoizedEvent = this._ticksAtTime.get(computedTime);

		// this event allows forEachBetween to iterate until the current time
		const tmpEvent: StateTimelineEvent = {
			state: "paused",
			time: computedTime,
		};
		this._state.add(tmpEvent);

		// keep track of the previous offset event
		let lastState = memoizedEvent ? memoizedEvent : stopEvent;
		let elapsedTicks = memoizedEvent ? memoizedEvent.ticks : 0;
		let eventToMemoize: TickSourceTicksAtTimeEvent | null = null;

		// iterate through all the events since the last stop
		this._state.forEachBetween(
			lastState.time,
			computedTime + this.sampleTime,
			(e) => {
				let periodStartTime = lastState.time;
				// if there is an offset event in this period use that
				const offsetEvent = this._tickOffset.get(e.time);
				if (offsetEvent && offsetEvent.time >= lastState.time) {
					elapsedTicks = offsetEvent.ticks;
					periodStartTime = offsetEvent.time;
				}
				if (lastState.state === "started" && e.state !== "started") {
					elapsedTicks +=
						this.frequency.getTicksAtTime(e.time) -
						this.frequency.getTicksAtTime(periodStartTime);
					// do not memoize the temporary event
					if (e.time !== tmpEvent.time) {
						eventToMemoize = {
							state: e.state,
							time: e.time,
							ticks: elapsedTicks,
						};
					}
				}
				lastState = e;
			}
		);

		// remove the temporary event
		this._state.remove(tmpEvent);

		// memoize the ticks at the most recent event with state other than "started"
		if (eventToMemoize) {
			this._ticksAtTime.add(eventToMemoize);
		}

		// return the ticks
		return elapsedTicks;
	}

	/**
	 * The number of times the callback was invoked. Starts counting at 0
	 * and increments after the callback was invoked. Returns -1 when stopped.
	 */
	get ticks(): Ticks {
		return this.getTicksAtTime(this.now());
	}
	set ticks(t: Ticks) {
		this.setTicksAtTime(t, this.now());
	}

	/**
	 * The time since ticks=0 that the TickSource has been running. Accounts
	 * for tempo curves
	 */
	get seconds(): Seconds {
		return this.getSecondsAtTime(this.now());
	}
	set seconds(s: Seconds) {
		const now = this.now();
		const ticks = this.frequency.timeToTicks(s, now);
		this.setTicksAtTime(ticks, now);
	}

	/**
	 * Return the elapsed seconds at the given time.
	 * @param  time  When to get the elapsed seconds
	 * @return  The number of elapsed seconds
	 */
	getSecondsAtTime(time: Time): Seconds {
		time = this.toSeconds(time);
		const stopEvent = this._state.getLastState(
			"stopped",
			time
		) as StateTimelineEvent;
		// this event allows forEachBetween to iterate until the current time
		const tmpEvent: StateTimelineEvent = { state: "paused", time };
		this._state.add(tmpEvent);

		// get previously memoized seconds if available
		const memoizedEvent = this._secondsAtTime.get(time);

		// keep track of the previous offset event
		let lastState = memoizedEvent ? memoizedEvent : stopEvent;
		let elapsedSeconds = memoizedEvent ? memoizedEvent.seconds : 0;
		let eventToMemoize: TickSourceSecondsAtTimeEvent | null = null;

		// iterate through all the events since the last stop
		this._state.forEachBetween(
			lastState.time,
			time + this.sampleTime,
			(e) => {
				let periodStartTime = lastState.time;
				// if there is an offset event in this period use that
				const offsetEvent = this._tickOffset.get(e.time);
				if (offsetEvent && offsetEvent.time >= lastState.time) {
					elapsedSeconds = offsetEvent.seconds;
					periodStartTime = offsetEvent.time;
				}
				if (lastState.state === "started" && e.state !== "started") {
					elapsedSeconds += e.time - periodStartTime;
					// do not memoize the temporary event
					if (e.time !== tmpEvent.time) {
						eventToMemoize = {
							state: e.state,
							time: e.time,
							seconds: elapsedSeconds,
						};
					}
				}
				lastState = e;
			}
		);

		// remove the temporary event
		this._state.remove(tmpEvent);

		// memoize the seconds at the most recent event with state other than "started"
		if (eventToMemoize) {
			this._secondsAtTime.add(eventToMemoize);
		}

		// return the seconds
		return elapsedSeconds;
	}

	/**
	 * Set the clock's ticks at the given time.
	 * @param  ticks The tick value to set
	 * @param  time  When to set the tick value
	 */
	setTicksAtTime(ticks: Ticks, time: Time): this {
		time = this.toSeconds(time);
		this._tickOffset.cancel(time);
		this._tickOffset.add({
			seconds: this.frequency.getDurationOfTicks(ticks, time),
			ticks,
			time,
		});
		this._ticksAtTime.cancel(time);
		this._secondsAtTime.cancel(time);
		return this;
	}

	/**
	 * Returns the scheduled state at the given time.
	 * @param  time  The time to query.
	 */
	getStateAtTime(time: Time): PlaybackState {
		time = this.toSeconds(time);
		return this._state.getValueAtTime(time);
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
		const offset = this._tickOffset.get(before) as TickSourceOffsetEvent;
		const event = this._state.get(before) as StateTimelineEvent;
		const startTime = Math.max(offset.time, event.time);
		const absoluteTicks =
			this.frequency.getTicksAtTime(startTime) + tick - offset.ticks;
		return this.frequency.getTimeOfTick(absoluteTicks);
	}

	/**
	 * Invoke the callback event at all scheduled ticks between the
	 * start time and the end time
	 * @param  startTime  The beginning of the search range
	 * @param  endTime    The end of the search range
	 * @param  callback   The callback to invoke with each tick
	 */
	forEachTickBetween(
		startTime: number,
		endTime: number,
		callback: (when: Seconds, ticks: Ticks) => void
	): this {
		// only iterate through the sections where it is "started"
		let lastStateEvent = this._state.get(startTime);
		this._state.forEachBetween(startTime, endTime, (event) => {
			if (
				lastStateEvent &&
				lastStateEvent.state === "started" &&
				event.state !== "started"
			) {
				this.forEachTickBetween(
					Math.max(lastStateEvent.time, startTime),
					event.time - this.sampleTime,
					callback
				);
			}
			lastStateEvent = event;
		});

		let error: Error | null = null;

		if (lastStateEvent && lastStateEvent.state === "started") {
			const maxStartTime = Math.max(lastStateEvent.time, startTime);
			// figure out the difference between the frequency ticks and the
			const startTicks = this.frequency.getTicksAtTime(maxStartTime);
			const ticksAtStart = this.frequency.getTicksAtTime(
				lastStateEvent.time
			);
			const diff = startTicks - ticksAtStart;
			let offset = Math.ceil(diff) - diff;
			// guard against floating point issues
			offset = EQ(offset, 1) ? 0 : offset;
			let nextTickTime = this.frequency.getTimeOfTick(
				startTicks + offset
			);
			while (nextTickTime < endTime) {
				try {
					callback(
						nextTickTime,
						Math.round(this.getTicksAtTime(nextTickTime))
					);
				} catch (e) {
					error = e;
					break;
				}
				nextTickTime += this.frequency.getDurationOfTicks(
					1,
					nextTickTime
				);
			}
		}

		if (error) {
			throw error;
		}

		return this;
	}

	/**
	 * Clean up
	 */
	dispose(): this {
		super.dispose();
		this._state.dispose();
		this._tickOffset.dispose();
		this._ticksAtTime.dispose();
		this._secondsAtTime.dispose();
		this.frequency.dispose();
		return this;
	}
}
