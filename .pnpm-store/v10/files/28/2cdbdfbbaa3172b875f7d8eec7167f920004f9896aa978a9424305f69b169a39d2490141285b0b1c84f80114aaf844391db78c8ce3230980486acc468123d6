import { SetArray, put, remove } from './set-array';
import {
  encode,
  // encodeGeneratedRanges,
  // encodeOriginalScopes
} from '@jridgewell/sourcemap-codec';
import { TraceMap, decodedMappings } from '@jridgewell/trace-mapping';

import {
  COLUMN,
  SOURCES_INDEX,
  SOURCE_LINE,
  SOURCE_COLUMN,
  NAMES_INDEX,
} from './sourcemap-segment';

import type { SourceMapInput } from '@jridgewell/trace-mapping';
// import type { OriginalScope, GeneratedRange } from '@jridgewell/sourcemap-codec';
import type { SourceMapSegment } from './sourcemap-segment';
import type {
  DecodedSourceMap,
  EncodedSourceMap,
  Pos,
  Mapping,
  // BindingExpressionRange,
  // OriginalPos,
  // OriginalScopeInfo,
  // GeneratedRangeInfo,
} from './types';

export type { DecodedSourceMap, EncodedSourceMap, Mapping };

export type Options = {
  file?: string | null;
  sourceRoot?: string | null;
};

const NO_NAME = -1;

/**
 * Provides the state to generate a sourcemap.
 */
export class GenMapping {
  declare private _names: SetArray<string>;
  declare private _sources: SetArray<string>;
  declare private _sourcesContent: (string | null)[];
  declare private _mappings: SourceMapSegment[][];
  // private declare _originalScopes: OriginalScope[][];
  // private declare _generatedRanges: GeneratedRange[];
  declare private _ignoreList: SetArray<number>;
  declare file: string | null | undefined;
  declare sourceRoot: string | null | undefined;

  constructor({ file, sourceRoot }: Options = {}) {
    this._names = new SetArray();
    this._sources = new SetArray();
    this._sourcesContent = [];
    this._mappings = [];
    // this._originalScopes = [];
    // this._generatedRanges = [];
    this.file = file;
    this.sourceRoot = sourceRoot;
    this._ignoreList = new SetArray();
  }
}

interface PublicMap {
  _names: GenMapping['_names'];
  _sources: GenMapping['_sources'];
  _sourcesContent: GenMapping['_sourcesContent'];
  _mappings: GenMapping['_mappings'];
  // _originalScopes: GenMapping['_originalScopes'];
  // _generatedRanges: GenMapping['_generatedRanges'];
  _ignoreList: GenMapping['_ignoreList'];
}

/**
 * Typescript doesn't allow friend access to private fields, so this just casts the map into a type
 * with public access modifiers.
 */
function cast(map: unknown): PublicMap {
  return map as any;
}

/**
 * A low-level API to associate a generated position with an original source position. Line and
 * column here are 0-based, unlike `addMapping`.
 */
export function addSegment(
  map: GenMapping,
  genLine: number,
  genColumn: number,
  source?: null,
  sourceLine?: null,
  sourceColumn?: null,
  name?: null,
  content?: null,
): void;
export function addSegment(
  map: GenMapping,
  genLine: number,
  genColumn: number,
  source: string,
  sourceLine: number,
  sourceColumn: number,
  name?: null,
  content?: string | null,
): void;
export function addSegment(
  map: GenMapping,
  genLine: number,
  genColumn: number,
  source: string,
  sourceLine: number,
  sourceColumn: number,
  name: string,
  content?: string | null,
): void;
export function addSegment(
  map: GenMapping,
  genLine: number,
  genColumn: number,
  source?: string | null,
  sourceLine?: number | null,
  sourceColumn?: number | null,
  name?: string | null,
  content?: string | null,
): void {
  return addSegmentInternal(
    false,
    map,
    genLine,
    genColumn,
    source,
    sourceLine,
    sourceColumn,
    name,
    content,
  );
}

/**
 * A high-level API to associate a generated position with an original source position. Line is
 * 1-based, but column is 0-based, due to legacy behavior in `source-map` library.
 */
