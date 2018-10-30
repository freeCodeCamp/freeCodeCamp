/*
 * lib/jsprim.js: utilities for primitive JavaScript types
 */

var mod_assert = require('assert-plus');
var mod_util = require('util');

var mod_extsprintf = require('extsprintf');
var mod_verror = require('verror');
var mod_jsonschema = require('json-schema');

/*
 * Public interface
 */
exports.deepCopy = deepCopy;
exports.deepEqual = deepEqual;
exports.isEmpty = isEmpty;
exports.hasKey = hasKey;
exports.forEachKey = forEachKey;
exports.pluck = pluck;
exports.flattenObject = flattenObject;
exports.flattenIter = flattenIter;
exports.validateJsonObject = validateJsonObjectJS;
exports.validateJsonObjectJS = validateJsonObjectJS;
exports.randElt = randElt;
exports.extraProperties = extraProperties;
exports.mergeObjects = mergeObjects;

exports.startsWith = startsWith;
exports.endsWith = endsWith;

exports.parseInteger = parseInteger;

exports.iso8601 = iso8601;
exports.rfc1123 = rfc1123;
exports.parseDateTime = parseDateTime;

exports.hrtimediff = hrtimeDiff;
exports.hrtimeDiff = hrtimeDiff;
exports.hrtimeAccum = hrtimeAccum;
exports.hrtimeAdd = hrtimeAdd;
exports.hrtimeNanosec = hrtimeNanosec;
exports.hrtimeMicrosec = hrtimeMicrosec;
exports.hrtimeMillisec = hrtimeMillisec;


/*
 * Deep copy an acyclic *basic* Javascript object.  This only handles basic
 * scalars (strings, numbers, booleans) and arbitrarily deep arrays and objects
 * containing these.  This does *not* handle instances of other classes.
 */
function deepCopy(obj)
{
	var ret, key;
	var marker = '__deepCopy';

	if (obj && obj[marker])
		throw (new Error('attempted deep copy of cyclic object'));

	if (obj && obj.constructor == Object) {
		ret = {};
		obj[marker] = true;

		for (key in obj) {
			if (key == marker)
				continue;

			ret[key] = deepCopy(obj[key]);
		}

		delete (obj[marker]);
		return (ret);
	}

	if (obj && obj.constructor == Array) {
		ret = [];
		obj[marker] = true;

		for (key = 0; key < obj.length; key++)
			ret.push(deepCopy(obj[key]));

		delete (obj[marker]);
		return (ret);
	}

	/*
	 * It must be a primitive type -- just return it.
	 */
	return (obj);
}

function deepEqual(obj1, obj2)
{
	if (typeof (obj1) != typeof (obj2))
		return (false);

	if (obj1 === null || obj2 === null || typeof (obj1) != 'object')
		return (obj1 === obj2);

	if (obj1.constructor != obj2.constructor)
		return (false);

	var k;
	for (k in obj1) {
		if (!obj2.hasOwnProperty(k))
			return (false);

		if (!deepEqual(obj1[k], obj2[k]))
			return (false);
	}

	for (k in obj2) {
		if (!obj1.hasOwnProperty(k))
			return (false);
	}

	return (true);
}

function isEmpty(obj)
{
	var key;
	for (key in obj)
		return (false);
	return (true);
}

function hasKey(obj, key)
{
	mod_assert.equal(typeof (key), 'string');
	return (Object.prototype.hasOwnProperty.call(obj, key));
}

function forEachKey(obj, callback)
{
	for (var key in obj) {
		if (hasKey(obj, key)) {
			callback(key, obj[key]);
		}
	}
}

function pluck(obj, key)
{
	mod_assert.equal(typeof (key), 'string');
	return (pluckv(obj, key));
}

function pluckv(obj, key)
{
	if (obj === null || typeof (obj) !== 'object')
		return (undefined);

	if (obj.hasOwnProperty(key))
		return (obj[key]);

	var i = key.indexOf('.');
	if (i == -1)
		return (undefined);

	var key1 = key.substr(0, i);
	if (!obj.hasOwnProperty(key1))
		return (undefined);

	return (pluckv(obj[key1], key.substr(i + 1)));
}

