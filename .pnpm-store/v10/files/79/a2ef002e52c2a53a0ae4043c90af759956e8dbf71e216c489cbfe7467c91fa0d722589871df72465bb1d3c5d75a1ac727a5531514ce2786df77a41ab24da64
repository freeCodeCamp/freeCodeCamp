/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Ivan Kopeykin @vankop
*/

"use strict";

const { cssExportConvention } = require("../util/conventions");
const createHash = require("../util/createHash");
const { makePathsRelative } = require("../util/identifier");
const makeSerializable = require("../util/makeSerializable");
const memoize = require("../util/memoize");
const NullDependency = require("./NullDependency");

/** @typedef {import("webpack-sources").ReplaceSource} ReplaceSource */
/** @typedef {import("../../declarations/WebpackOptions").CssGeneratorExportsConvention} CssGeneratorExportsConvention */
/** @typedef {import("../../declarations/WebpackOptions").CssGeneratorLocalIdentName} CssGeneratorLocalIdentName */
/** @typedef {import("../ChunkGraph")} ChunkGraph */
/** @typedef {import("../CssModule")} CssModule */
/** @typedef {import("../Dependency")} Dependency */
/** @typedef {import("../Dependency").ExportsSpec} ExportsSpec */
/** @typedef {import("../Dependency").UpdateHashContext} UpdateHashContext */
/** @typedef {import("../DependencyTemplate").CssDependencyTemplateContext} DependencyTemplateContext */
/** @typedef {import("../ModuleGraph")} ModuleGraph */
/** @typedef {import("../NormalModuleFactory").ResourceDataWithData} ResourceDataWithData */
/** @typedef {import("../RuntimeTemplate")} RuntimeTemplate */
/** @typedef {import("../css/CssGenerator")} CssGenerator */
/** @typedef {import("../css/CssParser").Range} Range */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectDeserializerContext} ObjectDeserializerContext */
/** @typedef {import("../serialization/ObjectMiddleware").ObjectSerializerContext} ObjectSerializerContext */
/** @typedef {import("../util/Hash")} Hash */
/** @typedef {import("../util/createHash").Algorithm} Algorithm */

const getCssParser = memoize(() => require("../css/CssParser"));

/**
 * @param {string} local css local
 * @param {CssModule} module module
 * @param {ChunkGraph} chunkGraph chunk graph
 * @param {RuntimeTemplate} runtimeTemplate runtime template
 * @returns {string} local ident
 */
const getLocalIdent = (local, module, chunkGraph, runtimeTemplate) => {
	const localIdentName =
		/** @type {CssGenerator} */
		(module.generator).localIdentName;
	const relativeResourcePath = makePathsRelative(
		/** @type {string} */
		(module.context),
		module.matchResource || module.resource,
		runtimeTemplate.compilation.compiler.root
	);
	const { hashFunction, hashDigest, hashDigestLength, hashSalt, uniqueName } =
		runtimeTemplate.outputOptions;
	const hash = createHash(/** @type {Algorithm} */ (hashFunction));

	if (hashSalt) {
		hash.update(hashSalt);
	}

	hash.update(relativeResourcePath);

	if (!/\[local\]/.test(localIdentName)) {
		hash.update(local);
	}

	const localIdentHash =
		/** @type {string} */
		(hash.digest(hashDigest)).slice(0, hashDigestLength);

	return runtimeTemplate.compilation
		.getPath(localIdentName, {
			filename: relativeResourcePath,
			hash: localIdentHash,
			contentHash: localIdentHash,
			chunkGraph,
			module
		})
		.replace(/\[local\]/g, local)
		.replace(/\[uniqueName\]/g, /** @type {string} */ (uniqueName))
		.replace(/^((-?[0-9])|--)/, "_$1");
};

class CssLocalIdentifierDependency extends NullDependency {
	/**
	 * @param {string} name name
	 * @param {Range} range range
	 * @param {string=} prefix prefix
	 */
	constructor(name, range, prefix = "") {
		super();
		this.name = name;
		this.range = range;
		this.prefix = prefix;
		this._conventionNames = undefined;
		this._hashUpdate = undefined;
	}

	get type() {
		return "css local identifier";
	}

