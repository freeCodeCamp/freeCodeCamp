/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra, Zackary Jackson @ScriptedAlchemy, Marais Rossouw @maraisr
*/

"use strict";

const Dependency = require("../Dependency");
const makeSerializable = require("../util/makeSerializable");

/** @typedef {import("./ContainerEntryModule").ExposeOptions} ExposeOptions */
/** @typedef {import("./ContainerEntryModule").ExposesList} ExposesList */

class ContainerEntryDependency extends Dependency {
	/**
	 * @param {string} name entry name
	 * @param {ExposesList} exposes list of exposed modules
	 * @param {string} shareScope name of the share scope
	 */
	constructor(name, exposes, shareScope) {
		super();
		this.name = name;
		this.exposes = exposes;
		this.shareScope = shareScope;
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return `container-entry-${this.name}`;
	}

	get type() {
		return "container entry";
	}

	get category() {
		return "esm";
	}
}

makeSerializable(
	ContainerEntryDependency,
	"webpack/lib/container/ContainerEntryDependency"
);

module.exports = ContainerEntryDependency;
