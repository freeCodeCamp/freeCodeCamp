'use strict';

var pathe = require('pathe');
var fs = require('node:fs');
var path = require('node:path');
var utils = require('./utils.cjs');
require('node:module');
require('node:url');

const comma = ','.charCodeAt(0);
const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const intToChar = new Uint8Array(64); // 64 possible chars.
const charToInt = new Uint8Array(128); // z is 122 in ASCII
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
    if (reader.pos >= max)
        return false;
    return reader.peek() !== comma;
}
class StringReader {
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
}

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
        const semi = reader.indexOf(';');
        const line = [];
        let sorted = true;
        let lastCol = 0;
        genColumn = 0;
        while (reader.pos < semi) {
            let seg;
            genColumn = decodeInteger(reader, genColumn);
            if (genColumn < lastCol)
                sorted = false;
            lastCol = genColumn;
            if (hasMoreVlq(reader, semi)) {
                sourcesIndex = decodeInteger(reader, sourcesIndex);
                sourceLine = decodeInteger(reader, sourceLine);
                sourceColumn = decodeInteger(reader, sourceColumn);
                if (hasMoreVlq(reader, semi)) {
                    namesIndex = decodeInteger(reader, namesIndex);
                    seg = [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex];
                }
                else {
                    seg = [genColumn, sourcesIndex, sourceLine, sourceColumn];
                }
            }
            else {
                seg = [genColumn];
            }
            line.push(seg);
            reader.pos++;
        }
        if (!sorted)
            sort(line);
        decoded.push(line);
        reader.pos = semi + 1;
    } while (reader.pos <= length);
    return decoded;
}
function sort(line) {
    line.sort(sortComparator$1);
}
function sortComparator$1(a, b) {
    return a[0] - b[0];
}

// Matches the scheme of a URL, eg "http://"
const schemeRegex = /^[\w+.-]+:\/\//;
/**
 * Matches the parts of a URL:
 * 1. Scheme, including ":", guaranteed.
 * 2. User/password, including "@", optional.
 * 3. Host, guaranteed.
 * 4. Port, including ":", optional.
 * 5. Path, including "/", optional.
 * 6. Query, including "?", optional.
 * 7. Hash, including "#", optional.
 */
