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

const assert = require("../../shared/assert"),
	CodePathSegment = require("./code-path-segment");

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

/**
 * Determines whether or not a given segment is reachable.
 * @param {CodePathSegment} segment The segment to check.
 * @returns {boolean} `true` if the segment is reachable.
 */
function isReachable(segment) {
	return segment.reachable;
}

/**
 * Creates a new segment for each fork in the given context and appends it
 * to the end of the specified range of segments. Ultimately, this ends up calling
 * `new CodePathSegment()` for each of the forks using the `create` argument
 * as a wrapper around special behavior.
 *
 * The `startIndex` and `endIndex` arguments specify a range of segments in
 * `context` that should become `allPrevSegments` for the newly created
 * `CodePathSegment` objects.
 *
 * When `context.segmentsList` is `[[a, b], [c, d], [e, f]]`, `begin` is `0`, and
 * `end` is `-1`, this creates two new segments, `[g, h]`. This `g` is appended to
 * the end of the path from `a`, `c`, and `e`. This `h` is appended to the end of
 * `b`, `d`, and `f`.
 * @param {ForkContext} context An instance from which the previous segments
 *      will be obtained.
 * @param {number} startIndex The index of the first segment in the context
 *      that should be specified as previous segments for the newly created segments.
 * @param {number} endIndex The index of the last segment in the context
 *      that should be specified as previous segments for the newly created segments.
 * @param {Function} create A function that creates new `CodePathSegment`
 *      instances in a particular way. See the `CodePathSegment.new*` methods.
 * @returns {Array<CodePathSegment>} An array of the newly-created segments.
 */
function createSegments(context, startIndex, endIndex, create) {
	/** @type {Array<Array<CodePathSegment>>} */
	const list = context.segmentsList;

	/*
	 * Both `startIndex` and `endIndex` work the same way: if the number is zero
	 * or more, then the number is used as-is. If the number is negative,
	 * then that number is added to the length of the segments list to
	 * determine the index to use. That means -1 for either argument
	 * is the last element, -2 is the second to last, and so on.
	 *
	 * So if `startIndex` is 0, `endIndex` is -1, and `list.length` is 3, the
	 * effective `startIndex` is 0 and the effective `endIndex` is 2, so this function
	 * will include items at indices 0, 1, and 2.
	 *
	 * Therefore, if `startIndex` is -1 and `endIndex` is -1, that means we'll only
	 * be using the last segment in `list`.
	 */
	const normalizedBegin =
		startIndex >= 0 ? startIndex : list.length + startIndex;
	const normalizedEnd = endIndex >= 0 ? endIndex : list.length + endIndex;

	/** @type {Array<CodePathSegment>} */
	const segments = [];

	for (let i = 0; i < context.count; ++i) {
		// this is passed into `new CodePathSegment` to add to code path.
		const allPrevSegments = [];

		for (let j = normalizedBegin; j <= normalizedEnd; ++j) {
			allPrevSegments.push(list[j][i]);
		}

		// note: `create` is just a wrapper that augments `new CodePathSegment`.
		segments.push(create(context.idGenerator.next(), allPrevSegments));
	}

	return segments;
}

/**
 * Inside of a `finally` block we end up with two parallel paths. If the code path
 * exits by a control statement (such as `break` or `continue`) from the `finally`
 * block, then we need to merge the remaining parallel paths back into one.
 * @param {ForkContext} context The fork context to work on.
 * @param {Array<CodePathSegment>} segments Segments to merge.
 * @returns {Array<CodePathSegment>} The merged segments.
 */
function mergeExtraSegments(context, segments) {
	let currentSegments = segments;

	/*
	 * We need to ensure that the array returned from this function contains no more
	 * than the number of segments that the context allows. `context.count` indicates
	 * how many items should be in the returned array to ensure that the new segment
	 * entries will line up with the already existing segment entries.
	 */
	while (currentSegments.length > context.count) {
		const merged = [];

		/*
		 * Because `context.count` is a factor of 2 inside of a `finally` block,
		 * we can divide the segment count by 2 to merge the paths together.
		 * This loops through each segment in the list and creates a new `CodePathSegment`
		 * that has the segment and the segment two slots away as previous segments.
		 *
		 * If `currentSegments` is [a,b,c,d], this will create new segments e and f, such
		 * that:
		 *
		 * When `i` is 0:
		 * a->e
		 * c->e
		 *
		 * When `i` is 1:
		 * b->f
		 * d->f
		 */
		for (
			let i = 0, length = Math.floor(currentSegments.length / 2);
			i < length;
			++i
		) {
			merged.push(
				CodePathSegment.newNext(context.idGenerator.next(), [
					currentSegments[i],
					currentSegments[i + length],
				]),
			);
		}

		/*
		 * Go through the loop condition one more time to see if we have the
		 * number of segments for the context. If not, we'll keep merging paths
		 * of the merged segments until we get there.
		 */
		currentSegments = merged;
	}

	return currentSegments;
}

//------------------------------------------------------------------------------
// Public Interface
//------------------------------------------------------------------------------

/**
 * Manages the forking of code paths.
 */
