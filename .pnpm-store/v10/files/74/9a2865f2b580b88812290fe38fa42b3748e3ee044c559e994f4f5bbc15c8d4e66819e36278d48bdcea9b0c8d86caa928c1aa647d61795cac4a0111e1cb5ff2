(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    factory(module, require('@jridgewell/gen-mapping'), require('@jridgewell/trace-mapping'));
    module.exports = def(module);
  } else if (typeof define === 'function' && define.amd) {
    define(['module', '@jridgewell/gen-mapping', '@jridgewell/trace-mapping'], function(mod) {
      factory.apply(this, arguments);
      mod.exports = def(mod);
    });
  } else {
    const mod = { exports: {} };
    factory(mod, global.genMapping, global.traceMapping);
    global = typeof globalThis !== 'undefined' ? globalThis : global || self;
    global.remapping = def(mod);
  }
  function def(m) { return 'default' in m.exports ? m.exports.default : m.exports; }
})(this, (function (module, require_genMapping, require_traceMapping) {
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

// umd:@jridgewell/trace-mapping
var require_trace_mapping = __commonJS({
  "umd:@jridgewell/trace-mapping"(exports, module2) {
    module2.exports = require_traceMapping;
  }
});

// umd:@jridgewell/gen-mapping
var require_gen_mapping = __commonJS({
  "umd:@jridgewell/gen-mapping"(exports, module2) {
    module2.exports = require_genMapping;
  }
});

// src/remapping.ts
var remapping_exports = {};
__export(remapping_exports, {
  default: () => remapping
});
module.exports = __toCommonJS(remapping_exports);

// src/build-source-map-tree.ts
var import_trace_mapping2 = __toESM(require_trace_mapping());

// src/source-map-tree.ts
var import_gen_mapping = __toESM(require_gen_mapping());
var import_trace_mapping = __toESM(require_trace_mapping());
var SOURCELESS_MAPPING = /* @__PURE__ */ SegmentObject("", -1, -1, "", null, false);
var EMPTY_SOURCES = [];
function SegmentObject(source, line, column, name, content, ignore) {
  return { source, line, column, name, content, ignore };
}
function Source(map, sources, source, content, ignore) {
  return {
    map,
    sources,
    source,
    content,
    ignore
  };
}
function MapSource(map, sources) {
  return Source(map, sources, "", null, false);
}
function OriginalSource(source, content, ignore) {
  return Source(null, EMPTY_SOURCES, source, content, ignore);
}
function traceMappings(tree) {
  const gen = new import_gen_mapping.GenMapping({ file: tree.map.file });
  const { sources: rootSources, map } = tree;
  const rootNames = map.names;
  const rootMappings = (0, import_trace_mapping.decodedMappings)(map);
  for (let i = 0; i < rootMappings.length; i++) {
    const segments = rootMappings[i];
    for (let j = 0; j < segments.length; j++) {
      const segment = segments[j];
      const genCol = segment[0];
      let traced = SOURCELESS_MAPPING;
      if (segment.length !== 1) {
        const source2 = rootSources[segment[1]];
        traced = originalPositionFor(
          source2,
          segment[2],
          segment[3],
          segment.length === 5 ? rootNames[segment[4]] : ""
        );
        if (traced == null) continue;
      }
      const { column, line, name, content, source, ignore } = traced;
      (0, import_gen_mapping.maybeAddSegment)(gen, i, genCol, source, line, column, name);
      if (source && content != null) (0, import_gen_mapping.setSourceContent)(gen, source, content);
      if (ignore) (0, import_gen_mapping.setIgnore)(gen, source, true);
    }
  }
  return gen;
}
function originalPositionFor(source, line, column, name) {
  if (!source.map) {
    return SegmentObject(source.source, line, column, name, source.content, source.ignore);
  }
  const segment = (0, import_trace_mapping.traceSegment)(source.map, line, column);
  if (segment == null) return null;
  if (segment.length === 1) return SOURCELESS_MAPPING;
  return originalPositionFor(
    source.sources[segment[1]],
    segment[2],
    segment[3],
    segment.length === 5 ? source.map.names[segment[4]] : name
  );
}

// src/build-source-map-tree.ts
function asArray(value) {
  if (Array.isArray(value)) return value;
  return [value];
}
function buildSourceMapTree(input, loader) {
  const maps = asArray(input).map((m) => new import_trace_mapping2.TraceMap(m, ""));
  const map = maps.pop();
  for (let i = 0; i < maps.length; i++) {
    if (maps[i].sources.length > 1) {
      throw new Error(
        `Transformation map ${i} must have exactly one source file.
Did you specify these with the most recent transformation maps first?`
      );
    }
  }
  let tree = build(map, loader, "", 0);
  for (let i = maps.length - 1; i >= 0; i--) {
    tree = MapSource(maps[i], [tree]);
  }
  return tree;
}
function build(map, loader, importer, importerDepth) {
  const { resolvedSources, sourcesContent, ignoreList } = map;
  const depth = importerDepth + 1;
  const children = resolvedSources.map((sourceFile, i) => {
    const ctx = {
      importer,
      depth,
      source: sourceFile || "",
      content: void 0,
      ignore: void 0
    };
    const sourceMap = loader(ctx.source, ctx);
    const { source, content, ignore } = ctx;
    if (sourceMap) return build(new import_trace_mapping2.TraceMap(sourceMap, source), loader, source, depth);
    const sourceContent = content !== void 0 ? content : sourcesContent ? sourcesContent[i] : null;
    const ignored = ignore !== void 0 ? ignore : ignoreList ? ignoreList.includes(i) : false;
    return OriginalSource(source, sourceContent, ignored);
  });
  return MapSource(map, children);
}

// src/source-map.ts
var import_gen_mapping2 = __toESM(require_gen_mapping());
var SourceMap = class {
  constructor(map, options) {
    const out = options.decodedMappings ? (0, import_gen_mapping2.toDecodedMap)(map) : (0, import_gen_mapping2.toEncodedMap)(map);
    this.version = out.version;
    this.file = out.file;
    this.mappings = out.mappings;
    this.names = out.names;
    this.ignoreList = out.ignoreList;
    this.sourceRoot = out.sourceRoot;
    this.sources = out.sources;
    if (!options.excludeContent) {
      this.sourcesContent = out.sourcesContent;
    }
  }
  toString() {
    return JSON.stringify(this);
  }
};

// src/remapping.ts
function remapping(input, loader, options) {
  const opts = typeof options === "object" ? options : { excludeContent: !!options, decodedMappings: false };
  const tree = buildSourceMapTree(input, loader);
  return new SourceMap(traceMappings(tree), opts);
}
}));
//# sourceMappingURL=remapping.umd.js.map
