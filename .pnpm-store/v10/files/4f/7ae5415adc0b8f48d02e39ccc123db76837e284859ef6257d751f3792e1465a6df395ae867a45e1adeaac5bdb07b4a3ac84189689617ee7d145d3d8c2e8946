import { plugins, createDOMElementFilter, format as format$1 } from '@vitest/pretty-format';

const ansiColors = {
    bold: ['1', '22'],
    dim: ['2', '22'],
    italic: ['3', '23'],
    underline: ['4', '24'],
    // 5 & 6 are blinking
    inverse: ['7', '27'],
    hidden: ['8', '28'],
    strike: ['9', '29'],
    // 10-20 are fonts
    // 21-29 are resets for 1-9
    black: ['30', '39'],
    red: ['31', '39'],
    green: ['32', '39'],
    yellow: ['33', '39'],
    blue: ['34', '39'],
    magenta: ['35', '39'],
    cyan: ['36', '39'],
    white: ['37', '39'],
    brightblack: ['30;1', '39'],
    brightred: ['31;1', '39'],
    brightgreen: ['32;1', '39'],
    brightyellow: ['33;1', '39'],
    brightblue: ['34;1', '39'],
    brightmagenta: ['35;1', '39'],
    brightcyan: ['36;1', '39'],
    brightwhite: ['37;1', '39'],
    grey: ['90', '39'],
};
const styles = {
    special: 'cyan',
    number: 'yellow',
    bigint: 'yellow',
    boolean: 'yellow',
    undefined: 'grey',
    null: 'bold',
    string: 'green',
    symbol: 'green',
    date: 'magenta',
    regexp: 'red',
};
const truncator = '…';
function colorise(value, styleType) {
    const color = ansiColors[styles[styleType]] || ansiColors[styleType] || '';
    if (!color) {
        return String(value);
    }
    return `\u001b[${color[0]}m${String(value)}\u001b[${color[1]}m`;
}
function normaliseOptions({ showHidden = false, depth = 2, colors = false, customInspect = true, showProxy = false, maxArrayLength = Infinity, breakLength = Infinity, seen = [], 
// eslint-disable-next-line no-shadow
truncate = Infinity, stylize = String, } = {}, inspect) {
    const options = {
        showHidden: Boolean(showHidden),
        depth: Number(depth),
        colors: Boolean(colors),
        customInspect: Boolean(customInspect),
        showProxy: Boolean(showProxy),
        maxArrayLength: Number(maxArrayLength),
        breakLength: Number(breakLength),
        truncate: Number(truncate),
        seen,
        inspect,
        stylize,
    };
    if (options.colors) {
        options.stylize = colorise;
    }
    return options;
}
function isHighSurrogate(char) {
    return char >= '\ud800' && char <= '\udbff';
}
function truncate(string, length, tail = truncator) {
    string = String(string);
    const tailLength = tail.length;
    const stringLength = string.length;
    if (tailLength > length && stringLength > tailLength) {
        return tail;
    }
    if (stringLength > length && stringLength > tailLength) {
        let end = length - tailLength;
        if (end > 0 && isHighSurrogate(string[end - 1])) {
            end = end - 1;
        }
        return `${string.slice(0, end)}${tail}`;
    }
    return string;
}
// eslint-disable-next-line complexity
function inspectList(list, options, inspectItem, separator = ', ') {
    inspectItem = inspectItem || options.inspect;
    const size = list.length;
    if (size === 0)
        return '';
    const originalLength = options.truncate;
    let output = '';
    let peek = '';
    let truncated = '';
    for (let i = 0; i < size; i += 1) {
        const last = i + 1 === list.length;
        const secondToLast = i + 2 === list.length;
        truncated = `${truncator}(${list.length - i})`;
        const value = list[i];
        // If there is more than one remaining we need to account for a separator of `, `
        options.truncate = originalLength - output.length - (last ? 0 : separator.length);
        const string = peek || inspectItem(value, options) + (last ? '' : separator);
        const nextLength = output.length + string.length;
        const truncatedLength = nextLength + truncated.length;
        // If this is the last element, and adding it would
        // take us over length, but adding the truncator wouldn't - then break now
        if (last && nextLength > originalLength && output.length + truncated.length <= originalLength) {
            break;
        }
        // If this isn't the last or second to last element to scan,
        // but the string is already over length then break here
        if (!last && !secondToLast && truncatedLength > originalLength) {
            break;
        }
        // Peek at the next string to determine if we should
        // break early before adding this item to the output
        peek = last ? '' : inspectItem(list[i + 1], options) + (secondToLast ? '' : separator);
        // If we have one element left, but this element and
        // the next takes over length, the break early
        if (!last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength) {
            break;
        }
        output += string;
        // If the next element takes us to length -
        // but there are more after that, then we should truncate now
        if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
            truncated = `${truncator}(${list.length - i - 1})`;
            break;
        }
        truncated = '';
    }
    return `${output}${truncated}`;
}
function quoteComplexKey(key) {
    if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) {
        return key;
    }
    return JSON.stringify(key)
        .replace(/'/g, "\\'")
        .replace(/\\"/g, '"')
        .replace(/(^"|"$)/g, "'");
}
function inspectProperty([key, value], options) {
    options.truncate -= 2;
    if (typeof key === 'string') {
        key = quoteComplexKey(key);
    }
    else if (typeof key !== 'number') {
        key = `[${options.inspect(key, options)}]`;
    }
    options.truncate -= key.length;
    value = options.inspect(value, options);
    return `${key}: ${value}`;
}

function inspectArray(array, options) {
    // Object.keys will always output the Array indices first, so we can slice by
    // `array.length` to get non-index properties
    const nonIndexProperties = Object.keys(array).slice(array.length);
    if (!array.length && !nonIndexProperties.length)
        return '[]';
    options.truncate -= 4;
    const listContents = inspectList(array, options);
    options.truncate -= listContents.length;
    let propertyContents = '';
    if (nonIndexProperties.length) {
        propertyContents = inspectList(nonIndexProperties.map(key => [key, array[key]]), options, inspectProperty);
    }
    return `[ ${listContents}${propertyContents ? `, ${propertyContents}` : ''} ]`;
}

const getArrayName = (array) => {
    // We need to special case Node.js' Buffers, which report to be Uint8Array
    // @ts-ignore
    if (typeof Buffer === 'function' && array instanceof Buffer) {
        return 'Buffer';
    }
    if (array[Symbol.toStringTag]) {
        return array[Symbol.toStringTag];
    }
    return array.constructor.name;
};
function inspectTypedArray(array, options) {
    const name = getArrayName(array);
    options.truncate -= name.length + 4;
    // Object.keys will always output the Array indices first, so we can slice by
    // `array.length` to get non-index properties
    const nonIndexProperties = Object.keys(array).slice(array.length);
    if (!array.length && !nonIndexProperties.length)
        return `${name}[]`;
    // As we know TypedArrays only contain Unsigned Integers, we can skip inspecting each one and simply
    // stylise the toString() value of them
    let output = '';
    for (let i = 0; i < array.length; i++) {
        const string = `${options.stylize(truncate(array[i], options.truncate), 'number')}${i === array.length - 1 ? '' : ', '}`;
        options.truncate -= string.length;
        if (array[i] !== array.length && options.truncate <= 3) {
            output += `${truncator}(${array.length - array[i] + 1})`;
            break;
        }
        output += string;
    }
    let propertyContents = '';
    if (nonIndexProperties.length) {
        propertyContents = inspectList(nonIndexProperties.map(key => [key, array[key]]), options, inspectProperty);
    }
    return `${name}[ ${output}${propertyContents ? `, ${propertyContents}` : ''} ]`;
}

function inspectDate(dateObject, options) {
    const stringRepresentation = dateObject.toJSON();
    if (stringRepresentation === null) {
        return 'Invalid Date';
    }
    const split = stringRepresentation.split('T');
    const date = split[0];
    // If we need to - truncate the time portion, but never the date
    return options.stylize(`${date}T${truncate(split[1], options.truncate - date.length - 1)}`, 'date');
}

function inspectFunction(func, options) {
    const functionType = func[Symbol.toStringTag] || 'Function';
    const name = func.name;
    if (!name) {
        return options.stylize(`[${functionType}]`, 'special');
    }
    return options.stylize(`[${functionType} ${truncate(name, options.truncate - 11)}]`, 'special');
}

function inspectMapEntry([key, value], options) {
    options.truncate -= 4;
    key = options.inspect(key, options);
    options.truncate -= key.length;
    value = options.inspect(value, options);
    return `${key} => ${value}`;
}
// IE11 doesn't support `map.entries()`
function mapToEntries(map) {
    const entries = [];
    map.forEach((value, key) => {
        entries.push([key, value]);
    });
    return entries;
}
function inspectMap(map, options) {
    if (map.size === 0)
        return 'Map{}';
    options.truncate -= 7;
    return `Map{ ${inspectList(mapToEntries(map), options, inspectMapEntry)} }`;
}

const isNaN = Number.isNaN || (i => i !== i); // eslint-disable-line no-self-compare
function inspectNumber(number, options) {
    if (isNaN(number)) {
        return options.stylize('NaN', 'number');
    }
    if (number === Infinity) {
        return options.stylize('Infinity', 'number');
    }
    if (number === -Infinity) {
        return options.stylize('-Infinity', 'number');
    }
    if (number === 0) {
        return options.stylize(1 / number === Infinity ? '+0' : '-0', 'number');
    }
    return options.stylize(truncate(String(number), options.truncate), 'number');
}

function inspectBigInt(number, options) {
    let nums = truncate(number.toString(), options.truncate - 1);
    if (nums !== truncator)
        nums += 'n';
    return options.stylize(nums, 'bigint');
}

function inspectRegExp(value, options) {
    const flags = value.toString().split('/')[2];
    const sourceLength = options.truncate - (2 + flags.length);
    const source = value.source;
    return options.stylize(`/${truncate(source, sourceLength)}/${flags}`, 'regexp');
}

// IE11 doesn't support `Array.from(set)`
function arrayFromSet(set) {
    const values = [];
    set.forEach(value => {
        values.push(value);
    });
    return values;
}
function inspectSet(set, options) {
    if (set.size === 0)
        return 'Set{}';
    options.truncate -= 7;
    return `Set{ ${inspectList(arrayFromSet(set), options)} }`;
}

const stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5" +
    '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]', 'g');
