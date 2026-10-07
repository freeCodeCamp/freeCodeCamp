import { TicksClass } from "../core/type/Ticks.js";
import { TransportTimeClass } from "../core/type/TransportTime.js";
import {
	NormalRange,
	Positive,
	Seconds,
	Ticks,
	Time,
	TransportTime,
} from "../core/type/Units.js";
import { defaultArg, optionsFromArguments } from "../core/util/Defaults.js";
import { StateTimeline } from "../core/util/StateTimeline.js";
import {
	isArray,
	isDefined,
	isObject,
	isUndef,
} from "../core/util/TypeCheck.js";
import { ToneEvent, ToneEventCallback, ToneEventOptions } from "./ToneEvent.js";

type CallbackType<T> = T extends {
	time: Time;
	[key: string]: any;
}
	? T
	: T extends ArrayLike<any>
		? T[1]
		: T extends Time
			? null
			: never;

interface PartOptions<T>
	extends Omit<ToneEventOptions<CallbackType<T>>, "value"> {
	events: T[];
}

/**
 * Part is a collection ToneEvents which can be started/stopped and looped as a single unit.
 *
 * @example
 * const synth = new Tone.Synth().toDestination();
 * const part = new Tone.Part(((time, note) => {
 * 	// the notes given as the second element in the array
 * 	// will be passed in as the second argument
 * 	synth.triggerAttackRelease(note, "8n", time);
 * }), [[0, "C2"], ["0:2", "C3"], ["0:3:2", "G2"]]).start(0);
 * Tone.Transport.start();
 * @example
 * const synth = new Tone.Synth().toDestination();
 * // use an array of objects as long as the object has a "time" attribute
 * const part = new Tone.Part(((time, value) => {
 * 	// the value is an object which contains both the note and the velocity
 * 	synth.triggerAttackRelease(value.note, "8n", time, value.velocity);
 * }), [{ time: 0, note: "C3", velocity: 0.9 },
 * 	{ time: "0:2", note: "C4", velocity: 0.5 }
 * ]).start(0);
 * Tone.Transport.start();
 * @category Event
 */
export class Part<ValueType = any> extends ToneEvent<ValueType> {
	readonly name: string = "Part";

	/**
	 * Tracks the scheduled events
	 */
	protected _state: StateTimeline<{
		id: number;
		offset: number;
	}> = new StateTimeline("stopped");

	/**
	 * The events that belong to this part
	 */
	private _events: Set<ToneEvent> = new Set();

	/**
	 * @param callback The callback to invoke on each event
	 * @param value the array of events
	 */
	constructor(
		callback?: ToneEventCallback<CallbackType<ValueType>>,
		value?: ValueType[]
	);
	constructor(options?: Partial<PartOptions<ValueType>>);
	constructor() {
		const options = optionsFromArguments(Part.getDefaults(), arguments, [
			"callback",
			"events",
		]);
		super(options);

		// make sure things are assigned in the right order
		this._state.increasing = true;

		// add the events
		options.events.forEach((event) => {
			if (isArray(event)) {
				this.add(event[0], event[1]);
			} else {
				this.add(event);
			}
		});
	}

	static getDefaults(): PartOptions<any> {
		return Object.assign(ToneEvent.getDefaults(), {
			events: [],
		});
	}

	/**
	 * Start the part at the given time.
	 * @param  time    When to start the part.
	 * @param  offset  The offset from the start of the part to begin playing at.
	 */
	start(time?: TransportTime, offset?: Time): this {
		const ticks = this.toTicks(time);
		if (this._state.getValueAtTime(ticks) !== "started") {
			offset = defaultArg(offset, this._loop ? this._loopStart : 0);
			if (this._loop) {
				offset = defaultArg(offset, this._loopStart);
			} else {
				offset = defaultArg(offset, 0);
			}
			const computedOffset = this.toTicks(offset);
			this._state.add({
				id: -1,
				offset: computedOffset,
				state: "started",
				time: ticks,
			});
			this._forEach((event) => {
				this._startNote(event, ticks, computedOffset);
			});
		}
		return this;
	}

