import type { MapSource as MapSourceType } from './source-map-tree.cts';
import type { SourceMapInput, SourceMapLoader } from './types.cts';
/**
 * Recursively builds a tree structure out of sourcemap files, with each node
 * being either an `OriginalSource` "leaf" or a `SourceMapTree` composed of
 * `OriginalSource`s and `SourceMapTree`s.
 *
 * Every sourcemap is composed of a collection of source files and mappings
 * into locations of those source files. When we generate a `SourceMapTree` for
 * the sourcemap, we attempt to load each source file's own sourcemap. If it
 * does not have an associated sourcemap, it is considered an original,
 * unmodified source file.
 */
export =       function buildSourceMapTree(input: SourceMapInput | SourceMapInput[], loader: SourceMapLoader): MapSourceType;
//# sourceMappingURL=build-source-map-tree.d.ts.map