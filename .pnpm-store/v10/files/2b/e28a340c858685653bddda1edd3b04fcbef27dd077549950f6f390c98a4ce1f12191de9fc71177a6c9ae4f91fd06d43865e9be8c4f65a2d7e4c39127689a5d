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

/**
 * @template T
 * @param {InitFragment<T>} fragment the init fragment
 * @param {number} index index
 * @returns {[InitFragment<T>, number]} tuple with both
 */
const extractFragmentIndex = (fragment, index) => [fragment, index];

/**
 * @template T
 * @param {[InitFragment<T>, number]} a first pair
 * @param {[InitFragment<T>, number]} b second pair
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
 * @template GenerateContext
 */
class InitFragment {
	/**
	 * @param {string | Source | undefined} content the source code that will be included as initialization code
	 * @param {number} stage category of initialization code (contribute to order)
	 * @param {number} position position in the category (contribute to order)
	 * @param {string=} key unique key to avoid emitting the same initialization code twice
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
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent(context) {
		return this.content;
	}

	/**
	 * @param {GenerateContext} context context
	 * @returns {string|Source=} the source code that will be included at the end of the module
	 */
	getEndContent(context) {
		return this.endContent;
	}

	/**
	 * @template Context
	 * @template T
	 * @param {Source} source sources
	 * @param {InitFragment<T>[]} initFragments init fragments
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
			const keyedFragments = new Map();
			for (const [fragment] of sortedFragments) {
				if (
					typeof (
						/** @type {InitFragment<T> & { mergeAll?: (fragments: InitFragment<Context>[]) => InitFragment<Context>[] }} */
						(fragment).mergeAll
					) === "function"
				) {
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
					const oldValue = keyedFragments.get(fragment.key);
					if (oldValue !== undefined) {
						keyedFragments.set(fragment.key, fragment.merge(oldValue));
						continue;
					}
				}
				keyedFragments.set(fragment.key || Symbol("fragment key"), fragment);
			}

			const concatSource = new ConcatSource();
			const endContents = [];
			for (let fragment of keyedFragments.values()) {
				if (Array.isArray(fragment)) {
					fragment = fragment[0].mergeAll(fragment);
				}
				concatSource.add(fragment.getContent(context));
				const endContent = fragment.getEndContent(context);
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

InitFragment.prototype.merge =
	/** @type {TODO} */
	(undefined);

InitFragment.STAGE_CONSTANTS = 10;
InitFragment.STAGE_ASYNC_BOUNDARY = 20;
InitFragment.STAGE_HARMONY_EXPORTS = 30;
InitFragment.STAGE_HARMONY_IMPORTS = 40;
InitFragment.STAGE_PROVIDES = 50;
InitFragment.STAGE_ASYNC_DEPENDENCIES = 60;
InitFragment.STAGE_ASYNC_HARMONY_IMPORTS = 70;

module.exports = InitFragment;
