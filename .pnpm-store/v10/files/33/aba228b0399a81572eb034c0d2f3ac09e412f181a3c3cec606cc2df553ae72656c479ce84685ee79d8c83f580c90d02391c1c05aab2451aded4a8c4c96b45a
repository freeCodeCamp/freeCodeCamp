/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const InitFragment = require("./InitFragment");
const RuntimeGlobals = require("./RuntimeGlobals");
const Template = require("./Template");
const { equals } = require("./util/ArrayHelpers");
const compileBooleanMatcher = require("./util/compileBooleanMatcher");
const propertyAccess = require("./util/propertyAccess");
const { forEachRuntime, subtractRuntime } = require("./util/runtime");

/** @typedef {import("../declarations/WebpackOptions").Environment} Environment */
/** @typedef {import("../declarations/WebpackOptions").OutputNormalized} OutputOptions */
/** @typedef {import("./AsyncDependenciesBlock")} AsyncDependenciesBlock */
/** @typedef {import("./Chunk")} Chunk */
/** @typedef {import("./ChunkGraph")} ChunkGraph */
/** @typedef {import("./CodeGenerationResults")} CodeGenerationResults */
/** @typedef {import("./CodeGenerationResults").CodeGenerationResult} CodeGenerationResult */
/** @typedef {import("./Compilation")} Compilation */
/** @typedef {import("./Dependency")} Dependency */
/** @typedef {import("./Module")} Module */
/** @typedef {import("./Module").BuildMeta} BuildMeta */
/** @typedef {import("./Module").RuntimeRequirements} RuntimeRequirements */
/** @typedef {import("./ModuleGraph")} ModuleGraph */
/** @typedef {import("./RequestShortener")} RequestShortener */
/** @typedef {import("./util/runtime").RuntimeSpec} RuntimeSpec */

/**
 * @param {Module} module the module
 * @param {ChunkGraph} chunkGraph the chunk graph
 * @returns {string} error message
 */
const noModuleIdErrorMessage = (
	module,
	chunkGraph
) => `Module ${module.identifier()} has no id assigned.
This should not happen.
It's in these chunks: ${
	Array.from(
		chunkGraph.getModuleChunksIterable(module),
		c => c.name || c.id || c.debugId
	).join(", ") || "none"
} (If module is in no chunk this indicates a bug in some chunk/module optimization logic)
Module has these incoming connections: ${Array.from(
	chunkGraph.moduleGraph.getIncomingConnections(module),
	connection =>
		`\n - ${
			connection.originModule && connection.originModule.identifier()
		} ${connection.dependency && connection.dependency.type} ${
			(connection.explanations &&
				Array.from(connection.explanations).join(", ")) ||
			""
		}`
).join("")}`;

/**
 * @param {string | undefined} definition global object definition
 * @returns {string | undefined} save to use global object
 */
function getGlobalObject(definition) {
	if (!definition) return definition;
	const trimmed = definition.trim();

	if (
		// identifier, we do not need real identifier regarding ECMAScript/Unicode
		/^[_\p{L}][_0-9\p{L}]*$/iu.test(trimmed) ||
		// iife
		// call expression
		// expression in parentheses
		/^([_\p{L}][_0-9\p{L}]*)?\(.*\)$/iu.test(trimmed)
	)
		return trimmed;

	return `Object(${trimmed})`;
}

class RuntimeTemplate {
	/**
	 * @param {Compilation} compilation the compilation
	 * @param {OutputOptions} outputOptions the compilation output options
	 * @param {RequestShortener} requestShortener the request shortener
	 */
	constructor(compilation, outputOptions, requestShortener) {
		this.compilation = compilation;
		this.outputOptions = /** @type {OutputOptions} */ (outputOptions || {});
		this.requestShortener = requestShortener;
		this.globalObject =
			/** @type {string} */
			(getGlobalObject(outputOptions.globalObject));
		this.contentHashReplacement = "X".repeat(
			/** @type {NonNullable<OutputOptions["hashDigestLength"]>} */
			(outputOptions.hashDigestLength)
		);
	}

	isIIFE() {
		return this.outputOptions.iife;
	}

	isModule() {
		return this.outputOptions.module;
	}

