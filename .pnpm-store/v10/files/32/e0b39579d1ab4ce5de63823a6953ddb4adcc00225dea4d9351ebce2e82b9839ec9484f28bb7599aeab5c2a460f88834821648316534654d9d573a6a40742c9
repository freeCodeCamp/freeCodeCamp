/**
 * filesize
 *
 * @copyright 2022 Jason Mulligan <jason.mulligan@avoidwork.com>
 * @license BSD-3-Clause
 * @version 8.0.7
 */
const b = /^(b|B)$/,
	symbol = {
		iec: {
			bits: ["bit", "Kibit", "Mibit", "Gibit", "Tibit", "Pibit", "Eibit", "Zibit", "Yibit"],
			bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
		},
		jedec: {
			bits: ["bit", "Kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
			bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
		}
	},
	fullform = {
		iec: ["", "kibi", "mebi", "gibi", "tebi", "pebi", "exbi", "zebi", "yobi"],
		jedec: ["", "kilo", "mega", "giga", "tera", "peta", "exa", "zetta", "yotta"]
	},
	roundingFuncs = {
		floor: Math.floor,
		ceil: Math.ceil
	};

/**
 * filesize
 *
 * @method filesize
 * @param  {Mixed}   arg        String, Int or Float to transform
 * @param  {Object}  descriptor [Optional] Flags
 * @return {String}             Readable file size String
 */
function filesize (arg, descriptor = {}) {
	let result = [],
		val = 0,
		e, base, bits, ceil, full, fullforms, locale, localeOptions, neg, num, output, pad, round, u, unix, separator, spacer, standard, symbols, roundingFunc, precision;

	if (isNaN(arg)) {
		throw new TypeError("Invalid number");
	}

	bits = descriptor.bits === true;
	unix = descriptor.unix === true;
	pad = descriptor.pad === true;
	base = descriptor.base || 10;
	round = descriptor.round !== void 0 ? descriptor.round : unix ? 1 : 2;
	locale = descriptor.locale !== void 0 ? descriptor.locale : "";
	localeOptions = descriptor.localeOptions || {};
	separator = descriptor.separator !== void 0 ? descriptor.separator : "";
	spacer = descriptor.spacer !== void 0 ? descriptor.spacer : unix ? "" : " ";
	symbols = descriptor.symbols || {};
	standard = base === 2 ? descriptor.standard || "iec" : "jedec";
	output = descriptor.output || "string";
	full = descriptor.fullform === true;
	fullforms = descriptor.fullforms instanceof Array ? descriptor.fullforms : [];
	e = descriptor.exponent !== void 0 ? descriptor.exponent : -1;
	roundingFunc = roundingFuncs[descriptor.roundingMethod] || Math.round;
	num = Number(arg);
	neg = num < 0;
	ceil = base > 2 ? 1000 : 1024;
	precision = isNaN(descriptor.precision) === false ? parseInt(descriptor.precision, 10) : 0;

	// Flipping a negative number to determine the size
	if (neg) {
		num = -num;
	}

	// Determining the exponent
	if (e === -1 || isNaN(e)) {
		e = Math.floor(Math.log(num) / Math.log(ceil));

		if (e < 0) {
			e = 0;
		}
	}

	// Exceeding supported length, time to reduce & multiply
	if (e > 8) {
		if (precision > 0) {
			precision += 8 - e;
		}

		e = 8;
	}

	if (output === "exponent") {
		return e;
	}

	// Zero is now a special case because bytes divide by 1
	if (num === 0) {
		result[0] = 0;
		u = result[1] = unix ? "" : symbol[standard][bits ? "bits" : "bytes"][e];
	} else {
		val = num / (base === 2 ? Math.pow(2, e * 10) : Math.pow(1000, e));

		if (bits) {
			val = val * 8;

			if (val >= ceil && e < 8) {
				val = val / ceil;
				e++;
			}
		}

		const p = Math.pow(10, e > 0 ? round : 0);
		result[0] = roundingFunc(val * p) / p;

		if (result[0] === ceil && e < 8 && descriptor.exponent === void 0) {
			result[0] = 1;
			e++;
		}

		u = result[1] = base === 10 && e === 1 ? bits ? "kbit" : "kB" : symbol[standard][bits ? "bits" : "bytes"][e];

		if (unix) {
			result[1] = result[1].charAt(0);

			if (b.test(result[1])) {
				result[0] = Math.floor(result[0]);
				result[1] = "";
			}
		}
	}

	// Decorating a 'diff'
	if (neg) {
		result[0] = -result[0];
	}

	// Setting optional precision
	if (precision > 0) {
		result[0] = result[0].toPrecision(precision);
	}

	// Applying custom symbol
	result[1] = symbols[result[1]] || result[1];

	if (locale === true) {
		result[0] = result[0].toLocaleString();
	} else if (locale.length > 0) {
		result[0] = result[0].toLocaleString(locale, localeOptions);
	} else if (separator.length > 0) {
		result[0] = result[0].toString().replace(".", separator);
	}

	if (pad && Number.isInteger(result[0]) === false && round > 0) {
		const x = separator || ".",
			tmp = result[0].toString().split(x),
			s = tmp[1] || "",
			l = s.length,
			n = round - l;

		result[0] = `${tmp[0]}${x}${s.padEnd(l + n, "0")}`;
	}

	if (full) {
		result[1] = fullforms[e] ? fullforms[e] : fullform[standard][e] + (bits ? "bit" : "byte") + (result[0] === 1 ? "" : "s");
	}

	// Returning Array, Object, or String (default)
	return output === "array" ? result : output === "object" ? {value: result[0], symbol: result[1], exponent: e, unit: u} : result.join(spacer);
}

// Partial application for functional programming
filesize.partial = opt => arg => filesize(arg, opt);

export { filesize as default };
