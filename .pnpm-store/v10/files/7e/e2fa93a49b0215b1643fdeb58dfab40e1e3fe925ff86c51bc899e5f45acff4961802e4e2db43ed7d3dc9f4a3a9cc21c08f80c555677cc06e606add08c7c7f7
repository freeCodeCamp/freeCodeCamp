//#region src/utils/code-frame.ts
function spaces(index) {
	let result = "";
	while (index--) result += " ";
	return result;
}
function tabsToSpaces(value) {
	return value.replace(/^\t+/, (match) => match.split("	").join("  "));
}
const LINE_TRUNCATE_LENGTH = 120;
const MIN_CHARACTERS_SHOWN_AFTER_LOCATION = 10;
const ELLIPSIS = "...";
function getCodeFrame(source, line, column) {
	let lines = source.split("\n");
	if (line > lines.length) return "";
	const maxLineLength = Math.max(tabsToSpaces(lines[line - 1].slice(0, column)).length + MIN_CHARACTERS_SHOWN_AFTER_LOCATION + 3, LINE_TRUNCATE_LENGTH);
	const frameStart = Math.max(0, line - 3);
	let frameEnd = Math.min(line + 2, lines.length);
	lines = lines.slice(frameStart, frameEnd);
	while (!/\S/.test(lines[lines.length - 1])) {
		lines.pop();
		frameEnd -= 1;
	}
	const digits = String(frameEnd).length;
	return lines.map((sourceLine, index) => {
		const isErrorLine = frameStart + index + 1 === line;
		let lineNumber = String(index + frameStart + 1);
		while (lineNumber.length < digits) lineNumber = ` ${lineNumber}`;
		let displayedLine = tabsToSpaces(sourceLine);
		if (displayedLine.length > maxLineLength) displayedLine = `${displayedLine.slice(0, maxLineLength - 3)}${ELLIPSIS}`;
		if (isErrorLine) {
			const indicator = spaces(digits + 2 + tabsToSpaces(sourceLine.slice(0, column)).length) + "^";
			return `${lineNumber}: ${displayedLine}\n${indicator}`;
		}
		return `${lineNumber}: ${displayedLine}`;
	}).join("\n");
}
//#endregion
//#region src/log/locate-character/index.js
/** @typedef {import('./types').Location} Location */
/**
* @param {import('./types').Range} range
* @param {number} index
*/
function rangeContains(range, index) {
	return range.start <= index && index < range.end;
}
/**
* @param {string} source
* @param {import('./types').Options} [options]
*/
function getLocator(source, options = {}) {
	const { offsetLine = 0, offsetColumn = 0 } = options;
	let start = 0;
	const ranges = source.split("\n").map((line, i) => {
		const end = start + line.length + 1;
		/** @type {import('./types').Range} */
		const range = {
			start,
			end,
			line: i
		};
		start = end;
		return range;
	});
	let i = 0;
	/**
	* @param {string | number} search
	* @param {number} [index]
	* @returns {Location | undefined}
	*/
	function locator(search, index) {
		if (typeof search === "string") search = source.indexOf(search, index ?? 0);
		if (search === -1) return void 0;
		let range = ranges[i];
		const d = search >= range.end ? 1 : -1;
		while (range) {
			if (rangeContains(range, search)) return {
				line: offsetLine + range.line,
				column: offsetColumn + search - range.start,
				character: search
			};
			i += d;
			range = ranges[i];
		}
	}
	return locator;
}
/**
* @param {string} source
* @param {string | number} search
* @param {import('./types').Options} [options]
* @returns {Location | undefined}
*/
function locate(source, search, options) {
	return getLocator(source, options)(search, options && options.startIndex);
}
//#endregion
//#region src/log/logs.ts
const INVALID_LOG_POSITION = "INVALID_LOG_POSITION", PLUGIN_ERROR = "PLUGIN_ERROR", INPUT_HOOK_IN_OUTPUT_PLUGIN = "INPUT_HOOK_IN_OUTPUT_PLUGIN", CYCLE_LOADING = "CYCLE_LOADING", MULTIPLE_WATCHER_OPTION = "MULTIPLE_WATCHER_OPTION", PARSE_ERROR = "PARSE_ERROR";
function logParseError(message, id, pos) {
	return {
		code: PARSE_ERROR,
		id,
		message,
		pos
	};
}
function logInvalidLogPosition(pluginName) {
	return {
		code: INVALID_LOG_POSITION,
		message: `Plugin "${pluginName}" tried to add a file position to a log or warning. This is only supported in the "transform" hook at the moment and will be ignored.`
	};
}
function logInputHookInOutputPlugin(pluginName, hookName) {
	return {
		code: INPUT_HOOK_IN_OUTPUT_PLUGIN,
		message: `The "${hookName}" hook used by the output plugin ${pluginName} is a build time hook and will not be run for that plugin. Either this plugin cannot be used as an output plugin, or it should have an option to configure it as an output plugin.`
	};
}
function logCycleLoading(pluginName, moduleId) {
	return {
		code: CYCLE_LOADING,
		message: `Found the module "${moduleId}" cycle loading at ${pluginName} plugin, it maybe blocking fetching modules.`
	};
}
function logMultipleWatcherOption() {
	return {
		code: MULTIPLE_WATCHER_OPTION,
		message: `Found multiple watcher options at watch options, using first one to start watcher.`
	};
}
function logPluginError(error, plugin, { hook, id } = {}) {
	try {
		const code = error.code;
		if (!error.pluginCode && code != null && (typeof code !== "string" || !code.startsWith("PLUGIN_"))) error.pluginCode = code;
		error.code = PLUGIN_ERROR;
		error.plugin = plugin;
		if (hook) error.hook = hook;
		if (id) error.id = id;
	} catch (_) {} finally {
		return error;
	}
}
function error(base) {
	if (!(base instanceof Error)) {
		base = Object.assign(new Error(base.message), base);
		Object.defineProperty(base, "name", {
			value: "RolldownError",
			writable: true
		});
	}
	throw base;
}
function augmentCodeLocation(properties, pos, source, id) {
	if (typeof pos === "object") {
		const { line, column } = pos;
		properties.loc = {
			column,
			file: id,
			line
		};
	} else {
		properties.pos = pos;
		const location = locate(source, pos, { offsetLine: 1 });
		if (!location) return;
		const { line, column } = location;
		properties.loc = {
			column,
			file: id,
			line
		};
	}
	if (properties.frame === void 0) {
		const { line, column } = properties.loc;
		properties.frame = getCodeFrame(source, line, column);
	}
}
//#endregion
export { logInvalidLogPosition as a, logPluginError as c, logInputHookInOutputPlugin as i, locate as l, error as n, logMultipleWatcherOption as o, logCycleLoading as r, logParseError as s, augmentCodeLocation as t, getCodeFrame as u };