/*
 * Invoke callback(row) for each entry in the array that would be returned by
 * flattenObject(data, depth).  This is just like flattenObject(data,
 * depth).forEach(callback), except that the intermediate array is never
 * created.
 */
function flattenIter(data, depth, callback)
{
	doFlattenIter(data, depth, [], callback);
}

function doFlattenIter(data, depth, accum, callback)
{
	var each;
	var key;

	if (depth === 0) {
		each = accum.slice(0);
		each.push(data);
		callback(each);
		return;
	}

	mod_assert.ok(data !== null);
	mod_assert.equal(typeof (data), 'object');
	mod_assert.equal(typeof (depth), 'number');
	mod_assert.ok(depth >= 0);

	for (key in data) {
		each = accum.slice(0);
		each.push(key);
		doFlattenIter(data[key], depth - 1, each, callback);
	}
}

function flattenObject(data, depth)
{
	if (depth === 0)
		return ([ data ]);

	mod_assert.ok(data !== null);
	mod_assert.equal(typeof (data), 'object');
	mod_assert.equal(typeof (depth), 'number');
	mod_assert.ok(depth >= 0);

	var rv = [];
	var key;

	for (key in data) {
		flattenObject(data[key], depth - 1).forEach(function (p) {
			rv.push([ key ].concat(p));
		});
	}

	return (rv);
}

function startsWith(str, prefix)
{
	return (str.substr(0, prefix.length) == prefix);
}

function endsWith(str, suffix)
{
	return (str.substr(
	    str.length - suffix.length, suffix.length) == suffix);
}

function iso8601(d)
{
	if (typeof (d) == 'number')
		d = new Date(d);
	mod_assert.ok(d.constructor === Date);
	return (mod_extsprintf.sprintf('%4d-%02d-%02dT%02d:%02d:%02d.%03dZ',
	    d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate(),
	    d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(),
	    d.getUTCMilliseconds()));
}

var RFC1123_MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var RFC1123_DAYS = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function rfc1123(date) {
	return (mod_extsprintf.sprintf('%s, %02d %s %04d %02d:%02d:%02d GMT',
	    RFC1123_DAYS[date.getUTCDay()], date.getUTCDate(),
	    RFC1123_MONTHS[date.getUTCMonth()], date.getUTCFullYear(),
	    date.getUTCHours(), date.getUTCMinutes(),
	    date.getUTCSeconds()));
}

/*
 * Parses a date expressed as a string, as either a number of milliseconds since
 * the epoch or any string format that Date accepts, giving preference to the
 * former where these two sets overlap (e.g., small numbers).
 */
function parseDateTime(str)
{
	/*
	 * This is irritatingly implicit, but significantly more concise than
	 * alternatives.  The "+str" will convert a string containing only a
	 * number directly to a Number, or NaN for other strings.  Thus, if the
	 * conversion succeeds, we use it (this is the milliseconds-since-epoch
	 * case).  Otherwise, we pass the string directly to the Date
	 * constructor to parse.
	 */
	var numeric = +str;
	if (!isNaN(numeric)) {
		return (new Date(numeric));
	} else {
		return (new Date(str));
	}
}


/*
 * Number.*_SAFE_INTEGER isn't present before node v0.12, so we hardcode
 * the ES6 definitions here, while allowing for them to someday be higher.
 */
var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
var MIN_SAFE_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;


/*
 * Default options for parseInteger().
 */
var PI_DEFAULTS = {
	base: 10,
	allowSign: true,
	allowPrefix: false,
	allowTrailing: false,
	allowImprecise: false,
	trimWhitespace: false,
	leadingZeroIsOctal: false
};

var CP_0 = 0x30;
var CP_9 = 0x39;

var CP_A = 0x41;
var CP_B = 0x42;
var CP_O = 0x4f;
var CP_T = 0x54;
var CP_X = 0x58;
var CP_Z = 0x5a;

