// src/source-map.ts
import {
  AnyMap,
  originalPositionFor,
  generatedPositionFor,
  allGeneratedPositionsFor,
  eachMapping,
  encodedMappings,
  sourceContentFor
} from "@jridgewell/trace-mapping";
import {
  GenMapping,
  maybeAddMapping,
  toDecodedMap,
  toEncodedMap,
  setSourceContent,
  fromMap
} from "@jridgewell/gen-mapping";
var SourceMapConsumer = class _SourceMapConsumer {
  constructor(map, mapUrl) {
    const trace = this._map = new AnyMap(map, mapUrl);
    this.file = trace.file;
    this.names = trace.names;
    this.sourceRoot = trace.sourceRoot;
    this.sources = trace.resolvedSources;
    this.sourcesContent = trace.sourcesContent;
    this.version = trace.version;
  }
  static fromSourceMap(map, mapUrl) {
    if (map.toDecodedMap) {
      return new _SourceMapConsumer(map.toDecodedMap(), mapUrl);
    }
    return new _SourceMapConsumer(map.toJSON(), mapUrl);
  }
  get mappings() {
    return encodedMappings(this._map);
  }
  originalPositionFor(needle) {
    return originalPositionFor(this._map, needle);
  }
  generatedPositionFor(originalPosition) {
    return generatedPositionFor(this._map, originalPosition);
  }
  allGeneratedPositionsFor(originalPosition) {
    return allGeneratedPositionsFor(this._map, originalPosition);
  }
  hasContentsOfAllSources() {
    if (!this.sourcesContent || this.sourcesContent.length !== this.sources.length) {
      return false;
    }
    for (const content of this.sourcesContent) {
      if (content == null) {
        return false;
      }
    }
    return true;
  }
  sourceContentFor(source, nullOnMissing) {
    const sourceContent = sourceContentFor(this._map, source);
    if (sourceContent != null) {
      return sourceContent;
    }
    if (nullOnMissing) {
      return null;
    }
    throw new Error(`"${source}" is not in the SourceMap.`);
  }
  eachMapping(callback, context) {
    eachMapping(this._map, context ? callback.bind(context) : callback);
  }
  destroy() {
  }
};
var SourceMapGenerator = class _SourceMapGenerator {
  constructor(opts) {
    this._map = opts instanceof GenMapping ? opts : new GenMapping(opts);
  }
  static fromSourceMap(consumer) {
    return new _SourceMapGenerator(fromMap(consumer));
  }
  addMapping(mapping) {
    maybeAddMapping(this._map, mapping);
  }
  setSourceContent(source, content) {
    setSourceContent(this._map, source, content);
  }
  toJSON() {
    return toEncodedMap(this._map);
  }
  toString() {
    return JSON.stringify(this.toJSON());
  }
  toDecodedMap() {
    return toDecodedMap(this._map);
  }
};
export {
  SourceMapConsumer,
  SourceMapGenerator
};
//# sourceMappingURL=source-map.mjs.map
