// @flow
import type { ParsedMap, VLQMap, SourceMapStringifyOptions, IndexedMapping, GenerateEmptyMapOptions } from './types';
import path from 'path';
import SourceMap from './SourceMap';

import * as bindings from './wasm-bindings';

export const init: Promise<void> = typeof bindings.init === 'function' ? bindings.init() : Promise.resolve();

export default class WasmSourceMap extends SourceMap {
  constructor(projectRoot: string = '/', buffer?: Buffer) {
    super(projectRoot, buffer);
    this.sourceMapInstance = new bindings.SourceMap(projectRoot, buffer);
    this.projectRoot = this.sourceMapInstance.getProjectRoot();
  }

  addVLQMap(map: VLQMap, lineOffset: number = 0, columnOffset: number = 0): SourceMap {
    let { sourcesContent, sources = [], mappings, names = [] } = map;
    if (!sourcesContent) {
      sourcesContent = sources.map(() => '');
    } else {
      sourcesContent = sourcesContent.map((content) => (content ? content : ''));
    }
    this.sourceMapInstance.addVLQMap(
      mappings,
      sources,
      sourcesContent.map((content) => (content ? content : '')),
      names,
      lineOffset,
      columnOffset
    );
    return this;
  }

  addSourceMap(sourcemap: SourceMap, lineOffset: number = 0): SourceMap {
    if (!(sourcemap.sourceMapInstance instanceof bindings.SourceMap)) {
      throw new Error('The sourcemap provided to addSourceMap is not a valid sourcemap instance');
    }

    this.sourceMapInstance.addSourceMap(sourcemap.sourceMapInstance, lineOffset);
    return this;
  }

  addBuffer(buffer: Buffer, lineOffset: number = 0): SourceMap {
    let previousMap = new WasmSourceMap(this.projectRoot, buffer);
    return this.addSourceMap(previousMap, lineOffset);
  }

  extends(input: Buffer | SourceMap): SourceMap {
    // $FlowFixMe
    let inputSourceMap: SourceMap = input instanceof Uint8Array ? new WasmSourceMap(this.projectRoot, input) : input;
    this.sourceMapInstance.extends(inputSourceMap.sourceMapInstance);
    return this;
  }

  delete() {
    this.sourceMapInstance.free();
  }

  static generateEmptyMap({
    projectRoot,
    sourceName,
    sourceContent,
    lineOffset = 0,
  }: GenerateEmptyMapOptions): WasmSourceMap {
    let map = new WasmSourceMap(projectRoot);
    map.addEmptyMap(sourceName, sourceContent, lineOffset);
    return map;
  }
}