const escapeCharacters = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    "'": "\\'",
    '\\': '\\\\',
};
const hex = 16;
function escape(char) {
    return (escapeCharacters[char] ||
        `\\u${`0000${char.charCodeAt(0).toString(hex)}`.slice(-4)}`);
}
function inspectString(string, options) {
    if (stringEscapeChars.test(string)) {
        string = string.replace(stringEscapeChars, escape);
    }
    return options.stylize(`'${truncate(string, options.truncate - 2)}'`, 'string');
}

function inspectSymbol(value) {
    if ('description' in Symbol.prototype) {
        return value.description ? `Symbol(${value.description})` : 'Symbol()';
    }
    return value.toString();
}

const getPromiseValue = () => 'Promise{…}';

function inspectObject$1(object, options) {
    const properties = Object.getOwnPropertyNames(object);
    const symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : [];
    if (properties.length === 0 && symbols.length === 0) {
        return '{}';
    }
    options.truncate -= 4;
    options.seen = options.seen || [];
    if (options.seen.includes(object)) {
        return '[Circular]';
    }
    options.seen.push(object);
    const propertyContents = inspectList(properties.map(key => [key, object[key]]), options, inspectProperty);
    const symbolContents = inspectList(symbols.map(key => [key, object[key]]), options, inspectProperty);
    options.seen.pop();
    let sep = '';
    if (propertyContents && symbolContents) {
        sep = ', ';
    }
    return `{ ${propertyContents}${sep}${symbolContents} }`;
}

