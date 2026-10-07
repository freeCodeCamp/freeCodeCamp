type GeneratedColumn = number;
type SourcesIndex = number;
type SourceLine = number;
type SourceColumn = number;
type NamesIndex = number;

type GeneratedLine = number;

export type SourceMapSegment =
  | [GeneratedColumn]
  | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn]
  | [GeneratedColumn, SourcesIndex, SourceLine, SourceColumn, NamesIndex];

export type ReverseSegment = [SourceColumn, GeneratedLine, GeneratedColumn];

export const COLUMN = 0;
export const SOURCES_INDEX = 1;
export const SOURCE_LINE = 2;
export const SOURCE_COLUMN = 3;
export const NAMES_INDEX = 4;

export const REV_GENERATED_LINE = 1;
export const REV_GENERATED_COLUMN = 2;