export function addMapping(
  map: GenMapping,
  mapping: {
    generated: Pos;
    source?: null;
    original?: null;
    name?: null;
    content?: null;
  },
): void;
export function addMapping(
  map: GenMapping,
  mapping: {
    generated: Pos;
    source: string;
    original: Pos;
    name?: null;
    content?: string | null;
  },
): void;
export function addMapping(
  map: GenMapping,
  mapping: {
    generated: Pos;
    source: string;
    original: Pos;
    name: string;
    content?: string | null;
  },
): void;
export function addMapping(
  map: GenMapping,
  mapping: {
    generated: Pos;
    source?: string | null;
    original?: Pos | null;
    name?: string | null;
    content?: string | null;
  },
): void {
  return addMappingInternal(false, map, mapping as Parameters<typeof addMappingInternal>[2]);
}

/**
 * Same as `addSegment`, but will only add the segment if it generates useful information in the
 * resulting map. This only works correctly if segments are added **in order**, meaning you should
 * not add a segment with a lower generated line/column than one that came before.
 */
export const maybeAddSegment: typeof addSegment = (
  map,
  genLine,
  genColumn,
  source,
  sourceLine,
  sourceColumn,
  name,
  content,
) => {
  return addSegmentInternal(
    true,
    map,
    genLine,
    genColumn,
    source,
    sourceLine,
    sourceColumn,
    name,
    content,
  );
};

/**
 * Same as `addMapping`, but will only add the mapping if it generates useful information in the
 * resulting map. This only works correctly if mappings are added **in order**, meaning you should
 * not add a mapping with a lower generated line/column than one that came before.
 */
export const maybeAddMapping: typeof addMapping = (map, mapping) => {
  return addMappingInternal(true, map, mapping as Parameters<typeof addMappingInternal>[2]);
};

/**
 * Adds/removes the content of the source file to the source map.
 */
export function setSourceContent(map: GenMapping, source: string, content: string | null): void {
  const {
    _sources: sources,
    _sourcesContent: sourcesContent,
    // _originalScopes: originalScopes,
  } = cast(map);
  const index = put(sources, source);
  sourcesContent[index] = content;
  // if (index === originalScopes.length) originalScopes[index] = [];
}

export function setIgnore(map: GenMapping, source: string, ignore = true) {
  const {
    _sources: sources,
    _sourcesContent: sourcesContent,
    _ignoreList: ignoreList,
    // _originalScopes: originalScopes,
  } = cast(map);
  const index = put(sources, source);
  if (index === sourcesContent.length) sourcesContent[index] = null;
  // if (index === originalScopes.length) originalScopes[index] = [];
  if (ignore) put(ignoreList, index);
  else remove(ignoreList, index);
}

/**
 * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
export function toDecodedMap(map: GenMapping): DecodedSourceMap {
  const {
    _mappings: mappings,
    _sources: sources,
    _sourcesContent: sourcesContent,
    _names: names,
    _ignoreList: ignoreList,
    // _originalScopes: originalScopes,
    // _generatedRanges: generatedRanges,
  } = cast(map);
  removeEmptyFinalLines(mappings);

  return {
    version: 3,
    file: map.file || undefined,
    names: names.array,
    sourceRoot: map.sourceRoot || undefined,
    sources: sources.array,
    sourcesContent,
    mappings,
    // originalScopes,
    // generatedRanges,
    ignoreList: ignoreList.array,
  };
}

/**
 * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
export function toEncodedMap(map: GenMapping): EncodedSourceMap {
  const decoded = toDecodedMap(map);
  return Object.assign({}, decoded, {
    // originalScopes: decoded.originalScopes.map((os) => encodeOriginalScopes(os)),
    // generatedRanges: encodeGeneratedRanges(decoded.generatedRanges as GeneratedRange[]),
    mappings: encode(decoded.mappings as SourceMapSegment[][]),
  });
}

/**
 * Constructs a new GenMapping, using the already present mappings of the input.
 */
export function fromMap(input: SourceMapInput): GenMapping {
  const map = new TraceMap(input);
  const gen = new GenMapping({ file: map.file, sourceRoot: map.sourceRoot });

  putAll(cast(gen)._names, map.names);
  putAll(cast(gen)._sources, map.sources as string[]);
  cast(gen)._sourcesContent = map.sourcesContent || map.sources.map(() => null);
  cast(gen)._mappings = decodedMappings(map) as GenMapping['_mappings'];
  // TODO: implement originalScopes/generatedRanges
  if (map.ignoreList) putAll(cast(gen)._ignoreList, map.ignoreList);

  return gen;
}

