import {
  AnyMap,
  originalPositionFor,
  generatedPositionFor,
  allGeneratedPositionsFor,
  eachMapping,
  encodedMappings,
  sourceContentFor,
} from '@jridgewell/trace-mapping';
import {
  GenMapping,
  maybeAddMapping,
  toDecodedMap,
  toEncodedMap,
  setSourceContent,
  fromMap,
} from '@jridgewell/gen-mapping';

import type {
  TraceMap,
  SourceMapInput,
  SectionedSourceMapInput,
  DecodedSourceMap,
} from '@jridgewell/trace-mapping';
export type { TraceMap, SourceMapInput, SectionedSourceMapInput, DecodedSourceMap };

import type { Mapping, EncodedSourceMap } from '@jridgewell/gen-mapping';
export type { Mapping, EncodedSourceMap };

export class SourceMapConsumer {
  declare private _map: TraceMap;
  declare file: TraceMap['file'];
  declare names: TraceMap['names'];
  declare sourceRoot: TraceMap['sourceRoot'];
  declare sources: TraceMap['sources'];
  declare sourcesContent: TraceMap['sourcesContent'];
  declare version: TraceMap['version'];

  constructor(
    map: ConstructorParameters<typeof AnyMap>[0],
    mapUrl?: ConstructorParameters<typeof AnyMap>[1],
  ) {
    const trace = (this._map = new AnyMap(map, mapUrl));

    this.file = trace.file;
    this.names = trace.names;
    this.sourceRoot = trace.sourceRoot;
    this.sources = trace.resolvedSources;
    this.sourcesContent = trace.sourcesContent;
    this.version = trace.version;
  }

  static fromSourceMap(map: SourceMapGenerator, mapUrl?: Parameters<typeof AnyMap>[1]) {
    // This is more performant if we receive
    // a @jridgewell/source-map SourceMapGenerator
    if (map.toDecodedMap) {
      return new SourceMapConsumer(map.toDecodedMap() as SectionedSourceMapInput, mapUrl);
    }

    // This is a fallback for `source-map` and `source-map-js`
    return new SourceMapConsumer(map.toJSON() as SectionedSourceMapInput, mapUrl);
  }

  get mappings(): string {
    return encodedMappings(this._map);
  }

  originalPositionFor(
    needle: Parameters<typeof originalPositionFor>[1],
  ): ReturnType<typeof originalPositionFor> {
    return originalPositionFor(this._map, needle);
  }

  generatedPositionFor(
    originalPosition: Parameters<typeof generatedPositionFor>[1],
  ): ReturnType<typeof generatedPositionFor> {
    return generatedPositionFor(this._map, originalPosition);
  }

  allGeneratedPositionsFor(
    originalPosition: Parameters<typeof generatedPositionFor>[1],
  ): ReturnType<typeof generatedPositionFor>[] {
    return allGeneratedPositionsFor(this._map, originalPosition);
  }

  hasContentsOfAllSources(): boolean {
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

  sourceContentFor(source: string, nullOnMissing?: boolean): string | null {
    const sourceContent = sourceContentFor(this._map, source);
    if (sourceContent != null) {
      return sourceContent;
    }

    if (nullOnMissing) {
      return null;
    }
    throw new Error(`"${source}" is not in the SourceMap.`);
  }

  eachMapping(
    callback: Parameters<typeof eachMapping>[1],
    context?: any /*, order?: number*/,
  ): void {
    // order is ignored as @jridgewell/trace-map doesn't implement it
    eachMapping(this._map, context ? callback.bind(context) : callback);
  }

  destroy() {
    // noop.
  }
}

export class SourceMapGenerator {
  declare private _map: GenMapping;

  constructor(opts: ConstructorParameters<typeof GenMapping>[0] | GenMapping) {
    // TODO :: should this be duck-typed ?
    this._map = opts instanceof GenMapping ? opts : new GenMapping(opts);
  }

  static fromSourceMap(consumer: SourceMapConsumer) {
    return new SourceMapGenerator(fromMap(consumer));
  }

  addMapping(mapping: Parameters<typeof maybeAddMapping>[1]): ReturnType<typeof maybeAddMapping> {
    maybeAddMapping(this._map, mapping);
  }

  setSourceContent(
    source: Parameters<typeof setSourceContent>[1],
    content: Parameters<typeof setSourceContent>[2],
  ): ReturnType<typeof setSourceContent> {
    setSourceContent(this._map, source, content);
  }

  toJSON(): ReturnType<typeof toEncodedMap> {
    return toEncodedMap(this._map);
  }

  toString(): string {
    return JSON.stringify(this.toJSON());
  }

  toDecodedMap(): ReturnType<typeof toDecodedMap> {
    return toDecodedMap(this._map);
  }
}
