import { Block, Line, Problem, BlockMarkers, Markers } from '../primitives.js';
import { splitLines } from '../util.js';
import blockParser from './block-parser.js';
import sourceParser from './source-parser.js';
import specParser from './spec-parser.js';
import { Tokenizer } from './tokenizers/index.js';
import tokenizeTag from './tokenizers/tag.js';
import tokenizeType from './tokenizers/type.js';
import tokenizeName from './tokenizers/name.js';
import tokenizeDescription, {
  getJoiner as getDescriptionJoiner,
} from './tokenizers/description.js';

export interface Options {
  // start count for source line numbers
  startLine: number;
  // escaping chars sequence marking wrapped content literal for the parser
  fence: string;
  // block and comment description compaction strategy
  spacing: 'compact' | 'preserve';
  // comment description markers
  markers: BlockMarkers;
  // tokenizer functions extracting name, type, and description out of tag, see Tokenizer
  tokenizers: Tokenizer[];
}

export type Parser = (source: string) => Block[];

export default function getParser({
  startLine = 0,
  fence = '```',
  spacing = 'compact',
  markers = Markers,
  tokenizers = [
    tokenizeTag(),
    tokenizeType(spacing),
    tokenizeName(),
    tokenizeDescription(spacing),
  ],
}: Partial<Options> = {}): Parser {
  if (startLine < 0 || startLine % 1 > 0) throw new Error('Invalid startLine');

  const parseSource = sourceParser({ startLine, markers });
  const parseBlock = blockParser({ fence });
  const parseSpec = specParser({ tokenizers });
  const joinDescription = getDescriptionJoiner(spacing);

  return function (source: string): Block[] {
    const blocks: Block[] = [];
    for (const line of splitLines(source)) {
      const lines = parseSource(line);

      if (lines === null) continue;

      const sections = parseBlock(lines);
      const specs = sections.slice(1).map(parseSpec);

      blocks.push({
        description: joinDescription(sections[0], markers),
        tags: specs,
        source: lines,
        problems: specs.reduce(
          (acc: Problem[], spec) => acc.concat(spec.problems),
          []
        ),
      });
    }
    return blocks;
  };
}
