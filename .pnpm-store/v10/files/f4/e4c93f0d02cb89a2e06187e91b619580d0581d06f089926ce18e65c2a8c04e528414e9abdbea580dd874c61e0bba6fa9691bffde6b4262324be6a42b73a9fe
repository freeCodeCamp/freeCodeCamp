import { Tone } from "../Tone.js";
import { Seconds } from "../type/Units.js";
type TimelineSearchParam = "ticks" | "time";
/**
 * The options object for Timeline
 */
interface TimelineOptions {
    memory: number;
    increasing: boolean;
}
/**
 * An event must have a time number
 */
export interface TimelineEvent {
    time: number;
}
/**
 * A Timeline class for scheduling and maintaining state
 * along a timeline. All events must have a "time" property.
 * Internally, events are stored in time order for fast
 * retrieval.
 * @internal
 */
export declare class Timeline<GenericEvent extends TimelineEvent> extends Tone {
    readonly name: string;
    /**
     * The memory of the timeline, i.e.
     * how many events in the past it will retain
     */
    memory: number;
    /**
     * The array of scheduled timeline events
     */
    protected _timeline: GenericEvent[];
    /**
     * If the time value must always be greater than or equal to the last
     * element on the list.
     */
    increasing: boolean;
    /**
     * @param memory The number of previous events that are retained.
     */
    constructor(memory?: number);
    constructor(options?: Partial<TimelineOptions>);
    static getDefaults(): TimelineOptions;
    /**
     * The number of items in the timeline.
     */
    get length(): number;
    /**
     * Insert an event object onto the timeline. Events must have a "time" attribute.
     * @param event  The event object to insert into the timeline.
     */
    add(event: GenericEvent): this;
    /**
     * Remove an event from the timeline.
     * @param  {Object}  event  The event object to remove from the list.
     * @returns {Timeline} this
     */
    remove(event: GenericEvent): this;
    /**
     * Get the nearest event whose time is less than or equal to the given time.
     * @param  time  The time to query.
     */
    get(time: number, param?: TimelineSearchParam): GenericEvent | null;
    /**
     * Return the first event in the timeline without removing it
     * @returns {Object} The first event object
     * @deprecated
     */
    peek(): GenericEvent | undefined;
    /**
     * Return the first event in the timeline and remove it
     * @deprecated
     */
    shift(): GenericEvent | undefined;
    /**
     * Get the event which is scheduled after the given time.
     * @param  time  The time to query.
     */
    getAfter(time: number, param?: TimelineSearchParam): GenericEvent | null;
    /**
     * Get the event before the event at the given time.
     * @param  time  The time to query.
     */
    getBefore(time: number): GenericEvent | null;
    /**
     * Cancel events at and after the given time
     * @param  after  The time to query.
     */
    cancel(after: number): this;
    /**
     * Cancel events before or equal to the given time.
     * @param  time  The time to cancel before.
     */
    cancelBefore(time: number): this;
    /**
     * Returns the previous event if there is one. null otherwise
     * @param  event The event to find the previous one of
     * @return The event right before the given event
     */
    previousEvent(event: GenericEvent): GenericEvent | null;
    /**
     * Does a binary search on the timeline array and returns the
     * nearest event index whose time is after or equal to the given time.
     * If a time is searched before the first index in the timeline, -1 is returned.
     * If the time is after the end, the index of the last item is returned.
     */
    protected _search(time: number, param?: TimelineSearchParam): number;
    /**
     * Internal iterator. Applies extra safety checks for
     * removing items from the array.
     */
    private _iterate;
    /**
     * Iterate over everything in the array
     * @param  callback The callback to invoke with every item
     */
    forEach(callback: (event: GenericEvent) => void): this;
    /**
     * Iterate over everything in the array at or before the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachBefore(time: Seconds, callback: (event: GenericEvent) => void): this;
    /**
     * Iterate over everything in the array after the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachAfter(time: Seconds, callback: (event: GenericEvent) => void): this;
    /**
     * Iterate over everything in the array between the startTime and endTime.
     * The timerange is inclusive of the startTime, but exclusive of the endTime.
     * range = [startTime, endTime).
     * @param  startTime The time to check if items are before
     * @param  endTime The end of the test interval.
     * @param  callback The callback to invoke with every item
     */
    forEachBetween(startTime: number, endTime: number, callback: (event: GenericEvent) => void): this;
    /**
     * Iterate over everything in the array at or after the given time. Similar to
     * forEachAfter, but includes the item(s) at the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachFrom(time: number, callback: (event: GenericEvent) => void): this;
    /**
     * Iterate over everything in the array at the given time
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachAtTime(time: number, callback: (event: GenericEvent) => void): this;
    /**
     * Clean up.
     */
    dispose(): this;
}
export {};