const urlRegex = /^([\w+.-]+:)\/\/([^@/#?]*@)?([^:/#?]*)(:\d+)?(\/[^#?]*)?(\?[^#]*)?(#.*)?/;
/**
 * File URLs are weird. They dont' need the regular `//` in the scheme, they may or may not start
 * with a leading `/`, they can have a domain (but only if they don't start with a Windows drive).
 *
 * 1. Host, optional.
 * 2. Path, which may include "/", guaranteed.
 * 3. Query, including "?", optional.
 * 4. Hash, including "#", optional.
 */
const fileRegex = /^file:(?:\/\/((?![a-z]:)[^/#?]*)?)?(\/?[^#?]*)(\?[^#]*)?(#.*)?/i;
var UrlType;
(function (UrlType) {
    UrlType[UrlType["Empty"] = 1] = "Empty";
    UrlType[UrlType["Hash"] = 2] = "Hash";
    UrlType[UrlType["Query"] = 3] = "Query";
    UrlType[UrlType["RelativePath"] = 4] = "RelativePath";
    UrlType[UrlType["AbsolutePath"] = 5] = "AbsolutePath";
    UrlType[UrlType["SchemeRelative"] = 6] = "SchemeRelative";
    UrlType[UrlType["Absolute"] = 7] = "Absolute";
})(UrlType || (UrlType = {}));
function isAbsoluteUrl(input) {
    return schemeRegex.test(input);
}
function isSchemeRelativeUrl(input) {
    return input.startsWith('//');
}
function isAbsolutePath(input) {
    return input.startsWith('/');
}
function isFileUrl(input) {
    return input.startsWith('file:');
}
function isRelative(input) {
    return /^[.?#]/.test(input);
}
function parseAbsoluteUrl(input) {
    const match = urlRegex.exec(input);
    return makeUrl(match[1], match[2] || '', match[3], match[4] || '', match[5] || '/', match[6] || '', match[7] || '');
}
function parseFileUrl(input) {
    const match = fileRegex.exec(input);
    const path = match[2];
    return makeUrl('file:', '', match[1] || '', '', isAbsolutePath(path) ? path : '/' + path, match[3] || '', match[4] || '');
}
function makeUrl(scheme, user, host, port, path, query, hash) {
    return {
        scheme,
        user,
        host,
        port,
        path,
        query,
        hash,
        type: UrlType.Absolute,
    };
}
function parseUrl(input) {
    if (isSchemeRelativeUrl(input)) {
        const url = parseAbsoluteUrl('http:' + input);
        url.scheme = '';
        url.type = UrlType.SchemeRelative;
        return url;
    }
    if (isAbsolutePath(input)) {
        const url = parseAbsoluteUrl('http://foo.com' + input);
        url.scheme = '';
        url.host = '';
        url.type = UrlType.AbsolutePath;
        return url;
    }
    if (isFileUrl(input))
        return parseFileUrl(input);
    if (isAbsoluteUrl(input))
        return parseAbsoluteUrl(input);
    const url = parseAbsoluteUrl('http://foo.com/' + input);
    url.scheme = '';
    url.host = '';
    url.type = input
        ? input.startsWith('?')
            ? UrlType.Query
            : input.startsWith('#')
                ? UrlType.Hash
                : UrlType.RelativePath
        : UrlType.Empty;
    return url;
}
function stripPathFilename(path) {
    // If a path ends with a parent directory "..", then it's a relative path with excess parent
    // paths. It's not a file, so we can't strip it.
    if (path.endsWith('/..'))
        return path;
    const index = path.lastIndexOf('/');
    return path.slice(0, index + 1);
}
function mergePaths(url, base) {
    normalizePath(base, base.type);
    // If the path is just a "/", then it was an empty path to begin with (remember, we're a relative
    // path).
    if (url.path === '/') {
        url.path = base.path;
    }
    else {
        // Resolution happens relative to the base path's directory, not the file.
        url.path = stripPathFilename(base.path) + url.path;
    }
}
/**
 * The path can have empty directories "//", unneeded parents "foo/..", or current directory
 * "foo/.". We need to normalize to a standard representation.
 */
function normalizePath(url, type) {
    const rel = type <= UrlType.RelativePath;
    const pieces = url.path.split('/');
    // We need to preserve the first piece always, so that we output a leading slash. The item at
    // pieces[0] is an empty string.
    let pointer = 1;
    // Positive is the number of real directories we've output, used for popping a parent directory.
    // Eg, "foo/bar/.." will have a positive 2, and we can decrement to be left with just "foo".
    let positive = 0;
    // We need to keep a trailing slash if we encounter an empty directory (eg, splitting "foo/" will
    // generate `["foo", ""]` pieces). And, if we pop a parent directory. But once we encounter a
    // real directory, we won't need to append, unless the other conditions happen again.
    let addTrailingSlash = false;
    for (let i = 1; i < pieces.length; i++) {
        const piece = pieces[i];
        // An empty directory, could be a trailing slash, or just a double "//" in the path.
        if (!piece) {
            addTrailingSlash = true;
            continue;
        }
        // If we encounter a real directory, then we don't need to append anymore.
        addTrailingSlash = false;
        // A current directory, which we can always drop.
        if (piece === '.')
            continue;
        // A parent directory, we need to see if there are any real directories we can pop. Else, we
        // have an excess of parents, and we'll need to keep the "..".
        if (piece === '..') {
            if (positive) {
                addTrailingSlash = true;
                positive--;
                pointer--;
            }
            else if (rel) {
                // If we're in a relativePath, then we need to keep the excess parents. Else, in an absolute
                // URL, protocol relative URL, or an absolute path, we don't need to keep excess.
                pieces[pointer++] = piece;
            }
            continue;
        }
        // We've encountered a real directory. Move it to the next insertion pointer, which accounts for
        // any popped or dropped directories.
        pieces[pointer++] = piece;
        positive++;
    }
    let path = '';
    for (let i = 1; i < pointer; i++) {
        path += '/' + pieces[i];
    }
    if (!path || (addTrailingSlash && !path.endsWith('/..'))) {
        path += '/';
    }
    url.path = path;
}
/**
 * Attempts to resolve `input` URL/path relative to `base`.
 */
function resolve$1(input, base) {
    if (!input && !base)
        return '';
    const url = parseUrl(input);
    let inputType = url.type;
    if (base && inputType !== UrlType.Absolute) {
        const baseUrl = parseUrl(base);
        const baseType = baseUrl.type;
        switch (inputType) {
            case UrlType.Empty:
                url.hash = baseUrl.hash;
            // fall through
            case UrlType.Hash:
                url.query = baseUrl.query;
            // fall through
            case UrlType.Query:
            case UrlType.RelativePath:
                mergePaths(url, baseUrl);
            // fall through
            case UrlType.AbsolutePath:
                // The host, user, and port are joined, you can't copy one without the others.
                url.user = baseUrl.user;
                url.host = baseUrl.host;
                url.port = baseUrl.port;
            // fall through
            case UrlType.SchemeRelative:
                // The input doesn't have a schema at least, so we need to copy at least that over.
                url.scheme = baseUrl.scheme;
        }
        if (baseType > inputType)
            inputType = baseType;
    }
    normalizePath(url, inputType);
    const queryHash = url.query + url.hash;
    switch (inputType) {
        // This is impossible, because of the empty checks at the start of the function.
        // case UrlType.Empty:
        case UrlType.Hash:
        case UrlType.Query:
            return queryHash;
        case UrlType.RelativePath: {
            // The first char is always a "/", and we need it to be relative.
            const path = url.path.slice(1);
            if (!path)
                return queryHash || '.';
            if (isRelative(base || input) && !isRelative(path)) {
                // If base started with a leading ".", or there is no base and input started with a ".",
                // then we need to ensure that the relative path starts with a ".". We don't know if
                // relative starts with a "..", though, so check before prepending.
                return './' + path + queryHash;
            }
            return path + queryHash;
        }
        case UrlType.AbsolutePath:
            return url.path + queryHash;
        default:
            return url.scheme + '//' + url.user + url.host + url.port + url.path + queryHash;
    }
}

function resolve(input, base) {
    // The base is always treated as a directory, if it's not empty.
    // https://github.com/mozilla/source-map/blob/8cb3ee57/lib/util.js#L327
    // https://github.com/chromium/chromium/blob/da4adbb3/third_party/blink/renderer/devtools/front_end/sdk/SourceMap.js#L400-L401
    if (base && !base.endsWith('/'))
        base += '/';
    return resolve$1(input, base);
}

/**
 * Removes everything after the last "/", but leaves the slash.
 */
function stripFilename(path) {
    if (!path)
        return '';
    const index = path.lastIndexOf('/');
    return path.slice(0, index + 1);
}

const COLUMN = 0;
const SOURCES_INDEX = 1;
const SOURCE_LINE = 2;
const SOURCE_COLUMN = 3;
const NAMES_INDEX = 4;

function maybeSort(mappings, owned) {
    const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
    if (unsortedIndex === mappings.length)
        return mappings;
    // If we own the array (meaning we parsed it from JSON), then we're free to directly mutate it. If
    // not, we do not want to modify the consumer's input array.
    if (!owned)
        mappings = mappings.slice();
    for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
        mappings[i] = sortSegments(mappings[i], owned);
    }
    return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
    for (let i = start; i < mappings.length; i++) {
        if (!isSorted(mappings[i]))
            return i;
    }
    return mappings.length;
}
function isSorted(line) {
    for (let j = 1; j < line.length; j++) {
        if (line[j][COLUMN] < line[j - 1][COLUMN]) {
            return false;
        }
    }
    return true;
}
function sortSegments(line, owned) {
    if (!owned)
        line = line.slice();
    return line.sort(sortComparator);
}
function sortComparator(a, b) {
    return a[COLUMN] - b[COLUMN];
}

let found = false;
/**
 * A binary search implementation that returns the index if a match is found.
 * If no match is found, then the left-index (the index associated with the item that comes just
 * before the desired index) is returned. To maintain proper sort order, a splice would happen at
 * the next index:
 *
 * ```js
 * const array = [1, 3];
 * const needle = 2;
 * const index = binarySearch(array, needle, (item, needle) => item - needle);
 *
 * assert.equal(index, 0);
 * array.splice(index + 1, 0, needle);
 * assert.deepEqual(array, [1, 2, 3]);
 * ```
 */
function binarySearch(haystack, needle, low, high) {
    while (low <= high) {
        const mid = low + ((high - low) >> 1);
        const cmp = haystack[mid][COLUMN] - needle;
        if (cmp === 0) {
            found = true;
            return mid;
        }
        if (cmp < 0) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    found = false;
    return low - 1;
}
function upperBound(haystack, needle, index) {
    for (let i = index + 1; i < haystack.length; index = i++) {
        if (haystack[i][COLUMN] !== needle)
            break;
    }
    return index;
}
function lowerBound(haystack, needle, index) {
    for (let i = index - 1; i >= 0; index = i--) {
        if (haystack[i][COLUMN] !== needle)
            break;
    }
    return index;
}
function memoizedState() {
    return {
        lastKey: -1,
        lastNeedle: -1,
        lastIndex: -1,
    };
}
/**
 * This overly complicated beast is just to record the last tested line/column and the resulting
 * index, allowing us to skip a few tests if mappings are monotonically increasing.
 */
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
            // lastIndex may be -1 if the previous needle was not found.
            low = lastIndex === -1 ? 0 : lastIndex;
        }
        else {
            high = lastIndex;
        }
    }
    state.lastKey = key;
    state.lastNeedle = needle;
    return (state.lastIndex = binarySearch(haystack, needle, low, high));
}

const LINE_GTR_ZERO = '`line` must be greater than 0 (lines start at line 1)';
const COL_GTR_EQ_ZERO = '`column` must be greater than or equal to 0 (columns start at column 0)';
const LEAST_UPPER_BOUND = -1;
const GREATEST_LOWER_BOUND = 1;
class TraceMap {
    constructor(map, mapUrl) {
        const isString = typeof map === 'string';
        if (!isString && map._decodedMemo)
            return map;
        const parsed = (isString ? JSON.parse(map) : map);
        const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
        this.version = version;
        this.file = file;
        this.names = names || [];
        this.sourceRoot = sourceRoot;
        this.sources = sources;
        this.sourcesContent = sourcesContent;
        this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || undefined;
        const from = resolve(sourceRoot || '', stripFilename(mapUrl));
        this.resolvedSources = sources.map((s) => resolve(s || '', from));
        const { mappings } = parsed;
        if (typeof mappings === 'string') {
            this._encoded = mappings;
            this._decoded = undefined;
        }
        else {
            this._encoded = undefined;
            this._decoded = maybeSort(mappings, isString);
        }
        this._decodedMemo = memoizedState();
        this._bySources = undefined;
        this._bySourceMemos = undefined;
    }
}
/**
 * Typescript doesn't allow friend access to private fields, so this just casts the map into a type
 * with public access modifiers.
 */
function cast(map) {
    return map;
}
/**
 * Returns the decoded (array of lines of segments) form of the SourceMap's mappings field.
 */
function decodedMappings(map) {
    var _a;
    return ((_a = cast(map))._decoded || (_a._decoded = decode(cast(map)._encoded)));
}
/**
 * A higher-level API to find the source/line/column associated with a generated line/column
 * (think, from a stack trace). Line is 1-based, but column is 0-based, due to legacy behavior in
 * `source-map` library.
 */
function originalPositionFor(map, needle) {
    let { line, column, bias } = needle;
    line--;
    if (line < 0)
        throw new Error(LINE_GTR_ZERO);
    if (column < 0)
        throw new Error(COL_GTR_EQ_ZERO);
    const decoded = decodedMappings(map);
    // It's common for parent source maps to have pointers to lines that have no
    // mapping (like a "//# sourceMappingURL=") at the end of the child file.
    if (line >= decoded.length)
        return OMapping(null, null, null, null);
    const segments = decoded[line];
    const index = traceSegmentInternal(segments, cast(map)._decodedMemo, line, column, bias || GREATEST_LOWER_BOUND);
    if (index === -1)
        return OMapping(null, null, null, null);
    const segment = segments[index];
    if (segment.length === 1)
        return OMapping(null, null, null, null);
    const { names, resolvedSources } = map;
    return OMapping(resolvedSources[segment[SOURCES_INDEX]], segment[SOURCE_LINE] + 1, segment[SOURCE_COLUMN], segment.length === 5 ? names[segment[NAMES_INDEX]] : null);
}
function OMapping(source, line, column, name) {
    return { source, line, column, name };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
    let index = memoizedBinarySearch(segments, column, memo, line);
    if (found) {
        index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
    }
    else if (bias === LEAST_UPPER_BOUND)
        index++;
    if (index === -1 || index === segments.length)
        return -1;
    return index;
}

// Only install once if called multiple times
let errorFormatterInstalled = false;
// Maps a file path to a string containing the file contents
const fileContentsCache = {};
// Maps a file path to a source map for that file
const sourceMapCache = {};
// Regex for detecting source maps
const reSourceMap = /^data:application\/json[^,]+base64,/;
// Priority list of retrieve handlers
let retrieveFileHandlers = [];
let retrieveMapHandlers = [];
function globalProcessVersion() {
	if (typeof process === "object" && process !== null) return process.version;
	else return "";
}
function handlerExec(list) {
	return function(arg) {
		for (let i = 0; i < list.length; i++) {
			const ret = list[i](arg);
			if (ret) return ret;
		}
		return null;
	};
}
let retrieveFile = handlerExec(retrieveFileHandlers);
retrieveFileHandlers.push((path) => {
	// Trim the path to make sure there is no extra whitespace.
	path = path.trim();
	if (path.startsWith("file:"))
 // existsSync/readFileSync can't handle file protocol, but once stripped, it works
	path = path.replace(/file:\/\/\/(\w:)?/, (protocol, drive) => {
		return drive ? "" : "/";
	});
	if (path in fileContentsCache) return fileContentsCache[path];
	let contents = "";
	try {
		if (fs.existsSync(path)) contents = fs.readFileSync(path, "utf8");
	} catch {}
	return fileContentsCache[path] = contents;
});
// Support URLs relative to a directory, but be careful about a protocol prefix
function supportRelativeURL(file, url) {
	if (!file) return url;
	const dir = path.dirname(file);
	const match = /^\w+:\/\/[^/]*/.exec(dir);
	let protocol = match ? match[0] : "";
	const startPath = dir.slice(protocol.length);
	if (protocol && /^\/\w:/.test(startPath)) {
		// handle file:///C:/ paths
		protocol += "/";
		return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, "/");
	}
	return protocol + path.resolve(dir.slice(protocol.length), url);
}
function retrieveSourceMapURL(source) {
	// Get the URL of the source map
	const fileData = retrieveFile(source);
	if (!fileData) return null;
	const re = /\/\/[@#]\s*sourceMappingURL=([^\s'"]+)\s*$|\/\*[@#]\s*sourceMappingURL=[^\s*'"]+\s*\*\/\s*$/gm;
	// Keep executing the search to find the *last* sourceMappingURL to avoid
	// picking up sourceMappingURLs from comments, strings, etc.
	let lastMatch, match;
	// eslint-disable-next-line no-cond-assign
	while (match = re.exec(fileData)) lastMatch = match;
	if (!lastMatch) return null;
	return lastMatch[1];
}
// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
let retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push((source) => {
	let sourceMappingURL = retrieveSourceMapURL(source);
	if (!sourceMappingURL) return null;
	// Read the contents of the source map
	let sourceMapData;
	if (reSourceMap.test(sourceMappingURL)) {
		// Support source map URL as a data url
		const rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(",") + 1);
		sourceMapData = Buffer.from(rawData, "base64").toString();
		sourceMappingURL = source;
	} else {
		// Support source map URLs relative to the source URL
		sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
		sourceMapData = retrieveFile(sourceMappingURL);
	}
	if (!sourceMapData) return null;
	return {
		url: sourceMappingURL,
		map: sourceMapData
	};
});
// interface Position {
//   source: string
//   line: number
//   column: number
// }
function mapSourcePosition(position) {
	if (!position.source) return position;
	let sourceMap = sourceMapCache[position.source];
	if (!sourceMap) {
		// Call the (overridable) retrieveSourceMap function to get the source map.
		const urlAndMap = retrieveSourceMap(position.source);
		const map = urlAndMap && urlAndMap.map;
		if (map && !(typeof map === "object" && "mappings" in map && map.mappings === "")) {
			var _sourceMap$map;
			sourceMap = sourceMapCache[position.source] = {
				url: urlAndMap.url,
				map: new TraceMap(map)
			};
			// Load all sources stored inline with the source map into the file cache
			// to pretend like they are already loaded. They may not exist on disk.
			if ((_sourceMap$map = sourceMap.map) === null || _sourceMap$map === void 0 ? void 0 : _sourceMap$map.sourcesContent) sourceMap.map.sources.forEach((source, i) => {
				var _sourceMap$map2;
				const contents = (_sourceMap$map2 = sourceMap.map) === null || _sourceMap$map2 === void 0 || (_sourceMap$map2 = _sourceMap$map2.sourcesContent) === null || _sourceMap$map2 === void 0 ? void 0 : _sourceMap$map2[i];
				if (contents && source && sourceMap.url) {
					const url = supportRelativeURL(sourceMap.url, source);
					fileContentsCache[url] = contents;
				}
			});
		} else sourceMap = sourceMapCache[position.source] = {
			url: null,
			map: null
		};
	}
	// Resolve the source URL relative to the URL of the source map
	if (sourceMap && sourceMap.map && sourceMap.url) {
		const originalPosition = originalPositionFor(sourceMap.map, position);
		// Only return the original position if a matching line was found. If no
		// matching line is found then we return position instead, which will cause
		// the stack trace to print the path and line for the compiled file. It is
		// better to give a precise location in the compiled file than a vague
		// location in the original file.
		if (originalPosition.source !== null) {
			originalPosition.source = supportRelativeURL(sourceMap.url, originalPosition.source);
			return originalPosition;
		}
	}
	return position;
}
// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
	// Most eval() calls are in this format
	let match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
	if (match) {
		const position = mapSourcePosition({
			name: null,
			source: match[2],
			line: +match[3],
			column: +match[4] - 1
		});
		return `eval at ${match[1]} (${position.source}:${position.line}:${position.column + 1})`;
	}
	// Parse nested eval() calls using recursion
	match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
	if (match) return `eval at ${match[1]} (${mapEvalOrigin(match[2])})`;
	// Make sure we still return useful information if we didn't find anything
	return origin;
}
// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
	let fileName;
	let fileLocation = "";
	if (this.isNative()) fileLocation = "native";
	else {
		fileName = this.getScriptNameOrSourceURL();
		if (!fileName && this.isEval()) {
			fileLocation = this.getEvalOrigin();
			fileLocation += ", ";
		}
		if (fileName) fileLocation += fileName;
		else
 // Source code does not originate from a file and is not native, but we
		// can still get the source position inside the source string, e.g. in
		// an eval string.
		fileLocation += "<anonymous>";
		const lineNumber = this.getLineNumber();
		if (lineNumber != null) {
			fileLocation += `:${lineNumber}`;
			const columnNumber = this.getColumnNumber();
			if (columnNumber) fileLocation += `:${columnNumber}`;
		}
	}
	let line = "";
	const functionName = this.getFunctionName();
	let addSuffix = true;
	const isConstructor = this.isConstructor();
	const isMethodCall = !(this.isToplevel() || isConstructor);
	if (isMethodCall) {
		let typeName = this.getTypeName();
		// Fixes shim to be backward compatible with Node v0 to v4
		if (typeName === "[object Object]") typeName = "null";
		const methodName = this.getMethodName();
		if (functionName) {
			if (typeName && functionName.indexOf(typeName) !== 0) line += `${typeName}.`;
			line += functionName;
			if (methodName && functionName.indexOf(`.${methodName}`) !== functionName.length - methodName.length - 1) line += ` [as ${methodName}]`;
		} else line += `${typeName}.${methodName || "<anonymous>"}`;
	} else if (isConstructor) line += `new ${functionName || "<anonymous>"}`;
	else if (functionName) line += functionName;
	else {
		line += fileLocation;
		addSuffix = false;
	}
	if (addSuffix) line += ` (${fileLocation})`;
	return line;
}
function cloneCallSite(frame) {
	const object = {};
	Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach((name) => {
		const key = name;
		// @ts-expect-error difficult to type
		object[key] = /^(?:is|get)/.test(name) ? function() {
			// eslint-disable-next-line no-useless-call
			return frame[key].call(frame);
		} : frame[key];
	});
	object.toString = CallSiteToString;
	return object;
}
function wrapCallSite(frame, state) {
	// provides interface backward compatibility
	if (state === void 0) state = {
		nextPosition: null,
		curPosition: null
	};
	if (frame.isNative()) {
		state.curPosition = null;
		return frame;
	}
	// Most call sites will return the source file from getFileName(), but code
	// passed to eval() ending in "//# sourceURL=..." will return the source file
	// from getScriptNameOrSourceURL() instead
	const source = frame.getFileName() || frame.getScriptNameOrSourceURL();
	if (source) {
		const line = frame.getLineNumber();
		let column = frame.getColumnNumber() - 1;
		// Fix position in Node where some (internal) code is prepended.
		// See https://github.com/evanw/node-source-map-support/issues/36
		// Header removed in node at ^10.16 || >=11.11.0
		// v11 is not an LTS candidate, we can just test the one version with it.
		// Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
		const noHeader = /^v(?:10\.1[6-9]|10\.[2-9]\d|10\.\d{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
		const headerLength = noHeader.test(globalProcessVersion()) ? 0 : 62;
		if (line === 1 && column > headerLength && !frame.isEval()) column -= headerLength;
		const position = mapSourcePosition({
			name: null,
			source,
			line,
			column
		});
		state.curPosition = position;
		frame = cloneCallSite(frame);
		const originalFunctionName = frame.getFunctionName;
		frame.getFunctionName = function() {
			if (state.nextPosition == null) return originalFunctionName();
			return state.nextPosition.name || originalFunctionName();
		};
		frame.getFileName = function() {
			return position.source ?? null;
		};
		frame.getLineNumber = function() {
			return position.line;
		};
		frame.getColumnNumber = function() {
			return position.column + 1;
		};
		frame.getScriptNameOrSourceURL = function() {
			return position.source;
		};
		return frame;
	}
	// Code called using eval() needs special handling
	let origin = frame.isEval() && frame.getEvalOrigin();
	if (origin) {
		origin = mapEvalOrigin(origin);
		frame = cloneCallSite(frame);
		frame.getEvalOrigin = function() {
			return origin || void 0;
		};
		return frame;
	}
	// If we get here then we were unable to change the source position
	return frame;
}
// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
	const name = error.name || "Error";
	const message = error.message || "";
	const errorString = `${name}: ${message}`;
	const state = {
		nextPosition: null,
		curPosition: null
	};
	const processedStack = [];
	for (let i = stack.length - 1; i >= 0; i--) {
		processedStack.push(`\n    at ${wrapCallSite(stack[i], state)}`);
		state.nextPosition = state.curPosition;
	}
	state.curPosition = state.nextPosition = null;
	return errorString + processedStack.reverse().join("");
}
retrieveFileHandlers.slice(0);
retrieveMapHandlers.slice(0);
function install(options) {
	options = options || {};
	// Allow sources to be found by methods other than reading the files
	// directly from disk.
	if (options.retrieveFile) {
		if (options.overrideRetrieveFile) retrieveFileHandlers.length = 0;
		retrieveFileHandlers.unshift(options.retrieveFile);
	}
	// Allow source maps to be found by methods other than reading the files
	// directly from disk.
	if (options.retrieveSourceMap) {
		if (options.overrideRetrieveSourceMap) retrieveMapHandlers.length = 0;
		retrieveMapHandlers.unshift(options.retrieveSourceMap);
	}
	// Install the error reformatter
	if (!errorFormatterInstalled) {
		errorFormatterInstalled = true;
		Error.prepareStackTrace = prepareStackTrace;
	}
}

let SOURCEMAPPING_URL = "sourceMa";
SOURCEMAPPING_URL += "ppingURL";
const VITE_NODE_SOURCEMAPPING_SOURCE = "//# sourceMappingSource=vite-node";
const VITE_NODE_SOURCEMAPPING_URL = `${SOURCEMAPPING_URL}=data:application/json;charset=utf-8`;
function withInlineSourcemap(result, options) {
	const map = result.map;
	let code = result.code;
	if (!map || code.includes(VITE_NODE_SOURCEMAPPING_SOURCE)) return result;
	if ("sources" in map) {
		var _map$sources;
		map.sources = (_map$sources = map.sources) === null || _map$sources === void 0 ? void 0 : _map$sources.map((source) => {
			if (!source) return source;
			// sometimes files here are absolute,
			// but they are considered absolute to the server url, not the file system
			// this is a bug in Vite
			// all files should be either absolute to the file system or relative to the source map file
			if (pathe.isAbsolute(source)) {
				const actualPath = !source.startsWith(utils.withTrailingSlash(options.root)) && source.startsWith("/") ? pathe.resolve(options.root, source.slice(1)) : source;
				return pathe.relative(pathe.dirname(options.filepath), actualPath);
			}
			return source;
		});
	}
	// to reduce the payload size, we only inline vite node source map, because it's also the only one we use
	const OTHER_SOURCE_MAP_REGEXP = new RegExp(`//# ${SOURCEMAPPING_URL}=data:application/json[^,]+base64,([A-Za-z0-9+/=]+)$`, "gm");
	while (OTHER_SOURCE_MAP_REGEXP.test(code)) code = code.replace(OTHER_SOURCE_MAP_REGEXP, "");
	// If the first line is not present on source maps, add simple 1:1 mapping ([0,0,0,0], [1,0,0,0])
	// so that debuggers can be set to break on first line
	// Since Vite 6, import statements at the top of the file are preserved correctly,
	// so we don't need to add this mapping anymore.
	if (!options.noFirstLineMapping && map.mappings.startsWith(";")) map.mappings = `AAAA,CAAA${map.mappings}`;
	const sourceMap = Buffer.from(JSON.stringify(map), "utf-8").toString("base64");
	result.code = `${code.trimEnd()}\n\n${VITE_NODE_SOURCEMAPPING_SOURCE}\n//# ${VITE_NODE_SOURCEMAPPING_URL};base64,${sourceMap}\n`;
	return result;
}
function extractSourceMap(code) {
	const regexp = new RegExp(`//# ${VITE_NODE_SOURCEMAPPING_URL};base64,(.+)`, "gm");
	let lastMatch, match;
	// eslint-disable-next-line no-cond-assign
	while (match = regexp.exec(code)) lastMatch = match;
	// pick only the last source map keeping user strings that look like maps
	if (lastMatch) return JSON.parse(Buffer.from(lastMatch[1], "base64").toString("utf-8"));
	return null;
}
function installSourcemapsSupport(options) {
	install({ retrieveSourceMap(source) {
		const map = options.getSourceMap(source);
		if (map) return {
			url: source,
			map
		};
		return null;
	} });
}

exports.extractSourceMap = extractSourceMap;
exports.installSourcemapsSupport = installSourcemapsSupport;
exports.withInlineSourcemap = withInlineSourcemap;
