import { Transform } from './index.js';
import { Block, Line } from '../primitives.js';
import { rewireSource } from '../util.js';

const order = [
  'end',
  'description',
  'postType',
  'type',
  'postName',
  'name',
  'postTag',
  'tag',
  'postDelimiter',
  'delimiter',
  'start',
];

export type Ending = 'LF' | 'CRLF';

export default function crlf(ending: Ending): Transform {
  function update(line: Line): Line {
    return {
      ...line,
      tokens: { ...line.tokens, lineEnd: ending === 'LF' ? '' : '\r' },
    };
  }

  return ({ source, ...fields }: Block): Block =>
    rewireSource({ ...fields, source: source.map(update) });
}