/**
 * Returns an array of high-level mapping objects for every recorded segment, which could then be
 * passed to the `source-map` library.
 */
export function allMappings(map: GenMapping): Mapping[] {
  const out: Mapping[] = [];
  const { _mappings: mappings, _sources: sources, _names: names } = cast(map);

  for (let i = 0; i < mappings.length; i++) {
    const line = mappings[i];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];

      const generated = { line: i + 1, column: seg[COLUMN] };
      let source: string | undefined = undefined;
      let original: Pos | undefined = undefined;
      let name: string | undefined = undefined;

      if (seg.length !== 1) {
        source = sources.array[seg[SOURCES_INDEX]];
        original = { line: seg[SOURCE_LINE] + 1, column: seg[SOURCE_COLUMN] };

        if (seg.length === 5) name = names.array[seg[NAMES_INDEX]];
      }

      out.push({ generated, source, original, name } as Mapping);
    }
  }

  return out;
}

// This split declaration is only so that terser can elminiate the static initialization block.
function addSegmentInternal<S extends string | null | undefined>(
  skipable: boolean,
  map: GenMapping,
  genLine: number,
  genColumn: number,
  source: S,
  sourceLine: S extends string ? number : null | undefined,
  sourceColumn: S extends string ? number : null | undefined,
  name: S extends string ? string | null | undefined : null | undefined,
  content: S extends string ? string | null | undefined : null | undefined,
): void {
  const {
    _mappings: mappings,
    _sources: sources,
    _sourcesContent: sourcesContent,
    _names: names,
    // _originalScopes: originalScopes,
  } = cast(map);
  const line = getIndex(mappings, genLine);
  const index = getColumnIndex(line, genColumn);

  if (!source) {
    if (skipable && skipSourceless(line, index)) return;
    return insert(line, index, [genColumn]);
  }

  // Sigh, TypeScript can't figure out sourceLine and sourceColumn aren't nullish if source
  // isn't nullish.
  assert<number>(sourceLine);
  assert<number>(sourceColumn);

  const sourcesIndex = put(sources, source);
  const namesIndex = name ? put(names, name) : NO_NAME;
  if (sourcesIndex === sourcesContent.length) sourcesContent[sourcesIndex] = content ?? null;
  // if (sourcesIndex === originalScopes.length) originalScopes[sourcesIndex] = [];

  if (skipable && skipSource(line, index, sourcesIndex, sourceLine, sourceColumn, namesIndex)) {
    return;
  }

  return insert(
    line,
    index,
    name
      ? [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex]
      : [genColumn, sourcesIndex, sourceLine, sourceColumn],
  );
}

function assert<T>(_val: unknown): asserts _val is T {
  // noop.
}

function getIndex<T>(arr: T[][], index: number): T[] {
  for (let i = arr.length; i <= index; i++) {
    arr[i] = [];
  }
  return arr[index];
}

function getColumnIndex(line: SourceMapSegment[], genColumn: number): number {
  let index = line.length;
  for (let i = index - 1; i >= 0; index = i--) {
    const current = line[i];
    if (genColumn >= current[COLUMN]) break;
  }
  return index;
}

function insert<T>(array: T[], index: number, value: T) {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  }
  array[index] = value;
}

function removeEmptyFinalLines(mappings: SourceMapSegment[][]) {
  const { length } = mappings;
  let len = length;
  for (let i = len - 1; i >= 0; len = i, i--) {
    if (mappings[i].length > 0) break;
  }
  if (len < length) mappings.length = len;
}

function putAll<T extends string | number>(setarr: SetArray<T>, array: T[]) {
  for (let i = 0; i < array.length; i++) put(setarr, array[i]);
}

function skipSourceless(line: SourceMapSegment[], index: number): boolean {
  // The start of a line is already sourceless, so adding a sourceless segment to the beginning
  // doesn't generate any useful information.
  if (index === 0) return true;

  const prev = line[index - 1];
  // If the previous segment is also sourceless, then adding another sourceless segment doesn't
  // genrate any new information. Else, this segment will end the source/named segment and point to
  // a sourceless position, which is useful.
  return prev.length === 1;
}