	/**
	 * Start the event in the given event at the correct time given
	 * the ticks and offset and looping.
	 * @param  event
	 * @param  ticks
	 * @param  offset
	 */
	private _startNote(event: ToneEvent, ticks: Ticks, offset: Ticks): void {
		ticks -= offset;
		if (this._loop) {
			if (
				event.startOffset >= this._loopStart &&
				event.startOffset < this._loopEnd
			) {
				if (event.startOffset < offset) {
					// start it on the next loop
					ticks += this._getLoopDuration();
				}
				event.start(new TicksClass(this.context, ticks));
			} else if (
				event.startOffset < this._loopStart &&
				event.startOffset >= offset
			) {
				event.loop = false;
				event.start(new TicksClass(this.context, ticks));
			}
		} else if (event.startOffset >= offset) {
			event.start(new TicksClass(this.context, ticks));
		}
	}

	get startOffset(): Ticks {
		return this._startOffset;
	}
	set startOffset(offset) {
		this._startOffset = offset;
		this._forEach((event) => {
			event.startOffset += this._startOffset;
		});
	}

	/**
	 * Stop the part at the given time.
	 * @param  time  When to stop the part.
	 */
	stop(time?: TransportTime): this {
		const ticks = this.toTicks(time);
		this._state.cancel(ticks);
		this._state.setStateAtTime("stopped", ticks);
		this._forEach((event) => {
			event.stop(time);
		});
		return this;
	}

	/**
	 * Get/Set an Event's value at the given time.
	 * If a value is passed in and no event exists at
	 * the given time, one will be created with that value.
	 * If two events are at the same time, the first one will
	 * be returned.
	 * @example
	 * const part = new Tone.Part();
	 * part.at("1m"); // returns the part at the first measure
	 * part.at("2m", "C2"); // set the value at "2m" to C2.
	 * // if an event didn't exist at that time, it will be created.
	 * @param time The time of the event to get or set.
	 * @param value If a value is passed in, the value of the event at the given time will be set to it.
	 */
	at(time: Time, value?: any): ToneEvent | null {
		const timeInTicks = new TransportTimeClass(
			this.context,
			time
		).toTicks();
		const tickTime = new TicksClass(this.context, 1).toSeconds();

		const iterator = this._events.values();
		let result = iterator.next();
		while (!result.done) {
			const event = result.value;
			if (Math.abs(timeInTicks - event.startOffset) < tickTime) {
				if (isDefined(value)) {
					event.value = value;
				}
				return event;
			}
			result = iterator.next();
		}
		// if there was no event at that time, create one
		if (isDefined(value)) {
			this.add(time, value);
			// return the new event
			return this.at(time);
		} else {
			return null;
		}
	}

	/**
	 * Add a an event to the part.
	 * @param time The time the note should start. If an object is passed in, it should
	 * 		have a 'time' attribute and the rest of the object will be used as the 'value'.
	 * @param  value Any value to add to the timeline
	 * @example
	 * const part = new Tone.Part();
	 * part.add("1m", "C#+11");
	 */
	add(obj: { time: Time; [key: string]: any }): this;
	add(time: Time, value?: any): this;
	add(time: Time | object, value?: any): this {
		// extract the parameters
		if (time instanceof Object && Reflect.has(time, "time")) {
			value = time;
			time = value.time;
		}
		const ticks = this.toTicks(time);
		let event: ToneEvent;
		if (value instanceof ToneEvent) {
			event = value;
			event.callback = this._tick.bind(this);
		} else {
			event = new ToneEvent({
				callback: this._tick.bind(this),
				context: this.context,
				value,
			});
		}
		// the start offset
		event.startOffset = ticks;

		// initialize the values
		event.set({
			humanize: this.humanize,
			loop: this.loop,
			loopEnd: this.loopEnd,
			loopStart: this.loopStart,
			playbackRate: this.playbackRate,
			probability: this.probability,
		});

		this._events.add(event);

		// start the note if it should be played right now
		this._restartEvent(event);
		return this;
	}

	/**
	 * Restart the given event
	 */
	private _restartEvent(event: ToneEvent): void {
		this._state.forEach((stateEvent) => {
			if (stateEvent.state === "started") {
				this._startNote(event, stateEvent.time, stateEvent.offset);
			} else {
				// stop the note
				event.stop(new TicksClass(this.context, stateEvent.time));
			}
		});
	}

	/**
	 * Remove an event from the part. If the event at that time is a Part,
	 * it will remove the entire part.
	 * @param time The time of the event
	 * @param value Optionally select only a specific event value
	 */
	remove(obj: { time: Time; [key: string]: any }): this;
	remove(time: Time, value?: any): this;
	remove(time: Time | object, value?: any): this {
		// extract the parameters
		if (isObject(time) && time.hasOwnProperty("time")) {
			value = time;
			time = value.time;
		}
		time = this.toTicks(time);
		this._events.forEach((event) => {
			if (event.startOffset === time) {
				if (
					isUndef(value) ||
					(isDefined(value) && event.value === value)
				) {
					this._events.delete(event);
					event.dispose();
				}
			}
		});
		return this;
	}