	isNeutralPlatform() {
		return (
			!this.outputOptions.environment.document &&
			!this.compilation.compiler.platform.node
		);
	}

	supportsConst() {
		return this.outputOptions.environment.const;
	}

	supportsArrowFunction() {
		return this.outputOptions.environment.arrowFunction;
	}

	supportsAsyncFunction() {
		return this.outputOptions.environment.asyncFunction;
	}

	supportsOptionalChaining() {
		return this.outputOptions.environment.optionalChaining;
	}

	supportsForOf() {
		return this.outputOptions.environment.forOf;
	}

	supportsDestructuring() {
		return this.outputOptions.environment.destructuring;
	}

	supportsBigIntLiteral() {
		return this.outputOptions.environment.bigIntLiteral;
	}

	supportsDynamicImport() {
		return this.outputOptions.environment.dynamicImport;
	}

	supportsEcmaScriptModuleSyntax() {
		return this.outputOptions.environment.module;
	}

	supportTemplateLiteral() {
		return this.outputOptions.environment.templateLiteral;
	}

	supportNodePrefixForCoreModules() {
		return this.outputOptions.environment.nodePrefixForCoreModules;
	}

	/**
	 * @param {string} returnValue return value
	 * @param {string} args arguments
	 * @returns {string} returning function
	 */
	returningFunction(returnValue, args = "") {
		return this.supportsArrowFunction()
			? `(${args}) => (${returnValue})`
			: `function(${args}) { return ${returnValue}; }`;
	}

	/**
	 * @param {string} args arguments
	 * @param {string | string[]} body body
	 * @returns {string} basic function
	 */
	basicFunction(args, body) {
		return this.supportsArrowFunction()
			? `(${args}) => {\n${Template.indent(body)}\n}`
			: `function(${args}) {\n${Template.indent(body)}\n}`;
	}

	/**
	 * @param {Array<string|{expr: string}>} args args
	 * @returns {string} result expression
	 */
	concatenation(...args) {
		const len = args.length;

		if (len === 2) return this._es5Concatenation(args);
		if (len === 0) return '""';
		if (len === 1) {
			return typeof args[0] === "string"
				? JSON.stringify(args[0])
				: `"" + ${args[0].expr}`;
		}
		if (!this.supportTemplateLiteral()) return this._es5Concatenation(args);

		// cost comparison between template literal and concatenation:
		// both need equal surroundings: `xxx` vs "xxx"
		// template literal has constant cost of 3 chars for each expression
		// es5 concatenation has cost of 3 + n chars for n expressions in row
		// when a es5 concatenation ends with an expression it reduces cost by 3
		// when a es5 concatenation starts with an single expression it reduces cost by 3
		// e. g. `${a}${b}${c}` (3*3 = 9) is longer than ""+a+b+c ((3+3)-3 = 3)
		// e. g. `x${a}x${b}x${c}x` (3*3 = 9) is shorter than "x"+a+"x"+b+"x"+c+"x" (4+4+4 = 12)

		let templateCost = 0;
		let concatenationCost = 0;

		let lastWasExpr = false;
		for (const arg of args) {
			const isExpr = typeof arg !== "string";
			if (isExpr) {
				templateCost += 3;
				concatenationCost += lastWasExpr ? 1 : 4;
			}
			lastWasExpr = isExpr;
		}
		if (lastWasExpr) concatenationCost -= 3;
		if (typeof args[0] !== "string" && typeof args[1] === "string")
			concatenationCost -= 3;

		if (concatenationCost <= templateCost) return this._es5Concatenation(args);

		return `\`${args
			.map(arg => (typeof arg === "string" ? arg : `\${${arg.expr}}`))
			.join("")}\``;
	}

	/**
	 * @param {Array<string|{expr: string}>} args args (len >= 2)
	 * @returns {string} result expression
	 * @private
	 */
	_es5Concatenation(args) {
		const str = args
			.map(arg => (typeof arg === "string" ? JSON.stringify(arg) : arg.expr))
			.join(" + ");

		// when the first two args are expression, we need to prepend "" + to force string
		// concatenation instead of number addition.
		return typeof args[0] !== "string" && typeof args[1] !== "string"
			? `"" + ${str}`
			: str;
	}

