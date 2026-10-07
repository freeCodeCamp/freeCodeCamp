(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    factory(module, require('@jridgewell/sourcemap-codec'), require('@jridgewell/trace-mapping'));
    module.exports = def(module);
  } else if (typeof define === 'function' && define.amd) {
    define(['module', '@jridgewell/sourcemap-codec', '@jridgewell/trace-mapping'], function(mod) {
      factory.apply(this, arguments);
      mod.exports = def(mod);
    });
  } else {
    const mod = { exports: {} };
    factory(mod, global.sourcemapCodec, global.traceMapping);
    global = typeof globalThis !== 'undefined' ? globalThis : global || self;
    global.genMapping = def(mod);
  }
  function def(m) { return 'default' in m.exports ? m.exports.default : m.exports; }
})(this, (function (module, require_sourcemapCodec, require_traceMapping) {
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

// umd:@jridgewell/trace-mapping
var require_trace_mapping = __commonJS({
  "umd:@jridgewell/trace-mapping"(exports, module2) {
    module2.exports = require_traceMapping;
  }
});

// src/gen-mapping.ts
var gen_mapping_exports = {};
__export(gen_mapping_exports, {
  GenMapping: () => GenMapping,
  addMapping: () => addMapping,
  addSegment: () => addSegment,
  allMappings: () => allMappings,
  fromMap: () => fromMap,
  maybeAddMapping: () => maybeAddMapping,
  maybeAddSegment: () => maybeAddSegment,
  setIgnore: () => setIgnore,
  setSourceContent: () => setSourceContent,
  toDecodedMap: () => toDecodedMap,
  toEncodedMap: () => toEncodedMap
});
module.exports = __toCommonJS(gen_mapping_exports);

// src/set-array.ts
var SetArray = class {
  constructor() {
    this._indexes = { __proto__: null };
    this.array = [];
  }
};
function cast(set) {
  return set;
}
function get(setarr, key) {
  return cast(setarr)._indexes[key];
}
function put(setarr, key) {
  const index = get(setarr, key);
  if (index !== void 0) return index;
  const { array, _indexes: indexes } = cast(setarr);
  const length = array.push(key);
  return indexes[key] = length - 1;
}
function remove(setarr, key) {
  const index = get(setarr, key);
  if (index === void 0) return;
  const { array, _indexes: indexes } = cast(setarr);
  for (let i = index + 1; i < array.length; i++) {
    const k = array[i];
    array[i - 1] = k;
    indexes[k]--;
  }
  indexes[key] = void 0;
  array.pop();
}

// src/gen-mapping.ts
var import_sourcemap_codec = __toESM(require_sourcemap_codec());
var import_trace_mapping = __toESM(require_trace_mapping());

// src/sourcemap-segment.ts
var COLUMN = 0;
var SOURCES_INDEX = 1;
var SOURCE_LINE = 2;
var SOURCE_COLUMN = 3;
var NAMES_INDEX = 4;

// src/gen-mapping.ts
var NO_NAME = -1;
var GenMapping = class {
  constructor({ file, sourceRoot } = {}) {
    this._names = new SetArray();
    this._sources = new SetArray();
    this._sourcesContent = [];
    this._mappings = [];
    this.file = file;
    this.sourceRoot = sourceRoot;
    this._ignoreList = new SetArray();
  }
};
function cast2(map) {
  return map;
}
function addSegment(map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
  return addSegmentInternal(
    false,
    map,
    genLine,
    genColumn,
    source,
    sourceLine,
    sourceColumn,
    name,
    content
  );
}
function addMapping(map, mapping) {
  return addMappingInternal(false, map, mapping);
}
var maybeAddSegment = (map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) => {
  return addSegmentInternal(
    true,
    map,
    genLine,
    genColumn,
    source,
    sourceLine,
    sourceColumn,
    name,
    content
  );
};
var maybeAddMapping = (map, mapping) => {
  return addMappingInternal(true, map, mapping);
};
function setSourceContent(map, source, content) {
  const {
    _sources: sources,
    _sourcesContent: sourcesContent
    // _originalScopes: originalScopes,
  } = cast2(map);
  const index = put(sources, source);
  sourcesContent[index] = content;
}
function setIgnore(map, source, ignore = true) {
  const {
    _sources: sources,
    _sourcesContent: sourcesContent,
    _ignoreList: ignoreList
    // _originalScopes: originalScopes,
  } = cast2(map);
  const index = put(sources, source);
  if (index === sourcesContent.length) sourcesContent[index] = null;
  if (ignore) put(ignoreList, index);
  else remove(ignoreList, index);
}
function toDecodedMap(map) {
  const {
    _mappings: mappings,
    _sources: sources,
    _sourcesContent: sourcesContent,
    _names: names,
    _ignoreList: ignoreList
    // _originalScopes: originalScopes,
    // _generatedRanges: generatedRanges,
  } = cast2(map);
  removeEmptyFinalLines(mappings);
  return {
    version: 3,
    file: map.file || void 0,
    names: names.array,
    sourceRoot: map.sourceRoot || void 0,
    sources: sources.array,
    sourcesContent,
    mappings,
    // originalScopes,
    // generatedRanges,
    ignoreList: ignoreList.array
  };
}
function toEncodedMap(map) {
  const decoded = toDecodedMap(map);
  return Object.assign({}, decoded, {
    // originalScopes: decoded.originalScopes.map((os) => encodeOriginalScopes(os)),
    // generatedRanges: encodeGeneratedRanges(decoded.generatedRanges as GeneratedRange[]),
    mappings: (0, import_sourcemap_codec.encode)(decoded.mappings)
  });
}
function fromMap(input) {
  const map = new import_trace_mapping.TraceMap(input);
  const gen = new GenMapping({ file: map.file, sourceRoot: map.sourceRoot });
  putAll(cast2(gen)._names, map.names);
  putAll(cast2(gen)._sources, map.sources);
  cast2(gen)._sourcesContent = map.sourcesContent || map.sources.map(() => null);
  cast2(gen)._mappings = (0, import_trace_mapping.decodedMappings)(map);
  if (map.ignoreList) putAll(cast2(gen)._ignoreList, map.ignoreList);
  return gen;
}
function allMappings(map) {
  const out = [];
  const { _mappings: mappings, _sources: sources, _names: names } = cast2(map);
  for (let i = 0; i < mappings.length; i++) {
    const line = mappings[i];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];
      const generated = { line: i + 1, column: seg[COLUMN] };
      let source = void 0;
      let original = void 0;
      let name = void 0;
      if (seg.length !== 1) {
        source = sources.array[seg[SOURCES_INDEX]];
        original = { line: seg[SOURCE_LINE] + 1, column: seg[SOURCE_COLUMN] };
        if (seg.length === 5) name = names.array[seg[NAMES_INDEX]];
      }
      out.push({ generated, source, original, name });
    }
  }
  return out;
}
function addSegmentInternal(skipable, map, genLine, genColumn, source, sourceLine, sourceColumn, name, content) {
  const {
    _mappings: mappings,
    _sources: sources,
    _sourcesContent: sourcesContent,
    _names: names
    // _originalScopes: originalScopes,
  } = cast2(map);
  const line = getIndex(mappings, genLine);
  const index = getColumnIndex(line, genColumn);
  if (!source) {
    if (skipable && skipSourceless(line, index)) return;
    return insert(line, index, [genColumn]);
  }
  assert(sourceLine);
  assert(sourceColumn);
  const sourcesIndex = put(sources, source);
  const namesIndex = name ? put(names, name) : NO_NAME;
  if (sourcesIndex === sourcesContent.length) sourcesContent[sourcesIndex] = content != null ? content : null;
  if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
    return;
  }
  return insert(
    line,
    index,
    name ? [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex] : [genColumn, sourcesIndex, sourceLine, sourceColumn]
  );
}
function assert(_val) {
}
function getIndex(arr, index) {
  for (let i = arr.length; i <= index; i++) {
    arr[i] = [];
  }
  return arr[index];
}
function getColumnIndex(line, genColumn) {
  let index = line.length;
  for (let i = index - 1; i >= 0; index = i--) {
    const current = line[i];
    if (genColumn >= current[COLUMN]) break;
  }
  return index;
}
function insert(array, index, value) {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
}
function removeEmptyFinalLines(mappings) {
  const { length } = mappings;
  let len = length;
  for (let i = len - 1; i >= 0; len = i, i--) {
    if (mappings[i].length > 0) break;
  }
  if (len < length) mappings.length = len;
}
function putAll(setarr, array) {
  for (let i = 0; i < array.length; i++) put(setarr, array[i]);
}
function skipSourceless(line, index) {
  if (index === 0) return true;
  const prev = line[index - 1];
  return prev.length === 1;
}
function skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex) {
  if (index === 0) return false;
  const prev = line[index - 1];
  if (prev.length === 1) return false;
  return sourcesIndex === prev[SOURCES_INDEX] && sourceLine === prev[SOURCE_LINE] && sourceColumn === prev[SOURCE_COLUMN] && namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME);
}
function addMappingInternal(skipable, map, mapping) {
  const { generated, source, original, name, content } = mapping;
  if (!source) {
    return addSegmentInternal(
      skipable,
      map,
      generated.line - 1,
      generated.column,
      null,
      null,
      null,
      null,
      null
    );
  }
  assert(original);
  return addSegmentInternal(
    skipable,
    map,
    generated.line - 1,
    generated.column,
    source,
    original.line - 1,
    original.column,
    name,
    content
  );
}
}));
//# sourceMappingURL=gen-mapping.umd.js.map
