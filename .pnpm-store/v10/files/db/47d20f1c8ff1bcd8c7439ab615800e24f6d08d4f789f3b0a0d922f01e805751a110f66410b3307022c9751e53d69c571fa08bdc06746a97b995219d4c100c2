import { Timeline, TimelineEvent } from "./Timeline.js";
import { Tone } from "../Tone.js";
import { Seconds } from "../type/Units.js";

interface TimelineValueEvent<T> extends TimelineEvent {
	value: T;
}

/**
 * Represents a single value which is gettable and settable in a timed way
 */
export class TimelineValue<Type> extends Tone {
	readonly name: string = "TimelineValue";

	/**
	 * The timeline which stores the values
	 */
	private _timeline: Timeline<TimelineValueEvent<Type>> = new Timeline({
		memory: 10,
	});

	/**
	 * Hold the value to return if there is no scheduled values
	 */
	private _initialValue: Type;

	/**
	 * @param initialValue The value to return if there is no scheduled values
	 */
	constructor(initialValue: Type) {
		super();
		this._initialValue = initialValue;
	}

	/**
	 * Set the value at the given time
	 */
	set(value: Type, time: Seconds): this {
		this._timeline.add({
			value,
			time,
		});
		return this;
	}

	/**
	 * Get the value at the given time
	 */
	get(time: Seconds): Type {
		const event = this._timeline.get(time);
		if (event) {
			return event.value;
		} else {
			return this._initialValue;
		}
	}
}
