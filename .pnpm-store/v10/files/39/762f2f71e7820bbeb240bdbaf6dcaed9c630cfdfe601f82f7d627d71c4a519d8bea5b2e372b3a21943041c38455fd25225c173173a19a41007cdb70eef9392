import { Block, Tokens } from '../primitives.js';

export type Stringifier = (block: Block) => string;

function join(tokens: Tokens): string {
  return (
    tokens.start +
    tokens.delimiter +
    tokens.postDelimiter +
    tokens.tag +
    tokens.postTag +
    tokens.type +
    tokens.postType +
    tokens.name +
    tokens.postName +
    tokens.description +
    tokens.end +
    tokens.lineEnd
  );
}

export default function getStringifier(): Stringifier {
  return (block: Block): string =>
    block.source.map(({ tokens }) => join(tokens)).join('\n');
}
