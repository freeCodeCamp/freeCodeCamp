import { Tone } from "../Tone.js";
/**
 * An IntervalTimeline event must have a time and duration
 */
export interface IntervalTimelineEvent {
    time: number;
    duration: number;
    [propName: string]: any;
}
type IteratorCallback = (event: IntervalTimelineEvent) => void;
/**
 * Similar to Tone.Timeline, but all events represent
 * intervals with both "time" and "duration" times. The
 * events are placed in a tree structure optimized
 * for querying an intersection point with the timeline
 * events. Internally uses an [Interval Tree](https://en.wikipedia.org/wiki/Interval_tree)
 * to represent the data.
 * @internal
 */
export declare class IntervalTimeline extends Tone {
    readonly name: string;
    /**
     * The root node of the inteval tree
     */
    private _root;
    /**
     * Keep track of the length of the timeline.
     */
    private _length;
    /**
     * The event to add to the timeline. All events must
     * have a time and duration value
     * @param  event  The event to add to the timeline
     */
    add(event: IntervalTimelineEvent): this;
    /**
     * Remove an event from the timeline.
     * @param  event  The event to remove from the timeline
     */
    remove(event: IntervalTimelineEvent): this;
    /**
     * The number of items in the timeline.
     * @readOnly
     */
    get length(): number;
    /**
     * Remove events whose time time is after the given time
     * @param  after  The time to query.
     */
    cancel(after: number): this;
    /**
     * Set the root node as the given node
     */
    private _setRoot;
    /**
     * Replace the references to the node in the node's parent
     * with the replacement node.
     */
    private _replaceNodeInParent;
    /**
     * Remove the node from the tree and replace it with
     * a successor which follows the schema.
     */
    private _removeNode;
    /**
     * Rotate the tree to the left
     */
    private _rotateLeft;
    /**
     * Rotate the tree to the right
     */
    private _rotateRight;
    /**
     * Balance the BST
     */
    private _rebalance;
    /**
     * Get an event whose time and duration span the give time. Will
     * return the match whose "time" value is closest to the given time.
     * @return  The event which spans the desired time
     */
    get(time: number): IntervalTimelineEvent | null;
    /**
     * Iterate over everything in the timeline.
     * @param  callback The callback to invoke with every item
     */
    forEach(callback: IteratorCallback): this;
    /**
     * Iterate over everything in the array in which the given time
     * overlaps with the time and duration time of the event.
     * @param  time The time to check if items are overlapping
     * @param  callback The callback to invoke with every item
     */
    forEachAtTime(time: number, callback: IteratorCallback): this;
    /**
     * Iterate over everything in the array in which the time is greater
     * than or equal to the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachFrom(time: number, callback: IteratorCallback): this;
    /**
     * Clean up
     */
    dispose(): this;
}
export {};
