/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const InitFragment = require("../InitFragment");
const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */

/**
 * @extends {InitFragment<GenerateContext>}
 */
class AwaitDependenciesInitFragment extends InitFragment {
	/**
	 * @param {Set<string>} promises the promises that should be awaited
	 */
	constructor(promises) {
		super(
			undefined,
			InitFragment.STAGE_ASYNC_DEPENDENCIES,
			0,
			"await-dependencies"
		);
		this.promises = promises;
	}

	/**
	 * @param {AwaitDependenciesInitFragment} other other AwaitDependenciesInitFragment
	 * @returns {AwaitDependenciesInitFragment} AwaitDependenciesInitFragment
	 */
	merge(other) {
		const promises = new Set(other.promises);
		for (const p of this.promises) {
			promises.add(p);
		}
		return new AwaitDependenciesInitFragment(promises);
	}

	/**
	 * @param {GenerateContext} context context
	 * @returns {string | Source | undefined} the source code that will be included as initialization code
	 */
	getContent({ runtimeRequirements }) {
		runtimeRequirements.add(RuntimeGlobals.module);
		const promises = this.promises;
		if (promises.size === 0) {
			return "";
		}
		if (promises.size === 1) {
			const [p] = promises;
			return Template.asString([
				`var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([${p}]);`,
				`${p} = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];`,
				""
			]);
		}
		const sepPromises = Array.from(promises).join(", ");
		// TODO check if destructuring is supported
		return Template.asString([
			`var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([${sepPromises}]);`,
			`([${sepPromises}] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);`,
			""
		]);
	}
}

module.exports = AwaitDependenciesInitFragment;
