// @flow
export type MappingPosition = {|
  line: number,
  column: number,
|};

export type IndexedMapping<T> = {
  generated: MappingPosition,
  original?: MappingPosition,
  source?: T,
  name?: T,
  ...
};

export type ParsedMap = {|
  sources: Array<string>,
  names: Array<string>,
  mappings: Array<IndexedMapping<number>>,
  sourcesContent: Array<string | null>,
|};

export type VLQMap = {
  +sources: $ReadOnlyArray<string>,
  +sourcesContent?: $ReadOnlyArray<string | null>,
  +names: $ReadOnlyArray<string>,
  +mappings: string,
  +version?: number,
  +file?: string,
  +sourceRoot?: string,
  ...
};

export type SourceMapStringifyOptions = {
  file?: string,
  sourceRoot?: string,
  inlineSources?: boolean,
  fs?: { readFile(path: string, encoding: string): Promise<string>, ... },
  format?: 'inline' | 'string' | 'object',
  /**
   * @private
   */
  rootDir?: string,
  ...
};

export type GenerateEmptyMapOptions = {
  projectRoot: string,
  sourceName: string,
  sourceContent: string,
  lineOffset?: number,
  ...
};
