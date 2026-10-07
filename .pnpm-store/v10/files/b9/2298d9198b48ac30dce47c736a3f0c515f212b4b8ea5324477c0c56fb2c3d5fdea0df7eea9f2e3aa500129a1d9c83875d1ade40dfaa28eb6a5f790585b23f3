/**
 * A position for a source mapping. 1-indexed.
 */
export type MappingPosition = {
  line: number;
  column: number;
};

/**
* An indexed source mapping block
*/
export type IndexedMapping<T> = {
  generated: MappingPosition;
  original?: MappingPosition;
  source?: T;
  name?: T;
};

/**
* A source map in VLQ format
*/
export type VLQMap = Readonly<{
  sources: ReadonlyArray<string>;
  sourcesContent?: ReadonlyArray<string | null>;
  names: ReadonlyArray<string>;
  mappings: string;
  version?: number;
  file?: string;
  sourceRoot?: string;
}>;

/**
* A parsed source map
*/
export type ParsedMap = {
  sources: string[];
  names: string[];
  mappings: Array<IndexedMapping<number>>;
  sourcesContent: Array<string | null>;
};

/**
* Options for stringifying a source map
*/
export type SourceMapStringifyOptions = {
  file?: string;
  sourceRoot?: string;
  rootDir?: string;
  inlineSources?: boolean;
  fs?: {
      readFile(path: string, encoding: string): Promise<string>;
  };
  format?: 'inline' | 'string' | 'object';
};

/**
 * Options for creating an empty source map
 */
export type GenerateEmptyMapOptions = {
  projectRoot: string;
  sourceName: string;
  sourceContent: string;
  lineOffset?: number;
};

/**
* A source map to assist in debugging during development
*/
export default class SourceMap {
  constructor(projectRoot?: string, buffer?: Buffer);
  static generateEmptyMap(opts: GenerateEmptyMapOptions): SourceMap;
  addEmptyMap(sourceName: string, sourceContent: string, lineOffset?: number): SourceMap;
  addVLQMap(map: VLQMap, lineOffset?: number, columnOffset?: number): SourceMap;
  addBuffer(buffer: Buffer, lineOffset?: number): SourceMap;
  addIndexedMapping(mapping: IndexedMapping<string>, lineOffset?: number, columnOffset?: number): void;
  addIndexedMappings(mappings: Array<IndexedMapping<string>>, lineOffset?: number, columnOffset?: number): void;
  addName(name: string): number;
  addNames(names: string[]): number[];
  addSource(source: string): number;
  addSources(sources: string[]): number[];
  getSourceIndex(source: string): number;
  getSource(index: number): string;
  setSourceContent(sourceName: string, sourceContent: string): void;
  getSourceContent(sourceName: string): string;
  getNameIndex(name: string): number;
  getName(index: number): string;
  extends(buffer: Buffer): SourceMap;
  getMap(): ParsedMap;
  findClosestMapping(line: number, column: number): IndexedMapping<string> | undefined;
  offsetLines(line: number, lineOffset: number): IndexedMapping<string> | undefined;
  offsetColumns(line: number, column: number, columnOffset: number): IndexedMapping<string> | undefined;
  toBuffer(): Buffer;
  toVLQ(): VLQMap;
  delete(): void;
  stringify(options: SourceMapStringifyOptions): Promise<string | VLQMap>;
}

/**
* Only used by the wasm version, await this to ensure the wasm binary is loaded
*/
export const init: Promise<void>
