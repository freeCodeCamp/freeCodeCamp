/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const { CSS_TYPE, JAVASCRIPT_TYPE } = require("../ModuleSourceTypeConstants");
const { interpolate } = require("../TemplatedPathPlugin");
const WebpackError = require("../WebpackError");
const { cssExportConvention } = require("../util/conventions");
const createHash = require("../util/createHash");
const { makePathsRelative } = require("../util/identifier");
const makeSerializable = require("../util/makeSerializable");
const memoize = require("../util/memoize");
const nonNumericOnlyHash = require("../util/nonNumericOnlyHash");
const CssIcssImportDependency = require("./CssIcssImportDependency");
const NullDependency = require("./NullDependency");

const getCssParser = memoize(() => require("../css/CssParser"));

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../../declarations/WebpackOptions").HashFunction} HashFunction */
/** @typedef {import("../../declarations/WebpackOptions").CssGeneratorExportsConvention} CssGeneratorExportsConvention */
/** @typedef {import("../../declarations/WebpackOptions").CssGeneratorLocalIdentName} CssGeneratorLocalIdentName */
/** @typedef {import("../CssModule")} CssModule */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ReferencedExports} ReferencedExports */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").CssDependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../css/CssGenerator")} CssGenerator */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/runtime").RuntimeSpec} RuntimeSpec */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../css/CssParser").Range} Range */

/** @typedef {(name: string) => string} ExportsConventionFn */

/**
 * Returns local ident.
 * @param {string} local css local
 * @param {CssModule} module module
 * @param {ChunkGraph} chunkGraph chunk graph
 * @param {RuntimeTemplate} runtimeTemplate runtime template
 * @returns {string} local ident
 */
const getLocalIdent = (local, module, chunkGraph, runtimeTemplate) => {
	const generator = /** @type {CssGenerator} */ (module.generator);
	const localIdentName =
		/** @type {CssGeneratorLocalIdentName} */
		(generator.options.localIdentName);
	const relativeResourcePath = makePathsRelative(
		/** @type {string} */
		(runtimeTemplate.compilation.compiler.context),
		/** @type {string} */
		(module.getResource()),
		runtimeTemplate.compilation.compiler.root
	);
	const { uniqueName } = runtimeTemplate.outputOptions;

	let localIdentHash = "";

	if (
		typeof localIdentName === "function" ||
		/\[(?:fullhash|hash)\]/.test(localIdentName)
	) {
		const hashSalt = generator.options.localIdentHashSalt;
		const hashDigest =
			/** @type {string} */
			(generator.options.localIdentHashDigest);
		const hashDigestLength = generator.options.localIdentHashDigestLength;
		const hashFunction =
			/** @type {HashFunction} */
			(generator.options.localIdentHashFunction);

		const hash = createHash(hashFunction);

		if (hashSalt) {
			hash.update(hashSalt);
		}

		if (uniqueName) {
			hash.update(uniqueName);
		}

		hash.update(relativeResourcePath);
		hash.update(local);

		localIdentHash = hash.digest(hashDigest).slice(0, hashDigestLength);
	}

	let contentHash = "";

	if (
		typeof localIdentName === "function" ||
		/\[contenthash\]/.test(localIdentName)
	) {
		const hash = createHash(runtimeTemplate.outputOptions.hashFunction);
		const source = module.originalSource();

		if (source) {
			hash.update(source.buffer());
		}

		if (module.error) {
			hash.update(module.error.toString());
		}

		const fullContentHash = hash.digest(
			runtimeTemplate.outputOptions.hashDigest
		);

		contentHash = nonNumericOnlyHash(
			fullContentHash,
			runtimeTemplate.outputOptions.hashDigestLength
		);
	}

	let localIdent = interpolate(localIdentName, {
		prepareId: (id) => {
			if (typeof id !== "string") return id;

			return (
				id
					.replace(/^([.-]|[^a-z0-9_-])+/i, "")
					// We keep the `@` symbol because it can be used in the package name (e.g. `@company/package`), and if we replace it with `_`, a class conflict may occur.
					// For example - `@import "@foo/package/style.module.css"` and `@import "foo/package/style.module.css"` (`foo` is a package, `package` is just a directory) will create a class conflict.
					.replace(/[^a-z0-9@_-]+/gi, "_")
			);
		},
		filename: relativeResourcePath,
		hash: localIdentHash,
		local,
		contentHash,
		chunkGraph,
		module
	});

	// TODO move these things into interpolate
	if (/\[local\]/.test(localIdent)) {
		localIdent = localIdent.replace(/\[local\]/g, local);
	}

	if (/\[uniqueName\]/.test(localIdent)) {
		localIdent = localIdent.replace(
			/\[uniqueName\]/g,
			/** @type {string} */ (uniqueName)
		);
	}

	// Protect the first character from unsupported values
	return localIdent.replace(/^((-?\d)|--)/, "_$1");
};

