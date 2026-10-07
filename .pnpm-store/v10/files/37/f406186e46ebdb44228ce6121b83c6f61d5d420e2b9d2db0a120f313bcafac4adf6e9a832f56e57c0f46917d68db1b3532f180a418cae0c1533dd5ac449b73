import { Block, Tokens } from '../primitives.js';
import { isSpace } from '../util.js';

interface Width {
  line: number;
  start: number;
  delimiter: number;
  postDelimiter: number;
  tag: number;
  postTag: number;
  name: number;
  postName: number;
  type: number;
  postType: number;
  description: number;
  end: number;
  lineEnd: number;
}

const zeroWidth = {
  line: 0,
  start: 0,
  delimiter: 0,
  postDelimiter: 0,
  tag: 0,
  postTag: 0,
  name: 0,
  postName: 0,
  type: 0,
  postType: 0,
  description: 0,
  end: 0,
  lineEnd: 0,
};

const headers = { lineEnd: 'CR' };

const fields = Object.keys(zeroWidth);

const repr = (x: string) => (isSpace(x) ? `{${x.length}}` : x);

const frame = (line: string[]) => '|' + line.join('|') + '|';

const align = (width: Width, tokens: Tokens): string[] =>
  Object.keys(tokens).map((k) => repr(tokens[k]).padEnd(width[k]));

export default function inspect({ source }: Block): string {
  if (source.length === 0) return '';

  const width: Width = { ...zeroWidth };

  for (const f of fields) width[f] = (headers[f] ?? f).length;
  for (const { number, tokens } of source) {
    width.line = Math.max(width.line, number.toString().length);
    for (const k in tokens)
      width[k] = Math.max(width[k], repr(tokens[k]).length);
  }

  const lines: string[][] = [[], []];
  for (const f of fields) lines[0].push((headers[f] ?? f).padEnd(width[f]));
  for (const f of fields) lines[1].push('-'.padEnd(width[f], '-'));
  for (const { number, tokens } of source) {
    const line = number.toString().padStart(width.line);
    lines.push([line, ...align(width, tokens)]);
  }

  return lines.map(frame).join('\n');
}