	/**
	 * @param {string} expression expression
	 * @param {string} args arguments
	 * @returns {string} expression function code
	 */
	expressionFunction(expression, args = "") {
		return this.supportsArrowFunction()
			? `(${args}) => (${expression})`
			: `function(${args}) { ${expression}; }`;
	}

	/**
	 * @returns {string} empty function code
	 */
	emptyFunction() {
		return this.supportsArrowFunction() ? "x => {}" : "function() {}";
	}

	/**
	 * @param {string[]} items items
	 * @param {string} value value
	 * @returns {string} destructure array code
	 */
	destructureArray(items, value) {
		return this.supportsDestructuring()
			? `var [${items.join(", ")}] = ${value};`
			: Template.asString(
					items.map((item, i) => `var ${item} = ${value}[${i}];`)
				);
	}

	/**
	 * @param {string[]} items items
	 * @param {string} value value
	 * @returns {string} destructure object code
	 */
	destructureObject(items, value) {
		return this.supportsDestructuring()
			? `var {${items.join(", ")}} = ${value};`
			: Template.asString(
					items.map(item => `var ${item} = ${value}${propertyAccess([item])};`)
				);
	}

	/**
	 * @param {string} args arguments
	 * @param {string} body body
	 * @returns {string} IIFE code
	 */
	iife(args, body) {
		return `(${this.basicFunction(args, body)})()`;
	}

	/**
	 * @param {string} variable variable
	 * @param {string} array array
	 * @param {string | string[]} body body
	 * @returns {string} for each code
	 */
	forEach(variable, array, body) {
		return this.supportsForOf()
			? `for(const ${variable} of ${array}) {\n${Template.indent(body)}\n}`
			: `${array}.forEach(function(${variable}) {\n${Template.indent(
					body
				)}\n});`;
	}

	/**
	 * Add a comment
	 * @param {object} options Information content of the comment
	 * @param {string=} options.request request string used originally
	 * @param {(string | null)=} options.chunkName name of the chunk referenced
	 * @param {string=} options.chunkReason reason information of the chunk
	 * @param {string=} options.message additional message
	 * @param {string=} options.exportName name of the export
	 * @returns {string} comment
	 */
	comment({ request, chunkName, chunkReason, message, exportName }) {
		let content;
		if (this.outputOptions.pathinfo) {
			content = [message, request, chunkName, chunkReason]
				.filter(Boolean)
				.map(item => this.requestShortener.shorten(item))
				.join(" | ");
		} else {
			content = [message, chunkName, chunkReason]
				.filter(Boolean)
				.map(item => this.requestShortener.shorten(item))
				.join(" | ");
		}
		if (!content) return "";
		if (this.outputOptions.pathinfo) {
			return `${Template.toComment(content)} `;
		}
		return `${Template.toNormalComment(content)} `;
	}

	/**
	 * @param {object} options generation options
	 * @param {string=} options.request request string used originally
	 * @returns {string} generated error block
	 */
	throwMissingModuleErrorBlock({ request }) {
		const err = `Cannot find module '${request}'`;
		return `var e = new Error(${JSON.stringify(
			err
		)}); e.code = 'MODULE_NOT_FOUND'; throw e;`;
	}

	/**
	 * @param {object} options generation options
	 * @param {string=} options.request request string used originally
	 * @returns {string} generated error function
	 */
	throwMissingModuleErrorFunction({ request }) {
		return `function webpackMissingModule() { ${this.throwMissingModuleErrorBlock(
			{ request }
		)} }`;
	}

	/**
	 * @param {object} options generation options
	 * @param {string=} options.request request string used originally
	 * @returns {string} generated error IIFE
	 */
	missingModule({ request }) {
		return `Object(${this.throwMissingModuleErrorFunction({ request })}())`;
	}

	/**
	 * @param {object} options generation options
	 * @param {string=} options.request request string used originally
	 * @returns {string} generated error statement
	 */
	missingModuleStatement({ request }) {
		return `${this.missingModule({ request })};\n`;
	}

	/**
	 * @param {object} options generation options
	 * @param {string=} options.request request string used originally
	 * @returns {string} generated error code
	 */
	missingModulePromise({ request }) {
		return `Promise.resolve().then(${this.throwMissingModuleErrorFunction({
			request
		})})`;
	}

