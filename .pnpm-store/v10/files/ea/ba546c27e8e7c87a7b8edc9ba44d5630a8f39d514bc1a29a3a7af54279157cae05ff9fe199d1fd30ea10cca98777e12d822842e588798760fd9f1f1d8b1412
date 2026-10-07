import { comma, decodeInteger, encodeInteger, hasMoreVlq, semicolon } from './vlq';
import { StringWriter, StringReader } from './strings';

export {
  decodeOriginalScopes,
  encodeOriginalScopes,
  decodeGeneratedRanges,
  encodeGeneratedRanges,
} from './scopes';
export type { OriginalScope, GeneratedRange, CallSite, BindingExpressionRange } from './scopes';

export type SourceMapSegment =
  | [number]
  | [number, number, number, number]
  | [number, number, number, number, number];
export type SourceMapLine = SourceMapSegment[];
export type SourceMapMappings = SourceMapLine[];

export function decode(mappings: string): SourceMapMappings {
  const { length } = mappings;
  const reader = new StringReader(mappings);
  const decoded: SourceMapMappings = [];
  let genColumn = 0;
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;

  do {
    const semi = reader.indexOf(';');
    const line: SourceMapLine = [];
    let sorted = true;
    let lastCol = 0;
    genColumn = 0;

    while (reader.pos < semi) {
      let seg: SourceMapSegment;

      genColumn = decodeInteger(reader, genColumn);
      if (genColumn < lastCol) sorted = false;
      lastCol = genColumn;

      if (hasMoreVlq(reader, semi)) {
        sourcesIndex = decodeInteger(reader, sourcesIndex);
        sourceLine = decodeInteger(reader, sourceLine);
        sourceColumn = decodeInteger(reader, sourceColumn);

        if (hasMoreVlq(reader, semi)) {
          namesIndex = decodeInteger(reader, namesIndex);
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex];
        } else {
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn];
        }
      } else {
        seg = [genColumn];
      }

      line.push(seg);
      reader.pos++;
    }

    if (!sorted) sort(line);
    decoded.push(line);
    reader.pos = semi + 1;
  } while (reader.pos <= length);

  return decoded;
}

function sort(line: SourceMapSegment[]) {
  line.sort(sortComparator);
}

function sortComparator(a: SourceMapSegment, b: SourceMapSegment): number {
  return a[0] - b[0];
}

export function encode(decoded: SourceMapMappings): string;
export function encode(decoded: Readonly<SourceMapMappings>): string;
export function encode(decoded: Readonly<SourceMapMappings>): string {
  const writer = new StringWriter();
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;

  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    if (i > 0) writer.write(semicolon);
    if (line.length === 0) continue;

    let genColumn = 0;

    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (j > 0) writer.write(comma);

      genColumn = encodeInteger(writer, segment[0], genColumn);

      if (segment.length === 1) continue;
      sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex);
      sourceLine = encodeInteger(writer, segment[2], sourceLine);
      sourceColumn = encodeInteger(writer, segment[3], sourceColumn);

      if (segment.length === 4) continue;
      namesIndex = encodeInteger(writer, segment[4], namesIndex);
    }
  }

  return writer.flush();
}
