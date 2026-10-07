import type { GenMapping } from '@jridgewell/gen-mapping';
import type { DecodedSourceMap, EncodedSourceMap, Options } from './types.mts';
/**
 * A SourceMap v3 compatible sourcemap, which only includes fields that were
 * provided to it.
 */
export default class SourceMap {
    file?: string | null;
    mappings: EncodedSourceMap['mappings'] | DecodedSourceMap['mappings'];
    sourceRoot?: string;
    names: string[];
    sources: (string | null)[];
    sourcesContent?: (string | null)[];
    version: 3;
    ignoreList: number[] | undefined;
    constructor(map: GenMapping, options: Options);
    toString(): string;
}
//# sourceMappingURL=source-map.d.ts.map