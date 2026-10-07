// src/build-source-map-tree.ts
import { TraceMap } from "@jridgewell/trace-mapping";

// src/source-map-tree.ts
import { GenMapping, maybeAddSegment, setIgnore, setSourceContent } from "@jridgewell/gen-mapping";
import { traceSegment, decodedMappings } from "@jridgewell/trace-mapping";
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
  const gen = new GenMapping({ file: tree.map.file });
  const { sources: rootSources, map } = tree;
  const rootNames = map.names;
  const rootMappings = decodedMappings(map);
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
      maybeAddSegment(gen, i, genCol, source, line, column, name);
      if (source && content != null) setSourceContent(gen, source, content);
      if (ignore) setIgnore(gen, source, true);
    }
  }
  return gen;
}
function originalPositionFor(source, line, column, name) {
  if (!source.map) {
    return SegmentObject(source.source, line, column, name, source.content, source.ignore);
  }
  const segment = traceSegment(source.map, line, column);
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
  const maps = asArray(input).map((m) => new TraceMap(m, ""));
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
    if (sourceMap) return build(new TraceMap(sourceMap, source), loader, source, depth);
    const sourceContent = content !== void 0 ? content : sourcesContent ? sourcesContent[i] : null;
    const ignored = ignore !== void 0 ? ignore : ignoreList ? ignoreList.includes(i) : false;
    return OriginalSource(source, sourceContent, ignored);
  });
  return MapSource(map, children);
}

// src/source-map.ts
import { toDecodedMap, toEncodedMap } from "@jridgewell/gen-mapping";
var SourceMap = class {
  constructor(map, options) {
    const out = options.decodedMappings ? toDecodedMap(map) : toEncodedMap(map);
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
export {
  remapping as default
};
//# sourceMappingURL=remapping.mjs.map