const toStringTag = typeof Symbol !== 'undefined' && Symbol.toStringTag ? Symbol.toStringTag : false;
function inspectClass(value, options) {
    let name = '';
    if (toStringTag && toStringTag in value) {
        name = value[toStringTag];
    }
    name = name || value.constructor.name;
    // Babel transforms anonymous classes to the name `_class`
    if (!name || name === '_class') {
        name = '<Anonymous Class>';
    }
    options.truncate -= name.length;
    return `${name}${inspectObject$1(value, options)}`;
}

function inspectArguments(args, options) {
    if (args.length === 0)
        return 'Arguments[]';
    options.truncate -= 13;
    return `Arguments[ ${inspectList(args, options)} ]`;
}

const errorKeys = [
    'stack',
    'line',
    'column',
    'name',
    'message',
    'fileName',
    'lineNumber',
    'columnNumber',
    'number',
    'description',
    'cause',
];
function inspectObject(error, options) {
    const properties = Object.getOwnPropertyNames(error).filter(key => errorKeys.indexOf(key) === -1);
    const name = error.name;
    options.truncate -= name.length;
    let message = '';
    if (typeof error.message === 'string') {
        message = truncate(error.message, options.truncate);
    }
    else {
        properties.unshift('message');
    }
    message = message ? `: ${message}` : '';
    options.truncate -= message.length + 5;
    options.seen = options.seen || [];
    if (options.seen.includes(error)) {
        return '[Circular]';
    }
    options.seen.push(error);
    const propertyContents = inspectList(properties.map(key => [key, error[key]]), options, inspectProperty);
    return `${name}${message}${propertyContents ? ` { ${propertyContents} }` : ''}`;
}

