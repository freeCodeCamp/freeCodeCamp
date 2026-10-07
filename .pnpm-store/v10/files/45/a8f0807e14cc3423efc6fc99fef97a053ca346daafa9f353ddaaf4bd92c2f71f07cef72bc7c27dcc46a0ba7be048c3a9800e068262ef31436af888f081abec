/*
	MIT License http://www.opensource.org/licenses/mit-license.php
*/

"use strict";

const RuntimeGlobals = require("../RuntimeGlobals");
const Template = require("../Template");
const HelperRuntimeModule = require("./HelperRuntimeModule");

/** @typedef {import("../Compilation")} Compilation */

class CreateFakeNamespaceObjectRuntimeModule extends HelperRuntimeModule {
	constructor() {
		super("create fake namespace object");
	}

	/**
	 * @returns {string | null} runtime code
	 */
	generate() {
		const compilation = /** @type {Compilation} */ (this.compilation);
		const { runtimeTemplate } = compilation;
		const fn = RuntimeGlobals.createFakeNamespaceObject;
		return Template.asString([
			`var getProto = Object.getPrototypeOf ? ${runtimeTemplate.returningFunction(
				"Object.getPrototypeOf(obj)",
				"obj"
			)} : ${runtimeTemplate.returningFunction("obj.__proto__", "obj")};`,
			"var leafPrototypes;",
			"// create a fake namespace object",
			"// mode & 1: value is a module id, require it",
			"// mode & 2: merge all properties of value into the ns",
			"// mode & 4: return value when already ns object",
			"// mode & 16: return value when it's Promise-like",
			"// mode & 8|1: behave like require",
			// Note: must be a function (not arrow), because this is used in body!
			`${fn} = function(value, mode) {`,
			Template.indent([
				"if(mode & 1) value = this(value);",
				"if(mode & 8) return value;",
				"if(typeof value === 'object' && value) {",
				Template.indent([
					"if((mode & 4) && value.__esModule) return value;",
					"if((mode & 16) && typeof value.then === 'function') return value;"
				]),
				"}",
				"var ns = Object.create(null);",
				`${RuntimeGlobals.makeNamespaceObject}(ns);`,
				"var def = {};",
				"leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];",
				"for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {",
				Template.indent([
					`Object.getOwnPropertyNames(current).forEach(${runtimeTemplate.expressionFunction(
						`def[key] = ${runtimeTemplate.returningFunction("value[key]", "")}`,
						"key"
					)});`
				]),
				"}",
				`def['default'] = ${runtimeTemplate.returningFunction("value", "")};`,
				`${RuntimeGlobals.definePropertyGetters}(ns, def);`,
				"return ns;"
			]),
			"};"
		]);
	}
}

module.exports = CreateFakeNamespaceObjectRuntimeModule;
