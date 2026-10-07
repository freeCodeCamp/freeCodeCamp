import { isPrimitive, notNullish } from './helpers.js';
import { r as resolve } from './chunk-pathe.M-eThtNZ.js';
import './constants.js';

// src/vlq.ts
var comma = ",".charCodeAt(0);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
  const c = chars.charCodeAt(i);
  intToChar[i] = c;
  charToInt[c] = i;
}
function decodeInteger(reader, relative) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = reader.next();
    integer = charToInt[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  return relative + value;
}
function hasMoreVlq(reader, max) {
  if (reader.pos >= max) return false;
  return reader.peek() !== comma;
}
var StringReader = class {
  constructor(buffer) {
    this.pos = 0;
    this.buffer = buffer;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(char) {
    const { buffer, pos } = this;
    const idx = buffer.indexOf(char, pos);
    return idx === -1 ? buffer.length : idx;
  }
};

// src/sourcemap-codec.ts
function decode(mappings) {
  const { length } = mappings;
  const reader = new StringReader(mappings);
  const decoded = [];
  let genColumn = 0;
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;
  do {
    const semi = reader.indexOf(";");
    const line = [];
    let sorted = true;
    let lastCol = 0;
    genColumn = 0;
    while (reader.pos < semi) {
      let seg;
      genColumn = decodeInteger(reader, genColumn);
      if (genColumn < lastCol) sorted = false;
      lastCol = genColumn;
      if (hasMoreVlq(reader, semi)) {
        sourcesIndex = decodeInteger(reader, sourcesIndex);
        sourceLine = decodeInteger(reader, sourceLine);
        sourceColumn = decodeInteger(reader, sourceColumn);
        if (hasMoreVlq(reader, semi)) {
          namesIndex = decodeInteger(reader, namesIndex);
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex];
        } else {
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn];
        }
      } else {
        seg = [genColumn];
      }
      line.push(seg);
      reader.pos++;
    }
    if (!sorted) sort(line);
    decoded.push(line);
    reader.pos = semi + 1;
  } while (reader.pos <= length);
  return decoded;
}
function sort(line) {
  line.sort(sortComparator);
}
function sortComparator(a, b) {
  return a[0] - b[0];
}

// src/trace-mapping.ts

// src/sourcemap-segment.ts
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;

