import type { SourceMapSegment } from './sourcemap-segment.cts';
import type { SourceMapV3, DecodedSourceMap, EncodedSourceMap, InvalidOriginalMapping, OriginalMapping, InvalidGeneratedMapping, GeneratedMapping, SourceMapInput, Needle, SourceNeedle, SourceMap, EachMapping, Ro } from './types.cts';
export type { SourceMapSegment } from './sourcemap-segment.cts';
export type { SourceMap, DecodedSourceMap, EncodedSourceMap, Section, SectionedSourceMap, SourceMapV3, Bias, EachMapping, GeneratedMapping, InvalidGeneratedMapping, InvalidOriginalMapping, Needle, OriginalMapping, OriginalMapping as Mapping, SectionedSourceMapInput, SourceMapInput, SourceNeedle, XInput, EncodedSourceMapXInput, DecodedSourceMapXInput, SectionedSourceMapXInput, SectionXInput, } from './types.cts';
export declare const LEAST_UPPER_BOUND = -1;
export declare const GREATEST_LOWER_BOUND = 1;
export { FlattenMap, FlattenMap as AnyMap } from './flatten-map.cts';
export declare class TraceMap implements SourceMap {
    version: SourceMapV3['version'];
    file: SourceMapV3['file'];
    names: SourceMapV3['names'];
    sourceRoot: SourceMapV3['sourceRoot'];
    sources: SourceMapV3['sources'];
    sourcesContent: SourceMapV3['sourcesContent'];
    ignoreList: SourceMapV3['ignoreList'];
    resolvedSources: string[];
    private _encoded;
    private _decoded;
    private _decodedMemo;
    private _bySources;
    private _bySourceMemos;
    constructor(map: Ro<SourceMapInput>, mapUrl?: string | null);
}
/**
 * Returns the encoded (VLQ string) form of the SourceMap's mappings field.
 */
export declare function encodedMappings(map: TraceMap): EncodedSourceMap['mappings'];
/**
 * Returns the decoded (array of lines of segments) form of the SourceMap's mappings field.
 */
export declare function decodedMappings(map: TraceMap): Readonly<DecodedSourceMap['mappings']>;
/**
 * A low-level API to find the segment associated with a generated line/column (think, from a
 * stack trace). Line and column here are 0-based, unlike `originalPositionFor`.
 */
export declare function traceSegment(map: TraceMap, line: number, column: number): Readonly<SourceMapSegment> | null;
/**
 * A higher-level API to find the source/line/column associated with a generated line/column
 * (think, from a stack trace). Line is 1-based, but column is 0-based, due to legacy behavior in
 * `source-map` library.
 */
export declare function originalPositionFor(map: TraceMap, needle: Needle): OriginalMapping | InvalidOriginalMapping;
/**
 * Finds the generated line/column position of the provided source/line/column source position.
 */
export declare function generatedPositionFor(map: TraceMap, needle: SourceNeedle): GeneratedMapping | InvalidGeneratedMapping;
/**
 * Finds all generated line/column positions of the provided source/line/column source position.
 */
export declare function allGeneratedPositionsFor(map: TraceMap, needle: SourceNeedle): GeneratedMapping[];
/**
 * Iterates each mapping in generated position order.
 */
export declare function eachMapping(map: TraceMap, cb: (mapping: EachMapping) => void): void;
/**
 * Retrieves the source content for a particular source, if its found. Returns null if not.
 */
export declare function sourceContentFor(map: TraceMap, source: string): string | null;
/**
 * Determines if the source is marked to ignore by the source map.
 */
export declare function isIgnored(map: TraceMap, source: string): boolean;
/**
 * A helper that skips sorting of the input map's mappings array, which can be expensive for larger
 * maps.
 */
export declare function presortedDecodedMap(map: DecodedSourceMap, mapUrl?: string): TraceMap;
/**
 * Returns a sourcemap object (with decoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
export declare function decodedMap(map: TraceMap): Omit<DecodedSourceMap, 'mappings'> & {
    mappings: readonly SourceMapSegment[][];
};
/**
 * Returns a sourcemap object (with encoded mappings) suitable for passing to a library that expects
 * a sourcemap, or to JSON.stringify.
 */
export declare function encodedMap(map: TraceMap): EncodedSourceMap;
//# sourceMappingURL=trace-mapping.d.ts.map