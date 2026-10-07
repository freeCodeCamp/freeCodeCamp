/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const t = require("@webassemblyjs/ast");
const { moduleContextFromModuleAST } = require("@webassemblyjs/ast");
const { editWithAST, addWithAST } = require("@webassemblyjs/wasm-edit");
const { decode } = require("@webassemblyjs/wasm-parser");
const { RawSource } = require("webpack-sources");
const Generator = require("../Generator");
const { WEBASSEMBLY_TYPES } = require("../ModuleSourceTypesConstants");
const WebAssemblyUtils = require("./WebAssemblyUtils");

const WebAssemblyExportImportedDependency = require("../dependencies/WebAssemblyExportImportedDependency");

/** @typedef {import("webpack-sources").Source} Source */
/** @typedef {import("../DependencyTemplates")} DependencyTemplates */
/** @typedef {import("../Generator").GenerateContext} GenerateContext */
/** @typedef {import("../Module")} Module */
/** @typedef {import("../Module").SourceTypes} SourceTypes */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../NormalModule")} NormalModule */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("./WebAssemblyUtils").UsedWasmDependency} UsedWasmDependency */
/** @typedef {import("@webassemblyjs/ast").Instruction} Instruction */
/** @typedef {import("@webassemblyjs/ast").ModuleImport} ModuleImport */
/** @typedef {import("@webassemblyjs/ast").ModuleExport} ModuleExport */
/** @typedef {import("@webassemblyjs/ast").Global} Global */
/**
 * @template T
 * @typedef {import("@webassemblyjs/ast").NodePath<T>} NodePath
 */

/**
 * @typedef {(buf: ArrayBuffer) => ArrayBuffer} ArrayBufferTransform
 */

/**
 * @template T
 * @param {((prev: ArrayBuffer) => ArrayBuffer)[]} fns transforms
 * @returns {Function} composed transform
 */
const compose = (...fns) =>
	fns.reduce(
		(prevFn, nextFn) => value => nextFn(prevFn(value)),
		value => value
	);

/**
 * Removes the start instruction
 * @param {object} state state
 * @param {object} state.ast Module's ast
 * @returns {ArrayBufferTransform} transform
 */
const removeStartFunc = state => bin =>
	editWithAST(state.ast, bin, {
		Start(path) {
			path.remove();
		}
	});

/**
 * Get imported globals
 * @param {object} ast Module's AST
 * @returns {t.ModuleImport[]} - nodes
 */
const getImportedGlobals = ast => {
	/** @type {t.ModuleImport[]} */
	const importedGlobals = [];

	t.traverse(ast, {
		ModuleImport({ node }) {
			if (t.isGlobalType(node.descr)) {
				importedGlobals.push(node);
			}
		}
	});

	return importedGlobals;
};

/**
 * Get the count for imported func
 * @param {object} ast Module's AST
 * @returns {number} - count
 */
const getCountImportedFunc = ast => {
	let count = 0;

	t.traverse(ast, {
		ModuleImport({ node }) {
			if (t.isFuncImportDescr(node.descr)) {
				count++;
			}
		}
	});

	return count;
};

/**
 * Get next type index
 * @param {object} ast Module's AST
 * @returns {t.Index} - index
 */
const getNextTypeIndex = ast => {
	const typeSectionMetadata = t.getSectionMetadata(ast, "type");

	if (typeSectionMetadata === undefined) {
		return t.indexLiteral(0);
	}

	return t.indexLiteral(typeSectionMetadata.vectorOfSize.value);
};

/**
 * Get next func index
 * The Func section metadata provide information for implemented funcs
 * in order to have the correct index we shift the index by number of external
 * functions.
 * @param {object} ast Module's AST
 * @param {number} countImportedFunc number of imported funcs
 * @returns {t.Index} - index
 */
const getNextFuncIndex = (ast, countImportedFunc) => {
	const funcSectionMetadata = t.getSectionMetadata(ast, "func");

	if (funcSectionMetadata === undefined) {
		return t.indexLiteral(0 + countImportedFunc);
	}

	const vectorOfSize = funcSectionMetadata.vectorOfSize.value;

	return t.indexLiteral(vectorOfSize + countImportedFunc);
};

/**
 * Creates an init instruction for a global type
 * @param {t.GlobalType} globalType the global type
 * @returns {t.Instruction} init expression
 */
const createDefaultInitForGlobal = globalType => {
	if (globalType.valtype[0] === "i") {
		// create NumberLiteral global initializer
		return t.objectInstruction("const", globalType.valtype, [
			t.numberLiteralFromRaw(66)
		]);
	} else if (globalType.valtype[0] === "f") {
		// create FloatLiteral global initializer
		return t.objectInstruction("const", globalType.valtype, [
			t.floatLiteral(66, false, false, "66")
		]);
	}
	throw new Error(`unknown type: ${globalType.valtype}`);
};

