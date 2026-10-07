import { Line, Tokens, BlockMarkers, Markers } from '../primitives.js';
import { seedTokens, splitSpace, splitCR } from '../util.js';

export interface Options {
  startLine: number;
  markers: BlockMarkers;
}

export type Parser = (source: string) => Line[] | null;

export default function getParser({
  startLine = 0,
  markers = Markers,
}: Partial<Options> = {}): Parser {
  let block: Line[] | null = null;
  let num = startLine;

  return function parseSource(source: string): Line[] | null {
    let rest = source;
    const tokens: Tokens = seedTokens();

    [tokens.lineEnd, rest] = splitCR(rest);
    [tokens.start, rest] = splitSpace(rest);

    if (
      block === null &&
      rest.startsWith(markers.start) &&
      !rest.startsWith(markers.nostart)
    ) {
      block = [];
      tokens.delimiter = rest.slice(0, markers.start.length);
      rest = rest.slice(markers.start.length);
      [tokens.postDelimiter, rest] = splitSpace(rest);
    }

    if (block === null) {
      num++;
      return null;
    }

    const isClosed = rest.trimRight().endsWith(markers.end);

    if (
      tokens.delimiter === '' &&
      rest.startsWith(markers.delim) &&
      !rest.startsWith(markers.end)
    ) {
      tokens.delimiter = markers.delim;
      rest = rest.slice(markers.delim.length);
      [tokens.postDelimiter, rest] = splitSpace(rest);
    }

    if (isClosed) {
      const trimmed = rest.trimRight();
      tokens.end = rest.slice(trimmed.length - markers.end.length);
      rest = trimmed.slice(0, -markers.end.length);
    }

    tokens.description = rest;
    block.push({ number: num, source, tokens });
    num++;

    if (isClosed) {
      const result = block.slice();
      block = null;
      return result;
    }

    return null;
  };
}
