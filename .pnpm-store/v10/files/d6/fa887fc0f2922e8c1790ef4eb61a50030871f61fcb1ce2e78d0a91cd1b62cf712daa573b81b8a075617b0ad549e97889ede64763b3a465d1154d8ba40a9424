import { NormalRange, Positive, Seconds, Ticks, Time, TransportTime } from "../core/type/Units.js";
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
export declare class Sequence<ValueType = any> extends ToneEvent<ValueType> {
    readonly name: string;
    /**
     * The subdivison of each note
     */
    private _subdivision;
    /**
     * The object responsible for scheduling all of the events
     */
    private _part;
    /**
     * private reference to all of the sequence proxies
     */
    private _events;
    /**
     * The proxied array
     */
    private _eventsArray;
    /**
     * @param  callback  The callback to invoke with every note
     * @param  events  The sequence of events
     * @param  subdivision  The subdivision between which events are placed.
     */
    constructor(callback?: ToneEventCallback<ValueType>, events?: SequenceEventDescription<ValueType>, subdivision?: Time);
    constructor(options?: Partial<SequenceOptions<ValueType>>);
    static getDefaults(): SequenceOptions<any>;
    /**
     * The internal callback for when an event is invoked
     */
    private _seqCallback;
    /**
     * The sequence
     */
    get events(): any[];
    set events(s: any[]);
    /**
     * Start the part at the given time.
     * @param  time    When to start the part.
     * @param  offset  The offset index to start at
     */
    start(time?: TransportTime, offset?: number): this;
    /**
     * Stop the part at the given time.
     * @param  time  When to stop the part.
     */
    stop(time?: TransportTime): this;
    /**
     * The subdivision of the sequence. This can only be
     * set in the constructor. The subdivision is the
     * interval between successive steps.
     */
    get subdivision(): Seconds;
    /**
     * Create a sequence proxy which can be monitored to create subsequences
     */
    private _createSequence;
    /**
     * When the sequence has changed, all of the events need to be recreated
     */
    private _eventsUpdated;
    /**
     * reschedule all of the events that need to be rescheduled
     */
    private _rescheduleSequence;
    /**
     * Get the time of the index given the Sequence's subdivision
     * @param  index
     * @return The time of that index
     */
    private _indexTime;
    /**
     * Clear all of the events
     */
    clear(): this;
    dispose(): this;
    get loop(): boolean | number;
    set loop(l: boolean | number);
    /**
     * The index at which the sequence should start looping
     */
    get loopStart(): number;
    set loopStart(index: number);
    /**
     * The index at which the sequence should end looping
     */
    get loopEnd(): number;
    set loopEnd(index: number);
    get startOffset(): Ticks;
    set startOffset(start: Ticks);
    get playbackRate(): Positive;
    set playbackRate(rate: Positive);
    get probability(): NormalRange;
    set probability(prob: NormalRange);
    get progress(): NormalRange;
    get humanize(): boolean | Time;
    set humanize(variation: boolean | Time);
    /**
     * The number of scheduled events
     */
    get length(): number;
}
export {};
