// import type { GeneratedRange, OriginalScope } from '@jridgewell/sourcemap-codec';
import type { SourceMapSegment } from './sourcemap-segment';

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
  // originalScopes: string[];
  // generatedRanges: string;
}

export interface DecodedSourceMap extends SourceMapV3 {
  mappings: readonly SourceMapSegment[][];
  // originalScopes: readonly OriginalScope[][];
  // generatedRanges: readonly GeneratedRange[];
}

export interface Pos {
  line: number; // 1-based
  column: number; // 0-based
}

export interface OriginalPos extends Pos {
  source: string;
}

export interface BindingExpressionRange {
  start: Pos;
  expression: string;
}

// export type OriginalScopeInfo = [number, number, string[] | undefined];
// export type GeneratedRangeInfo = [GeneratedRange, string[] | undefined];

export type Mapping =
  | {
      generated: Pos;
      source: undefined;
      original: undefined;
      name: undefined;
    }
  | {
      generated: Pos;
      source: string;
      original: Pos;
      name: string;
    }
  | {
      generated: Pos;
      source: string;
      original: Pos;
      name: undefined;
    };