	/**
	 * @param {object} options options object
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {Module} options.module the module
	 * @param {string=} options.request the request that should be printed as comment
	 * @param {string=} options.idExpr expression to use as id expression
	 * @param {"expression" | "promise" | "statements"} options.type which kind of code should be returned
	 * @returns {string} the code
	 */
	weakError({ module, chunkGraph, request, idExpr, type }) {
		const moduleId = chunkGraph.getModuleId(module);
		const errorMessage =
			moduleId === null
				? JSON.stringify("Module is not available (weak dependency)")
				: idExpr
					? `"Module '" + ${idExpr} + "' is not available (weak dependency)"`
					: JSON.stringify(
							`Module '${moduleId}' is not available (weak dependency)`
						);
		const comment = request ? `${Template.toNormalComment(request)} ` : "";
		const errorStatements = `var e = new Error(${errorMessage}); ${
			comment
		}e.code = 'MODULE_NOT_FOUND'; throw e;`;
		switch (type) {
			case "statements":
				return errorStatements;
			case "promise":
				return `Promise.resolve().then(${this.basicFunction(
					"",
					errorStatements
				)})`;
			case "expression":
				return this.iife("", errorStatements);
		}
	}

	/**
	 * @param {object} options options object
	 * @param {Module} options.module the module
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {string=} options.request the request that should be printed as comment
	 * @param {boolean=} options.weak if the dependency is weak (will create a nice error message)
	 * @returns {string} the expression
	 */
	moduleId({ module, chunkGraph, request, weak }) {
		if (!module) {
			return this.missingModule({
				request
			});
		}
		const moduleId = chunkGraph.getModuleId(module);
		if (moduleId === null) {
			if (weak) {
				return "null /* weak dependency, without id */";
			}
			throw new Error(
				`RuntimeTemplate.moduleId(): ${noModuleIdErrorMessage(
					module,
					chunkGraph
				)}`
			);
		}
		return `${this.comment({ request })}${JSON.stringify(moduleId)}`;
	}

	/**
	 * @param {object} options options object
	 * @param {Module | null} options.module the module
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {string=} options.request the request that should be printed as comment
	 * @param {boolean=} options.weak if the dependency is weak (will create a nice error message)
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} the expression
	 */
	moduleRaw({ module, chunkGraph, request, weak, runtimeRequirements }) {
		if (!module) {
			return this.missingModule({
				request
			});
		}
		const moduleId = chunkGraph.getModuleId(module);
		if (moduleId === null) {
			if (weak) {
				// only weak referenced modules don't get an id
				// we can always emit an error emitting code here
				return this.weakError({
					module,
					chunkGraph,
					request,
					type: "expression"
				});
			}
			throw new Error(
				`RuntimeTemplate.moduleId(): ${noModuleIdErrorMessage(
					module,
					chunkGraph
				)}`
			);
		}
		runtimeRequirements.add(RuntimeGlobals.require);
		return `${RuntimeGlobals.require}(${this.moduleId({
			module,
			chunkGraph,
			request,
			weak
		})})`;
	}

	/**
	 * @param {object} options options object
	 * @param {Module | null} options.module the module
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {string} options.request the request that should be printed as comment
	 * @param {boolean=} options.weak if the dependency is weak (will create a nice error message)
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} the expression
	 */
	moduleExports({ module, chunkGraph, request, weak, runtimeRequirements }) {
		return this.moduleRaw({
			module,
			chunkGraph,
			request,
			weak,
			runtimeRequirements
		});
	}

