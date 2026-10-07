(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    factory(module, require('@jridgewell/resolve-uri'), require('@jridgewell/sourcemap-codec'));
    module.exports = def(module);
  } else if (typeof define === 'function' && define.amd) {
    define(['module', '@jridgewell/resolve-uri', '@jridgewell/sourcemap-codec'], function(mod) {
      factory.apply(this, arguments);
      mod.exports = def(mod);
    });
  } else {
    const mod = { exports: {} };
    factory(mod, global.resolveURI, global.sourcemapCodec);
    global = typeof globalThis !== 'undefined' ? globalThis : global || self;
    global.traceMapping = def(mod);
  }
  function def(m) { return 'default' in m.exports ? m.exports.default : m.exports; }
})(this, (function (module, require_resolveURI, require_sourcemapCodec) {
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// umd:@jridgewell/sourcemap-codec
var require_sourcemap_codec = __commonJS({
  "umd:@jridgewell/sourcemap-codec"(exports, module2) {
    module2.exports = require_sourcemapCodec;
  }
});

// umd:@jridgewell/resolve-uri
var require_resolve_uri = __commonJS({
  "umd:@jridgewell/resolve-uri"(exports, module2) {
    module2.exports = require_resolveURI;
  }
});

// src/trace-mapping.ts
var trace_mapping_exports = {};
__export(trace_mapping_exports, {
  AnyMap: () => FlattenMap,
  FlattenMap: () => FlattenMap,
  GREATEST_LOWER_BOUND: () => GREATEST_LOWER_BOUND,
  LEAST_UPPER_BOUND: () => LEAST_UPPER_BOUND,
  TraceMap: () => TraceMap,
  allGeneratedPositionsFor: () => allGeneratedPositionsFor,
  decodedMap: () => decodedMap,
  decodedMappings: () => decodedMappings,
  eachMapping: () => eachMapping,
  encodedMap: () => encodedMap,
  encodedMappings: () => encodedMappings,
  generatedPositionFor: () => generatedPositionFor,
  isIgnored: () => isIgnored,
  originalPositionFor: () => originalPositionFor,
  presortedDecodedMap: () => presortedDecodedMap,
  sourceContentFor: () => sourceContentFor,
  traceSegment: () => traceSegment
});
module.exports = __toCommonJS(trace_mapping_exports);
var import_sourcemap_codec = __toESM(require_sourcemap_codec());

// src/resolve.ts
var import_resolve_uri = __toESM(require_resolve_uri());

// src/strip-filename.ts
function stripFilename(path) {
  if (!path) return "";
  const index = path.lastIndexOf("/");
  return path.slice(0, index + 1);
}

// src/resolve.ts
function resolver(mapUrl, sourceRoot) {
  const from = stripFilename(mapUrl);
  const prefix = sourceRoot ? sourceRoot + "/" : "";
  return (source) => (0, import_resolve_uri.default)(prefix + (source || ""), from);
}

// src/sourcemap-segment.ts
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;
var REV_GENERATED_LINE = 1;
var REV_GENERATED_COLUMN = 2;

// src/sort.ts
function maybeSort(mappings, owned) {
  const unsortedIndex = nextUnsortedSegmentLine(mappings, 0);
  if (unsortedIndex === mappings.length) return mappings;
  if (!owned) mappings = mappings.slice();
  for (let i = unsortedIndex; i < mappings.length; i = nextUnsortedSegmentLine(mappings, i + 1)) {
    mappings[i] = sortSegments(mappings[i], owned);
  }
  return mappings;
}
function nextUnsortedSegmentLine(mappings, start) {
  for (let i = start; i < mappings.length; i++) {
    if (!isSorted(mappings[i])) return i;
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
  if (!owned) line = line.slice();
  return line.sort(sortComparator);
}
function sortComparator(a, b) {
  return a[COLUMN] - b[COLUMN];
}

// src/by-source.ts
function buildBySources(decoded, memos) {
  const sources = memos.map(() => []);
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];
      if (seg.length === 1) continue;
      const sourceIndex2 = seg[SOURCES_INDEX];
      const sourceLine = seg[SOURCE_LINE];
      const sourceColumn = seg[SOURCE_COLUMN];
      const source = sources[sourceIndex2];
      const segs = source[sourceLine] || (source[sourceLine] = []);
      segs.push([sourceColumn, i, seg[COLUMN]]);
    }
  }
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    for (let j = 0; j < source.length; j++) {
      const line = source[j];
      if (line) line.sort(sortComparator);
    }
  }
  return sources;
}

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
function memoizedState() {
  return {
    lastKey: -1,
    lastNeedle: -1,
    lastIndex: -1
  };
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

// src/types.ts
function parse(map) {
  return typeof map === "string" ? JSON.parse(map) : map;
}

// src/flatten-map.ts
var FlattenMap = function(map, mapUrl) {
  const parsed = parse(map);
  if (!("sections" in parsed)) {
    return new TraceMap(parsed, mapUrl);
  }
  const mappings = [];
  const sources = [];
  const sourcesContent = [];
  const names = [];
  const ignoreList = [];
  recurse(
    parsed,
    mapUrl,
    mappings,
    sources,
    sourcesContent,
    names,
    ignoreList,
    0,
    0,
    Infinity,
    Infinity
  );
  const joined = {
    version: 3,
    file: parsed.file,
    names,
    sources,
    sourcesContent,
    mappings,
    ignoreList
  };
  return presortedDecodedMap(joined);
};
function recurse(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
  const { sections } = input;
  for (let i = 0; i < sections.length; i++) {
    const { map, offset } = sections[i];
    let sl = stopLine;
    let sc = stopColumn;
    if (i + 1 < sections.length) {
      const nextOffset = sections[i + 1].offset;
      sl = Math.min(stopLine, lineOffset + nextOffset.line);
      if (sl === stopLine) {
        sc = Math.min(stopColumn, columnOffset + nextOffset.column);
      } else if (sl < stopLine) {
        sc = columnOffset + nextOffset.column;
      }
    }
    addSection(
      map,
      mapUrl,
      mappings,
      sources,
      sourcesContent,
      names,
      ignoreList,
      lineOffset + offset.line,
      columnOffset + offset.column,
      sl,
      sc
    );
  }
}
function addSection(input, mapUrl, mappings, sources, sourcesContent, names, ignoreList, lineOffset, columnOffset, stopLine, stopColumn) {
  const parsed = parse(input);
  if ("sections" in parsed) return recurse(...arguments);
  const map = new TraceMap(parsed, mapUrl);
  const sourcesOffset = sources.length;
  const namesOffset = names.length;
  const decoded = decodedMappings(map);
  const { resolvedSources, sourcesContent: contents, ignoreList: ignores } = map;
  append(sources, resolvedSources);
  append(names, map.names);
  if (contents) append(sourcesContent, contents);
  else for (let i = 0; i < resolvedSources.length; i++) sourcesContent.push(null);
  if (ignores) for (let i = 0; i < ignores.length; i++) ignoreList.push(ignores[i] + sourcesOffset);
  for (let i = 0; i < decoded.length; i++) {
    const lineI = lineOffset + i;
    if (lineI > stopLine) return;
    const out = getLine(mappings, lineI);
    const cOffset = i === 0 ? columnOffset : 0;
    const line = decoded[i];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];
      const column = cOffset + seg[COLUMN];
      if (lineI === stopLine && column >= stopColumn) return;
      if (seg.length === 1) {
        out.push([column]);
        continue;
      }
      const sourcesIndex = sourcesOffset + seg[SOURCES_INDEX];
      const sourceLine = seg[SOURCE_LINE];
      const sourceColumn = seg[SOURCE_COLUMN];
      out.push(
        seg.length === 4 ? [column, sourcesIndex, sourceLine, sourceColumn] : [column, sourcesIndex, sourceLine, sourceColumn, namesOffset + seg[NAMES_INDEX]]
      );
    }
  }
}
function append(arr, other) {
  for (let i = 0; i < other.length; i++) arr.push(other[i]);
}
function getLine(arr, index) {
  for (let i = arr.length; i <= index; i++) arr[i] = [];
  return arr[index];
}

