import { GenMapping } from '@jridgewell/gen-mapping';
import type { TraceMap } from '@jridgewell/trace-mapping';
export declare type SourceMapSegmentObject = {
    column: number;
    line: number;
    name: string;
    source: string;
    content: string | null;
};
export declare type OriginalSource = {
    map: null;
    sources: Sources[];
    source: string;
    content: string | null;
};
export declare type MapSource = {
    map: TraceMap;
    sources: Sources[];
    source: string;
    content: null;
};
export declare type Sources = OriginalSource | MapSource;
/**
 * MapSource represents a single sourcemap, with the ability to trace mappings into its child nodes
 * (which may themselves be SourceMapTrees).
 */
export declare function MapSource(map: TraceMap, sources: Sources[]): MapSource;
/**
 * A "leaf" node in the sourcemap tree, representing an original, unmodified source file. Recursive
 * segment tracing ends at the `OriginalSource`.
 */
export declare function OriginalSource(source: string, content: string | null): OriginalSource;
/**
 * traceMappings is only called on the root level SourceMapTree, and begins the process of
 * resolving each mapping in terms of the original source files.
 */
export declare function traceMappings(tree: MapSource): GenMapping;
/**
 * originalPositionFor is only called on children SourceMapTrees. It recurses down into its own
 * child SourceMapTrees, until we find the original source map.
 */
export declare function originalPositionFor(source: Sources, line: number, column: number, name: string): SourceMapSegmentObject | null;
