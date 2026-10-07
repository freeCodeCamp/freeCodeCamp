import { a as namespaces, i as enabled, n as disable, o as humanize, r as enable$1, s as selectColor, t as createDebug$1 } from "./core.js";
const colors = [
	"#0000CC",
	"#0000FF",
	"#0033CC",
	"#0033FF",
	"#0066CC",
	"#0066FF",
	"#0099CC",
	"#0099FF",
	"#00CC00",
	"#00CC33",
	"#00CC66",
	"#00CC99",
	"#00CCCC",
	"#00CCFF",
	"#3300CC",
	"#3300FF",
	"#3333CC",
	"#3333FF",
	"#3366CC",
	"#3366FF",
	"#3399CC",
	"#3399FF",
	"#33CC00",
	"#33CC33",
	"#33CC66",
	"#33CC99",
	"#33CCCC",
	"#33CCFF",
	"#6600CC",
	"#6600FF",
	"#6633CC",
	"#6633FF",
	"#66CC00",
	"#66CC33",
	"#9900CC",
	"#9900FF",
	"#9933CC",
	"#9933FF",
	"#99CC00",
	"#99CC33",
	"#CC0000",
	"#CC0033",
	"#CC0066",
	"#CC0099",
	"#CC00CC",
	"#CC00FF",
	"#CC3300",
	"#CC3333",
	"#CC3366",
	"#CC3399",
	"#CC33CC",
	"#CC33FF",
	"#CC6600",
	"#CC6633",
	"#CC9900",
	"#CC9933",
	"#CCCC00",
	"#CCCC33",
	"#FF0000",
	"#FF0033",
	"#FF0066",
	"#FF0099",
	"#FF00CC",
	"#FF00FF",
	"#FF3300",
	"#FF3333",
	"#FF3366",
	"#FF3399",
	"#FF33CC",
	"#FF33FF",
	"#FF6600",
	"#FF6633",
	"#FF9900",
	"#FF9933",
	"#FFCC00",
	"#FFCC33"
];
function formatArgs(diff, args) {
	const { useColors } = this;
	args[0] = `${(useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ")}+${this.humanize(diff)}`;
	if (!useColors) return;
	const c = `color: ${this.color}`;
	args.splice(1, 0, c, "color: inherit");
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-z%]/gi, (match) => {
		if (match === "%%") return;
		index++;
		if (match === "%c") lastC = index;
	});
	args.splice(lastC, 0, c);
}
const log = console.debug || console.log || (() => {});
const storage = localstorage();
const defaultOptions = {
	useColors: true,
	formatArgs,
	formatters: { j(v) {
		try {
			return JSON.stringify(v);
		} catch (error) {
			return `[UnexpectedJSONParseError]: ${error.message}`;
		}
	} },
	inspectOpts: {},
	humanize,
	log
};
function createDebug(namespace, options) {
	var _ref;
	const color = (_ref = options && options.color) !== null && _ref !== void 0 ? _ref : selectColor(colors, namespace);
	return createDebug$1(namespace, Object.assign(defaultOptions, { color }, options));
}
function localstorage() {
	try {
		return localStorage;
	} catch (_unused) {}
}
function load() {
	let r;
	try {
		r = storage.getItem("debug") || storage.getItem("DEBUG");
	} catch (_unused2) {}
	if (!r && typeof process !== "undefined" && "env" in process) r = process.env.DEBUG;
	return r || "";
}
function save(namespaces$1) {
	try {
		if (namespaces$1) storage.setItem("debug", namespaces$1);
		else storage.removeItem("debug");
	} catch (_unused3) {}
}
function enable(namespaces$1) {
	save(namespaces$1);
	enable$1(namespaces$1);
}
enable$1(load());
export { createDebug, disable, enable, enabled, namespaces };