function inspectAttribute([key, value], options) {
    options.truncate -= 3;
    if (!value) {
        return `${options.stylize(String(key), 'yellow')}`;
    }
    return `${options.stylize(String(key), 'yellow')}=${options.stylize(`"${value}"`, 'string')}`;
}
function inspectNodeCollection(collection, options) {
    return inspectList(collection, options, inspectNode, '\n');
}
function inspectNode(node, options) {
    switch (node.nodeType) {
        case 1:
            return inspectHTML(node, options);
        case 3:
            return options.inspect(node.data, options);
        default:
            return options.inspect(node, options);
    }
}
// @ts-ignore (Deno doesn't have Element)
function inspectHTML(element, options) {
    const properties = element.getAttributeNames();
    const name = element.tagName.toLowerCase();
    const head = options.stylize(`<${name}`, 'special');
    const headClose = options.stylize(`>`, 'special');
    const tail = options.stylize(`</${name}>`, 'special');
    options.truncate -= name.length * 2 + 5;
    let propertyContents = '';
    if (properties.length > 0) {
        propertyContents += ' ';
        propertyContents += inspectList(properties.map((key) => [key, element.getAttribute(key)]), options, inspectAttribute, ' ');
    }
    options.truncate -= propertyContents.length;
    const truncate = options.truncate;
    let children = inspectNodeCollection(element.children, options);
    if (children && children.length > truncate) {
        children = `${truncator}(${element.children.length})`;
    }
    return `${head}${propertyContents}${headClose}${children}${tail}`;
}