	/**
	 * @param {object} options options object
	 * @param {Module} options.module the module
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {string} options.request the request that should be printed as comment
	 * @param {boolean=} options.strict if the current module is in strict esm mode
	 * @param {boolean=} options.weak if the dependency is weak (will create a nice error message)
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} the expression
	 */
	moduleNamespace({
		module,
		chunkGraph,
		request,
		strict,
		weak,
		runtimeRequirements
	}) {
		if (!module) {
			return this.missingModule({
				request
			});
		}
		if (chunkGraph.getModuleId(module) === null) {
			if (weak) {
				// only weak referenced modules don't get an id
				// we can always emit an error emitting code here
				return this.weakError({
					module,
					chunkGraph,
					request,
					type: "expression"
				});
			}
			throw new Error(
				`RuntimeTemplate.moduleNamespace(): ${noModuleIdErrorMessage(
					module,
					chunkGraph
				)}`
			);
		}
		const moduleId = this.moduleId({
			module,
			chunkGraph,
			request,
			weak
		});
		const exportsType = module.getExportsType(chunkGraph.moduleGraph, strict);
		switch (exportsType) {
			case "namespace":
				return this.moduleRaw({
					module,
					chunkGraph,
					request,
					weak,
					runtimeRequirements
				});
			case "default-with-named":
				runtimeRequirements.add(RuntimeGlobals.createFakeNamespaceObject);
				return `${RuntimeGlobals.createFakeNamespaceObject}(${moduleId}, 3)`;
			case "default-only":
				runtimeRequirements.add(RuntimeGlobals.createFakeNamespaceObject);
				return `${RuntimeGlobals.createFakeNamespaceObject}(${moduleId}, 1)`;
			case "dynamic":
				runtimeRequirements.add(RuntimeGlobals.createFakeNamespaceObject);
				return `${RuntimeGlobals.createFakeNamespaceObject}(${moduleId}, 7)`;
		}
	}

	/**
	 * @param {object} options options object
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {AsyncDependenciesBlock=} options.block the current dependencies block
	 * @param {Module} options.module the module
	 * @param {string} options.request the request that should be printed as comment
	 * @param {string} options.message a message for the comment
	 * @param {boolean=} options.strict if the current module is in strict esm mode
	 * @param {boolean=} options.weak if the dependency is weak (will create a nice error message)
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} the promise expression
	 */
	moduleNamespacePromise({
		chunkGraph,
		block,
		module,
		request,
		message,
		strict,
		weak,
		runtimeRequirements
	}) {
		if (!module) {
			return this.missingModulePromise({
				request
			});
		}
		const moduleId = chunkGraph.getModuleId(module);
		if (moduleId === null) {
			if (weak) {
				// only weak referenced modules don't get an id
				// we can always emit an error emitting code here
				return this.weakError({
					module,
					chunkGraph,
					request,
					type: "promise"
				});
			}
			throw new Error(
				`RuntimeTemplate.moduleNamespacePromise(): ${noModuleIdErrorMessage(
					module,
					chunkGraph
				)}`
			);
		}
		const promise = this.blockPromise({
			chunkGraph,
			block,
			message,
			runtimeRequirements
		});

		let appending;
		let idExpr = JSON.stringify(chunkGraph.getModuleId(module));
		const comment = this.comment({
			request
		});
		let header = "";
		if (weak) {
			if (idExpr.length > 8) {
				// 'var x="nnnnnn";x,"+x+",x' vs '"nnnnnn",nnnnnn,"nnnnnn"'
				header += `var id = ${idExpr}; `;
				idExpr = "id";
			}
			runtimeRequirements.add(RuntimeGlobals.moduleFactories);
			header += `if(!${
				RuntimeGlobals.moduleFactories
			}[${idExpr}]) { ${this.weakError({
				module,
				chunkGraph,
				request,
				idExpr,
				type: "statements"
			})} } `;
		}
		const moduleIdExpr = this.moduleId({
			module,
			chunkGraph,
			request,
			weak
		});
		const exportsType = module.getExportsType(chunkGraph.moduleGraph, strict);
		let fakeType = 16;
		switch (exportsType) {
			case "namespace":
				if (header) {
					const rawModule = this.moduleRaw({
						module,
						chunkGraph,
						request,
						weak,
						runtimeRequirements
					});
					appending = `.then(${this.basicFunction(
						"",
						`${header}return ${rawModule};`
					)})`;
				} else {
					runtimeRequirements.add(RuntimeGlobals.require);
					appending = `.then(${RuntimeGlobals.require}.bind(${RuntimeGlobals.require}, ${comment}${idExpr}))`;
				}
				break;
			case "dynamic":
				fakeType |= 4;
			/* fall through */
			case "default-with-named":
				fakeType |= 2;
			/* fall through */
			case "default-only":
				runtimeRequirements.add(RuntimeGlobals.createFakeNamespaceObject);
				if (chunkGraph.moduleGraph.isAsync(module)) {
					if (header) {
						const rawModule = this.moduleRaw({
							module,
							chunkGraph,
							request,
							weak,
							runtimeRequirements
						});
						appending = `.then(${this.basicFunction(
							"",
							`${header}return ${rawModule};`
						)})`;
					} else {
						runtimeRequirements.add(RuntimeGlobals.require);
						appending = `.then(${RuntimeGlobals.require}.bind(${RuntimeGlobals.require}, ${comment}${idExpr}))`;
					}
					appending += `.then(${this.returningFunction(
						`${RuntimeGlobals.createFakeNamespaceObject}(m, ${fakeType})`,
						"m"
					)})`;
				} else {
					fakeType |= 1;
					if (header) {
						const returnExpression = `${RuntimeGlobals.createFakeNamespaceObject}(${moduleIdExpr}, ${fakeType})`;
						appending = `.then(${this.basicFunction(
							"",
							`${header}return ${returnExpression};`
						)})`;
					} else {
						appending = `.then(${RuntimeGlobals.createFakeNamespaceObject}.bind(${RuntimeGlobals.require}, ${comment}${idExpr}, ${fakeType}))`;
					}
				}
				break;
		}

		return `${promise || "Promise.resolve()"}${appending}`;
	}