	/**
	 * Remove all of the notes from the group.
	 */
	clear(): this {
		this._forEach((event) => event.dispose());
		this._events.clear();
		return this;
	}

	/**
	 * Cancel scheduled state change events: i.e. "start" and "stop".
	 * @param after The time after which to cancel the scheduled events.
	 */
	cancel(after?: TransportTime | TransportTimeClass): this {
		this._forEach((event) => event.cancel(after));
		this._state.cancel(this.toTicks(after));
		return this;
	}

	/**
	 * Iterate over all of the events
	 */
	private _forEach(callback: (event: ToneEvent) => void): this {
		if (this._events) {
			this._events.forEach((event) => {
				if (event instanceof Part) {
					event._forEach(callback);
				} else {
					callback(event);
				}
			});
		}
		return this;
	}

	/**
	 * Set the attribute of all of the events
	 * @param  attr  the attribute to set
	 * @param  value      The value to set it to
	 */
	private _setAll(attr: string, value: any): void {
		this._forEach((event) => {
			event[attr] = value;
		});
	}

	/**
	 * Internal tick method
	 * @param  time  The time of the event in seconds
	 */
	protected _tick(time: Seconds, value?: any): void {
		if (!this.mute) {
			this.callback(time, value);
		}
	}

	/**
	 * Determine if the event should be currently looping
	 * given the loop boundries of this Part.
	 * @param  event  The event to test
	 */
	private _testLoopBoundries(event: ToneEvent): void {
		if (
			this._loop &&
			(event.startOffset < this._loopStart ||
				event.startOffset >= this._loopEnd)
		) {
			event.cancel(0);
		} else if (event.state === "stopped") {
			// reschedule it if it's stopped
			this._restartEvent(event);
		}
	}

	get probability(): NormalRange {
		return this._probability;
	}
	set probability(prob) {
		this._probability = prob;
		this._setAll("probability", prob);
	}

	get humanize(): boolean | Time {
		return this._humanize;
	}
	set humanize(variation) {
		this._humanize = variation;
		this._setAll("humanize", variation);
	}

	/**
	 * If the part should loop or not
	 * between Part.loopStart and
	 * Part.loopEnd. If set to true,
	 * the part will loop indefinitely,
	 * if set to a number greater than 1
	 * it will play a specific number of
	 * times, if set to false, 0 or 1, the
	 * part will only play once.
	 * @example
	 * const part = new Tone.Part();
	 * // loop the part 8 times
	 * part.loop = 8;
	 */
	get loop(): boolean | number {
		return this._loop;
	}
	set loop(loop) {
		this._loop = loop;
		this._forEach((event) => {
			event.loopStart = this.loopStart;
			event.loopEnd = this.loopEnd;
			event.loop = loop;
			this._testLoopBoundries(event);
		});
	}

	/**
	 * The loopEnd point determines when it will
	 * loop if Part.loop is true.
	 */
	get loopEnd(): Time {
		return new TicksClass(this.context, this._loopEnd).toSeconds();
	}
	set loopEnd(loopEnd) {
		this._loopEnd = this.toTicks(loopEnd);
		if (this._loop) {
			this._forEach((event) => {
				event.loopEnd = loopEnd;
				this._testLoopBoundries(event);
			});
		}
	}

	/**
	 * The loopStart point determines when it will
	 * loop if Part.loop is true.
	 */
	get loopStart(): Time {
		return new TicksClass(this.context, this._loopStart).toSeconds();
	}
	set loopStart(loopStart) {
		this._loopStart = this.toTicks(loopStart);
		if (this._loop) {
			this._forEach((event) => {
				event.loopStart = this.loopStart;
				this._testLoopBoundries(event);
			});
		}
	}

	/**
	 * The playback rate of the part
	 */
	get playbackRate(): Positive {
		return this._playbackRate;
	}
	set playbackRate(rate) {
		this._playbackRate = rate;
		this._setAll("playbackRate", rate);
	}

	/**
	 * The number of scheduled notes in the part.
	 */
	get length(): number {
		return this._events.size;
	}

	dispose(): this {
		super.dispose();
		this.clear();
		return this;
	}
}