/* !
 * loupe
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
const symbolsSupported = typeof Symbol === 'function' && typeof Symbol.for === 'function';
const chaiInspect = symbolsSupported ? Symbol.for('chai/inspect') : '@@chai/inspect';
const nodeInspect = Symbol.for('nodejs.util.inspect.custom');
const constructorMap = new WeakMap();
const stringTagMap = {};
const baseTypesMap = {
    undefined: (value, options) => options.stylize('undefined', 'undefined'),
    null: (value, options) => options.stylize('null', 'null'),
    boolean: (value, options) => options.stylize(String(value), 'boolean'),
    Boolean: (value, options) => options.stylize(String(value), 'boolean'),
    number: inspectNumber,
    Number: inspectNumber,
    bigint: inspectBigInt,
    BigInt: inspectBigInt,
    string: inspectString,
    String: inspectString,
    function: inspectFunction,
    Function: inspectFunction,
    symbol: inspectSymbol,
    // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
    Symbol: inspectSymbol,
    Array: inspectArray,
    Date: inspectDate,
    Map: inspectMap,
    Set: inspectSet,
    RegExp: inspectRegExp,
    Promise: getPromiseValue,
    // WeakSet, WeakMap are totally opaque to us
    WeakSet: (value, options) => options.stylize('WeakSet{…}', 'special'),
    WeakMap: (value, options) => options.stylize('WeakMap{…}', 'special'),
    Arguments: inspectArguments,
    Int8Array: inspectTypedArray,
    Uint8Array: inspectTypedArray,
    Uint8ClampedArray: inspectTypedArray,
    Int16Array: inspectTypedArray,
    Uint16Array: inspectTypedArray,
    Int32Array: inspectTypedArray,
    Uint32Array: inspectTypedArray,
    Float32Array: inspectTypedArray,
    Float64Array: inspectTypedArray,
    Generator: () => '',
    DataView: () => '',
    ArrayBuffer: () => '',
    Error: inspectObject,
    HTMLCollection: inspectNodeCollection,
    NodeList: inspectNodeCollection,
};
// eslint-disable-next-line complexity
const inspectCustom = (value, options, type, inspectFn) => {
    if (chaiInspect in value && typeof value[chaiInspect] === 'function') {
        return value[chaiInspect](options);
    }
    if (nodeInspect in value && typeof value[nodeInspect] === 'function') {
        return value[nodeInspect](options.depth, options, inspectFn);
    }
    if ('inspect' in value && typeof value.inspect === 'function') {
        return value.inspect(options.depth, options);
    }
    if ('constructor' in value && constructorMap.has(value.constructor)) {
        return constructorMap.get(value.constructor)(value, options);
    }
    if (stringTagMap[type]) {
        return stringTagMap[type](value, options);
    }
    return '';
};
const toString = Object.prototype.toString;
// eslint-disable-next-line complexity
function inspect$1(value, opts = {}) {
    const options = normaliseOptions(opts, inspect$1);
    const { customInspect } = options;
    let type = value === null ? 'null' : typeof value;
    if (type === 'object') {
        type = toString.call(value).slice(8, -1);
    }
    // If it is a base value that we already support, then use Loupe's inspector
    if (type in baseTypesMap) {
        return baseTypesMap[type](value, options);
    }
    // If `options.customInspect` is set to true then try to use the custom inspector
    if (customInspect && value) {
        const output = inspectCustom(value, options, type, inspect$1);
        if (output) {
            if (typeof output === 'string')
                return output;
            return inspect$1(output, options);
        }
    }
    const proto = value ? Object.getPrototypeOf(value) : false;
    // If it's a plain Object then use Loupe's inspector
    if (proto === Object.prototype || proto === null) {
        return inspectObject$1(value, options);
    }
    // Specifically account for HTMLElements
    // @ts-ignore
    if (value && typeof HTMLElement === 'function' && value instanceof HTMLElement) {
        return inspectHTML(value, options);
    }
    if ('constructor' in value) {
        // If it is a class, inspect it like an object but add the constructor name
        if (value.constructor !== Object) {
            return inspectClass(value, options);
        }
        // If it is an object with an anonymous prototype, display it as an object.
        return inspectObject$1(value, options);
    }
    // last chance to check if it's an object
    if (value === Object(value)) {
        return inspectObject$1(value, options);
    }
    // We have run out of options! Just stringify the value
    return options.stylize(String(value), type);
}

const { AsymmetricMatcher, DOMCollection, DOMElement, Immutable, ReactElement, ReactTestComponent } = plugins;
const PLUGINS = [
	ReactTestComponent,
	ReactElement,
	DOMElement,
	DOMCollection,
	Immutable,
	AsymmetricMatcher
];
function stringify(object, maxDepth = 10, { maxLength, filterNode, ...options } = {}) {
	const MAX_LENGTH = maxLength ?? 1e4;
	let result;
	// Convert string selector to filter function
	const filterFn = typeof filterNode === "string" ? createNodeFilterFromSelector(filterNode) : filterNode;
	const plugins = filterFn ? [
		ReactTestComponent,
		ReactElement,
		createDOMElementFilter(filterFn),
		DOMCollection,
		Immutable,
		AsymmetricMatcher
	] : PLUGINS;
	try {
		result = format$1(object, {
			maxDepth,
			escapeString: false,
			plugins,
			...options
		});
	} catch {
		result = format$1(object, {
			callToJSON: false,
			maxDepth,
			escapeString: false,
			plugins,
			...options
		});
	}
	// Prevents infinite loop https://github.com/vitest-dev/vitest/issues/7249
	return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object, Math.floor(Math.min(maxDepth, Number.MAX_SAFE_INTEGER) / 2), {
		maxLength,
		filterNode,
		...options
	}) : result;
}
function createNodeFilterFromSelector(selector) {
	const ELEMENT_NODE = 1;
	const COMMENT_NODE = 8;
	return (node) => {
		// Filter out comments
		if (node.nodeType === COMMENT_NODE) {
			return false;
		}
		// Filter out elements matching the selector
		if (node.nodeType === ELEMENT_NODE && node.matches) {
			try {
				return !node.matches(selector);
			} catch {
				return true;
			}
		}
		return true;
	};
}
const formatRegExp = /%[sdjifoOc%]/g;
function baseFormat(args, options = {}) {
	const formatArg = (item, inspecOptions) => {
		if (options.prettifyObject) {
			return stringify(item, undefined, {
				printBasicPrototype: false,
				escapeString: false
			});
		}
		return inspect(item, inspecOptions);
	};
	if (typeof args[0] !== "string") {
		const objects = [];
		for (let i = 0; i < args.length; i++) {
			objects.push(formatArg(args[i], {
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
					return formatArg(value, {
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
				if (typeof value === "symbol") {
					return "NaN";
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
			case "%o": return formatArg(args[i++], {
				showHidden: true,
				showProxy: true
			});
			case "%O": return formatArg(args[i++]);
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
			str += ` ${typeof x === "symbol" ? x.toString() : x}`;
		} else {
			str += ` ${formatArg(x)}`;
		}
	}
	return str;
}
function format(...args) {
	return baseFormat(args);
}
function browserFormat(...args) {
	return baseFormat(args, { prettifyObject: true });
}
function inspect(obj, options = {}) {
	if (options.truncate === 0) {
		options.truncate = Number.POSITIVE_INFINITY;
	}
	return inspect$1(obj, options);
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

export { browserFormat, format, formatRegExp, inspect, objDisplay, stringify };
