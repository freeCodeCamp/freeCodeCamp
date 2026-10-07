/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class AsyncModuleRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("async module");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		const fn = RuntimeGlobals.asyncModule;
		return Template.asString([
			'var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";',
			`var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "${RuntimeGlobals.exports}";`,
			'var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";',
			`var resolveQueue = ${runtimeTemplate.basicFunction("queue", [
				"if(queue && queue.d < 1) {",
				Template.indent([
					"queue.d = 1;",
					`queue.forEach(${runtimeTemplate.expressionFunction(
						"fn.r--",
						"fn"
					)});`,
					`queue.forEach(${runtimeTemplate.expressionFunction(
						"fn.r-- ? fn.r++ : fn()",
						"fn"
					)});`
				]),
				"}"
			])}`,
			`var wrapDeps = ${runtimeTemplate.returningFunction(
				`deps.map(${runtimeTemplate.basicFunction("dep", [
					'if(dep !== null && typeof dep === "object") {',
					Template.indent([
						"if(dep[webpackQueues]) return dep;",
						"if(dep.then) {",
						Template.indent([
							"var queue = [];",
							"queue.d = 0;",
							`dep.then(${runtimeTemplate.basicFunction("r", [
								"obj[webpackExports] = r;",
								"resolveQueue(queue);"
							])}, ${runtimeTemplate.basicFunction("e", [
								"obj[webpackError] = e;",
								"resolveQueue(queue);"
							])});`,
							"var obj = {};",
							`obj[webpackQueues] = ${runtimeTemplate.expressionFunction(
								"fn(queue)",
								"fn"
							)};`,
							"return obj;"
						]),
						"}"
					]),
					"}",
					"var ret = {};",
					`ret[webpackQueues] = ${runtimeTemplate.emptyFunction()};`,
					"ret[webpackExports] = dep;",
					"return ret;"
				])})`,
				"deps"
			)};`,
			`${fn} = ${runtimeTemplate.basicFunction("module, body, hasAwait", [
				"var queue;",
				"hasAwait && ((queue = []).d = -1);",
				"var depQueues = new Set();",
				"var exports = module.exports;",
				"var currentDeps;",
				"var outerResolve;",
				"var reject;",
				`var promise = new Promise(${runtimeTemplate.basicFunction(
					"resolve, rej",
					["reject = rej;", "outerResolve = resolve;"]
				)});`,
				"promise[webpackExports] = exports;",
				`promise[webpackQueues] = ${runtimeTemplate.expressionFunction(
					`queue && fn(queue), depQueues.forEach(fn), promise["catch"](${runtimeTemplate.emptyFunction()})`,
					"fn"
				)};`,
				"module.exports = promise;",
				`body(${runtimeTemplate.basicFunction("deps", [
					"currentDeps = wrapDeps(deps);",
					"var fn;",
					`var getResult = ${runtimeTemplate.returningFunction(
						`currentDeps.map(${runtimeTemplate.basicFunction("d", [
							"if(d[webpackError]) throw d[webpackError];",
							"return d[webpackExports];"
						])})`
					)}`,
					`var promise = new Promise(${runtimeTemplate.basicFunction(
						"resolve",
						[
							`fn = ${runtimeTemplate.expressionFunction(
								"resolve(getResult)",
								""
							)};`,
							"fn.r = 0;",
							`var fnQueue = ${runtimeTemplate.expressionFunction(
								"q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn)))",
								"q"
							)};`,
							`currentDeps.map(${runtimeTemplate.expressionFunction(
								"dep[webpackQueues](fnQueue)",
								"dep"
							)});`
						]
					)});`,
					"return fn.r ? promise : getResult();"
				])}, ${runtimeTemplate.expressionFunction(
					"(err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)",
					"err"
				)});`,
				"queue && queue.d < 0 && (queue.d = 0);"
			])};`
		]);
	}
}

module.exports = AsyncModuleRuntimeModule;
