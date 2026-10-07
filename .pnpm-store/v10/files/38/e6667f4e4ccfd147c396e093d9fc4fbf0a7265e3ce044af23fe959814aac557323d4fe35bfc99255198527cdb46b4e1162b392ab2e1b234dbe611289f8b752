/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Florent Cailhol @ooflorent
*/

"use strict";

const { ConcatSource } = require("webpack-sources");
const makeSerializable = require("./util/makeSerializable");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("./Generator").GenerateContext} GenerateContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("./serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */

/** @typedef {string} InitFragmentKey */

/**
 * Defines the maybe mergeable init fragment type used by this module.
 * @template GenerateContext
 * @typedef {object} MaybeMergeableInitFragment
 * @property {InitFragmentKey=} key
 * @property {number} stage
 * @property {number} position
 * @property {(context: GenerateContext) => string | Source | undefined} getContent
 * @property {(context: GenerateContext) => string | Source | undefined} getEndContent
 * @property {(fragments: MaybeMergeableInitFragment<GenerateContext>) => MaybeMergeableInitFragment<GenerateContext>=} merge
 * @property {(fragments: MaybeMergeableInitFragment<GenerateContext>[]) => MaybeMergeableInitFragment<GenerateContext>[]=} mergeAll
 */

/**
 * Extract fragment index.
 * @template T
 * @param {T} fragment the init fragment
 * @param {number} index index
 * @returns {[T, number]} tuple with both
 */
const extractFragmentIndex = (fragment, index) => [fragment, index];

/**
 * Sorts fragment with index.
 * @template T
 * @param {[MaybeMergeableInitFragment<T>, number]} a first pair
 * @param {[MaybeMergeableInitFragment<T>, number]} b second pair
 * @returns {number} sort value
 */
const sortFragmentWithIndex = ([a, i], [b, j]) => {
	const stageCmp = a.stage - b.stage;
	if (stageCmp !== 0) return stageCmp;
	const positionCmp = a.position - b.position;
	if (positionCmp !== 0) return positionCmp;
	return i - j;
};

/**
 * Represents InitFragment.
 * @template GenerateContext
 * @implements {MaybeMergeableInitFragment<GenerateContext>}
 */
class InitFragment {
	/**
	 * Creates an instance of InitFragment.
	 * @param {string | Source | undefined} content the source code that will be included as initialization code
	 * @param {number} stage category of initialization code (contribute to order)
	 * @param {number} position position in the category (contribute to order)
	 * @param {InitFragmentKey=} key unique key to avoid emitting the same initialization code twice
	 * @param {string | Source=} endContent the source code that will be included at the end of the module
	 */
	constructor(content, stage, position, key, endContent) {
		this.content = content;
		this.stage = stage;
		this.position = position;
		this.key = key;
		this.endContent = endContent;
	}

	/**
	 * Returns the source code that will be included as initialization code.
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent(context) {
		return this.content;
	}

	/**
	 * Returns the source code that will be included at the end of the module.
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included at the end of the module
	 */
	getEndContent(context) {
		return this.endContent;
	}

	/**
	 * Adds the provided source to the init fragment.
	 * @template Context
	 * @param {Source} source sources
	 * @param {MaybeMergeableInitFragment<Context>[]} initFragments init fragments
	 * @param {Context} context context
	 * @returns {Source} source
	 */
	static addToSource(source, initFragments, context) {
		if (initFragments.length > 0) {
			// Sort fragments by position. If 2 fragments have the same position,
			// use their index.
			const sortedFragments = initFragments
				.map(extractFragmentIndex)
				.sort(sortFragmentWithIndex);

			// Deduplicate fragments. If a fragment has no key, it is always included.
			/** @type {Map<InitFragmentKey | symbol, MaybeMergeableInitFragment<Context> | MaybeMergeableInitFragment<Context>[]>} */
			const keyedFragments = new Map();
			for (const [fragment] of sortedFragments) {
				if (typeof fragment.mergeAll === "function") {
					if (!fragment.key) {
						throw new Error(
							`InitFragment with mergeAll function must have a valid key: ${fragment.constructor.name}`
						);
					}
					const oldValue = keyedFragments.get(fragment.key);
					if (oldValue === undefined) {
						keyedFragments.set(fragment.key, fragment);
					} else if (Array.isArray(oldValue)) {
						oldValue.push(fragment);
					} else {
						keyedFragments.set(fragment.key, [oldValue, fragment]);
					}
					continue;
				} else if (typeof fragment.merge === "function") {
					const key = /** @type {InitFragmentKey} */ (fragment.key);
					const oldValue =
						/** @type {MaybeMergeableInitFragment<Context>} */
						(keyedFragments.get(key));
					if (oldValue !== undefined) {
						keyedFragments.set(key, fragment.merge(oldValue));
						continue;
					}
				}
				keyedFragments.set(fragment.key || Symbol("fragment key"), fragment);
			}

			const concatSource = new ConcatSource();
			/** @type {(string | Source)[]} */
			const endContents = [];
			for (let fragment of keyedFragments.values()) {
				if (Array.isArray(fragment)) {
					fragment =
						/** @type {[MaybeMergeableInitFragment<Context> & { mergeAll: (fragments: MaybeMergeableInitFragment<Context>[]) => MaybeMergeableInitFragment<Context>[] }, ...MaybeMergeableInitFragment<Context>[]]} */
						(fragment)[0].mergeAll(fragment);
				}
				const content =
					/** @type {MaybeMergeableInitFragment<Context>} */
					(fragment).getContent(context);
				if (content) {
					concatSource.add(content);
				}
				const endContent =
					/** @type {MaybeMergeableInitFragment<Context>} */
					(fragment).getEndContent(context);
				if (endContent) {
					endContents.push(endContent);
				}
			}

			concatSource.add(source);
			for (const content of endContents.reverse()) {
				concatSource.add(content);
			}
			return concatSource;
		}
		return source;
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;

		write(this.content);
		write(this.stage);
		write(this.position);
		write(this.key);
		write(this.endContent);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;

		this.content = read();
		this.stage = read();
		this.position = read();
		this.key = read();
		this.endContent = read();
	}
}

makeSerializable(InitFragment, "webpack/lib/InitFragment");

InitFragment.STAGE_CONSTANTS = 10;
InitFragment.STAGE_ASYNC_BOUNDARY = 20;
InitFragment.STAGE_HARMONY_EXPORTS = 30;
InitFragment.STAGE_HARMONY_IMPORTS = 40;
InitFragment.STAGE_PROVIDES = 50;
InitFragment.STAGE_ASYNC_DEPENDENCIES = 60;
InitFragment.STAGE_ASYNC_HARMONY_IMPORTS = 70;

module.exports = InitFragment;
