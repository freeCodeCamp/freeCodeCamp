import type { SourceMapInput } from '@jridgewell/trace-mapping';
import type { DecodedSourceMap, EncodedSourceMap, Pos, Mapping } from './types';
export type { DecodedSourceMap, EncodedSourceMap, Mapping };
export type Options = {
    file?: string | null;
    sourceRoot?: string | null;
};
/**
 * Provides the state to generate a sourcemap.
 */
export declare class GenMapping {
    private _names;
    private _sources;
    private _sourcesContent;
    private _mappings;
    private _ignoreList;
    file: string | null | undefined;
    sourceRoot: string | null | undefined;
    constructor({ file, sourceRoot }?: Options);
}
/**
 * A low-level API to associate a generated position with an original source position. Line and
 * column here are 0-based, unlike `addMapping`.
 */
export declare function addSegment(map: GenMapping, genLine: number, genColumn: number, source?: null, sourceLine?: null, sourceColumn?: null, name?: null, content?: null): void;
export declare function addSegment(map: GenMapping, genLine: number, genColumn: number, source: string, sourceLine: number, sourceColumn: number, name?: null, content?: string | null): void;
export declare function addSegment(map: GenMapping, genLine: number, genColumn: number, source: string, sourceLine: number, sourceColumn: number, name: string, content?: string | null): void;
/**
 * A high-level API to associate a generated position with an original source position. Line is
 * 1-based, but column is 0-based, due to legacy behavior in `source-map` library.
 */
export declare function addMapping(map: GenMapping, mapping: {
    generated: Pos;
    source?: null;
    original?: null;
    name?: null;
    content?: null;
}): void;
export declare function addMapping(map: GenMapping, mapping: {
    generated: Pos;
    source: string;
    original: Pos;
    name?: null;
    content?: string | null;
}): void;
export declare function addMapping(map: GenMapping, mapping: {
    generated: Pos;
    source: string;
    original: Pos;
    name: string;
    content?: string | null;
}): void;
/**
 * Same as `addSegment`, but will only add the segment if it generates useful information in the
 * resulting map. This only works correctly if segments are added **in order**, meaning you should
 * not add a segment with a lower generated line/column than one that came before.
 */
export declare const maybeAddSegment: typeof addSegment;
/**
 * Same as `addMapping`, but will only add the mapping if it generates useful information in the
 * resulting map. This only works correctly if mappings are added **in order**, meaning you should
 * not add a mapping with a lower generated line/column than one that came before.
 */
export declare const maybeAddMapping: typeof addMapping;
/**
 * Adds/removes the content of the source file to the source map.
 */
export declare function setSourceContent(map: GenMapping, source: string, content: string | null): void;
export declare function setIgnore(map: GenMapping, source: string, ignore?: boolean): void;
/**
 * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
export declare function toDecodedMap(map: GenMapping): DecodedSourceMap;
/**
 * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
export declare function toEncodedMap(map: GenMapping): EncodedSourceMap;
/**
 * Constructs a new GenMapping, using the already present mappings of the input.
 */
export declare function fromMap(input: SourceMapInput): GenMapping;
/**
 * Returns an array of high-level mapping objects for every recorded segment, which could then be
 * passed to the `source-map` library.
 */
export declare function allMappings(map: GenMapping): Mapping[];