	/**
	 * @param {string} name export name
	 * @param {CssGeneratorExportsConvention} convention convention of the export name
	 * @returns {string[]} convention results
	 */
	getExportsConventionNames(name, convention) {
		if (this._conventionNames) {
			return this._conventionNames;
		}
		this._conventionNames = cssExportConvention(this.name, convention);
		return this._conventionNames;
	}

	/**
	 * Returns the exported names
	 * @param {ModuleGraph} moduleGraph module graph
	 * @returns {ExportsSpec | undefined} export names
	 */
	getExports(moduleGraph) {
		const module = /** @type {CssModule} */ (moduleGraph.getParentModule(this));
		const convention =
			/** @type {CssGenerator} */
			(module.generator).convention;
		const names = this.getExportsConventionNames(this.name, convention);
		return {
			exports: names.map(name => ({
				name,
				canMangle: true
			})),
			dependencies: undefined
		};
	}

	/**
	 * Update the hash
	 * @param {Hash} hash hash to be updated
	 * @param {UpdateHashContext} context context
	 * @returns {void}
	 */
	updateHash(hash, { chunkGraph }) {
		if (this._hashUpdate === undefined) {
			const module =
				/** @type {CssModule} */
				(chunkGraph.moduleGraph.getParentModule(this));
			const generator =
				/** @type {CssGenerator} */
				(module.generator);
			const names = this.getExportsConventionNames(
				this.name,
				generator.convention
			);
			this._hashUpdate = `exportsConvention|${JSON.stringify(names)}|localIdentName|${JSON.stringify(generator.localIdentName)}`;
		}
		hash.update(this._hashUpdate);
	}

	/**
	 * @param {ObjectSerializerContext} context context
	 */
	serialize(context) {
		const { write } = context;
		write(this.name);
		write(this.range);
		write(this.prefix);
		super.serialize(context);
	}

	/**
	 * @param {ObjectDeserializerContext} context context
	 */
	deserialize(context) {
		const { read } = context;
		this.name = read();
		this.range = read();
		this.prefix = read();
		super.deserialize(context);
	}
}

CssLocalIdentifierDependency.Template = class CssLocalIdentifierDependencyTemplate extends (
	NullDependency.Template
) {
	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {string} local local name
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {string} identifier
	 */
	static getIdentifier(
		dependency,
		local,
		{ module: m, chunkGraph, runtimeTemplate }
	) {
		const dep = /** @type {CssLocalIdentifierDependency} */ (dependency);
		const module = /** @type {CssModule} */ (m);

		return (
			dep.prefix +
			getCssParser().escapeIdentifier(
				getLocalIdent(local, module, chunkGraph, runtimeTemplate)
			)
		);
	}

	/**
	 * @param {Dependency} dependency the dependency for which the template should be applied
	 * @param {ReplaceSource} source the current replace source which can be modified
	 * @param {DependencyTemplateContext} templateContext the context object
	 * @returns {void}
	 */
	apply(dependency, source, templateContext) {
		const { module: m, moduleGraph, runtime, cssData } = templateContext;
		const dep = /** @type {CssLocalIdentifierDependency} */ (dependency);
		const module = /** @type {CssModule} */ (m);
		const convention =
			/** @type {CssGenerator} */
			(module.generator).convention;
		const names = dep.getExportsConventionNames(dep.name, convention);
		const usedNames =
			/** @type {(string)[]} */
			(
				names
					.map(name =>
						moduleGraph.getExportInfo(module, name).getUsedName(name, runtime)
					)
					.filter(Boolean)
			);
		const local = usedNames.length === 0 ? names[0] : usedNames[0];
		const identifier = CssLocalIdentifierDependencyTemplate.getIdentifier(
			dep,
			local,
			templateContext
		);

		source.replace(dep.range[0], dep.range[1] - 1, identifier);

		for (const used of usedNames.concat(names)) {
			cssData.exports.set(used, getCssParser().unescapeIdentifier(identifier));
		}
	}
};

makeSerializable(
	CssLocalIdentifierDependency,
	"webpack/lib/dependencies/CssLocalIdentifierDependency"
);

module.exports = CssLocalIdentifierDependency;
