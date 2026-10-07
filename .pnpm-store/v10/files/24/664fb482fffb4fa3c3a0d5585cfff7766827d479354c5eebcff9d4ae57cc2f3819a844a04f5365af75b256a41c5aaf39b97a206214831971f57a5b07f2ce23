type GeneratedColumn = number;
type SourcesIndex = number;
type SourceLine = number;
type SourceColumn = number;
type NamesIndex = number;
type SourceMapSegment = [GeneratedColumn] | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn] | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn, NamesIndex];

interface SourceMapV3 {
    file?: string | null;
    names: string[];
    sourceRoot?: string;
    sources: (string | null)[];
    sourcesContent?: (string | null)[];
    version: 3;
    ignoreList?: number[];
}
interface EncodedSourceMap extends SourceMapV3 {
    mappings: string;
}
interface DecodedSourceMap extends SourceMapV3 {
    mappings: SourceMapSegment[][];
}
type XInput = {
    x_google_ignoreList?: SourceMapV3['ignoreList'];
};
type EncodedSourceMapXInput = EncodedSourceMap & XInput;
type DecodedSourceMapXInput = DecodedSourceMap & XInput;
type SourceMapInput = string | EncodedSourceMapXInput | DecodedSourceMapXInput | TraceMap;
declare abstract class SourceMap {
    version: SourceMapV3['version'];
    file: SourceMapV3['file'];
    names: SourceMapV3['names'];
    sourceRoot: SourceMapV3['sourceRoot'];
    sources: SourceMapV3['sources'];
    sourcesContent: SourceMapV3['sourcesContent'];
    resolvedSources: SourceMapV3['sources'];
    ignoreList: SourceMapV3['ignoreList'];
}

declare class TraceMap implements SourceMap {
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
    constructor(map: SourceMapInput, mapUrl?: string | null);
}

export type { DecodedSourceMap as D, EncodedSourceMap as E, SourceMapInput as S };