var CP_a = 0x61;
var CP_b = 0x62;
var CP_o = 0x6f;
var CP_t = 0x74;
var CP_x = 0x78;
var CP_z = 0x7a;

var PI_CONV_DEC = 0x30;
var PI_CONV_UC = 0x37;
var PI_CONV_LC = 0x57;


/*
 * A stricter version of parseInt() that provides options for changing what
 * is an acceptable string (for example, disallowing trailing characters).
 */
function parseInteger(str, uopts)
{
	mod_assert.string(str, 'str');
	mod_assert.optionalObject(uopts, 'options');

	var baseOverride = false;
	var options = PI_DEFAULTS;

	if (uopts) {
		baseOverride = hasKey(uopts, 'base');
		options = mergeObjects(options, uopts);
		mod_assert.number(options.base, 'options.base');
		mod_assert.ok(options.base >= 2, 'options.base >= 2');
		mod_assert.ok(options.base <= 36, 'options.base <= 36');
		mod_assert.bool(options.allowSign, 'options.allowSign');
		mod_assert.bool(options.allowPrefix, 'options.allowPrefix');
		mod_assert.bool(options.allowTrailing,
		    'options.allowTrailing');
		mod_assert.bool(options.allowImprecise,
		    'options.allowImprecise');
		mod_assert.bool(options.trimWhitespace,
		    'options.trimWhitespace');
		mod_assert.bool(options.leadingZeroIsOctal,
		    'options.leadingZeroIsOctal');

		if (options.leadingZeroIsOctal) {
			mod_assert.ok(!baseOverride,
			    '"base" and "leadingZeroIsOctal" are ' +
			    'mutually exclusive');
		}
	}

	var c;
	var pbase = -1;
	var base = options.base;
	var start;
	var mult = 1;
	var value = 0;
	var idx = 0;
	var len = str.length;

	/* Trim any whitespace on the left side. */
	if (options.trimWhitespace) {
		while (idx < len && isSpace(str.charCodeAt(idx))) {
			++idx;
		}
	}

	/* Check the number for a leading sign. */
	if (options.allowSign) {
		if (str[idx] === '-') {
			idx += 1;
			mult = -1;
		} else if (str[idx] === '+') {
			idx += 1;
		}
	}

	/* Parse the base-indicating prefix if there is one. */
	if (str[idx] === '0') {
		if (options.allowPrefix) {
			pbase = prefixToBase(str.charCodeAt(idx + 1));
			if (pbase !== -1 && (!baseOverride || pbase === base)) {
				base = pbase;
				idx += 2;
			}
		}

		if (pbase === -1 && options.leadingZeroIsOctal) {
			base = 8;
		}
	}

	/* Parse the actual digits. */
	for (start = idx; idx < len; ++idx) {
		c = translateDigit(str.charCodeAt(idx));
		if (c !== -1 && c < base) {
			value *= base;
			value += c;
		} else {
			break;
		}
	}

	/* If we didn't parse any digits, we have an invalid number. */
	if (start === idx) {
		return (new Error('invalid number: ' + JSON.stringify(str)));
	}

	/* Trim any whitespace on the right side. */
	if (options.trimWhitespace) {
		while (idx < len && isSpace(str.charCodeAt(idx))) {
			++idx;
		}
	}

	/* Check for trailing characters. */
	if (idx < len && !options.allowTrailing) {
		return (new Error('trailing characters after number: ' +
		    JSON.stringify(str.slice(idx))));
	}

	/* If our value is 0, we return now, to avoid returning -0. */
	if (value === 0) {
		return (0);
	}

	/* Calculate our final value. */
	var result = value * mult;

	/*
	 * If the string represents a value that cannot be precisely represented
	 * by JavaScript, then we want to check that:
	 *
	 * - We never increased the value past MAX_SAFE_INTEGER
	 * - We don't make the result negative and below MIN_SAFE_INTEGER
	 *
	 * Because we only ever increment the value during parsing, there's no
	 * chance of moving past MAX_SAFE_INTEGER and then dropping below it
	 * again, losing precision in the process. This means that we only need
	 * to do our checks here, at the end.
	 */
	if (!options.allowImprecise &&
	    (value > MAX_SAFE_INTEGER || result < MIN_SAFE_INTEGER)) {
		return (new Error('number is outside of the supported range: ' +
		    JSON.stringify(str.slice(start, idx))));
	}

	return (result);
}