/**
 * Rewrite the import globals:
 * - removes the ModuleImport instruction
 * - injects at the same offset a mutable global of the same type
 *
 * Since the imported globals are before the other global declarations, our
 * indices will be preserved.
 *
 * Note that globals will become mutable.
 * @param {object} state transformation state
 * @param {object} state.ast Module's ast
 * @param {t.Instruction[]} state.additionalInitCode list of addition instructions for the init function
 * @returns {ArrayBufferTransform} transform
 */
const rewriteImportedGlobals = state => bin => {
	const additionalInitCode = state.additionalInitCode;
	/** @type {Array<t.Global>} */
	const newGlobals = [];

	bin = editWithAST(state.ast, bin, {
		ModuleImport(path) {
			if (t.isGlobalType(path.node.descr)) {
				const globalType = /** @type {TODO} */ (path.node.descr);

				globalType.mutability = "var";

				const init = [
					createDefaultInitForGlobal(globalType),
					t.instruction("end")
				];

				newGlobals.push(t.global(globalType, init));

				path.remove();
			}
		},

		// in order to preserve non-imported global's order we need to re-inject
		// those as well
		/**
		 * @param {NodePath<Global>} path path
		 */
		Global(path) {
			const { node } = path;
			const [init] = node.init;

			if (init.id === "get_global") {
				node.globalType.mutability = "var";

				const initialGlobalIdx = init.args[0];

				node.init = [
					createDefaultInitForGlobal(node.globalType),
					t.instruction("end")
				];

				additionalInitCode.push(
					/**
					 * get_global in global initializer only works for imported globals.
					 * They have the same indices as the init params, so use the
					 * same index.
					 */
					t.instruction("get_local", [initialGlobalIdx]),
					t.instruction("set_global", [t.indexLiteral(newGlobals.length)])
				);
			}

			newGlobals.push(node);

			path.remove();
		}
	});

	// Add global declaration instructions
	return addWithAST(state.ast, bin, newGlobals);
};

/**
 * Rewrite the export names
 * @param {object} state state
 * @param {object} state.ast Module's ast
 * @param {Module} state.module Module
 * @param {ModuleGraph} state.moduleGraph module graph
 * @param {Set<string>} state.externalExports Module
 * @param {RuntimeSpec} state.runtime runtime
 * @returns {ArrayBufferTransform} transform
 */
const rewriteExportNames =
	({ ast, moduleGraph, module, externalExports, runtime }) =>
	bin =>
		editWithAST(ast, bin, {
			/**
			 * @param {NodePath<ModuleExport>} path path
			 */
			ModuleExport(path) {
				const isExternal = externalExports.has(path.node.name);
				if (isExternal) {
					path.remove();
					return;
				}
				const usedName = moduleGraph
					.getExportsInfo(module)
					.getUsedName(path.node.name, runtime);
				if (!usedName) {
					path.remove();
					return;
				}
				path.node.name = /** @type {string} */ (usedName);
			}
		});

/**
 * Mangle import names and modules
 * @param {object} state state
 * @param {object} state.ast Module's ast
 * @param {Map<string, UsedWasmDependency>} state.usedDependencyMap mappings to mangle names
 * @returns {ArrayBufferTransform} transform
 */
const rewriteImports =
	({ ast, usedDependencyMap }) =>
	bin =>
		editWithAST(ast, bin, {
			/**
			 * @param {NodePath<ModuleImport>} path path
			 */
			ModuleImport(path) {
				const result = usedDependencyMap.get(
					`${path.node.module}:${path.node.name}`
				);

				if (result !== undefined) {
					path.node.module = result.module;
					path.node.name = result.name;
				}
			}
		});

/**
 * Add an init function.
 *
 * The init function fills the globals given input arguments.
 * @param {object} state transformation state
 * @param {object} state.ast Module's ast
 * @param {t.Identifier} state.initFuncId identifier of the init function
 * @param {t.Index} state.startAtFuncOffset index of the start function
 * @param {t.ModuleImport[]} state.importedGlobals list of imported globals
 * @param {t.Instruction[]} state.additionalInitCode list of addition instructions for the init function
 * @param {t.Index} state.nextFuncIndex index of the next function
 * @param {t.Index} state.nextTypeIndex index of the next type
 * @returns {ArrayBufferTransform} transform
 */