// src/binary-search.ts
var found = false;
function binarySearch(haystack, needle, low, high) {
  while (low <= high) {
    const mid = low + (high - low >> 1);
    const cmp = haystack[mid][COLUMN] - needle;
    if (cmp === 0) {
      found = true;
      return mid;
    }
    if (cmp < 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  found = false;
  return low - 1;
}
function upperBound(haystack, needle, index) {
  for (let i = index + 1; i < haystack.length; index = i++) {
    if (haystack[i][COLUMN] !== needle) break;
  }
  return index;
}
function lowerBound(haystack, needle, index) {
  for (let i = index - 1; i >= 0; index = i--) {
    if (haystack[i][COLUMN] !== needle) break;
  }
  return index;
}
function memoizedBinarySearch(haystack, needle, state, key) {
  const { lastKey, lastNeedle, lastIndex } = state;
  let low = 0;
  let high = haystack.length - 1;
  if (key === lastKey) {
    if (needle === lastNeedle) {
      found = lastIndex !== -1 && haystack[lastIndex][COLUMN] === needle;
      return lastIndex;
    }
    if (needle >= lastNeedle) {
      low = lastIndex === -1 ? 0 : lastIndex;
    } else {
      high = lastIndex;
    }
  }
  state.lastKey = key;
  state.lastNeedle = needle;
  return state.lastIndex = binarySearch(haystack, needle, low, high);
}

// src/trace-mapping.ts
var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND = -1;
var GREATEST_LOWER_BOUND = 1;
function cast(map) {
  return map;
}
function decodedMappings(map) {
  var _a;
  return (_a = cast(map))._decoded || (_a._decoded = decode(cast(map)._encoded));
}
function originalPositionFor(map, needle) {
  let { line, column, bias } = needle;
  line--;
  if (line < 0) throw new Error(LINE_GTR_ZERO);
  if (column < 0) throw new Error(COL_GTR_EQ_ZERO);
  const decoded = decodedMappings(map);
  if (line >= decoded.length) return OMapping(null, null, null, null);
  const segments = decoded[line];
  const index = traceSegmentInternal(
    segments,
    cast(map)._decodedMemo,
    line,
    column,
    bias || GREATEST_LOWER_BOUND
  );
  if (index === -1) return OMapping(null, null, null, null);
  const segment = segments[index];
  if (segment.length === 1) return OMapping(null, null, null, null);
  const { names, resolvedSources } = map;
  return OMapping(
    resolvedSources[segment[SOURCES_INDEX]],
    segment[SOURCE_LINE] + 1,
    segment[SOURCE_COLUMN],
    segment.length === 5 ? names[segment[NAMES_INDEX]] : null
  );
}
function OMapping(source, line, column, name) {
  return { source, line, column, name };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
  let index = memoizedBinarySearch(segments, column, memo, line);
  if (found) {
    index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
  } else if (bias === LEAST_UPPER_BOUND) index++;
  if (index === -1 || index === segments.length) return -1;
  return index;
}

const CHROME_IE_STACK_REGEXP = /^\s*at .*(?:\S:\d+|\(native\))/m;
const SAFARI_NATIVE_CODE_REGEXP = /^(?:eval@)?(?:\[native code\])?$/;
const stackIgnorePatterns = [
	"node:internal",
	/\/packages\/\w+\/dist\//,
	/\/@vitest\/\w+\/dist\//,
	"/vitest/dist/",
	"/vitest/src/",
	"/node_modules/chai/",
	"/node_modules/tinyspy/",
	"/vite/dist/node/module-runner",
	"/rolldown-vite/dist/node/module-runner",
	"/deps/chunk-",
	"/deps/@vitest",
	"/deps/loupe",
	"/deps/chai",
	"/browser-playwright/dist/locators.js",
	"/browser-webdriverio/dist/locators.js",
	"/browser-preview/dist/locators.js",
	/node:\w+/,
	/__vitest_test__/,
	/__vitest_browser__/,
	"/@id/__x00__vitest/browser",
	/\/deps\/vitest_/
];
const NOW_LENGTH = Date.now().toString().length;
const REGEXP_VITEST = new RegExp(`vitest=\\d{${NOW_LENGTH}}`);
function extractLocation(urlLike) {
	// Fail-fast but return locations like "(native)"
	if (!urlLike.includes(":")) {
		return [urlLike];
	}
	const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
	const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
	if (!parts) {
		return [urlLike];
	}
	let url = parts[1];
	if (url.startsWith("async ")) {
		url = url.slice(6);
	}
	if (url.startsWith("http:") || url.startsWith("https:")) {
		const urlObj = new URL(url);
		urlObj.searchParams.delete("import");
		urlObj.searchParams.delete("browserv");
		url = urlObj.pathname + urlObj.hash + urlObj.search;
	}
	if (url.startsWith("/@fs/")) {
		const isWindows = /^\/@fs\/[a-zA-Z]:\//.test(url);
		url = url.slice(isWindows ? 5 : 4);
	}
	if (url.includes("vitest=")) {
		url = url.replace(REGEXP_VITEST, "").replace(/[?&]$/, "");
	}
	return [
		url,
		parts[2] || undefined,
		parts[3] || undefined
	];
}
function parseSingleFFOrSafariStack(raw) {
	let line = raw.trim();
	if (SAFARI_NATIVE_CODE_REGEXP.test(line)) {
		return null;
	}
	if (line.includes(" > eval")) {
		line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
	}
	// Early return for lines that don't look like Firefox/Safari stack traces
	// Firefox/Safari stack traces must contain '@' and should have location info after it
	if (!line.includes("@")) {
		return null;
	}
	// Find the correct @ that separates function name from location
	// For cases like '@https://@fs/path' or 'functionName@https://@fs/path'
	// we need to find the first @ that precedes a valid location (containing :)
	let atIndex = -1;
	let locationPart = "";
	let functionName;
	// Try each @ from left to right to find the one that gives us a valid location
	for (let i = 0; i < line.length; i++) {
		if (line[i] === "@") {
			const candidateLocation = line.slice(i + 1);
			// Minimum length 3 for valid location: 1 for filename + 1 for colon + 1 for line number (e.g., "a:1")
			if (candidateLocation.includes(":") && candidateLocation.length >= 3) {
				atIndex = i;
				locationPart = candidateLocation;
				functionName = i > 0 ? line.slice(0, i) : undefined;
				break;
			}
		}
	}
	// Validate we found a valid location with minimum length (filename:line format)
	if (atIndex === -1 || !locationPart.includes(":") || locationPart.length < 3) {
		return null;
	}
	const [url, lineNumber, columnNumber] = extractLocation(locationPart);
	if (!url || !lineNumber || !columnNumber) {
		return null;
	}
	return {
		file: url,
		method: functionName || "",
		line: Number.parseInt(lineNumber),
		column: Number.parseInt(columnNumber)
	};
}
function parseSingleStack(raw) {
	const line = raw.trim();
	if (!CHROME_IE_STACK_REGEXP.test(line)) {
		return parseSingleFFOrSafariStack(line);
	}
	return parseSingleV8Stack(line);
}
// Based on https://github.com/stacktracejs/error-stack-parser
// Credit to stacktracejs
function parseSingleV8Stack(raw) {
	let line = raw.trim();
	if (!CHROME_IE_STACK_REGEXP.test(line)) {
		return null;
	}
	if (line.includes("(eval ")) {
		line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
	}
	let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
	// capture and preserve the parenthesized location "(/foo/my bar.js:12:87)" in
	// case it has spaces in it, as the string is split on \s+ later on
	const location = sanitizedLine.match(/ (\(.+\)$)/);
	// remove the parenthesized location from the line, if it was matched
	sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
	// if a location was matched, pass it to extractLocation() otherwise pass all sanitizedLine
	// because this line doesn't have function name
	const [url, lineNumber, columnNumber] = extractLocation(location ? location[1] : sanitizedLine);
	let method = location && sanitizedLine || "";
	let file = url && ["eval", "<anonymous>"].includes(url) ? undefined : url;
	if (!file || !lineNumber || !columnNumber) {
		return null;
	}
	if (method.startsWith("async ")) {
		method = method.slice(6);
	}
	if (file.startsWith("file://")) {
		file = file.slice(7);
	}
	// normalize Windows path (\ -> /)
	file = file.startsWith("node:") || file.startsWith("internal:") ? file : resolve(file);
	if (method) {
		method = method.replace(/\(0\s?,\s?__vite_ssr_import_\d+__.(\w+)\)/g, "$1").replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "").replace(/(Object\.)?__vite_ssr_export_default__\s?/g, "");
	}
	return {
		method,
		file,
		line: Number.parseInt(lineNumber),
		column: Number.parseInt(columnNumber)
	};
}
function createStackString(stacks) {
	return stacks.map((stack) => {
		const line = `${stack.file}:${stack.line}:${stack.column}`;
		if (stack.method) {
			return `    at ${stack.method}(${line})`;
		}
		return `    at ${line}`;
	}).join("\n");
}
function parseStacktrace(stack, options = {}) {
	const { ignoreStackEntries = stackIgnorePatterns } = options;
	let stacks = !CHROME_IE_STACK_REGEXP.test(stack) ? parseFFOrSafariStackTrace(stack) : parseV8Stacktrace(stack);
	// remove vi.defineHelper's internal stacks
	const helperIndex = stacks.findLastIndex((s) => s.method.includes("__VITEST_HELPER__"));
	if (helperIndex >= 0) {
		stacks = stacks.slice(helperIndex + 1);
	}
	return stacks.map((stack) => {
		if (options.getUrlId) {
			stack.file = options.getUrlId(stack.file);
		}
		const map = options.getSourceMap?.(stack.file);
		if (!map || typeof map !== "object" || !map.version) {
			return shouldFilter(ignoreStackEntries, stack.file) ? null : stack;
		}
		const traceMap = new DecodedMap(map, stack.file);
		const position = getOriginalPosition(traceMap, stack);
		if (!position) {
			return stack;
		}
		const { line, column, source, name } = position;
		let file = source || stack.file;
		if (file.match(/\/\w:\//)) {
			file = file.slice(1);
		}
		if (shouldFilter(ignoreStackEntries, file)) {
			return null;
		}
		if (line != null && column != null) {
			return {
				line,
				column,
				file,
				method: name || stack.method
			};
		}
		return stack;
	}).filter((s) => s != null);
}
function shouldFilter(ignoreStackEntries, file) {
	return ignoreStackEntries.some((p) => file.match(p));
}
function parseFFOrSafariStackTrace(stack) {
	return stack.split("\n").map((line) => parseSingleFFOrSafariStack(line)).filter(notNullish);
}
function parseV8Stacktrace(stack) {
	return stack.split("\n").map((line) => parseSingleV8Stack(line)).filter(notNullish);
}
function parseErrorStacktrace(e, options = {}) {
	if (!e || isPrimitive(e)) {
		return [];
	}
	if ("stacks" in e && e.stacks) {
		return e.stacks;
	}
	const stackStr = e.stack || "";
	// if "stack" property was overwritten at runtime to be something else,
	// ignore the value because we don't know how to process it
	let stackFrames = typeof stackStr === "string" ? parseStacktrace(stackStr, options) : [];
	if (!stackFrames.length) {
		const e_ = e;
		if (e_.fileName != null && e_.lineNumber != null && e_.columnNumber != null) {
			stackFrames = parseStacktrace(`${e_.fileName}:${e_.lineNumber}:${e_.columnNumber}`, options);
		}
		if (e_.sourceURL != null && e_.line != null && e_._column != null) {
			stackFrames = parseStacktrace(`${e_.sourceURL}:${e_.line}:${e_.column}`, options);
		}
	}
	if (options.frameFilter) {
		stackFrames = stackFrames.filter((f) => options.frameFilter(e, f) !== false);
	}
	e.stacks = stackFrames;
	return stackFrames;
}
class DecodedMap {
	_encoded;
	_decoded;
	_decodedMemo;
	url;
	version;
	names = [];
	resolvedSources;
	constructor(map, from) {
		this.map = map;
		const { mappings, names, sources } = map;
		this.version = map.version;
		this.names = names || [];
		this._encoded = mappings || "";
		this._decodedMemo = memoizedState();
		this.url = from;
		this.resolvedSources = (sources || []).map((s) => resolve(from, "..", s || ""));
	}
}
function memoizedState() {
	return {
		lastKey: -1,
		lastNeedle: -1,
		lastIndex: -1
	};
}
function getOriginalPosition(map, needle) {
	const result = originalPositionFor(map, needle);
	if (result.column == null) {
		return null;
	}
	return result;
}

export { DecodedMap, createStackString, stackIgnorePatterns as defaultStackIgnorePatterns, getOriginalPosition, parseErrorStacktrace, parseSingleFFOrSafariStack, parseSingleStack, parseSingleV8Stack, parseStacktrace };
