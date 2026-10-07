import { toDecodedMap, toEncodedMap } from '@jridgewell/gen-mapping';

import type { GenMapping } from '@jridgewell/gen-mapping';
import type { DecodedSourceMap, EncodedSourceMap, Options } from './types';

/**
 * A SourceMap v3 compatible sourcemap, which only includes fields that were
 * provided to it.
 */
export default class SourceMap {
  declare file?: string | null;
  declare mappings: EncodedSourceMap['mappings'] | DecodedSourceMap['mappings'];
  declare sourceRoot?: string;
  declare names: string[];
  declare sources: (string | null)[];
  declare sourcesContent?: (string | null)[];
  declare version: 3;
  declare ignoreList: number[] | undefined;

  constructor(map: GenMapping, options: Options) {
    const out = options.decodedMappings ? toDecodedMap(map) : toEncodedMap(map);
    this.version = out.version; // SourceMap spec says this should be first.
    this.file = out.file;
    this.mappings = out.mappings as SourceMap['mappings'];
    this.names = out.names as SourceMap['names'];
    this.ignoreList = out.ignoreList as SourceMap['ignoreList'];
    this.sourceRoot = out.sourceRoot;

    this.sources = out.sources as SourceMap['sources'];
    if (!options.excludeContent) {
      this.sourcesContent = out.sourcesContent as SourceMap['sourcesContent'];
    }
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
