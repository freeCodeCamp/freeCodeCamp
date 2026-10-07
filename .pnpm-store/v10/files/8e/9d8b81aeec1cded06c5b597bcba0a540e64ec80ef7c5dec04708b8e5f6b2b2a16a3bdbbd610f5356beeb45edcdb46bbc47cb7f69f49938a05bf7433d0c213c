import { plugins, format as format$1 } from '@vitest/pretty-format';
import * as loupe from 'loupe';

const { AsymmetricMatcher, DOMCollection, DOMElement, Immutable, ReactElement, ReactTestComponent } = plugins;
const PLUGINS = [
	ReactTestComponent,
	ReactElement,
	DOMElement,
	DOMCollection,
	Immutable,
	AsymmetricMatcher
];
function stringify(object, maxDepth = 10, { maxLength,...options } = {}) {
	const MAX_LENGTH = maxLength ?? 1e4;
	let result;
	try {
		result = format$1(object, {
			maxDepth,
			escapeString: false,
			plugins: PLUGINS,
			...options
		});
	} catch {
		result = format$1(object, {
			callToJSON: false,
			maxDepth,
			escapeString: false,
			plugins: PLUGINS,
			...options
		});
	}
	// Prevents infinite loop https://github.com/vitest-dev/vitest/issues/7249
	return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object, Math.floor(Math.min(maxDepth, Number.MAX_SAFE_INTEGER) / 2), {
		maxLength,
		...options
	}) : result;
}
const formatRegExp = /%[sdjifoOc%]/g;
function format(...args) {
	if (typeof args[0] !== "string") {
		const objects = [];
		for (let i = 0; i < args.length; i++) {
			objects.push(inspect(args[i], {
				depth: 0,
				colors: false
			}));
		}
		return objects.join(" ");
	}
	const len = args.length;
	let i = 1;
	const template = args[0];
	let str = String(template).replace(formatRegExp, (x) => {
		if (x === "%%") {
			return "%";
		}
		if (i >= len) {
			return x;
		}
		switch (x) {
			case "%s": {
				const value = args[i++];
				if (typeof value === "bigint") {
					return `${value.toString()}n`;
				}
				if (typeof value === "number" && value === 0 && 1 / value < 0) {
					return "-0";
				}
				if (typeof value === "object" && value !== null) {
					if (typeof value.toString === "function" && value.toString !== Object.prototype.toString) {
						return value.toString();
					}
					return inspect(value, {
						depth: 0,
						colors: false
					});
				}
				return String(value);
			}
			case "%d": {
				const value = args[i++];
				if (typeof value === "bigint") {
					return `${value.toString()}n`;
				}
				return Number(value).toString();
			}
			case "%i": {
				const value = args[i++];
				if (typeof value === "bigint") {
					return `${value.toString()}n`;
				}
				return Number.parseInt(String(value)).toString();
			}
			case "%f": return Number.parseFloat(String(args[i++])).toString();
			case "%o": return inspect(args[i++], {
				showHidden: true,
				showProxy: true
			});
			case "%O": return inspect(args[i++]);
			case "%c": {
				i++;
				return "";
			}
			case "%j": try {
				return JSON.stringify(args[i++]);
			} catch (err) {
				const m = err.message;
				if (m.includes("circular structure") || m.includes("cyclic structures") || m.includes("cyclic object")) {
					return "[Circular]";
				}
				throw err;
			}
			default: return x;
		}
	});
	for (let x = args[i]; i < len; x = args[++i]) {
		if (x === null || typeof x !== "object") {
			str += ` ${x}`;
		} else {
			str += ` ${inspect(x)}`;
		}
	}
	return str;
}
function inspect(obj, options = {}) {
	if (options.truncate === 0) {
		options.truncate = Number.POSITIVE_INFINITY;
	}
	return loupe.inspect(obj, options);
}
function objDisplay(obj, options = {}) {
	if (typeof options.truncate === "undefined") {
		options.truncate = 40;
	}
	const str = inspect(obj, options);
	const type = Object.prototype.toString.call(obj);
	if (options.truncate && str.length >= options.truncate) {
		if (type === "[object Function]") {
			const fn = obj;
			return !fn.name ? "[Function]" : `[Function: ${fn.name}]`;
		} else if (type === "[object Array]") {
			return `[ Array(${obj.length}) ]`;
		} else if (type === "[object Object]") {
			const keys = Object.keys(obj);
			const kstr = keys.length > 2 ? `${keys.splice(0, 2).join(", ")}, ...` : keys.join(", ");
			return `{ Object (${kstr}) }`;
		} else {
			return str;
		}
	}
	return str;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

export { format as f, getDefaultExportFromCjs as g, inspect as i, objDisplay as o, stringify as s };