/*
 * Interpret a character code as a base-36 digit.
 */
function translateDigit(d)
{
	if (d >= CP_0 && d <= CP_9) {
		/* '0' to '9' -> 0 to 9 */
		return (d - PI_CONV_DEC);
	} else if (d >= CP_A && d <= CP_Z) {
		/* 'A' - 'Z' -> 10 to 35 */
		return (d - PI_CONV_UC);
	} else if (d >= CP_a && d <= CP_z) {
		/* 'a' - 'z' -> 10 to 35 */
		return (d - PI_CONV_LC);
	} else {
		/* Invalid character code */
		return (-1);
	}
}


/*
 * Test if a value matches the ECMAScript definition of trimmable whitespace.
 */
function isSpace(c)
{
	return (c === 0x20) ||
	    (c >= 0x0009 && c <= 0x000d) ||
	    (c === 0x00a0) ||
	    (c === 0x1680) ||
	    (c === 0x180e) ||
	    (c >= 0x2000 && c <= 0x200a) ||
	    (c === 0x2028) ||
	    (c === 0x2029) ||
	    (c === 0x202f) ||
	    (c === 0x205f) ||
	    (c === 0x3000) ||
	    (c === 0xfeff);
}


/*
 * Determine which base a character indicates (e.g., 'x' indicates hex).
 */
function prefixToBase(c)
{
	if (c === CP_b || c === CP_B) {
		/* 0b/0B (binary) */
		return (2);
	} else if (c === CP_o || c === CP_O) {
		/* 0o/0O (octal) */
		return (8);
	} else if (c === CP_t || c === CP_T) {
		/* 0t/0T (decimal) */
		return (10);
	} else if (c === CP_x || c === CP_X) {
		/* 0x/0X (hexadecimal) */
		return (16);
	} else {
		/* Not a meaningful character */
		return (-1);
	}
}


function validateJsonObjectJS(schema, input)
{
	var report = mod_jsonschema.validate(input, schema);

	if (report.errors.length === 0)
		return (null);

	/* Currently, we only do anything useful with the first error. */
	var error = report.errors[0];

	/* The failed property is given by a URI with an irrelevant prefix. */
	var propname = error['property'];
	var reason = error['message'].toLowerCase();
	var i, j;

	/*
	 * There's at least one case where the property error message is
	 * confusing at best.  We work around this here.
	 */
	if ((i = reason.indexOf('the property ')) != -1 &&
	    (j = reason.indexOf(' is not defined in the schema and the ' +
	    'schema does not allow additional properties')) != -1) {
		i += 'the property '.length;
		if (propname === '')
			propname = reason.substr(i, j - i);
		else
			propname = propname + '.' + reason.substr(i, j - i);

		reason = 'unsupported property';
	}

	var rv = new mod_verror.VError('property "%s": %s', propname, reason);
	rv.jsv_details = error;
	return (rv);
}

function randElt(arr)
{
	mod_assert.ok(Array.isArray(arr) && arr.length > 0,
	    'randElt argument must be a non-empty array');

	return (arr[Math.floor(Math.random() * arr.length)]);
}

function assertHrtime(a)
{
	mod_assert.ok(a[0] >= 0 && a[1] >= 0,
	    'negative numbers not allowed in hrtimes');
	mod_assert.ok(a[1] < 1e9, 'nanoseconds column overflow');
}