	/**
	 * @param {object} options options object
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {RuntimeSpec=} options.runtime runtime for which this code will be generated
	 * @param {RuntimeSpec | boolean=} options.runtimeCondition only execute the statement in some runtimes
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} expression
	 */
	runtimeConditionExpression({
		chunkGraph,
		runtimeCondition,
		runtime,
		runtimeRequirements
	}) {
		if (runtimeCondition === undefined) return "true";
		if (typeof runtimeCondition === "boolean") return `${runtimeCondition}`;
		/** @type {Set<string>} */
		const positiveRuntimeIds = new Set();
		forEachRuntime(runtimeCondition, runtime =>
			positiveRuntimeIds.add(
				`${chunkGraph.getRuntimeId(/** @type {string} */ (runtime))}`
			)
		);
		/** @type {Set<string>} */
		const negativeRuntimeIds = new Set();
		forEachRuntime(subtractRuntime(runtime, runtimeCondition), runtime =>
			negativeRuntimeIds.add(
				`${chunkGraph.getRuntimeId(/** @type {string} */ (runtime))}`
			)
		);
		runtimeRequirements.add(RuntimeGlobals.runtimeId);
		return compileBooleanMatcher.fromLists(
			Array.from(positiveRuntimeIds),
			Array.from(negativeRuntimeIds)
		)(RuntimeGlobals.runtimeId);
	}

	/**
	 * @param {object} options options object
	 * @param {boolean=} options.update whether a new variable should be created or the existing one updated
	 * @param {Module} options.module the module
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {string} options.request the request that should be printed as comment
	 * @param {string} options.importVar name of the import variable
	 * @param {Module} options.originModule module in which the statement is emitted
	 * @param {boolean=} options.weak true, if this is a weak dependency
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {[string, string]} the import statement and the compat statement
	 */
	importStatement({
		update,
		module,
		chunkGraph,
		request,
		importVar,
		originModule,
		weak,
		runtimeRequirements
	}) {
		if (!module) {
			return [
				this.missingModuleStatement({
					request
				}),
				""
			];
		}
		if (chunkGraph.getModuleId(module) === null) {
			if (weak) {
				// only weak referenced modules don't get an id
				// we can always emit an error emitting code here
				return [
					this.weakError({
						module,
						chunkGraph,
						request,
						type: "statements"
					}),
					""
				];
			}
			throw new Error(
				`RuntimeTemplate.importStatement(): ${noModuleIdErrorMessage(
					module,
					chunkGraph
				)}`
			);
		}
		const moduleId = this.moduleId({
			module,
			chunkGraph,
			request,
			weak
		});
		const optDeclaration = update ? "" : "var ";

		const exportsType = module.getExportsType(
			chunkGraph.moduleGraph,
			/** @type {BuildMeta} */
			(originModule.buildMeta).strictHarmonyModule
		);
		runtimeRequirements.add(RuntimeGlobals.require);
		const importContent = `/* harmony import */ ${optDeclaration}${importVar} = ${RuntimeGlobals.require}(${moduleId});\n`;

		if (exportsType === "dynamic") {
			runtimeRequirements.add(RuntimeGlobals.compatGetDefaultExport);
			return [
				importContent,
				`/* harmony import */ ${optDeclaration}${importVar}_default = /*#__PURE__*/${RuntimeGlobals.compatGetDefaultExport}(${importVar});\n`
			];
		}
		return [importContent, ""];
	}

