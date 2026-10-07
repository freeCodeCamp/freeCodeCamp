/**
 * @import {Event} from 'micromark-util-types'
 */
/**
 * @typedef {[number, number, Array<Event>]} Change
 * @typedef {[number, number, number]} Jump
 */
/**
 * Tracks a bunch of edits.
 */
export class EditMap {
    /**
     * Record of changes.
     *
     * @type {Array<Change>}
     */
    map: Array<Change>;
    /**
     * Create an edit: a remove and/or add at a certain place.
     *
     * @param {number} index
     * @param {number} remove
     * @param {Array<Event>} add
     * @returns {undefined}
     */
    add(index: number, remove: number, add: Array<Event>): undefined;
    /**
     * Done, change the events.
     *
     * @param {Array<Event>} events
     * @returns {undefined}
     */
    consume(events: Array<Event>): undefined;
}
export type Change = [number, number, Array<Event>];
export type Jump = [number, number, number];
import type { Event } from 'micromark-util-types';
//# sourceMappingURL=edit-map.d.ts.map