function skipSource(
  line: SourceMapSegment[],
  index: number,
  sourcesIndex: number,
  sourceLine: number,
  sourceColumn: number,
  namesIndex: number,
): boolean {
  // A source/named segment at the start of a line gives position at that genColumn
  if (index === 0) return false;

  const prev = line[index - 1];

  // If the previous segment is sourceless, then we're transitioning to a source.
  if (prev.length === 1) return false;

  // If the previous segment maps to the exact same source position, then this segment doesn't
  // provide any new position information.
  return (
    sourcesIndex === prev[SOURCES_INDEX] &&
    sourceLine === prev[SOURCE_LINE] &&
    sourceColumn === prev[SOURCE_COLUMN] &&
    namesIndex === (prev.length === 5 ? prev[NAMES_INDEX] : NO_NAME)
  );
}

function addMappingInternal<S extends string | null | undefined>(
  skipable: boolean,
  map: GenMapping,
  mapping: {
    generated: Pos;
    source: S;
    original: S extends string ? Pos : null | undefined;
    name: S extends string ? string | null | undefined : null | undefined;
    content: S extends string ? string | null | undefined : null | undefined;
  },
) {
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
      null,
    );
  }
  assert<Pos>(original);
  return addSegmentInternal(
    skipable,
    map,
    generated.line - 1,
    generated.column,
    source as string,
    original.line - 1,
    original.column,
    name,
    content,
  );
}

/*
export function addOriginalScope(
  map: GenMapping,
  data: {
    start: Pos;
    end: Pos;
    source: string;
    kind: string;
    name?: string;
    variables?: string[];
  },
): OriginalScopeInfo {
  const { start, end, source, kind, name, variables } = data;
  const {
    _sources: sources,
    _sourcesContent: sourcesContent,
    _originalScopes: originalScopes,
    _names: names,
  } = cast(map);
  const index = put(sources, source);
  if (index === sourcesContent.length) sourcesContent[index] = null;
  if (index === originalScopes.length) originalScopes[index] = [];

  const kindIndex = put(names, kind);
  const scope: OriginalScope = name
    ? [start.line - 1, start.column, end.line - 1, end.column, kindIndex, put(names, name)]
    : [start.line - 1, start.column, end.line - 1, end.column, kindIndex];
  if (variables) {
    scope.vars = variables.map((v) => put(names, v));
  }
  const len = originalScopes[index].push(scope);
  return [index, len - 1, variables];
}
*/

// Generated Ranges
/*
export function addGeneratedRange(
  map: GenMapping,
  data: {
    start: Pos;
    isScope: boolean;
    originalScope?: OriginalScopeInfo;
    callsite?: OriginalPos;
  },
): GeneratedRangeInfo {
  const { start, isScope, originalScope, callsite } = data;
  const {
    _originalScopes: originalScopes,
    _sources: sources,
    _sourcesContent: sourcesContent,
    _generatedRanges: generatedRanges,
  } = cast(map);

  const range: GeneratedRange = [
    start.line - 1,
    start.column,
    0,
    0,
    originalScope ? originalScope[0] : -1,
    originalScope ? originalScope[1] : -1,
  ];
  if (originalScope?.[2]) {
    range.bindings = originalScope[2].map(() => [[-1]]);
  }
  if (callsite) {
    const index = put(sources, callsite.source);
    if (index === sourcesContent.length) sourcesContent[index] = null;
    if (index === originalScopes.length) originalScopes[index] = [];
    range.callsite = [index, callsite.line - 1, callsite.column];
  }
  if (isScope) range.isScope = true;
  generatedRanges.push(range);

  return [range, originalScope?.[2]];
}

export function setEndPosition(range: GeneratedRangeInfo, pos: Pos) {
  range[0][2] = pos.line - 1;
  range[0][3] = pos.column;
}

export function addBinding(
  map: GenMapping,
  range: GeneratedRangeInfo,
  variable: string,
  expression: string | BindingExpressionRange,
) {
  const { _names: names } = cast(map);
  const bindings = (range[0].bindings ||= []);
  const vars = range[1];

  const index = vars!.indexOf(variable);
  const binding = getIndex(bindings, index);

  if (typeof expression === 'string') binding[0] = [put(names, expression)];
  else {
    const { start } = expression;
    binding.push([put(names, expression.expression), start.line - 1, start.column]);
  }
}
*/