const addInitFunction =
	({
		ast,
		initFuncId,
		startAtFuncOffset,
		importedGlobals,
		additionalInitCode,
		nextFuncIndex,
		nextTypeIndex
	}) =>
	bin => {
		const funcParams = importedGlobals.map(importedGlobal => {
			// used for debugging
			const id = t.identifier(
				`${importedGlobal.module}.${importedGlobal.name}`
			);

			return t.funcParam(
				/** @type {string} */ (importedGlobal.descr.valtype),
				id
			);
		});

		/** @type {Instruction[]} */
		const funcBody = [];
		for (const [index, _importedGlobal] of importedGlobals.entries()) {
			const args = [t.indexLiteral(index)];
			const body = [
				t.instruction("get_local", args),
				t.instruction("set_global", args)
			];

			funcBody.push(...body);
		}

		if (typeof startAtFuncOffset === "number") {
			funcBody.push(
				t.callInstruction(t.numberLiteralFromRaw(startAtFuncOffset))
			);
		}

		for (const instr of additionalInitCode) {
			funcBody.push(instr);
		}

		funcBody.push(t.instruction("end"));

		/** @type {string[]} */
		const funcResults = [];

		// Code section
		const funcSignature = t.signature(funcParams, funcResults);
		const func = t.func(initFuncId, funcSignature, funcBody);

		// Type section
		const functype = t.typeInstruction(undefined, funcSignature);

		// Func section
		const funcindex = t.indexInFuncSection(nextTypeIndex);

		// Export section
		const moduleExport = t.moduleExport(
			initFuncId.value,
			t.moduleExportDescr("Func", nextFuncIndex)
		);

		return addWithAST(ast, bin, [func, moduleExport, funcindex, functype]);
	};

/**
 * Extract mangle mappings from module
 * @param {ModuleGraph} moduleGraph module graph
 * @param {Module} module current module
 * @param {boolean | undefined} mangle mangle imports
 * @returns {Map<string, UsedWasmDependency>} mappings to mangled names
 */
const getUsedDependencyMap = (moduleGraph, module, mangle) => {
	/** @type {Map<string, UsedWasmDependency>} */
	const map = new Map();
	for (const usedDep of WebAssemblyUtils.getUsedDependencies(
		moduleGraph,
		module,
		mangle
	)) {
		const dep = usedDep.dependency;
		const request = dep.request;
		const exportName = dep.name;
		map.set(`${request}:${exportName}`, usedDep);
	}
	return map;
};

/**
 * @typedef {object} WebAssemblyGeneratorOptions
 * @property {boolean} [mangleImports] mangle imports
 */

class WebAssemblyGenerator extends Generator {
	/**
	 * @param {WebAssemblyGeneratorOptions} options options
	 */
	constructor(options) {
		super();
		this.options = options;
	}

	/**
	 * @param {NormalModule} module fresh module
	 * @returns {SourceTypes} available types (do not mutate)
	 */
	getTypes(module) {
		return WEBASSEMBLY_TYPES;
	}

	/**
	 * @param {NormalModule} module the module
	 * @param {string=} type source type
	 * @returns {number} estimate size of the module
	 */
	getSize(module, type) {
		const originalSource = module.originalSource();
		if (!originalSource) {
			return 0;
		}
		return originalSource.size();
	}

	/**
	 * @param {NormalModule} module module for which the code should be generated
	 * @param {GenerateContext} generateContext context for generate
	 * @returns {Source | null} generated code
	 */
	generate(module, { moduleGraph, runtime }) {
		const bin = /** @type {Source} */ (module.originalSource()).source();

		const initFuncId = t.identifier("");

		// parse it
		const ast = decode(bin, {
			ignoreDataSection: true,
			ignoreCodeSection: true,
			ignoreCustomNameSection: true
		});

		const moduleContext = moduleContextFromModuleAST(ast.body[0]);

		const importedGlobals = getImportedGlobals(ast);
		const countImportedFunc = getCountImportedFunc(ast);
		const startAtFuncOffset = moduleContext.getStart();
		const nextFuncIndex = getNextFuncIndex(ast, countImportedFunc);
		const nextTypeIndex = getNextTypeIndex(ast);

		const usedDependencyMap = getUsedDependencyMap(
			moduleGraph,
			module,
			this.options.mangleImports
		);
		const externalExports = new Set(
			module.dependencies
				.filter(d => d instanceof WebAssemblyExportImportedDependency)
				.map(d => {
					const wasmDep = /** @type {WebAssemblyExportImportedDependency} */ (
						d
					);
					return wasmDep.exportName;
				})
		);

		/** @type {t.Instruction[]} */
		const additionalInitCode = [];

		const transform = compose(
			rewriteExportNames({
				ast,
				moduleGraph,
				module,
				externalExports,
				runtime
			}),

			removeStartFunc({ ast }),

			rewriteImportedGlobals({ ast, additionalInitCode }),

			rewriteImports({
				ast,
				usedDependencyMap
			}),

			addInitFunction({
				ast,
				initFuncId,
				importedGlobals,
				additionalInitCode,
				startAtFuncOffset,
				nextFuncIndex,
				nextTypeIndex
			})
		);

		const newBin = transform(bin);

		const newBuf = Buffer.from(newBin);

		return new RawSource(newBuf);
	}
}

module.exports = WebAssemblyGenerator;