class ForkContext {
	/**
	 * Creates a new instance.
	 * @param {IdGenerator} idGenerator An identifier generator for segments.
	 * @param {ForkContext|null} upper The preceding fork context.
	 * @param {number} count The number of parallel segments in each element
	 *      of `segmentsList`.
	 */
	constructor(idGenerator, upper, count) {
		/**
		 * The ID generator that will generate segment IDs for any new
		 * segments that are created.
		 * @type {IdGenerator}
		 */
		this.idGenerator = idGenerator;

		/**
		 * The preceding fork context.
		 * @type {ForkContext|null}
		 */
		this.upper = upper;

		/**
		 * The number of elements in each element of `segmentsList`. In most
		 * cases, this is 1 but can be 2 when there is a `finally` present,
		 * which forks the code path outside of normal flow. In the case of nested
		 * `finally` blocks, this can be a multiple of 2.
		 * @type {number}
		 */
		this.count = count;

		/**
		 * The segments within this context. Each element in this array has
		 * `count` elements that represent one step in each fork. For example,
		 * when `segmentsList` is `[[a, b], [c, d], [e, f]]`, there is one path
		 * a->c->e and one path b->d->f, and `count` is 2 because each element
		 * is an array with two elements.
		 * @type {Array<Array<CodePathSegment>>}
		 */
		this.segmentsList = [];
	}

	/**
	 * The segments that begin this fork context.
	 * @type {Array<CodePathSegment>}
	 */
	get head() {
		const list = this.segmentsList;

		return list.length === 0 ? [] : list.at(-1);
	}

	/**
	 * Indicates if the context contains no segments.
	 * @type {boolean}
	 */
	get empty() {
		return this.segmentsList.length === 0;
	}

	/**
	 * Indicates if there are any segments that are reachable.
	 * @type {boolean}
	 */
	get reachable() {
		const segments = this.head;

		return segments.length > 0 && segments.some(isReachable);
	}

	/**
	 * Creates new segments in this context and appends them to the end of the
	 * already existing `CodePathSegment`s specified by `startIndex` and
	 * `endIndex`.
	 * @param {number} startIndex The index of the first segment in the context
	 *      that should be specified as previous segments for the newly created segments.
	 * @param {number} endIndex The index of the last segment in the context
	 *      that should be specified as previous segments for the newly created segments.
	 * @returns {Array<CodePathSegment>} An array of the newly created segments.
	 */
	makeNext(startIndex, endIndex) {
		return createSegments(
			this,
			startIndex,
			endIndex,
			CodePathSegment.newNext,
		);
	}

	/**
	 * Creates new unreachable segments in this context and appends them to the end of the
	 * already existing `CodePathSegment`s specified by `startIndex` and
	 * `endIndex`.
	 * @param {number} startIndex The index of the first segment in the context
	 *      that should be specified as previous segments for the newly created segments.
	 * @param {number} endIndex The index of the last segment in the context
	 *      that should be specified as previous segments for the newly created segments.
	 * @returns {Array<CodePathSegment>} An array of the newly created segments.
	 */
	makeUnreachable(startIndex, endIndex) {
		return createSegments(
			this,
			startIndex,
			endIndex,
			CodePathSegment.newUnreachable,
		);
	}

	/**
	 * Creates new segments in this context and does not append them to the end
	 *  of the already existing `CodePathSegment`s specified by `startIndex` and
	 * `endIndex`. The `startIndex` and `endIndex` are only used to determine if
	 * the new segments should be reachable. If any of the segments in this range
	 * are reachable then the new segments are also reachable; otherwise, the new
	 * segments are unreachable.
	 * @param {number} startIndex The index of the first segment in the context
	 *      that should be considered for reachability.
	 * @param {number} endIndex The index of the last segment in the context
	 *      that should be considered for reachability.
	 * @returns {Array<CodePathSegment>} An array of the newly created segments.
	 */
	makeDisconnected(startIndex, endIndex) {
		return createSegments(
			this,
			startIndex,
			endIndex,
			CodePathSegment.newDisconnected,
		);
	}

	/**
	 * Adds segments to the head of this context.
	 * @param {Array<CodePathSegment>} segments The segments to add.
	 * @returns {void}
	 */
	add(segments) {
		assert(
			segments.length >= this.count,
			`${segments.length} >= ${this.count}`,
		);
		this.segmentsList.push(mergeExtraSegments(this, segments));
	}

	/**
	 * Replaces the head segments with the given segments.
	 * The current head segments are removed.
	 * @param {Array<CodePathSegment>} replacementHeadSegments The new head segments.
	 * @returns {void}
	 */
	replaceHead(replacementHeadSegments) {
		assert(
			replacementHeadSegments.length >= this.count,
			`${replacementHeadSegments.length} >= ${this.count}`,
		);
		this.segmentsList.splice(
			-1,
			1,
			mergeExtraSegments(this, replacementHeadSegments),
		);
	}

	/**
	 * Adds all segments of a given fork context into this context.
	 * @param {ForkContext} otherForkContext The fork context to add from.
	 * @returns {void}
	 */
	addAll(otherForkContext) {
		assert(otherForkContext.count === this.count);
		this.segmentsList.push(...otherForkContext.segmentsList);
	}

	/**
	 * Clears all segments in this context.
	 * @returns {void}
	 */
	clear() {
		this.segmentsList = [];
	}

	/**
	 * Creates a new root context, meaning that there are no parent
	 * fork contexts.
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
	 * @param {boolean} shouldForkLeavingPath Indicates that we are inside of
	 *      a `finally` block and should therefore fork the path that leaves
	 *      `finally`.
	 * @returns {ForkContext} New fork context.
	 */
	static newEmpty(parentContext, shouldForkLeavingPath) {
		return new ForkContext(
			parentContext.idGenerator,
			parentContext,
			(shouldForkLeavingPath ? 2 : 1) * parentContext.count,
		);
	}
}

module.exports = ForkContext;
