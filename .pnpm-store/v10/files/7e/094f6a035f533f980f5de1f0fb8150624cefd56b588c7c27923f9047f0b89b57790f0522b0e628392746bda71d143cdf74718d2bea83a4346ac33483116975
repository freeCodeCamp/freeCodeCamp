/**
 * @fileoverview A class of the code path segment.
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const debug = require("./debug-helpers");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether or not a given segment is reachable.
 * @param {CodePathSegment} segment A segment to check.
 * @returns {boolean} `true` if the segment is reachable.
 */
function isReachable(segment) {
    return segment.reachable;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * A code path segment.
 */
class CodePathSegment {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {string} id An identifier.
     * @param {CodePathSegment[]} allPrevSegments An array of the previous segments.
     *   This array includes unreachable segments.
     * @param {boolean} reachable A flag which shows this is reachable.
     */
    constructor(id, allPrevSegments, reachable) {

        /**
         * The identifier of this code path.
         * Rules use it to store additional information of each rule.
         * @type {string}
         */
        this.id = id;

        /**
         * An array of the next segments.
         * @type {CodePathSegment[]}
         */
        this.nextSegments = [];

        /**
         * An array of the previous segments.
         * @type {CodePathSegment[]}
         */
        this.prevSegments = allPrevSegments.filter(isReachable);

        /**
         * An array of the next segments.
         * This array includes unreachable segments.
         * @type {CodePathSegment[]}
         */
        this.allNextSegments = [];

        /**
         * An array of the previous segments.
         * This array includes unreachable segments.
         * @type {CodePathSegment[]}
         */
        this.allPrevSegments = allPrevSegments;

        /**
         * A flag which shows this is reachable.
         * @type {boolean}
         */
        this.reachable = reachable;

        // Internal data.
        Object.defineProperty(this, "internal", {
            value: {
                used: false,
                loopedPrevSegments: []
            }
        });

        /* istanbul ignore if */
        if (debug.enabled) {
            this.internal.nodes = [];
        }
    }

    /**
     * Checks a given previous segment is coming from the end of a loop.
     * @param {CodePathSegment} segment A previous segment to check.
     * @returns {boolean} `true` if the segment is coming from the end of a loop.
     */
    isLoopedPrevSegment(segment) {
        return this.internal.loopedPrevSegments.indexOf(segment) !== -1;
    }

    /**
     * Creates the root segment.
     * @param {string} id An identifier.
     * @returns {CodePathSegment} The created segment.
     */
    static newRoot(id) {
        return new CodePathSegment(id, [], true);
    }

    /**
     * Creates a segment that follows given segments.
     * @param {string} id An identifier.
     * @param {CodePathSegment[]} allPrevSegments An array of the previous segments.
     * @returns {CodePathSegment} The created segment.
     */
    static newNext(id, allPrevSegments) {
        return new CodePathSegment(
            id,
            CodePathSegment.flattenUnusedSegments(allPrevSegments),
            allPrevSegments.some(isReachable)
        );
    }

    /**
     * Creates an unreachable segment that follows given segments.
     * @param {string} id An identifier.
     * @param {CodePathSegment[]} allPrevSegments An array of the previous segments.
     * @returns {CodePathSegment} The created segment.
     */
    static newUnreachable(id, allPrevSegments) {
        const segment = new CodePathSegment(id, CodePathSegment.flattenUnusedSegments(allPrevSegments), false);

        /*
         * In `if (a) return a; foo();` case, the unreachable segment preceded by
         * the return statement is not used but must not be remove.
         */
        CodePathSegment.markUsed(segment);

        return segment;
    }

    /**
     * Creates a segment that follows given segments.
     * This factory method does not connect with `allPrevSegments`.
     * But this inherits `reachable` flag.
     * @param {string} id An identifier.
     * @param {CodePathSegment[]} allPrevSegments An array of the previous segments.
     * @returns {CodePathSegment} The created segment.
     */
    static newDisconnected(id, allPrevSegments) {
        return new CodePathSegment(id, [], allPrevSegments.some(isReachable));
    }

    /**
     * Makes a given segment being used.
     *
     * And this function registers the segment into the previous segments as a next.
     * @param {CodePathSegment} segment A segment to mark.
     * @returns {void}
     */
    static markUsed(segment) {
        if (segment.internal.used) {
            return;
        }
        segment.internal.used = true;

        let i;

        if (segment.reachable) {
            for (i = 0; i < segment.allPrevSegments.length; ++i) {
                const prevSegment = segment.allPrevSegments[i];

                prevSegment.allNextSegments.push(segment);
                prevSegment.nextSegments.push(segment);
            }
        } else {
            for (i = 0; i < segment.allPrevSegments.length; ++i) {
                segment.allPrevSegments[i].allNextSegments.push(segment);
            }
        }
    }

    /**
     * Marks a previous segment as looped.
     * @param {CodePathSegment} segment A segment.
     * @param {CodePathSegment} prevSegment A previous segment to mark.
     * @returns {void}
     */
    static markPrevSegmentAsLooped(segment, prevSegment) {
        segment.internal.loopedPrevSegments.push(prevSegment);
    }

    /**
     * Replaces unused segments with the previous segments of each unused segment.
     * @param {CodePathSegment[]} segments An array of segments to replace.
     * @returns {CodePathSegment[]} The replaced array.
     */
    static flattenUnusedSegments(segments) {
        const done = Object.create(null);
        const retv = [];

        for (let i = 0; i < segments.length; ++i) {
            const segment = segments[i];

            // Ignores duplicated.
            if (done[segment.id]) {
                continue;
            }

            // Use previous segments if unused.
            if (!segment.internal.used) {
                for (let j = 0; j < segment.allPrevSegments.length; ++j) {
                    const prevSegment = segment.allPrevSegments[j];

                    if (!done[prevSegment.id]) {
                        done[prevSegment.id] = true;
                        retv.push(prevSegment);
                    }
                }
            } else {
                done[segment.id] = true;
                retv.push(segment);
            }
        }

        return retv;
    }
}

module.exports = CodePathSegment;
