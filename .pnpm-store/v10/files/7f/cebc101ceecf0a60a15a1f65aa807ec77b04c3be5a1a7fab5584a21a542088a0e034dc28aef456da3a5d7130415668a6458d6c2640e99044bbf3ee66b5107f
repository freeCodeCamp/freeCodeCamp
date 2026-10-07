import { TransportTimeClass } from "../core/type/TransportTime.js";
import { NormalRange, Positive, Seconds, Ticks, Time, TransportTime } from "../core/type/Units.js";
import { StateTimeline } from "../core/util/StateTimeline.js";
import { ToneEvent, ToneEventCallback, ToneEventOptions } from "./ToneEvent.js";
type CallbackType<T> = T extends {
    time: Time;
    [key: string]: any;
} ? T : T extends ArrayLike<any> ? T[1] : T extends Time ? null : never;
interface PartOptions<T> extends Omit<ToneEventOptions<CallbackType<T>>, "value"> {
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
export declare class Part<ValueType = any> extends ToneEvent<ValueType> {
    readonly name: string;
    /**
     * Tracks the scheduled events
     */
    protected _state: StateTimeline<{
        id: number;
        offset: number;
    }>;
    /**
     * The events that belong to this part
     */
    private _events;
    /**
     * @param callback The callback to invoke on each event
     * @param value the array of events
     */
    constructor(callback?: ToneEventCallback<CallbackType<ValueType>>, value?: ValueType[]);
    constructor(options?: Partial<PartOptions<ValueType>>);
    static getDefaults(): PartOptions<any>;
    /**
     * Start the part at the given time.
     * @param  time    When to start the part.
     * @param  offset  The offset from the start of the part to begin playing at.
     */
    start(time?: TransportTime, offset?: Time): this;
    /**
     * Start the event in the given event at the correct time given
     * the ticks and offset and looping.
     * @param  event
     * @param  ticks
     * @param  offset
     */
    private _startNote;
    get startOffset(): Ticks;
    set startOffset(offset: Ticks);
    /**
     * Stop the part at the given time.
     * @param  time  When to stop the part.
     */
    stop(time?: TransportTime): this;
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
    at(time: Time, value?: any): ToneEvent | null;
    /**
     * Add a an event to the part.
     * @param time The time the note should start. If an object is passed in, it should
     * 		have a 'time' attribute and the rest of the object will be used as the 'value'.
     * @param  value Any value to add to the timeline
     * @example
     * const part = new Tone.Part();
     * part.add("1m", "C#+11");
     */
    add(obj: {
        time: Time;
        [key: string]: any;
    }): this;
    add(time: Time, value?: any): this;
    /**
     * Restart the given event
     */
    private _restartEvent;
    /**
     * Remove an event from the part. If the event at that time is a Part,
     * it will remove the entire part.
     * @param time The time of the event
     * @param value Optionally select only a specific event value
     */
    remove(obj: {
        time: Time;
        [key: string]: any;
    }): this;
    remove(time: Time, value?: any): this;
    /**
     * Remove all of the notes from the group.
     */
    clear(): this;
    /**
     * Cancel scheduled state change events: i.e. "start" and "stop".
     * @param after The time after which to cancel the scheduled events.
     */
    cancel(after?: TransportTime | TransportTimeClass): this;
    /**
     * Iterate over all of the events
     */
    private _forEach;
    /**
     * Set the attribute of all of the events
     * @param  attr  the attribute to set
     * @param  value      The value to set it to
     */
    private _setAll;
    /**
     * Internal tick method
     * @param  time  The time of the event in seconds
     */
    protected _tick(time: Seconds, value?: any): void;
    /**
     * Determine if the event should be currently looping
     * given the loop boundries of this Part.
     * @param  event  The event to test
     */
    private _testLoopBoundries;
    get probability(): NormalRange;
    set probability(prob: NormalRange);
    get humanize(): boolean | Time;
    set humanize(variation: boolean | Time);
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
    get loop(): boolean | number;
    set loop(loop: boolean | number);
    /**
     * The loopEnd point determines when it will
     * loop if Part.loop is true.
     */
    get loopEnd(): Time;
    set loopEnd(loopEnd: Time);
    /**
     * The loopStart point determines when it will
     * loop if Part.loop is true.
     */
    get loopStart(): Time;
    set loopStart(loopStart: Time);
    /**
     * The playback rate of the part
     */
    get playbackRate(): Positive;
    set playbackRate(rate: Positive);
    /**
     * The number of scheduled notes in the part.
     */
    get length(): number;
    dispose(): this;
}
export {};
