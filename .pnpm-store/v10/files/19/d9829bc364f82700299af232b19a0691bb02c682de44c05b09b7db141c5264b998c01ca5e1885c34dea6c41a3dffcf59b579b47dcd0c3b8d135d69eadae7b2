import type { SourceMapSegment } from './sourcemap-segment.mts';
export interface SourceMapV3 {
    file?: string | null;
    names: readonly string[];
    sourceRoot?: string;
    sources: readonly (string | null)[];
    sourcesContent?: readonly (string | null)[];
    version: 3;
    ignoreList?: readonly number[];
}
export interface EncodedSourceMap extends SourceMapV3 {
    mappings: string;
}
export interface DecodedSourceMap extends SourceMapV3 {
    mappings: readonly SourceMapSegment[][];
}
export interface Pos {
    line: number;
    column: number;
}
export interface OriginalPos extends Pos {
    source: string;
}
export interface BindingExpressionRange {
    start: Pos;
    expression: string;
}
export type Mapping = {
    generated: Pos;
    source: undefined;
    original: undefined;
    name: undefined;
} | {
    generated: Pos;
    source: string;
    original: Pos;
    name: string;
} | {
    generated: Pos;
    source: string;
    original: Pos;
    name: undefined;
};
//# sourceMappingURL=types.d.ts.map