// src/trace-mapping.ts
var LINE_GTR_ZERO = "`line` must be greater than 0 (lines start at line 1)";
var COL_GTR_EQ_ZERO = "`column` must be greater than or equal to 0 (columns start at column 0)";
var LEAST_UPPER_BOUND = -1;
var GREATEST_LOWER_BOUND = 1;
var TraceMap = class {
  constructor(map, mapUrl) {
    const isString = typeof map === "string";
    if (!isString && map._decodedMemo) return map;
    const parsed = parse(map);
    const { version, file, names, sourceRoot, sources, sourcesContent } = parsed;
    this.version = version;
    this.file = file;
    this.names = names || [];
    this.sourceRoot = sourceRoot;
    this.sources = sources;
    this.sourcesContent = sourcesContent;
    this.ignoreList = parsed.ignoreList || parsed.x_google_ignoreList || void 0;
    const resolve = resolver(mapUrl, sourceRoot);
    this.resolvedSources = sources.map(resolve);
    const { mappings } = parsed;
    if (typeof mappings === "string") {
      this._encoded = mappings;
      this._decoded = void 0;
    } else if (Array.isArray(mappings)) {
      this._encoded = void 0;
      this._decoded = maybeSort(mappings, isString);
    } else if (parsed.sections) {
      throw new Error(`TraceMap passed sectioned source map, please use FlattenMap export instead`);
    } else {
      throw new Error(`invalid source map: ${JSON.stringify(parsed)}`);
    }
    this._decodedMemo = memoizedState();
    this._bySources = void 0;
    this._bySourceMemos = void 0;
  }
};
function cast(map) {
  return map;
}
function encodedMappings(map) {
  var _a, _b;
  return (_b = (_a = cast(map))._encoded) != null ? _b : _a._encoded = (0, import_sourcemap_codec.encode)(cast(map)._decoded);
}
function decodedMappings(map) {
  var _a;
  return (_a = cast(map))._decoded || (_a._decoded = (0, import_sourcemap_codec.decode)(cast(map)._encoded));
}
function traceSegment(map, line, column) {
  const decoded = decodedMappings(map);
  if (line >= decoded.length) return null;
  const segments = decoded[line];
  const index = traceSegmentInternal(
    segments,
    cast(map)._decodedMemo,
    line,
    column,
    GREATEST_LOWER_BOUND
  );
  return index === -1 ? null : segments[index];
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
function generatedPositionFor(map, needle) {
  const { source, line, column, bias } = needle;
  return generatedPosition(map, source, line, column, bias || GREATEST_LOWER_BOUND, false);
}
function allGeneratedPositionsFor(map, needle) {
  const { source, line, column, bias } = needle;
  return generatedPosition(map, source, line, column, bias || LEAST_UPPER_BOUND, true);
}
function eachMapping(map, cb) {
  const decoded = decodedMappings(map);
  const { names, resolvedSources } = map;
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];
      const generatedLine = i + 1;
      const generatedColumn = seg[0];
      let source = null;
      let originalLine = null;
      let originalColumn = null;
      let name = null;
      if (seg.length !== 1) {
        source = resolvedSources[seg[1]];
        originalLine = seg[2] + 1;
        originalColumn = seg[3];
      }
      if (seg.length === 5) name = names[seg[4]];
      cb({
        generatedLine,
        generatedColumn,
        source,
        originalLine,
        originalColumn,
        name
      });
    }
  }
}
function sourceIndex(map, source) {
  const { sources, resolvedSources } = map;
  let index = sources.indexOf(source);
  if (index === -1) index = resolvedSources.indexOf(source);
  return index;
}
function sourceContentFor(map, source) {
  const { sourcesContent } = map;
  if (sourcesContent == null) return null;
  const index = sourceIndex(map, source);
  return index === -1 ? null : sourcesContent[index];
}
function isIgnored(map, source) {
  const { ignoreList } = map;
  if (ignoreList == null) return false;
  const index = sourceIndex(map, source);
  return index === -1 ? false : ignoreList.includes(index);
}
function presortedDecodedMap(map, mapUrl) {
  const tracer = new TraceMap(clone(map, []), mapUrl);
  cast(tracer)._decoded = map.mappings;
  return tracer;
}
function decodedMap(map) {
  return clone(map, decodedMappings(map));
}
function encodedMap(map) {
  return clone(map, encodedMappings(map));
}
function clone(map, mappings) {
  return {
    version: map.version,
    file: map.file,
    names: map.names,
    sourceRoot: map.sourceRoot,
    sources: map.sources,
    sourcesContent: map.sourcesContent,
    mappings,
    ignoreList: map.ignoreList || map.x_google_ignoreList
  };
}
function OMapping(source, line, column, name) {
  return { source, line, column, name };
}
function GMapping(line, column) {
  return { line, column };
}
function traceSegmentInternal(segments, memo, line, column, bias) {
  let index = memoizedBinarySearch(segments, column, memo, line);
  if (found) {
    index = (bias === LEAST_UPPER_BOUND ? upperBound : lowerBound)(segments, column, index);
  } else if (bias === LEAST_UPPER_BOUND) index++;
  if (index === -1 || index === segments.length) return -1;
  return index;
}
function sliceGeneratedPositions(segments, memo, line, column, bias) {
  let min = traceSegmentInternal(segments, memo, line, column, GREATEST_LOWER_BOUND);
  if (!found && bias === LEAST_UPPER_BOUND) min++;
  if (min === -1 || min === segments.length) return [];
  const matchedColumn = found ? column : segments[min][COLUMN];
  if (!found) min = lowerBound(segments, matchedColumn, min);
  const max = upperBound(segments, matchedColumn, min);
  const result = [];
  for (; min <= max; min++) {
    const segment = segments[min];
    result.push(GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]));
  }
  return result;
}
function generatedPosition(map, source, line, column, bias, all) {
  var _a, _b;
  line--;
  if (line < 0) throw new Error(LINE_GTR_ZERO);
  if (column < 0) throw new Error(COL_GTR_EQ_ZERO);
  const { sources, resolvedSources } = map;
  let sourceIndex2 = sources.indexOf(source);
  if (sourceIndex2 === -1) sourceIndex2 = resolvedSources.indexOf(source);
  if (sourceIndex2 === -1) return all ? [] : GMapping(null, null);
  const bySourceMemos = (_a = cast(map))._bySourceMemos || (_a._bySourceMemos = sources.map(memoizedState));
  const generated = (_b = cast(map))._bySources || (_b._bySources = buildBySources(decodedMappings(map), bySourceMemos));
  const segments = generated[sourceIndex2][line];
  if (segments == null) return all ? [] : GMapping(null, null);
  const memo = bySourceMemos[sourceIndex2];
  if (all) return sliceGeneratedPositions(segments, memo, line, column, bias);
  const index = traceSegmentInternal(segments, memo, line, column, bias);
  if (index === -1) return GMapping(null, null);
  const segment = segments[index];
  return GMapping(segment[REV_GENERATED_LINE] + 1, segment[REV_GENERATED_COLUMN]);
}
}));
//# sourceMappingURL=trace-mapping.umd.js.map