/** @typedef {string | [string, string]} Value */

// 0 - replace, 1 - replace, 2 - append,  2 - once
/** @typedef {0 | 1 | 2 | 3 | 4} ExportMode */
// 0 - normal, 1 - custom css variable, 2 - grid custom ident, 3 - composes
/** @typedef {0 | 1 | 2 | 3} ExportType */

class CssIcssExportDependency extends NullDependency {
	/**
	 * Example of dependency:
	 *
	 * :export { LOCAL_NAME: EXPORT_NAME }
	 * @param {string} name export name
	 * @param {Value} value value or local name and import name
	 * @param {Range=} range range
	 * @param {boolean=} interpolate true when value need to be interpolated, otherwise false
	 * @param {ExportMode=} exportMode export mode
	 * @param {ExportType=} exportType export type
	 */
	constructor(
		name,
		value,
		range,
		interpolate = false,
		exportMode = CssIcssExportDependency.EXPORT_MODE.REPLACE,
		exportType = CssIcssExportDependency.EXPORT_TYPE.NORMAL
	) {
		super();
		this.name = name;
		this.value = value;
		this.range = range;
		this.interpolate = interpolate;
		this.exportMode = exportMode;
		this.exportType = exportType;
		/** @type {undefined | string} */
		this._hashUpdate = undefined;
	}

	get type() {
		return "css :export";
	}

	/**
	 * Gets exports convention names.
	 * @param {string} name export name
	 * @param {CssGeneratorExportsConvention} convention convention of the export name
	 * @returns {string[]} convention results
	 */
	getExportsConventionNames(name, convention) {
		if (this._conventionNames) {
			return this._conventionNames;
		}
		this._conventionNames = cssExportConvention(name, convention);
		return this._conventionNames;
	}

	/**
	 * Returns list of exports referenced by this dependency
	 * @param {ModuleGraph} moduleGraph module graph
	 * @param {RuntimeSpec} runtime the runtime for which the module is analysed
	 * @returns {ReferencedExports} referenced exports
	 */
	getReferencedExports(moduleGraph, runtime) {
		if (
			this.exportMode === CssIcssExportDependency.EXPORT_MODE.SELF_REFERENCE
		) {
			return [
				{
					name: [this.name],
					canMangle: true
				}
			];
		}

		return super.getReferencedExports(moduleGraph, runtime);
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		if (
			this.exportMode === CssIcssExportDependency.EXPORT_MODE.NONE ||
			this.exportMode === CssIcssExportDependency.EXPORT_MODE.SELF_REFERENCE
		) {
			return;
		}

		const module = /** @type {CssModule} */ (moduleGraph.getParentModule(this));
		const generator = /** @type {CssGenerator} */ (module.generator);
		const names = this.getExportsConventionNames(
			this.name,
			/** @type {CssGeneratorExportsConvention} */
			(generator.options.exportsConvention)
		);

		return {
			exports: [...names].map((name) => ({
				name,
				canMangle: true
			})),
			dependencies: undefined
		};
	}

	/**
	 * Returns warnings.
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {WebpackError[] | null | undefined} warnings
	 */
	getWarnings(moduleGraph) {
		if (
			this.exportMode === CssIcssExportDependency.EXPORT_MODE.SELF_REFERENCE &&
			!Array.isArray(this.value)
		) {
			const module = moduleGraph.getParentModule(this);

			if (
				module &&
				!moduleGraph.getExportsInfo(module).isExportProvided(this.value)
			) {
				const error = new WebpackError(
					`Self-referencing name "${this.value}" not found`
				);
				error.module = module;

				return [error];
			}
		}

		return null;
	}

