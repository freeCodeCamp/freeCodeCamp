/**
 * @fileoverview A class to operate forking.
 *
 * This is state of forking.
 * This has a fork list and manages it.
 *
 * @author Toru Nagashima
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const assert = require("assert"),
    CodePathSegment = require("./code-path-segment");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Gets whether or not a given segment is reachable.
 * @param {CodePathSegment} segment A segment to get.
 * @returns {boolean} `true` if the segment is reachable.
 */
function isReachable(segment) {
    return segment.reachable;
}

/**
 * Creates new segments from the specific range of `context.segmentsList`.
 *
 * When `context.segmentsList` is `[[a, b], [c, d], [e, f]]`, `begin` is `0`, and
 * `end` is `-1`, this creates `[g, h]`. This `g` is from `a`, `c`, and `e`.
 * This `h` is from `b`, `d`, and `f`.
 * @param {ForkContext} context An instance.
 * @param {number} begin The first index of the previous segments.
 * @param {number} end The last index of the previous segments.
 * @param {Function} create A factory function of new segments.
 * @returns {CodePathSegment[]} New segments.
 */
function makeSegments(context, begin, end, create) {
    const list = context.segmentsList;

    const normalizedBegin = begin >= 0 ? begin : list.length + begin;
    const normalizedEnd = end >= 0 ? end : list.length + end;

    const segments = [];

    for (let i = 0; i < context.count; ++i) {
        const allPrevSegments = [];

        for (let j = normalizedBegin; j <= normalizedEnd; ++j) {
            allPrevSegments.push(list[j][i]);
        }

        segments.push(create(context.idGenerator.next(), allPrevSegments));
    }

    return segments;
}

/**
 * `segments` becomes doubly in a `finally` block. Then if a code path exits by a
 * control statement (such as `break`, `continue`) from the `finally` block, the
 * destination's segments may be half of the source segments. In that case, this
 * merges segments.
 * @param {ForkContext} context An instance.
 * @param {CodePathSegment[]} segments Segments to merge.
 * @returns {CodePathSegment[]} The merged segments.
 */
function mergeExtraSegments(context, segments) {
    let currentSegments = segments;

    while (currentSegments.length > context.count) {
        const merged = [];

        for (let i = 0, length = currentSegments.length / 2 | 0; i < length; ++i) {
            merged.push(CodePathSegment.newNext(
                context.idGenerator.next(),
                [currentSegments[i], currentSegments[i + length]]
            ));
        }
        currentSegments = merged;
    }
    return currentSegments;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * A class to manage forking.
 */
class ForkContext {

    // eslint-disable-next-line jsdoc/require-description
    /**
     * @param {IdGenerator} idGenerator An identifier generator for segments.
     * @param {ForkContext|null} upper An upper fork context.
     * @param {number} count A number of parallel segments.
     */
    constructor(idGenerator, upper, count) {
        this.idGenerator = idGenerator;
        this.upper = upper;
        this.count = count;
        this.segmentsList = [];
    }

    /**
     * The head segments.
     * @type {CodePathSegment[]}
     */
    get head() {
        const list = this.segmentsList;

        return list.length === 0 ? [] : list[list.length - 1];
    }

    /**
     * A flag which shows empty.
     * @type {boolean}
     */
    get empty() {
        return this.segmentsList.length === 0;
    }

    /**
     * A flag which shows reachable.
     * @type {boolean}
     */
    get reachable() {
        const segments = this.head;

        return segments.length > 0 && segments.some(isReachable);
    }

    /**
     * Creates new segments from this context.
     * @param {number} begin The first index of previous segments.
     * @param {number} end The last index of previous segments.
     * @returns {CodePathSegment[]} New segments.
     */
    makeNext(begin, end) {
        return makeSegments(this, begin, end, CodePathSegment.newNext);
    }

    /**
     * Creates new segments from this context.
     * The new segments is always unreachable.
     * @param {number} begin The first index of previous segments.
     * @param {number} end The last index of previous segments.
     * @returns {CodePathSegment[]} New segments.
     */
    makeUnreachable(begin, end) {
        return makeSegments(this, begin, end, CodePathSegment.newUnreachable);
    }

    /**
     * Creates new segments from this context.
     * The new segments don't have connections for previous segments.
     * But these inherit the reachable flag from this context.
     * @param {number} begin The first index of previous segments.
     * @param {number} end The last index of previous segments.
     * @returns {CodePathSegment[]} New segments.
     */
    makeDisconnected(begin, end) {
        return makeSegments(this, begin, end, CodePathSegment.newDisconnected);
    }

    /**
     * Adds segments into this context.
     * The added segments become the head.
     * @param {CodePathSegment[]} segments Segments to add.
     * @returns {void}
     */
    add(segments) {
        assert(segments.length >= this.count, `${segments.length} >= ${this.count}`);

        this.segmentsList.push(mergeExtraSegments(this, segments));
    }

    /**
     * Replaces the head segments with given segments.
     * The current head segments are removed.
     * @param {CodePathSegment[]} segments Segments to add.
     * @returns {void}
     */
    replaceHead(segments) {
        assert(segments.length >= this.count, `${segments.length} >= ${this.count}`);

        this.segmentsList.splice(-1, 1, mergeExtraSegments(this, segments));
    }

    /**
     * Adds all segments of a given fork context into this context.
     * @param {ForkContext} context A fork context to add.
     * @returns {void}
     */
    addAll(context) {
        assert(context.count === this.count);

        const source = context.segmentsList;

        for (let i = 0; i < source.length; ++i) {
            this.segmentsList.push(source[i]);
        }
    }

    /**
     * Clears all segments in this context.
     * @returns {void}
     */
    clear() {
        this.segmentsList = [];
    }

    /**
     * Creates the root fork context.
     * @param {IdGenerator} idGenerator An identifier generator for segments.
     * @returns {ForkContext} New fork context.
     */
    static newRoot(idGenerator) {
        const context = new ForkContext(idGenerator, null, 1);

        context.add([CodePathSegment.newRoot(idGenerator.next())]);

        return context;
    }

    /**
     * Creates an empty fork context preceded by a given context.
     * @param {ForkContext} parentContext The parent fork context.
     * @param {boolean} forkLeavingPath A flag which shows inside of `finally` block.
     * @returns {ForkContext} New fork context.
     */
    static newEmpty(parentContext, forkLeavingPath) {
        return new ForkContext(
            parentContext.idGenerator,
            parentContext,
            (forkLeavingPath ? 2 : 1) * parentContext.count
        );
    }
}

module.exports = ForkContext;
