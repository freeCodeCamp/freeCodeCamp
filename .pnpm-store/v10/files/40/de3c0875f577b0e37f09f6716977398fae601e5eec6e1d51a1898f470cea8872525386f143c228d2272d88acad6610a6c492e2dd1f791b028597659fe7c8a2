import { TicksClass } from "../core/type/Ticks.js";
import {
	NormalRange,
	Positive,
	Seconds,
	Ticks,
	Time,
	TransportTime,
} from "../core/type/Units.js";
import { omitFromObject, optionsFromArguments } from "../core/util/Defaults.js";
import { isArray, isString } from "../core/util/TypeCheck.js";
import { Part } from "./Part.js";
import { ToneEvent, ToneEventCallback, ToneEventOptions } from "./ToneEvent.js";

type SequenceEventDescription<T> = Array<T | SequenceEventDescription<T>>;

interface SequenceOptions<T> extends Omit<ToneEventOptions<T>, "value"> {
	loopStart: number;
	loopEnd: number;
	subdivision: Time;
	events: SequenceEventDescription<T>;
}

/**
 * A sequence is an alternate notation of a part. Instead
 * of passing in an array of [time, event] pairs, pass
 * in an array of events which will be spaced at the
 * given subdivision. Sub-arrays will subdivide that beat
 * by the number of items are in the array.
 * Sequence notation inspiration from [Tidal Cycles](http://tidalcycles.org/)
 * @example
 * const synth = new Tone.Synth().toDestination();
 * const seq = new Tone.Sequence((time, note) => {
 * 	synth.triggerAttackRelease(note, 0.1, time);
 * 	// subdivisions are given as subarrays
 * }, ["C4", ["E4", "D4", "E4"], "G4", ["A4", "G4"]]).start(0);
 * Tone.Transport.start();
 * @category Event
 */
export class Sequence<ValueType = any> extends ToneEvent<ValueType> {
	readonly name: string = "Sequence";

	/**
	 * The subdivison of each note
	 */
	private _subdivision: Ticks;

	/**
	 * The object responsible for scheduling all of the events
	 */
	private _part: Part = new Part({
		callback: this._seqCallback.bind(this),
		context: this.context,
	});

	/**
	 * private reference to all of the sequence proxies
	 */
	private _events: SequenceEventDescription<ValueType> = [];

	/**
	 * The proxied array
	 */
	private _eventsArray: SequenceEventDescription<ValueType> = [];

	/**
	 * @param  callback  The callback to invoke with every note
	 * @param  events  The sequence of events
	 * @param  subdivision  The subdivision between which events are placed.
	 */
	constructor(
		callback?: ToneEventCallback<ValueType>,
		events?: SequenceEventDescription<ValueType>,
		subdivision?: Time
	);
	constructor(options?: Partial<SequenceOptions<ValueType>>);
	constructor() {
		const options = optionsFromArguments(
			Sequence.getDefaults(),
			arguments,
			["callback", "events", "subdivision"]
		);
		super(options);

		this._subdivision = this.toTicks(options.subdivision);

		this.events = options.events;

		// set all of the values
		this.loop = options.loop;
		this.loopStart = options.loopStart;
		this.loopEnd = options.loopEnd;
		this.playbackRate = options.playbackRate;
		this.probability = options.probability;
		this.humanize = options.humanize;
		this.mute = options.mute;
		this.playbackRate = options.playbackRate;
	}

	static getDefaults(): SequenceOptions<any> {
		return Object.assign(
			omitFromObject(ToneEvent.getDefaults(), ["value"]),
			{
				events: [],
				loop: true,
				loopEnd: 0,
				loopStart: 0,
				subdivision: "8n",
			}
		);
	}

	/**
	 * The internal callback for when an event is invoked
	 */
	private _seqCallback(time: Seconds, value: any): void {
		if (value !== null && !this.mute) {
			this.callback(time, value);
		}
	}

	/**
	 * The sequence
	 */
	get events(): any[] {
		return this._events;
	}
	set events(s) {
		this.clear();
		this._eventsArray = s;
		this._events = this._createSequence(this._eventsArray);
		this._eventsUpdated();
	}