	/**
	 * Updates the hash with the data contributed by this instance.
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, { chunkGraph }) {
		if (this._hashUpdate === undefined) {
			const module =
				/** @type {CssModule} */
				(chunkGraph.moduleGraph.getParentModule(this));
			const generator = /** @type {CssGenerator} */ (module.generator);
			const names = this.getExportsConventionNames(
				this.name,
				/** @type {CssGeneratorExportsConvention} */
				(generator.options.exportsConvention)
			);
			this._hashUpdate = `exportsConvention|${JSON.stringify(names)}|localIdentName|${JSON.stringify(generator.options.localIdentName)}`;
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * Serializes this instance into the provided serializer context.
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.name);
		write(this.value);
		write(this.range);
		write(this.interpolate);
		write(this.exportMode);
		write(this.exportType);
		super.serialize(context);
	}

	/**
	 * Restores this instance from the provided deserializer context.
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.name = read();
		this.value = read();
		this.range = read();
		this.interpolate = read();
		this.exportMode = read();
		this.exportType = read();
		super.deserialize(context);
	}
}

CssIcssExportDependency.Template = class CssIcssExportDependencyTemplate extends (
	NullDependency.Template
) {
	// TODO looking how to cache
	/**
	 * Returns found reference.
	 * @param {string} localName local name
	 * @param {string} importName import name
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @param {Set<CssIcssExportDependency>} seen seen to prevent cyclical problems
	 * @returns {string | undefined} found reference
	 */
	static resolve(localName, importName, templateContext, seen = new Set()) {
		const { moduleGraph } = templateContext;
		const importDep =
			/** @type {CssIcssImportDependency | undefined} */
			(
				templateContext.module.dependencies.find(
					(d) =>
						d instanceof CssIcssImportDependency && d.localName === localName
				)
			);
		if (!importDep) return undefined;

		const module = /** @type {CssModule} */ (moduleGraph.getModule(importDep));
		if (!module) return undefined;

		const exportDep =
			/** @type {CssIcssExportDependency} */
			(
				module.dependencies.find(
					(d) => d instanceof CssIcssExportDependency && d.name === importName
				)
			);

		if (!exportDep) return undefined;

		if (seen.has(exportDep)) return undefined;
		seen.add(exportDep);

		const { value, interpolate } = exportDep;

		if (Array.isArray(value)) {
			return this.resolve(
				value[0],
				value[1],
				{
					...templateContext,
					module
				},
				seen
			);
		}

		if (interpolate) {
			return CssIcssExportDependency.Template.getIdentifier(value, exportDep, {
				...templateContext,
				module
			});
		}

		return value;
	}

	/**
	 * Resolves references.
	 * @param {CssIcssExportDependency} dep value
	 * @param {DependencyTemplateContext} templateContext template context
	 * @param {Set<CssIcssExportDependency>} seen to prevent cyclical problems
	 * @returns {string[]} final names
	 */
	static resolveReferences(dep, templateContext, seen = new Set()) {
		/** @type {string[]} */
		const references = [];

		if (seen.has(dep)) return references;
		seen.add(dep);

		if (Array.isArray(dep.value)) {
			const importDep =
				/** @type {CssIcssImportDependency | undefined} */
				(
					templateContext.module.dependencies.find(
						(d) =>
							d instanceof CssIcssImportDependency &&
							d.localName === dep.value[0]
					)
				);
			if (!importDep) return references;

			const module =
				/** @type {CssModule} */
				(templateContext.moduleGraph.getModule(importDep));
			if (!module) return references;

			for (const d of module.dependencies) {
				if (d instanceof CssIcssExportDependency && d.name === dep.value[1]) {
					if (Array.isArray(d.value)) {
						const deepReferences =
							CssIcssExportDependencyTemplate.resolveReferences(
								d,
								{
									...templateContext,
									module
								},
								seen
							);

						references.push(...deepReferences);
					} else {
						references.push(
							CssIcssExportDependencyTemplate.getIdentifier(d.value, d, {
								...templateContext,
								module
							})
						);
					}
				}
			}
		} else {
			// Adding basic class
			references.push(
				CssIcssExportDependencyTemplate.getIdentifier(
					dep.value,
					dep,
					templateContext
				)
			);

			for (const d of templateContext.module.dependencies) {
				if (
					d instanceof CssIcssExportDependency &&
					d.exportType === CssIcssExportDependency.EXPORT_TYPE.COMPOSES &&
					d.name === dep.value
				) {
					if (Array.isArray(d.value)) {
						const deepReferences =
							CssIcssExportDependencyTemplate.resolveReferences(
								d,
								templateContext,
								seen
							);

						references.push(...deepReferences);
					} else {
						references.push(
							CssIcssExportDependencyTemplate.getIdentifier(
								d.value,
								d,
								templateContext
							)
						);
					}
				}
			}
		}

		return [...new Set(references)];
	}

	/**
	 * Returns identifier.
	 * @param {string} value value to identifier
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {string} identifier
	 */
	static getIdentifier(value, dependency, templateContext) {
		const dep = /** @type {CssIcssExportDependency} */ (dependency);

		if (dep.interpolate) {
			const { module: m } = templateContext;
			const module = /** @type {CssModule} */ (m);
			const generator = /** @type {CssGenerator} */ (module.generator);
			const local = cssExportConvention(
				value,
				/** @type {CssGeneratorExportsConvention} */
				(generator.options.exportsConvention)
			)[0];
			const prefix =
				dep.exportType === CssIcssExportDependency.EXPORT_TYPE.CUSTOM_VARIABLE
					? "--"
					: "";

			return (
				prefix +
				getCssParser().escapeIdentifier(
					getLocalIdent(
						local,
						/** @type {CssModule} */
						(m),
						templateContext.chunkGraph,
						templateContext.runtimeTemplate
					)
				)
			);
		}

		return value;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const dep = /** @type {CssIcssExportDependency} */ (dependency);
		if (!dep.range && templateContext.type !== JAVASCRIPT_TYPE) return;
		const { module: m, moduleGraph, runtime, cssData } = templateContext;
		const module = /** @type {CssModule} */ (m);
		const generator = /** @type {CssGenerator} */ (module.generator);
		const isReference = Array.isArray(dep.value);

		/** @type {string} */
		let value;

		// The `composes` has more complex logic for collecting all the classes
		if (
			dep.exportType === CssIcssExportDependency.EXPORT_TYPE.COMPOSES &&
			templateContext.type === JAVASCRIPT_TYPE
		) {
			value = CssIcssExportDependencyTemplate.resolveReferences(
				dep,
				templateContext
			).join(" ");
		} else if (isReference) {
			const resolved = CssIcssExportDependencyTemplate.resolve(
				dep.value[0],
				dep.value[1],
				templateContext
			);

			// Fallback to the local name if not resolved
			value = resolved || dep.value[0];
		} else {
			value = CssIcssExportDependencyTemplate.getIdentifier(
				/** @type {string} */ (dep.value),
				dep,
				templateContext
			);
		}

		if (
			dep.exportType ===
			CssIcssExportDependency.EXPORT_TYPE.GRID_CUSTOM_IDENTIFIER
		) {
			value += `-${dep.name}`;
		}

		if (
			templateContext.type === JAVASCRIPT_TYPE &&
			dep.exportMode !== CssIcssExportDependency.EXPORT_MODE.NONE
		) {
			const names = dep.getExportsConventionNames(
				dep.name,
				/** @type {CssGeneratorExportsConvention} */
				(generator.options.exportsConvention)
			);
			const usedNames =
				/** @type {string[]} */
				(
					names
						.map((name) =>
							moduleGraph.getExportInfo(module, name).getUsedName(name, runtime)
						)
						.filter(Boolean)
				);
			const allNames = new Set([...usedNames, ...names]);
			const unescaped = getCssParser().unescapeIdentifier(value);

			for (const used of allNames) {
				if (dep.exportMode === CssIcssExportDependency.EXPORT_MODE.ONCE) {
					if (cssData.exports.has(used)) return;
					cssData.exports.set(used, unescaped);
				} else {
					const originalValue =
						dep.exportMode === CssIcssExportDependency.EXPORT_MODE.REPLACE
							? undefined
							: cssData.exports.get(used);

					cssData.exports.set(
						used,
						`${originalValue ? `${originalValue}${unescaped ? " " : ""}` : ""}${unescaped}`
					);
				}
			}
		} else if (
			dep.range &&
			templateContext.type === CSS_TYPE &&
			dep.exportMode !== CssIcssExportDependency.EXPORT_MODE.APPEND &&
			dep.exportMode !== CssIcssExportDependency.EXPORT_MODE.SELF_REFERENCE
		) {
			source.replace(dep.range[0], dep.range[1] - 1, value);
		}
	}
};

/** @type {Record<"NONE" | "REPLACE" | "APPEND" | "ONCE" | "SELF_REFERENCE", ExportMode>} */
CssIcssExportDependency.EXPORT_MODE = {
	NONE: 0,
	REPLACE: 1,
	APPEND: 2,
	ONCE: 3,
	SELF_REFERENCE: 4
};

/** @type {Record<"NORMAL" | "CUSTOM_VARIABLE" | "GRID_CUSTOM_IDENTIFIER" | "COMPOSES", ExportType>} */
CssIcssExportDependency.EXPORT_TYPE = {
	NORMAL: 0,
	CUSTOM_VARIABLE: 1,
	GRID_CUSTOM_IDENTIFIER: 2,
	COMPOSES: 3
};

makeSerializable(
	CssIcssExportDependency,
	"webpack/lib/dependencies/CssIcssExportDependency"
);

module.exports = CssIcssExportDependency;
