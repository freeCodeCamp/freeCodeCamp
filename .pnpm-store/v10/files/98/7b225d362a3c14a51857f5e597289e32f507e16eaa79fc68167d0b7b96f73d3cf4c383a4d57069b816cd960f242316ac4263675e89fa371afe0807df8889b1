import { COLUMN, SOURCES_INDEX, SOURCE_LINE, SOURCE_COLUMN } from './sourcemap-segment';
import { sortComparator } from './sort';

import type { ReverseSegment, SourceMapSegment } from './sourcemap-segment';

export type Source = ReverseSegment[][];

// Rebuilds the original source files, with mappings that are ordered by source line/column instead
// of generated line/column.
export default function buildBySources(
  decoded: readonly SourceMapSegment[][],
  memos: unknown[],
): Source[] {
  const sources: Source[] = memos.map(() => []);

  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    for (let j = 0; j < line.length; j++) {
      const seg = line[j];
      if (seg.length === 1) continue;

      const sourceIndex = seg[SOURCES_INDEX];
      const sourceLine = seg[SOURCE_LINE];
      const sourceColumn = seg[SOURCE_COLUMN];

      const source = sources[sourceIndex];
      const segs = (source[sourceLine] ||= []);
      segs.push([sourceColumn, i, seg[COLUMN]]);
    }
  }

  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    for (let j = 0; j < source.length; j++) {
      const line = source[j];
      if (line) line.sort(sortComparator);
    }
  }

  return sources;
}