	/**
	 * @param {object} options options
	 * @param {ModuleGraph} options.moduleGraph the module graph
	 * @param {Module} options.module the module
	 * @param {string} options.request the request
	 * @param {string | string[]} options.exportName the export name
	 * @param {Module} options.originModule the origin module
	 * @param {boolean|undefined} options.asiSafe true, if location is safe for ASI, a bracket can be emitted
	 * @param {boolean} options.isCall true, if expression will be called
	 * @param {boolean | null} options.callContext when false, call context will not be preserved
	 * @param {boolean} options.defaultInterop when true and accessing the default exports, interop code will be generated
	 * @param {string} options.importVar the identifier name of the import variable
	 * @param {InitFragment<TODO>[]} options.initFragments init fragments will be added here
	 * @param {RuntimeSpec} options.runtime runtime for which this code will be generated
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} expression
	 */
	exportFromImport({
		moduleGraph,
		module,
		request,
		exportName,
		originModule,
		asiSafe,
		isCall,
		callContext,
		defaultInterop,
		importVar,
		initFragments,
		runtime,
		runtimeRequirements
	}) {
		if (!module) {
			return this.missingModule({
				request
			});
		}
		if (!Array.isArray(exportName)) {
			exportName = exportName ? [exportName] : [];
		}
		const exportsType = module.getExportsType(
			moduleGraph,
			/** @type {BuildMeta} */
			(originModule.buildMeta).strictHarmonyModule
		);

		if (defaultInterop) {
			if (exportName.length > 0 && exportName[0] === "default") {
				switch (exportsType) {
					case "dynamic":
						if (isCall) {
							return `${importVar}_default()${propertyAccess(exportName, 1)}`;
						}
						return asiSafe
							? `(${importVar}_default()${propertyAccess(exportName, 1)})`
							: asiSafe === false
								? `;(${importVar}_default()${propertyAccess(exportName, 1)})`
								: `${importVar}_default.a${propertyAccess(exportName, 1)}`;

					case "default-only":
					case "default-with-named":
						exportName = exportName.slice(1);
						break;
				}
			} else if (exportName.length > 0) {
				if (exportsType === "default-only") {
					return `/* non-default import from non-esm module */undefined${propertyAccess(
						exportName,
						1
					)}`;
				} else if (
					exportsType !== "namespace" &&
					exportName[0] === "__esModule"
				) {
					return "/* __esModule */true";
				}
			} else if (
				exportsType === "default-only" ||
				exportsType === "default-with-named"
			) {
				runtimeRequirements.add(RuntimeGlobals.createFakeNamespaceObject);
				initFragments.push(
					new InitFragment(
						`var ${importVar}_namespace_cache;\n`,
						InitFragment.STAGE_CONSTANTS,
						-1,
						`${importVar}_namespace_cache`
					)
				);
				return `/*#__PURE__*/ ${
					asiSafe ? "" : asiSafe === false ? ";" : "Object"
				}(${importVar}_namespace_cache || (${importVar}_namespace_cache = ${
					RuntimeGlobals.createFakeNamespaceObject
				}(${importVar}${exportsType === "default-only" ? "" : ", 2"})))`;
			}
		}

		if (exportName.length > 0) {
			const exportsInfo = moduleGraph.getExportsInfo(module);
			const used = exportsInfo.getUsedName(exportName, runtime);
			if (!used) {
				const comment = Template.toNormalComment(
					`unused export ${propertyAccess(exportName)}`
				);
				return `${comment} undefined`;
			}
			const comment = equals(used, exportName)
				? ""
				: `${Template.toNormalComment(propertyAccess(exportName))} `;
			const access = `${importVar}${comment}${propertyAccess(used)}`;
			if (isCall && callContext === false) {
				return asiSafe
					? `(0,${access})`
					: asiSafe === false
						? `;(0,${access})`
						: `/*#__PURE__*/Object(${access})`;
			}
			return access;
		}
		return importVar;
	}