	/**
	 * Start the part at the given time.
	 * @param  time    When to start the part.
	 * @param  offset  The offset index to start at
	 */
	start(time?: TransportTime, offset?: number): this {
		this._part.start(time, offset ? this._indexTime(offset) : offset);
		return this;
	}

	/**
	 * Stop the part at the given time.
	 * @param  time  When to stop the part.
	 */
	stop(time?: TransportTime): this {
		this._part.stop(time);
		return this;
	}

	/**
	 * The subdivision of the sequence. This can only be
	 * set in the constructor. The subdivision is the
	 * interval between successive steps.
	 */
	get subdivision(): Seconds {
		return new TicksClass(this.context, this._subdivision).toSeconds();
	}

	/**
	 * Create a sequence proxy which can be monitored to create subsequences
	 */
	private _createSequence(array: any[]): any[] {
		return new Proxy(array, {
			get: (target: any[], property: PropertyKey): any => {
				// property is index in this case
				return target[property];
			},
			set: (
				target: any[],
				property: PropertyKey,
				value: any
			): boolean => {
				if (isString(property) && isFinite(parseInt(property, 10))) {
					if (isArray(value)) {
						target[property] = this._createSequence(value);
					} else {
						target[property] = value;
					}
				} else {
					target[property] = value;
				}
				this._eventsUpdated();
				// return true to accept the changes
				return true;
			},
		});
	}

	/**
	 * When the sequence has changed, all of the events need to be recreated
	 */
	private _eventsUpdated(): void {
		this._part.clear();
		this._rescheduleSequence(
			this._eventsArray,
			this._subdivision,
			this.startOffset
		);
		// update the loopEnd
		this.loopEnd = this.loopEnd;
	}

	/**
	 * reschedule all of the events that need to be rescheduled
	 */
	private _rescheduleSequence(
		sequence: any[],
		subdivision: Ticks,
		startOffset: Ticks
	): void {
		sequence.forEach((value, index) => {
			const eventOffset = index * subdivision + startOffset;
			if (isArray(value)) {
				this._rescheduleSequence(
					value,
					subdivision / value.length,
					eventOffset
				);
			} else {
				const startTime = new TicksClass(
					this.context,
					eventOffset,
					"i"
				).toSeconds();
				this._part.add(startTime, value);
			}
		});
	}

	/**
	 * Get the time of the index given the Sequence's subdivision
	 * @param  index
	 * @return The time of that index
	 */
	private _indexTime(index: number): Seconds {
		return new TicksClass(
			this.context,
			index * this._subdivision + this.startOffset
		).toSeconds();
	}

	/**
	 * Clear all of the events
	 */
	clear(): this {
		this._part.clear();
		return this;
	}

	dispose(): this {
		super.dispose();
		this._part.dispose();
		return this;
	}

	//-------------------------------------
	// PROXY CALLS
	//-------------------------------------

	get loop(): boolean | number {
		return this._part.loop;
	}
	set loop(l) {
		this._part.loop = l;
	}

	/**
	 * The index at which the sequence should start looping
	 */
	get loopStart(): number {
		return this._loopStart;
	}
	set loopStart(index) {
		this._loopStart = index;
		this._part.loopStart = this._indexTime(index);
	}

	/**
	 * The index at which the sequence should end looping
	 */
	get loopEnd(): number {
		return this._loopEnd;
	}
	set loopEnd(index) {
		this._loopEnd = index;
		if (index === 0) {
			this._part.loopEnd = this._indexTime(this._eventsArray.length);
		} else {
			this._part.loopEnd = this._indexTime(index);
		}
	}

	get startOffset(): Ticks {
		return this._part.startOffset;
	}
	set startOffset(start) {
		this._part.startOffset = start;
	}

	get playbackRate(): Positive {
		return this._part.playbackRate;
	}
	set playbackRate(rate) {
		this._part.playbackRate = rate;
	}

	get probability(): NormalRange {
		return this._part.probability;
	}
	set probability(prob) {
		this._part.probability = prob;
	}

	get progress(): NormalRange {
		return this._part.progress;
	}

	get humanize(): boolean | Time {
		return this._part.humanize;
	}
	set humanize(variation) {
		this._part.humanize = variation;
	}

	/**
	 * The number of scheduled events
	 */
	get length(): number {
		return this._part.length;
	}
}
