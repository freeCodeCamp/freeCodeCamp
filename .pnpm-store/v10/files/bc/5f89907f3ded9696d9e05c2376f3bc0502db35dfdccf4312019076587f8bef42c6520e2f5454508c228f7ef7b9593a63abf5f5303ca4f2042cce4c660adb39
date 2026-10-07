// @flow
import type { ParsedMap, VLQMap, SourceMapStringifyOptions, IndexedMapping, GenerateEmptyMapOptions } from './types';
import path from 'path';
import SourceMap from './SourceMap';

const bindings = require('../parcel_sourcemap_node/index');

export default class NodeSourceMap extends SourceMap {
  constructor(projectRoot: string = '/', buffer?: Buffer) {
    super(projectRoot);
    this.projectRoot = projectRoot;
    this.sourceMapInstance = new bindings.SourceMap(projectRoot, buffer);
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
      JSON.stringify(sources),
      JSON.stringify(sourcesContent.map((content) => (content ? content : ''))),
      JSON.stringify(names),
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
    let previousMap = new NodeSourceMap(this.projectRoot, buffer);
    return this.addSourceMap(previousMap, lineOffset);
  }

  extends(input: Buffer | SourceMap): SourceMap {
    // $FlowFixMe
    let inputSourceMap: SourceMap = Buffer.isBuffer(input) ? new NodeSourceMap(this.projectRoot, input) : input;
    this.sourceMapInstance.extends(inputSourceMap.sourceMapInstance);
    return this;
  }

  getNames(): Array<string> {
    return JSON.parse(this.sourceMapInstance.getNames());
  }

  getSources(): Array<string> {
    return JSON.parse(this.sourceMapInstance.getSources());
  }

  delete() {}

  static generateEmptyMap({
    projectRoot,
    sourceName,
    sourceContent,
    lineOffset = 0,
  }: GenerateEmptyMapOptions): NodeSourceMap {
    let map = new NodeSourceMap(projectRoot);
    map.addEmptyMap(sourceName, sourceContent, lineOffset);
    return map;
  }
}

export const init: Promise<void> = Promise.resolve();
