import { Tone } from "../Tone.js";
import { optionsFromArguments } from "./Defaults.js";
import { assert } from "./Debug.js";
import { EQ, GT, GTE, LT } from "./Math.js";
/**
 * A Timeline class for scheduling and maintaining state
 * along a timeline. All events must have a "time" property.
 * Internally, events are stored in time order for fast
 * retrieval.
 * @internal
 */
export class Timeline extends Tone {
    constructor() {
        super();
        this.name = "Timeline";
        /**
         * The array of scheduled timeline events
         */
        this._timeline = [];
        const options = optionsFromArguments(Timeline.getDefaults(), arguments, ["memory"]);
        this.memory = options.memory;
        this.increasing = options.increasing;
    }
    static getDefaults() {
        return {
            memory: Infinity,
            increasing: false,
        };
    }
    /**
     * The number of items in the timeline.
     */
    get length() {
        return this._timeline.length;
    }
    /**
     * Insert an event object onto the timeline. Events must have a "time" attribute.
     * @param event  The event object to insert into the timeline.
     */
    add(event) {
        // the event needs to have a time attribute
        assert(Reflect.has(event, "time"), "Timeline: events must have a time attribute");
        event.time = event.time.valueOf();
        if (this.increasing && this.length) {
            const lastValue = this._timeline[this.length - 1];
            assert(GTE(event.time, lastValue.time), "The time must be greater than or equal to the last scheduled time");
            this._timeline.push(event);
        }
        else {
            const index = this._search(event.time);
            this._timeline.splice(index + 1, 0, event);
        }
        // if the length is more than the memory, remove the previous ones
        if (this.length > this.memory) {
            const diff = this.length - this.memory;
            this._timeline.splice(0, diff);
        }
        return this;
    }
    /**
     * Remove an event from the timeline.
     * @param  {Object}  event  The event object to remove from the list.
     * @returns {Timeline} this
     */
    remove(event) {
        const index = this._timeline.indexOf(event);
        if (index !== -1) {
            this._timeline.splice(index, 1);
        }
        return this;
    }
    /**
     * Get the nearest event whose time is less than or equal to the given time.
     * @param  time  The time to query.
     */
    get(time, param = "time") {
        const index = this._search(time, param);
        if (index !== -1) {
            return this._timeline[index];
        }
        else {
            return null;
        }
    }
    /**
     * Return the first event in the timeline without removing it
     * @returns {Object} The first event object
     * @deprecated
     */
    peek() {
        return this._timeline[0];
    }
    /**
     * Return the first event in the timeline and remove it
     * @deprecated
     */
    shift() {
        return this._timeline.shift();
    }
    /**
     * Get the event which is scheduled after the given time.
     * @param  time  The time to query.
     */
    getAfter(time, param = "time") {
        const index = this._search(time, param);
        if (index + 1 < this._timeline.length) {
            return this._timeline[index + 1];
        }
        else {
            return null;
        }
    }
    /**
     * Get the event before the event at the given time.
     * @param  time  The time to query.
     */
    getBefore(time) {
        const len = this._timeline.length;
        // if it's after the last item, return the last item
        if (len > 0 && this._timeline[len - 1].time < time) {
            return this._timeline[len - 1];
        }
        const index = this._search(time);
        if (index - 1 >= 0) {
            return this._timeline[index - 1];
        }
        else {
            return null;
        }
    }
    /**
     * Cancel events at and after the given time
     * @param  after  The time to query.
     */
    cancel(after) {
        if (this._timeline.length > 1) {
            let index = this._search(after);
            if (index >= 0) {
                if (EQ(this._timeline[index].time, after)) {
                    // get the first item with that time
                    for (let i = index; i >= 0; i--) {
                        if (EQ(this._timeline[i].time, after)) {
                            index = i;
                        }
                        else {
                            break;
                        }
                    }
                    this._timeline = this._timeline.slice(0, index);
                }
                else {
                    this._timeline = this._timeline.slice(0, index + 1);
                }
            }
            else {
                this._timeline = [];
            }
        }
        else if (this._timeline.length === 1) {
            // the first item's time
            if (GTE(this._timeline[0].time, after)) {
                this._timeline = [];
            }
        }
        return this;
    }
    /**
     * Cancel events before or equal to the given time.
     * @param  time  The time to cancel before.
     */
    cancelBefore(time) {
        const index = this._search(time);
        if (index >= 0) {
            this._timeline = this._timeline.slice(index + 1);
        }
        return this;
    }
    /**
     * Returns the previous event if there is one. null otherwise
     * @param  event The event to find the previous one of
     * @return The event right before the given event
     */
    previousEvent(event) {
        const index = this._timeline.indexOf(event);
        if (index > 0) {
            return this._timeline[index - 1];
        }
        else {
            return null;
        }
    }
    /**
     * Does a binary search on the timeline array and returns the
     * nearest event index whose time is after or equal to the given time.
     * If a time is searched before the first index in the timeline, -1 is returned.
     * If the time is after the end, the index of the last item is returned.
     */
    _search(time, param = "time") {
        if (this._timeline.length === 0) {
            return -1;
        }
        let beginning = 0;
        const len = this._timeline.length;
        let end = len;
        if (len > 0 && this._timeline[len - 1][param] <= time) {
            return len - 1;
        }
        while (beginning < end) {
            // calculate the midpoint for roughly equal partition
            let midPoint = Math.floor(beginning + (end - beginning) / 2);
            const event = this._timeline[midPoint];
            const nextEvent = this._timeline[midPoint + 1];
            if (EQ(event[param], time)) {
                // choose the last one that has the same time
                for (let i = midPoint; i < this._timeline.length; i++) {
                    const testEvent = this._timeline[i];
                    if (EQ(testEvent[param], time)) {
                        midPoint = i;
                    }
                    else {
                        break;
                    }
                }
                return midPoint;
            }
            else if (LT(event[param], time) && GT(nextEvent[param], time)) {
                return midPoint;
            }
            else if (GT(event[param], time)) {
                // search lower
                end = midPoint;
            }
            else {
                // search upper
                beginning = midPoint + 1;
            }
        }
        return -1;
    }
    /**
     * Internal iterator. Applies extra safety checks for
     * removing items from the array.
     */
    _iterate(callback, lowerBound = 0, upperBound = this._timeline.length - 1) {
        this._timeline.slice(lowerBound, upperBound + 1).forEach(callback);
    }
    /**
     * Iterate over everything in the array
     * @param  callback The callback to invoke with every item
     */
    forEach(callback) {
        this._iterate(callback);
        return this;
    }
    /**
     * Iterate over everything in the array at or before the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachBefore(time, callback) {
        // iterate over the items in reverse so that removing an item doesn't break things
        const upperBound = this._search(time);
        if (upperBound !== -1) {
            this._iterate(callback, 0, upperBound);
        }
        return this;
    }
    /**
     * Iterate over everything in the array after the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachAfter(time, callback) {
        // iterate over the items in reverse so that removing an item doesn't break things
        const lowerBound = this._search(time);
        this._iterate(callback, lowerBound + 1);
        return this;
    }
    /**
     * Iterate over everything in the array between the startTime and endTime.
     * The timerange is inclusive of the startTime, but exclusive of the endTime.
     * range = [startTime, endTime).
     * @param  startTime The time to check if items are before
     * @param  endTime The end of the test interval.
     * @param  callback The callback to invoke with every item
     */
    forEachBetween(startTime, endTime, callback) {
        let lowerBound = this._search(startTime);
        let upperBound = this._search(endTime);
        if (lowerBound !== -1 && upperBound !== -1) {
            if (this._timeline[lowerBound].time !== startTime) {
                lowerBound += 1;
            }
            // exclusive of the end time
            if (this._timeline[upperBound].time === endTime) {
                upperBound -= 1;
            }
            this._iterate(callback, lowerBound, upperBound);
        }
        else if (lowerBound === -1) {
            this._iterate(callback, 0, upperBound);
        }
        return this;
    }
    /**
     * Iterate over everything in the array at or after the given time. Similar to
     * forEachAfter, but includes the item(s) at the given time.
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachFrom(time, callback) {
        // iterate over the items in reverse so that removing an item doesn't break things
        let lowerBound = this._search(time);
        // work backwards until the event time is less than time
        while (lowerBound >= 0 && this._timeline[lowerBound].time >= time) {
            lowerBound--;
        }
        this._iterate(callback, lowerBound + 1);
        return this;
    }
    /**
     * Iterate over everything in the array at the given time
     * @param  time The time to check if items are before
     * @param  callback The callback to invoke with every item
     */
    forEachAtTime(time, callback) {
        // iterate over the items in reverse so that removing an item doesn't break things
        const upperBound = this._search(time);
        if (upperBound !== -1 && EQ(this._timeline[upperBound].time, time)) {
            let lowerBound = upperBound;
            for (let i = upperBound; i >= 0; i--) {
                if (EQ(this._timeline[i].time, time)) {
                    lowerBound = i;
                }
                else {
                    break;
                }
            }
            this._iterate((event) => {
                callback(event);
            }, lowerBound, upperBound);
        }
        return this;
    }
    /**
     * Clean up.
     */
    dispose() {
        super.dispose();
        this._timeline = [];
        return this;
    }
}
//# sourceMappingURL=Timeline.js.map