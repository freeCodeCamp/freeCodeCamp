/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ExternalsPlugin = require("../ExternalsPlugin");

/** @typedef {import("../Compiler")} Compiler */
/** @typedef {"main" | "preload" | "renderer"} ElectronContext */

class ElectronTargetPlugin {
	/**
	 * Creates an instance of ElectronTargetPlugin.
	 * @param {ElectronContext=} context in main, preload or renderer context?
	 */
	constructor(context) {
		/** @type {ElectronContext | undefined} */
		this._context = context;
	}

	/**
	 * Applies the plugin by registering its hooks on the compiler.
	 * @param {Compiler} compiler the compiler instance
	 * @returns {void}
	 */
	apply(compiler) {
		new ExternalsPlugin("node-commonjs", [
			"clipboard",
			"crash-reporter",
			"electron",
			"ipc",
			"native-image",
			"original-fs",
			"screen",
			"shell"
		]).apply(compiler);
		switch (this._context) {
			case "main":
				new ExternalsPlugin("node-commonjs", [
					"app",
					"auto-updater",
					"browser-window",
					"content-tracing",
					"dialog",
					"global-shortcut",
					"ipc-main",
					"menu",
					"menu-item",
					"power-monitor",
					"power-save-blocker",
					"protocol",
					"session",
					"tray",
					"web-contents"
				]).apply(compiler);
				break;
			case "preload":
			case "renderer":
				new ExternalsPlugin("node-commonjs", [
					"desktop-capturer",
					"ipc-renderer",
					"remote",
					"web-frame"
				]).apply(compiler);
				break;
		}
	}
}

module.exports = ElectronTargetPlugin;