	/**
	 * @param {object} options options
	 * @param {AsyncDependenciesBlock | undefined} options.block the async block
	 * @param {string} options.message the message
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} expression
	 */
	blockPromise({ block, message, chunkGraph, runtimeRequirements }) {
		if (!block) {
			const comment = this.comment({
				message
			});
			return `Promise.resolve(${comment.trim()})`;
		}
		const chunkGroup = chunkGraph.getBlockChunkGroup(block);
		if (!chunkGroup || chunkGroup.chunks.length === 0) {
			const comment = this.comment({
				message
			});
			return `Promise.resolve(${comment.trim()})`;
		}
		const chunks = chunkGroup.chunks.filter(
			chunk => !chunk.hasRuntime() && chunk.id !== null
		);
		const comment = this.comment({
			message,
			chunkName: block.chunkName
		});
		if (chunks.length === 1) {
			const chunkId = JSON.stringify(chunks[0].id);
			runtimeRequirements.add(RuntimeGlobals.ensureChunk);

			const fetchPriority = chunkGroup.options.fetchPriority;

			if (fetchPriority) {
				runtimeRequirements.add(RuntimeGlobals.hasFetchPriority);
			}

			return `${RuntimeGlobals.ensureChunk}(${comment}${chunkId}${
				fetchPriority ? `, ${JSON.stringify(fetchPriority)}` : ""
			})`;
		} else if (chunks.length > 0) {
			runtimeRequirements.add(RuntimeGlobals.ensureChunk);

			const fetchPriority = chunkGroup.options.fetchPriority;

			if (fetchPriority) {
				runtimeRequirements.add(RuntimeGlobals.hasFetchPriority);
			}

			/**
			 * @param {Chunk} chunk chunk
			 * @returns {string} require chunk id code
			 */
			const requireChunkId = chunk =>
				`${RuntimeGlobals.ensureChunk}(${JSON.stringify(chunk.id)}${
					fetchPriority ? `, ${JSON.stringify(fetchPriority)}` : ""
				})`;
			return `Promise.all(${comment.trim()}[${chunks
				.map(requireChunkId)
				.join(", ")}])`;
		}
		return `Promise.resolve(${comment.trim()})`;
	}

	/**
	 * @param {object} options options
	 * @param {AsyncDependenciesBlock} options.block the async block
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @param {string=} options.request request string used originally
	 * @returns {string} expression
	 */
	asyncModuleFactory({ block, chunkGraph, runtimeRequirements, request }) {
		const dep = block.dependencies[0];
		const module = chunkGraph.moduleGraph.getModule(dep);
		const ensureChunk = this.blockPromise({
			block,
			message: "",
			chunkGraph,
			runtimeRequirements
		});
		const factory = this.returningFunction(
			this.moduleRaw({
				module,
				chunkGraph,
				request,
				runtimeRequirements
			})
		);
		return this.returningFunction(
			ensureChunk.startsWith("Promise.resolve(")
				? `${factory}`
				: `${ensureChunk}.then(${this.returningFunction(factory)})`
		);
	}

	/**
	 * @param {object} options options
	 * @param {Dependency} options.dependency the dependency
	 * @param {ChunkGraph} options.chunkGraph the chunk graph
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @param {string=} options.request request string used originally
	 * @returns {string} expression
	 */
	syncModuleFactory({ dependency, chunkGraph, runtimeRequirements, request }) {
		const module = chunkGraph.moduleGraph.getModule(dependency);
		const factory = this.returningFunction(
			this.moduleRaw({
				module,
				chunkGraph,
				request,
				runtimeRequirements
			})
		);
		return this.returningFunction(factory);
	}

	/**
	 * @param {object} options options
	 * @param {string} options.exportsArgument the name of the exports object
	 * @param {RuntimeRequirements} options.runtimeRequirements if set, will be filled with runtime requirements
	 * @returns {string} statement
	 */
	defineEsModuleFlagStatement({ exportsArgument, runtimeRequirements }) {
		runtimeRequirements.add(RuntimeGlobals.makeNamespaceObject);
		runtimeRequirements.add(RuntimeGlobals.exports);
		return `${RuntimeGlobals.makeNamespaceObject}(${exportsArgument});\n`;
	}
}

module.exports = RuntimeTemplate;
