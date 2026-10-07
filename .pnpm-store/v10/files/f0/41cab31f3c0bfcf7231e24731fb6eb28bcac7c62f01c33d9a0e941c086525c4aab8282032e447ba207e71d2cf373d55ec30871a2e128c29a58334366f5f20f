import { i as noop } from "./general-D3muxt2f.mjs";
import process from "node:process";
import { bgRed, bgYellow, blue, green, rgb, yellow } from "ansis";
import readline from "node:readline";
//#region src/utils/logger.ts
const LogLevels = {
	silent: 0,
	error: 1,
	warn: 2,
	info: 3
};
function format(msgs) {
	return msgs.filter((arg) => arg !== void 0 && arg !== false).join(" ");
}
function clearScreen() {
	const repeatCount = process.stdout.rows - 2;
	const blank = repeatCount > 0 ? "\n".repeat(repeatCount) : "";
	console.info(blank);
	readline.cursorTo(process.stdout, 0, 0);
	readline.clearScreenDown(process.stdout);
}
const warnedMessages = /* @__PURE__ */ new Set();
function createLogger(level = "info", options = {}) {
	const resolvedOptions = {
		allowClearScreen: true,
		failOnWarn: false,
		console: globalThis.console,
		...options
	};
	const { allowClearScreen, console, customLogger, failOnWarn } = resolvedOptions;
	if (customLogger) return customLogger;
	function output(type, msg) {
		if (LogLevels[logger.level] < LogLevels[type]) return;
		console[type === "info" ? "log" : type](msg);
	}
	const clear = allowClearScreen && process.stdout.isTTY && !process.env.CI ? clearScreen : () => {};
	const logger = {
		level,
		options: resolvedOptions,
		info(...msgs) {
			output("info", `${blue`ℹ`} ${format(msgs)}`);
		},
		warn(...msgs) {
			if (failOnWarn) return this.error(...msgs);
			const message = format(msgs);
			warnedMessages.add(message);
			output("warn", `\n${bgYellow` WARN `} ${message}\n`);
		},
		warnOnce(...msgs) {
			const message = format(msgs);
			if (warnedMessages.has(message)) return;
			if (failOnWarn) return this.error(...msgs);
			warnedMessages.add(message);
			output("warn", `\n${bgYellow` WARN `} ${message}\n`);
		},
		error(...msgs) {
			output("error", `\n${bgRed` ERROR `} ${format(msgs)}\n`);
			process.exitCode = 1;
		},
		success(...msgs) {
			output("info", `${green`✔`} ${format(msgs)}`);
		},
		clearScreen(type) {
			if (LogLevels[logger.level] >= LogLevels[type]) clear();
		}
	};
	return logger;
}
const globalLogger = createLogger();
function getNameLabel(ansis, name) {
	if (!name) return void 0;
	return ansis(`[${name}]`);
}
function prettyFormat(format) {
	const formatColor = format === "es" ? blue : format === "cjs" ? yellow : noop;
	let formatText;
	switch (format) {
		case "es":
			formatText = "ESM";
			break;
		default:
			formatText = format.toUpperCase();
			break;
	}
	return formatColor(`[${formatText}]`);
}
const colors = /* @__PURE__ */ new Map();
function generateColor(name = "default") {
	if (colors.has(name)) return colors.get(name);
	let color;
	if (name === "default") color = blue;
	else {
		let hash = 0;
		for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
		color = rgb(...hslToRgb(hash % 360, 35, 55));
	}
	colors.set(name, color);
	return color;
}
function hslToRgb(h, s, l) {
	h = h % 360;
	h /= 360;
	s /= 100;
	l /= 100;
	let r, g, b;
	if (s === 0) r = g = b = l;
	else {
		const q = l < .5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}
	return [
		Math.max(0, Math.round(r * 255)),
		Math.max(0, Math.round(g * 255)),
		Math.max(0, Math.round(b * 255))
	];
}
function hue2rgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
//#endregion
export { globalLogger as a, getNameLabel as i, createLogger as n, prettyFormat as o, generateColor as r, LogLevels as t };