/*
 * Compute the time elapsed between hrtime readings A and B, where A is later
 * than B.  hrtime readings come from Node's process.hrtime().  There is no
 * defined way to represent negative deltas, so it's illegal to diff B from A
 * where the time denoted by B is later than the time denoted by A.  If this
 * becomes valuable, we can define a representation and extend the
 * implementation to support it.
 */
function hrtimeDiff(a, b)
{
	assertHrtime(a);
	assertHrtime(b);
	mod_assert.ok(a[0] > b[0] || (a[0] == b[0] && a[1] >= b[1]),
	    'negative differences not allowed');

	var rv = [ a[0] - b[0], 0 ];

	if (a[1] >= b[1]) {
		rv[1] = a[1] - b[1];
	} else {
		rv[0]--;
		rv[1] = 1e9 - (b[1] - a[1]);
	}

	return (rv);
}

/*
 * Convert a hrtime reading from the array format returned by Node's
 * process.hrtime() into a scalar number of nanoseconds.
 */
function hrtimeNanosec(a)
{
	assertHrtime(a);

	return (Math.floor(a[0] * 1e9 + a[1]));
}

/*
 * Convert a hrtime reading from the array format returned by Node's
 * process.hrtime() into a scalar number of microseconds.
 */
function hrtimeMicrosec(a)
{
	assertHrtime(a);

	return (Math.floor(a[0] * 1e6 + a[1] / 1e3));
}

/*
 * Convert a hrtime reading from the array format returned by Node's
 * process.hrtime() into a scalar number of milliseconds.
 */
function hrtimeMillisec(a)
{
	assertHrtime(a);

	return (Math.floor(a[0] * 1e3 + a[1] / 1e6));
}

/*
 * Add two hrtime readings A and B, overwriting A with the result of the
 * addition.  This function is useful for accumulating several hrtime intervals
 * into a counter.  Returns A.
 */
function hrtimeAccum(a, b)
{
	assertHrtime(a);
	assertHrtime(b);

	/*
	 * Accumulate the nanosecond component.
	 */
	a[1] += b[1];
	if (a[1] >= 1e9) {
		/*
		 * The nanosecond component overflowed, so carry to the seconds
		 * field.
		 */
		a[0]++;
		a[1] -= 1e9;
	}

	/*
	 * Accumulate the seconds component.
	 */
	a[0] += b[0];

	return (a);
}

/*
 * Add two hrtime readings A and B, returning the result as a new hrtime array.
 * Does not modify either input argument.
 */
function hrtimeAdd(a, b)
{
	assertHrtime(a);

	var rv = [ a[0], a[1] ];

	return (hrtimeAccum(rv, b));
}


/*
 * Check an object for unexpected properties.  Accepts the object to check, and
 * an array of allowed property names (strings).  Returns an array of key names
 * that were found on the object, but did not appear in the list of allowed
 * properties.  If no properties were found, the returned array will be of
 * zero length.
 */
function extraProperties(obj, allowed)
{
	mod_assert.ok(typeof (obj) === 'object' && obj !== null,
	    'obj argument must be a non-null object');
	mod_assert.ok(Array.isArray(allowed),
	    'allowed argument must be an array of strings');
	for (var i = 0; i < allowed.length; i++) {
		mod_assert.ok(typeof (allowed[i]) === 'string',
		    'allowed argument must be an array of strings');
	}

	return (Object.keys(obj).filter(function (key) {
		return (allowed.indexOf(key) === -1);
	}));
}

/*
 * Given three sets of properties "provided" (may be undefined), "overrides"
 * (required), and "defaults" (may be undefined), construct an object containing
 * the union of these sets with "overrides" overriding "provided", and
 * "provided" overriding "defaults".  None of the input objects are modified.
 */
function mergeObjects(provided, overrides, defaults)
{
	var rv, k;

	rv = {};
	if (defaults) {
		for (k in defaults)
			rv[k] = defaults[k];
	}

	if (provided) {
		for (k in provided)
			rv[k] = provided[k];
	}

	if (overrides) {
		for (k in overrides)
			rv[k] = overrides[k];
	}

	return (rv);
}
