import { a as namespaces, i as enabled, n as disable, o as humanize, r as enable$1, s as selectColor, t as createDebug$1 } from "./core.js";
import { isatty } from "node:tty";
import { formatWithOptions, inspect } from "node:util";
const colors = process.stderr.getColorDepth && process.stderr.getColorDepth() > 2 ? [
	20,
	21,
	26,
	27,
	32,
	33,
	38,
	39,
	40,
	41,
	42,
	43,
	44,
	45,
	56,
	57,
	62,
	63,
	68,
	69,
	74,
	75,
	76,
	77,
	78,
	79,
	80,
	81,
	92,
	93,
	98,
	99,
	112,
	113,
	128,
	129,
	134,
	135,
	148,
	149,
	160,
	161,
	162,
	163,
	164,
	165,
	166,
	167,
	168,
	169,
	170,
	171,
	172,
	173,
	178,
	179,
	184,
	185,
	196,
	197,
	198,
	199,
	200,
	201,
	202,
	203,
	204,
	205,
	206,
	207,
	208,
	209,
	214,
	215,
	220,
	221
] : [
	6,
	2,
	3,
	4,
	5,
	1
];
const inspectOpts = Object.keys(process.env).filter((key) => /^debug_/i.test(key)).reduce((obj, key) => {
	const prop = key.slice(6).toLowerCase().replace(/_([a-z])/g, (_, k) => k.toUpperCase());
	let value = process.env[key];
	const lowerCase = typeof value === "string" && value.toLowerCase();
	if (value === "null") value = null;
	else if (lowerCase === "yes" || lowerCase === "on" || lowerCase === "true" || lowerCase === "enabled") value = true;
	else if (lowerCase === "no" || lowerCase === "off" || lowerCase === "false" || lowerCase === "disabled") value = false;
	else value = Number(value);
	obj[prop] = value;
	return obj;
}, {});
function useColors() {
	return "colors" in inspectOpts ? Boolean(inspectOpts.colors) : isatty(process.stderr.fd);
}
function getDate() {
	if (inspectOpts.hideDate) return "";
	return `${(/* @__PURE__ */ new Date()).toISOString()} `;
}
function formatArgs(diff, args) {
	const { namespace: name, useColors: useColors$1 } = this;
	if (useColors$1) {
		const c = this.color;
		const colorCode = `\u001B[3${c < 8 ? c : `8;5;${c}`}`;
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;
		args[0] = prefix + args[0].split("\n").join(`\n${prefix}`);
		args.push(`${colorCode}m+${this.humanize(diff)}\u001B[0m`);
	} else args[0] = `${getDate()}${name} ${args[0]}`;
}
function log(...args) {
	process.stderr.write(`${formatWithOptions(this.inspectOpts, ...args)}\n`);
}
const defaultOptions = {
	useColors: useColors(),
	formatArgs,
	formatters: {
		o(v) {
			this.inspectOpts.colors = this.useColors;
			return inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
		},
		O(v) {
			this.inspectOpts.colors = this.useColors;
			return inspect(v, this.inspectOpts);
		}
	},
	inspectOpts,
	log,
	humanize
};
function createDebug(namespace, options) {
	var _ref;
	const color = (_ref = options && options.color) !== null && _ref !== void 0 ? _ref : selectColor(colors, namespace);
	return createDebug$1(namespace, Object.assign(defaultOptions, { color }, options));
}
function save(namespaces$1) {
	if (namespaces$1) process.env.DEBUG = namespaces$1;
	else delete process.env.DEBUG;
}
function enable(namespaces$1) {
	save(namespaces$1);
	enable$1(namespaces$1);
}
enable$1(process.env.DEBUG || "");
export { createDebug, disable, enable, enabled, namespaces };
