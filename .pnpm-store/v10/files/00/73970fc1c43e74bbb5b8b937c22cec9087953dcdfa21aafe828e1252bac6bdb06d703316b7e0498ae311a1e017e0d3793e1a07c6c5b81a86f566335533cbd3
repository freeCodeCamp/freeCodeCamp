import { Seconds } from "../type/Units.js";
import { Timeline, TimelineEvent } from "./Timeline.js";
import { assertRange } from "./Debug.js";

export type BasicPlaybackState = "started" | "stopped";
export type PlaybackState = BasicPlaybackState | "paused";

export interface StateTimelineEvent extends TimelineEvent {
	state: PlaybackState;
}

/**
 * A Timeline State. Provides the methods: `setStateAtTime("state", time)` and `getValueAtTime(time)`
 * @param initial The initial state of the StateTimeline.  Defaults to `undefined`
 * @internal
 */
export class StateTimeline<
	AdditionalOptions extends Record<string, any> = Record<string, any>,
> extends Timeline<StateTimelineEvent & AdditionalOptions> {
	readonly name: string = "StateTimeline";

	/**
	 * The initial state
	 */
	private _initial: PlaybackState;

	constructor(initial: PlaybackState = "stopped") {
		super();
		this._initial = initial;
		this.setStateAtTime(this._initial, 0);
	}

	/**
	 * Returns the scheduled state scheduled before or at
	 * the given time.
	 * @param  time  The time to query.
	 * @return  The name of the state input in setStateAtTime.
	 */
	getValueAtTime(time: Seconds): PlaybackState {
		const event = this.get(time);
		if (event !== null) {
			return event.state;
		} else {
			return this._initial;
		}
	}

	/**
	 * Add a state to the timeline.
	 * @param  state The name of the state to set.
	 * @param  time  The time to query.
	 * @param options Any additional options that are needed in the timeline.
	 */
	setStateAtTime(
		state: PlaybackState,
		time: Seconds,
		options?: AdditionalOptions
	): this {
		assertRange(time, 0);
		this.add(
			Object.assign({}, options, {
				state,
				time,
			})
		);
		return this;
	}

	/**
	 * Return the event before the time with the given state
	 * @param  state The state to look for
	 * @param  time  When to check before
	 * @return  The event with the given state before the time
	 */
	getLastState(
		state: PlaybackState,
		time: number
	): (StateTimelineEvent & AdditionalOptions) | undefined {
		// time = this.toSeconds(time);
		const index = this._search(time);
		for (let i = index; i >= 0; i--) {
			const event = this._timeline[i];
			if (event.state === state) {
				return event;
			}
		}
	}

	/**
	 * Return the event after the time with the given state
	 * @param  state The state to look for
	 * @param  time  When to check from
	 * @return  The event with the given state after the time
	 */
	getNextState(
		state: PlaybackState,
		time: number
	): (StateTimelineEvent & AdditionalOptions) | undefined {
		// time = this.toSeconds(time);
		const index = this._search(time);
		if (index !== -1) {
			for (let i = index; i < this._timeline.length; i++) {
				const event = this._timeline[i];
				if (event.state === state) {
					return event;
				}
			}
		}
	}
}
