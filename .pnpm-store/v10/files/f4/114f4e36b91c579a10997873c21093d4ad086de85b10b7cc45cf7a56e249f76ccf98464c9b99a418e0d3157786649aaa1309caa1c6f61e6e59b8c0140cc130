import { AnyMap, originalPositionFor, generatedPositionFor, eachMapping } from '@jridgewell/trace-mapping';
import { GenMapping, maybeAddMapping, toDecodedMap, toEncodedMap, setSourceContent } from '@jridgewell/gen-mapping';
import type { TraceMap, SourceMapInput, SectionedSourceMapInput, DecodedSourceMap } from '@jridgewell/trace-mapping';
export type { TraceMap, SourceMapInput, SectionedSourceMapInput, DecodedSourceMap };
import type { Mapping, EncodedSourceMap } from '@jridgewell/gen-mapping';
export type { Mapping, EncodedSourceMap };
export declare class SourceMapConsumer {
    private _map;
    file: TraceMap['file'];
    names: TraceMap['names'];
    sourceRoot: TraceMap['sourceRoot'];
    sources: TraceMap['sources'];
    sourcesContent: TraceMap['sourcesContent'];
    version: TraceMap['version'];
    constructor(map: ConstructorParameters<typeof AnyMap>[0], mapUrl?: ConstructorParameters<typeof AnyMap>[1]);
    static fromSourceMap(map: SourceMapGenerator, mapUrl?: Parameters<typeof AnyMap>[1]): SourceMapConsumer;
    get mappings(): string;
    originalPositionFor(needle: Parameters<typeof originalPositionFor>[1]): ReturnType<typeof originalPositionFor>;
    generatedPositionFor(originalPosition: Parameters<typeof generatedPositionFor>[1]): ReturnType<typeof generatedPositionFor>;
    allGeneratedPositionsFor(originalPosition: Parameters<typeof generatedPositionFor>[1]): ReturnType<typeof generatedPositionFor>[];
    hasContentsOfAllSources(): boolean;
    sourceContentFor(source: string, nullOnMissing?: boolean): string | null;
    eachMapping(callback: Parameters<typeof eachMapping>[1], context?: any): void;
    destroy(): void;
}
export declare class SourceMapGenerator {
    private _map;
    constructor(opts: ConstructorParameters<typeof GenMapping>[0] | GenMapping);
    static fromSourceMap(consumer: SourceMapConsumer): SourceMapGenerator;
    addMapping(mapping: Parameters<typeof maybeAddMapping>[1]): ReturnType<typeof maybeAddMapping>;
    setSourceContent(source: Parameters<typeof setSourceContent>[1], content: Parameters<typeof setSourceContent>[2]): ReturnType<typeof setSourceContent>;
    toJSON(): ReturnType<typeof toEncodedMap>;
    toString(): string;
    toDecodedMap(): ReturnType<typeof toDecodedMap>;
}
//# sourceMappingURL=source-map.d.ts.map