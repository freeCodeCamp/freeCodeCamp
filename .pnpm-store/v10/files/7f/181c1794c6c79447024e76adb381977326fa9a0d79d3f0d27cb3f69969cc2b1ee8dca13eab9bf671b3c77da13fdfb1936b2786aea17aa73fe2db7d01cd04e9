import SourceMap from './source-map.cts';
import type { SourceMapInput, SourceMapLoader, Options } from './types.cts';
export type { SourceMapSegment, EncodedSourceMap, EncodedSourceMap as RawSourceMap, DecodedSourceMap, SourceMapInput, SourceMapLoader, LoaderContext, Options, } from './types.cts';
export type { SourceMap };
/**
 * Traces through all the mappings in the root sourcemap, through the sources
 * (and their sourcemaps), all the way back to the original source location.
 *
 * `loader` will be called every time we encounter a source file. If it returns
 * a sourcemap, we will recurse into that sourcemap to continue the trace. If
 * it returns a falsey value, that source file is treated as an original,
 * unmodified source file.
 *
 * Pass `excludeContent` to exclude any self-containing source file content
 * from the output sourcemap.
 *
 * Pass `decodedMappings` to receive a SourceMap with decoded (instead of
 * VLQ encoded) mappings.
 */
export =       function remapping(input: SourceMapInput | SourceMapInput[], loader: SourceMapLoader, options?: boolean | Options): SourceMap;
//# sourceMappingURL=remapping.d.ts.map